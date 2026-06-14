export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-[680px] text-center" : "max-w-[680px]"}>
      <p
        className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
        style={{ color: "var(--c-ochre)" }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-serif text-[34px] font-medium leading-[1.2]"
        style={{ color: "var(--c-deep)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 text-[14px] font-light leading-[1.85]"
          style={{ color: "var(--c-muted)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
