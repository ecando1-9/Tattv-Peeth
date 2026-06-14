import type { Metadata } from "next";
import Image from "next/image";
import { PillarsSection } from "@/components/pillars-section";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "Mission, vision, and four educational pillars of Tattv Peeth Gurukul Foundation.",
};

const VALUES = [
  {
    dev: "सत्य",
    title: "Satya",
    en: "Truth",
    desc: "Every teaching, every practice, every building arises from honest inquiry — not from convention or convenience.",
    image: "/satya.png",
  },
  {
    dev: "तप",
    title: "Tapas",
    en: "Discipline",
    desc: "Sustained effort over comfort. The Gurukul trains students to act correctly even when it is difficult.",
    image: "/tapas.png",
  },
  {
    dev: "सेवा",
    title: "Sevā",
    en: "Service",
    desc: "Knowledge that does not serve the community is incomplete. Seva is built into the daily rhythm of the campus.",
    image: "/value_seva.jpg",
  },
  {
    dev: "स्वाध्याय",
    title: "Svādhyāya",
    en: "Self-study",
    desc: "The student is the primary instrument of their own education. Teachers guide; the student must do the work of knowing themselves.",
    image: "/value_svadhyaya.jpg",
  },
];

export default function VisionMissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Vision &amp; Mission
          </p>
          <h1
            className="mb-5 font-serif text-[42px] font-medium leading-[1.1]"
            style={{ color: "var(--c-deep)" }}
          >
            Holistic education for rooted, capable,{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              self-aware individuals
            </em>
          </h1>
          <p
            className="max-w-[620px] text-[14px] font-light leading-[1.85]"
            style={{ color: "var(--c-muted)" }}
          >
            A learning model that gives equal dignity to intellectual clarity,
            physical strength, cultural rootedness, emotional balance, and
            spiritual awareness.
          </p>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                label: "Mission",
                text: "To nurture individuals through a Gurukul-based education system that integrates Indian Knowledge Systems with contemporary learning and builds strength, clarity, balance, and awareness.",
                image: "/mission.jpg",
                title: "What we do",
              },
              {
                label: "Vision",
                text: "To establish a globally respected centre of holistic education that revives the ancient Gurukul tradition in a modern context and develops ethical leaders.",
                image: "/vision.jpg",
                title: "Where we are going",
              },
            ].map((mv) => (
              <div
                key={mv.label}
                className="rounded-sm border overflow-hidden flex flex-col"
                style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
              >
                {/* Cover Image */}
                <div className="relative h-48 w-full overflow-hidden border-b" style={{ borderColor: "var(--c-div)" }}>
                  <Image
                    src={mv.image}
                    alt={mv.label}
                    fill
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-7 flex-1 flex flex-col justify-start">
                  <p
                    className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
                    style={{ color: "var(--c-ochre)" }}
                  >
                    {mv.label}
                  </p>
                  <h2
                    className="mb-4 font-serif text-2xl font-medium"
                    style={{ color: "var(--c-deep)" }}
                  >
                    {mv.title}
                  </h2>
                  <p
                    className="text-[14px] font-light leading-[1.85]"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {mv.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Core values
          </p>
          <h2
            className="mb-8 font-serif text-[34px] font-medium leading-[1.2]"
            style={{ color: "var(--c-deep)" }}
          >
            The principles that{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              govern the Gurukul
            </em>
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-sm border overflow-hidden flex flex-col"
                style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
              >
                {/* Cover Image */}
                <div className="relative h-44 w-full overflow-hidden border-b" style={{ borderColor: "var(--c-div)" }}>
                  <Image
                    src={v.image}
                    alt={v.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 440px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-start">
                  <p
                    className="font-dev mb-1 text-[20px]"
                    style={{ color: "var(--c-ochre)" }}
                  >
                    {v.dev}
                  </p>
                  <h3
                    className="font-serif text-xl font-medium"
                    style={{ color: "var(--c-deep)" }}
                  >
                    {v.title}
                    <span
                      className="ml-2 text-[11px] font-normal uppercase tracking-[0.1em]"
                      style={{ color: "var(--c-muted)" }}
                    >
                      {v.en}
                    </span>
                  </h3>
                  <p
                    className="mt-3 text-[13px] font-light leading-[1.75]"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PillarsSection />
    </>
  );
}
