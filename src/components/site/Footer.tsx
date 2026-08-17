import { BRAND, CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/site";
import logoWhite from "@/assets/virtuminds-logo-white.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep py-12 text-navy-foreground">
      <div className="section-shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <img src={logoWhite} alt={`${BRAND} logo`} className="h-12 w-auto" />
          <div>
            <p className="font-display text-lg font-semibold">{BRAND}</p>
            <p className="mt-1 text-sm text-navy-foreground/60">
              Cybersecurity advisory for boards and executives.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-gold">
            {CONTACT_EMAIL}
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-gold">
            LinkedIn
          </a>
          <p className="text-navy-foreground/50">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
