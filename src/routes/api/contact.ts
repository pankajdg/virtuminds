import { createFileRoute } from "@tanstack/react-router";
import { contactSchema } from "@/lib/contact-schema";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const hits = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const ip =
          request.headers.get("cf-connecting-ip") ??
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
          "unknown";

        if (isRateLimited(ip)) {
          return Response.json(
            { error: "Too many messages. Please try again in a minute." },
            { status: 429 },
          );
        }

        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid request." }, { status: 400 });
        }

        const parsed = contactSchema.safeParse(payload);
        if (!parsed.success) {
          return Response.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid submission." },
            { status: 400 },
          );
        }

        const { firstName, lastName, email, message } = parsed.data;

        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
        const { error } = await supabaseAdmin.from("contact_submissions").insert({
          first_name: firstName,
          last_name: lastName,
          email,
          message,
        });

        if (error) {
          console.error("contact submission insert failed", error.message);
          return Response.json(
            { error: "Something went wrong. Please email us directly." },
            { status: 500 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});
