"use client";

import { useState } from "react";
import { DonateModal } from "./campaign-tabs";

const LAMPS = [
  { name: "Saraswati R.", lit: true },
  { name: "Aarav S.", lit: true },
  { name: "Anonymous", lit: true },
  { name: "Rohan & family", lit: true },
  { name: "Devika M.", lit: true },
  { name: "K. Lakshmi", lit: true },
  { name: "Anonymous", lit: true },
  { name: "a lamp waits", lit: false },
  { name: "a lamp waits", lit: false },
  { name: "a lamp waits", lit: false },
  { name: "a lamp waits", lit: false },
  { name: "a lamp waits", lit: false },
];

export function AkhandaDeepa() {
  const [modal, setModal] = useState<{ project: string; yajna: string } | null>(null);

  return (
    <>
      <section
        id="akhanda-deepa"
        className="border-b"
        style={{ borderColor: "var(--c-div)" }}
      >
        <div className="mx-auto max-w-[920px] px-8 py-14">
          {/* Śilā-Lekha Banner */}
          <div className="shila-band mb-12">
            <p
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#C7A85A" }}
            >
              Śilā-Lekha · The Stone Inscription
            </p>
            <h2 className="font-serif text-[28px] font-medium leading-[1.2] text-[#F4ECDA] mb-4">
              We did not import transparency. <em className="italic" style={{ color: "#C7A85A" }}>We inherited it.</em>
            </h2>
            <div className="shila-quote">
              &ldquo;One perpetual lamp before the Lord: endowed with ninety-six ewes, that the ghee may never fail — the donor&apos;s name, the count of the flock, and the shepherd responsible, cut into the northern wall for whoever comes after.&rdquo;
            </div>
            <div className="shila-src">
              In the manner of the Bṛhadīśvara temple inscriptions, Thanjavur, c. 1010 CE
            </div>
            <div className="shila-cols">
              <p>
                For a thousand years and more, the walls of our great temples were open ledgers in stone. The inscriptions of Rājarāja Chola&apos;s Bṛhadīśvara record — donor by donor — who gave which cow, which lamp, which measure of gold, and for exactly what purpose. Endowments were not announced; they were engraved, audited, and answerable, generation after generation.
              </p>
              <p>
                The <strong style={{ color: "#F4ECDA" }}>puṇya-patra</strong> below is that stone, continued in light. An append-only trail, every offering named (or anonymous, by the giver&apos;s own choice), every rupee followed to its work, every work backed by its bill. This is not fintech borrowed from elsewhere. It is praśasti — the oldest accountability tradition on earth, returned to service.
              </p>
            </div>
          </div>

          {/* Akhaṇḍa-Dīpa Seva */}
          <div className="text-center">
            <p
              className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "var(--c-ochre)" }}
            >
              अखण्ड-दीप सेवा · The unbroken lamp
            </p>
            <h2
              className="mb-4 font-serif text-[34px] font-medium leading-[1.2]"
              style={{ color: "var(--c-deep)" }}
            >
              Keep one lamp of the Gurukul burning
            </h2>
            <p className="mx-auto mb-8 max-w-[680px] text-[14px] font-light leading-[1.85]" style={{ color: "var(--c-muted)" }}>
              In those same inscriptions, a perpetual lamp — nandā-viḷakku — was endowed with cows whose ghee kept it burning long after the giver was gone. A monthly seva is the same instrument in today&apos;s money: a small, steady offering that keeps one flame of the pīṭha alive — a cow&apos;s care, a student&apos;s day, a bed of cultivation. Your lamp burns on this wall for as long as your seva flows; pause it anytime, and it rests without judgement.
            </p>

            {/* Burning Lamps */}
            <div className="deepa-row">
              {LAMPS.map((lamp, i) => (
                <div key={i} className={`deepa ${lamp.lit ? "lit" : "dim"}`}>
                  <div className="bowl">
                    {lamp.lit && <div className="deepa-flame" />}
                  </div>
                  <div className="dname">
                    {lamp.name}
                  </div>
                </div>
              ))}
            </div>

            <p className="deepa-note mb-8">
              Seven lamps burn today. Each is one person&apos;s nitya-seva, named or anonymous as they chose. When the goshala opens, the first lamps will carry the names of the cows they sustain.
            </p>

            <button
              onClick={() => setModal({ project: "Akhaṇḍa-Dīpa (Monthly Seva)", yajna: "Unbroken Lamp Seva" })}
              className="rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] bg-[var(--c-deep)] text-[var(--c-cream)] hover:bg-[var(--c-ochre)] transition-colors inline-block"
            >
              Light a lamp — begin monthly seva
            </button>
          </div>
        </div>
      </section>

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
