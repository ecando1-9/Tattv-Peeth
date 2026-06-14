"use client";

import { useState } from "react";

const AMOUNTS = [501, 1001, 2501, 5001, 11000, 21000, 51000];

export function DonateForm() {
  const [amount, setAmount]   = useState<number | null>(null);
  const [custom, setCustom]   = useState("");
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [phone, setPhone]     = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus]   = useState<string | null>(null);

  const finalAmt = amount ?? (custom ? parseInt(custom) : null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending…");
    const response = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, amount: finalAmt, message }),
    });
    const result = await response.json();
    setStatus(result.message ?? "Thank you. Our team will contact you with payment details.");
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "0.5px solid var(--c-div)",
    background: "var(--c-warm)",
    borderRadius: "2px",
    fontFamily: "inherit",
    fontSize: "14px",
    color: "var(--c-deep)",
    outline: "none",
  };

  return (
    <div
      className="rounded-sm border p-7"
      style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
    >
      <p
        className="mb-1 text-[11px] font-medium uppercase tracking-[0.14em]"
        style={{ color: "var(--c-ochre)" }}
      >
        Make your offering
      </p>
      <h3
        className="mb-6 font-serif text-2xl font-medium"
        style={{ color: "var(--c-deep)" }}
      >
        Every rupee is traced &amp; receipted
      </h3>

      <form className="grid gap-5" onSubmit={submit}>
        {/* Amount chips */}
        <div>
          <p
            className="mb-2 text-[10px] font-medium uppercase tracking-[0.1em]"
            style={{ color: "var(--c-muted)" }}
          >
            Select amount
          </p>
          <div className="mb-3 flex flex-wrap gap-2">
            {AMOUNTS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => { setAmount(v); setCustom(""); }}
                className="rounded-sm border font-serif text-[14px] font-medium px-4 py-[7px] transition-all"
                style={{
                  background:  amount === v ? "var(--c-ochre)" : "var(--c-cream)",
                  color:       amount === v ? "var(--c-cream)" : "var(--c-mid)",
                  borderColor: amount === v ? "var(--c-ochre)" : "var(--c-div)",
                  cursor: "pointer",
                }}
              >
                ₹{v.toLocaleString("en-IN")}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="Or enter a custom amount (₹)"
            value={custom}
            onChange={(e) => { setCustom(e.target.value); setAmount(null); }}
            style={inputStyle}
          />
        </div>

        {/* Personal details */}
        <input
          type="text"
          placeholder="Full name *"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email address *"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Message or saṅkalpa (optional)"
          value={message}
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...inputStyle, resize: "vertical" }}
        />

        <button
          type="submit"
          className="rounded-sm py-3 text-[12px] font-medium uppercase tracking-[0.08em] bg-[var(--c-deep)] text-[var(--c-cream)] hover:bg-[var(--c-ochre)] transition-colors"
        >
          Confirm my offering
          {finalAmt ? ` — ₹${finalAmt.toLocaleString("en-IN")}` : ""}
        </button>

        {status && (
          <p className="text-[13px] font-light" style={{ color: "var(--c-muted)" }}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
