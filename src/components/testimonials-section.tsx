import type { Testimonial } from "@/lib/types";

export function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-14">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Testimonials
          </p>
          <h2
            className="font-serif text-[34px] font-medium leading-[1.2]"
            style={{ color: "var(--c-deep)" }}
          >
            Voices from the{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              founding circle
            </em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="rounded-sm border p-7"
              style={{
                background: "var(--c-warm)",
                borderColor: "var(--c-div)",
              }}
            >
              {/* Opening mark */}
              <div
                className="mb-3 font-serif text-3xl leading-none"
                style={{ color: "var(--c-ochre)" }}
              >
                &ldquo;
              </div>
              <p
                className="font-serif text-xl font-light leading-[1.7]"
                style={{ color: "var(--c-deep)" }}
              >
                {item.quote}
              </p>
              <div
                className="mt-6 border-t pt-5"
                style={{ borderColor: "var(--c-div)" }}
              >
                <div
                  className="text-[14px] font-medium"
                  style={{ color: "var(--c-deep)" }}
                >
                  {item.name}
                </div>
                <div
                  className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em]"
                  style={{ color: "var(--c-ochre)" }}
                >
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
