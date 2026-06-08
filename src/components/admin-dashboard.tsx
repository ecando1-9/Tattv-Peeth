"use client";

import { useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export function AdminDashboard() {
  const supabase = createSupabaseBrowserClient();
  const [status, setStatus] = useState<string | null>(supabase ? null : "Admin access is not available yet.");

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!supabase) return;
    const formData = new FormData(event.currentTarget);
    const { error } = await supabase.auth.signInWithPassword({
      email: String(formData.get("email")),
      password: String(formData.get("password")),
    });
    setStatus(error ? error.message : "Signed in. Refreshing dashboard...");
    if (!error) window.location.reload();
  }

  async function saveStats(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    setStatus(response.ok ? "Donation statistics updated." : "Unable to update these details right now.");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card>
        <CardHeader><CardTitle>Admin Sign In</CardTitle></CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={signIn}>
            <Input name="email" type="email" placeholder="Admin email" required />
            <Input name="password" type="password" placeholder="Password" required />
            <Button type="submit">Sign In</Button>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader><CardTitle>Donation Statistics</CardTitle></CardHeader>
        <CardContent>
          <form className="grid gap-4" onSubmit={saveStats}>
            <Input name="amount_raised" type="number" placeholder="Amount raised" required />
            <Input name="target_amount" type="number" placeholder="Target amount" required />
            <Input name="total_supporters" type="number" placeholder="Total supporters" required />
            <Button type="submit">Update Statistics</Button>
          </form>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader><CardTitle>Content Management</CardTitle></CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {["Blog Updates", "Gallery", "Testimonials", "Timeline", "Contact Details", "Donation Progress"].map((item) => (
              <div key={item} className="rounded-lg border bg-muted p-5">
                <div className="font-serif text-xl font-semibold">{item}</div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">Manage and publish foundation content.</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {status && <p className="text-sm font-medium text-saffron lg:col-span-2">{status}</p>}
    </div>
  );
}
