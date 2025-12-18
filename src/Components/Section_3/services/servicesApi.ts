import type { Props } from "../interfaces/types";

export const fetchData = async (): Promise<Props> => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    if (!response.ok) throw new Error("Error al consumir la API");

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("Unknown error occurred");
  }
};
