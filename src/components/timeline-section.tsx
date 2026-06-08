import { TimelinePhase } from "@/lib/types";
import { Badge } from "./ui/badge";
import { SectionHeading } from "./section-heading";

export function TimelineSection({ phases, compact = false }: { phases: TimelinePhase[]; compact?: boolean }) {
  return (
    <section className="section-pad bg-muted/45">
      <div className="container">
        <SectionHeading
          eyebrow="Development Timeline"
          title="From sacred land to living institution"
          description="Tattv Peeth is being built in deliberate phases, with each milestone creating the conditions for the next."
          centered={compact}
        />
        <div className="mt-12 space-y-8">
          {phases.slice(0, compact ? 5 : phases.length).map((phase) => (
            <div key={phase.id} className="grid gap-5 md:grid-cols-[90px_1fr]">
              <div className="flex items-start gap-4 md:block">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold bg-background font-serif text-lg font-semibold text-saffron">
                  {String(phase.phase_number).padStart(2, "0")}
                </div>
              </div>
              <div className="rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant={phase.status === "active" ? "secondary" : "outline"}>{phase.status.replace("_", " ")}</Badge>
                  <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{phase.period}</span>
                </div>
                <h3 className="mt-4 font-serif text-3xl font-semibold">{phase.title}</h3>
                <p className="mt-1 text-sm font-medium text-saffron">{phase.subtitle}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">{phase.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {phase.items.map((item) => (
                    <span key={item} className="rounded-md border bg-card px-3 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
