"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Compass, CalendarDays, HeartHandshake, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Campaigns",
      href: "/contribute",
      icon: Flame,
    },
    {
      label: "Timeline",
      href: "/timeline",
      icon: CalendarDays,
    },
    {
      label: "Vision",
      href: "/vision-mission",
      icon: Compass,
    },
    {
      label: "Donate",
      href: "/donate",
      icon: HeartHandshake,
    },
    {
      label: "Login",
      href: "/login",
      icon: User,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block border-t bg-background/95 pb-safe backdrop-blur-md lg:hidden" style={{ borderColor: "var(--c-div)" }}>
      <nav className="flex h-[64px] items-center justify-around px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 w-16 h-full text-[10px] font-medium uppercase tracking-[0.05em] transition-colors",
                isActive ? "text-[var(--c-ochre)]" : "text-[var(--c-muted)]"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
