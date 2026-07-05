import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Jeevanam" },
      { name: "description", content: "Upcoming medical camps, retreats, youth meetings, women's fellowship and mission trips." },
      { property: "og:url", content: "/events" },
    ],
    links: [{ rel: "canonical", href: "/events" }],
  }),
  component: Events,
});

const upcoming = [
  { d: "12", m: "Jul", y: "2026", t: "Free Medical Camp — Warangal", p: "Community Hall, Warangal", time: "8:00 AM – 4:00 PM", tag: "Medical" },
  { d: "20", m: "Jul", y: "2026", t: "Youth Retreat — Songs of Ascent", p: "Yercaud Hills", time: "3 days", tag: "Retreat" },
  { d: "03", m: "Aug", y: "2026", t: "Village Bible Teaching Weekend", p: "Nalgonda District", time: "Fri – Sun", tag: "Teaching" },
  { d: "17", m: "Aug", y: "2026", t: "Women's Fellowship — Ruth", p: "Jeevanam Hall, Hyderabad", time: "10:00 AM", tag: "Women's" },
  { d: "05", m: "Sep", y: "2026", t: "Children Sports Day + Health Camp", p: "Karimnagar Ground", time: "All day", tag: "Children" },
  { d: "22", m: "Sep", y: "2026", t: "Mission Trip — Nepal Border", p: "Departs Hyderabad", time: "7 days", tag: "Mission" },
];

function Events() {
  return (
    <>
      <section className="pt-40 pb-20 md:pt-56 bg-background">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Events</p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95]">
              Come and be part of <em className="italic text-gold-gradient not-italic">the story.</em>
            </h1>
          </Reveal>

          {/* Alternating zigzag list */}
          <div className="grid gap-8">
            {upcoming.map((e, i) => (
              <Reveal key={e.t} delay={i * 0.05}>
                <motion.article
                  whileHover={{ y: -4 }}
                  className={`group relative overflow-hidden rounded-[2.5rem] border border-border p-8 md:p-12 ${
                    i % 2 === 0 ? "gradient-warm" : "bg-card"
                  }`}
                >
                  <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
                    <div className={`grid h-32 w-32 place-items-center rounded-[2rem] ${i % 2 === 0 ? "bg-card" : "gradient-warm"}`}>
                      <div className="text-center">
                        <p className="font-display text-5xl leading-none">{e.d}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">{e.m} · {e.y}</p>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="inline-block rounded-full bg-[color:var(--ink)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--gold)]">{e.tag}</p>
                      <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">{e.t}</h3>
                      <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {e.p}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" /> {e.time}</span>
                      </div>
                    </div>
                    <button className="justify-self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 md:justify-self-end">
                      Register
                    </button>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex items-center gap-3 rounded-3xl border border-dashed border-[color:var(--gold)] bg-[color:var(--gold)]/10 p-6 text-sm text-foreground/80">
            <CalendarDays className="h-5 w-5 text-[color:var(--gold)]" />
            Subscribe to our calendar or newsletter to get every event as it opens.
          </Reveal>
        </div>
      </section>
    </>
  );
}
