// Static sections: "Why we do this" + "What your offering becomes"
export function YajnaOverview() {
  return (
    <>
      {/* ===== WHY WE DO THIS ===== */}
      <section
        className="border-b"
        style={{ borderColor: "var(--c-div)" }}
      >
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Why we do this
          </p>
          <h2
            className="mb-6 font-serif text-[34px] font-medium leading-[1.2]"
            style={{ color: "var(--c-deep)" }}
          >
            A living institution, built{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              in the open
            </em>
          </h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div
              className="rounded-sm border p-7"
              style={{
                background: "var(--c-warm)",
                borderColor: "var(--c-div)",
              }}
            >
              <h3
                className="mb-2 font-serif text-xl font-medium"
                style={{ color: "var(--c-deep)" }}
              >
                The purpose
              </h3>
              <p
                className="text-[13px] font-light leading-[1.8]"
                style={{ color: "var(--c-muted)" }}
              >
                Tattv Peeth is a residential Gurukul where the Bhāratīya knowledge
                tradition, rigorous contemporary study, yoga, natural farming, and
                sevā meet in one self-sustaining campus on the bank of the Gaṅgā at
                Garh Mukteśvara. It is built phase by phase, beginning with the earth
                itself.
              </p>
            </div>
            <div
              className="rounded-sm border p-7"
              style={{
                background: "var(--c-warm)",
                borderColor: "var(--c-div)",
              }}
            >
              <h3
                className="mb-2 font-serif text-xl font-medium"
                style={{ color: "var(--c-deep)" }}
              >
                The promise
              </h3>
              <p
                className="text-[13px] font-light leading-[1.8]"
                style={{ color: "var(--c-muted)" }}
              >
                Most campaigns tell you what was raised. Few tell you where your
                specific contribution went. We do both. Every offering —
                whether ₹101 or ₹1,01,000 — is traced, rupee by rupee, to the
                exact work it funded, backed by the bill and the photograph of
                that work. Transparency is not a feature here. It is the
                discipline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT YOUR OFFERING BECOMES ===== */}
      <section
        className="border-b"
        style={{ borderColor: "var(--c-div)" }}
      >
        <div className="mx-auto max-w-[920px] px-8 py-14">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            What your offering becomes
          </p>
          <h2
            className="mb-4 font-serif text-[34px] font-medium leading-[1.2]"
            style={{ color: "var(--c-deep)" }}
          >
            The five offerings, made real on the land
          </h2>
          <p
            className="mb-7 max-w-[680px] text-[14px] font-light leading-[1.85]"
            style={{ color: "var(--c-muted)" }}
          >
            The śāstra prescribes five great offerings through which a
            householder sustains the world. At Tattv Peeth, each campaign
            belongs to one of them. Choose the offering that speaks to you —
            every one is a way of keeping the whole in balance.
          </p>

          {/* Yajna rail */}
          <div
            className="grid grid-cols-2 md:grid-cols-5 overflow-hidden rounded-sm border"
            style={{
              borderColor: "var(--c-div)",
            }}
          >
            {[
              { dev: "ब्रह्म", name: "Brahma", en: "The seat of learning · land", image: "/brahma.png" },
              { dev: "मनुष्य", name: "Manuṣya", en: "Sharing food · sustenance", image: "/manusya.png" },
              { dev: "भूत", name: "Bhūta", en: "Serving beings · earth, water", image: "/bhuta.png" },
              { dev: "पितृ", name: "Pitṛ", en: "Honouring ancestors · go-seva", image: "/pitru.png" },
              { dev: "देव", name: "Deva", en: "Worship · consecration (coming)", image: "/deva.png" },
            ].map((y, i) => (
              <div
                key={y.name}
                className={`flex flex-col overflow-hidden ${
                  i === 4 ? "col-span-2" : "col-span-1"
                } ${
                  i % 2 === 0 && i !== 4 ? "border-r" : "border-r-0"
                } ${
                  i < 4 ? "border-b" : "border-b-0"
                } md:col-span-1 ${
                  i !== 4 ? "md:border-r" : "md:border-r-0"
                } md:border-b-0`}
                style={{
                  borderColor: "var(--c-div)",
                }}
              >
                {/* Cover SVG instead of Image */}
                <div className="h-24 w-full flex items-center justify-center border-b p-3 bg-[#F7F2E7]" style={{ borderColor: "var(--c-div)" }}>
                  {y.name === "Brahma" && (
                    <svg viewBox="0 0 56 56" aria-hidden="true" className="h-12 w-12 text-primary">
                      <rect x="14" y="12" width="28" height="20" rx="2" fill="#F7F2E7" stroke="#5E1F1B" strokeWidth="1.6"/>
                      <line x1="20" y1="20" x2="36" y2="20" stroke="#9C5A2C" strokeWidth="1.6"/>
                      <line x1="20" y1="26" x2="32" y2="26" stroke="#9C5A2C" strokeWidth="1.6"/>
                      <path d="M28,12 v20" stroke="#5E1F1B" strokeWidth="0.8" opacity="0.5"/>
                      <line x1="16" y1="40" x2="40" y2="40" stroke="#9C5A2C" strokeWidth="2.4" strokeLinecap="round"/>
                    </svg>
                  )}
                  {y.name === "Deva" && (
                    <svg viewBox="0 0 56 56" aria-hidden="true" className="h-12 w-12">
                      <path d="M16,42 L40,42 L36,30 L20,30 Z" fill="#9C5A2C"/>
                      <path d="M28,30 q-7,-12 0,-20 q7,8 0,20" fill="#F4D27A" stroke="#C9A24B" strokeWidth="1.2"/>
                      <path d="M28,24 q-3,-6 0,-10 q3,4 0,10" fill="#E07B2C"/>
                    </svg>
                  )}
                  {y.name === "Pitṛ" && (
                    <svg viewBox="0 0 56 56" aria-hidden="true" className="h-12 w-12">
                      <circle cx="28" cy="22" r="11" fill="none" stroke="#5E1F1B" strokeWidth="2"/>
                      <path d="M28,33 v12 M20,45 h16" stroke="#5E1F1B" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      <circle cx="28" cy="22" r="3" fill="#C9A24B"/>
                    </svg>
                  )}
                  {y.name === "Bhūta" && (
                    <svg viewBox="0 0 56 56" aria-hidden="true" className="h-12 w-12">
                      <g fill="none" stroke="#33576B" strokeWidth="2.6" strokeLinecap="round">
                        <path d="M12,26 q8,-6 16,0 t16,0"/>
                        <path d="M12,34 q8,-6 16,0 t16,0"/>
                        <path d="M12,42 q8,-6 16,0 t16,0"/>
                      </g>
                    </svg>
                  )}
                  {y.name === "Manuṣya" && (
                    <svg viewBox="0 0 56 56" aria-hidden="true" className="h-12 w-12">
                      <path d="M14,40 q14,-10 28,0" fill="none" stroke="#9C5A2C" strokeWidth="2.4" strokeLinecap="round"/>
                      <circle cx="28" cy="22" r="6" fill="#F4D27A" stroke="#C9A24B" strokeWidth="1"/>
                      <path d="M22,30 q6,5 12,0" fill="#B07A1E"/>
                    </svg>
                  )}
                </div>

                <div className="px-4 py-5 text-center flex-1 flex flex-col justify-center">
                  <p
                    className="font-dev mb-1 text-base"
                    style={{ color: "var(--c-ochre)" }}
                  >
                    {y.dev}
                  </p>
                  <p
                    className="mb-1 font-serif text-[15px] font-semibold"
                    style={{ color: "var(--c-deep)" }}
                  >
                    {y.name}
                  </p>
                  <p
                    className="text-[10px] font-normal uppercase leading-[1.3] tracking-[0.08em]"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {y.en}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
