import Image from "next/image";

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
                Tattv Peeth is a residential Gurukul rising on consecrated land
                near the holy Gaṅgā at Garh Mukteshwar — where Indian Knowledge
                Systems, contemporary academics, yoga, organic farming, and seva
                converge in one self-sustaining campus. It is built phase by
                phase, beginning with the earth itself.
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
                className="flex flex-col border-b border-r last:border-b-0 md:border-b-0 md:last:border-r-0 overflow-hidden"
                style={{
                  borderColor: "var(--c-div)",
                }}
              >
                {/* Cover Image */}
                <div className="relative h-24 w-full overflow-hidden border-b" style={{ borderColor: "var(--c-div)" }}>
                  <Image
                    src={y.image}
                    alt={y.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
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
