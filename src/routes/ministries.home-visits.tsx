import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import homeVisit from "@/assets/home-visit.jpg";
import { Home, Phone, Heart, Clock, Users, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/ministries/home-visits")({
  head: () => ({
    meta: [
      { title: "Home Visits — Jeevanam" },
      { name: "description", content: "Prayer, counsel and quiet presence brought to your doorstep. Request a home visit — free, confidential, no strings attached." },
      { property: "og:url", content: "/ministries/home-visits" },
    ],
    links: [{ rel: "canonical", href: "/ministries/home-visits" }],
  }),
  component: HomeVisits,
});

function HomeVisits() {
  return (
    <>
      {/* Immersive full-bleed hero with soft blurred backdrop */}
      <section className="relative min-h-[95svh] overflow-hidden">
        <img src={homeVisit} alt="Pastor praying with an elderly woman in her home" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[color:var(--ink)]/70" />
        <div className="relative z-10 mx-auto flex min-h-[95svh] max-w-4xl flex-col justify-center px-6 pt-32 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--gold)]">Home visits</p>
            <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] font-light leading-[0.9] text-[color:var(--cream)]">
              We come <em className="italic text-shimmer">to you.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--cream)]/85 text-balance">
              Sometimes the church is not a building. It's the sound of a doorbell,
              a warm cup of chai, and someone who says: <em>let me pray with you before I go.</em>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Journey — horizontal steps */}
      <section className="bg-[color:var(--cream)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">How it works</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl">Four gentle steps.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "You ask", d: "Fill the short form or call our prayer line." },
              { n: "02", t: "We call", d: "A pastor phones within 24 hours to understand." },
              { n: "03", t: "We visit", d: "A small team comes at a time that suits you." },
              { n: "04", t: "We stay", d: "Follow-up prayer and calls for as long as helpful." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08} className="relative rounded-3xl border border-border bg-card p-6">
                <p className="font-display text-6xl text-[color:var(--gold)]/40">{s.n}</p>
                <p className="mt-4 font-display text-2xl">{s.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                {i < 3 && <ChevronRight className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-[color:var(--gold)] md:block" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kinds of visits */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl">Every kind of home.</h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Grief. Illness. Celebration. Confusion. Loneliness. Whatever your
              home holds today — we can hold it with you.
            </p>
          </Reveal>
          <div className="grid gap-3">
            {[
              [Home, "Home prayer", "For families, elders, newcomers to faith."],
              [Heart, "Hospital visits", "Bedside prayer, family support."],
              [Users, "Family counselling", "Confidential, non-judgmental."],
              [Clock, "Emergency visits", "24/7 for grief, crisis, urgent prayer."],
            ].map(([Icon, t, d], i) => {
              const IconC = Icon as React.ComponentType<{ className?: string }>;
              return (
              <Reveal key={t as string} delay={i * 0.05}
                className="group flex items-center gap-6 rounded-2xl border border-border bg-card p-5 transition-all hover:border-[color:var(--gold)] hover:bg-muted/40"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl gradient-warm">
                  <IconC className="h-6 w-6 text-[color:var(--ink)]" />
                </div>
                <div className="min-w-0">
                  <p className="font-display text-xl">{t as string}</p>
                  <p className="text-sm text-muted-foreground">{d as string}</p>
                </div>
              </Reveal>
            );})}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-ink py-24 text-[color:var(--cream)] md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p className="font-display text-4xl leading-snug md:text-5xl">
              Book a home visit — free, confidential, and offered in love.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--ink)]">
                Request a visit
              </Link>
              <a href="tel:+910000000000" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium">
                <Phone className="h-4 w-4" /> Prayer hotline
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
