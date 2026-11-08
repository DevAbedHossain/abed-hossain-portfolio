import Image from "next/image";
import { ArrowRight, Calendar, Clock3 } from "lucide-react";

const posts = [
  {
    slug: "why-nextjs-in-2026",
    title: "Why Next.js is the Right Choice for Your Next Project",
    excerpt:
      "Server components, streaming and effortless APIs — here's how Next.js keeps shipping features while your codebase stays simple and fast.",
    category: "Next.js",
    date: "Nov 2, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80&auto=format&fit=crop",
    categoryColor: "#139bfd",
  },
  {
    slug: "mongodb-aggregation-pipelines",
    title: "5 MongoDB Aggregation Queries Every Developer Should Know",
    excerpt:
      "From $lookup to $bucket — practical aggregation patterns I use in production dashboards to turn raw data into real insights.",
    category: "Backend",
    date: "Oct 21, 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80&auto=format&fit=crop",
    categoryColor: "#3eb75e",
  },
  {
    slug: "seo-for-developers",
    title: "SEO for Developers: Rank Higher Without Extra Content",
    excerpt:
      "Technical SEO wins you can ship today — Core Web Vitals, structured data and clean semantics that make Google love your site.",
    category: "SEO",
    date: "Oct 9, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&q=80&auto=format&fit=crop",
    categoryColor: "#ff494a",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="theme-gradient text-sm font-bold uppercase tracking-widest">
            Blog &amp; Insights
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            From <span className="theme-gradient">My Blog</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
            Thoughts, tutorials and lessons learned while building for the web
            — written for developers who like practical over theoretical.
          </p>
        </div>

        {/* Posts */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-card relative flex flex-col overflow-hidden rounded-2xl border border-border shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden sm:h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Readability gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  aria-hidden="true"
                />
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white shadow-sm"
                  style={{ backgroundColor: post.categoryColor }}
                >
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                {/* Meta */}
                <div className="text-muted-foreground flex items-center gap-4 text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="size-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="group-hover:text-primary mt-3 line-clamp-2 text-lg font-bold transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Footer — author + read more */}
                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/abed-hossain.png"
                      alt="Abed Hossain"
                      width={36}
                      height={36}
                      className="ring-border size-9 rounded-full object-cover ring-2"
                    />
                    <div>
                      <p className="text-sm font-semibold">Abed Hossain</p>
                      <p className="text-muted-foreground text-xs">
                        Developer
                      </p>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="text-primary inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300 hover:opacity-80"
                  >
                    Read More
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
          >
            View all posts
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
