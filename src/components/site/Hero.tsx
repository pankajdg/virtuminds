import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import { CALENDLY_URL, INTRODUCTORY_CONVERSATION_URL } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={hero}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      <div className="section-shell relative grid min-h-[88vh] items-center gap-12 py-32 text-navy-foreground lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            AI strategy and governance, translated into board-ready decisions.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-navy-foreground/75">
            24+ years in enterprise technology — 11 years building and running infrastructure and
            security programs at Cisco, then 7 years advising Intuit's leadership at the executive
            level. I help boards and executive teams make sound decisions on AI adoption and cyber
            risk, before either becomes a crisis.
          </p>
          <p className="mt-4 text-sm font-medium text-navy-foreground/70">
            — Pankaj Gupta, Founder, Virtuminds Advisory
          </p>
          <div className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            AI Strategy & Governance · Cybersecurity & Risk Advisory
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={INTRODUCTORY_CONVERSATION_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              Introductory conversation
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gold px-6 py-3.5 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
            >
              Book 1:1 Advisory
            </a>
            <a
              href="#track-record"
              className="rounded-md border border-navy-foreground/40 px-6 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
            >
              See the Track Record
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:mx-0 lg:max-w-[320px]">
          <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-lg border border-gold/40 lg:block" />
          <img
            src={portrait}
            alt="Portrait of the Virtuminds founder and AI governance advisor"
            width={928}
            height={1230}
            className="relative w-full rounded-lg object-cover shadow-2xl ring-1 ring-navy-foreground/15"
          />
        </div>
      </div>
    </section>
  );
}
