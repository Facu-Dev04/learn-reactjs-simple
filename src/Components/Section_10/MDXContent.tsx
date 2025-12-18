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
      // The code from contentlayer is a module export string
      // We need to evaluate it safely in a way that's compatible with React 19
      const exports: any = {};
      const module = { exports };
      const require = (name: string) => {
        if (name === "react/jsx-runtime") return _jsx_runtime;
        if (name === "react") return React;
        throw new Error(`Module ${name} not found`);
      };

      // Create a function from the code and execute it
      const fn = new Function("module", "exports", "require", code);
      fn(module, exports, require);

      // Return the default export
      return module.exports.default || exports.default || (() => null);
    } catch (error) {
      console.error("Error rendering MDX:", error);
      return () => <div>Error loading content</div>;
    }
  }, [code]);

  return <Component />;
}
