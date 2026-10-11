const testimonials = [
  {
    quote: [
      "I worked with Pankaj Gupta in our MTL Advisory program. Pankaj was the person who brought order to complex regulatory work — he understood the compliance requirements and, just as importantly, how to make them work operationally across teams. He asked the right questions, held people accountable, and kept the program moving without cutting corners. I’d work with him again without hesitation.",
    ],
    attribution: "Mike Martinez, Compliance at Lithic",
  },
  {
    quote: [
      "I led Pankaj’s development cohort at Cisco — a 3-month coaching program where 10–12 team members learn from each other while assigned leaders guide their competency growth. From our first sessions, Pankaj stood out: he listens hard, asks the questions others skip, and turns what he learns into action fast.",
      "I watched him work across engineering and business teams to establish measurable platform usage metrics. He gave stakeholders real transparency into utilization and spend, strengthened data-driven decision-making across the platform ecosystem, and tied operational costs to business value in a way that stuck. He’s the rare operator who turns measurement into decisions — and I’d work with him again without hesitation.",
    ],
    attribution: "Arun Joshi, Enterprise Transformation & GTM Strategy",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 border-y border-border bg-secondary py-16 lg:py-20">
      <div className="section-shell">
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">What colleagues say</h2>

        <div className="mt-10 flex flex-wrap gap-6">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.attribution}
              className="flex flex-1 basis-80 flex-col rounded-lg bg-navy p-7 text-navy-foreground lg:p-8"
            >
              <div className="flex flex-1 flex-col justify-center">
                <span className="font-display text-4xl leading-none text-gold" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-4 space-y-4 text-sm leading-relaxed text-navy-foreground/90 lg:text-base">
                  {testimonial.quote.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-navy-foreground/15 pt-4 text-sm font-semibold text-gold">
                <span aria-hidden="true">— </span>
                {testimonial.attribution}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
