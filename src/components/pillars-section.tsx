import { pillars } from "@/lib/fallback-data";

export function PillarsSection() {
  return (
    <section className="border-b" style={{ borderColor: "var(--c-div)" }}>
      <div className="mx-auto max-w-[920px] px-8 py-14">
        <div className="mb-10 text-center">
          <p
            className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Four Pillars
          </p>
          <h2
            className="font-serif text-[34px] font-medium leading-[1.2]"
            style={{ color: "var(--c-deep)" }}
          >
            A complete education of body, mind,{" "}
            <em className="italic" style={{ color: "var(--c-ochre)" }}>
              character, and spirit
            </em>
          </h2>
          <p
            className="mx-auto mt-4 max-w-[580px] text-[14px] font-light leading-[1.85]"
            style={{ color: "var(--c-muted)" }}
          >
            The curriculum rests on four dimensions of development that together
            form a holistic Gurukul experience.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            return (
              <div
                key={pillar.title}
                className="rounded-sm border overflow-hidden flex flex-col"
                style={{
                  background: "var(--c-warm)",
                  borderColor: "var(--c-div)",
                }}
              >
                {/* Cover SVG Logo */}
                <div className="h-32 w-full flex items-center justify-center border-b p-4 bg-[#F7F2E7]" style={{ borderColor: "var(--c-div)" }}>
                  {pillar.title === "Śāstra" && (
                    <svg viewBox="0 0 64 56" aria-hidden="true" className="h-16 w-16">
                      <rect x="6" y="12" width="24" height="34" rx="2" fill="#F7F2E7" stroke="#5E1F1B" strokeWidth="1.6"/>
                      <rect x="34" y="12" width="24" height="34" rx="2" fill="#F7F2E7" stroke="#5E1F1B" strokeWidth="1.6"/>
                      <path d="M30,12 q2,-4 4,0 v34 q-2,-3 -4,0 Z" fill="#9C5A2C"/>
                      <line x1="11" y1="22" x2="26" y2="22" stroke="#9C5A2C" strokeWidth="1.6"/>
                      <line x1="11" y1="29" x2="26" y2="29" stroke="#9C5A2C" strokeWidth="1.6"/>
                      <line x1="11" y1="36" x2="22" y2="36" stroke="#9C5A2C" strokeWidth="1.6"/>
                      <line x1="38" y1="22" x2="53" y2="22" stroke="#9C5A2C" strokeWidth="1.6"/>
                      <line x1="38" y1="29" x2="53" y2="29" stroke="#9C5A2C" strokeWidth="1.6"/>
                      <line x1="38" y1="36" x2="49" y2="36" stroke="#9C5A2C" strokeWidth="1.6"/>
                    </svg>
                  )}
                  {pillar.title === "Sādhanā" && (
                    <svg viewBox="0 0 64 56" aria-hidden="true" className="h-16 w-16">
                      <ellipse cx="32" cy="42" rx="20" ry="8" fill="#9C5A2C"/>
                      <path d="M32,34 q8,-16 0,-26 q-8,10 0,26" fill="#F4D27A" stroke="#C9A24B" strokeWidth="1.4"/>
                      <path d="M32,28 q4,-7 0,-13 q-4,5 0,13" fill="#B07A1E"/>
                    </svg>
                  )}
                  {pillar.title === "Sevā" && (
                    <svg viewBox="0 0 64 56" aria-hidden="true" className="h-16 w-16">
                      <path d="M14,40 C12,30 16,24 24,24 L44,24 C52,24 54,30 52,40 L48,40 L48,32 L44,32 L44,40 L40,40 L40,30 L26,30 L26,40 L22,40 L22,32 L18,32 L18,40 Z" fill="#5E1F1B"/>
                      <path d="M44,24 C50,20 56,18 58,22 C56,26 50,28 46,28 Z" fill="#5E1F1B"/>
                      <path d="M52,18 q4,-2 6,2" fill="none" stroke="#5E1F1B" strokeWidth="2" strokeLinecap="round"/>
                      <circle cx="51" cy="24" r="1.6" fill="#F7F2E7"/>
                    </svg>
                  )}
                  {pillar.title === "Saṃskāra" && (
                    <svg viewBox="0 0 64 56" aria-hidden="true" className="h-16 w-16">
                      <path d="M22,48 C16,42 16,30 24,28 L40,28 C48,30 48,42 42,48 Z" fill="#9C5A2C"/>
                      <rect x="24" y="22" width="16" height="7" rx="1.5" fill="#B07A1E"/>
                      <circle cx="32" cy="15" r="6.5" fill="#F4D27A" stroke="#C9A24B" strokeWidth="1"/>
                      <path d="M25,22 C18,18 16,12 20,9 C22,14 26,18 30,20 Z" fill="#3B6D11"/>
                      <path d="M39,22 C46,18 48,12 44,9 C42,14 38,18 34,20 Z" fill="#3B6D11"/>
                    </svg>
                  )}
                </div>

                <div className="p-5 flex-1 flex flex-col justify-start">
                  {pillar.dev && (
                    <div
                      className="font-dev text-2xl font-medium mb-0.5"
                      style={{ color: "var(--c-ochre)" }}
                    >
                      {pillar.dev}
                    </div>
                  )}
                  <h3
                    className="font-serif text-lg font-medium"
                    style={{ color: "var(--c-deep)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em]"
                    style={{ color: "var(--c-ochre)" }}
                  >
                    {pillar.label}
                  </p>
                  <p
                    className="mt-3 text-[13px] font-light leading-[1.75]"
                    style={{ color: "var(--c-muted)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
