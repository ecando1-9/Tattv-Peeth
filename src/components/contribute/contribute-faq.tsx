"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is my contribution tax-deductible?",
    a: "Yes. Tattv Peeth Gurukul Foundation holds 80G certification under the Income Tax Act, 1961. Contributions from Indian taxpayers are eligible for a 50% deduction on the donated amount. An 80G receipt is issued within 7 working days of receiving your contribution.",
  },
  {
    q: "Can I contribute from outside India?",
    a: "Yes. We are registered under FCRA (Foreign Contribution Regulation Act) to receive contributions from abroad. International contributions must come via SWIFT / wire transfer — not UPI or domestic bank transfer. Please contact us before transferring so we can share the correct bank details.",
  },
  {
    q: "How will I know where my contribution went?",
    a: "Every contribution is matched to the specific work item it funded. After your contribution is applied, you will receive a contribution trace: the amount, the invoice or bill it paid, and a dated photograph of the completed work. Nothing is lumped into a general corpus without your knowledge.",
  },
  {
    q: "Can I specify which project my contribution goes to?",
    a: "Yes. When you fill out the contribution form, you can choose a specific campaign — Shade Net, Goshala, Drip Irrigation, and so on. If you choose a general contribution, it is applied to the campaign with the most immediate funding need at the time of receipt.",
  },
  {
    q: "What is a Saṅkalpa, and do I need to provide one?",
    a: "In our tradition, a saṅkalpa is the declaration of intent that accompanies an offering — it names who you are, what you are offering, and in whose name you are making the offering. It is entirely optional. If you provide one — perhaps in memory of an ancestor or as a blessing for a family member — we record it alongside your contribution and include it in your receipt.",
  },
  {
    q: "What is the minimum contribution?",
    a: "There is no minimum. A contribution of ₹101 is as welcome as one of ₹1,01,000. Each contribution is applied in full to the campaign you choose, and each receives the same quality of documentation.",
  },
  {
    q: "What does 'secured' mean on the progress bars?",
    a: "Several campaigns have government subsidies attached (MIDH, PMKSY, MNRE). The 'secured' segment of a progress bar represents the combination of that government subsidy and the founder's own capital that is already committed. The crowdfunding target is the remaining gap — what contributors like you can fill.",
  },
  {
    q: "Is land acquisition a charitable contribution?",
    a: "Yes. All land acquired by the Foundation is registered in the Foundation's name for charitable and educational purposes. No individual benefits from the land. It is a foundational asset of the Gurukul, and contributions toward it are treated identically to contributions toward any other campaign under 80G.",
  },
];

export function ContributeFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-14">
        <p
          className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Frequently asked
        </p>
        <h2
          className="mb-8 font-serif text-[34px] font-medium leading-[1.2]"
          style={{ color: "var(--c-deep)" }}
        >
          Questions &amp; answers
        </h2>

        <div>
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b" style={{ borderColor: "var(--c-div)" }}>
              <button
                className="flex w-full items-center justify-between gap-4 py-[18px] text-left text-[15px] font-normal transition-colors"
                style={{
                  color: "var(--c-deep)",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span
                  style={{
                    color: openIdx === i ? "var(--c-ochre)" : "var(--c-deep)",
                  }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 text-lg font-light transition-transform"
                  style={{
                    color: "var(--c-ochre)",
                    transform: openIdx === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              {openIdx === i && (
                <p
                  className="max-w-[720px] pb-5 text-[13px] font-light leading-[1.85]"
                  style={{ color: "var(--c-muted)" }}
                >
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
