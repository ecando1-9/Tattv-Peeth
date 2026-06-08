import type { Testimonial } from "@/lib/types";
import { SectionHeading } from "./section-heading";
import { Card, CardContent } from "./ui/card";

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="section-pad">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="Voices from the founding circle" centered />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.id} className="bg-card/75">
              <CardContent className="p-6">
                <p className="font-serif text-2xl leading-9">“{item.quote}”</p>
                <div className="mt-6 text-sm font-semibold">{item.name}</div>
                <div className="text-xs uppercase tracking-[0.16em] text-saffron">{item.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
