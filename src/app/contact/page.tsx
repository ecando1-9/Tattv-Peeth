import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with the founding team of Tattv Peeth Gurukul Foundation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Contact
          </p>
          <h1
            className="font-serif text-[42px] font-medium leading-[1.1]"
            style={{ color: "var(--c-deep)" }}
          >
            Connect with the{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              founding team
            </em>
          </h1>
        </div>
      </section>

      {/* Contact grid */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Details */}
            <div>
              <p
                className="mb-6 text-[14px] font-light leading-[1.85]"
                style={{ color: "var(--c-muted)" }}
              >
                We respond to all enquiries within 48 hours. For urgent matters, call us directly.
              </p>

              <div className="space-y-5">
                {[
                  { label: "Address", value: "Garh Mukteshwar, Hapur district, Uttar Pradesh" },
                  { label: "Phone", value: "+91 93505 01133" },
                  { label: "Email", value: "info@tattvpeeth.org" },
                  { label: "CIN", value: "U85420DL2026NPL466818" },
                ].map((item) => (
                  <div key={item.label}>
                    <p
                      className="mb-1 text-[10px] font-medium uppercase tracking-[0.14em]"
                      style={{ color: "var(--c-ochre)" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-[14px] font-light"
                      style={{ color: "var(--c-mid)" }}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                className="my-8"
                style={{ height: "0.5px", background: "var(--c-div)" }}
              />

              <p
                className="text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "var(--c-ochre)" }}
              >
                80G eligible · FCRA registered
              </p>
              <p
                className="mt-2 text-[13px] font-light leading-[1.7]"
                style={{ color: "var(--c-muted)" }}
              >
                Tattv Peeth Gurukul Foundation is registered as a non-profit organisation. All contributions are eligible for tax deduction under Section 80G.
              </p>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
