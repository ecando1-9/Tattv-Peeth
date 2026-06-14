"use client";

import { useState } from "react";

/* ─── Data ──────────────────────────────────────────────── */
const CONTRIBUTIONS = [
  {
    id: "c1",
    label: "₹501",
    amt: 501,
    donor: "Priya Sharma",
    date: "14 May 2025",
    flows: [
      { amt: "₹501", title: "Mulching sheets — Zone A", meta: "Batch 3 · 14 May 2025", tag: "In progress", tagCls: "prog" },
    ],
  },
  {
    id: "c2",
    label: "₹1,001",
    amt: 1001,
    donor: "Ramesh Iyer",
    date: "3 May 2025",
    flows: [
      { amt: "₹600", title: "Shade-net structure — Bay 2 erection labour", meta: "Invoice #SN-042 · 3 May 2025", tag: "Done", tagCls: "done" },
      { amt: "₹401", title: "Mulching sheets — Zone A", meta: "Batch 2 · 7 May 2025", tag: "In progress", tagCls: "prog" },
    ],
  },
  {
    id: "c3",
    label: "₹2,501",
    amt: 2501,
    donor: "Sudhir & Meera Nair",
    date: "28 Apr 2025",
    flows: [
      { amt: "₹2,501", title: "Grafted nursery stock — mango & guava", meta: "Invoice #OR-011 · 30 Apr 2025", tag: "Done", tagCls: "done" },
    ],
  },
  {
    id: "c4",
    label: "₹5,001",
    amt: 5001,
    donor: "Anonymous",
    date: "20 Apr 2025",
    flows: [
      { amt: "₹2,200", title: "Mainline pipe — north zone", meta: "Invoice #DI-009 · 22 Apr 2025", tag: "Done", tagCls: "done" },
      { amt: "₹1,800", title: "Drip emitter fittings — Zone B", meta: "Invoice #DI-010 · 25 Apr 2025", tag: "Done", tagCls: "done" },
      { amt: "₹1,001", title: "Shade-net frame welding — Bay 1", meta: "Bill #SN-039 · 28 Apr 2025", tag: "Done", tagCls: "done" },
    ],
  },
];

const UPDATES = [
  {
    date: "12 Jun 2025",
    title: "Shade-net Bay 1 — structure erected",
    cost: "₹18,400 spent",
    proof: "Verified against Invoice #SN-042 issued by M/s Agrotech Structures, Hapur · GST registered · photograph dated 10 Jun 2025.",
    funders: [
      { name: "Ramesh Iyer", amt: "₹600" },
      { name: "Anonymous (×3)", amt: "₹1,800" },
      { name: "Sunita Verma", amt: "₹400" },
    ],
  },
  {
    date: "30 Apr 2025",
    title: "Nursery stock — 48 grafted saplings planted",
    cost: "₹12,600 spent",
    proof: "Verified against Invoice #OR-011 from Brij Nursery, Vrindavan · 48 saplings (mango, guava, amla) · planted 29–30 Apr 2025.",
    funders: [
      { name: "Sudhir & Meera Nair", amt: "₹2,501" },
      { name: "Kavitha Reddy", amt: "₹1,001" },
    ],
  },
  {
    date: "25 Apr 2025",
    title: "Drip irrigation — mainline + Zone B fittings",
    cost: "₹22,800 spent",
    proof: "Verified against Invoices #DI-009 and #DI-010 from Jain Irrigation, Jalgaon · photographs dated 24–26 Apr 2025.",
    funders: [
      { name: "Anonymous (₹5,001)", amt: "₹4,000" },
      { name: "Vivek Anand", amt: "₹1,001" },
    ],
  },
];

const tagStyle = (cls: string): React.CSSProperties => {
  switch (cls) {
    case "done": return { color: "var(--c-gt)", background: "var(--c-gf)" };
    case "prog": return { color: "var(--c-ochre)", background: "rgba(139,105,20,0.1)" };
    default:     return { color: "var(--c-muted)", background: "rgba(90,64,32,0.06)" };
  }
};

/* ─── Ledger Section ────────────────────────────────────── */
export function LedgerSection() {
  const [panel, setPanel] = useState<"trace" | "updates">("trace");
  const [selectedContrib, setSelectedContrib] = useState<string>("c2");
  const [openUpdate, setOpenUpdate] = useState<number | null>(0);

  const contrib = CONTRIBUTIONS.find((c) => c.id === selectedContrib)!;

  return (
    <section
      id="ledger"
      className="border-b"
      style={{ borderColor: "var(--c-div)" }}
    >
      <div className="mx-auto max-w-[920px] px-8 py-14">
        {/* Header */}
        <p
          className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Contribution ledger
        </p>
        <h2
          className="mb-2 font-serif text-[34px] font-medium leading-[1.2]"
          style={{ color: "var(--c-deep)" }}
        >
          The transparent trail
        </h2>
        <p className="mb-8 max-w-[660px] text-[14px] font-light leading-[1.85]" style={{ color: "var(--c-muted)" }}>
          Every contribution is traced from receipt to bill to photograph. Select a contribution amount below to see exactly where it went, or open an update to read the field record of what was built.
        </p>

        {/* Panel toggle */}
        <div
          className="mb-7 inline-flex overflow-hidden rounded-[2px] border"
          style={{ borderColor: "var(--c-div)" }}
        >
          {(["trace", "updates"] as const).map((p) => (
            <button
              key={p}
              onClick={() => setPanel(p)}
              className="px-[18px] py-[9px] text-[11px] font-medium uppercase tracking-[0.06em] transition-all"
              style={{
                background: panel === p ? "var(--c-deep)" : "transparent",
                color:      panel === p ? "var(--c-cream)" : "var(--c-muted)",
                border: "none",
                cursor: "pointer",
              }}
            >
              {p === "trace" ? "Follow a contribution" : "Open an update"}
            </button>
          ))}
        </div>

        {/* ── Trace panel ── */}
        {panel === "trace" && (
          <div>
            {/* Chip row */}
            <div className="mb-6 flex flex-wrap gap-2">
              {CONTRIBUTIONS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedContrib(c.id)}
                  className="rounded-[20px] border px-[13px] py-[7px] text-[12px] font-normal transition-all"
                  style={{
                    background:  selectedContrib === c.id ? "var(--c-ochre)" : "var(--c-warm)",
                    color:       selectedContrib === c.id ? "var(--c-cream)" : "var(--c-mid)",
                    borderColor: selectedContrib === c.id ? "var(--c-ochre)" : "var(--c-div)",
                    cursor: "pointer",
                  }}
                >
                  <strong>{c.label}</strong>
                </button>
              ))}
            </div>

            {/* Trace result */}
            <div className="rounded-[2px] border p-7" style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}>
              <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-serif text-[22px] font-semibold" style={{ color: "var(--c-deep)" }}>
                  {contrib.donor}
                </span>
                <span className="font-serif text-[22px] font-semibold" style={{ color: "var(--c-ochre)" }}>
                  ₹{contrib.amt.toLocaleString("en-IN")}
                </span>
              </div>
              <p className="mb-6 text-[12px] font-light" style={{ color: "var(--c-muted)" }}>
                Received {contrib.date} · 80G receipt issued
              </p>

              {contrib.flows.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 border-t py-4 first:border-t-0 first:pt-0"
                  style={{ borderColor: "var(--c-div)" }}
                >
                  <span className="min-w-[78px] shrink-0 font-serif text-[17px] font-semibold" style={{ color: "var(--c-deep)" }}>
                    {f.amt}
                  </span>
                  <div className="flex-1">
                    <p className="mb-1 text-[13px] font-medium" style={{ color: "var(--c-deep)" }}>
                      {f.title}
                      <span
                        className="ml-2 rounded-[1px] px-[7px] py-[2px] text-[9.5px] font-medium uppercase tracking-[0.08em]"
                        style={tagStyle(f.tagCls)}
                      >
                        {f.tag}
                      </span>
                    </p>
                    <p className="text-[11px] font-light" style={{ color: "var(--c-muted)" }}>
                      {f.meta}
                    </p>
                  </div>
                </div>
              ))}

              <p className="mt-5 border-t pt-4 text-[11.5px] font-light leading-[1.7]" style={{ color: "var(--c-muted)", borderColor: "var(--c-div)" }}>
                Each flow line is backed by an invoice or bill and a dated photograph of the completed work. Receipts and photos are available on request by email. 80G certificates are issued within 7 working days of receipt of contribution.
              </p>
            </div>
          </div>
        )}

        {/* ── Updates panel ── */}
        {panel === "updates" && (
          <div className="flex flex-col gap-3">
            {UPDATES.map((u, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[2px] border"
                style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
              >
                {/* Update header (accordion trigger) */}
                <button
                  className="flex w-full items-center gap-4 px-5 py-[18px] text-left transition-colors"
                  style={{ background: "transparent", border: "none", cursor: "pointer" }}
                  onClick={() => setOpenUpdate(openUpdate === i ? null : i)}
                >
                  <span
                    className="min-w-[92px] shrink-0 text-[10.5px] font-medium uppercase tracking-[0.08em]"
                    style={{ color: "var(--c-ochre)" }}
                  >
                    {u.date}
                  </span>
                  <span className="flex-1">
                    <span className="block text-[14px] font-medium" style={{ color: "var(--c-deep)" }}>
                      {u.title}
                    </span>
                    <span className="text-[11.5px] font-light" style={{ color: "var(--c-muted)" }}>
                      {u.cost}
                    </span>
                  </span>
                  <span
                    className="shrink-0 text-[13px] transition-transform"
                    style={{
                      color: "var(--c-muted)",
                      transform: openUpdate === i ? "rotate(90deg)" : "none",
                    }}
                  >
                    ›
                  </span>
                </button>

                {/* Update detail */}
                {openUpdate === i && (
                  <div className="border-t px-5 pb-5 pt-4" style={{ borderColor: "var(--c-div)" }}>
                    <div
                      className="mb-4 rounded-[2px] border p-3 text-[11.5px] font-light leading-[1.7]"
                      style={{ color: "var(--c-muted)", background: "var(--c-cream)", borderColor: "var(--c-div)" }}
                    >
                      {u.proof}
                    </div>
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>
                      Contributions that funded this work
                    </p>
                    <div>
                      {u.funders.map((f, j) => (
                        <div
                          key={j}
                          className="flex items-center justify-between border-b py-2 text-[12.5px] last:border-b-0"
                          style={{ borderColor: "var(--c-div)" }}
                        >
                          <span className="font-light" style={{ color: "var(--c-mid)" }}>{f.name}</span>
                          <span className="font-serif font-semibold" style={{ color: "var(--c-deep)" }}>{f.amt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
