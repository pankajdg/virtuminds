import { Link } from "@tanstack/react-router";
import { CALENDLY_URL, BRAND } from "@/lib/site";
import logoNavy from "@/assets/virtuminds-logo-navy.png.asset.json";

const linkClass =
  "rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary";

export function FloatingNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3">
      <nav className="pointer-events-auto flex flex-wrap items-center justify-center gap-1 rounded-full border border-border/60 bg-card/85 p-1.5 shadow-lg shadow-navy/10 backdrop-blur-md">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-full py-1 pl-2 pr-3"
          aria-label={`${BRAND} home`}
        >
          <img src={logoNavy.url} alt={`${BRAND} logo`} className="h-7 w-auto" />
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
            {BRAND}
          </span>
        </Link>
        <Link to="/" className={linkClass} activeProps={{ className: "bg-secondary" }} activeOptions={{ exact: true }}>
          Home
        </Link>
        <Link to="/services" className={linkClass} activeProps={{ className: "bg-secondary" }}>
          Services
        </Link>
        <Link to="/about" className={linkClass} activeProps={{ className: "bg-secondary" }}>
          About
        </Link>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="ml-1 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-gold-foreground transition-opacity hover:opacity-90"
        >
          Schedule a meeting
        </a>
      </nav>
    </header>
  );
}
