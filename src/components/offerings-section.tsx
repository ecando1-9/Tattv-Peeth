import Image from "next/image";
import Link from "next/link";

export function OfferingsSection() {
  return (
    <section
      className="border-b"
      style={{ borderColor: "var(--c-div)" }}
    >
      <div className="mx-auto max-w-[920px] px-8 py-14">
        <p
          className="mb-3 text-[11px] font-medium uppercase tracking-[0.14em]"
          style={{ color: "var(--c-ochre)" }}
        >
          Pancha Mahāyajña
        </p>
        <h2
          className="mb-4 font-serif text-[34px] font-medium leading-[1.2]"
          style={{ color: "var(--c-deep)" }}
        >
          The five offerings,{" "}
          <em className="italic" style={{ color: "var(--c-ochre)" }}>
            made real on the land
          </em>
        </h2>
        <p
          className="mb-7 max-w-[680px] text-[14px] font-light leading-[1.85]"
          style={{ color: "var(--c-muted)" }}
        >
          The śāstra prescribes five great offerings through which a
          householder sustains the world. At Tattv Peeth, each campus campaign
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

        <div className="mt-8 text-center">
          <Link
            href="/contribute"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.08em] transition-colors hover:text-saffron"
            style={{ color: "var(--c-ochre)" }}
          >
            Explore Active Campaigns &amp; Trace Offerings →
          </Link>
        </div>
      </div>
    </section>
  );
}
