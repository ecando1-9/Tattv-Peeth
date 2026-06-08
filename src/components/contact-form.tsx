"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    setStatus(response.ok ? "Thank you. We will contact you shortly." : "Please check the form and try again.");
    if (response.ok) event.currentTarget.reset();
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4" onSubmit={submit}>
          <Input name="name" placeholder="Full name" required />
          <Input name="email" type="email" placeholder="Email address" required />
          <Input name="phone" placeholder="Phone number" />
          <Textarea name="message" placeholder="How can we help?" required />
          <Button type="submit"><Send className="h-4 w-4" /> Send Message</Button>
          {status && <p className="text-sm text-muted-foreground">{status}</p>}
        </form>
      </CardContent>
    </Card>
  );
}
