import { useState, type FormEvent } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [color, setColor] = useState("");
  const [accept, setAccept] = useState(false);

  const [touched, setTouched] = useState({
    username: false,
    color: false,
    accept: false,
  });

  type Field = "username" | "color" | "accept";
  const handleBlur = (field: Field) => {
    setTouched((prev) => ({
      ...prev,
      [field]: true,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setTouched({
      username: true,
      color: true,
      accept: true,
    });

    if (username.length >= 3 && color !== "" && accept) {
      alert("Formulario enviado correctamente");
    }

    console.log({
      username,
      color,
      accept
    })
  };

  return (
    <div className="container mx-auto">
      <h1>App</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3" style={{ maxWidth: "300px" }}>
          <input
            style={{ width: "300px" }}
            type="text"
            placeholder="Your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onBlur={() => handleBlur("username")}
            className={`
            form-control 
            ${touched.username &&
              (username.length >= 3 ? "is-valid" : "is-invalid")
              }
            `}
          />

          <div className="invalid-feedback">
            El nombre de usuario tiene que tener mínimo 3 carácteres
          </div>
        </div>

        <div className="mb-3">
          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            onBlur={() => handleBlur("color")}
            className={`form-select ${touched.color && (color !== "" ? "is-valid" : "is-invalid")
              }`}
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

          <div className="invalid-feedback">Seleccionar un color</div>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            checked={accept}
            onChange={(e) => setAccept(e.target.checked)}
            onBlur={() => handleBlur("accept")}
            className={`form-check-input ${touched.accept && (accept ? "is-valid" : "is-invalid")
              }`}
          />
          <label className="form-check-label">I accept the terms</label>

          <div className="invalid-feedback" style={{ width: "100%", marginLeft: "-25px" }}>Accepta los términos</div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default App;