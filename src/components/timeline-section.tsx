import Image from "next/image";
import { TimelinePhase } from "@/lib/types";

const statusStyle = (status: string): React.CSSProperties => {
  if (status === "active")
    return {
      color: "var(--c-ochre)",
      background: "rgba(139,105,20,0.1)",
      border: "0.5px solid rgba(139,105,20,0.25)",
    };
  if (status === "completed")
    return {
      color: "var(--c-gt)",
      background: "var(--c-gf)",
      border: "0.5px solid var(--c-gb)",
    };
  return {
    color: "var(--c-muted)",
    background: "rgba(90,64,32,0.06)",
    border: "0.5px solid var(--c-div)",
  };
};

export function TimelineSection({
  phases,
  compact = false,
}: {
  phases: TimelinePhase[];
  compact?: boolean;
}) {
  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-14">
        {/* Heading */}
        <p
          className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Development Timeline
        </p>
        <h2
          className="mb-2 font-serif text-[34px] font-medium leading-[1.2]"
          style={{ color: "var(--c-deep)" }}
        >
          From sacred land to{" "}
          <em className="italic" style={{ color: "var(--c-ochre)" }}>
            living institution
          </em>
        </h2>
        <p
          className="mb-10 max-w-[600px] text-[14px] font-light leading-[1.85]"
          style={{ color: "var(--c-muted)" }}
        >
          Tattv Peeth is being built in deliberate phases, with each milestone
          creating the conditions for the next.
        </p>

        {/* Timeline rows */}
        <div className="space-y-6">
          {phases
            .slice(0, compact ? 5 : phases.length)
            .map((phase) => (
              <div
                key={phase.id}
                className="grid gap-4 md:grid-cols-[72px_1fr]"
              >
                {/* Phase number */}
                <div className="flex items-start justify-center pt-1 md:justify-start">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-sm border font-serif text-lg font-semibold"
                    style={{
                      borderColor: "var(--c-div)",
                      color: "var(--c-ochre)",
                      background: "var(--c-warm)",
                    }}
                  >
                    {String(phase.phase_number).padStart(2, "0")}
                  </div>
                </div>

                {/* Card */}
                <div
                  className="rounded-sm border overflow-hidden"
                  style={{
                    background: "var(--c-warm)",
                    borderColor: "var(--c-div)",
                  }}
                >
                  <div className="grid gap-0 md:grid-cols-[1fr_240px] items-stretch">
                    {/* Left text column */}
                    <div className="p-6 flex flex-col justify-between">
                      <div>
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <span
                            className="rounded-[1px] px-2 py-[2px] text-[10px] font-medium uppercase tracking-[0.08em]"
                            style={statusStyle(phase.status)}
                          >
                            {phase.status.replace("_", " ")}
                          </span>
                          <span
                            className="text-[10px] font-medium uppercase tracking-[0.16em]"
                            style={{ color: "var(--c-muted)" }}
                          >
                            {phase.period}
                          </span>
                        </div>
                        <h3
                          className="font-serif text-2xl font-medium"
                          style={{ color: "var(--c-deep)" }}
                        >
                          {phase.title}
                        </h3>
                        <p
                          className="mt-1 text-[13px] font-medium"
                          style={{ color: "var(--c-ochre)" }}
                        >
                          {phase.subtitle}
                        </p>
                        <p
                          className="mt-4 text-[13px] font-light leading-[1.8]"
                          style={{ color: "var(--c-muted)" }}
                        >
                          {phase.description}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {phase.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-[1px] border px-3 py-1 text-[11px] font-light"
                            style={{
                              borderColor: "var(--c-div)",
                              color: "var(--c-mid)",
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right image column */}
                    {phase.image_url && (
                      <div className="relative min-h-[180px] w-full md:h-full overflow-hidden border-t md:border-t-0 md:border-l" style={{ borderColor: "var(--c-div)" }}>
                        <Image
                          src={phase.image_url}
                          alt={phase.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 240px"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
