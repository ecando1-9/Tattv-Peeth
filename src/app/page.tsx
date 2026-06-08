import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/hero-section";
import { ImpactCounters } from "@/components/impact-counters";
import { PillarsSection } from "@/components/pillars-section";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TimelineSection } from "@/components/timeline-section";
import { Button } from "@/components/ui/button";
import { getDonationStats, getTestimonials, getTimelinePhases } from "@/lib/data";

export default async function HomePage() {
  const [stats, phases, testimonials] = await Promise.all([getDonationStats(), getTimelinePhases(), getTestimonials()]);

  return (
    <>
      <HeroSection />
      <ImpactCounters stats={stats} />
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <SectionHeading
            eyebrow="About the Foundation"
            title="Rooted in tradition. Open to the world."
            description="Tattv Peeth, derived from the idea of Vidya Peeth, is a sacred seat for the pursuit of truth and essence. It is conceived as a self-sustaining residential Gurukul nurturing rooted, capable, and self-aware individuals."
          />
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-serif text-3xl font-semibold">Mission</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To integrate Indian Knowledge Systems with contemporary learning, fostering physical strength,
              intellectual clarity, emotional balance, and spiritual awareness.
            </p>
            <div className="spiritual-border my-6" />
            <h3 className="font-serif text-3xl font-semibold">Vision</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">
              To establish a globally respected centre of holistic education that revives the Gurukul tradition in a
              modern context.
            </p>
          </div>
        </div>
      </section>
      <PillarsSection />
      <TimelineSection phases={phases} compact />
      <TestimonialsSection testimonials={testimonials} />
      <section className="section-pad bg-primary text-primary-foreground">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gold">Founding Phase</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold">Help build the Gurukul from the ground up.</h2>
          </div>
          <Button asChild size="lg" className="bg-gold text-[#2c1f0a] hover:bg-saffron">
            <Link href="/donate">Support The Initiative <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
