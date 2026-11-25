import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Footer } from "@/components/site/Footer";
import { INTRODUCTORY_CONVERSATION_URL, LINKEDIN_URL } from "@/lib/site";

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
      { property: "og:url", content: "https://virtumindsadvisory.com/insights" },
      { property: "og:image", content: "https://virtumindsadvisory.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://virtumindsadvisory.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://virtumindsadvisory.com/insights" }],
  }),
  component: InsightsPage,
});

const BRIEFS = [
  {
    date: "November 20, 2026",
    title: "The patch gap is the threat actor's window",
    paragraphs: [
      "Microsoft's 2026 exposure data shows the median time to patch a vulnerability is about two weeks on Windows workstations — but more than a month on Windows servers, 10+ weeks on Linux servers and macOS apps, and beyond a year on network appliances.",
      "Microsoft's own reading: \u201CThat gap is the threat actor's window, widest on the critical systems that stay exposed the longest.\u201D A board report that blends everything into one patch-compliance number hides exactly that. Ask for time to mitigate by asset tier, not a single compliance figure.",
      "One caveat: these are Microsoft's own numbers, and Microsoft sells the tools that produce them. Your numbers will differ — the pattern is what matters.",
    ],
    source: {
      text: "Microsoft Security Blog, November 2, 2026",
      href: "https://www.microsoft.com/en-us/security/blog/2026/11/02/exploited-vulnerabilities-common-data-driven-analysis-real-world-attacks",
    },
    extra: {
      text: "Five Board Metrics That Measure Exposure, Not Activity (LinkedIn article)",
      href: "https://lnkd.in/p/g8ewtjMp",
    },
  },
  {
    date: "November 19, 2026",
    title: "One breach became the pretext for the next",
    paragraphs: [
      "Google and Mandiant's case study of the Russian state-sponsored group COLD RELIC is a third-party risk story, not just an identity one. In late 2025 the group broke into a U.S. organization's Google Workspace with a Super Admin's stolen credentials, then sent MFA prompts until someone approved one. It took the organization's cloud files and staff directory.",
      "Months later it used that material to pose as an employee of the first organization and approach a second one, through a secure messaging app. Neither breach needed malware. Credentials, an MFA prompt someone finally approved, and the first victim's own staff directory did the work.",
      "Three questions for your next board meeting: can anyone with admin access approve a sign-in with one tap on a prompt? After an incident, do we remove every attacker-added device and passkey, or just reset passwords? And if our staff directory leaked, would our partners hear it from us first?",
    ],
    source: {
      text: "Google Cloud Blog — COLD RELIC: A Case Study in Impersonation and Compromise",
      href: "https://cloud.google.com/blog/topics/threat-intelligence/cold-relic-a-case-study-in-impersonation-and-compromise",
    },
  },
] as const;

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

      <section id="briefs" className="bg-background py-20">
        <div className="section-shell max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Briefs</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Short, dated notes on what just happened and what it means for a board.
          </p>
          <div className="mt-10 space-y-12">
            {BRIEFS.map((brief) => (
              <article key={brief.title}>
                <div className="h-1 w-16 rounded-full bg-gold" />
                <h3 className="mt-6 text-2xl font-bold">{brief.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  By Pankaj Gupta · {brief.date}
                </p>
                {brief.paragraphs.map((p, i) => (
                  <p key={i} className="mt-4 leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                <p className="mt-4 text-sm text-muted-foreground">
                  Source:{" "}
                  <a
                    href={brief.source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-gold"
                  >
                    {brief.source.text}
                  </a>
                  {"extra" in brief && brief.extra ? (
                    <>
                      {" · "}
                      <a
                        href={brief.extra.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-2 hover:text-gold"
                      >
                        {brief.extra.text}
                      </a>
                    </>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-20">
        <article className="section-shell max-w-3xl">
          <div className="h-1 w-16 rounded-full bg-gold" />
          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Questions every director should ask about AI
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            By Pankaj Gupta · October 2026
          </p>
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
