import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeading } from "@/components/section-heading";
import { getGalleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Dynamic gallery for Tattv Peeth Gurukul Foundation.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Gallery"
          title="Campus vision, location, and founding moments"
          description="Gallery content is designed to be managed from Supabase Storage and the admin dashboard."
        />
        <div className="mt-10">
          <GalleryGrid images={images} />
        </div>
      </div>
    </section>
  );
}
