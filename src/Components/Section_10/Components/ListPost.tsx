import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";

export default function ListPost() {
  const post: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="max-w-3xl">
        {post.map((posts) => {
          return (
            <div key={posts._id} className="border border-gray-300 p-4 mb-2 ">
              <Link href={`/blog/${posts.url}`} className="text-2xl font-bold">
                {posts.title}
              </Link>
              <p className="text-gray-500">{posts.description}</p>
              <p className="text-gray-900 text-end mt-2">
                {new Date(posts.date).toLocaleDateString("es-AR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
