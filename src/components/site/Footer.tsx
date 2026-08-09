export function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-navy-foreground">
      <div className="section-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold">Cyber & AI Risk Advisory</p>
          <p className="mt-1 text-sm text-navy-foreground/60">
            Board-level guidance on cyber and AI risk.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href="mailto:advisor@example.com" className="hover:text-gold">
            advisor@example.com
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold"
          >
            LinkedIn
          </a>
          <p className="text-navy-foreground/50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
