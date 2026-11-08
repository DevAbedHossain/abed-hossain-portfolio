import Logo from "@/components/shared/Logo";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "MERN Stack Apps",
  "UI / UX Design",
  "SEO Optimization",
  "WordPress Development",
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.786zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/8801625720824",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.173.232-.298.347-.497.115-.198.059-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 3.354c-.01-.001-.02-.001-.03 0m.03 0c.003 0 .004 0 .004 0zM11.999 21.999a9.9 9.9 0 0 1-5-1.35l-.36-.213-3.75.75.75-3.66-.235-.375a9.86 9.86 0 0 1-1.51-5.26c-.002-5.45 4.435-9.884 9.888-9.884a9.82 9.82 0 0 1 6.984 2.896 9.767 9.767 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.883 9.884m8.412-18.297A11.874 11.874 0 0 0 11.999.359c-6.558 0-11.904 5.34-11.9 11.897a11.9 11.9 0 0 0 1.596 5.96L.102 24l5.684-1.49a11.9 11.9 0 0 0 5.68 1.444h.005c6.554 0 11.896-5.34 11.9-11.897a11.8 11.8 0 0 0-3.494-8.42",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

const copyrightYear = 2026;

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="space-y-5">
            <Logo />
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Full-stack web developer crafting fast, accessible and
              user-friendly web experiences from Dhaka to the world.
            </p>
            {/* Socials */}
            <ul className="flex items-center gap-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-primary-foreground hover:bg-primary ring-border flex size-9 items-center justify-center rounded-full ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:ring-primary"
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

          {/* Quick links */}
          <nav>
            <h3 className="text-foreground text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary inline-flex items-center gap-1.5 text-sm transition-all duration-300 hover:translate-x-1"
                  >
                    <ArrowRight className="size-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-foreground text-sm font-bold uppercase tracking-wider">
              What I Do
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-muted-foreground text-sm"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-foreground text-sm font-bold uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="mailto:devabedhossain@gmail.com"
                  className="group flex items-start gap-3"
                >
                  <span className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300">
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="text-muted-foreground block text-xs">
                      Email
                    </span>
                    <span className="block truncate text-sm font-medium">
                      devabedhossain@gmail.com
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801625720824"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3"
                >
                  <span className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-300">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="text-muted-foreground block text-xs">
                      WhatsApp
                    </span>
                    <span className="block text-sm font-medium">
                      +880 1625-720824
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                  <MapPin className="size-4" />
                </span>
                <span>
                  <span className="text-muted-foreground block text-xs">
                    Location
                  </span>
                  <span className="block text-sm font-medium">
                    Dhaka, Bangladesh
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-border/60 flex flex-col items-center justify-between gap-4 border-t py-6 sm:flex-row">
          <p className="text-muted-foreground text-center text-xs sm:text-sm">
            © {copyrightYear}{" "}
            <span className="text-foreground font-semibold">Abed Hossain</span>.
            All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Built with{" "}
            <span className="text-foreground font-medium">Next.js</span> &amp;{" "}
            <span className="text-foreground font-medium">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
