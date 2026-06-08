import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid form data" }, { status: 400 });

  const supabase = createSupabaseAdminClient();
  if (supabase) {
    await supabase.from("contact_messages").insert(parsed.data);
  }

  return NextResponse.json({ ok: true });
}
