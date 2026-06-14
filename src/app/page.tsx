import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/hero-section";
import { ImpactCounters } from "@/components/impact-counters";
import { OfferingsSection } from "@/components/offerings-section";
import { PillarsSection } from "@/components/pillars-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { TimelineSection } from "@/components/timeline-section";
import { getDonationStats, getTestimonials, getTimelinePhases } from "@/lib/data";

export default async function HomePage() {
  const [stats, phases, testimonials] = await Promise.all([
    getDonationStats(),
    getTimelinePhases(),
    getTestimonials(),
  ]);

  return (
    <>
      <HeroSection />

      {/* About snapshot */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div>
              <p
                className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "var(--c-ochre)" }}
              >
                About the Foundation
              </p>
              <h2
                className="mb-5 font-serif text-[34px] font-medium leading-[1.2]"
                style={{ color: "var(--c-deep)" }}
              >
                Rooted in tradition.{" "}
                <em className="italic" style={{ color: "var(--c-ochre)" }}>
                  Open to the world.
                </em>
              </h2>
              <div className="space-y-4 text-[14px] font-light leading-[1.85]" style={{ color: "var(--c-muted)" }}>
                <p>
                  Tattv Peeth, derived from the idea of Vidya Peeth, is a
                  sacred seat for the pursuit of truth and essence. It is
                  conceived as a self-sustaining residential Gurukul nurturing
                  rooted, capable, and self-aware individuals.
                </p>
                <p>
                  Where conventional schooling often separates learning from
                  living, Tattv Peeth makes them inseparable. Students engage
                  directly with land, craft, physical discipline, and texts
                  alongside rigorous contemporary academics.
                </p>
              </div>
            </div>

            {/* Mission / Vision cards */}
            <div className="flex flex-col gap-4">
              {[
                {
                  label: "Mission",
                  text: "To integrate Indian Knowledge Systems with contemporary learning, fostering physical strength, intellectual clarity, emotional balance, and spiritual awareness.",
                  image: "/mission.jpg",
                },
                {
                  label: "Vision",
                  text: "To establish a globally respected centre of holistic education that revives the Gurukul tradition in a modern context.",
                  image: "/vision.jpg",
                },
              ].map((mv) => (
                <div
                  key={mv.label}
                  className="rounded-sm border overflow-hidden flex flex-col sm:flex-row items-stretch"
                  style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
                >
                  <div className="relative h-28 w-full sm:h-auto sm:w-[120px] shrink-0 border-b sm:border-b-0 sm:border-r" style={{ borderColor: "var(--c-div)" }}>
                    <Image
                      src={mv.image}
                      alt={mv.label}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1">
                    <h3
                      className="font-serif text-xl font-medium"
                      style={{ color: "var(--c-deep)" }}
                    >
                      {mv.label}
                    </h3>
                    <p
                      className="mt-2 text-[13px] font-light leading-[1.7]"
                      style={{ color: "var(--c-muted)" }}
                    >
                      {mv.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PillarsSection />
      <ImpactCounters stats={stats} />
      <OfferingsSection />
      <TimelineSection phases={phases} compact />
      <TestimonialsSection testimonials={testimonials} />

      {/* CTA band */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p
                className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em]"
                style={{ color: "var(--c-ochre)" }}
              >
                Founding Phase
              </p>
              <h2
                className="font-serif text-[34px] font-medium leading-[1.2]"
                style={{ color: "var(--c-deep)" }}
              >
                Help build the Gurukul{" "}
                <em className="italic" style={{ color: "var(--c-ochre)" }}>
                  from the ground up.
                </em>
              </h2>
            </div>
            <Link
              href="/donate"
              className="shrink-0 rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] transition-colors"
              style={{ background: "var(--c-deep)", color: "var(--c-cream)" }}
            >
              Support the Initiative
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
