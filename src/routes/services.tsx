import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { ServicesDetail } from "@/components/site/ServicesDetail";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Virtuminds AI Governance Advisory" },
      {
        name: "description",
        content:
          "AI Governance Readiness Briefing, Board and Executive Advisory, and AI Risk Due Diligence for mid-market companies and PE portfolio companies. Fixed-scope, vendor-independent.",
      },
      { property: "og:title", content: "Services — Virtuminds" },
      {
        property: "og:description",
        content: "AI governance advisory built around the decision in front of you.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://virtumindsadvisory.com/services" },
      { property: "og:image", content: "https://virtumindsadvisory.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://virtumindsadvisory.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://virtumindsadvisory.com/services" }],
  }),

  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main>
      <FloatingNav />
      <section className="bg-navy-deep pb-20 pt-40 text-navy-foreground">
        <div className="section-shell">
          <p className="eyebrow text-gold">Services</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Advisory built around the decision in front of you
          </h1>
          <p className="mt-5 max-w-2xl text-navy-foreground/70">
            Most boards come to me with a specific question: Are we exposed? Should we approve
            this? What do we tell a regulator, an auditor or a buyer? Every engagement ends with
            a written answer you can act on.
          </p>
        </div>
      </section>
      <ServicesDetail />
      <CtaBand />
      <Footer />
    </main>
  );
}
