import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description: "About Tattv Peeth Gurukul Foundation and its sacred campus vision.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-pad border-b">
        <div className="container">
          <SectionHeading
            eyebrow="About Us"
            title="A sacred seat for truth, learning, discipline, and service"
            description="Tattv Peeth is a residential Gurukul being built on sacred land in Garh Mukteshwar, Uttar Pradesh, 800 metres from the holy Ganga."
          />
        </div>
      </section>
      <section className="section-pad">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-8 text-muted-foreground">
            <p>
              Where conventional schooling often separates learning from living, Tattv Peeth makes them inseparable.
              Students engage directly with land, craft, physical discipline, and texts that have shaped Indian
              civilisation alongside rigorous contemporary academics.
            </p>
            <p>
              The campus is envisioned as a self-sustaining institution with organic farming, yoga, meditation, craft,
              Sanskrit study, modern science, and community service forming one integrated rhythm.
            </p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="eyebrow">Location</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold">Garh Mukteshwar, Hapur district, UP</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>800 metres from the holy Ganga</li>
              <li>Beside Mukteshwar Mahadev Temple</li>
              <li>Adjacent to Prachin Ganga Mandir on a sacred mound</li>
              <li>Connected to Bhagavata Purana, Skanda Purana, and Mahabharata traditions</li>
              <li>Annual Kartik Purnima Snan pilgrimage region</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
