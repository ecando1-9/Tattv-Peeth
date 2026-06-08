import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(amount: number) {
  if (amount >= 10000000) return `Rs ${(amount / 10000000).toFixed(amount % 10000000 === 0 ? 0 : 1)} Cr`;
  if (amount >= 100000) return `Rs ${(amount / 100000).toFixed(amount % 100000 === 0 ? 0 : 1)}L`;
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount).replace("₹", "Rs ");
}

export function absoluteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return `${base}${path}`;
}
