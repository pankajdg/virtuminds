import portrait from "@/assets/portrait.jpg";

const blocks = [
  {
    title: "24+ years in enterprise technology",
    body: "Across Cisco, Intuit, GE, HP, DirecTV, Wachovia, AOL and Constellation Energy — in the rooms where infrastructure, budget and risk decisions actually get made.",
  },
  {
    title: "11+ years building security programs",
    body: "Not observing from the outside. Designing, funding and running the infrastructure and security programs that carried real production risk.",
  },
  {
    title: "Translation, not jargon",
    body: "Boards govern cyber and AI risk best when it is presented with the same clarity and rigor as financial risk. That translation is the work.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-secondary/50 py-24">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-lg border border-gold/50 lg:block" />
          <img
            src={portrait}
            alt="Portrait of the cyber risk advisor"
            width={1024}
            height={1280}
            loading="lazy"
            className="relative w-full rounded-lg object-cover shadow-xl"
          />
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Operator experience, board-level perspective
          </h2>
          <div className="mt-8 space-y-8">
            {blocks.map((block) => (
              <div key={block.title} className="border-l-2 border-gold pl-5">
                <h3 className="text-lg font-semibold">{block.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
