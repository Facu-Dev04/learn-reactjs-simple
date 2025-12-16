import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-500 text-2xl font-bold">Bienvenido a mi pagina web con Next JS</h1>
      <Link href={'/dashboard'}>Ir al dashboard</Link>
    </div>
  );
};
