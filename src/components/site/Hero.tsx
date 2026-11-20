import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import { INTRODUCTORY_CONVERSATION_URL } from "@/lib/site";

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
            Your board is accountable for AI it can&rsquo;t yet see.
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-navy-foreground/75">
            Most companies run more AI than anyone has approved. I help boards and executive teams
            find out what&rsquo;s actually in use, decide what to do about it, and be able to show
            their work later.
          </p>
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-navy-foreground/70">
            — Pankaj Gupta, Founder, Virtuminds Advisory. 11 years running enterprise platform
            and compliance programs at Cisco, then 7 years advising Intuit&rsquo;s leadership,
            including a ~$150M regulatory program with zero missed deadlines.
          </p>
          <div className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
            AI Strategy & Governance · Cybersecurity & Risk Advisory
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={INTRODUCTORY_CONVERSATION_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
            >
              Book a 30-minute conversation
            </a>
          </div>
          <p className="mt-4 text-sm text-navy-foreground/70">
            Not ready to talk?{" "}
            <a href="/insights" className="font-medium text-gold underline underline-offset-2 hover:opacity-90">
              Read the seven questions every director should ask about AI &rarr;
            </a>
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-lg shadow-2xl ring-2 ring-gold/60 sm:max-w-[300px] lg:mx-0 lg:max-w-[320px]">
          <img
            src={portrait}
            alt="Portrait of the Virtuminds founder and AI governance advisor"
            width={928}
            height={1230}
            className="block h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
