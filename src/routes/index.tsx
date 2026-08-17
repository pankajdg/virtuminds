import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { TrackRecord } from "@/components/site/TrackRecord";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virtuminds | Cybersecurity Advisory for Boards & Executives" },
      {
        name: "description",
        content:
          "Virtuminds helps boards and executive teams govern cyber risk with the clarity and rigor they apply to financial risk — 24+ years across Cisco, Intuit and Fortune 100 enterprises.",
      },
      { property: "og:title", content: "Virtuminds | Cybersecurity Advisory for Boards" },
      {
        property: "og:description",
        content:
          "Board-ready guidance on cyber risk, governance and compliance decisions.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: Index,
});

function Index() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <TrustStrip />
      <About />
      <TrackRecord />
      <ServicesGrid />
      <CtaBand />
      <Contact />
      <Footer />

    </main>
  );
}
