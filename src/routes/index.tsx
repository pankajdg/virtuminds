import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { TrackRecord } from "@/components/site/TrackRecord";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cyber & AI Risk Advisory for Boards" },
      {
        name: "description",
        content:
          "Board-level advisory translating cybersecurity and AI risk into clear, decision-ready guidance. 24+ years across Fortune 100 enterprises.",
      },
      { property: "og:title", content: "Cyber & AI Risk Advisory for Boards" },
      {
        property: "og:description",
        content:
          "Governing cyber and AI risk with the clarity and rigor boards apply to financial risk.",
      },
    ],
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
      <Footer />
    </main>
  );
}
