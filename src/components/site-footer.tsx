import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t bg-card">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="font-serif text-2xl font-semibold">{SITE_NAME}</div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            A residential Gurukul in Garh Mukteshwar integrating Indian Knowledge Systems, contemporary academics,
            yoga, organic farming, and community service.
          </p>
          <div className="mt-5 flex gap-3">
            <Link className="rounded-md border p-2 text-muted-foreground hover:text-saffron" href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link className="rounded-md border p-2 text-muted-foreground hover:text-saffron" href="#" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-saffron">Explore</div>
          <div className="grid gap-2">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-saffron">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-saffron">Contact</div>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="flex gap-3"><MapPin className="mt-1 h-4 w-4 text-gold" /> Garh Mukteshwar, Hapur district, Uttar Pradesh</p>
            <p className="flex gap-3"><Phone className="h-4 w-4 text-gold" /> +91 93505 01133</p>
            <p className="flex gap-3"><Mail className="h-4 w-4 text-gold" /> info@tattvpeeth.org</p>
            <p>CIN: U85420DL2026NPL466818</p>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
