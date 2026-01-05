1:"$Sreact.fragment"
2:I[29135,["/_next/static/chunks/1ece12c6b730817d.js"],"default"]
7:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
8:"$Sreact.suspense"
3:T218c,
# Optimización de Performance en React

El rendimiento es crucial para una buena experiencia de usuario. Aunque React es rápido por defecto, aplicaciones complejas pueden necesitar optimizaciones. Veamos las técnicas más efectivas.

## ¿Cuándo Optimizar?

**Regla de oro**: No optimices prematuramente. Primero mide, luego optimiza.

### Herramientas de medición:

1. **React DevTools Profiler** - Identifica componentes lentos
2. **Chrome Performance Tab** - Análisis detallado de rendimiento
3. **Lighthouse** - Métricas de performance web

## 1. React.memo - Evita Re-renders Innecesarios

`React.memo` es un Higher-Order Component que memoriza el resultado del componente.

```javascript
import { memo } from "react";

// Sin optimización - se re-renderiza cada vez que el padre cambia
function ProductoCard({ nombre, precio }) {
  console.log("Renderizando:", nombre);
  return (
    <div>
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
}

// Con React.memo - solo se re-renderiza si las props cambian
const ProductoCardOptimizado = memo(function ProductoCard({ nombre, precio }) {
  console.log("Renderizando:", nombre);
  return (
    <div>
      <h3>{nombre}</h3>
      <p>${precio}</p>
    </div>
  );
});

// Comparación personalizada
const ProductoCardAvanzado = memo(ProductoCard, (prevProps, nextProps) => {
  // Retorna true si las props son iguales (no re-renderizar)
  return prevProps.id === nextProps.id;
});
```

## 2. useMemo - Memoriza Cálculos Costosos

`useMemo` memoriza el resultado de un cálculo costoso.

```javascript
import { useMemo, useState } from "react";

function ListaProductos({ productos }) {
  const [filtro, setFiltro] = useState("");

  // ❌ Sin useMemo - se re-calcula en cada render
  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(filtro.toLowerCase())
  );

  // ✅ Con useMemo - solo se re-calcula cuando cambian las dependencias
  const productosFiltradosOptimizado = useMemo(() => {
    console.log("Filtrando productos...");
    return productos.filter((p) =>
      p.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [productos, filtro]); // Solo re-calcula si cambian productos o filtro

  return (
    <div>
      <input
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
        placeholder="Buscar..."
      />
      {productosFiltradosOptimizado.map((p) => (
        <ProductoCard key={p.id} {...p} />
      ))}
    </div>
  );
}
```

## 3. useCallback - Memoriza Funciones

`useCallback` memoriza una función para evitar crear nuevas referencias en cada render.

```javascript
import { useCallback, useState } from "react";

function Lista() {
  const [items, setItems] = useState([1, 2, 3]);
  const [contador, setContador] = useState(0);

  // ❌ Sin useCallback - nueva función en cada render
  const agregarItem = () => {
    setItems([...items, items.length + 1]);
  };

  // ✅ Con useCallback - misma referencia de función
  const agregarItemOptimizado = useCallback(() => {
    setItems((prev) => [...prev, prev.length + 1]);
  }, []); // Array vacío = función nunca cambia

  // Con dependencia
  const eliminarItem = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item !== id));
  }, []); // No depende de 'items' porque usamos función updater

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>
        Contador: {contador}
      </button>

      {/* Este componente no se re-renderiza cuando contador cambia */}
      <ListaItems
        items={items}
        onAgregar={agregarItemOptimizado}
        onEliminar={eliminarItem}
      />
    </div>
  );
}

const ListaItems = memo(function ListaItems({ items, onAgregar, onEliminar }) {
  console.log("Renderizando ListaItems");
  return (
    <>
      {items.map((item) => (
        <div key={item}>
          Item {item}
          <button onClick={() => onEliminar(item)}>❌</button>
        </div>
      ))}
      <button onClick={onAgregar}>Agregar Item</button>
    </>
  );
});
```

## 4. Code Splitting - Carga Código Bajo Demanda

Divide tu aplicación en chunks más pequeños que se cargan solo cuando se necesitan.

```javascript
import { lazy, Suspense } from "react";

// Carga normal - se incluye en el bundle principal
import PaginaInicio from "./pages/Inicio";

// Lazy loading - se carga solo cuando se navega a esta ruta
const PaginaPerfil = lazy(() => import("./pages/Perfil"));
const PaginaConfiguracion = lazy(() => import("./pages/Configuracion"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />

        <Route
          path="/perfil"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <PaginaPerfil />
            </Suspense>
          }
        />

        <Route
          path="/config"
          element={
            <Suspense fallback={<div>Cargando...</div>}>
              <PaginaConfiguracion />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}
```

## 5. Virtualización de Listas Largas

Para listas con cientos o miles de items, usa virtualización con `react-window` o `react-virtual`.

```javascript
import { FixedSizeList } from "react-window";

function ListaGrande({ items }) {
  // Solo renderiza los items visibles en el viewport
  return (
    <FixedSizeList
      height={600} // Altura del contenedor
      itemCount={items.length}
      itemSize={50} // Altura de cada item
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>Item {items[index].nombre}</div>
      )}
    </FixedSizeList>
  );
}
```

## 6. Debouncing para Inputs

Evita ejecutar funciones costosas en cada keystroke.

```javascript
import { useState, useCallback } from "react";
import { debounce } from "lodash";

function BuscadorProductos() {
  const [resultados, setResultados] = useState([]);

  // Esta función solo se ejecuta 300ms después del último keystroke
  const buscar = useCallback(
    debounce(async (query) => {
      const response = await fetch(`/api/buscar?q=${query}`);
      const data = await response.json();
      setResultados(data);
    }, 300),
    []
  );

  return (
    <input
      onChange={(e) => buscar(e.target.value)}
      placeholder="Buscar productos..."
    />
  );
}
```

## 7. useTransition - Prioriza Updates (React 18+)

```javascript
import { useState, useTransition } from "react";

function BuscadorComplejo() {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update urgente - UI responsive

    // Update no urgente - puede ser interrumpido
    startTransition(() => {
      const resultadosFiltrados = buscarEnGranDataset(value);
      setResultados(resultadosFiltrados);
    });
  };

  return (
    <>
      <input value={query} onChange={handleChange} />
      {isPending && <div>Buscando...</div>}
      <Resultados items={resultados} />
    </>
  );
}
```

## Checklist de Optimización

### ✅ Antes de optimizar:

1. Mide con React DevTools Profiler
2. Identifica componentes que se re-renderiza innecesariamente
3. Busca cálculos costosos en render

### ✅ Técnicas de optimización:

1. `React.memo` para componentes que reciben mismas props frecuentemente
2. `useMemo` para cálculos costosos
3. `useCallback` para funciones pasadas como props a componentes memorizados
4. `lazy` + `Suspense` para code splitting
5. Virtualización para listas largas
6. Debouncing para inputs de búsqueda

### ❌ Evita:

- Usar `React.memo` en todos los componentes sin medir
- `useMemo`/`useCallback` en cálculos/funciones simples
- Optimización prematura

## Conclusión

La optimización de performance es un arte que requiere balance. Demasiada optimización puede hacer tu código complejo y difícil de mantener. Demasiada poca puede resultar en una app lenta.

**La clave es medir primero, optimizar después**, y siempre enfocarte en los problemas reales que afectan a tus usuarios.

¿Qué técnicas de optimización has usado? ¡Comparte tu experiencia!
4:T869e,var Component=(()=>{var de=Object.create;var p=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var g=(d,e)=>()=>(e||d((e={exports:{}}).exports,e),e.exports),le=(d,e)=>{for(var o in e)p(d,o,{get:e[o],enumerable:!0})},k=(d,e,o,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of ie(e))!oe.call(d,l)&&l!==o&&p(d,l,{get:()=>e[l],enumerable:!(m=se(e,l))||m.enumerable});return d};var ue=(d,e,o)=>(o=d!=null?de(te(d)):{},k(e||!d||!d.__esModule?p(o,"default",{value:d,enumerable:!0}):o,d)),ce=d=>k(p({},"__esModule",{value:!0}),d);var T=g((Ne,S)=>{S.exports=React});var z=g(x=>{"use strict";(function(){function d(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===J?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case f:return"Fragment";case W:return"Profiler";case V:return"StrictMode";case H:return"Suspense";case K:return"SuspenseList";case Z:return"Activity"}if(typeof n=="object")switch(typeof n.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),n.$$typeof){case $:return"Portal";case G:return n.displayName||"Context";case B:return(n._context.displayName||"Context")+".Consumer";case X:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return a=n.displayName||null,a!==null?a:d(n.type)||"Memo";case _:a=n._payload,n=n._init;try{return d(n(a))}catch{}}return null}function e(n){return""+n}function o(n){try{e(n);var a=!1}catch{a=!0}if(a){a=console;var s=a.error,t=typeof Symbol=="function"&&Symbol.toStringTag&&n[Symbol.toStringTag]||n.constructor.name||"Object";return s.call(a,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",t),e(n)}}function m(n){if(n===f)return"<>";if(typeof n=="object"&&n!==null&&n.$$typeof===_)return"<...>";try{var a=d(n);return a?"<"+a+">":"<...>"}catch{return"<...>"}}function l(){var n=j.A;return n===null?null:n.getOwner()}function v(){return Error("react-stack-top-frame")}function I(n){if(D.call(n,"key")){var a=Object.getOwnPropertyDescriptor(n,"key").get;if(a&&a.isReactWarning)return!1}return n.key!==void 0}function L(n,a){function s(){U||(U=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",a))}s.isReactWarning=!0,Object.defineProperty(n,"key",{get:s,configurable:!0})}function M(){var n=d(this.type);return R[n]||(R[n]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),n=this.props.ref,n!==void 0?n:null}function q(n,a,s,t,u,N){var i=s.ref;return n={$$typeof:y,type:n,key:a,props:s,_owner:t},(i!==void 0?i:null)!==null?Object.defineProperty(n,"ref",{enumerable:!1,get:M}):Object.defineProperty(n,"ref",{enumerable:!1,value:null}),n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(n,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(n,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:u}),Object.defineProperty(n,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:N}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n}function Y(n,a,s,t,u,N){var i=a.children;if(i!==void 0)if(t)if(ee(i)){for(t=0;t<i.length;t++)C(i[t]);Object.freeze&&Object.freeze(i)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else C(i);if(D.call(a,"key")){i=d(n);var c=Object.keys(a).filter(function(ae){return ae!=="key"});t=0<c.length?"{key: someKey, "+c.join(": ..., ")+": ...}":"{key: someKey}",E[i+t]||(c=0<c.length?"{"+c.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,t,i,c,i),E[i+t]=!0)}if(i=null,s!==void 0&&(o(s),i=""+s),I(a)&&(o(a.key),i=""+a.key),"key"in a){s={};for(var h in a)h!=="key"&&(s[h]=a[h])}else s=a;return i&&L(s,typeof n=="function"?n.displayName||n.name||"Unknown":n),q(n,i,s,l(),u,N)}function C(n){P(n)?n._store&&(n._store.validated=1):typeof n=="object"&&n!==null&&n.$$typeof===_&&(n._payload.status==="fulfilled"?P(n._payload.value)&&n._payload.value._store&&(n._payload.value._store.validated=1):n._store&&(n._store.validated=1))}function P(n){return typeof n=="object"&&n!==null&&n.$$typeof===y}var b=T(),y=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),G=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),J=Symbol.for("react.client.reference"),j=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=Object.prototype.hasOwnProperty,ee=Array.isArray,F=console.createTask?console.createTask:function(){return null};b={react_stack_bottom_frame:function(n){return n()}};var U,R={},ne=b.react_stack_bottom_frame.bind(b,v)(),re=F(m(v)),E={};x.Fragment=f,x.jsxDEV=function(n,a,s,t){var u=1e4>j.recentlyCreatedOwnerStacks++;return Y(n,a,s,t,u?Error("react-stack-top-frame"):ne,u?F(m(n)):re)}})()});var w=g((ge,O)=>{"use strict";O.exports=z()});var fe={};le(fe,{default:()=>pe,frontmatter:()=>me});var r=ue(w()),me={title:"Performance en React - Optimiza tus Componentes",description:"Aprende t\xE9cnicas avanzadas para optimizar el rendimiento de tus aplicaciones React usando React.memo, useMemo, useCallback y m\xE1s.",date:new Date(17337888e5)};function A(d){let e=Object.assign({h1:"h1",p:"p",h2:"h2",strong:"strong",h3:"h3",ol:"ol",li:"li",code:"code",pre:"pre",ul:"ul"},d.components);return(0,r.jsxDEV)(r.Fragment,{children:[(0,r.jsxDEV)(e.h1,{children:"Optimizaci\xF3n de Performance en React"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:7,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:"El rendimiento es crucial para una buena experiencia de usuario. Aunque React es r\xE1pido por defecto, aplicaciones complejas pueden necesitar optimizaciones. Veamos las t\xE9cnicas m\xE1s efectivas."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:9,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"\xBFCu\xE1ndo Optimizar?"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:11,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:[(0,r.jsxDEV)(e.strong,{children:"Regla de oro"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:13,columnNumber:1},this),": No optimices prematuramente. Primero mide, luego optimiza."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:13,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Herramientas de medici\xF3n:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:15,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.ol,{children:[`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.strong,{children:"React DevTools Profiler"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:17,columnNumber:4},this)," - Identifica componentes lentos"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:17,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.strong,{children:"Chrome Performance Tab"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:18,columnNumber:4},this)," - An\xE1lisis detallado de rendimiento"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:18,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.strong,{children:"Lighthouse"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:19,columnNumber:4},this)," - M\xE9tricas de performance web"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:19,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:17,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"1. React.memo - Evita Re-renders Innecesarios"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:21,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:[(0,r.jsxDEV)(e.code,{children:"React.memo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:23,columnNumber:1},this)," es un Higher-Order Component que memoriza el resultado del componente."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:23,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-javascript",children:`import { memo } from "react";\r
\r
// Sin optimizaci\xF3n - se re-renderiza cada vez que el padre cambia\r
function ProductoCard({ nombre, precio }) {\r
  console.log("Renderizando:", nombre);\r
  return (\r
    <div>\r
      <h3>{nombre}</h3>\r
      <p>\${precio}</p>\r
    </div>\r
  );\r
}\r
\r
// Con React.memo - solo se re-renderiza si las props cambian\r
const ProductoCardOptimizado = memo(function ProductoCard({ nombre, precio }) {\r
  console.log("Renderizando:", nombre);\r
  return (\r
    <div>\r
      <h3>{nombre}</h3>\r
      <p>\${precio}</p>\r
    </div>\r
  );\r
});\r
\r
// Comparaci\xF3n personalizada\r
const ProductoCardAvanzado = memo(ProductoCard, (prevProps, nextProps) => {\r
  // Retorna true si las props son iguales (no re-renderizar)\r
  return prevProps.id === nextProps.id;\r
});
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:25,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:25,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"2. useMemo - Memoriza C\xE1lculos Costosos"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:57,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:[(0,r.jsxDEV)(e.code,{children:"useMemo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:59,columnNumber:1},this)," memoriza el resultado de un c\xE1lculo costoso."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:59,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-javascript",children:`import { useMemo, useState } from "react";\r
\r
function ListaProductos({ productos }) {\r
  const [filtro, setFiltro] = useState("");\r
\r
  // \u274C Sin useMemo - se re-calcula en cada render\r
  const productosFiltrados = productos.filter((p) =>\r
    p.nombre.toLowerCase().includes(filtro.toLowerCase())\r
  );\r
\r
  // \u2705 Con useMemo - solo se re-calcula cuando cambian las dependencias\r
  const productosFiltradosOptimizado = useMemo(() => {\r
    console.log("Filtrando productos...");\r
    return productos.filter((p) =>\r
      p.nombre.toLowerCase().includes(filtro.toLowerCase())\r
    );\r
  }, [productos, filtro]); // Solo re-calcula si cambian productos o filtro\r
\r
  return (\r
    <div>\r
      <input\r
        value={filtro}\r
        onChange={(e) => setFiltro(e.target.value)}\r
        placeholder="Buscar..."\r
      />\r
      {productosFiltradosOptimizado.map((p) => (\r
        <ProductoCard key={p.id} {...p} />\r
      ))}\r
    </div>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:61,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:61,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"3. useCallback - Memoriza Funciones"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:95,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:[(0,r.jsxDEV)(e.code,{children:"useCallback"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:97,columnNumber:1},this)," memoriza una funci\xF3n para evitar crear nuevas referencias en cada render."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:97,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-javascript",children:`import { useCallback, useState } from "react";\r
\r
function Lista() {\r
  const [items, setItems] = useState([1, 2, 3]);\r
  const [contador, setContador] = useState(0);\r
\r
  // \u274C Sin useCallback - nueva funci\xF3n en cada render\r
  const agregarItem = () => {\r
    setItems([...items, items.length + 1]);\r
  };\r
\r
  // \u2705 Con useCallback - misma referencia de funci\xF3n\r
  const agregarItemOptimizado = useCallback(() => {\r
    setItems((prev) => [...prev, prev.length + 1]);\r
  }, []); // Array vac\xEDo = funci\xF3n nunca cambia\r
\r
  // Con dependencia\r
  const eliminarItem = useCallback((id) => {\r
    setItems((prev) => prev.filter((item) => item !== id));\r
  }, []); // No depende de 'items' porque usamos funci\xF3n updater\r
\r
  return (\r
    <div>\r
      <button onClick={() => setContador(contador + 1)}>\r
        Contador: {contador}\r
      </button>\r
\r
      {/* Este componente no se re-renderiza cuando contador cambia */}\r
      <ListaItems\r
        items={items}\r
        onAgregar={agregarItemOptimizado}\r
        onEliminar={eliminarItem}\r
      />\r
    </div>\r
  );\r
}\r
\r
const ListaItems = memo(function ListaItems({ items, onAgregar, onEliminar }) {\r
  console.log("Renderizando ListaItems");\r
  return (\r
    <>\r
      {items.map((item) => (\r
        <div key={item}>\r
          Item {item}\r
          <button onClick={() => onEliminar(item)}>\u274C</button>\r
        </div>\r
      ))}\r
      <button onClick={onAgregar}>Agregar Item</button>\r
    </>\r
  );\r
});
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:99,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:99,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"4. Code Splitting - Carga C\xF3digo Bajo Demanda"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:153,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:"Divide tu aplicaci\xF3n en chunks m\xE1s peque\xF1os que se cargan solo cuando se necesitan."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:155,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-javascript",children:`import { lazy, Suspense } from "react";\r
\r
// Carga normal - se incluye en el bundle principal\r
import PaginaInicio from "./pages/Inicio";\r
\r
// Lazy loading - se carga solo cuando se navega a esta ruta\r
const PaginaPerfil = lazy(() => import("./pages/Perfil"));\r
const PaginaConfiguracion = lazy(() => import("./pages/Configuracion"));\r
\r
function App() {\r
  return (\r
    <Router>\r
      <Routes>\r
        <Route path="/" element={<PaginaInicio />} />\r
\r
        <Route\r
          path="/perfil"\r
          element={\r
            <Suspense fallback={<div>Cargando...</div>}>\r
              <PaginaPerfil />\r
            </Suspense>\r
          }\r
        />\r
\r
        <Route\r
          path="/config"\r
          element={\r
            <Suspense fallback={<div>Cargando...</div>}>\r
              <PaginaConfiguracion />\r
            </Suspense>\r
          }\r
        />\r
      </Routes>\r
    </Router>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:157,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:157,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"5. Virtualizaci\xF3n de Listas Largas"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:196,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:["Para listas con cientos o miles de items, usa virtualizaci\xF3n con ",(0,r.jsxDEV)(e.code,{children:"react-window"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:198,columnNumber:66},this)," o ",(0,r.jsxDEV)(e.code,{children:"react-virtual"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:198,columnNumber:83},this),"."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:198,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-javascript",children:`import { FixedSizeList } from "react-window";\r
\r
function ListaGrande({ items }) {\r
  // Solo renderiza los items visibles en el viewport\r
  return (\r
    <FixedSizeList\r
      height={600} // Altura del contenedor\r
      itemCount={items.length}\r
      itemSize={50} // Altura de cada item\r
      width="100%"\r
    >\r
      {({ index, style }) => (\r
        <div style={style}>Item {items[index].nombre}</div>\r
      )}\r
    </FixedSizeList>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:200,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:200,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"6. Debouncing para Inputs"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:220,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:"Evita ejecutar funciones costosas en cada keystroke."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:222,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-javascript",children:`import { useState, useCallback } from "react";\r
import { debounce } from "lodash";\r
\r
function BuscadorProductos() {\r
  const [resultados, setResultados] = useState([]);\r
\r
  // Esta funci\xF3n solo se ejecuta 300ms despu\xE9s del \xFAltimo keystroke\r
  const buscar = useCallback(\r
    debounce(async (query) => {\r
      const response = await fetch(\`/api/buscar?q=\${query}\`);\r
      const data = await response.json();\r
      setResultados(data);\r
    }, 300),\r
    []\r
  );\r
\r
  return (\r
    <input\r
      onChange={(e) => buscar(e.target.value)}\r
      placeholder="Buscar productos..."\r
    />\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:224,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:224,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"7. useTransition - Prioriza Updates (React 18+)"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:250,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-javascript",children:`import { useState, useTransition } from "react";\r
\r
function BuscadorComplejo() {\r
  const [query, setQuery] = useState("");\r
  const [resultados, setResultados] = useState([]);\r
  const [isPending, startTransition] = useTransition();\r
\r
  const handleChange = (e) => {\r
    const value = e.target.value;\r
    setQuery(value); // Update urgente - UI responsive\r
\r
    // Update no urgente - puede ser interrumpido\r
    startTransition(() => {\r
      const resultadosFiltrados = buscarEnGranDataset(value);\r
      setResultados(resultadosFiltrados);\r
    });\r
  };\r
\r
  return (\r
    <>\r
      <input value={query} onChange={handleChange} />\r
      {isPending && <div>Buscando...</div>}\r
      <Resultados items={resultados} />\r
    </>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:252,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:252,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Checklist de Optimizaci\xF3n"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:281,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"\u2705 Antes de optimizar:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:283,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.ol,{children:[`
`,(0,r.jsxDEV)(e.li,{children:"Mide con React DevTools Profiler"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:285,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:"Identifica componentes que se re-renderiza innecesariamente"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:286,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:"Busca c\xE1lculos costosos en render"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:287,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:285,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"\u2705 T\xE9cnicas de optimizaci\xF3n:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:289,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.ol,{children:[`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.code,{children:"React.memo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:291,columnNumber:4},this)," para componentes que reciben mismas props frecuentemente"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:291,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.code,{children:"useMemo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:292,columnNumber:4},this)," para c\xE1lculos costosos"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:292,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.code,{children:"useCallback"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:293,columnNumber:4},this)," para funciones pasadas como props a componentes memorizados"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:293,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.code,{children:"lazy"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:294,columnNumber:4},this)," + ",(0,r.jsxDEV)(e.code,{children:"Suspense"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:294,columnNumber:13},this)," para code splitting"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:294,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:"Virtualizaci\xF3n para listas largas"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:295,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:"Debouncing para inputs de b\xFAsqueda"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:296,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:291,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"\u274C Evita:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:298,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.ul,{children:[`
`,(0,r.jsxDEV)(e.li,{children:["Usar ",(0,r.jsxDEV)(e.code,{children:"React.memo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:300,columnNumber:8},this)," en todos los componentes sin medir"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:300,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.code,{children:"useMemo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:301,columnNumber:3},this),"/",(0,r.jsxDEV)(e.code,{children:"useCallback"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:301,columnNumber:13},this)," en c\xE1lculos/funciones simples"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:301,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:"Optimizaci\xF3n prematura"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:302,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:300,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Conclusi\xF3n"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:304,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:"La optimizaci\xF3n de performance es un arte que requiere balance. Demasiada optimizaci\xF3n puede hacer tu c\xF3digo complejo y dif\xEDcil de mantener. Demasiada poca puede resultar en una app lenta."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:306,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:[(0,r.jsxDEV)(e.strong,{children:"La clave es medir primero, optimizar despu\xE9s"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:308,columnNumber:1},this),", y siempre enfocarte en los problemas reales que afectan a tus usuarios."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:308,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:"\xBFQu\xE9 t\xE9cnicas de optimizaci\xF3n has usado? \xA1Comparte tu experiencia!"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:310,columnNumber:1},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx",lineNumber:1,columnNumber:1},this)}function be(d={}){let{wrapper:e}=d.components||{};return e?(0,r.jsxDEV)(e,Object.assign({},d,{children:(0,r.jsxDEV)(A,d,void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx"},this)}),void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-5d122a23-30dd-4f7c-8d62-13b07bd220ee.mdx"},this):A(d)}var pe=be;return ce(fe);})();
/*! Bundled license information:

react/cjs/react-jsx-dev-runtime.development.js:
  (**
   * @license React
   * react-jsx-dev-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
;return Component;0:{"buildId":"aSan2I6MdDlLFDXbAherv","rsc":["$","$1","c",{"children":[["$","$L2",null,{"post":{"title":"Performance en React - Optimiza tus Componentes","description":"Aprende técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React usando React.memo, useMemo, useCallback y más.","date":"2024-12-10T03:00:00.000Z","body":{"raw":"$3","code":"$4"},"_id":"05-blog.mdx","_raw":{"sourceFilePath":"05-blog.mdx","sourceFileName":"05-blog.mdx","sourceFileDir":".","contentType":"mdx","flattenedPath":"05-blog"},"type":"Post","url":"/posts/05-blog"}}],["$L5"],"$L6"]}],"loading":null,"isPartial":false}
5:["$","script","script-0",{"src":"/_next/static/chunks/1ece12c6b730817d.js","async":true}]
6:["$","$L7",null,{"children":["$","$8",null,{"name":"Next.MetadataOutlet","children":"$@9"}]}]
9:null
