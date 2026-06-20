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
                  text: "To form vidyārthīs in all five kośas — body, vital energy, mind, intellect, and spirit — uniting the Bhāratīya knowledge tradition with rigorous contemporary study, so they live their svadharma and serve rāṣṭra, samāja, and kula.",
                  image: "/mission.jpg",
                },
                {
                  label: "Vision",
                  text: "To raise a generation rooted in svadharma — capable of living, upholding, and carrying Sanātana Dharma forward in their own age.",
                  image: "/vision.jpg",
                },
              ].map((mv) => (
                <div
                  key={mv.label}
                  className="rounded-sm border overflow-hidden flex flex-col sm:flex-row items-stretch"
                  style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
                >
                  <div
                    className={`flex h-28 w-full sm:h-auto sm:w-[120px] shrink-0 items-center justify-center border-b sm:border-b-0 sm:border-r p-4 ${
                      mv.label === "Mission" ? "bg-gradient-to-br from-[#9C5A2C] to-[#B07A1E]" : "bg-gradient-to-br from-[#22414F] to-[#33576B]"
                    }`}
                    style={{ borderColor: "var(--c-div)" }}
                  >
                    {mv.label === "Mission" ? (
                      <svg width="150" height="115" viewBox="0 0 150 115" aria-hidden="true" className="w-full h-full max-h-[80px] object-contain">
                        <g transform="translate(20,36)">
                          <rect x="0" y="0" width="86" height="46" rx="3" fill="#F7F2E7" stroke="#5E1F1B" strokeWidth="1.5"/>
                          <line x1="10" y1="12" x2="76" y2="12" stroke="#9C5A2C" strokeWidth="2"/>
                          <line x1="10" y1="23" x2="76" y2="23" stroke="#9C5A2C" strokeWidth="2"/>
                          <line x1="10" y1="34" x2="60" y2="34" stroke="#9C5A2C" strokeWidth="2"/>
                          <line x1="43" y1="-4" x2="43" y2="50" stroke="#5E1F1B" strokeWidth="1" opacity="0.5"/>
                        </g>
                        <g transform="translate(116,54)"><ellipse cx="0" cy="20" rx="14" ry="6" fill="#6B3F18"/><path d="M0,14 q5,-12 0,-22 q-5,10 0,22" fill="#F4D27A" stroke="#C9A24B" strokeWidth="1"/></g>
                      </svg>
                    ) : (
                      <svg width="170" height="115" viewBox="0 0 170 115" aria-hidden="true" className="w-full h-full max-h-[80px] object-contain">
                        <circle cx="85" cy="58" r="26" fill="#F4D27A"/>
                        <g stroke="#F4D27A" strokeWidth="2" opacity="0.7"><line x1="85" y1="22" x2="85" y2="12"/><line x1="121" y1="34" x2="129" y2="27"/><line x1="49" y1="34" x2="41" y2="27"/></g>
                        <g fill="none" stroke="#EAF0F2" strokeWidth="2" opacity="0.85" strokeLinecap="round"><path d="M30,82 q14,-7 28,0 t28,0 t28,0 t28,0"/><path d="M44,96 q14,-7 28,0 t28,0 t28,0"/></g>
                      </svg>
                    )}
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
