import { DonationStats } from "@/lib/types";
import { formatINR } from "@/lib/utils";
import { Progress } from "./ui/progress";

export function ImpactCounters({ stats }: { stats: DonationStats }) {
  const progress = Math.round((stats.amountRaised / stats.targetAmount) * 100);
  const items = [
    { label: "Amount Raised", value: formatINR(stats.amountRaised) },
    { label: "Target Amount", value: formatINR(stats.targetAmount) },
    { label: "Total Supporters", value: stats.totalSupporters.toLocaleString("en-IN") },
    { label: "Progress", value: `${progress}%` },
  ];

  return (
    <section className="section-pad bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="rounded-lg border border-white/15 bg-white/[0.06] p-6 text-center">
              <div className="font-serif text-4xl font-semibold">{item.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-white/65">{item.label}</div>
            </div>
          ))}
        </div>
        <Progress value={progress} className="mt-8 bg-white/15" />
        <p className="mt-3 text-right text-sm text-white/65">{progress}% of Phase I goal funded</p>
      </div>
    </section>
  );
}
