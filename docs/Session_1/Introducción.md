# Fundamentos de React

### Que es React?

- React es una biblioteca Javascript para crear interfaces de usuario.
- React no es un framework (a diferencia de Angular o Vue, que tienen más opiniones).
- React es un proyecto de código abierto creado por Facebook.
- Está basado en componentes.

## Que es JSX?

- JSX es una extension de sintaxis para Javascript que permite escribir HTML dentro de Javascript.

```javascript
function VideoList({ videos, emptyHeading }) {
  const count = videos.length; // Variable que no cambia
  let heading = emptyHeading; // Variable que cambia su valor

  if (count > 0) {
    const noun = count > 1 ? "Videos" : "Video";
    heading = count + " " + noun;
  }

  return (
    <section>
      <h2>{heading}</h2>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}
```

- Aca dentro de este ejemplo vemos dentro de un codigoo javascript, podemoos poner en un simple return todo el codigo HTML para poder generar toda la estructura del código.

- Auque JSX o TSX solo aparece en el return, la razón por la que necsitas usar la extensión .jsx o .tsx es porque ese bloque JSX no es javascript valido por si solo: es una extension de la sintaxis que reqiere que el compilador (Como babel o Typescript) lo reconozca y lo transforme a JAvascript real.

## Ejemplo:

JSX

```javascript
return <h1>Hola</h1>;
```

Babel

```javascript
return React.createElement("h1", null, "Hola");
```

## Por que importa la extensión .jsx o .tsx?

- Los compiladores como Babel, Typescript, Vite, Webpack, etc, Usan la extensión para saber:

1. Si deben parsear JSX y convertirlo a React.createElement(...)
2. Si deben aplicar la transformaciones especiales.

- Si usas .js o .ts, el compilador podria no reconocer el JSX.

## Que son TanStack y SWC?

- **TanStack** es una colección moderna de bibliotecas poderosas para el ecosistema de React (Auque muchas tambien funcionan en otros frameworks). Incluye herramientas como:

1. tanstack/react-query: Manejo de data fetching y caching (ideal para reemplazar useEffect + fetch)
2. tanstack/router: Un nuevo router que es reactivo, estatico, y basado en archivos (Como nextjs, pero mas flexible).

- TanStack Router es considerado por muchos como el sucesor conceptual de Remix, y es más potente y flexible que React Router para ciertos casos, pero tambien más avanzado.

- **SWC** (Speedy Web Compiler) es un compilador moderno escrito en Rust, utilizado por default en NextJS y algunas otras herramientas. Reemplaza a Babel y es más rápido y más eficiente. Se encarga de:

- Transpilar JSX y Typescript.
- Optimizar el código en tiempo de compilación.
- Apoyar características modernas como server actions en Nextjs.

## Que es esLint?

- EsLint es una herramienta de análisis estático de código para identificar y reportar patrones problemáticos en el código Javascript. Ayuda a mantener un código limpio y consistente, y puede configurarse para seguir las mejores prácticas de codigicación.

## main.tsx

- En simples palabras, el archivo main.tsx es el punto de entrada principal de tu aplicación React. Se encarga de mostrar tu componente `<App />` dentro del HTML, especificamente en el elemento con id="root". Usa createRoot() para arrancar React en modo moderno y envuelve todo en `<StrinctMode></StrinctMode>`, que ayuda a dectetar errores comunes durante el desarrollo.

## Convenciones comunes para nombrar archivos de componentes:

- Las convenciones para nombrar archivoos de componentes suelen depender del estilo del proyecto o del equipo. Aqui te dejo las más comunes y sus nombres:

1. PascalCase (Tambien llamada UpperCamelCase).

- Ejemplo: `UserCard.tsx`, `MyComponent.vue`.
- Uso común: En proyectos de React, Vue (con TypeScript) y librería donde cada componente es único y reutilizable.
- Se llama PascalCase porque cada palabra comienza con mayusculas.

2. kebab-case:

- Ejemplo: user-card.vue, my-component.ts
- Uso común: Muy común en Vue.js (especialmente en templates), también en configuraciones, nombres de rutas, etc.
- 📛 Se llama kebab-case porque parece una brocheta de palabras separadas por guiones.

3. camelCase:

- Ejemplo: userCard.js
- Uso común: No es muy común para archivos, pero se usa mucho para nombres de variables y funciones.

4. snake_case:

- Ejemplo: user_card.js
- Uso común: Más habitual en proyectos Python o bases de datos, poco común en archivos de componentes web.

## Fragment

- Un Fragment es una forma de agrupar múltiples elementos sin añadir un nodo extra al DOM. Es útil cuando necesitas devolver varios elementos desde un componente sin envolverlos en un contenedor adicional.

```jsx
const App = () => {
  return (
    <>
      <h1>Hola App</h1>
      <MyButton />
    </>
  );
};
export default App;

function MyButton() {
  return <button>Click me</button>;
}
```

## Mostrar datos

- JSX te permite insertar variables y expresiones de JavaScript directamente dentro del marcado. Para mostrar datos, simplemente usa llaves {} para envolver la expresión.

- Cuando quieras utilizarlo en las propiedades de un elemento, debes reemplazar las "" por llaves {}.

```jsx
import MyButton from "./components/MyButton";

const App = () => {
  const user = {
    username: "Ignacio",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    imageSize: 90,
  };

  // Desestructuring de objetos
  const { username, imageUrl, imageSize } = user;

  return (
    <>
      <div>
        <h1>Hola: {username}</h1>
        <img
          src={imageUrl}
          alt={`imagen-${username}`}
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: "50%",
          }}
        />
      </div>
      <MyButton />
      <br />
      <p>Lorem, ipsum dolor.</p>
    </>
  );
};
export default App;
```


## Renderizado condicional

- En React, puedes renderizar contenido condicionalmente usando operadores lógicos (if else) o ternarios. Aquí hay dos formas comunes de hacerlo:

```jsx
import MyButton from "./components/MyButton";

const App = () => {
  const user = {
    username: "Ignacio",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    imageSize: 90,
    loggedIn: false,
  };

  // Desestructuring de objetos
  const { username, imageUrl, imageSize, loggedIn } = user;

  if (!loggedIn) {
    return <h1>Por favor, inicia sesión</h1>;
  }

  return (
    <>
      <div>
        <h1>Hola: {username}</h1>
        <img
          src={imageUrl}
          alt={`imagen-${username}`}
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: "50%",
          }}
        />
      </div>
      <MyButton />
      <br />
      <p>Lorem, ipsum dolor.</p>
    </>
  );
};
export default App;
```

- Operador ternario y short-circuit operator (&&)

```jsx
import MyButton from "./components/MyButton";

const App = () => {
  const user = {
    username: "Ignacio",
    email: "ignacio@mail.com",
    imageUrl: "https://i.pravatar.cc/150?img=3",
    imageSize: 90,
    isLoggedIn: true,
  };

  const { username, email, imageSize, imageUrl, isLoggedIn } = user;

  if (!isLoggedIn) {
    return (
      <>
        <h2>Usuario no existe</h2>
        <p>Por favor inicia sesión</p>
      </>
    );
  }

  return (
    <>
      {/* <h1>
        Hola!:{" "}
        {username ? username : <button>Agregar nombre de usuario</button>}
      </h1> */}
      {username && <h1>Hola!: {username}</h1>}
      <h2>{email}</h2>
      <img
        src={imageUrl}
        alt={`imagen-${username}`}
        width={imageSize}
        style={{
          borderRadius: 100,
        }}
      />
      <MyButton />
    </>
  );
};
export default App;
```

## Listas

- Nota que <li> tiene un atributo key (llave). Para cada elemento en una lista, debes pasar una cadena o un número que identifique ese elemento de forma única entre sus hermanos. Usualmente, una llave debe provenir de tus datos, como un ID de una base de datos. React dependerá de tus llaves para entender qué ha ocurrido si luego insertas, eliminas o reordenas los elementos.

- Si no le pones la key React te lo va a advertir (warnign) diciendo que tiene elemento del mismo key, y que no los puede diferenciar. 

```jsx
const App = () => {
  const products = [
    { title: "Col", id: 1 },
    { title: "Ajo", id: 2 },
    { title: "Manzana", id: 3 },
  ];

  return (
    <>
      <ul>
        <li>{products[0].title}</li>
        <li>{products[1].title}</li>
        <li>{products[2].title}</li>
      </ul>
    </>
  );
};
export default App;
```

```jsx
const Products = () => {
  const products = [
    { title: "Col", id: 1 },
    { title: "Ajo", id: 2 },
    { title: "Manzana", id: 3 },
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Products;

```

## Props

- Las props (Abreviatura de "properties") son una forma de pasar datos y funciones a los componentes en React. Son similares a los atributos de HTML, pero más poderosas porque pueden ser cualquier tipo de datos: Cadena, número, objetos, funciones, etc.

```jsx
import ProductItem from "./components/ProductItem";

const App = () => {
  const products = [
    { title: "Col", id: 1 },
    { title: "Ajo", id: 2 },
    { title: "Manzana", id: 3 },
  ];

  return (
    <>
      <ul>
        {products.map((item) => (
          <ProductItem
            key={item.id}
            title={item.title}
            id={item.id}
          />
        ))}
      </ul>
    </>
  );
};
export default App;
```

```jsx

type Props = {
  title: string;
  id: number;
};

// Estamos pasado id y title como propetier del componente
const ProductItem = ({ id, title }: Props) => {
  // console.log(props);
  // const { title, id } = props;

  return (
    <li>
      {id} - {title}
    </li>
  );
};
export default ProductItem;
```

## Interface vs Type

- Tanto *interface* como *type* pueden usarse para definir la forma de los props en Typescript. Por ejemplo, tu código funcioanria igual así:

```ts
type Props = {
  title: string;
  id: number;
}
```

## Cual es mejor? 

- Para props de componentes, ambos funcionan bien y la elección es más de estilo o preferencia. 

- Interface es más usada para objetos y clases, y se puede extender fácilmente. 

- Type es más flexible (puede unir tipos, alias para primitivos, uniones, etc).

## Resumen breve:

- Usa interface si solo defines la forma de un objeto o clase y posiblemente quieras extenderlo.

- Usa type para alias de tipos más complejos (uniones, primitivos, utilidades avanzadas).

- Para props simples, ambos son válidos.

## Eventos 

- Puedes responder a eventos del DOM, como clics, cambios de entrada, etc. Usando props especiales en JSX. Por ejemplo, para manejar un clic en un boton usar la prop onClick. 

- No necesitas pasarle los paréntesis a la función del evento. Si lo haces, se ejecutará inmediatamente al renderizar el componente, en lugar de eseperar al evento. Por lo tanto solo le pasas la referencia a la función, sin paréntesis. 

```javascript
import "./button.css";

const MyButton = () => {
  // Función controladora
  const handleClick = () => {
    alert("me diste click");
  };

  return (
    <button
      className="btn"
      // Referencia a la función sin paréntesis
      onClick={handleClick}
    >
      Click me export
    </button>
  );
};
export default MyButton;
```
