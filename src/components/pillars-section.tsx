import Image from "next/image";
import { pillars } from "@/lib/fallback-data";
import { BookOpen, Flame, HandHeart, Sparkles } from "lucide-react";

const icons = [BookOpen, Flame, HandHeart, Sparkles];

export function PillarsSection() {
  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-14">
        <div className="mb-10 text-center">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Four Pillars
          </p>
          <h2
            className="font-serif text-[34px] font-medium leading-[1.2]"
            style={{ color: "var(--c-deep)" }}
          >
            A complete education of body, mind,{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              character, and spirit
            </em>
          </h2>
          <p
            className="mx-auto mt-4 max-w-[580px] text-[14px] font-light leading-[1.85]"
            style={{ color: "var(--c-muted)" }}
          >
            The curriculum rests on four dimensions of development that together
            form a holistic Gurukul experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <div
                key={pillar.title}
                className="rounded-sm border overflow-hidden flex flex-col"
                style={{
                  background: "var(--c-warm)",
                  borderColor: "var(--c-div)",
                }}
              >
                {/* Cover Image */}
                <div className="relative h-36 w-full overflow-hidden border-b" style={{ borderColor: "var(--c-div)" }}>
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-start">
                  <div
                    className="mb-3 inline-flex rounded-sm p-2 self-start"
                    style={{
                      background: "rgba(139,105,20,0.1)",
                      color: "var(--c-ochre)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3
                    className="font-serif text-lg font-medium"
                    style={{ color: "var(--c-deep)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em]"
                    style={{ color: "var(--c-ochre)" }}
                  >
                    {pillar.label}
                  </p>
                  <p
                    className="mt-3 text-[13px] font-light leading-[1.75]"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
