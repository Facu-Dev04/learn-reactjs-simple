import ListPost from "@/Components/Section_10/Components/ListPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mi Blog ",
  description: "Blog construido con Next.js, MDX y Contentlayer",
};

export default function Blog() {

  return (
    <ListPost />
  )
}
