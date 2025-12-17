import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="ml-10 mt-10 font-bold font-mono text-[4rem] text-blue-500">Home</p>
      <Link href="/about" className="hover:text-blue-400">About</Link>
    </div> 
  );
}
