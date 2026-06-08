"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import type { GalleryImage } from "@/lib/types";
import { Button } from "./ui/button";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(images.map((image) => image.category)))], [images]);
  const [category, setCategory] = useState("All");
  const [active, setActive] = useState<GalleryImage | null>(null);
  const filtered = category === "All" ? images : images.filter((image) => image.category === category);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((item) => (
          <Button key={item} variant={item === category ? "default" : "outline"} size="sm" onClick={() => setCategory(item)}>
            {item}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image) => (
          <button key={image.id} className="group overflow-hidden rounded-lg border bg-card text-left" onClick={() => setActive(image)}>
            <div className="relative aspect-[4/3]">
              <Image src={image.image_url} alt={image.alt || image.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <div className="text-xs uppercase tracking-[0.16em] text-saffron">{image.category}</div>
              <div className="mt-1 font-serif text-xl font-semibold">{image.title}</div>
            </div>
          </button>
        ))}
      </div>
      {active && (
        <div className="fixed inset-0 z-[80] bg-black/90 p-4" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <Button variant="ghost" size="icon" className="absolute right-5 top-5 text-white hover:bg-white/10" onClick={() => setActive(null)}>
            <X className="h-6 w-6" />
          </Button>
          <div className="mx-auto flex h-full max-w-5xl items-center justify-center">
            <div className="relative aspect-[4/3] w-full" onClick={(event) => event.stopPropagation()}>
              <Image src={active.image_url} alt={active.alt || active.title} fill className="object-contain" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
