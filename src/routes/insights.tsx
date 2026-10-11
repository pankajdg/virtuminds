import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Footer } from "@/components/site/Footer";
import { INTRODUCTORY_CONVERSATION_URL } from "@/lib/site";

const TITLE = "Insights — AI Governance for Boards | Virtuminds";
const DESC =
  "Short, board-level writing on AI governance — what directors should be asking, and what good answers look like.";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/insights" },
      { property: "og:image", content: "https://virtumindsadvisory.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://virtumindsadvisory.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const QUESTIONS = [
  ["What AI is actually running in our company right now — including the tools nobody approved?", "Shadow AI means the official inventory and the real footprint are two different things. You can't govern what you can't see."],
  ["Who approved each AI use case — and who can shut it down?", "Every AI deployment needs a named owner, a validator, and a kill switch. If no one can produce that map, accountability is theoretical."],
  ["What company data can reach external AI systems, and through which paths?", "Customer PII, IP, and code are one browser extension away from an external LLM. The question isn't whether data flows — it's whether anyone has mapped it."],
  ["What do our vendor contracts say about our data training their models?", "Most AI-enabled SaaS contracts are silent on data retention and model training. Silence is not protection."],
  ["When an AI system fails, what's the playbook — and has it been tested?", "AI fails differently from traditional software: silently, confidently, at scale. Incident response built for servers doesn't cover it."],
  ["How is AI's return being measured — and what's the cost of the AI nobody's tracking?", "Unsanctioned tools carry license costs, data risk, and zero oversight. The ROI conversation is incomplete without the shadow ledger."],
  ["Could we evidence our answers — to a regulator, an auditor, or a plaintiff?", "Assurance is what management tells you. Evidence is what you can produce. Boards need the second one."],
] as const;

function InsightsPage() {
  return (
    <main>
      <FloatingNav />
      <section className="bg-navy-deep pb-20 pt-40 text-navy-foreground">
        <div className="section-shell">
          <p className="eyebrow text-gold">Insights</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Insights for boards and executive teams
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">{DESC}</p>
        </div>
      </section>

      <section className="bg-background py-20">
        <article className="section-shell max-w-3xl">
          <div className="h-1 w-16 rounded-full bg-gold" />
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Questions every director should ask about AI
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Boards are being asked to oversee AI. Most can't answer these seven questions. If yours
            can't either, that's the starting point — not a failure.
          </p>
          <ol className="mt-12 space-y-10">
            {QUESTIONS.map(([q, a], i) => (
              <li key={i} className="flex gap-5">
                <span className="font-display text-2xl font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{q}</h3>
                  <p className="mt-2 text-muted-foreground">{a}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-14 rounded-xl border-l-4 border-gold bg-navy-deep p-8 text-navy-foreground">
            <p className="text-lg font-semibold">
              If these questions are hard to answer, that's normal — and it's fixable.
            </p>
            <a
              href={INTRODUCTORY_CONVERSATION_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              Start with a conversation
            </a>
          </div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
