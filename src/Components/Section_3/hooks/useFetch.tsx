import { useEffect, useState } from "react";
import type { Props } from "../interfaces/types";

export const useFetch = () => {
  const [data, setData] = useState<Props | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Consumimos una API externa
  useEffect(() => {
    // Si quiero usar Try-Catch tengo que tener una funcion asincrona.
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        if (!response.ok) throw new Error("Error al consumir la API");
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, error, loading };
};
