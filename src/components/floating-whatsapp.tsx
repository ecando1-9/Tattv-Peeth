import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919350501133";
  return (
    <Link
      href={`https://wa.me/${number}`}
      target="_blank"
      className="fixed bottom-[80px] lg:bottom-5 right-5 z-50 inline-flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
