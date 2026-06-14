// How to contribute — payment methods & receipt preview (static)
export function ContributeHow() {
  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-14">
        <p
          className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          How to contribute
        </p>
        <h2
          className="mb-2 font-serif text-[34px] font-medium leading-[1.2]"
          style={{ color: "var(--c-deep)" }}
        >
          Two ways to take part
        </h2>
        <p className="mb-0 max-w-[660px] text-[14px] font-light leading-[1.85]" style={{ color: "var(--c-muted)" }}>
          Whether you are contributing from India or from outside, every offering is received with the same care, and every receipt carries the same detail.
        </p>

        {/* Payment grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {/* India */}
          <div className="rounded-[2px] border p-6" style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}>
            <h4 className="mb-1 font-serif text-[18px] font-medium" style={{ color: "var(--c-deep)" }}>
              Contributing from India
            </h4>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.06em]" style={{ color: "var(--c-ochre)" }}>
              UPI · Bank transfer · Cheque · Cash
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "UPI", detail: "tattvpeeth@upi (scan or enter ID)" },
                { label: "Bank Transfer", detail: "Tattv Peeth Gurukul Foundation · A/C 00000012345678 · IFSC SBIN0001234 · SBI, Garhmukteshwar" },
                { label: "Cheque", detail: "Payable to Tattv Peeth Gurukul Foundation · send to our registered address" },
                { label: "80G Receipt", detail: "Issued within 7 working days · valid for tax deduction under Section 80G" },
              ].map((m) => (
                <div key={m.label} className="flex items-start gap-2 text-[13px] font-light leading-[1.6]" style={{ color: "var(--c-mid)" }}>
                  <span className="mt-[7px] inline-block h-[5px] w-[5px] shrink-0 rounded-full" style={{ background: "var(--c-ochre)" }} />
                  <span>
                    <strong className="font-medium" style={{ color: "var(--c-deep)" }}>{m.label}:</strong>{" "}
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* International */}
          <div className="rounded-[2px] border p-6" style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}>
            <h4 className="mb-1 font-serif text-[18px] font-medium" style={{ color: "var(--c-deep)" }}>
              Contributing from outside India
            </h4>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.06em]" style={{ color: "var(--c-ochre)" }}>
              Wire transfer · SWIFT · FCRA registered
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "SWIFT / Wire", detail: "Contact us for correspondent bank details — provided after form submission" },
                { label: "FCRA Registration", detail: "All international contributions are received under FCRA compliance" },
                { label: "Receipt", detail: "Tax receipt and acknowledgement sent by email within 72 hours of fund clearance" },
              ].map((m) => (
                <div key={m.label} className="flex items-start gap-2 text-[13px] font-light leading-[1.6]" style={{ color: "var(--c-mid)" }}>
                  <span className="mt-[7px] inline-block h-[5px] w-[5px] shrink-0 rounded-full" style={{ background: "var(--c-ochre)" }} />
                  <span>
                    <strong className="font-medium" style={{ color: "var(--c-deep)" }}>{m.label}:</strong>{" "}
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>
            <div
              className="mt-4 rounded-[2px] border p-4 text-[11.5px] font-light leading-[1.7]"
              style={{ color: "var(--c-at)", background: "var(--c-af)", borderColor: "var(--c-ab)" }}
            >
              Note: International contributions cannot be accepted through UPI or domestic bank transfer. Please use the SWIFT / wire route and contact us before transferring.
            </div>
          </div>
        </div>

        {/* Receipt previews */}
        <p
          className="mb-4 mt-10 text-[11px] font-medium uppercase tracking-[0.1em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Receipt format
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {/* 80G receipt */}
          <div className="rounded-[2px] border bg-white p-6 text-[12px]" style={{ borderColor: "var(--c-div)" }}>
            <div className="mb-3 flex items-start justify-between border-b pb-3" style={{ borderColor: "var(--c-div)" }}>
              <div>
                <p className="font-serif text-base font-semibold" style={{ color: "var(--c-deep)" }}>
                  Tattv Peeth Gurukul Foundation
                </p>
                <p className="mt-[2px] text-[9.5px] font-light tracking-[0.05em]" style={{ color: "var(--c-muted)" }}>
                  Reg. No. · PAN · 80G Ref · FCRA
                </p>
              </div>
              <span
                className="rounded-[1px] border px-2 py-[3px] text-[9px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-gt)", background: "var(--c-gf)", borderColor: "var(--c-gb)" }}
              >
                80G
              </span>
            </div>
            {[
              ["Donor", "Ramesh Iyer"],
              ["Amount", "₹1,001"],
              ["Campaign", "Shade Net & Protected Cultivation"],
              ["Date", "3 May 2025"],
              ["Receipt No.", "TPGF-2025-0042"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b py-1 last:border-b-0" style={{ borderColor: "var(--c-div)", color: "var(--c-mid)" }}>
                <span className="font-light">{k}</span>
                <strong className="font-medium" style={{ color: "var(--c-deep)" }}>{v}</strong>
              </div>
            ))}
            <p className="mt-3 border-t pt-3 text-[10px] font-light leading-[1.6]" style={{ color: "var(--c-muted)", borderColor: "var(--c-div)" }}>
              This contribution is eligible for tax deduction under Section 80G of the Income Tax Act, 1961. Please retain this receipt for your records.
            </p>
          </div>

          {/* International receipt */}
          <div className="rounded-[2px] border bg-white p-6 text-[12px]" style={{ borderColor: "var(--c-div)" }}>
            <div className="mb-3 flex items-start justify-between border-b pb-3" style={{ borderColor: "var(--c-div)" }}>
              <div>
                <p className="font-serif text-base font-semibold" style={{ color: "var(--c-deep)" }}>
                  Tattv Peeth Gurukul Foundation
                </p>
                <p className="mt-[2px] text-[9.5px] font-light tracking-[0.05em]" style={{ color: "var(--c-muted)" }}>
                  FCRA Reg. · Garh Mukteshwar, UP, India
                </p>
              </div>
              <span
                className="rounded-[1px] border px-2 py-[3px] text-[9px] font-medium uppercase tracking-[0.1em]"
                style={{ color: "var(--c-pt)", background: "var(--c-pf)", borderColor: "var(--c-pb)" }}
              >
                Intl. / FCRA
              </span>
            </div>
            {[
              ["Donor", "S. Krishnaswamy"],
              ["Amount", "USD 500 (≈ ₹41,500)"],
              ["Campaign", "Land Acquisition"],
              ["Date", "15 Apr 2025"],
              ["Reference", "TPGF-FCRA-2025-008"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b py-1 last:border-b-0" style={{ borderColor: "var(--c-div)", color: "var(--c-mid)" }}>
                <span className="font-light">{k}</span>
                <strong className="font-medium" style={{ color: "var(--c-deep)" }}>{v}</strong>
              </div>
            ))}
            <p className="mt-3 border-t pt-3 text-[10px] font-light leading-[1.6]" style={{ color: "var(--c-muted)", borderColor: "var(--c-div)" }}>
              Received under FCRA registration. Acknowledgement issued in accordance with FCRA guidelines. Exchange rate applied at date of clearance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
