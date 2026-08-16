import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { CONTACT_EMAIL } from "@/lib/site";

const empty: ContactInput = { firstName: "", lastName: "", email: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactInput, string>>>({});
  const [sending, setSending] = useState(false);

  const set = (key: keyof ContactInput) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof ContactInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        toast.error(data.error ?? "Something went wrong. Please try again.");
        return;
      }
      toast.success("Message sent. I'll get back to you shortly.");
      setValues(empty);
    } catch {
      toast.error("Network error. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="bg-secondary/50 py-16 lg:py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Start a conversation</h2>
          <p className="mt-5 max-w-md text-muted-foreground">
            Share the decision you're working through — governance, compliance, cloud, AI risk, or
            due diligence — and I'll respond personally.
          </p>
          <p className="mt-6 text-sm text-muted-foreground">
            Prefer email?{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-foreground underline">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                maxLength={100}
                value={values.firstName}
                onChange={(e) => set("firstName")(e.target.value)}
                className="mt-2"
              />
              {errors.firstName && (
                <p className="mt-1.5 text-xs text-destructive">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                maxLength={100}
                value={values.lastName}
                onChange={(e) => set("lastName")(e.target.value)}
                className="mt-2"
              />
              {errors.lastName && (
                <p className="mt-1.5 text-xs text-destructive">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={255}
              value={values.email}
              onChange={(e) => set("email")(e.target.value)}
              className="mt-2"
            />
            {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
          </div>

          <div className="mt-5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={6}
              maxLength={2000}
              value={values.message}
              onChange={(e) => set("message")(e.target.value)}
              className="mt-2 resize-y"
            />
            {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="mt-6 w-full rounded-md bg-gold px-6 py-3 text-base font-semibold text-gold-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
