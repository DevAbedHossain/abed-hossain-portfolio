import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  ArrowUpRight,
} from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Every project starts with a conversation. We explore your goals, target users and requirements until the scope is crystal clear.",
    icon: MessageSquare,
    tag: "Deep-dive call",
  },
  {
    step: "02",
    title: "Design",
    description:
      "I translate requirements into wireframes and clean, accessible UI — designed mobile-first and aligned with your brand identity.",
    icon: PenTool,
    tag: "UI / UX",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Your product comes to life with modern, scalable, well-tested code. You get regular previews and can track progress at every stage.",
    icon: Code2,
    tag: "Clean code",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "Smooth deployment with zero downtime — followed by ongoing maintenance, monitoring and improvements as your product grows.",
    icon: Rocket,
    tag: "Long-term care",
  },
];

const HowIWork = () => {
  return (
    <section id="process" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="theme-gradient text-sm font-bold uppercase tracking-widest">
            My Process
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            How I <span className="theme-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            A simple, transparent workflow — so you always know what&apos;s
            happening and what comes next, from the first call to long after
            launch.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:gap-8 xl:grid-cols-4">
          {steps.map(
            ({ step, title, description, icon: Icon, tag }) => (
              <article
                key={step}
                className="group bg-card relative overflow-hidden rounded-2xl border border-border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 lg:p-7 xl:[&:nth-child(even)]:translate-y-6 xl:hover:[&:nth-child(even)]:translate-y-4"
              >
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="bg-primary/10 absolute -top-16 left-1/2 size-48 -translate-x-1/2 rounded-full blur-3xl" />
                </div>

                {/* Ghost step number */}
                <span
                  className="text-primary/10 group-hover:text-primary/20 pointer-events-none absolute -top-3 right-4 text-7xl font-extrabold transition-colors duration-300 select-none"
                  aria-hidden="true"
                >
                  {step}
                </span>

                {/* Icon */}
                <div className="relative">
                  <span className="from-primary to-[#13fdfd] text-primary-foreground ring-border inline-flex size-12 items-center justify-center rounded-xl bg-gradient-to-tr shadow-md ring-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="size-6" />
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-foreground mt-5 text-xl font-bold">
                  {title}
                </h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {description}
                </p>

                {/* Footer tag + arrow */}
                <div className="border-border/60 mt-5 flex items-center justify-between border-t pt-4">
                  <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                    {tag}
                  </span>
                  <span className="text-muted-foreground flex size-7 items-center justify-center rounded-full border border-border transition-colors duration-300 group-hover:border-primary/50 group-hover:text-primary">
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
