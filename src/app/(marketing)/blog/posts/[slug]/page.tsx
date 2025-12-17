import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MDXContent } from "@/Components/Section_10/MDXContent";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
};

export const generateMetadata = async ({ params }: Props) => {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);

  if (!post) {
    return {
      title: "Post no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
};

const PostLayout = async ({ params }: Props) => {
  const { slug } = await params;
  const post = allPosts.find((p) => p._raw.flattenedPath === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time className="text-gray-600">
          {new Date(post.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>

      <div className="prose prose-lg max-w-none">
        <MDXContent code={post.body.code} />
      </div>
    </article>
  );
};

export default PostLayout;
