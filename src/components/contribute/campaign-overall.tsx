// Campaign overall summary ring + stats
export function CampaignOverall() {
  // Ring dimensions
  const r = 52;
  const circ = 2 * Math.PI * r; // ≈ 326.7
  const securedPct = 40.5 / 93; // ~43.5%
  const raisedPct = 0 / 93;
  const securedOffset = circ * (1 - securedPct);
  const raisedOffset = circ;

  return (
    <section
      id="campaigns"
      className="border-b"
      style={{ borderColor: "var(--c-div)" }}
    >
      <div className="mx-auto max-w-[920px] px-8 py-11">
        <p
          className="mb-5 text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Active campaign · Tattv Peeth Phase I–II
        </p>
        <div className="flex flex-wrap items-center gap-10">
          {/* Donut ring */}
          <div className="relative h-[104px] w-[104px] shrink-0">
            <svg
              viewBox="0 0 120 120"
              width="104"
              height="104"
              aria-hidden="true"
            >
              {/* Track */}
              <circle
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke="rgba(90,64,32,0.12)"
                strokeWidth="8"
              />
              {/* Secured segment */}
              <circle
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke="var(--c-secured)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={securedOffset}
                transform="rotate(-90 60 60)"
                className="ring-circle-progress"
              />
              {/* Raised segment (sits on top) */}
              <circle
                cx="60"
                cy="60"
                r={r}
                fill="none"
                stroke="var(--c-ochre)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circ}
                strokeDashoffset={raisedOffset}
                transform="rotate(-90 60 60)"
              />
            </svg>
            <div
              className="absolute inset-0 flex items-center justify-center font-serif text-2xl font-semibold"
              style={{ color: "var(--c-deep)" }}
            >
              43%
            </div>
          </div>

          {/* Stats */}
          <div className="min-w-[260px] flex-1">
            <div
              className="mb-1 flex flex-wrap items-baseline gap-2"
            >
              <span
                className="font-serif text-3xl font-semibold"
                style={{ color: "var(--c-deep)" }}
              >
                ₹40.5L
              </span>
              <span
                className="text-[13px] font-light"
                style={{ color: "var(--c-muted)" }}
              >
                secured of
              </span>
              <span
                className="font-serif text-lg font-medium"
                style={{ color: "var(--c-mid)" }}
              >
                ₹93L requested
              </span>
            </div>
            <p
              className="mt-2 text-xs font-light leading-[1.75]"
              style={{ color: "var(--c-muted)" }}
            >
              Across 8 active offerings in Phase I–II. ₹40.5L already secured
              through government subsidies and founder contribution · ₹0 raised
              so far from contributors · ₹52.5L is the open crowdfunding ask.
              (Land acquisition, ₹8 Cr, is tracked as a separate long-horizon
              campaign.)
            </p>
            <p
              className="mt-3 text-[11px] font-medium uppercase tracking-[0.06em]"
              style={{ color: "var(--c-ochre)" }}
            >
              Fundraiser · Tattv Peeth Foundation · 80G eligible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
