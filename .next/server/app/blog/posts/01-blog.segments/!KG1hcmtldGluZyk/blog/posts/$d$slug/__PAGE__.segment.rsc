1:"$Sreact.fragment"
2:I[29135,["/_next/static/chunks/1ece12c6b730817d.js"],"default"]
7:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
8:"$Sreact.suspense"
3:Ta97,
# Introducción a React Hooks

Los **React Hooks** fueron introducidos en React 16.8 y cambiaron completamente la forma en que escribimos componentes. Antes de los Hooks, necesitábamos usar componentes de clase para manejar estado y efectos secundarios. Ahora, podemos hacer todo esto en componentes funcionales.

## ¿Qué es useState?

`useState` es el Hook más básico y fundamental. Nos permite agregar estado local a un componente funcional.

```javascript
import { useState } from "react";

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click aquí</button>
    </div>
  );
}
```

### Características clave de useState:

- **Sintaxis simple**: Retorna un array con el valor actual y una función para actualizarlo
- **Múltiples estados**: Puedes usar useState múltiples veces en un mismo componente
- **Estado inicial**: El valor pasado a useState es el estado inicial

## ¿Qué es useEffect?

`useEffect` nos permite realizar efectos secundarios en componentes funcionales. Es como componentDidMount, componentDidUpdate y componentWillUnmount combinados.

```javascript
import { useState, useEffect } from "react";

function UsuarioActivo() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // Este código se ejecuta después del render
    fetch("/api/usuario")
      .then((response) => response.json())
      .then((data) => setUsuario(data));

    // Función de limpieza (opcional)
    return () => {
      console.log("Componente desmontado");
    };
  }, []); // Array de dependencias vacío = solo se ejecuta una vez

  return <div>{usuario?.nombre}</div>;
}
```

### Array de dependencias en useEffect:

1. **Sin array**: Se ejecuta en cada render
2. **Array vacío `[]`**: Se ejecuta solo una vez al montar el componente
3. **Con dependencias `[count]`**: Se ejecuta cuando cambian las dependencias

## Mejores prácticas

- ✅ **Nombra tus estados de forma descriptiva**: `[isLoading, setIsLoading]` mejor que `[flag, setFlag]`
- ✅ **Divide efectos complejos**: Es mejor tener múltiples useEffect simples que uno complejo
- ✅ **Limpia tus efectos**: Cancela suscripciones, timers, etc. en la función de retorno
- ❌ **Evita dependencias innecesarias**: Solo incluye lo que realmente necesitas

## Conclusión

Los Hooks han simplificado enormemente el desarrollo en React. Con useState y useEffect puedes manejar la mayoría de los casos de uso en tus aplicaciones. En el próximo post exploraremos Hooks más avanzados como useContext y useReducer.
4:T5157,var Component=(()=>{var se=Object.create;var f=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,le=Object.prototype.hasOwnProperty;var x=(s,n)=>()=>(n||s((n={exports:{}}).exports,n),n.exports),ce=(s,n)=>{for(var l in n)f(s,l,{get:n[l],enumerable:!0})},S=(s,n,l,m)=>{if(n&&typeof n=="object"||typeof n=="function")for(let c of ie(n))!le.call(s,c)&&c!==l&&f(s,c,{get:()=>n[c],enumerable:!(m=te(n,c))||m.enumerable});return s};var ue=(s,n,l)=>(l=s!=null?se(oe(s)):{},S(n||!s||!s.__esModule?f(l,"default",{value:s,enumerable:!0}):l,s)),de=s=>S(f({},"__esModule",{value:!0}),s);var k=x((Ne,T)=>{T.exports=React});var A=x(g=>{"use strict";(function(){function s(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case p:return"Fragment";case V:return"Profiler";case H:return"StrictMode";case K:return"Suspense";case Q:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(typeof e.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),e.$$typeof){case W:return"Portal";case X:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case G:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return a=e.displayName||null,a!==null?a:s(e.type)||"Memo";case _:a=e._payload,e=e._init;try{return s(e(a))}catch{}}return null}function n(e){return""+e}function l(e){try{n(e);var a=!1}catch{a=!0}if(a){a=console;var t=a.error,o=typeof Symbol=="function"&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t.call(a,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",o),n(e)}}function m(e){if(e===p)return"<>";if(typeof e=="object"&&e!==null&&e.$$typeof===_)return"<...>";try{var a=s(e);return a?"<"+a+">":"<...>"}catch{return"<...>"}}function c(){var e=P.A;return e===null?null:e.getOwner()}function v(){return Error("react-stack-top-frame")}function Y(e){if(C.call(e,"key")){var a=Object.getOwnPropertyDescriptor(e,"key").get;if(a&&a.isReactWarning)return!1}return e.key!==void 0}function L(e,a){function t(){F||(F=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",a))}t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}function M(){var e=s(this.type);return U[e]||(U[e]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),e=this.props.ref,e!==void 0?e:null}function z(e,a,t,o,u,N){var i=t.ref;return e={$$typeof:E,type:e,key:a,props:t,_owner:o},(i!==void 0?i:null)!==null?Object.defineProperty(e,"ref",{enumerable:!1,get:M}):Object.defineProperty(e,"ref",{enumerable:!1,value:null}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:u}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:N}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function $(e,a,t,o,u,N){var i=a.children;if(i!==void 0)if(o)if(ee(i)){for(o=0;o<i.length;o++)y(i[o]);Object.freeze&&Object.freeze(i)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else y(i);if(C.call(a,"key")){i=s(e);var d=Object.keys(a).filter(function(ae){return ae!=="key"});o=0<d.length?"{key: someKey, "+d.join(": ..., ")+": ...}":"{key: someKey}",R[i+o]||(d=0<d.length?"{"+d.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,o,i,d,i),R[i+o]=!0)}if(i=null,t!==void 0&&(l(t),i=""+t),Y(a)&&(l(a.key),i=""+a.key),"key"in a){t={};for(var h in a)h!=="key"&&(t[h]=a[h])}else t=a;return i&&L(t,typeof e=="function"?e.displayName||e.name||"Unknown":e),z(e,i,t,c(),u,N)}function y(e){j(e)?e._store&&(e._store.validated=1):typeof e=="object"&&e!==null&&e.$$typeof===_&&(e._payload.status==="fulfilled"?j(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function j(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}var b=k(),E=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),X=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),J=Symbol.for("react.client.reference"),P=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=Object.prototype.hasOwnProperty,ee=Array.isArray,D=console.createTask?console.createTask:function(){return null};b={react_stack_bottom_frame:function(e){return e()}};var F,U={},ne=b.react_stack_bottom_frame.bind(b,v)(),re=D(m(v)),R={};g.Fragment=p,g.jsxDEV=function(e,a,t,o){var u=1e4>P.recentlyCreatedOwnerStacks++;return $(e,a,t,o,u?Error("react-stack-top-frame"):ne,u?D(m(e)):re)}})()});var w=x((xe,O)=>{"use strict";O.exports=A()});var pe={};ce(pe,{default:()=>fe,frontmatter:()=>me});var r=ue(w()),me={title:"Introducci\xF3n a React Hooks - useState y useEffect",description:"Aprende los conceptos fundamentales de React Hooks y c\xF3mo useState y useEffect revolucionaron la forma de escribir componentes en React.",date:new Date(17316288e5)};function I(s){let n=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",code:"code",pre:"pre",h3:"h3",ul:"ul",li:"li",ol:"ol"},s.components);return(0,r.jsxDEV)(r.Fragment,{children:[(0,r.jsxDEV)(n.h1,{children:"Introducci\xF3n a React Hooks"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:7,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:["Los ",(0,r.jsxDEV)(n.strong,{children:"React Hooks"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:9,columnNumber:5},this)," fueron introducidos en React 16.8 y cambiaron completamente la forma en que escribimos componentes. Antes de los Hooks, necesit\xE1bamos usar componentes de clase para manejar estado y efectos secundarios. Ahora, podemos hacer todo esto en componentes funcionales."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:9,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"\xBFQu\xE9 es useState?"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:11,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:[(0,r.jsxDEV)(n.code,{children:"useState"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:13,columnNumber:1},this)," es el Hook m\xE1s b\xE1sico y fundamental. Nos permite agregar estado local a un componente funcional."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:13,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{className:"language-javascript",children:`import { useState } from "react";\r
\r
function Contador() {\r
  const [count, setCount] = useState(0);\r
\r
  return (\r
    <div>\r
      <p>Has clickeado {count} veces</p>\r
      <button onClick={() => setCount(count + 1)}>Click aqu\xED</button>\r
    </div>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:15,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:15,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:"Caracter\xEDsticas clave de useState:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:30,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.ul,{children:[`
`,(0,r.jsxDEV)(n.li,{children:[(0,r.jsxDEV)(n.strong,{children:"Sintaxis simple"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:32,columnNumber:3},this),": Retorna un array con el valor actual y una funci\xF3n para actualizarlo"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:32,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.li,{children:[(0,r.jsxDEV)(n.strong,{children:"M\xFAltiples estados"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:33,columnNumber:3},this),": Puedes usar useState m\xFAltiples veces en un mismo componente"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:33,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.li,{children:[(0,r.jsxDEV)(n.strong,{children:"Estado inicial"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:34,columnNumber:3},this),": El valor pasado a useState es el estado inicial"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:34,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:32,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"\xBFQu\xE9 es useEffect?"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:36,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:[(0,r.jsxDEV)(n.code,{children:"useEffect"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:38,columnNumber:1},this)," nos permite realizar efectos secundarios en componentes funcionales. Es como componentDidMount, componentDidUpdate y componentWillUnmount combinados."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:38,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.pre,{children:(0,r.jsxDEV)(n.code,{className:"language-javascript",children:`import { useState, useEffect } from "react";\r
\r
function UsuarioActivo() {\r
  const [usuario, setUsuario] = useState(null);\r
\r
  useEffect(() => {\r
    // Este c\xF3digo se ejecuta despu\xE9s del render\r
    fetch("/api/usuario")\r
      .then((response) => response.json())\r
      .then((data) => setUsuario(data));\r
\r
    // Funci\xF3n de limpieza (opcional)\r
    return () => {\r
      console.log("Componente desmontado");\r
    };\r
  }, []); // Array de dependencias vac\xEDo = solo se ejecuta una vez\r
\r
  return <div>{usuario?.nombre}</div>;\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:40,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:40,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h3,{children:"Array de dependencias en useEffect:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:62,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.ol,{children:[`
`,(0,r.jsxDEV)(n.li,{children:[(0,r.jsxDEV)(n.strong,{children:"Sin array"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:64,columnNumber:4},this),": Se ejecuta en cada render"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:64,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.li,{children:[(0,r.jsxDEV)(n.strong,{children:["Array vac\xEDo ",(0,r.jsxDEV)(n.code,{children:"[]"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:65,columnNumber:18},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:65,columnNumber:4},this),": Se ejecuta solo una vez al montar el componente"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:65,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.li,{children:[(0,r.jsxDEV)(n.strong,{children:["Con dependencias ",(0,r.jsxDEV)(n.code,{children:"[count]"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:66,columnNumber:23},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:66,columnNumber:4},this),": Se ejecuta cuando cambian las dependencias"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:66,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:64,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"Mejores pr\xE1cticas"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:68,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.ul,{children:[`
`,(0,r.jsxDEV)(n.li,{children:["\u2705 ",(0,r.jsxDEV)(n.strong,{children:"Nombra tus estados de forma descriptiva"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:70,columnNumber:5},this),": ",(0,r.jsxDEV)(n.code,{children:"[isLoading, setIsLoading]"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:70,columnNumber:50},this)," mejor que ",(0,r.jsxDEV)(n.code,{children:"[flag, setFlag]"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:70,columnNumber:88},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:70,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.li,{children:["\u2705 ",(0,r.jsxDEV)(n.strong,{children:"Divide efectos complejos"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:71,columnNumber:5},this),": Es mejor tener m\xFAltiples useEffect simples que uno complejo"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:71,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.li,{children:["\u2705 ",(0,r.jsxDEV)(n.strong,{children:"Limpia tus efectos"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:72,columnNumber:5},this),": Cancela suscripciones, timers, etc. en la funci\xF3n de retorno"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:72,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.li,{children:["\u274C ",(0,r.jsxDEV)(n.strong,{children:"Evita dependencias innecesarias"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:73,columnNumber:5},this),": Solo incluye lo que realmente necesitas"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:73,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:70,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.h2,{children:"Conclusi\xF3n"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:75,columnNumber:1},this),`
`,(0,r.jsxDEV)(n.p,{children:"Los Hooks han simplificado enormemente el desarrollo en React. Con useState y useEffect puedes manejar la mayor\xEDa de los casos de uso en tus aplicaciones. En el pr\xF3ximo post exploraremos Hooks m\xE1s avanzados como useContext y useReducer."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:77,columnNumber:1},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx",lineNumber:1,columnNumber:1},this)}function be(s={}){let{wrapper:n}=s.components||{};return n?(0,r.jsxDEV)(n,Object.assign({},s,{children:(0,r.jsxDEV)(I,s,void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx"},this)}),void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-77298a1a-d107-43de-b620-5e2ac2c3b648.mdx"},this):I(s)}var fe=be;return de(pe);})();
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
;return Component;0:{"buildId":"aSan2I6MdDlLFDXbAherv","rsc":["$","$1","c",{"children":[["$","$L2",null,{"post":{"title":"Introducción a React Hooks - useState y useEffect","description":"Aprende los conceptos fundamentales de React Hooks y cómo useState y useEffect revolucionaron la forma de escribir componentes en React.","date":"2024-11-15T03:00:00.000Z","body":{"raw":"$3","code":"$4"},"_id":"01-blog.mdx","_raw":{"sourceFilePath":"01-blog.mdx","sourceFileName":"01-blog.mdx","sourceFileDir":".","contentType":"mdx","flattenedPath":"01-blog"},"type":"Post","url":"/posts/01-blog"}}],["$L5"],"$L6"]}],"loading":null,"isPartial":false}
5:["$","script","script-0",{"src":"/_next/static/chunks/1ece12c6b730817d.js","async":true}]
6:["$","$L7",null,{"children":["$","$8",null,{"name":"Next.MetadataOutlet","children":"$@9"}]}]
9:null
