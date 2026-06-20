"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { LOGO_URL, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/88 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between py-3">
        <Link href="/" className="-ml-2 flex items-center gap-3 md:-ml-4" onClick={() => setOpen(false)}>
          <svg width="44" height="44" viewBox="0 0 120 120" aria-hidden="true" className="h-[58px] w-[58px] md:h-[62px] md:w-[62px] shrink-0">
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
          <div className="leading-tight">
            <div className="font-serif text-xl font-semibold">Tattv Peeth</div>
            <div className="text-xs uppercase tracking-[0.18em] text-saffron">Gurukul</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground transition hover:text-saffron",
                pathname === item.href && "text-saffron",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm" className="border-border hover:bg-muted hover:text-saffron">
            <Link href="/login" className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>Login</span>
            </Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button asChild variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-saffron">
            <Link href="/login" aria-label="Admin Profile">
              <User className="h-[18px] w-[18px]" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container grid gap-1 py-4">
            {[
              ...NAV_ITEMS,
              { href: "/login", label: "Login" },
              { href: "/donate", label: "Donate" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground hover:bg-muted hover:text-saffron"
              >
                <span>{item.label}</span>
                {item.href === "/login" && <User className="h-4 w-4 text-saffron" />}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
