## FormData

- Ahora bien si queremos manejar muchos datos, y tener muchos inpus, si lo hacemos de la manera anterior nos va a quedar un codigo super largo, muy poco mantenible, por eso existe un objecto llamada
  `FormData`

- El objeto FormData es una forma de construir un conjunto de pares clave/valor representando los campos de un formulario y sus valores.

```tsx
import { useRef, type FormEvent } from "react";

const App = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Create the FormData object from the form
    const formData = new FormData(formRef.current);

    // Get values using get()
    const username = formData.get("username");
    const color = formData.get("color");
    const accept = !!formData.get("accept"); // Convert to boolean

    console.log({
      username,
      color,
      accept,
    });
  };

  return (
    <div>
      <h1>App</h1>
      <form
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <input
          type="text"
          name="username"
          placeholder="Your username"
        />

        <br />

        <select
          name="color"
          defaultValue=""
        >
          <option
            value=""
            disabled
          >
            Choose a color
          </option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>

        <br />

        <label>
          <input
            type="checkbox"
            name="accept"
          />
          I accept the terms
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default App;
```
