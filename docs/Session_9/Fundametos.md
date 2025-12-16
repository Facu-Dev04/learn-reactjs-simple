## App Router 

- **Routing basado en archivos**: En Next.js, las rutas se crean automáticamente basándose en la estructura de archivos dentro de la carpeta `app`. Cada archivo o carpeta dentro de `app` representa una ruta en la aplicación.
- **Rendering por defecto**: Next.js utiliza el renderizado del lado del servidor (SSR) de forma predeterminada, lo que significa que las páginas se generan en el servidor y se envían al cliente ya renderizadas.
- **Data Fetching**: Next.js proporciona varias formas de obtener datos para las páginas, incluyendo funciones como `getServerSideProps`, `getStaticProps` y `getInitialProps`.
- **Caching y optimización**: Next.js incluye características integradas para el almacenamiento en caché y la optimización del rendimiento, como la generación estática de páginas (SSG) y la optimización automática de imágenes.
- **Transpilation**: Next.js utiliza Babel para transpilar el código JavaScript moderno a una versión compatible con navegadores más antiguos.
- **API**: Next.js permite crear rutas de API dentro de la carpeta `pages/api`, lo que facilita la creación de endpoints para manejar solicitudes HTTP.
- **Tooling**: Next.js viene con herramientas integradas para el desarrollo, como un servidor de desarrollo, recarga en caliente (hot reloading), análisis de rendimiento y turbopack que es 700 veces más rapido.

## Pensado en Componentes de Servidor.

- El React Server Components (RSC) es una característica de React que permite a los desarrolladores crear componentes que se renderizan en el servidor en lugar de en el cliente. Esto puede mejorar el rendimiento y la experiencia del usuario al reducir la cantidad de JavaScript que se envía al navegador y al permitir una carga más rápida de las páginas web.

- En lugar de que React renderice toda su aplicacion del lado del cliente, ahora React le brinda la flexibilidad de elegir donde renderizar sus componentes, ya sea en el servidor o en el cliente, dependiendo de las necesidades de su aplicación.

- Si tuvieramos que dividir la pagina en componentes mas pequeños, notara que la mayoria de los componentes no son interactivos y se pueden representar en el servidor como componentes del servidor. 

- Para piezas mas pequeñas e interactivas de la pagina, podemos usar componentes de cliente que se renderizan en el navegador del usuario.

- Para facilitar esta transicion, Next.js introduce la directiva especial `"use client";` que se coloca al principio de un archivo de componente para indicar que ese componente debe ser tratado como un componente de cliente. Esto permite a los desarrolladores especificar claramente qué componentes deben renderizarse en el cliente, mientras que el resto puede beneficiarse del renderizado del servidor.

## Instalacion de Next js con App Router

- Para crear una nueva aplicacion de Next js con App Router, simplemente debemos correr el siguiente comando en nuestra terminal:

```bash
npx create-next-app@latest my-next-app
```

- Las carpetas se utilizan para definir rutas. Una ruta es una ruta unica de carpertas anidadas, siguiendoo la jerarquia de carpetas dentro de la carpeta `app` hasta el arhivo `page.tsx`.

- **Tip**: Por defectos los componentes que estan dentro de `App` son React Server Components. Si queremos que un componente sea un Componente de Cliente, debemos agregar `"use client";` al principio del archivo del componente.

## Conveción de nombres en App Router

- Next.js utiliza convenciones de nombres específicas para definir rutas y comportamientos en la carpeta `app`. Aquí hay algunas convenciones clave:

1. `page.tsx` o `page.jsx`: Cualquier archivo con este nombre dentro de una carpeta en `app` se considera una página y define una ruta. Por ejemplo, `app/about/page.tsx` define la ruta `/about`.
2. `route.ts`: Este archivo se utiliza para definir rutas de API personalizadas dentro de la carpeta `app`. Permite manejar solicitudes HTTP específicas para esa ruta.
3. `layout.tsx` o `layout.jsx`: Este archivo define un diseño compartido para todas las páginas dentro de una carpeta. Permite reutilizar componentes comunes como encabezados, pies de página y barras de navegación.
4. `template.tsx` o `template.jsx`: Este archivo se utiliza para definir un diseño que puede cambiar dinámicamente según los parámetros de la ruta. A diferencia de `layout`, que es estático, `template` permite personalizar el diseño para diferentes rutas.
5. `not-found.tsx`: Este archivo se utiliza para definir una página personalizada que se muestra cuando una ruta no coincide con ninguna página existente. Es útil para manejar errores 404.
6. `error.tsx`: Este archivo se utiliza para definir una página de error personalizada que se muestra cuando ocurre un error en la aplicación. Permite manejar errores de manera elegante y proporcionar retroalimentación al usuario.
7. `loading.tsx`: Este archivo se utiliza para definir un componente de carga que se muestra mientras se están obteniendo datos o cargando una página. Proporciona una mejor experiencia de usuario al indicar que la aplicación está en proceso de carga.
8. `globla-error.tsx`: Este archivo se utiliza para definir una página de error global que se muestra cuando ocurre un error en cualquier parte de la aplicación. Permite manejar errores de manera centralizada y proporcionar retroalimentación al usuario.

## Enrutamiento centrado en el servidor con navegacion (Link) del lado del cliente

- Al utilizar enrutamiento centrado en el servidor en Next.js, las páginas se renderizan en el servidor y se envían al cliente ya renderizadas. Sin embargo, para mejorar la experiencia del usuario y permitir una navegación más fluida entre las páginas, Next.js proporciona el componente `Link` que permite la navegación del lado del cliente.

- El componente `Link` se utiliza para envolver elementos de anclaje (`<a>`) y proporciona una navegación sin recarga completa de la página. Cuando un usuario hace clic en un enlace creado con el componente `Link`, Next.js intercepta la solicitud y realiza una transición suave a la nueva página, cargando solo el contenido necesario en lugar de recargar toda la página desde el servidor.

- Sin embargo, una vez que la pagina se ha cargado en el navegador del usuarioo, la aplicacion Nextjs utiliza la navegacion del lado del cliente para mejorar la experiencia del usuario al navegar entre las diferentes paginas de la aplicacion. El componente de enlace menciaonado, es resposable de manejar esta navegacion del lado del cliente.

- Esta combinacion de enrutamiento centrado en el servidor y enrutamiento del lado del cliente permite una experiencia similar a la de una aplicacion de una sola pagina (SPA), donde la navegacion entre rutas es rapida y sin recargas de paginas completas. Sin embargo, para aclarar, cuando un usuario navega entre paginas dentro de la aplicacion, si se realizan solicitudes al servidor, pereo estras solicitudes son para obtener solo los datos necesarios para actualizar los componentes de la pagina en lugar de cargar toda la pagina nuevamente. Esto hace que la nevegacion entre paginas sea mas rapida y eficiente, mejorando la experiencia del usuario en general.

- Finalmente mientras el usuario va navegando por nuestra aplicacion, el enrutado va almacenado nuestra pagina en el cache del navegador, para que si el usuario vuelve a una pagina ya visitada, esta se cargue instantaneamente desde la cache sin necesidad de hacer una nueva solicitud al servidor.

## page.tsx o page.jsx

Cree 



