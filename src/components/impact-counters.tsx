import { DonationStats } from "@/lib/types";
import { formatINR } from "@/lib/utils";

export function ImpactCounters({ stats }: { stats: DonationStats }) {
  const progress = Math.round((stats.amountRaised / stats.targetAmount) * 100);
  const items = [
    { label: "Amount Raised", value: formatINR(stats.amountRaised) },
    { label: "Phase I Target", value: formatINR(stats.targetAmount) },
    { label: "Supporters", value: stats.totalSupporters.toLocaleString("en-IN") },
    { label: "Progress", value: `${progress}%` },
  ];

  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-10">
        <div className="grid gap-3 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-sm border p-5 text-center"
              style={{
                background: "var(--c-warm)",
                borderColor: "var(--c-div)",
              }}
            >
              <div
                className="font-serif text-3xl font-semibold"
                style={{ color: "var(--c-deep)" }}
              >
                {item.value}
              </div>
              <div
                className="mt-2 text-[10px] font-medium uppercase tracking-[0.16em]"
                style={{ color: "var(--c-muted)" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Flat progress bar */}
        <div
          className="c-bar-track mt-6"
          style={{ height: 6 }}
        >
          <div
            className="c-bar-secured"
            style={{ width: `${progress}%`, height: 6 }}
          />
        </div>
        <p
          className="mt-2 text-right text-[11px] font-light"
          style={{ color: "var(--c-muted)" }}
        >
          {progress}% of Phase I goal funded
        </p>
      </div>
    </section>
  );
}
