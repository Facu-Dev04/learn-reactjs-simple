# Blog con MDX y ContentLayer

## Markdown

- Markdown es un lenguaje de marcado ligero que se utiliza para formatear texto en una forma legible y estructurada.

## MDX

- MDX es un superset de Markdown que permite la integración de JSX, lo que permite la creación de componentes React dentro de los archivos Markdown.

## ContentLayer

- ContentLayer es una plataforma que permite la creación de contenido en una forma estructurada y organizada.

## Configuración de ContentLayer en Next.js

### Problemas Iniciales y Soluciones

Inicialmente, Contentlayer **no funcionaba** correctamente en el proyecto. Aquí están los problemas encontrados y las soluciones implementadas:

### 1. **Conflicto de Módulos ES vs CommonJS**

**Problema:** El proyecto estaba configurado como ES Module (`"type": "module"` en `package.json`), pero Contentlayer requería configuraciones específicas.

**Solución:**

- Eliminamos `"type": "module"` del `package.json`
- Convertimos archivos de configuración de `.mjs` a `.js`:
  - `next.config.mjs` → `next.config.js`
  - `postcss.config.mjs` → `postcss.config.js`

### 2. **Configuración de Turbopack vs Webpack**

**Problema:** Next.js 15 usa Turbopack por defecto, pero Contentlayer requiere Webpack.

**Solución:** Modificar el script de desarrollo en `package.json`:

```json
{
  "scripts": {
    "dev": "next dev --turbo=false"
  }
}
```

### 3. **Configuración de next.config.js**

**Archivo:** `next.config.js`

```javascript
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tus otras configuraciones...
};

module.exports = withContentlayer(nextConfig);
```

### 4. **Configuración de contentlayer.config.ts**

**Archivo:** `contentlayer.config.ts`

```typescript
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "Posts",
  documentTypes: [Post],
});
```

### 5. **Configuración de tsconfig.json**

**Problema:** Las rutas generadas por Contentlayer no estaban accesibles.

**Solución:** Agregar paths en `compilerOptions`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
  },
  "include": [".contentlayer/generated"]
}
```

### 6. **Problema de Case Sensitivity**

**Problema:** TypeScript detectó que el directorio real era `src/Components` (con C mayúscula) pero los imports usaban `@/components` (con c minúscula).

**Error:**

```
Already included file name differs from file name only in casing.
```

**Solución:** Actualizar todos los imports para que coincidan con el nombre real del directorio:

```typescript
// ❌ Incorrecto
import { MDXContent } from "@/components/MDXContent";

// ✅ Correcto
import { MDXContent } from "@/Components/MDXContent";
```

### 7. **Estructura de Archivos MDX**

Los archivos `.mdx` deben estar en el directorio especificado en `contentlayer.config.ts` (`Posts/`):

```
📁 Posts/
  📄 01-primer-post.mdx
  📄 02-segundo-post.mdx
```

Formato de cada archivo MDX:

```mdx
---
title: "Título del Post"
date: "2025-12-17"
description: "Descripción breve del post"
---

# Contenido del post

Tu contenido aquí...
```

### 8. **Componente MDXContent**

Crear un componente para renderizar el contenido MDX:

**Archivo:** `src/Components/MDXContent.tsx`

```typescript
import { useMDXComponent } from "next-contentlayer/hooks";

export const MDXContent = ({ code }: { code: string }) => {
  const Component = useMDXComponent(code);
  return <Component />;
};
```

### Verificación Final

Una vez aplicadas todas estas configuraciones:

1. ✅ Contentlayer genera archivos en `.contentlayer/generated`
2. ✅ Los posts se pueden importar con `import { allPosts } from "contentlayer/generated"`
3. ✅ El servidor de desarrollo corre sin errores con `npm run dev`
4. ✅ Los archivos TypeScript reconocen los tipos generados por Contentlayer


## Hooks usados de Contentlayer

- `useMDXComponent` este mismo hooks nos sirve para renderizar el contenido de un archivo MDX. 

- `withContentlayer` es un wrapper que nos permite integrar Contentlayer con Next.js.

