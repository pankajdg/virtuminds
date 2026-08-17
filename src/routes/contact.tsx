import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Virtuminds Cybersecurity Advisory" },
      {
        name: "description",
        content:
          "Send a message about a governance, compliance, cloud, AI risk, or due diligence decision and get a personal response from Virtuminds.",
      },
      { property: "og:title", content: "Contact — Virtuminds" },
      {
        property: "og:description",
        content: "Reach out about a specific cyber risk or AI governance decision.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),

  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <FloatingNav />
      <section className="bg-navy-deep pb-16 pt-40 text-navy-foreground">
        <div className="section-shell">
          <p className="eyebrow text-gold">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Tell me about the decision in front of you
          </h1>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  );
}
