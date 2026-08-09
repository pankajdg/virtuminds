import { Link } from "@tanstack/react-router";

const CALENDLY_URL = "https://calendly.com";

export function FloatingNav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-border/60 bg-card/85 p-1.5 shadow-lg shadow-navy/10 backdrop-blur-md">
        <Link
          to="/"
          className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          activeProps={{ className: "bg-secondary" }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>
        <Link
          to="/services"
          className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          activeProps={{ className: "bg-secondary" }}
        >
          Services
        </Link>
        <Link
          to="/about"
          className="rounded-full px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
          activeProps={{ className: "bg-secondary" }}
        >
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
