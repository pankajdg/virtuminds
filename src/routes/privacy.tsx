import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Footer } from "@/components/site/Footer";
import { CONTACT_EMAIL } from "@/lib/site";

const TITLE = "Privacy Policy | Virtuminds";
const DESC = "How Virtuminds handles information on virtumindsadvisory.com.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://virtumindsadvisory.com/privacy" },
      { property: "og:image", content: "https://virtumindsadvisory.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://virtumindsadvisory.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://virtumindsadvisory.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main>
      <FloatingNav />
      <section className="bg-navy-deep pb-16 pt-40 text-navy-foreground">
        <div className="section-shell">
          <p className="eyebrow text-gold">Privacy</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 max-w-2xl text-lg text-navy-foreground/80">
            Effective November 2026. This page describes how Virtuminds handles information in
            connection with this website.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="section-shell max-w-3xl space-y-8 text-base leading-relaxed text-muted-foreground">
          <div>
            <h2 className="text-xl font-semibold text-foreground">What this site collects</h2>
            <p className="mt-3">
              This website does not run analytics or advertising trackers, does not set marketing
              cookies, and does not ask you to create an account or submit forms on this site. Our
              hosting provider may record standard server information (such as IP address and
              browser type) for security and operational purposes.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              When you contact or book with us
            </h2>
            <p className="mt-3">
              If you email us, we use your message and contact details to respond. If you book a
              meeting, scheduling is handled by Calendly under its own privacy policy, and the
              details you provide there are used to arrange and conduct the meeting. We do not sell
              personal information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Client engagements</h2>
            <p className="mt-3">
              Information shared during an advisory engagement is handled under the written
              agreement governing that engagement, not this website policy.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Changes and contact</h2>
            <p className="mt-3">
              If our practices change, we will update this page. Questions about this policy:{" "}
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
