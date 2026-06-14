import type { Metadata } from "next";
import { DonateForm } from "@/components/donate-form";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Tattv Peeth Gurukul Foundation. Every contribution is traced, receipted, and shown — rupee by rupee — to the exact work it funded.",
};

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Contribute
          </p>
          <h1
            className="mb-5 font-serif text-[42px] font-medium leading-[1.1]"
            style={{ color: "var(--c-deep)" }}
          >
            Not a donation.{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              A yajña.
            </em>
          </h1>
          <p
            className="max-w-[580px] text-[14px] font-light leading-[1.85]"
            style={{ color: "var(--c-muted)" }}
          >
            In our tradition, giving is not charity flowing downward — it is
            participation in a great offering. Every rupee is traced to the
            exact work it funded, backed by a bill and a photograph. You will
            see where your offering goes.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">

            {/* Left — trust signals */}
            <div>
              <p
                className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "var(--c-ochre)" }}
              >
                Our promise to you
              </p>
              <h2
                className="mb-6 font-serif text-[28px] font-medium leading-[1.2]"
                style={{ color: "var(--c-deep)" }}
              >
                Full transparency, every time
              </h2>

              <div className="space-y-5">
                {[
                  {
                    title: "Traced to the rupee",
                    desc: "Every contribution is matched to the specific work it funded — a structure, a sapling, a water line — and shown to you with the invoice and photograph.",
                  },
                  {
                    title: "80G tax receipt",
                    desc: "Issued within 7 working days. Tattv Peeth Gurukul Foundation holds 80G certification — your contribution is eligible for a 50% tax deduction.",
                  },
                  {
                    title: "FCRA registered",
                    desc: "Contributions from outside India are received under FCRA compliance. Contact us before transferring for SWIFT/wire details.",
                  },
                  {
                    title: "No minimum",
                    desc: "₹101 or ₹1,01,000 — every offering is documented with the same care and receipted within the same timeframe.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 pl-4"
                    style={{ borderColor: "var(--c-ochre)" }}
                  >
                    <p
                      className="font-serif text-[16px] font-medium"
                      style={{ color: "var(--c-deep)" }}
                    >
                      {item.title}
                    </p>
                    <p
                      className="mt-1 text-[13px] font-light leading-[1.7]"
                      style={{ color: "var(--c-muted)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Payment note */}
              <div
                className="mt-8 rounded-sm border p-5"
                style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
              >
                <p
                  className="mb-3 text-[10px] font-medium uppercase tracking-[0.14em]"
                  style={{ color: "var(--c-ochre)" }}
                >
                  Payment methods (India)
                </p>
                <div className="space-y-2 text-[13px] font-light" style={{ color: "var(--c-mid)" }}>
                  <p><strong className="font-medium" style={{ color: "var(--c-deep)" }}>UPI:</strong> tattvpeeth@upi</p>
                  <p><strong className="font-medium" style={{ color: "var(--c-deep)" }}>Bank:</strong> A/C 00000012345678 · IFSC SBIN0001234</p>
                  <p><strong className="font-medium" style={{ color: "var(--c-deep)" }}>Cheque:</strong> Payable to Tattv Peeth Gurukul Foundation</p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <DonateForm />
          </div>
        </div>
      </section>
    </>
  );
}
