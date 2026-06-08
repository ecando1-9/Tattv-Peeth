import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";
import { Badge } from "./ui/badge";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group overflow-hidden rounded-lg border bg-card">
      <div className="relative aspect-[16/10]">
        <Image
          src={post.cover_image || "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=80"}
          alt={post.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <Badge variant={post.featured ? "secondary" : "outline"}>{post.category}</Badge>
        <h2 className="mt-4 font-serif text-2xl font-semibold leading-tight">{post.title}</h2>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
      </div>
    </Link>
  );
}
