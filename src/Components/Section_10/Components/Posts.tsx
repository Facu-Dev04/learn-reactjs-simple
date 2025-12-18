"use client";

import { Post as PostType } from "contentlayer/generated";
import { MDXContent } from "../MDXContent";

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
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

export default Post;
