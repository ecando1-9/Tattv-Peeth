"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending…");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    setStatus(
      response.ok
        ? "Thank you. We will be in touch shortly."
        : "Please check the form and try again."
    );
    if (response.ok) event.currentTarget.reset();
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
        Send a message
      </p>
      <h3
        className="mb-6 font-serif text-2xl font-medium"
        style={{ color: "var(--c-deep)" }}
      >
        We&apos;ll respond within 48 hours
      </h3>

      <form className="grid gap-4" onSubmit={submit}>
        <input
          name="name"
          placeholder="Full name"
          required
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Email address"
          required
          style={inputStyle}
        />
        <input
          name="phone"
          placeholder="Phone number"
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="How can we help?"
          required
          rows={4}
          style={{ ...inputStyle, resize: "vertical" }}
        />

        <button
          type="submit"
          className="rounded-sm py-3 text-[12px] font-medium uppercase tracking-[0.08em] transition-colors"
          style={{ background: "var(--c-deep)", color: "var(--c-cream)" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "var(--c-ochre)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.background =
              "var(--c-deep)")
          }
        >
          Send Message
        </button>

        {status && (
          <p
            className="text-[13px] font-light"
            style={{ color: "var(--c-muted)" }}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
