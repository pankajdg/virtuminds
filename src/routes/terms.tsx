import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Footer } from "@/components/site/Footer";
import { CONTACT_EMAIL } from "@/lib/site";

const TITLE = "Terms of Use | Virtuminds";
const DESC = "Terms governing use of virtumindsadvisory.com.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://virtumindsadvisory.com/terms" },
      { property: "og:image", content: "https://virtumindsadvisory.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://virtumindsadvisory.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://virtumindsadvisory.com/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main>
      <FloatingNav />
      <section className="bg-navy-deep pb-16 pt-40 text-navy-foreground">
        <div className="section-shell">
          <p className="eyebrow text-gold">Terms</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Terms of Use</h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">
            Effective November 2026. By using this website you agree to these terms.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="section-shell max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground">General information only</h2>
            <p className="mt-3">
              Content on this site describes Virtuminds&rsquo; services and perspectives in general
              terms. It is not legal, regulatory, or technical advice for any specific situation,
              and should not be relied on as such.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">No engagement by website use</h2>
            <p className="mt-3">
              Using this site, contacting us, or booking an introductory conversation does not
              create an advisory or client relationship. Any engagement is governed solely by a
              separate written agreement signed by both parties.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
            <p className="mt-3">
              Site content is © Virtuminds. You may share links to our pages; republishing our
              material requires our written permission. Company names and logos shown on this site
              belong to their respective owners and are used to describe experience; no endorsement
              is implied.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Third-party services</h2>
            <p className="mt-3">
              Booking and other functions may be provided by third parties (such as Calendly and
              LinkedIn) under their own terms and privacy policies.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Liability and governing law</h2>
            <p className="mt-3">
              This site is provided &ldquo;as is.&rdquo; To the extent permitted by law, Virtuminds
              is not liable for decisions made in reliance on site content. These terms are
              governed by the laws of the State of California. Questions:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
