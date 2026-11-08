"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "all", label: "All Projects" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "webapp", label: "Web Apps" },
  { id: "dashboard", label: "Dashboards" },
  { id: "landing", label: "Landing Pages" },
] as const;

type TabId = (typeof tabs)[number]["id"];

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: Exclude<TabId, "all">;
  github: string;
  live: string;
  image: string;
  gradient: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "ShopVerse",
    description:
      "Full-featured e-commerce store with product filtering, cart, checkout and admin panel for managing inventory.",
    tech: ["Next.js", "MongoDB", "Stripe"],
    category: "ecommerce",
    github: "https://github.com/abedhossain/shopverse",
    live: "https://shopverse.vercel.app",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop",
    gradient: "from-[#139bfd] to-[#13fdfd]",
    featured: true,
  },
  {
    title: "FoodExpress",
    description:
      "Food delivery platform with restaurant listings, live order tracking and a secure payment flow.",
    tech: ["React", "Node.js", "Express"],
    category: "ecommerce",
    github: "https://github.com/abedhossain/foodexpress",
    live: "https://foodexpress.vercel.app",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80&auto=format&fit=crop",
    gradient: "from-[#ff494a] to-[#fdc448]",
  },
  {
    title: "TaskFlow",
    description:
      "Team productivity app with kanban boards, realtime task updates and role-based access control.",
    tech: ["Next.js", "TypeScript", "Socket.io"],
    category: "webapp",
    github: "https://github.com/abedhossain/taskflow",
    live: "https://taskflow.vercel.app",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80&auto=format&fit=crop",
    gradient: "from-[#7c3aed] to-[#13fdfd]",
    featured: true,
  },
  {
    title: "ChatHub",
    description:
      "Realtime chat application with private and group rooms, typing indicators and message reactions.",
    tech: ["MERN", "Socket.io", "JWT"],
    category: "webapp",
    github: "https://github.com/abedhossain/chathub",
    live: "https://chathub.vercel.app",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80&auto=format&fit=crop",
    gradient: "from-[#139bfd] to-[#7c3aed]",
  },
  {
    title: "FitTrack",
    description:
      "Fitness dashboard to log workouts, track progress over time and visualise personal bests.",
    tech: ["React", "Recharts", "Firebase"],
    category: "dashboard",
    github: "https://github.com/abedhossain/fittrack",
    live: "https://fittrack.vercel.app",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop",
    gradient: "from-[#3eb75e] to-[#13fdfd]",
  },
  {
    title: "StudioOne",
    description:
      "High-conversion agency landing page with animated sections, pricing tiers and a contact form.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "landing",
    github: "https://github.com/abedhossain/studioone",
    live: "https://studioone.vercel.app",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop",
    gradient: "from-[#139bfd] to-[#010a10]",
  },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Projects = () => {
  const [activeTab, setActiveTab] = useState<TabId>("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="theme-gradient text-sm font-bold uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Featured <span className="theme-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            Real products I&apos;ve designed, built and shipped — every one
            open-source on GitHub and live on Vercel for you to try.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {tabs.map((tab) => {
            const count =
              tab.id === "all"
                ? projects.length
                : projects.filter((project) => project.category === tab.id)
                    .length;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                aria-pressed={activeTab === tab.id}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5",
                  activeTab === tab.id
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-card text-muted-foreground hover:border-primary/50 hover:text-primary border-border"
                )}
              >
                {tab.label}
                <span
                  className={cn(
                    "ml-2 rounded-full px-1.5 text-xs tabular-nums",
                    activeTab === tab.id
                      ? "bg-primary-foreground/20"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={`${activeTab}-${project.title}`}
              className="group bg-card animate-in fade-in slide-in-from-bottom-3 relative flex flex-col overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Cover */}
              <div
                className={cn(
                  "bg-gradient-to-br relative h-40 overflow-hidden sm:h-44",
                  project.gradient
                )}
              >
                {/* Screenshot */}
                <Image
                  src={project.image}
                  alt={`${project.title} — project preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover live preview hint */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
                    <ExternalLink className="size-4" />
                    Live Preview
                  </span>
                </a>
                {project.featured && (
                  <span className="text-primary-foreground absolute top-3 left-3 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold shadow-sm">
                    Featured
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="group-hover:text-primary text-lg font-bold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mt-2 line-clamp-2 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech chips */}
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="bg-primary/8 text-primary/90 dark:bg-primary/10 dark:text-primary rounded-md px-2 py-1 text-[11px] font-medium"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                {/* Links */}
                <div className="border-border/60 mt-5 flex items-center gap-2.5 border-t pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/85"
                  >
                    <ExternalLink className="size-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} — source code on GitHub`}
                    className="text-muted-foreground hover:text-primary-foreground hover:bg-foreground ring-border inline-flex h-9 items-center justify-center gap-2 rounded-lg px-3.5 ring-1 transition-colors duration-300 hover:ring-foreground"
                  >
                    <GitHubIcon />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* More link */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
          >
            <GitHubIcon />
            View all repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
