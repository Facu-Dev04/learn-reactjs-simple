import Link from "next/link";
import { POST } from "../mocks/posts";
import { TitleTimerClient } from "../hooks/TitleTimerClient";

interface MetadataProps {
  params: { slug: string }; 
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: MetadataProps) {
  const { slug } = await params;
  
  const post = await POST.find((post) => post.slug === slug);
  
  const title = post?.title ? `${post.title}` : "Blog Post";

  return {
    title: title,
    description: post?.title ? `${post.title} - Descripción` : "Descripción de un blog post",
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  const post = POST.find((post) => post.slug === slug); 
  const initialTitle = post?.title || "Post Detalle";

  return (
    <>
      <TitleTimerClient initialTitle={initialTitle} /> 

      <div>
        <h1 className="ml-10 mt-10 font-bold font-sans text-[4rem] text-blue-400">
          Blog: {slug}
        </h1>
        <div className="mx-auto container">
          <h1 className="font-bold text-2xl">{post?.title}</h1>
          <p className="text-gray-600">{post?.content}</p>
        </div>
        <div className="mt-5 mx-auto">
          <Link
            href="/blog"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Volver
          </Link>
        </div>
      </div>
    </>
  );
}