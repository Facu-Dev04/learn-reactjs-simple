import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Bienvenido a Mi Blog
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Un blog moderno construido con Next.js, MDX y Contentlayer para
          compartir contenido de forma dinámica e interactiva.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Ver Posts
          </Link>
          <a
            href="#features"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Características
          </a>
        </div>
      </div>

      <div id="features" className="mt-20 grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Rápido</h3>
          <p className="text-gray-600">
            Construido con Next.js y Contentlayer para máximo rendimiento
          </p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold mb-2">MDX</h3>
          <p className="text-gray-600">
            Escribe contenido en Markdown con componentes React
          </p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Moderno</h3>
          <p className="text-gray-600">
            Diseño limpio y responsive con Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
