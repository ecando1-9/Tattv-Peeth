import Image from "next/image";
import Link from "next/link";
import { LOGO_URL, TAGLINE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Background */}
      <Image
        src="/hero_banner.jpg"
        alt="Sacred river Ganga at sunrise near Garh Mukteshwar campus"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay — darker for perfect text contrast with soft backdrop blur */}
      <div className="absolute inset-0 bg-[#2C1F0A]/75 backdrop-blur-[1.5px]" />

      <div className="container relative flex min-h-[calc(100vh-72px)] items-center py-16">
        <div className="max-w-3xl text-white">
          {/* Logo */}
          <Image
            src={LOGO_URL}
            alt="Tattv Peeth Emblem"
            width={80}
            height={80}
            className="mb-8 h-20 w-20 rounded-full object-cover shrink-0"
            style={{ filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.35))" }}
          />

          {/* Eyebrow */}
          <p
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{ color: "#C7A85A" }}
          >
            {TAGLINE}
          </p>

          {/* Headline */}
          <h1 className="font-serif text-5xl font-semibold leading-[1.05] md:text-7xl">
            Tattv Peeth{" "}
            <em className="italic" style={{ color: "#C7A85A" }}>
              Gurukul
            </em>
          </h1>

          <p className="mt-6 max-w-2xl text-base font-light leading-[1.9] text-white/80">
            A residential Gurukul where the Bhāratīya knowledge tradition,
            rigorous contemporary study, yoga, natural farming, and sevā meet
            in one self-sustaining campus on the bank of the Gaṅgā at Garh Mukteśvara.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] transition-colors"
              style={{ background: "#C7A85A", color: "#2C1F0A" }}
            >
              Support the Initiative
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-sm border px-6 py-3 text-xs font-medium uppercase tracking-[0.08em] text-white/90 transition-colors hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
