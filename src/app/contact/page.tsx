import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Tattv Peeth Gurukul Foundation.",
};

export default function ContactPage() {
  return (
    <section className="section-pad">
      <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading eyebrow="Contact" title="Connect with the founding team" />
          <div className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
            <p>Garh Mukteshwar, Hapur district, Uttar Pradesh</p>
            <p>Phone: +91 93505 01133</p>
            <p>Email: info@tattvpeeth.org</p>
            <p>CIN: U85420DL2026NPL466818</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
