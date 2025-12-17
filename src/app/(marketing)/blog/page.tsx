import { allPosts } from "contentlayer/generated";
import Link from "next/link";

const Posts = () => {
  const posts = allPosts.sort(
    (postA, postB) =>
      new Date(postB.date).getTime() - new Date(postA.date).getTime()
  );


  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-center my-8 text-4xl font-bold">Posts del Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article
            key={post._raw.flattenedPath}
            className="border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                href={`/blog/${post.url}`}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <time className="text-sm text-gray-600 block mb-3">
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <p className="text-gray-700">{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
