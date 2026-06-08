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
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-muted-foreground md:text-lg">{description}</p>}
    </div>
  );
}
