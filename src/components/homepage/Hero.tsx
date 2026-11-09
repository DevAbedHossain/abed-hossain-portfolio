"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Problem Solver",
  "WordPress Expert",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/DevAbedHossain/",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devabedhossain/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.786zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/devabedhossain",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/AbedHossain_",
    path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z",
  },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for the roles
  useEffect(() => {
    const current = roles[roleIndex];

    let delay = isDeleting ? 45 : 85;
    if (!isDeleting && text === current) delay = 1600;
    else if (isDeleting && text === "") delay = 350;

    const timer = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="bg-primary/20 absolute -top-32 right-0 size-[500px] rounded-full blur-[140px] dark:bg-[#139bfd]/25" />
        <div className="bg-[#13fdfd]/15 absolute top-1/2 -left-40 size-[400px] rounded-full blur-[130px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
        {/* Left content */}
        <div className="order-2 lg:order-1">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm">
            <span className="relative flex size-2.5">
              <span className="bg-emerald-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-emerald-500 relative inline-flex size-2.5 rounded-full" />
            </span>
            Available for freelance work
          </div>

          <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="theme-gradient">Abed Hossain</span>
          </h1>

          {/* Typewriter */}
          <p className="text-foreground/90 mt-4 flex items-center gap-2 text-xl font-semibold sm:text-2xl">
            <Sparkles className="text-primary size-5 shrink-0" />
            <span>
              I&apos;m a{" "}
              <span className="text-primary">
                {text}
                <span className="text-primary ml-0.5 animate-pulse">|</span>
              </span>
            </span>
          </p>

          <p className="text-muted-foreground mt-5 max-w-xl text-base leading-relaxed sm:text-lg">
            I build fast, accessible and user-friendly web applications from
            concept to deployment — turning ideas into polished products with
            clean code and thoughtful design.
          </p>

          {/* Location */}
          <p className="text-muted-foreground mt-4 flex items-center gap-1.5 text-sm">
            <MapPin className="text-primary size-4" />
            Dhaka, Bangladesh
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" className="h-11 gap-2 rounded-xl px-6">
              Hire Me
              <ArrowRight />
            </Button>
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

          {/* Social links */}
          <div className="mt-8 flex items-center gap-3">
            <span className="text-muted-foreground text-sm">Follow me:</span>
            <ul className="flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="bg-card text-muted-foreground hover:text-primary-foreground hover:bg-primary ring-border flex size-9 items-center justify-center rounded-full ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:ring-primary"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right content — image */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            {/* Gradient glow frame */}
            <div className="from-primary via-[#13fdfd] to-[#ff014f] absolute -inset-1.5 rounded-[2rem] bg-gradient-to-tr opacity-70 blur-md" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-border/40 bg-card">
              <Image
                src="/abed-hossain.png"
                alt="Portrait of Abed Hossain"
                width={560}
                height={672}
                priority
                sizes="(max-width: 1024px) 90vw, 560px"
                className="h-auto w-full max-w-[340px] object-cover sm:max-w-[420px] lg:max-w-[480px]"
              />
            </div>

            {/* Floating badge — experience */}
            <div className="bg-card/90 absolute top-6 -left-2 hidden rounded-xl border border-border p-3 shadow-lg backdrop-blur-md sm:block lg:-left-8">
              <p className="theme-gradient text-2xl font-extrabold">2+</p>
              <p className="text-muted-foreground text-xs">
                Years of Experience
              </p>
            </div>

            {/* Floating badge — projects */}
            <div className="bg-card/90 absolute -right-2 bottom-8 hidden items-center gap-3 rounded-xl border border-border p-3 shadow-lg backdrop-blur-md sm:flex lg:-right-6">
              <span className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
                <Sparkles className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold">20+ Projects</p>
                <p className="text-muted-foreground text-xs">
                  Delivered Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <dl className="bg-card grid grid-cols-1 gap-6 rounded-2xl border border-border p-6 shadow-sm divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="theme-gradient text-3xl font-extrabold sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="text-muted-foreground mt-1 text-sm">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
