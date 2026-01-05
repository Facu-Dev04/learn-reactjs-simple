// src/components/MDXContent.tsx
"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";

interface MDXLoaderProps {
  mdxComponent: string; // El código compilado de Contentlayer (post.body.code)
}

// Define componentes personalizados si lo necesitas
const mdxComponents: MDXComponents = {
  // Puedes personalizar elementos aquí si quieres
  // h1: ({ children }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
  // p: ({ children }) => <p className="my-2">{children}</p>,
};

export function MDXLoader({ mdxComponent }: MDXLoaderProps) {
  // Llamar el hook siempre, sin condiciones
  const MDXContent = useMDXComponent(mdxComponent);

  // Validar después de llamar el hook
  if (!mdxComponent) {
    console.error("MDX component code is empty or undefined");
    return (
      <div className="text-red-500 p-4 bg-red-50 rounded">
        <p className="font-bold">Error: No MDX content found</p>
        <p className="text-sm">El código MDX no se cargó correctamente</p>
      </div>
    );
  }

  if (!MDXContent) {
    console.error("Failed to create MDX component");
    return (
      <div className="text-red-500 p-4 bg-red-50 rounded">
        <p className="font-bold">Error: Failed to render content</p>
        <p className="text-sm">No se pudo compilar el contenido MDX</p>
      </div>
    );
  }

  try {
    return <MDXContent components={mdxComponents} />;
  } catch (error) {
    console.error("Error rendering MDX:", error);
    return (
      <div className="text-red-500 p-4 bg-red-50 rounded">
        <p className="font-bold">Error cargando contenido MDX</p>
        <p className="text-sm">
          {error instanceof Error ? error.message : String(error)}
        </p>
        <details className="mt-2 text-xs">
          <summary>Detalles técnicos</summary>
          <pre className="mt-2 overflow-auto bg-white p-2 rounded">
            {error instanceof Error ? error.stack : String(error)}
          </pre>
        </details>
      </div>
    );
  }
}