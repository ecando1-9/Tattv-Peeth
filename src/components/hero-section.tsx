import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { LOGO_URL, TAGLINE } from "@/lib/constants";
import { Button } from "./ui/button";
import { MotionReveal } from "./motion-reveal";

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
        alt="Sunlit green campus landscape"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2c1f0a]/86 via-[#5b161a]/64 to-[#d97706]/20" />
      <div className="container relative flex min-h-[calc(100vh-72px)] items-center py-16">
        <MotionReveal className="max-w-3xl text-white">
          <Image src={LOGO_URL} alt="Tattv Peeth Gurukul logo" width={96} height={96} className="mb-8 rounded-lg border border-white/25 object-cover shadow-soft" />
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-gold">{TAGLINE}</p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.02] md:text-7xl">Tattv Peeth Gurukul</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
            A residential Gurukul where ancient Indian Knowledge Systems, contemporary academics, yoga, organic
            farming, and community service converge in one living institution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-gold text-[#2c1f0a] hover:bg-saffron">
              <Link href="/donate"><HeartHandshake className="h-4 w-4" /> Support The Initiative</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/35 text-white hover:bg-white hover:text-[#2c1f0a]">
              <Link href="/about">Learn More <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
