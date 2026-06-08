import type { Metadata } from "next";
import { DonateForm } from "@/components/donate-form";
import { ImpactCounters } from "@/components/impact-counters";
import { SectionHeading } from "@/components/section-heading";
import { getDonationStats } from "@/lib/data";
import { formatINR } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Tattv Peeth Gurukul Foundation and help build a Gurukul for a new generation.",
};

export default async function DonatePage() {
  const stats = await getDonationStats();
  return (
    <>
      <section className="section-pad border-b">
        <div className="container">
          <SectionHeading
            eyebrow="Donate"
            title="Support the founding phase of Tattv Peeth Gurukul"
            description={`Raised ${formatINR(stats.amountRaised)} toward a ${formatINR(stats.targetAmount)} Phase I goal. Your support helps prepare the campus, classrooms, residential spaces, and sustainable food systems.`}
          />
        </div>
      </section>
      <ImpactCounters stats={stats} />
      <section className="section-pad">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Contribution Tiers" title="Choose how you want to participate" />
            <div className="mt-7 grid gap-4">
              {["Rs 1,001", "Rs 11,000", "Rs 51,000", "Custom"].map((tier) => (
                <div key={tier} className="rounded-lg border bg-card p-5">
                  <div className="font-serif text-2xl font-semibold">{tier}</div>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">Contribute to campus preparation, learning spaces, plantation, and founding operations.</p>
                </div>
              ))}
            </div>
          </div>
          <DonateForm />
        </div>
      </section>
    </>
  );
}
