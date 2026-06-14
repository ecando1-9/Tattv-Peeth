import type { Metadata } from "next";
import { Cormorant_Garamond, Jost, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { BottomNav } from "@/components/bottom-nav";
import { ThemeProvider } from "@/components/theme-provider";
import { SITE_NAME, TAGLINE } from "@/lib/constants";
import { absoluteUrl } from "@/lib/utils";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["300", "400", "500", "600", "700"],
});

const devanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: `${SITE_NAME} | ${TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "A premium spiritual and educational NGO website for Tattv Peeth Gurukul Foundation.",
  openGraph: {
    title: SITE_NAME,
    description: TAGLINE,
    url: absoluteUrl(),
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: TAGLINE,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${cormorant.variable} ${jost.variable} ${devanagari.variable} font-sans`}>
        <ThemeProvider>
          <SiteHeader />
          <main className="pb-[64px] lg:pb-0">{children}</main>
          <SiteFooter />
          <BottomNav />
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}
