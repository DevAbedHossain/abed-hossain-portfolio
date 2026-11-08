import Image from "next/image";
import { CircleCheck, Download, Mail, MapPin, Briefcase } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const highlights = [
  "Responsive, mobile-first layouts that work on every screen",
  "Clean, maintainable code with reusable components",
  "Performance-focused: fast load times and SEO-friendly pages",
  "Clear communication and on-time delivery, every project",
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
];

const infoItems = [
  { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  { icon: Briefcase, label: "Experience", value: "2+ Years" },
  { icon: Mail, label: "Email", value: "abed@example.com" },
  {
    icon: CircleCheck,
    label: "Freelance",
    value: "Available Now",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Decorative dotted grid */}
            <div
              className="pointer-events-none absolute -top-8 -left-8 -z-10 size-40 rounded-full opacity-30 dark:opacity-20"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1.5px, transparent 1.5px)",
                backgroundSize: "16px 16px",
                color: "#139bfd",
              }}
            />

            {/* Gradient glow frame */}
            <div
              className="from-primary via-[#13fdfd] to-[#ff014f] absolute -inset-1.5 rounded-[2rem] bg-gradient-to-br opacity-60 blur-md"
              aria-hidden="true"
            />

            <div className="bg-card relative overflow-hidden rounded-[1.75rem] border border-border/40">
              <Image
                src="/abed-hossain.png"
                alt="About Abed Hossain"
                width={560}
                height={672}
                sizes="(max-width: 1024px) 90vw, 560px"
                className="h-auto w-full object-cover"
              />

              {/* Overlay footer card on the image */}
              <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-border/50 bg-background/80 p-4 backdrop-blur-md sm:right-6 sm:bottom-6 sm:left-auto sm:max-w-[16rem]">
                <p className="text-2xl font-extrabold sm:text-3xl">
                  <span className="theme-gradient">2+</span>{" "}
                  <span className="text-lg font-bold sm:text-xl">
                    Years Experience
                  </span>
                </p>
                <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                  Building modern web apps &amp; helping businesses go digital.
                </p>
              </div>
            </div>
          </div>

          {/* Right — content */}
          <div>
            {/* Heading */}
            <span className="theme-gradient text-sm font-bold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Turning ideas into real products —{" "}
              <span className="theme-gradient">that&apos;s what I love</span>
            </h2>

            <p className="text-muted-foreground mt-5 leading-relaxed">
              I&apos;m Abed Hossain, a full-stack web developer from Dhaka,
              Bangladesh. Over the last two years I&apos;ve been building fast,
              accessible and user-friendly applications — from polished
              marketing sites to complete MERN-stack platforms with
              authentication, dashboards and APIs.
            </p>

            {/* Highlights */}
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground flex items-start gap-2.5 text-sm leading-relaxed"
                >
                  <CircleCheck className="text-primary mt-0.5 size-4 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Skill chips */}
            <div className="mt-7 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-card text-muted-foreground hover:border-primary/50 hover:text-primary rounded-full border border-border px-3.5 py-1.5 text-xs font-medium transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Info grid */}
            <dl className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="bg-card flex items-center gap-3 rounded-xl border border-border p-3 transition-colors duration-300 hover:border-primary/40"
                >
                  <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                    <Icon className="size-4" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-muted-foreground text-xs">{label}</dt>
                    <dd className="truncate text-sm font-semibold">
                      {value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className={buttonVariants({
                  size: "lg",
                  className: "h-11 rounded-xl px-6",
                })}
              >
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-11 rounded-xl px-6 border-primary/30 hover:bg-primary/10 hover:text-primary",
                })}
              >
                <Download /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
