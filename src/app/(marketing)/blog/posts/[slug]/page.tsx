import { allPosts } from "contentlayer/generated";
import { Props } from "@/Components/Section_10/interfaces/typesPosts";
import Post from "@/Components/Section_10/Components/Posts";
import { notFound } from "next/navigation";

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

  return <Post post={post} />;
};

export default PostLayout;
