import type { Metadata } from "next";
import { PillarsSection } from "@/components/pillars-section";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Mission, vision, and educational pillars of Tattv Peeth Gurukul.",
};

export default function VisionMissionPage() {
  return (
    <>
      <section className="section-pad border-b">
        <div className="container">
          <SectionHeading
            eyebrow="Vision & Mission"
            title="Holistic education for rooted, capable, self-aware individuals"
            description="A learning model that gives equal dignity to intellectual clarity, physical strength, cultural rootedness, emotional balance, and spiritual awareness."
          />
        </div>
      </section>
      <section className="section-pad">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-7">
            <h2 className="font-serif text-3xl font-semibold">Mission</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              To nurture individuals through a Gurukul-based education system that integrates Indian Knowledge Systems
              with contemporary learning and builds strength, clarity, balance, and awareness.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-7">
            <h2 className="font-serif text-3xl font-semibold">Vision</h2>
            <p className="mt-4 leading-8 text-muted-foreground">
              To establish a globally respected centre of holistic education that revives the ancient Gurukul tradition
              in a modern context and develops ethical leaders.
            </p>
          </div>
        </div>
      </section>
      <PillarsSection />
    </>
  );
}
