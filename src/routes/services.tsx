import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Virtuminds Cybersecurity Advisory" },
      {
        name: "description",
        content:
          "Security assessment and roadmap, board advisory, fractional CISO/CIO, cloud and compliance, M&A due diligence, and AI risk governance.",
      },
      { property: "og:title", content: "Services — Virtuminds" },
      {
        property: "og:description",
        content: "Advisory scoped tightly around the cyber risk decision at hand.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
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
            Each engagement ends with something a board can act on: a clear picture of exposure,
            the trade-offs, and a recommended path.
          </p>
        </div>
      </section>
      <ServicesGrid />
      <CtaBand />
      <Footer />
    </main>
  );
}
