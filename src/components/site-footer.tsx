import Link from "next/link";
import { NAV_ITEMS, SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer style={{ borderTop: "0.5px solid var(--c-div)" }}>
      <div
        className="mx-auto grid max-w-[920px] gap-10 px-8 py-12 md:grid-cols-[1.4fr_1fr_1fr]"
      >
        {/* Brand */}
        <div>
          <div
            className="font-serif text-xl font-semibold"
            style={{ color: "var(--c-deep)" }}
          >
            {SITE_NAME}
          </div>
          <p
            className="mt-4 max-w-xs text-[13px] font-light leading-[1.8]"
            style={{ color: "var(--c-muted)" }}
          >
            A residential Gurukul in Garh Mukteshwar integrating Indian
            Knowledge Systems, contemporary academics, yoga, organic farming,
            and community service.
          </p>
          <div className="mt-5 flex gap-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-sm border text-[13px] transition-colors"
              style={{ borderColor: "var(--c-div)", color: "var(--c-muted)" }}
            >
              f
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-sm border text-[13px] transition-colors"
              style={{ borderColor: "var(--c-div)", color: "var(--c-muted)" }}
            >
              ig
            </Link>
          </div>
        </div>

        {/* Explore */}
        <div>
          <div
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Explore
          </div>
          <div className="grid gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-light transition-colors"
                style={{ color: "var(--c-muted)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div
            className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em]"
            style={{ color: "var(--c-ochre)" }}
          >
            Contact
          </div>
          <div
            className="space-y-3 text-[13px] font-light leading-[1.7]"
            style={{ color: "var(--c-muted)" }}
          >
            <p>Garh Mukteshwar, Hapur district, Uttar Pradesh</p>
            <p>+91 93505 01133</p>
            <p>info@tattvpeeth.org</p>
            <p className="text-[11px]">CIN: U85420DL2026NPL466818</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto flex max-w-[920px] items-center justify-between px-8 py-5"
        style={{ borderTop: "0.5px solid var(--c-div)" }}
      >
        <div className="flex flex-col gap-1.5 items-start">
          <span
            className="font-serif text-base font-medium"
            style={{ color: "var(--c-deep)" }}
          >
            Tattv Peeth <em className="italic" style={{ color: "var(--c-ochre)" }}>Gurukul</em>
          </span>
          <Link
            href="/login"
            className="text-[10.5px] font-light uppercase tracking-[0.06em] hover:text-[var(--c-ochre)] transition-colors"
            style={{ color: "var(--c-muted)" }}
          >
            Admin Portal →
          </Link>
        </div>
        <span
          className="text-right text-[11px] font-light leading-[1.8]"
          style={{ color: "var(--c-muted)" }}
        >
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          <br />
          80G eligible · FCRA registered
        </span>
      </div>
    </footer>
  );
}
