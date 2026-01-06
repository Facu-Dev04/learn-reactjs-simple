import { useEffect, useState } from "react";

interface Props {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
}



const ApiConsumer = () => {
  const [data, setData] = useState<Props>();

  useEffect(() => {
    try {
      const fecthData = async () => {
        const respose = await fetch(
          "https://jsonplaceholder.typicode.com/todos/10"
        );
        const json = await respose.json();
        console.log(json);
        setData(json);
      };

      fecthData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const transformar = (key: string, value: any) => {
  // Convertir booleanos a texto en español
  if (typeof value === 'boolean') {
    return value ? '✅ Sí' : '❌ No';
  }
  // Agregar emoji a los números
  if (typeof value === 'number') {
    return `🔢 ${value}`;
  }
  return value;
};

  return (
    <div>
      <h1>Informacion</h1>
      <div>
        {
          <div className="">
            <pre>{JSON.stringify(data, transformar, 2)}</pre>
          </div>
        }
      </div>
    </div>
  );
};

export default ApiConsumer;
