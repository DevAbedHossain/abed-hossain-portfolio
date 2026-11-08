"use client";

import { useState } from "react";
import { MapPin, Mail, Send, Clock3 } from "lucide-react";

const WHATSAPP_NUMBER = "8801625720824"; // wa.me format (no +)
const EMAIL = "devabedhossain@gmail.com";

const contactCards = [
  {
    label: "WhatsApp",
    value: "+880 1625-720824",
    hint: "Fastest way to reach me",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: "whatsapp" as const,
    color: "#25d366",
    external: true,
  },
  {
    label: "Email",
    value: EMAIL,
    hint: "For detailed project briefs",
    href: `mailto:${EMAIL}`,
    icon: Mail,
    color: "#139bfd",
    external: false,
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh (GMT+6)",
    hint: "Working worldwide, remotely",
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
    icon: MapPin,
    color: "#ff494a",
    external: true,
  },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.173.232-.298.347-.497.115-.198.059-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 3.354c-.01-.001-.02-.001-.03 0m.03 0c.003 0 .004 0 .004 0z" />
    <path d="M11.999 21.999a9.9 9.9 0 0 1-5-1.35l-.36-.213-3.75.75.75-3.66-.235-.375a9.86 9.86 0 0 1-1.51-5.26c-.002-5.45 4.435-9.884 9.888-9.884a9.82 9.82 0 0 1 6.984 2.896 9.767 9.767 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.883 9.884m8.412-18.297A11.874 11.874 0 0 0 11.999.359c-6.558 0-11.904 5.34-11.9 11.897a11.9 11.9 0 0 0 1.596 5.96L.102 24l5.684-1.49a11.9 11.9 0 0 0 5.68 1.444h.005c6.554 0 11.896-5.34 11.9-11.897a11.8 11.8 0 0 0-3.494-8.42" />
  </svg>
);

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // No backend yet — compose the message in the visitor's email client
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const mailtoSubject = subject || `Portfolio inquiry from ${name}`;
    const mailtoBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 lg:py-24">
      {/* Decorative glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="bg-primary/10 absolute top-1/3 -right-40 size-[420px] rounded-full blur-[140px]" />
        <div className="bg-[#13fdfd]/10 absolute -bottom-32 -left-32 size-[380px] rounded-full blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — info */}
          <div>
            <span className="theme-gradient text-sm font-bold uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="theme-gradient">Great Together</span>
            </h2>
            <p className="text-muted-foreground mt-5 max-w-md leading-relaxed">
              Have a project in mind, a question, or just want to say hi? My
              inbox is always open — I usually reply within 24 hours.
            </p>

            {/* Response time badge */}
            <div className="bg-card mt-6 inline-flex items-center gap-2.5 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
              <Clock3 className="text-primary size-4" />
              Typical response time: under 24 hours
            </div>

            {/* Contact cards */}
            <div className="mt-8 space-y-4">
              {contactCards.map(({ label, value, hint, href, icon, color, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group bg-card flex items-center gap-4 rounded-2xl border border-border p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span
                    className="flex size-12 shrink-0 items-center justify-center rounded-xl text-white shadow-sm transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color }}
                  >
                    {icon === "whatsapp" ? (
                      <WhatsAppIcon className="size-6" />
                    ) : (
                      (() => {
                        const Icon = icon;
                        return <Icon className="size-6" />;
                      })()
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-muted-foreground text-xs">{label}</p>
                    <p className="text-foreground truncate font-semibold">
                      {value}
                    </p>
                    <p className="text-muted-foreground text-xs">{hint}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card rounded-3xl border border-border p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold">Send me a message</h3>
            <p className="text-muted-foreground mt-1 text-sm">
              Fill in the form and your email app will open with the message
              ready to send.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Your Name{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="bg-background placeholder:text-muted-foreground/60 focus:ring-primary/40 focus:border-primary w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-4"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-foreground mb-2 block text-sm font-medium"
                  >
                    Your Email{" "}
                    <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="bg-background placeholder:text-muted-foreground/60 focus:ring-primary/40 focus:border-primary w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-4"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Project inquiry"
                  className="bg-background placeholder:text-muted-foreground/60 focus:ring-primary/40 focus:border-primary w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-4"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-foreground mb-2 block text-sm font-medium"
                >
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project…"
                  className="bg-background placeholder:text-muted-foreground/60 focus:ring-primary/40 focus:border-primary w-full resize-none rounded-xl border border-border px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-4"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/85 focus:ring-primary/40 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold shadow-md shadow-primary/25 transition-all duration-300 focus:ring-4 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
