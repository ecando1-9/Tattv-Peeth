import type { Metadata } from "next";
import { BlogCard } from "@/components/blog-card";
import { SectionHeading } from "@/components/section-heading";
import { getBlogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and updates from Tattv Peeth Gurukul Foundation.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="Blog" title="Updates from the founding journey" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.id} post={post} />)}
        </div>
      </div>
    </section>
  );
}
