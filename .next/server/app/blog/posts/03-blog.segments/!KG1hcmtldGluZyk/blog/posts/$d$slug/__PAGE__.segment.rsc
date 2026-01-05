1:"$Sreact.fragment"
2:I[29135,["/_next/static/chunks/1ece12c6b730817d.js"],"default"]
7:I[97367,["/_next/static/chunks/ff1a16fafef87110.js","/_next/static/chunks/247eb132b7f7b574.js"],"OutletBoundary"]
8:"$Sreact.suspense"
3:T16a0,
# TypeScript con React: Por Qué y Cómo Usarlo

**TypeScript** se ha convertido en el estándar de facto para aplicaciones React modernas. En este post, exploraremos por qué deberías usarlo y cómo comenzar.

## ¿Por Qué TypeScript?

### Beneficios principales:

1. **Detecta errores antes de ejecutar el código**
2. **Mejor experiencia de desarrollo** (autocompletado inteligente)
3. **Documentación viva** en tu código
4. **Refactorización más segura**
5. **Mejor colaboración** en equipos grandes

## Configurando TypeScript en React

### Con Create React App:

```bash
npx create-react-app mi-app --template typescript
```

### Con Next.js:

```bash
npx create-next-app@latest mi-app --typescript
```

### Con Vite:

```bash
npm create vite@latest mi-app -- --template react-ts
```

## Tipos Básicos para Props

### Componente Funcional con Props

```typescript
// ❌ JavaScript - Sin tipos
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}

// ✅ TypeScript - Con tipos
interface SaludoProps {
  nombre: string;
  edad?: number; // ? = opcional
  activo?: boolean;
}

function Saludo({ nombre, edad, activo = true }: SaludoProps) {
  return (
    <div>
      <h1>Hola {nombre}</h1>
      {edad && <p>Tienes {edad} años</p>}
      {activo && <span>✅ Activo</span>}
    </div>
  );
}
```

## Tipos Comunes en React

### 1. **Props con Hijos (children)**

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return <div className={className}>{children}</div>;
}
```

### 2. **Event Handlers**

```typescript
interface FormularioProps {
  onSubmit: (datos: { email: string; password: string }) => void;
}

function Formulario({ onSubmit }: FormularioProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ...
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### 3. **useState con TypeScript**

```typescript
// Tipo inferido automáticamente
const [count, setCount] = useState(0); // number

// Tipo explícito necesario para valores complejos
interface User {
  id: number;
  nombre: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);

// Para arrays
const [users, setUsers] = useState<User[]>([]);
```

### 4. **useRef con TypeScript**

```typescript
import { useRef } from "react";

function InputFocus() {
  // Para elementos del DOM
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus(); // ?. = optional chaining
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Enfocar Input</button>
    </>
  );
}
```

## Props Avanzadas

### Componentes que aceptan múltiples tipos de hijos

```typescript
type CardProps = {
  titulo: string;
  children: React.ReactNode;
} & ({ tipo: "info"; icono?: string } | { tipo: "peligro"; mensaje: string });

function Card(props: CardProps) {
  if (props.tipo === "peligro") {
    // TypeScript sabe que 'mensaje' existe aquí
    return <div className="danger">{props.mensaje}</div>;
  }

  return <div className="info">{props.titulo}</div>;
}
```

### Genéricos en Componentes

```typescript
interface ListaProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function Lista<T>({ items, renderItem }: ListaProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Uso
<Lista items={[1, 2, 3]} renderItem={(num) => <span>{num * 2}</span>} />;
```

## Tipos Utilitarios de TypeScript

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
  password: string;
}

// Partial - Hace todas las propiedades opcionales
type UsuarioParcial = Partial<Usuario>;

// Omit - Excluye propiedades
type UsuarioPublico = Omit<Usuario, "password">;

// Pick - Selecciona solo ciertas propiedades
type UsuarioLogin = Pick<Usuario, "email" | "password">;

// Required - Hace todas las propiedades requeridas
type UsuarioCompleto = Required<Usuario>;
```

## Errores Comunes y Soluciones

### Error: "Type 'null' is not assignable"

```typescript
// ❌ Problema
const [data, setData] = useState(null);

// ✅ Solución
const [data, setData] = useState<Data | null>(null);
```

### Error: "Property does not exist on type"

```typescript
// ❌ Problema
const handleClick = (e) => {
  // 'e' es tipo 'any'
  console.log(e.target.value);
};

// ✅ Solución
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget.textContent);
};
```

## Mejores Prácticas

1. ✅ **Usa `interface` para definir props** (más extensible)
2. ✅ **Evita `any`** - pierde todos los beneficios de TypeScript
3. ✅ **Usa tipos de React** (`React.FC` se desaconseja ahora)
4. ✅ **Aprovecha la inferencia** - no sobre-especifiques tipos
5. ✅ **Crea types reutilizables** para objetos comunes

## Conclusión

TypeScript puede parecer abrumador al principio, pero los beneficios superan ampliamente el tiempo de aprendizaje. Comienza con lo básico: tipar tus props y estados, y gradualmente incorpora características más avanzadas.

**Consejo**: No intentes aprender todo TypeScript de una vez. Empieza con un proyecto pequeño y ve agregando tipos según los necesites. ¡Tu yo del futuro te lo agradecerá!
4:T80ef,var Component=(()=>{var ie=Object.create;var p=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var le=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var g=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports),oe=(i,e)=>{for(var d in e)p(i,d,{get:e[d],enumerable:!0})},R=(i,e,d,c)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of te(e))!de.call(i,o)&&o!==d&&p(i,o,{get:()=>e[o],enumerable:!(c=ae(e,o))||c.enumerable});return i};var ue=(i,e,d)=>(d=i!=null?ie(le(i)):{},R(e||!i||!i.__esModule?p(d,"default",{value:i,enumerable:!0}):d,i)),me=i=>R(p({},"__esModule",{value:!0}),i);var O=g((Ne,S)=>{S.exports=React});var k=g(x=>{"use strict";(function(){function i(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===J?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case V:return"Profiler";case H:return"StrictMode";case B:return"Suspense";case K:return"SuspenseList";case Z:return"Activity"}if(typeof n=="object")switch(typeof n.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),n.$$typeof){case $:return"Portal";case G:return n.displayName||"Context";case W:return(n._context.displayName||"Context")+".Consumer";case X:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return s=n.displayName||null,s!==null?s:i(n.type)||"Memo";case f:s=n._payload,n=n._init;try{return i(n(s))}catch{}}return null}function e(n){return""+n}function d(n){try{e(n);var s=!1}catch{s=!0}if(s){s=console;var a=s.error,l=typeof Symbol=="function"&&Symbol.toStringTag&&n[Symbol.toStringTag]||n.constructor.name||"Object";return a.call(s,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",l),e(n)}}function c(n){if(n===_)return"<>";if(typeof n=="object"&&n!==null&&n.$$typeof===f)return"<...>";try{var s=i(n);return s?"<"+s+">":"<...>"}catch{return"<...>"}}function o(){var n=j.A;return n===null?null:n.getOwner()}function y(){return Error("react-stack-top-frame")}function M(n){if(U.call(n,"key")){var s=Object.getOwnPropertyDescriptor(n,"key").get;if(s&&s.isReactWarning)return!1}return n.key!==void 0}function L(n,s){function a(){F||(F=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",s))}a.isReactWarning=!0,Object.defineProperty(n,"key",{get:a,configurable:!0})}function Y(){var n=i(this.type);return E[n]||(E[n]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),n=this.props.ref,n!==void 0?n:null}function z(n,s,a,l,u,N){var t=a.ref;return n={$$typeof:C,type:n,key:s,props:a,_owner:l},(t!==void 0?t:null)!==null?Object.defineProperty(n,"ref",{enumerable:!1,get:Y}):Object.defineProperty(n,"ref",{enumerable:!1,value:null}),n._store={},Object.defineProperty(n._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(n,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(n,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:u}),Object.defineProperty(n,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:N}),Object.freeze&&(Object.freeze(n.props),Object.freeze(n)),n}function q(n,s,a,l,u,N){var t=s.children;if(t!==void 0)if(l)if(ee(t)){for(l=0;l<t.length;l++)v(t[l]);Object.freeze&&Object.freeze(t)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else v(t);if(U.call(s,"key")){t=i(n);var m=Object.keys(s).filter(function(se){return se!=="key"});l=0<m.length?"{key: someKey, "+m.join(": ..., ")+": ...}":"{key: someKey}",T[t+l]||(m=0<m.length?"{"+m.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,l,t,m,t),T[t+l]=!0)}if(t=null,a!==void 0&&(d(a),t=""+a),M(s)&&(d(s.key),t=""+s.key),"key"in s){a={};for(var h in s)h!=="key"&&(a[h]=s[h])}else a=s;return t&&L(a,typeof n=="function"?n.displayName||n.name||"Unknown":n),z(n,t,a,o(),u,N)}function v(n){P(n)?n._store&&(n._store.validated=1):typeof n=="object"&&n!==null&&n.$$typeof===f&&(n._payload.status==="fulfilled"?P(n._payload.value)&&n._payload.value._store&&(n._payload.value._store.validated=1):n._store&&(n._store.validated=1))}function P(n){return typeof n=="object"&&n!==null&&n.$$typeof===C}var b=O(),C=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),W=Symbol.for("react.consumer"),G=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),J=Symbol.for("react.client.reference"),j=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U=Object.prototype.hasOwnProperty,ee=Array.isArray,D=console.createTask?console.createTask:function(){return null};b={react_stack_bottom_frame:function(n){return n()}};var F,E={},ne=b.react_stack_bottom_frame.bind(b,y)(),re=D(c(y)),T={};x.Fragment=_,x.jsxDEV=function(n,s,a,l){var u=1e4>j.recentlyCreatedOwnerStacks++;return q(n,s,a,l,u?Error("react-stack-top-frame"):ne,u?D(c(n)):re)}})()});var w=g((ge,A)=>{"use strict";A.exports=k()});var _e={};oe(_e,{default:()=>pe,frontmatter:()=>ce});var r=ue(w()),ce={title:"TypeScript con React - Gu\xEDa Completa para Principiantes",description:"Aprende c\xF3mo TypeScript mejora tu desarrollo en React con tipado est\xE1tico, mejor autocompletado y menos errores en producci\xF3n.",date:new Date(17333568e5)};function I(i){let e=Object.assign({h1:"h1",p:"p",strong:"strong",h2:"h2",h3:"h3",ol:"ol",li:"li",pre:"pre",code:"code"},i.components);return(0,r.jsxDEV)(r.Fragment,{children:[(0,r.jsxDEV)(e.h1,{children:"TypeScript con React: Por Qu\xE9 y C\xF3mo Usarlo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:7,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:[(0,r.jsxDEV)(e.strong,{children:"TypeScript"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:9,columnNumber:1},this)," se ha convertido en el est\xE1ndar de facto para aplicaciones React modernas. En este post, exploraremos por qu\xE9 deber\xEDas usarlo y c\xF3mo comenzar."]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:9,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"\xBFPor Qu\xE9 TypeScript?"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:11,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Beneficios principales:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:13,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.ol,{children:[`
`,(0,r.jsxDEV)(e.li,{children:(0,r.jsxDEV)(e.strong,{children:"Detecta errores antes de ejecutar el c\xF3digo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:15,columnNumber:4},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:15,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.strong,{children:"Mejor experiencia de desarrollo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:16,columnNumber:4},this)," (autocompletado inteligente)"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:16,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.strong,{children:"Documentaci\xF3n viva"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:17,columnNumber:4},this)," en tu c\xF3digo"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:17,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:(0,r.jsxDEV)(e.strong,{children:"Refactorizaci\xF3n m\xE1s segura"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:18,columnNumber:4},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:18,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:[(0,r.jsxDEV)(e.strong,{children:"Mejor colaboraci\xF3n"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:19,columnNumber:4},this)," en equipos grandes"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:19,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:15,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Configurando TypeScript en React"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:21,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Con Create React App:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:23,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-bash",children:`npx create-react-app mi-app --template typescript
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:25,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:25,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Con Next.js:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:29,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-bash",children:`npx create-next-app@latest mi-app --typescript
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:31,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:31,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Con Vite:"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:35,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-bash",children:`npm create vite@latest mi-app -- --template react-ts
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:37,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:37,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Tipos B\xE1sicos para Props"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:41,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Componente Funcional con Props"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:43,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`// \u274C JavaScript - Sin tipos\r
function Saludo({ nombre }) {\r
  return <h1>Hola {nombre}</h1>;\r
}\r
\r
// \u2705 TypeScript - Con tipos\r
interface SaludoProps {\r
  nombre: string;\r
  edad?: number; // ? = opcional\r
  activo?: boolean;\r
}\r
\r
function Saludo({ nombre, edad, activo = true }: SaludoProps) {\r
  return (\r
    <div>\r
      <h1>Hola {nombre}</h1>\r
      {edad && <p>Tienes {edad} a\xF1os</p>}\r
      {activo && <span>\u2705 Activo</span>}\r
    </div>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:45,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:45,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Tipos Comunes en React"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:69,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:["1. ",(0,r.jsxDEV)(e.strong,{children:"Props con Hijos (children)"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:71,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:71,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`interface ContainerProps {\r
  children: React.ReactNode;\r
  className?: string;\r
}\r
\r
function Container({ children, className }: ContainerProps) {\r
  return <div className={className}>{children}</div>;\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:73,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:73,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:["2. ",(0,r.jsxDEV)(e.strong,{children:"Event Handlers"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:84,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:84,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`interface FormularioProps {\r
  onSubmit: (datos: { email: string; password: string }) => void;\r
}\r
\r
function Formulario({ onSubmit }: FormularioProps) {\r
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\r
    e.preventDefault();\r
    // ...\r
  };\r
\r
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\r
    console.log(e.target.value);\r
  };\r
\r
  return <form onSubmit={handleSubmit}>...</form>;\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:86,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:86,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:["3. ",(0,r.jsxDEV)(e.strong,{children:"useState con TypeScript"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:105,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:105,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`// Tipo inferido autom\xE1ticamente\r
const [count, setCount] = useState(0); // number\r
\r
// Tipo expl\xEDcito necesario para valores complejos\r
interface User {\r
  id: number;\r
  nombre: string;\r
  email: string;\r
}\r
\r
const [user, setUser] = useState<User | null>(null);\r
\r
// Para arrays\r
const [users, setUsers] = useState<User[]>([]);
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:107,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:107,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:["4. ",(0,r.jsxDEV)(e.strong,{children:"useRef con TypeScript"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:124,columnNumber:8},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:124,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`import { useRef } from "react";\r
\r
function InputFocus() {\r
  // Para elementos del DOM\r
  const inputRef = useRef<HTMLInputElement>(null);\r
\r
  const focusInput = () => {\r
    inputRef.current?.focus(); // ?. = optional chaining\r
  };\r
\r
  return (\r
    <>\r
      <input ref={inputRef} type="text" />\r
      <button onClick={focusInput}>Enfocar Input</button>\r
    </>\r
  );\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:126,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:126,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Props Avanzadas"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:146,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Componentes que aceptan m\xFAltiples tipos de hijos"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:148,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`type CardProps = {\r
  titulo: string;\r
  children: React.ReactNode;\r
} & ({ tipo: "info"; icono?: string } | { tipo: "peligro"; mensaje: string });\r
\r
function Card(props: CardProps) {\r
  if (props.tipo === "peligro") {\r
    // TypeScript sabe que 'mensaje' existe aqu\xED\r
    return <div className="danger">{props.mensaje}</div>;\r
  }\r
\r
  return <div className="info">{props.titulo}</div>;\r
}
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:150,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:150,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:"Gen\xE9ricos en Componentes"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:166,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`interface ListaProps<T> {\r
  items: T[];\r
  renderItem: (item: T) => React.ReactNode;\r
}\r
\r
function Lista<T>({ items, renderItem }: ListaProps<T>) {\r
  return (\r
    <ul>\r
      {items.map((item, index) => (\r
        <li key={index}>{renderItem(item)}</li>\r
      ))}\r
    </ul>\r
  );\r
}\r
\r
// Uso\r
<Lista items={[1, 2, 3]} renderItem={(num) => <span>{num * 2}</span>} />;
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:168,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:168,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Tipos Utilitarios de TypeScript"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:188,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`interface Usuario {\r
  id: number;\r
  nombre: string;\r
  email: string;\r
  password: string;\r
}\r
\r
// Partial - Hace todas las propiedades opcionales\r
type UsuarioParcial = Partial<Usuario>;\r
\r
// Omit - Excluye propiedades\r
type UsuarioPublico = Omit<Usuario, "password">;\r
\r
// Pick - Selecciona solo ciertas propiedades\r
type UsuarioLogin = Pick<Usuario, "email" | "password">;\r
\r
// Required - Hace todas las propiedades requeridas\r
type UsuarioCompleto = Required<Usuario>;
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:190,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:190,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Errores Comunes y Soluciones"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:211,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:`Error: "Type 'null' is not assignable"`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:213,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`// \u274C Problema\r
const [data, setData] = useState(null);\r
\r
// \u2705 Soluci\xF3n\r
const [data, setData] = useState<Data | null>(null);
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:215,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:215,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h3,{children:'Error: "Property does not exist on type"'},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:223,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.pre,{children:(0,r.jsxDEV)(e.code,{className:"language-typescript",children:`// \u274C Problema\r
const handleClick = (e) => {\r
  // 'e' es tipo 'any'\r
  console.log(e.target.value);\r
};\r
\r
// \u2705 Soluci\xF3n\r
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {\r
  console.log(e.currentTarget.textContent);\r
};
`},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:225,columnNumber:1},this)},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:225,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Mejores Pr\xE1cticas"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:238,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.ol,{children:[`
`,(0,r.jsxDEV)(e.li,{children:["\u2705 ",(0,r.jsxDEV)(e.strong,{children:["Usa ",(0,r.jsxDEV)(e.code,{children:"interface"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:240,columnNumber:12},this)," para definir props"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:240,columnNumber:6},this)," (m\xE1s extensible)"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:240,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:["\u2705 ",(0,r.jsxDEV)(e.strong,{children:["Evita ",(0,r.jsxDEV)(e.code,{children:"any"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:241,columnNumber:14},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:241,columnNumber:6},this)," - pierde todos los beneficios de TypeScript"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:241,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:["\u2705 ",(0,r.jsxDEV)(e.strong,{children:"Usa tipos de React"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:242,columnNumber:6},this)," (",(0,r.jsxDEV)(e.code,{children:"React.FC"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:242,columnNumber:30},this)," se desaconseja ahora)"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:242,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:["\u2705 ",(0,r.jsxDEV)(e.strong,{children:"Aprovecha la inferencia"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:243,columnNumber:6},this)," - no sobre-especifiques tipos"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:243,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.li,{children:["\u2705 ",(0,r.jsxDEV)(e.strong,{children:"Crea types reutilizables"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:244,columnNumber:6},this)," para objetos comunes"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:244,columnNumber:1},this),`
`]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:240,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.h2,{children:"Conclusi\xF3n"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:246,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:"TypeScript puede parecer abrumador al principio, pero los beneficios superan ampliamente el tiempo de aprendizaje. Comienza con lo b\xE1sico: tipar tus props y estados, y gradualmente incorpora caracter\xEDsticas m\xE1s avanzadas."},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:248,columnNumber:1},this),`
`,(0,r.jsxDEV)(e.p,{children:[(0,r.jsxDEV)(e.strong,{children:"Consejo"},void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:250,columnNumber:1},this),": No intentes aprender todo TypeScript de una vez. Empieza con un proyecto peque\xF1o y ve agregando tipos seg\xFAn los necesites. \xA1Tu yo del futuro te lo agradecer\xE1!"]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:250,columnNumber:1},this)]},void 0,!0,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx",lineNumber:1,columnNumber:1},this)}function be(i={}){let{wrapper:e}=i.components||{};return e?(0,r.jsxDEV)(e,Object.assign({},i,{children:(0,r.jsxDEV)(I,i,void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx"},this)}),void 0,!1,{fileName:"C:\\Users\\ivanp\\Documents\\Facundo\\learning\\learn-reactjs-simple\\Posts\\_mdx_bundler_entry_point-6268d685-d6b2-48e5-b0b4-44850b8312ed.mdx"},this):I(i)}var pe=be;return me(_e);})();
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
;return Component;0:{"buildId":"aSan2I6MdDlLFDXbAherv","rsc":["$","$1","c",{"children":[["$","$L2",null,{"post":{"title":"TypeScript con React - Guía Completa para Principiantes","description":"Aprende cómo TypeScript mejora tu desarrollo en React con tipado estático, mejor autocompletado y menos errores en producción.","date":"2024-12-05T03:00:00.000Z","body":{"raw":"$3","code":"$4"},"_id":"03-blog.mdx","_raw":{"sourceFilePath":"03-blog.mdx","sourceFileName":"03-blog.mdx","sourceFileDir":".","contentType":"mdx","flattenedPath":"03-blog"},"type":"Post","url":"/posts/03-blog"}}],["$L5"],"$L6"]}],"loading":null,"isPartial":false}
5:["$","script","script-0",{"src":"/_next/static/chunks/1ece12c6b730817d.js","async":true}]
6:["$","$L7",null,{"children":["$","$8",null,{"name":"Next.MetadataOutlet","children":"$@9"}]}]
9:null
