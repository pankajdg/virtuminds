import { ClipboardCheck, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "AI Governance Readiness Briefing",
    rows: [
      {
        label: "For",
        text: "Mid-market companies (roughly 250-5,000 employees) with an independent board, and PE-backed portfolio companies.",
      },
      {
        label: "Format",
        text: "A short questionnaire (about 10 questions, best completed by your CIO, CISO or general counsel) and a request for the documents you have, such as your AI policy, a list of AI-enabled vendors and your incident playbook. Then one 90-minute working session with your board or executive team. If you don’t have some of those documents, that’s a finding too, so don’t wait to get them in order first.",
      },
      {
        label: "You get",
        text: "A one-page AI exposure map. Every finding is marked confirmed, inferred or unknown, and the map reflects the answers and documents you provide, not technical testing. It comes with three prioritized next steps.",
      },
      { label: "Fee", text: "Starting at $3,000, fixed once scoped." },
    ],
  },
  {
    icon: Users,
    title: "Board & Executive Advisory",
    rows: [
      {
        label: "For",
        text: "Leadership teams making ongoing AI decisions, typically after a Readiness Briefing.",
      },
      {
        label: "Format",
        text: "A monthly retainer with a quarterly board touchpoint included.",
      },
      {
        label: "You get",
        text: "Help setting up governance, drafting board reporting, and a second opinion before commitments are made.",
      },
      { label: "Fee", text: "Scoped after the Briefing." },
    ],
  },
  {
    icon: Briefcase,
    title: "AI Risk Due Diligence",
    rows: [
      {
        label: "For",
        text: "PE firms, acquirers and portfolio companies assessing AI exposure in a transaction.",
      },
      {
        label: "Format",
        text: "A rapid assessment, delivered in 5-10 business days.",
      },
      {
        label: "You get",
        text: "Findings on shadow AI, third-party and model risk, and data leakage, written for a deal team to act on.",
      },
      { label: "Fee", text: "Fixed fee per target, scoped on a call." },
    ],
  },
];

const faqs = [
  {
    q: "How is this different from a Big 4 firm or a vendor?",
    a: "The person you meet is the person who does the work. No handoff to a junior team, and no product or implementation to sell you at the end.",
  },
  {
    q: "What do you need from us?",
    a: "About an hour of your CIO’s, CISO’s or general counsel’s time for the questionnaire and documents, plus the board or executive team for the session itself.",
  },
  {
    q: "Is what we share confidential?",
    a: "Yes. I sign a mutual NDA before any documents are shared, and I’m happy to sign yours.",
  },
  {
    q: "Do you implement?",
    a: "No. I advise, then hand off to your team or the vendors you choose.",
  },
];

export function ServicesDetail() {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="section-shell">
        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-border bg-card p-6 lg:p-10"
            >
              <div className="flex items-center gap-3">
                <service.icon className="h-6 w-6 shrink-0 text-gold" aria-hidden="true" />
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <dl className="mt-6 space-y-4">
                {service.rows.map((row) => (
                  <div key={row.label} className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                      {row.label}
                    </dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground lg:text-base">
                      {row.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-bold sm:text-4xl">Common questions</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-lg border border-border bg-card p-6 lg:p-8">
              <h3 className="text-base font-semibold lg:text-lg">{faq.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
