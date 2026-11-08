import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating: number;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Founder, BloomCart",
    quote:
      "Abed turned our rough idea into a store our customers love. The checkout flow he built lifted our conversion rate by 40% in the first month.",
    rating: 5,
    color: "#f24e1e",
  },
  {
    name: "Daniel Okonkwo",
    role: "Product Manager, FinEdge",
    quote:
      "Rare combination of design sense and solid backend skills. He shipped our dashboard API ahead of schedule and stayed to polish the details.",
    rating: 5,
    color: "#139bfd",
  },
  {
    name: "Marta Nowak",
    role: "Owner, Studio Rosa",
    quote:
      "Exactly what my studio needed — a fast, elegant site that I can update myself. Abed even taught me how to use it beforehand.",
    rating: 4,
    color: "#a855f7",
  },
  {
    name: "James Carter",
    role: "CTO, LoopMetrics",
    quote:
      "Our Next.js app was a mess of legacy code. Abed refactored it without a single hour of downtime and cut the load time in half.",
    rating: 5,
    color: "#13fdfd",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Lead, ZenithCare",
    quote:
      "He rebuilt our site with SEO baked in from day one. Organic traffic doubled within three months — the numbers speak for themselves.",
    rating: 5,
    color: "#ff494a",
  },
  {
    name: "Andrei Popescu",
    role: "CEO, TravelNest",
    quote:
      "Communication on point from kickoff to launch. Mocks, revisions, delivery — everything happened exactly when he said it would.",
    rating: 4,
    color: "#fdc448",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <figure className="group bg-card relative w-[320px] shrink-0 rounded-2xl border border-border p-6 shadow-sm transition-colors duration-300 hover:border-primary/50 sm:w-[380px]">
    <Quote className="text-primary/20 group-hover:text-primary/30 absolute top-5 right-5 size-8 fill-current" />

    {/* Rating */}
    <div className="flex items-center gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={
            i < testimonial.rating
              ? "fill-[#fdc448] text-[#fdc448] size-4"
              : "text-muted-foreground/30 size-4 fill-current"
          }
          aria-hidden="true"
        />
      ))}
    </div>

    <blockquote className="text-foreground/90 mt-4 text-sm leading-relaxed">
      &ldquo;{testimonial.quote}&rdquo;
    </blockquote>

    <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
      <span
        className="ring-border flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ring-2"
        style={{ backgroundColor: testimonial.color }}
        aria-hidden="true"
      >
        {testimonial.name
          .split(" ")
          .map((part) => part[0])
          .join("")}
      </span>
      <div>
        <p className="text-sm font-semibold">{testimonial.name}</p>
        <p className="text-muted-foreground text-xs">{testimonial.role}</p>
      </div>
    </figcaption>
  </figure>
);

const Testimonials = () => {
  // Duplicate the list so the marquee loop is seamless
  const rowA = testimonials.slice(0, 3);
  const rowB = testimonials.slice(3);

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="theme-gradient text-sm font-bold uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            What Clients <span className="theme-gradient">Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            Honest feedback from founders, CTOs and teams I&apos;ve worked with
            around the world.
          </p>
        </div>
      </div>

      {/* Scrolling rows — pause on hover */}
      <div
        className="mt-12 space-y-6 lg:mt-16 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-label="Client testimonials"
      >
        <div className="flex overflow-hidden">
          <div className="animate-marquee-left flex gap-5 pr-5 hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
            {[...rowA, ...rowA].map((testimonial, i) => (
              <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="animate-marquee-right flex gap-5 pr-5 hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]">
            {[...rowB, ...rowB].map((testimonial, i) => (
              <TestimonialCard key={`${testimonial.name}-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
