import Link from "next/link";
import { POST } from "./mocks/posts";

const page = () => {
  return (
    <div>
      <h1>Blog</h1>
      <main className="container mx-auto">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {POST.map((post) => (
            <div key={post.id} className="shadow-lg rounded-lg p-4">
              <h2 className="font-bold text-2xl">{post.title}</h2>
              <Link href={`/blog/${post.slug}`}>Mas informacion</Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
