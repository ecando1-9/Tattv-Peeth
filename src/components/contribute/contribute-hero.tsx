// Hero section
export function ContributeHero() {
  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-20 text-center">
        {/* Eyebrow */}
        <p
          className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Contribute · Pañca Mahāyajña
        </p>

        {/* Sanskrit sloka */}
        <p
          className="font-dev mb-1 text-[19px] leading-[1.9]"
          style={{ color: "var(--c-ochre)" }}
        >
          यज्ञेन यज्ञमयजन्त देवाः
        </p>
        <p
          className="mb-7 font-serif text-sm italic"
          style={{ color: "var(--c-muted)", letterSpacing: "0.03em" }}
        >
          By the offering, the offering itself was offered — and so the world
          was sustained. (Ṛgveda 10.90)
        </p>

        {/* Headline */}
        <h1
          className="mb-5 font-serif text-4xl font-medium leading-[1.1] md:text-5xl"
          style={{ color: "var(--c-deep)" }}
        >
          Not a donation.
          <br />
          A{" "}
          <em className="italic" style={{ color: "var(--c-ochre)" }}>
            yajña
          </em>
          .
        </h1>

        {/* Sub-copy */}
        <p
          className="mx-auto mb-9 max-w-[600px] text-sm font-light leading-[1.9]"
          style={{ color: "var(--c-muted)" }}
        >
          In our tradition, giving is not charity flowing downward — it is
          participation in the five great offerings by which a person sustains
          the totality and finds their place within it. Each project at Tattv
          Peeth is one such offering. You do not fund a line item. You take part
          in a yajña, and you are shown, to the rupee, where your offering goes.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#campaigns">
            <button
              className="rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] bg-[var(--c-deep)] text-[var(--c-cream)] hover:bg-[var(--c-ochre)] transition-colors"
            >
              View active campaigns
            </button>
          </a>
          <a href="#ledger">
            <button
              className="rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] bg-transparent text-[var(--c-deep)] border border-[var(--c-mid)] hover:bg-[var(--c-deep)] hover:text-[var(--c-cream)] transition-all"
            >
              See the contribution trail
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
