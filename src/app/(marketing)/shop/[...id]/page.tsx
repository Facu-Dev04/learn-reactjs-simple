export default async function ShopPage({
  params,
}: {
  params: { slug?: string[] }; 
}) {
  const { slug } = await params;

  if (!slug) {
    return <h1>Estás en la página principal de la tienda (/shop)</h1>;
  }

  console.log(slug)

  return (
    <div>
      <h1>Ruta dinámica de la tienda</h1>
      <p>Segmentos capturados: {slug?.join(' / ')}</p>
    </div>
  );
}