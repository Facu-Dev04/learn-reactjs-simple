import { useFetch } from "../hooks/useFetch";

// Define the expected shape of the API response
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const API = () => {
  const { data, error, loading } = useFetch<Todo>(
    "https://jsonplaceholder.typicode.com/todos/3"
  );

  if (loading) return <div>Loading........</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {data && (
        <div>
          <p>
            <strong>Titulo:</strong> {data.title}
          </p>
          <p>
            <strong>UserID:</strong> {data.userId}
          </p>
          <p>Id: {data.id}</p>
          <p>Completado: {data.completed ? "Si" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default API;
