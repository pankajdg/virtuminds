import hero from "@/assets/hero.jpg";
import { CALENDLY_URL } from "@/lib/site";

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
      <div className="section-shell relative flex min-h-[88vh] flex-col justify-center py-32 text-navy-foreground">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          AI Strategy and Cybersecurity risk, translated into board-ready decisions.
        </h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-navy-foreground/75">
          24+ years in enterprise technology — 11 years building and running infrastructure and
          security programs at Cisco, then 7 years advising Intuit's leadership at the executive
          level. I help boards and executive teams make sound decisions on AI adoption and cyber
          risk, before either becomes a crisis.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
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
    </section>
  );
}
