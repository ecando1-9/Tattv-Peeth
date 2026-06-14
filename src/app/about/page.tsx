import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About Tattv Peeth Gurukul Foundation — a sacred seat for truth, learning, discipline, and service on the banks of the Gaṅgā.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            About Us
          </p>
          <h1
            className="mb-5 font-serif text-[42px] font-medium leading-[1.1]"
            style={{ color: "var(--c-deep)" }}
          >
            A sacred seat for truth, learning,{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              discipline, and service
            </em>
          </h1>
          <p
            className="max-w-[620px] text-[14px] font-light leading-[1.85]"
            style={{ color: "var(--c-muted)" }}
          >
            Tattv Peeth is a residential Gurukul being built on sacred land in
            Garh Mukteshwar, Uttar Pradesh, 800 metres from the holy Gaṅgā.
          </p>
        </div>
      </section>

      {/* Body + Location */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div
              className="space-y-5 text-[14px] font-light leading-[1.85]"
              style={{ color: "var(--c-muted)" }}
            >
              <p>
                Where conventional schooling often separates learning from
                living, Tattv Peeth makes them inseparable. Students engage
                directly with land, craft, physical discipline, and texts that
                have shaped Indian civilisation — alongside rigorous
                contemporary academics.
              </p>
              <p>
                The campus is envisioned as a self-sustaining institution with
                organic farming, yoga, meditation, craft, Sanskrit study, modern
                science, and community service forming one integrated rhythm.
              </p>
              <p>
                Tattv Peeth is built on the belief that real education is
                inseparable from real life — that the Gurukul, not the
                classroom, is the correct unit of learning.
              </p>
            </div>

            {/* Location card */}
            <div
              className="rounded-sm border p-6"
              style={{ background: "var(--c-warm)", borderColor: "var(--c-div)" }}
            >
              <p
                className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{ color: "var(--c-ochre)" }}
              >
                Location
              </p>
              <h2
                className="mb-5 font-serif text-2xl font-medium"
                style={{ color: "var(--c-deep)" }}
              >
                Garh Mukteshwar, Hapur district, UP
              </h2>
              <ul className="space-y-3">
                {[
                  "800 metres from the holy Gaṅgā",
                  "Beside Mukteshwar Mahadev Temple",
                  "Adjacent to Prācīn Gaṅgā Mandir on a sacred mound",
                  "Connected to Bhāgavata Purāṇa, Skanda Purāṇa, and Mahābhārata traditions",
                  "Annual Kārtik Pūrṇimā Snān pilgrimage region",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2 text-[13px] font-light leading-[1.7]"
                    style={{ color: "var(--c-mid)" }}
                  >
                    <span
                      className="mt-[6px] inline-block h-[5px] w-[5px] shrink-0 rounded-full"
                      style={{ background: "var(--c-ochre)" }}
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation note */}
      <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <div className="shila-band">
            <p
              className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#C7A85A" }}
            >
              The founding declaration
            </p>
            <h2
              className="mb-4 font-serif text-[28px] font-medium leading-[1.2]"
              style={{ color: "#F4ECDA" }}
            >
              Built in the open, on sacred ground
            </h2>
            <p
              className="max-w-[640px] text-[14px] font-light leading-[1.85]"
              style={{ color: "#DDD2B8" }}
            >
              Every rupee that enters Tattv Peeth is documented, traced, and
              returned to the earth in some form — a building, a tree, a
              classroom, a cow. Nothing disappears into administration. The
              Gurukul is not a product. It is a living offering, built one act
              of transparency at a time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
