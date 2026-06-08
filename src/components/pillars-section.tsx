import { pillars } from "@/lib/fallback-data";
import { BookOpen, Flame, HandHeart, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { SectionHeading } from "./section-heading";
import { MotionReveal } from "./motion-reveal";

const icons = [BookOpen, Flame, HandHeart, Sparkles];

export function PillarsSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading
          eyebrow="Four Pillars"
          title="A complete education of body, mind, character, and spirit"
          description="The curriculum rests on four dimensions of development that together form a holistic Gurukul experience."
          centered
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <MotionReveal key={pillar.title}>
                <Card className="h-full bg-card/72">
                  <CardContent className="p-6">
                    <div className="mb-5 inline-flex rounded-md bg-gold/16 p-3 text-saffron">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold">{pillar.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-saffron">{pillar.label}</p>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
