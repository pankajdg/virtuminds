import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img
        src={hero}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
      <div className="section-shell relative flex min-h-[88vh] flex-col justify-center py-32 text-navy-foreground">
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
          Cybersecurity and AI risk, translated into board-ready decisions.
        </h1>
        <p className="mt-6 max-w-xl leading-relaxed text-navy-foreground/75">
          I help boards and executive teams govern cyber risk with the same clarity and rigor they
          apply to financial risk — 24+ years across Cisco, HP, Wachovia, GE, AOL and Intuit,
          including 11+ years directly building and running enterprise infrastructure and security
          programs.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
          >
            Start a conversation
          </a>
          <Link
            to="/services"
            className="rounded-md border border-navy-foreground/40 px-6 py-3 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
