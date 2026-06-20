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
          <svg width="80" height="80" viewBox="0 0 120 120" aria-hidden="true" className="mb-8 h-20 w-20 shrink-0" style={{ filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.35))" }}>
            <circle cx="60" cy="60" r="56" fill="#F7F2E7" stroke="#5E1F1B" strokeWidth="3"/>
            <path d="M34,84 q9,-5 18,0 t18,0 t18,0" fill="none" stroke="#33576B" strokeWidth="2.4" strokeLinecap="round"/>
            <path d="M34,92 q9,-5 18,0 t18,0 t18,0" fill="none" stroke="#33576B" strokeWidth="2.4" strokeLinecap="round"/>
            <g transform="translate(60,80)">
              <path d="M0,0 C -7,-11 -6,-19 0,-26 C 6,-19 7,-11 0,0 Z" fill="#B07A1E" stroke="#5E1F1B" strokeWidth="0.8" transform="rotate(-32)"/>
              <path d="M0,0 C -7,-11 -6,-19 0,-26 C 6,-19 7,-11 0,0 Z" fill="#B07A1E" stroke="#5E1F1B" strokeWidth="0.8" transform="rotate(0)"/>
              <path d="M0,0 C -7,-11 -6,-19 0,-26 C 6,-19 7,-11 0,0 Z" fill="#B07A1E" stroke="#5E1F1B" strokeWidth="0.8" transform="rotate(32)"/>
            </g>
            <rect x="57.5" y="52" width="5" height="28" fill="#6B3F18"/>
            <g transform="translate(60,54)">
              <path d="M0,0 C -3,-4 -7,-6 -8,-14 C -9,-22 -4,-27 0,-32 C 4,-27 9,-22 8,-14 C 7,-6 3,-4 0,0 Z" fill="#3B6D11" stroke="#234A0B" strokeWidth="0.6" transform="rotate(-50)"/>
              <path d="M0,0 C -3,-4 -7,-6 -8,-14 C -9,-22 -4,-27 0,-32 C 4,-27 9,-22 8,-14 C 7,-6 3,-4 0,0 Z" fill="#3B6D11" stroke="#234A0B" strokeWidth="0.6" transform="rotate(-25)"/>
              <path d="M0,0 C -3,-4 -7,-6 -8,-14 C -9,-22 -4,-27 0,-32 C 4,-27 9,-22 8,-14 C 7,-6 3,-4 0,0 Z" fill="#3B6D11" stroke="#234A0B" strokeWidth="0.6" transform="rotate(0)"/>
              <path d="M0,0 C -3,-4 -7,-6 -8,-14 C -9,-22 -4,-27 0,-32 C 4,-27 9,-22 8,-14 C 7,-6 3,-4 0,0 Z" fill="#3B6D11" stroke="#234A0B" strokeWidth="0.6" transform="rotate(25)"/>
              <path d="M0,0 C -3,-4 -7,-6 -8,-14 C -9,-22 -4,-27 0,-32 C 4,-27 9,-22 8,-14 C 7,-6 3,-4 0,0 Z" fill="#3B6D11" stroke="#234A0B" strokeWidth="0.6" transform="rotate(50)"/>
            </g>
          </svg>

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
