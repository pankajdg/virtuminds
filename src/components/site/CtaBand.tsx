import { CALENDLY_URL } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "Introductory conversation",
    description:
      "30 minutes, no obligation. We talk through the decision in front of you and whether I'm the right help.",
  },
  {
    number: "02",
    title: "Readiness Briefing",
    description:
      "A focused 90-minute working session. You leave with your AI exposure mapped, the trade-offs laid out, and a board-defensible path forward.",
  },
  {
    number: "03",
    title: "Advisory",
    description:
      "Ongoing counsel as the AI decisions get bigger — governance frameworks, board reporting, and a second set of eyes before commitments get made.",
  },
];

export function CtaBand() {
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How we start</h2>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="bg-navy p-6 lg:p-8">
              <span className="text-sm font-semibold tracking-[0.18em] text-gold">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold lg:mt-4">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gold px-8 py-4 text-base font-semibold text-gold-foreground transition-opacity hover:opacity-90"
          >
            Start with a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
