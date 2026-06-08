import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient, createSupabaseServerClient } from "@/lib/supabase/server";

const schema = z.object({
  amount_raised: z.coerce.number().nonnegative(),
  target_amount: z.coerce.number().positive(),
  total_supporters: z.coerce.number().int().nonnegative(),
});

async function hasAdminAccess() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return false;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  const { data } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  return data?.role === "admin" || data?.role === "content_manager";
}

export async function POST(request: Request) {
  if (!(await hasAdminAccess())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const supabase = createSupabaseAdminClient();
  if (!supabase) return NextResponse.json({ error: "Service role key missing" }, { status: 500 });

  const rows = Object.entries(parsed.data).map(([key, value]) => ({ key, value: String(value) }));
  const { error } = await supabase.from("site_settings").upsert(rows, { onConflict: "key" });
  return error ? NextResponse.json({ error: error.message }, { status: 500 }) : NextResponse.json({ ok: true });
}
