"use client";

import { useState } from "react";

/* ─── Types ────────────────────────────────────────────── */
interface Project {
  id: string;
  cat: string;
  catClass: string;
  status: string;
  statusClass: string;
  title: string;
  sub: string;
  desc: string;
  subsidyNote?: string;
  securedPct: number;
  raisedPct: number;
  raisedLabel: string;
  reqLabel: string;
  showLegend?: boolean;
  milestones: { done: boolean; active: boolean; label: string }[];
  yajna: string;
  fullWidth?: boolean;
  hasBhumi?: boolean;
}

/* ─── Data ─────────────────────────────────────────────── */
const ACTIVE: { dev: string; title: string; en: string; desc: string; projects: Project[] }[] = [
  {
    dev: "ब्रह्म",
    title: "Brahma Yajña",
    en: "The seat of learning",
    desc: "To preserve a teaching lineage, one must first give it ground to stand on. The land is the body of the Gurukul — every other offering rests upon it.",
    projects: [
      {
        id: "land",
        cat: "Bhūmi · Land",
        catClass: "land",
        status: "Active · long horizon",
        statusClass: "active",
        title: "Land Acquisition — 50 bigha",
        sub: "10 bigha secured by the founding team · 40 bigha pursued through crowdfunding",
        desc: "The Gurukul requires 50 bigha at Garh Mukteshwar. The founding team has already acquired 10 bigha (₹2 Cr of founder capital) to establish the working campus. The remaining 40 bigha is acquired in tranches as funds are raised — the single largest, slowest, and most foundational offering.",
        securedPct: 0,
        raisedPct: 0,
        raisedLabel: "₹0 raised from contributors",
        reqLabel: "₹8 Cr requested",
        milestones: [
          { done: true, active: false, label: "10 bigha — founder capital (₹2 Cr) — secured, working campus established" },
          { done: false, active: true, label: "15 bigha — tranche 2 (₹3 Cr)" },
          { done: false, active: false, label: "15 bigha — tranche 3 (₹3 Cr)" },
        ],
        yajna: "Brahma Yajña",
        fullWidth: true,
        hasBhumi: true,
      },
    ],
  },
  {
    dev: "मनुष्य",
    title: "Manuṣya Yajña",
    en: "Sharing food · sustenance",
    desc: "Of all human needs, food is the one we can satisfy in full measure. The campus grows what it eats — and what it grows becomes the Annadāna offered to its students and the community around it.",
    projects: [
      {
        id: "shadenet",
        cat: "Anna · Agriculture",
        catClass: "agri",
        status: "Active",
        statusClass: "active",
        title: "Shade Net & Protected Cultivation",
        sub: "Year-round vegetable cultivation, protected from extreme weather",
        desc: "Shade-net structures protect crops from heat, hail, and pests, raising yield per bigha and enabling cultivation through every season — the backbone of the campus food supply.",
        subsidyNote: "₹22L secured via MIDH subsidy + founder contribution. Crowdfunding ask: ₹22L.",
        securedPct: 50,
        raisedPct: 0,
        raisedLabel: "₹22L secured · ₹0 raised",
        reqLabel: "₹44L total",
        showLegend: true,
        milestones: [
          { done: false, active: true, label: "Shade-net structure erection" },
          { done: false, active: false, label: "Raised beds and bed preparation" },
          { done: false, active: false, label: "MIDH subsidy claim via empanelled vendor" },
        ],
        yajna: "Manuṣya Yajña",
      },
      {
        id: "orchard",
        cat: "Anna · Agriculture",
        catClass: "agri",
        status: "Active",
        statusClass: "active",
        title: "Plantation & Orchard",
        sub: "Nursery stock, medicinals, cereals, and a living hedge",
        desc: "A perennial orchard and medicinal garden that builds long-term income, restores soil health, and provides food and fodder year after year — the slow, compounding wealth of a planted earth.",
        securedPct: 0,
        raisedPct: 0,
        raisedLabel: "₹0 raised",
        reqLabel: "₹8L requested",
        milestones: [
          { done: false, active: true, label: "Grafted nursery stock — orchard species" },
          { done: false, active: false, label: "Medicinal garden and cereal zone" },
          { done: false, active: false, label: "Perimeter living hedge" },
        ],
        yajna: "Manuṣya Yajña",
      },
    ],
  },
  {
    dev: "भूत · पितृ",
    title: "Bhūta & Pitṛ Yajña",
    en: "Go-seva · serving beings, honouring ancestors",
    desc: "The cow is the greatest of givers, and her care is the traditional way of honouring those who came before us. Go-seva completes the natural cycle of the farm and the cycle of gratitude across generations.",
    projects: [
      {
        id: "goshala",
        cat: "Go-seva",
        catClass: "go",
        status: "Active",
        statusClass: "active",
        title: "Goshala",
        sub: "Shelter structure and 5–8 indigenous cows",
        desc: "The Goshala provides dairy for the campus, organic manure for the fields, and dung for the biogas dome — completing the natural farming cycle. To sponsor a cow in the name of an ancestor is among the most traditional of offerings.",
        securedPct: 0,
        raisedPct: 0,
        raisedLabel: "₹0 raised",
        reqLabel: "₹12L requested",
        milestones: [
          { done: false, active: true, label: "Shelter structure and roof" },
          { done: false, active: false, label: "First batch — 5 indigenous cows" },
          { done: false, active: false, label: "Dung pit and water points" },
        ],
        yajna: "Bhūta & Pitṛ Yajña",
        fullWidth: true,
      },
    ],
  },
  {
    dev: "भूत",
    title: "Bhūta Yajña",
    en: "The five elements · water, soil, energy",
    desc: "To serve the land is to serve the Pañca Bhūta within it. These offerings care for water, soil, and the turning of waste into energy — the quiet infrastructure on which everything that grows depends.",
    projects: [
      {
        id: "rainwater",
        cat: "Jala · Water",
        catClass: "bhuta",
        status: "Active",
        statusClass: "active",
        title: "Rainwater Harvesting",
        sub: "Farm pond and rainwater units for water security",
        desc: "A farm pond and rainwater harvesting units make the campus water-secure, recharge groundwater, and reduce dependence on external irrigation through the dry season.",
        subsidyNote: "₹4.5L secured via PMKSY 50% subsidy + founder contribution. Crowdfunding ask: ₹4.5L.",
        securedPct: 50,
        raisedPct: 0,
        raisedLabel: "₹4.5L secured · ₹0 raised",
        reqLabel: "₹9L total",
        showLegend: true,
        milestones: [
          { done: false, active: true, label: "Farm pond excavation and lining" },
          { done: false, active: false, label: "Rooftop collection and storage" },
          { done: false, active: false, label: "PMKSY subsidy claim" },
        ],
        yajna: "Bhūta Yajña",
      },
      {
        id: "drip",
        cat: "Jala · Water",
        catClass: "bhuta",
        status: "Active",
        statusClass: "active",
        title: "Drip Irrigation",
        sub: "Water delivered directly to the root",
        desc: "Drip irrigation delivers water straight to plant roots, cutting wastage by 50–70% and holding consistent moisture through dry spells — the most efficient way to water a planted campus.",
        subsidyNote: "₹6L secured via PMKSY ~50% subsidy + founder contribution. Crowdfunding ask: ₹6L.",
        securedPct: 50,
        raisedPct: 0,
        raisedLabel: "₹6L secured · ₹0 raised",
        reqLabel: "₹12L total",
        showLegend: true,
        milestones: [
          { done: false, active: true, label: "Mainline and submain network" },
          { done: false, active: false, label: "Drip lines across plantation zones" },
          { done: false, active: false, label: "PMKSY subsidy claim" },
        ],
        yajna: "Bhūta Yajña",
      },
      {
        id: "mulching",
        cat: "Bhūmi · Soil",
        catClass: "bhuta",
        status: "Active",
        statusClass: "active",
        title: "Mulching",
        sub: "Soil moisture, weed suppression, organic matter",
        desc: "Mulching suppresses weeds, retains soil moisture, reduces watering frequency, and slowly returns organic matter to the earth — small in cost, large in effect on every bed.",
        securedPct: 0,
        raisedPct: 0,
        raisedLabel: "₹0 raised",
        reqLabel: "₹3L requested",
        milestones: [
          { done: false, active: true, label: "Mulching sheets — Zone A" },
          { done: false, active: false, label: "Organic mulch across orchard" },
        ],
        yajna: "Bhūta Yajña",
      },
      {
        id: "biogas",
        cat: "Agni · Energy",
        catClass: "bhuta",
        status: "Active",
        statusClass: "active",
        title: "Biogas Dome",
        sub: "Cow dung and farm waste into cooking gas",
        desc: "The biogas dome converts cow dung and farm waste into cooking gas for the campus, with the slurry returning to the fields as organic fertiliser — closing the loop from Goshala to kitchen to soil.",
        subsidyNote: "₹1.8L secured via MNRE ~40–50% subsidy + founder contribution. Crowdfunding ask: ₹2.2L.",
        securedPct: 45,
        raisedPct: 0,
        raisedLabel: "₹1.8L secured · ₹0 raised",
        reqLabel: "₹4L total",
        showLegend: true,
        milestones: [
          { done: false, active: true, label: "Dome construction and inlet" },
          { done: false, active: false, label: "Gas line to kitchen + slurry channel" },
          { done: false, active: false, label: "MNRE subsidy claim" },
        ],
        yajna: "Bhūta Yajña",
      },
    ],
  },
];

const COMPLETED: Project[] = [
  {
    id: "campus10",
    cat: "Bhūmi · Land",
    catClass: "land",
    status: "Completed · 2024–25",
    statusClass: "done",
    title: "Working Campus — first 10 bigha",
    sub: "Founding land secured · ₹2 Cr",
    desc: "The founding team acquired the first 10 bigha of land at Garh Mukteshwar using founder capital of ₹2 Cr — establishing the physical basis of the Gurukul. This offering is closed. Every rupee of it is traced.",
    securedPct: 100,
    raisedPct: 0,
    raisedLabel: "₹2 Cr — founder capital",
    reqLabel: "₹2 Cr goal",
    milestones: [
      { done: true, active: false, label: "10 bigha identified and surveyed" },
      { done: true, active: false, label: "Purchase deed executed" },
      { done: true, active: false, label: "Working campus operational" },
    ],
    yajna: "Brahma Yajña",
  },
];

/* ─── Badge colours ─────────────────────────────────────── */
const catStyle = (cls: string): React.CSSProperties => {
  switch (cls) {
    case "land": return { color: "var(--c-at)", background: "var(--c-af)", border: "0.5px solid var(--c-ab)" };
    case "agri": return { color: "var(--c-gt)", background: "var(--c-gf)", border: "0.5px solid var(--c-gb)" };
    case "go":   return { color: "var(--c-at)", background: "var(--c-af)", border: "0.5px solid var(--c-ab)" };
    case "bhuta":return { color: "var(--c-pt)", background: "var(--c-pf)", border: "0.5px solid var(--c-pb)" };
    default:     return {};
  }
};

const statusStyle = (cls: string): React.CSSProperties => {
  switch (cls) {
    case "active": return { color: "var(--c-ochre)", background: "rgba(139,105,20,0.1)", border: "0.5px solid rgba(139,105,20,0.25)" };
    case "done":   return { color: "var(--c-gt)", background: "var(--c-gf)", border: "0.5px solid var(--c-gb)" };
    default:       return {};
  }
};

const dotColor = (m: { done: boolean; active: boolean }) => {
  if (m.done)   return "var(--c-gb)";
  if (m.active) return "var(--c-ochre)";
  return "#B4B2A9";
};

/* ─── Bhumi Grid (50 cells) ─────────────────────────────── */
function BhumiGrid() {
  const cells = Array.from({ length: 50 }, (_, i) => {
    if (i < 10)  return "bhumi-cell-founder";
    if (i < 25)  return "bhumi-cell-t2";
    if (i < 40)  return "bhumi-cell-t3";
    return "bhumi-cell-tbd";
  });

  return (
    <div className="mt-5 mb-2">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--c-muted)" }}>
        भूमि-पटल · The Bhūmi-Paṭala — fifty bigha, one cell each
      </p>
      <div className="grid gap-1" style={{ gridTemplateColumns: "repeat(10, 1fr)", maxWidth: 560 }}>
        {cells.map((cls, i) => (
          <div key={i} className={`${cls} aspect-square rounded-[3px]`} />
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-3 text-[10.5px]" style={{ color: "var(--c-muted)" }}>
        {[
          { cls: "bhumi-cell-founder", label: "Founder capital (10)" },
          { cls: "bhumi-cell-t2",      label: "Tranche 2 (15)" },
          { cls: "bhumi-cell-t3",      label: "Tranche 3 (15)" },
          { cls: "bhumi-cell-tbd",     label: "To be scheduled (10)" },
        ].map((l) => (
          <span key={l.label} className="flex items-center gap-1">
            <span className={`${l.cls} inline-block h-[11px] w-[11px] rounded-[2px]`} />
            {l.label}
          </span>
        ))}
      </div>
      <p className="mt-2 text-[12px] font-light leading-[1.7]" style={{ color: "var(--c-muted)", maxWidth: 600 }}>
        As each bigha is funded, its cell fills and carries the saṅkalpa-names of those whose offerings consecrated it — a map of vows, not of ownership: dāna consecrates ground, it never purchases it.
      </p>
    </div>
  );
}

/* ─── Project Card ──────────────────────────────────────── */
function ProjectCard({ p, onDonate }: { p: Project; onDonate: (title: string, yajna: string) => void }) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-sm border"
      style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
    >
      {/* Card head */}
      <div className="flex-1 p-[1.4rem]">
        <div className="mb-3 flex items-center justify-between">
          <span
            className="rounded-[1px] px-2 py-[2px] text-[10px] font-medium uppercase tracking-[0.1em]"
            style={catStyle(p.catClass)}
          >
            {p.cat}
          </span>
          <span
            className="rounded-[1px] px-2 py-[2px] text-[10px] font-medium uppercase tracking-[0.08em]"
            style={statusStyle(p.statusClass)}
          >
            {p.status}
          </span>
        </div>

        <h3
          className="mb-1 font-serif text-[19px] font-medium leading-[1.2]"
          style={{ color: "var(--c-deep)" }}
        >
          {p.title}
        </h3>
        <p className="mb-3 text-[12px] font-light" style={{ color: "var(--c-muted)" }}>
          {p.sub}
        </p>
        <p className="mb-4 text-[13px] font-light leading-[1.7]" style={{ color: "var(--c-muted)" }}>
          {p.desc}
        </p>

        {p.subsidyNote && (
          <p
            className="mb-4 rounded-[1px] border px-[9px] py-[5px] text-[11px] font-normal leading-[1.65]"
            style={{ color: "var(--c-gt)", background: "var(--c-gf)", borderColor: "var(--c-gb)" }}
          >
            {p.subsidyNote}
          </p>
        )}

        {/* Progress bar */}
        <div className="mb-1">
          <div className="c-bar-track">
            <div className="c-bar-secured" style={{ width: `${p.securedPct}%` }} />
            <div className="c-bar-raised"  style={{ width: `${p.raisedPct}%` }} />
          </div>
          <div className="mt-[6px] flex justify-between text-[12px]">
            <span className="font-medium" style={{ color: "var(--c-ochre)" }}>{p.raisedLabel}</span>
            <span className="font-light"  style={{ color: "var(--c-muted)" }}>{p.reqLabel}</span>
          </div>
          {p.showLegend && (
            <div className="mt-1 flex gap-4 text-[10.5px] font-light" style={{ color: "var(--c-muted)" }}>
              <span className="flex items-center gap-1">
                <span className="inline-block h-[7px] w-[7px] rounded-[1px]" style={{ background: "var(--c-secured)" }} />
                Subsidy + founder
              </span>
              <span className="flex items-center gap-1">
                <span className="inline-block h-[7px] w-[7px] rounded-[1px]" style={{ background: "var(--c-ochre)" }} />
                From contributors
              </span>
            </div>
          )}
        </div>

        {/* Bhumi grid for land card */}
        {p.hasBhumi && <BhumiGrid />}
      </div>

      {/* Card body / milestones + actions */}
      <div className="border-t px-[1.4rem] pb-[1.4rem] pt-4" style={{ borderColor: "var(--c-div)" }}>
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>
          Milestones
        </p>
        <div className="mb-4 flex flex-col gap-[6px]">
          {p.milestones.map((m, i) => (
            <div key={i} className="flex items-start gap-2 text-[12px] font-light leading-[1.5]" style={{ color: "var(--c-mid)" }}>
              <span
                className="mt-[5px] inline-block h-[5px] w-[5px] shrink-0 rounded-full"
                style={{ background: dotColor(m) }}
              />
              {m.label}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onDonate(p.title, p.yajna)}
            className="flex-1 rounded-sm py-[10px] text-[12px] font-medium uppercase tracking-[0.07em] bg-[var(--c-deep)] text-[var(--c-cream)] hover:bg-[var(--c-ochre)] transition-colors"
          >
            Take part in this offering
          </button>
          <a href="#ledger">
            <button
              className="rounded-sm px-[14px] py-[10px] text-[12px] font-medium uppercase tracking-[0.07em] bg-transparent text-[var(--c-mid)] border border-[var(--c-div)] hover:border-[var(--c-ochre)] hover:text-[var(--c-ochre)] transition-all"
            >
              Trace funds
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Donation Modal ────────────────────────────────────── */
const PRESETS = [501, 1001, 2501, 5001, 11000, 21000, 51000, 101000];

export function DonateModal({
  project,
  yajna,
  onClose,
}: {
  project: string;
  yajna: string;
  onClose: () => void;
}) {
  const [amount, setAmount]   = useState<number | null>(null);
  const [custom, setCustom]   = useState("");
  const [name, setName]       = useState("");
  const [sankalpa, setSankalpa] = useState("");
  const [mode, setMode]       = useState<"india" | "intl">("india");

  const finalAmt = amount ?? (custom ? parseInt(custom) : null);
  const displayAmt = finalAmt ? `₹${finalAmt.toLocaleString("en-IN")}` : "[amount]";

  function handlePreset(v: number) {
    setAmount(v);
    setCustom("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Thank you${name ? `, ${name}` : ""}! Our team will contact you with payment details for your ${displayAmt} offering toward ${project}.`);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6"
      style={{ background: "rgba(44,31,10,0.5)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-[3px] p-8"
        style={{ background: "var(--c-cream)" }}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-[22px] leading-none"
          style={{ color: "var(--c-muted)", background: "none", border: "none", cursor: "pointer" }}
          aria-label="Close"
        >
          ×
        </button>

        <h3 className="mb-1 font-serif text-2xl font-medium" style={{ color: "var(--c-deep)" }}>
          {project}
        </h3>
        <p className="mb-6 text-[12px] font-light" style={{ color: "var(--c-muted)" }}>
          {yajna} · Tattv Peeth Foundation · 80G eligible
        </p>

        <form onSubmit={handleSubmit}>
          {/* Amount chips */}
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>
            Offering amount
          </p>
          <div className="mb-4 flex flex-wrap gap-2">
            {PRESETS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => handlePreset(v)}
                className="rounded-[2px] border px-4 py-2 font-serif text-[15px] font-medium transition-all"
                style={{
                  background: amount === v ? "var(--c-ochre)" : "var(--c-warm)",
                  color:      amount === v ? "var(--c-cream)" : "var(--c-mid)",
                  borderColor: amount === v ? "var(--c-ochre)" : "var(--c-div)",
                }}
              >
                ₹{v.toLocaleString("en-IN")}
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Or enter a custom amount"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setAmount(null); }}
            className="mb-4 w-full rounded-[2px] border px-3 py-[10px] text-[14px]"
            style={{ background: "var(--c-warm)", borderColor: "var(--c-div)", color: "var(--c-deep)" }}
          />

          {/* Name */}
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>
            Your name
          </p>
          <input
            type="text"
            placeholder="Full name (for receipt)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mb-4 w-full rounded-[2px] border px-3 py-[10px] text-[14px]"
            style={{ background: "var(--c-warm)", borderColor: "var(--c-div)", color: "var(--c-deep)" }}
          />

          {/* Sankalpa */}
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>
            Saṅkalpa — in whose name is this offering? (optional)
          </p>
          <input
            type="text"
            placeholder="e.g. in memory of / on behalf of"
            value={sankalpa}
            onChange={(e) => setSankalpa(e.target.value)}
            className="mb-1 w-full rounded-[2px] border px-3 py-[10px] text-[14px]"
            style={{ background: "var(--c-warm)", borderColor: "var(--c-div)", color: "var(--c-deep)" }}
          />
          {(name || sankalpa || finalAmt) && (
            <div
              className="mb-4 mt-2 rounded-[10px] border p-4 font-serif text-[15px] leading-[1.65]"
              style={{ background: "var(--c-warm)", borderColor: "var(--c-div)", color: "var(--c-mid)" }}
            >
              I, <strong style={{ color: "var(--c-deep)" }}>{name || "[name]"}</strong>, offer{" "}
              <strong style={{ color: "var(--c-deep)" }}>{displayAmt}</strong> toward{" "}
              <strong style={{ color: "var(--c-deep)" }}>{project}</strong>
              {sankalpa ? `, in the name of ${sankalpa}` : ""}, at Tattv Peeth Gurukul Foundation.
            </div>
          )}

          {/* Payment mode toggle */}
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>
            I am contributing from
          </p>
          <div className="mb-4 flex overflow-hidden rounded-[2px] border" style={{ borderColor: "var(--c-div)" }}>
            {(["india", "intl"] as const).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMode(m)}
                className="flex-1 py-[9px] text-[11px] font-medium uppercase tracking-[0.06em] transition-all"
                style={{
                  background: mode === m ? "var(--c-deep)" : "transparent",
                  color:      mode === m ? "var(--c-cream)" : "var(--c-muted)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {m === "india" ? "India" : "Outside India"}
              </button>
            ))}
          </div>

          {/* Payment info */}
          <div className="mb-4 rounded-[2px] border p-4 text-[13px] leading-[1.7]" style={{ background: "var(--c-warm)", borderColor: "var(--c-div)", color: "var(--c-mid)" }}>
            {mode === "india" ? (
              <>
                <strong style={{ color: "var(--c-deep)" }}>UPI:</strong> tattvpeeth@upi
                <br />
                <strong style={{ color: "var(--c-deep)" }}>Bank transfer:</strong> Tattv Peeth Gurukul Foundation, A/C 00000012345678, IFSC SBIN0001234
                <br />
                <strong style={{ color: "var(--c-deep)" }}>Cheque:</strong> payable to Tattv Peeth Gurukul Foundation
                <br />
                <span className="mt-1 block text-[11px]" style={{ color: "var(--c-ochre)" }}>80G receipt issued within 7 working days.</span>
              </>
            ) : (
              <>
                <strong style={{ color: "var(--c-deep)" }}>Wire / SWIFT:</strong> Our team will send you the correspondent bank details after you submit this form.
                <br />
                <span className="mt-1 block text-[11px]" style={{ color: "var(--c-at)" }}>
                  International contributions are received under FCRA. A confirmation and tax receipt are sent via email.
                </span>
              </>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-sm py-[11px] text-[12px] font-medium uppercase tracking-[0.07em] bg-[var(--c-deep)] text-[var(--c-cream)] hover:bg-[var(--c-ochre)] transition-colors"
          >
            Confirm my offering
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Campaign Tabs (main export) ───────────────────────── */
export function CampaignTabs() {
  const [activeTab, setActiveTab] = useState<"active" | "completed">("active");
  const [modal, setModal] = useState<{ project: string; yajna: string } | null>(null);

  return (
    <>
      {/* Tab nav */}
      <div
        className="sticky top-[72px] z-40 border-b bg-background"
        style={{ borderColor: "var(--c-div)" }}
      >
        <div className="mx-auto flex max-w-[920px] gap-0 px-8 pt-7">
          {(["active", "completed"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className="mb-[-1px] border-b-2 px-5 py-[10px] text-[12px] font-medium uppercase tracking-[0.06em] transition-all"
              style={{
                background: "transparent",
                border: "none",
                borderBottom: activeTab === t ? "2px solid var(--c-ochre)" : "2px solid transparent",
                color: activeTab === t ? "var(--c-ochre)" : "var(--c-muted)",
                cursor: "pointer",
              }}
            >
              {t === "active" ? "Active offerings" : "Completed"}
            </button>
          ))}
        </div>
      </div>

      {/* Active tab content */}
      {activeTab === "active" && (
        <div className="mx-auto max-w-[920px] px-8 py-10">
          {ACTIVE.map((group) => (
            <div key={group.title}>
              {/* Group header */}
              <div
                className="mb-2 mt-9 flex items-baseline gap-3 border-t pt-8 first:mt-0 first:border-t-0 first:pt-0"
                style={{ borderColor: "var(--c-div)" }}
              >
                <span className="font-dev text-[22px]" style={{ color: "var(--c-ochre)" }}>
                  {group.dev}
                </span>
                <span className="font-serif text-2xl font-medium" style={{ color: "var(--c-deep)" }}>
                  {group.title}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>
                  {group.en}
                </span>
              </div>
              <p className="mb-6 max-w-[640px] text-[13px] font-light leading-[1.8]" style={{ color: "var(--c-muted)" }}>
                {group.desc}
              </p>

              {/* Cards grid */}
              <div className="grid gap-4 md:grid-cols-2">
                {group.projects.map((p) => (
                  <div key={p.id} className={p.fullWidth ? "md:col-span-2" : ""}>
                    <ProjectCard p={p} onDonate={(t, y) => setModal({ project: t, yajna: y })} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Completed tab content */}
      {activeTab === "completed" && (
        <div className="mx-auto max-w-[920px] px-8 py-10">
          <div className="mb-2 flex items-baseline gap-3">
            <span className="font-dev text-[22px]" style={{ color: "var(--c-ochre)" }}>पूर्ण</span>
            <span className="font-serif text-2xl font-medium" style={{ color: "var(--c-deep)" }}>Completed offerings</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.1em]" style={{ color: "var(--c-muted)" }}>Closed campaigns, fully traced</span>
          </div>
          <p className="mb-6 max-w-[640px] text-[13px] font-light leading-[1.8]" style={{ color: "var(--c-muted)" }}>
            When an offering is complete, it does not disappear. It stays here permanently — with its full contribution trail, every bill, and every photograph intact, so the record of what was given and what was built can always be returned to.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {COMPLETED.map((p) => (
              <ProjectCard key={p.id} p={p} onDonate={(t, y) => setModal({ project: t, yajna: y })} />
            ))}
          </div>
        </div>
      )}

      {/* Donation modal */}
      {modal && (
        <DonateModal
          project={modal.project}
          yajna={modal.yajna}
          onClose={() => setModal(null)}
        />
      )}
    </>
  );
}
