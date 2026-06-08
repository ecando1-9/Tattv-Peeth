import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  amount: z.coerce.number().positive(),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid donation data" }, { status: 400 });

  const supabase = createSupabaseAdminClient();
  if (supabase) {
    await supabase.from("donations").insert({
      donor_name: parsed.data.name,
      donor_email: parsed.data.email,
      donor_phone: parsed.data.phone,
      amount: parsed.data.amount,
      status: "intent",
      provider: "razorpay_future",
    });
  }

  return NextResponse.json({
    ok: true,
    provider: "razorpay_future",
    message: "Thank you for your support. Our team will contact you shortly with contribution details.",
  });
}
