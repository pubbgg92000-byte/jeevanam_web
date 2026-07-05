import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jeevanam" },
      { name: "description", content: "Reach us by phone, WhatsApp, email, or come by the office. Prayer hotline available 24/7." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { isSubmitting } } = useForm();

  return (
    <>
      <section className="pt-40 pb-16 md:pt-56 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">Contact · Hyderabad</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.95] text-foreground">
              Let's <em className="italic text-gold-gradient not-italic">talk.</em>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Three churches, one open door. Write to us, ask for prayer, or drop by any
              Sunday — we'd love to meet you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-5 md:px-10">
          {/* Contact info grid — asymmetric bento */}
          <Reveal className="min-w-0 md:col-span-2">
            <div className="grid min-w-0 gap-4">
              {[
                { icon: Phone, t: "Call", d: "Available on request", tone: "gold" },
                { icon: MessageCircle, t: "WhatsApp", d: "Available on request", tone: "sage" },
                { icon: Mail, t: "Email", d: "hello@jeevanam.org", tone: "sky" },
                { icon: MapPin, t: "Visit", d: "Jeevanam House · Hyderabad, Telangana", tone: "gold" },
                { icon: Clock, t: "Prayer hotline", d: "24 / 7 — send us a message anytime", tone: "sage" },
              ].map((c) => (
                <div key={c.t} className="group flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:border-[color:var(--gold)] hover:shadow-md">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                    c.tone === "gold" ? "bg-[color:var(--gold)]/20" :
                    c.tone === "sage" ? "bg-[color:var(--sage)]/25" :
                    "bg-[color:var(--sky)]/30"
                  }`}>
                    <c.icon className="h-5 w-5 text-[color:var(--ink)] dark:text-[color:var(--cream)]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{c.t}</p>
                    <p className="truncate font-display text-lg text-foreground">{c.d}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Three churches */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Our churches</p>
              <ul className="mt-3 space-y-3 text-sm">
                {[
                  { n: "Jeevanam Central", a: "Secunderabad" },
                  { n: "Jeevanam West", a: "Kukatpally" },
                  { n: "Jeevanam South", a: "L.B. Nagar" },
                ].map((c) => (
                  <li key={c.n} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-b-0 last:pb-0">
                    <span className="font-display text-base text-foreground">{c.n}</span>
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="md:col-span-3">
            {sent ? (
              <div className="grid h-full place-items-center rounded-[2rem] border border-border gradient-warm p-12 text-center">
                <div>
                  <p className="font-display text-4xl">Message received.</p>
                  <p className="mt-3 text-muted-foreground">We'll reply within one working day.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(async () => { await new Promise((r) => setTimeout(r, 500)); setSent(true); })}
                className="rounded-[2rem] border border-border bg-card p-8 md:p-10 space-y-5"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input {...register("name")} required placeholder="Your name" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
                  <input {...register("email")} required type="email" placeholder="Email" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
                </div>
                <input {...register("subject")} required placeholder="Subject" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
                <textarea {...register("message")} required rows={6} placeholder="How can we help?" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
                <button disabled={isSubmitting as boolean} className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">
                  {isSubmitting ? "Sending…" : "Send message"}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal>
            <div className="overflow-hidden rounded-[2.5rem] border border-border shadow-xl">
              <iframe
                title="Jeevanam location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=78.35%2C17.35%2C78.55%2C17.50&layer=mapnik"
                className="h-[480px] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
