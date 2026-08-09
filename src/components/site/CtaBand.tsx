import { CALENDLY_URL } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="bg-navy py-20 text-navy-foreground">
      <div className="section-shell flex flex-col items-center gap-8 text-center">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Focused guidance on your cyber risk decision
          </h2>
          <p className="mt-4 text-navy-foreground/70">
            A dedicated 60-minute session for boards and executives working through a specific
            governance, compliance, or investment decision.
          </p>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-md bg-gold px-8 py-4 text-base font-semibold text-gold-foreground transition-opacity hover:opacity-90"
        >
          Check Availability
        </a>
      </div>
    </section>
  );
}
