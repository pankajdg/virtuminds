import { createFileRoute } from "@tanstack/react-router";
import { FloatingNav } from "@/components/site/FloatingNav";
import { About } from "@/components/site/About";
import { TrustStrip } from "@/components/site/TrustStrip";
import { TrackRecord } from "@/components/site/TrackRecord";
import { CtaBand } from "@/components/site/CtaBand";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Virtuminds Cybersecurity Advisory" },
      {
        name: "description",
        content:
          "11+ years building and running enterprise infrastructure and security programs at Cisco, then 7 years advising Intuit leadership at the executive level.",
      },
      { property: "og:title", content: "About — Virtuminds" },
      {
        property: "og:description",
        content: "Operator experience across Fortune 100 enterprises, applied at the board level.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),

  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <FloatingNav />
      <section className="bg-navy-deep pb-20 pt-40 text-navy-foreground">
        <div className="section-shell">
          <p className="eyebrow text-gold">About</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">
            Two decades inside the enterprises boards ask about
          </h1>
        </div>
      </section>
      <TrustStrip />
      <About />
      <TrackRecord />
      <CtaBand />
      <Footer />
    </main>
  );
}
