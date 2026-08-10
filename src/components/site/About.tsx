import portrait from "@/assets/portrait.jpg.asset.json";

const blocks = [
  {
    title: "Built it before advising on it",
    body: "I spent 11+ years directly building and running enterprise infrastructure and security programs at Cisco, then 7 years advising Intuit's leadership at the executive level.",
  },
  {
    title: "Technical risk, governed as business risk",
    body: "Through Virtuminds, I help boards and executive teams translate technical risk into governed business decisions — before a crisis forces the conversation.",
  },
  {
    title: "Track record at scale",
    body: "24+ years across Cisco, Intuit, and Fortune 100 enterprises, including a $150M regulatory compliance program guided to zero missed deadlines.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-secondary/50 py-24">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-lg border border-gold/50 lg:block" />
          <img
            src={portrait.url}
            alt="Portrait of the Virtuminds founder and cyber risk advisor"
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
