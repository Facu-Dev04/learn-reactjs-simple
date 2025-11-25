## API

### Interfaces Plantform Aplication

- Este mismo nos sirve para poder consumir datos de afuera de nuestra aplicación para modificar sin que nosotros estemos pendiente de tal información.

1. Podemos consumir una API del clima que cada ves que este mismo se actualiza, se pueda ver reflejado dentro de nuestra pagina web.

2. Una API para el registro de usuario y el rederizado del mismo donde podemos crear un usuario y traerlo todo usando esa API.

#### Ejemplo:

```typescript
import { useEffect } from "react";

const ConsumerAPI = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <div>API</div>;
};

export default ConsumerAPI;
```
