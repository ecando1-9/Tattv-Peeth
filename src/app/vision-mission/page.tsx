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
                text: "To form vidyārthīs in all five kośas — body, vital energy, mind, intellect, and spirit — uniting the Bhāratīya knowledge tradition with rigorous contemporary study, so they live their svadharma and serve rāṣṭra, samāja, and kula.",
                image: "/mission.jpg",
                title: "What we do",
              },
              {
                label: "Vision",
                text: "To raise a generation rooted in svadharma — capable of living, upholding, and carrying Sanātana Dharma forward in their own age.",
                image: "/vision.jpg",
                title: "Where we are going",
              },
            ].map((mv) => (
              <div
                key={mv.label}
                className="rounded-sm border overflow-hidden flex flex-col"
                style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
              >
                {/* Cover Image -> SVG Logo */}
                <div
                  className={`flex h-48 w-full items-center justify-center border-b p-4 ${
                    mv.label === "Mission" ? "bg-gradient-to-br from-[#9C5A2C] to-[#B07A1E]" : "bg-gradient-to-br from-[#22414F] to-[#33576B]"
                  }`}
                  style={{ borderColor: "var(--c-div)" }}
                >
                  {mv.label === "Mission" ? (
                    <svg width="150" height="115" viewBox="0 0 150 115" aria-hidden="true" className="w-full h-full max-h-[140px] object-contain">
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
                    <svg width="170" height="115" viewBox="0 0 170 115" aria-hidden="true" className="w-full h-full max-h-[140px] object-contain">
                      <circle cx="85" cy="58" r="26" fill="#F4D27A"/>
                      <g stroke="#F4D27A" strokeWidth="2" opacity="0.7"><line x1="85" y1="22" x2="85" y2="12"/><line x1="121" y1="34" x2="129" y2="27"/><line x1="49" y1="34" x2="41" y2="27"/></g>
                      <g fill="none" stroke="#EAF0F2" strokeWidth="2" opacity="0.85" strokeLinecap="round"><path d="M30,82 q14,-7 28,0 t28,0 t28,0 t28,0"/><path d="M44,96 q14,-7 28,0 t28,0 t28,0"/></g>
                    </svg>
                  )}
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
