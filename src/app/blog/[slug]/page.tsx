import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlogPost } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  return { title: post?.title || "Blog Post", description: post?.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="section-pad">
      <div className="container max-w-3xl">
        <p className="eyebrow">{post.category}</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold leading-tight">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
        {post.cover_image && (
          <div className="relative mt-9 aspect-[16/9] overflow-hidden rounded-lg border">
            <Image src={post.cover_image} alt={post.title} fill className="object-cover" />
          </div>
        )}
        <div className="mt-9 space-y-5 text-base leading-8 text-muted-foreground">
          {post.content.split("\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </article>
  );
}
