"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
          <Image src={LOGO_URL} alt="Tattv Peeth logo" width={62} height={62} className="h-[58px] w-[58px] rounded-md border object-cover md:h-[62px] md:w-[62px]" priority />
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
          <Button asChild size="sm">
            <Link href="/donate">Donate</Link>
          </Button>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {open && (
        <div className="border-t bg-background lg:hidden">
          <nav className="container grid gap-1 py-4">
            {[...NAV_ITEMS, { href: "/donate", label: "Donate" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground hover:bg-muted hover:text-saffron"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
