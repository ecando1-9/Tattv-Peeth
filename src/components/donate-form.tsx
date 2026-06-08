"use client";

import { useState } from "react";
import { HeartHandshake } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

export function DonateForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Recording donation intent...");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const result = await response.json();
    setStatus(result.message || "Donation intent saved. Payment integration will be enabled later.");
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Donate Now</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={submit}>
          <Input name="name" placeholder="Full name" required />
          <Input name="email" type="email" placeholder="Email address" required />
          <Input name="phone" placeholder="Phone number" />
          <Input name="amount" type="number" min="1" placeholder="Donation amount in INR" required />
          <Button type="submit" size="lg"><HeartHandshake className="h-4 w-4" /> Donate Now</Button>
          <p className="text-xs leading-6 text-muted-foreground">
            Our team will contact you with contribution details and receipt information.
          </p>
          {status && <p className="text-sm font-medium text-saffron">{status}</p>}
        </form>
      </CardContent>
    </Card>
  );
}
