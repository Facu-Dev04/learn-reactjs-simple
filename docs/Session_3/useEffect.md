## useEffect

El hook useEffect te permite realizar efectos secundarios en componentes funcionales. Es una forma de manejar tareas que no están directamente relacionadas con el renderizado, como:

- Llamadas a APIs
- Suscripciones a eventos
- Manipulación del DOM

## ¿Qué es un efecto secundario?

Un efecto secundario es cualquier acción que ocurre como resultado de un renderizado, pero que no afecta directamente al renderizado en sí. Por ejemplo, si haces una llamada a una API para obtener datos y luego actualizas el estado con esos datos, eso es un efecto secundario. El renderizado en sí no cambia, pero el estado del componente sí.

## ¿Cómo funciona useEffect?

El hook useEffect toma dos argumentos:

- Una función que contiene el código del efecto secundario.

- Un array de dependencias (opcional) que le dice a React cuándo debe ejecutar el efecto.

Si el array de dependencias está vacío, el efecto se ejecutará solo una vez, después del primer renderizado del componente. Si el array contiene variables, el efecto se ejecutará cada vez que esas variables cambien.

```javascript
import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("El componente se ha montado o actualizado");
    document.title = `Count: ${count}`;

    // Cleanup function (opcional)
    return () => {
      console.log("El componente se va a desmontar o actualizar");
    };
  }, [count]); // El efecto se ejecuta cada vez que 'count' cambia

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
};

export default App;
```

## ¿Qué es el array de dependencias?

El array de dependencias es una lista de variables que el efecto depende. Si alguna de estas variables cambia, el efecto se volverá a ejecutar. Si el array está vacío, el efecto solo se ejecutará una vez, después del primer renderizado del componente.

## Efectos de limpieza

A veces, es necesario limpiar los efectos secundarios antes de que el componente se desmonte o antes de que el efecto se vuelva a ejecutar. Para esto, puedes devolver una función de limpieza desde el efecto.
