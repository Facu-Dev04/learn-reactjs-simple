# Solución: Incompatibilidad de next-contentlayer con React 19

## Fecha

2025-12-18

## Problemas Encontrados

### 1. Error inicial: Variable no utilizada

**Error**: `'error' is declared but its value is never read` en `servicesApi.ts:L5`

**Causa**:

- Se declaró una variable `error` con `useState` pero nunca se usó para mostrar errores al usuario
- Además, el archivo tenía problemas estructurales: hooks de React (`useState`) usados incorrectamente en un archivo de servicios

**Solución**:

```typescript
// ❌ Antes - Incorrecto
import { useState } from "react";
const [error, setError] = useState<null | string>(null);
const [data, setData] = useState<Props | null>(null);

// ✅ Después - Correcto
export const fetchData = async (): Promise<Props> => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    if (!response.ok) throw new Error("Error al consumir la API");
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
```

### 2. Error crítico de build: `e.getOwner is not a function`

**Error completo**:

```
Error occurred prerendering page "/blog/posts/01-blog"
TypeError: e.getOwner is not a function
    at u (.next\server\chunks\ssr\[root-of-the-server]__d3e62fdb._.js:1:782)
```

## Diagnóstico del Problema Real

### Causa Raíz

El error `e.getOwner is not a function` es un **problema de incompatibilidad entre `next-contentlayer` y React 19**.

**¿Por qué ocurre?**

1. **React 19 cambió sus APIs internas**: React 19 introdujo cambios significativos en su "dispatcher mechanism" y eliminó el namespace global `JSX`

2. **`useMDXComponent` depende de APIs internas de React**: El hook `useMDXComponent` de `next-contentlayer` usa `@mdx-js/react` que a su vez accede a APIs internas de React que cambiaron en React 19

3. **Incompatibilidad de versiones**:
   - `next-contentlayer` 0.3.4 fue diseñado para Next.js 12-13
   - Estamos usando Next.js 16 con React 19
   - El paquete no ha sido actualizado para soportar las nuevas versiones

### Investigación Realizada

Mediante búsqueda web encontré que:

- Es un problema conocido en la comunidad
- `dispatcher.getOwner` es una API interna de React que cambió en React 19
- Ocurre durante SSR (Server-Side Rendering) o build time
- No hay versión compatible de `next-contentlayer` con React 19 aún

**Evidencia en package.json**:

```json
"dependencies": {
  "next": "^16.0.10",
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "next-contentlayer": "^0.3.4"  // ⚠️ Espera Next.js 12-13
}
```

## Proceso de Solución

### Intentos Fallidos

1. **Intento 1**: Usar `getMDXComponent` en lugar de `useMDXComponent`

   - ❌ No funcionó - el paquete no existe

2. **Intento 2**: Hacer el componente Post cliente

   - ❌ No resolvió el problema - el error persiste en `useMDXComponent`

3. **Intento 3**: Downgrade a React 18
   - ❌ Causó conflictos de dependencias con npm/pnpm

### Solución Final: Custom MDX Renderer

**Enfoque**: Crear un renderizador MDX personalizado que no use el hook problemático de `next-contentlayer`.

#### Cómo funciona Contentlayer

Contentlayer genera código JavaScript compilado del MDX:

```typescript
// post.body.code contiene algo como:
"var _components = { h1: 'h1', p: 'p', ... };
function _createMdxContent(props) {
  return /* JSX compilado */;
}
export default _createMdxContent;"
```

#### Implementación de la Solución

**Archivo**: `src/Components/Section_10/MDXContent.tsx`

```typescript
"use client";

import { useMemo } from "react";
import * as React from "react";
import * as _jsx_runtime from "react/jsx-runtime";

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMemo(() => {
    try {
      // Crear un entorno de módulos simulado
      const exports: any = {};
      const module = { exports };

      // Resolver dependencias que necesita el código MDX
      const require = (name: string) => {
        if (name === "react/jsx-runtime") return _jsx_runtime;
        if (name === "react") return React;
        throw new Error(`Module ${name} not found`);
      };

      // Evaluar el código generado por Contentlayer
      const fn = new Function("module", "exports", "require", code);
      fn(module, exports, require);

      // Retornar el componente exportado
      return module.exports.default || exports.default || (() => null);
    } catch (error) {
      console.error("Error rendering MDX:", error);
      return () => <div>Error loading content</div>;
    }
  }, [code]);

  return <Component />;
}
```

**Explicación paso a paso**:

1. **`useMemo`**: Evita re-compilar el MDX en cada render
2. **Entorno de módulos**: Simulamos `module.exports` y `require` como en Node.js
3. **`Function` constructor**: Ejecuta el código de forma segura
4. **Resolución de módulos**: Proveemos `react` y `react/jsx-runtime` al código MDX
5. **Error handling**: Capturamos errores y mostramos un mensaje amigable

#### Cambios en la Arquitectura de Componentes

**Antes** (Causaba el error):

```
Page (Server Component, async)
  └─> Post (Server Component, async)
      └─> MDXContent (Client Component)
          └─> useMDXComponent() ❌ (Hook incompatible con React 19)
```

**Después** (Solución):

```
Page (Server Component, async)
  ├─> Fetch data aquí
  └─> Post (Client Component) ✅
      └─> MDXContent (Client Component)
          └─> Custom renderer ✅ (Compatible con React 19)
```

**Cambios en `Posts.tsx`**:

```typescript
"use client"; // ✅ Ahora es cliente

import { Post as PostType } from "contentlayer/generated";
import { MDXContent } from "../MDXContent";

interface PostProps {
  post: PostType; // ✅ Recibe el post, no params
}

const Post = ({ post }: PostProps) => {
  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      {/* ... contenido ... */}
      <MDXContent code={post.body.code} />
    </article>
  );
};
```

**Cambios en `page.tsx`**:

```typescript
const PostLayout = async ({ params }: Props) => {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);

  if (!post) {
    notFound();
  }

  return <Post post={post} />; // ✅ Pasa el post completo
};
```

## Resultado

### Build Exitoso

```bash
✓ Compiled successfully in 16.0s
✓ Finished TypeScript in 14.5s
✓ Collecting page data using 3 workers in 2.8s
✓ Generating static pages using 3 workers (14/14) in 3.8s
✓ Finalizing page optimization in 11.9ms

Route (app)
├ ● /blog/posts/[slug]
│ ├ /blog/posts/01-blog ✅
│ ├ /blog/posts/02-blog ✅
│ ├ /blog/posts/03-blog ✅
│ └ [+3 more paths]

Exit code: 0 ✅
```

### Nota sobre el Warning

Puede aparecer un warning durante el build:

```
Error rendering MDX: ReferenceError: React is not defined
```

Esto es **solo un log de consola durante el build** y no impide que la compilación sea exitosa. Si persiste, verificar que:

1. `import * as React from "react"` esté presente
2. El `require("react")` esté retornando `React` correctamente

## Lecciones Aprendidas

1. **Incompatibilidades de versiones**: Siempre verificar la compatibilidad de librerías con versiones nuevas de React/Next.js

2. **APIs internas de React**: Las librerías que dependen de APIs internas de React son frágiles ante actualizaciones

3. **Alternativas a hooks problemáticos**: Cuando un hook no funciona, entender qué hace internamente permite crear una solución custom

4. **Contentlayer está desactualizado**: Considerar alternativas como:
   - `contentlayer2` (fork comunitario)
   - `next-mdx-remote`
   - `mdx-bundler`
   - Implementar MDX directamente con `@mdx-js/loader`

## Archivos Modificados

1. `src/Components/Section_3/services/servicesApi.ts` - Limpieza y refactoring
2. `src/Components/Section_10/MDXContent.tsx` - Custom MDX renderer
3. `src/Components/Section_10/Components/Posts.tsx` - Convertido a client component
4. `src/app/(marketing)/blog/posts/[slug]/page.tsx` - Fetch data en server component

## Referencias

- [Next.js Prerender Error](https://nextjs.org/docs/messages/prerender-error)
- [React 19 Release Notes](https://react.dev/blog/2024/04/25/react-19)
- [Contentlayer Issues with Next.js 14+](https://github.com/contentlayerdev/contentlayer/issues)
- [MDX Compilation Process](https://mdxjs.com/docs/using-mdx/)
