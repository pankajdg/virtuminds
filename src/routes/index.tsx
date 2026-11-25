import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WhyNow } from "@/components/site/WhyNow";
import { PointOfView } from "@/components/site/PointOfView";
import { About } from "@/components/site/About";
import { TrackRecord } from "@/components/site/TrackRecord";
import { Testimonials } from "@/components/site/Testimonials";
import { ServicesGrid } from "@/components/site/ServicesGrid";
import { BriefingDeliverable } from "@/components/site/BriefingDeliverable";
import { LatestBriefs } from "@/components/site/LatestBriefs";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Virtuminds | AI Governance Advisory for Boards & Executives" },
      {
        name: "description",
        content:
          "Virtuminds helps boards and executive teams govern AI adoption with the clarity and rigor they apply to financial risk — 24+ years across Cisco, Intuit and large enterprises.",
      },
      { property: "og:title", content: "Virtuminds | AI Governance Advisory for Boards" },
      {
        property: "og:description",
        content:
          "Board-ready guidance on AI strategy, governance, and cyber risk.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://virtumindsadvisory.com/" },
      { property: "og:image", content: "https://virtumindsadvisory.com/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://virtumindsadvisory.com/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://virtumindsadvisory.com/" }],
  }),

  component: Index,
});

function Index() {
  return (
    <main>
      <FloatingNav />
      <Hero />
      <TrustStrip />
      <WhyNow />
      <ServicesGrid />
      <PointOfView />
      <About />
      <TrackRecord framingLine="Results that transfer. Each engagement below built the operating discipline behind Virtuminds' AI governance work — measured in outcomes, not years." />
      <Testimonials />
      <BriefingDeliverable />
      <LatestBriefs />
      <CtaBand />
      <Footer />
    </main>
  );
}
