"use client";

import { useState } from "react";
import { Code2, Server, Palette, Globe, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All", icon: LayoutGrid },
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "design", label: "Design", icon: Palette },
  { id: "growth", label: "CMS & SEO", icon: Globe },
] as const;

type CategoryId = (typeof categories)[number]["id"];

const skills: {
  name: string;
  category: Exclude<CategoryId, "all">;
  level: number;
  color: string;
}[] = [
  // Frontend
  { name: "HTML5", category: "frontend", level: 95, color: "#e34f26" },
  { name: "CSS3", category: "frontend", level: 92, color: "#1572b6" },
  { name: "JavaScript", category: "frontend", level: 90, color: "#f7df1e" },
  { name: "TypeScript", category: "frontend", level: 85, color: "#3178c6" },
  { name: "React.js", category: "frontend", level: 92, color: "#61dafb" },
  { name: "Next.js", category: "frontend", level: 88, color: "#8b8b8b" },
  { name: "Tailwind CSS", category: "frontend", level: 94, color: "#38bdf8" },
  { name: "Bootstrap", category: "frontend", level: 88, color: "#7952b3" },

  // Backend
  { name: "Node.js", category: "backend", level: 87, color: "#5fa04e" },
  { name: "Express.js", category: "backend", level: 84, color: "#8b8b8b" },
  { name: "MongoDB", category: "backend", level: 85, color: "#47a248" },
  { name: "PostgreSQL", category: "backend", level: 78, color: "#4169e1" },
  { name: "REST APIs", category: "backend", level: 90, color: "#ff6c37" },
  { name: "Firebase", category: "backend", level: 76, color: "#ffca28" },

  // Design
  { name: "Figma", category: "design", level: 90, color: "#f24e1e" },
  { name: "Canva", category: "design", level: 93, color: "#00c4cc" },
  { name: "UI / UX Design", category: "design", level: 82, color: "#a855f7" },
  {
    name: "Responsive Design",
    category: "design",
    level: 95,
    color: "#139bfd",
  },

  // CMS & SEO
  { name: "WordPress", category: "growth", level: 88, color: "#47a8dc" },
  { name: "Elementor", category: "growth", level: 85, color: "#92000f" },
  { name: "SEO", category: "growth", level: 87, color: "#ff494a" },
  {
    name: "Technical SEO",
    category: "growth",
    level: 80,
    color: "#fdc448",
  },
];

const getInitials = (name: string) => {
  if (name.includes(" ") && !name.startsWith("UI")) {
    return name
      .split(" ")[0]
      .slice(0, 2)
      .toUpperCase();
  }
  if (name.startsWith("UI")) return "UX";
  return name.slice(0, 2).toUpperCase();
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="theme-gradient text-sm font-bold uppercase tracking-widest">
            My Toolbox
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Skills &amp; <span className="theme-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            The tools I use every day to design, build and ship reliable web
            products — filtered by where they fit in my workflow.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map(({ id, label, icon: Icon }) => {
            const count =
              id === "all"
                ? skills.length
                : skills.filter((skill) => skill.category === id).length;

            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveFilter(id)}
                aria-pressed={activeFilter === id}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 sm:px-5",
                  activeFilter === id
                    ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/25"
                    : "bg-card text-muted-foreground hover:border-primary/50 hover:text-primary border-border"
                )}
              >
                <Icon className="size-4" />
                {label}
                <span
                  className={cn(
                    "rounded-full px-1.5 text-xs tabular-nums",
                    activeFilter === id
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

        {/* Skill cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4">
          {filteredSkills.map((skill) => (
            <article
              key={`${activeFilter}-${skill.name}`}
              className="group bg-card animate-in fade-in zoom-in-95 relative overflow-hidden rounded-2xl border border-border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Hover glow */}
              <div
                className="absolute -top-12 left-1/2 size-36 -translate-x-1/2 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15"
                style={{ backgroundColor: skill.color }}
                aria-hidden="true"
              />

              <div className="flex items-center gap-3.5">
                {/* Monogram tile — tech brand color */}
                <span
                  className="ring-border flex size-11 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold ring-1 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    color: skill.color,
                    backgroundColor: `${skill.color}1f`,
                  }}
                  aria-hidden="true"
                >
                  {getInitials(skill.name)}
                </span>

                <div className="min-w-0">
                  <h3 className="truncate font-bold">{skill.name}</h3>
                  <p className="text-muted-foreground text-xs capitalize">
                    {skill.category === "growth"
                      ? "CMS / SEO"
                      : skill.category}
                  </p>
                </div>
              </div>

              {/* Proficiency */}
              <div className="mt-4">
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="text-foreground font-semibold tabular-nums">
                    {skill.level}%
                  </span>
                </div>
                <div className="bg-muted h-1.5 overflow-hidden rounded-full">
                  <div
                    className="from-primary to-[#13fdfd] h-full rounded-full bg-gradient-to-r transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
