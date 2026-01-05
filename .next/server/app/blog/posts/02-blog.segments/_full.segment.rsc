1:"$Sreact.fragment"
2:I[39756,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
3:I[37457,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
4:I[22016,["/_next/static/chunks/796e69ae18b2784c.js"],""]
6:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
7:"$Sreact.suspense"
9:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"ViewportBoundary"]
b:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"MetadataBoundary"]
d:I[68027,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"default"]
:HL["/_next/static/chunks/7c2a96bb6c75ec7e.css","style"]
0:{"P":null,"b":"aSan2I6MdDlLFDXbAherv","c":["","blog","posts","02-blog"],"q":"","i":false,"f":[[["",{"children":["(marketing)",{"children":["blog",{"children":["posts",{"children":[["slug","02-blog","d"],{"children":["__PAGE__",{}]}]}]}]}]},"$undefined","$undefined",true],[["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/chunks/7c2a96bb6c75ec7e.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"es","children":["$","body",null,{"className":"bg-gray-50 min-h-screen","children":[["$","nav",null,{"className":"bg-white shadow-sm border-b","children":["$","div",null,{"className":"max-w-6xl mx-auto px-4 py-4","children":["$","div",null,{"className":"flex justify-between items-center","children":[["$","a",null,{"href":"/","className":"text-xl font-bold text-gray-900","children":"Mi Blog"}],["$","div",null,{"className":"space-x-6","children":[["$","a",null,{"href":"/","className":"text-gray-700 hover:text-gray-900","children":"Inicio"}],["$","a",null,{"href":"/blog","className":"text-gray-700 hover:text-gray-900","children":"Blog"}]]}]]}]}]}],["$","main",null,{"children":["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"grid gap-4 h-screen place-content-center","children":[["$","h1",null,{"className":"text-center text-3xl","children":"404"}],["$","$L4",null,{"href":"/","className":"bg-black text-white py-2 px-4 rounded-md hover:bg-slate-700","children":"Volver al inicio"}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}],["$","footer",null,{"className":"bg-white border-t mt-16","children":["$","div",null,{"className":"max-w-6xl mx-auto px-4 py-8 text-center text-gray-600","children":["$","p",null,{"children":"© 2024 Mi Blog. Construido con Next.js y Contentlayer."}]}]}]]}]}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","div",null,{"className":"grid gap-4 h-screen place-content-center","children":[["$","h1",null,{"className":"text-center text-3xl","children":"404"}],["$","$L4",null,{"href":"/","className":"bg-black text-white py-2 px-4 rounded-md hover:bg-slate-700","children":"Volver al inicio"}]]}],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["$","$1","c",{"children":[null,["$","$L2",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L3",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":[["$","$1","c",{"children":["$L5",[["$","script","script-0",{"src":"/_next/static/chunks/1ece12c6b730817d.js","async":true,"nonce":"$undefined"}]],["$","$L6",null,{"children":["$","$7",null,{"name":"Next.MetadataOutlet","children":"$@8"}]}]]}],{},null,false,false]},null,false,false]},null,false,false]},null,false,false]},null,false,false]},null,false,false],["$","$1","h",{"children":[null,["$","$L9",null,{"children":"$@a"}],["$","div",null,{"hidden":true,"children":["$","$Lb",null,{"children":["$","$7",null,{"name":"Next.Metadata","children":"$@c"}]}]}],null]}],false]],"m":"$undefined","G":["$d",[]],"S":true}
e:I[29135,["/_next/static/chunks/1ece12c6b730817d.js"],"default"]
f:Tfaa,
# Next.js App Router: La Nueva Era del Routing

Con Next.js 13, Vercel introdujo el **App Router**, una nueva forma de estructurar aplicaciones que aprovecha las últimas características de React, incluyendo Server Components y Streaming.

## Pages Router vs App Router

### Pages Router (Antiguo)

```
pages/
  index.js          → /
  about.js          → /about
  posts/[id].js     → /posts/:id
```

### App Router (Nuevo)

```
app/
  page.js           → /
  about/page.js     → /about
  posts/[id]/page.js → /posts/:id
```

## Características Principales

### 1. **Server Components por Defecto**

En el App Router, todos los componentes son Server Components por defecto. Esto significa que se renderizan en el servidor, reduciendo el JavaScript enviado al cliente.

```javascript
// app/posts/page.js
// Este es un Server Component por defecto
export default async function PostsPage() {
  // Puedes hacer fetch directamente en el componente
  const posts = await fetch("https://api.example.com/posts").then((res) =>
    res.json()
  );

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### 2. **Layouts y Templates**

Los layouts te permiten compartir UI entre múltiples páginas:

```javascript
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header>Mi Sitio</header>
        <main>{children}</main>
        <footer>© 2024</footer>
      </body>
    </html>
  );
}
```

### 3. **Loading y Error States**

Archivos especiales para manejar estados de carga y errores:

```javascript
// app/posts/loading.js
export default function Loading() {
  return <div>Cargando posts...</div>;
}

// app/posts/error.js
'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Algo salió mal!</h2>
      <button onClick={() => reset()}>Intentar de nuevo</button>
    </div>
  );
}
```

### 4. **Rutas Dinámicas Mejoradas**

```javascript
// app/posts/[slug]/page.js
export default async function Post({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}

// Genera rutas estáticas en build time
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

### 5. **Route Groups**

Organiza tus rutas sin afectar la URL:

```
app/
  (marketing)/
    about/page.js    → /about
    contact/page.js  → /contact
  (shop)/
    products/page.js → /products
    cart/page.js     → /cart
```

## Ventajas del App Router

✅ **Mejor rendimiento**: Server Components reducen el JavaScript del cliente
✅ **Streaming**: Las páginas se cargan progresivamente
✅ **Layouts anidados**: Menos re-renders innecesarios
✅ **Data fetching mejorado**: Fetch directo en componentes sin getServerSideProps
✅ **SEO optimizado**: Todo se renderiza en el servidor por defecto

## Client Components

Cuando necesitas interactividad, usa la directiva `'use client'`:

```javascript
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Contador: {count}</button>;
}
```

## Conclusión

El App Router representa una evolución natural de Next.js. Aunque tiene una curva de aprendizaje, las ventajas en rendimiento, experiencia de desarrollo y capacidades modernas lo hacen la opción recomendada para nuevos proyectos.

¿Ya estás usando App Router en tus proyectos? ¡Comparte tu experiencia en los comentarios!
10:T5b13,var Component=(()=>{var te=Object.create;var f=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var ce=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty;var g=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports),le=(t,n)=>{for(var o in n)f(t,o,{get:n[o],enumerable:!0})},S=(t,n,o,m)=>{if(n&&typeof n=="object"||typeof n=="function")for(let l of ce(n))!oe.call(t,l)&&l!==o&&f(t,l,{get:()=>n[l],enumerable:!(m=se(n,l))||m.enumerable});return t};var de=(t,n,o)=>(o=t!=null?te(ie(t)):{},S(n||!t||!t.__esModule?f(o,"default",{value:t,enumerable:!0}):o,t)),ue=t=>S(f({},"__esModule",{value:!0}),t);var A=g((Ne,T)=>{T.exports=React});var O=g(x=>{"use strict";(function(){function t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case q:return"Profiler";case W:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case z:return"Portal";case X:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case K:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return a=e.displayName||null,a!==null?a:t(e.type)||"Memo";case _:a=e._payload,e=e._init;try{return t(e(a))}catch{}}return null}function n(e){return""+e}function o(e){try{n(e);var a=!1}catch{a=!0}if(a){a=console;var s=a.error,i=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return s.call(a,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",i),n(e)}}function m(e){if(e===b)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===_)return"<...>";try{var a=t(e);return a?"<"+a+">":"<...>"}catch{return"<...>"}}function l(){var e=C.A;return e===null?null:e.getOwner()}function v(){return Error("react-stack-top-frame")}function Y(e){if(E.call(e,"key")){var a=Object.getOwnPropertyDescriptor(e,"key").get;if(a&&a.isReactWarning)return!1}return e.key!==void 0}function I(e,a){function s(){F||(F=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",a))}s.isReactWarning=!0,Object.defineProperty(e,"key",{get:s,configurable:!0})}function M(){var e=t(this.type);return R[e]||(R[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function V(e,a,s,i,d,N){var c=s.ref;return e={$$typeof:P,type:e,key:a,props:s,_owner:i},(c!==void 0?c:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:M}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:d}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:N}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function $(e,a,s,i,d,N){var c=a.children;if(c!==void 0)if(i)if(ee(c)){for(i=0;i<c.length;i++)j(c[i]);Object.freeze&&Object.freeze(c)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else j(c);if(E.call(a,"key")){c=t(e);var u=Object.keys(a).filter(function(ae){return ae!=="key"});i=0<u.length?"{key: someKey, "+u.join(": ..., ")+": ...}":"{key: someKey}",U[c+i]||(u=0<u.length?"{"+u.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,i,c,u,c),U[c+i]=!0)}if(c=null,s!==void 0&&(o(s),c=""+s),Y(a)&&(o(a.key),c=""+a.key),"key"in a){s={};for(var h in a)h!=="key"&&(s[h]=a[h])}else s=a;return c&&I(s,typeof e=="function"?e.displayName||e.name||"Unknown":e),V(e,c,s,l(),d,N)}function j(e){y(e)?e._store&&(e._store.validated=1):typeof e=="object"&&e!==null&&e.$$typeof===_&&(e._payload.status==="fulfilled"?y(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function y(e){return typeof e=="object"&&e!==null&&e.$$typeof===P}var p=A(),P=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),X=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),Q=Symbol.for("react.client.reference"),C=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=Object.prototype.hasOwnProperty,ee=Array.isArray,D=console.createTask?console.createTask:function(){return null};p={react_stack_bottom_frame:function(e){return e()}};var F,R={},ne=p.react_stack_bottom_frame.bind(p,v)(),re=D(m(v)),U={};x.Fragment=b,x.jsxDEV=function(e,a,s,i){var d=1e4>C.recentlyCreatedOwnerStacks++;return $(e,a,s,i,d?Error("react-stack-top-frame"):ne,d?D(m(e)):re)}})()});var w=g((ge,k)=>{"use strict";k.exports=O()});var be={};le(be,{default:()=>fe,frontmatter:()=>me});var r=de(w()),me={title:"Next.js App Router - La Nueva Era del Routing en Next.js",description:"Descubre c\xF3mo Next.js 13+ revolucion\xF3 el routing con el App Router, Server Components y las nuevas convenciones de archivos.",date:new Date(1732752e6)};function L(t){let n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",h3:"h3",pre:"pre",code:"code"},t.components);return(0,r.jsxDEV)(r.Fragment,{children:[(0,r.jsxDEV)(n.h1,{children:"Next.js App Router: La Nueva Era del Routing"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:7,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:["Con Next.js 13, Vercel introdujo el ",(0,r.jsxDEV)(n.strong,{children:"App Router"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:9,columnNumber:37},this),", una nueva forma de estructurar aplicaciones que aprovecha las \xFAltimas caracter\xEDsticas de React, incluyendo Server Components y Streaming."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:9,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"Pages Router vs App Router"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:11,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:"Pages Router (Antiguo)"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:13,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{children:`pages/\r
  index.js          \u2192 /\r
  about.js          \u2192 /about\r
  posts/[id].js     \u2192 /posts/:id
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:15,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:15,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:"App Router (Nuevo)"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:22,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{children:`app/\r
  page.js           \u2192 /\r
  about/page.js     \u2192 /about\r
  posts/[id]/page.js \u2192 /posts/:id
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:24,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:24,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"Caracter\xEDsticas Principales"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:31,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:["1. ",(0,r.jsxDEV)(n.strong,{children:"Server Components por Defecto"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:33,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:33,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:"En el App Router, todos los componentes son Server Components por defecto. Esto significa que se renderizan en el servidor, reduciendo el JavaScript enviado al cliente."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:35,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{className:"language-javascript",children:`// app/posts/page.js\r
// Este es un Server Component por defecto\r
export default async function PostsPage() {\r
  // Puedes hacer fetch directamente en el componente\r
  const posts = await fetch("https://api.example.com/posts").then((res) =>\r
    res.json()\r
  );\r
\r
  return (\r
    <div>\r
      <h1>Posts</h1>\r
      {posts.map((post) => (\r
        <article key={post.id}>\r
          <h2>{post.title}</h2>\r
          <p>{post.excerpt}</p>\r
        </article>\r
      ))}\r
    </div>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:37,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:37,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:["2. ",(0,r.jsxDEV)(n.strong,{children:"Layouts y Templates"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:60,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:60,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:"Los layouts te permiten compartir UI entre m\xFAltiples p\xE1ginas:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:62,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{className:"language-javascript",children:`// app/layout.js\r
export default function RootLayout({ children }) {\r
  return (\r
    <html lang="es">\r
      <body>\r
        <header>Mi Sitio</header>\r
        <main>{children}</main>\r
        <footer>\xA9 2024</footer>\r
      </body>\r
    </html>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:64,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:64,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:["3. ",(0,r.jsxDEV)(n.strong,{children:"Loading y Error States"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:79,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:79,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:"Archivos especiales para manejar estados de carga y errores:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:81,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{className:"language-javascript",children:`// app/posts/loading.js\r
export default function Loading() {\r
  return <div>Cargando posts...</div>;\r
}\r
\r
// app/posts/error.js\r
'use client';\r
\r
export default function Error({ error, reset }) {\r
  return (\r
    <div>\r
      <h2>Algo sali\xF3 mal!</h2>\r
      <button onClick={() => reset()}>Intentar de nuevo</button>\r
    </div>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:83,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:83,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:["4. ",(0,r.jsxDEV)(n.strong,{children:"Rutas Din\xE1micas Mejoradas"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:102,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:102,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{className:"language-javascript",children:`// app/posts/[slug]/page.js\r
export default async function Post({ params }) {\r
  const { slug } = await params;\r
  const post = await getPost(slug);\r
\r
  return (\r
    <article>\r
      <h1>{post.title}</h1>\r
      <p>{post.content}</p>\r
    </article>\r
  );\r
}\r
\r
// Genera rutas est\xE1ticas en build time\r
export async function generateStaticParams() {\r
  const posts = await getPosts();\r
\r
  return posts.map((post) => ({\r
    slug: post.slug,\r
  }));\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:104,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:104,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:["5. ",(0,r.jsxDEV)(n.strong,{children:"Route Groups"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:128,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:128,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:"Organiza tus rutas sin afectar la URL:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:130,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{children:`app/\r
  (marketing)/\r
    about/page.js    \u2192 /about\r
    contact/page.js  \u2192 /contact\r
  (shop)/\r
    products/page.js \u2192 /products\r
    cart/page.js     \u2192 /cart
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:132,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:132,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"Ventajas del App Router"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:142,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:["\u2705 ",(0,r.jsxDEV)(n.strong,{children:"Mejor rendimiento"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:144,columnNumber:3},this),`: Server Components reducen el JavaScript del cliente\r
\u2705 `,(0,r.jsxDEV)(n.strong,{children:"Streaming"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:145,columnNumber:3},this),`: Las p\xE1ginas se cargan progresivamente\r
\u2705 `,(0,r.jsxDEV)(n.strong,{children:"Layouts anidados"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:146,columnNumber:3},this),`: Menos re-renders innecesarios\r
\u2705 `,(0,r.jsxDEV)(n.strong,{children:"Data fetching mejorado"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:147,columnNumber:3},this),`: Fetch directo en componentes sin getServerSideProps\r
\u2705 `,(0,r.jsxDEV)(n.strong,{children:"SEO optimizado"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:148,columnNumber:3},this),": Todo se renderiza en el servidor por defecto"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:144,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"Client Components"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:150,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:["Cuando necesitas interactividad, usa la directiva ",(0,r.jsxDEV)(n.code,{children:"'use client'"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:152,columnNumber:51},this),":"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:152,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{className:"language-javascript",children:`"use client";\r
\r
import { useState } from "react";\r
\r
export default function Counter() {\r
  const [count, setCount] = useState(0);\r
\r
  return <button onClick={() => setCount(count + 1)}>Contador: {count}</button>;\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:154,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:154,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"Conclusi\xF3n"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:166,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:"El App Router representa una evoluci\xF3n natural de Next.js. Aunque tiene una curva de aprendizaje, las ventajas en rendimiento, experiencia de desarrollo y capacidades modernas lo hacen la opci\xF3n recomendada para nuevos proyectos."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:168,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:"\xBFYa est\xE1s usando App Router en tus proyectos? \xA1Comparte tu experiencia en los comentarios!"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:170,columnNumber:1},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx",lineNumber:1,columnNumber:1},this)}function pe(t={}){let{wrapper:n}=t.components||{};return n?(0,r.jsxDEV)(n,Object.assign({},t,{children:(0,r.jsxDEV)(L,t,void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx"},this)}),void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-ca68fac3-965d-4243-ac6d-0c5b53307de1.mdx"},this):L(t)}var fe=pe;return ue(be);})();
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
;return Component;5:["$","$Le",null,{"post":{"title":"Next.js App Router - La Nueva Era del Routing en Next.js","description":"Descubre cómo Next.js 13+ revolucionó el routing con el App Router, Server Components y las nuevas convenciones de archivos.","date":"2024-11-28T03:00:00.000Z","body":{"raw":"$f","code":"$10"},"_id":"02-blog.mdx","_raw":{"sourceFilePath":"02-blog.mdx","sourceFileName":"02-blog.mdx","sourceFileDir":".","contentType":"mdx","flattenedPath":"02-blog"},"type":"Post","url":"/posts/02-blog"}}]
a:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
c:[["$","title","0",{"children":"Next.js App Router - La Nueva Era del Routing en Next.js"}],["$","meta","1",{"name":"description","content":"Descubre cómo Next.js 13+ revolucionó el routing con el App Router, Server Components y las nuevas convenciones de archivos."}]]
8:null
