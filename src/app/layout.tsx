import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Blog con Next.js y Contentlayer",
  description: "Blog construido con Next.js, MDX y Contentlayer",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-xl font-bold text-gray-900">
                Mi Blog
              </a>
              <div className="space-x-6">
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Inicio
                </a>
                <a href="/blog" className="text-gray-700 hover:text-gray-900">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-white border-t mt-16">
          <div className="max-w-6xl mx-auto px-4 py-8 text-center text-gray-600">
            <p>&copy; 2024 Mi Blog. Construido con Next.js y Contentlayer.</p>
          </div>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
