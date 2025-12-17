# Blog con Next.js y Contentlayer

Este proyecto es un blog moderno construido con Next.js 16, Contentlayer y MDX.

## 🚀 Características

- ✅ **Next.js 16** - Framework de React con App Router
- ✅ **Contentlayer** - Gestión de contenido con MDX
- ✅ **TypeScript** - Tipado estático
- ✅ **Tailwind CSS** - Estilos modernos y responsive
- ✅ **Generación Estática** - SSG con `generateStaticParams`
- ✅ **SEO Optimizado** - Metadata automática

## 📁 Estructura del Proyecto

```
learn-reactjs-simple/
├── Posts/                          # Carpeta de posts en MDX
│   ├── 01-blog.mdx
│   ├── 02-blog.mdx
│   ├── 03-blog.mdx
│   └── 04-bienvenida.mdx
├── src/
│   └── app/
│       ├── (marketing)/
│       │   ├── blog/
│       │   │   └── page.tsx       # Lista de posts
│       │   └── posts/
│       │       └── [slug]/
│       │           └── page.tsx   # Post individual
│       ├── layout.tsx              # Layout principal
│       ├── page.tsx               # Página de inicio
│       └── globals.css            # Estilos globales
├── contentlayer.config.ts          # Configuración de Contentlayer
├── next.config.js                 # Configuración de Next.js
├── tailwind.config.js             # Configuración de Tailwind
└── tsconfig.json                  # Configuración de TypeScript
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo (usa webpack para compatibilidad con Contentlayer)
npm run dev

# Construir para producción
npm build

# Iniciar servidor de producción
npm start
```

## 📝 Crear un Nuevo Post

1. Crea un archivo `.mdx` en la carpeta `Posts/`
2. Agrega el frontmatter con los campos requeridos:

```mdx
---
title: Mi Nuevo Post
description: Una breve descripción del post
date: 2024-12-17
---

## Contenido del post

Escribe tu contenido aquí usando Markdown y componentes JSX...
```

3. El post aparecerá automáticamente en `/blog`

## 🎨 Personalización

### Estilos MDX

Los estilos para el contenido MDX están en `src/app/globals.css`. Puedes personalizar:

- Párrafos (`.prose p`)
- Encabezados (`prose h1`, `.prose h2`, `.prose h3`)
- Código (`prose code`, `.prose pre`)
- Enlaces (`.prose a`)

### Configuración de Contentlayer

Edita `contentlayer.config.ts` para:

- Cambiar la carpeta de posts (actualmente `Posts`)
- Agregar nuevos campos
- Modificar la URL de los posts
- Agregar validaciones custom

## 📚 Documentación

- [Next.js](https://nextjs.org/docs)
- [Contentlayer](https://contentlayer.dev/)
- [MDX](https://mdxjs.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)

## ⚠️ Notas Importantes

- **Webpack vs Turbopack**: Este proyecto usa `--webpack` en el script `dev` porque Contentlayer 0.3.4 no es totalmente compatible con Turbopack (predeterminado en Next.js 16).
- **CommonJS**: Los archivos de configuración (`next.config.js`, `tailwind.config.js`, `postcss.config.js`) usan CommonJS porque eliminamos `"type": "module"` del `package.json` para compatibilidad con Contentlayer.
- **Posts en Mayúscula**: La carpeta se llama `Posts` con mayúscula inicial, asegúrate de mantener este nombre o actualizar `contentlayer.config.ts`.

## 🌐 Rutas

- `/` - Página de inicio
- `/blog` - Lista de todos los posts
- `/posts/[slug]` - Post individual

## 🚀 Deployment

Para deployar este proyecto:

```bash
# Construir para producción
npm run build

# El build generará archivos estáticos en .next/
```

Puedes deployar en:

- Vercel (recomendado para Next.js)
- Netlify
- GitHub Pages (requiere exportación estática)

---

¡Disfruta escribiendo tu blog! 📝✨
