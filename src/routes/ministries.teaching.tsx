import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import children from "@/assets/children-teaching.jpg";
import handsBible from "@/assets/hands-bible.jpg";
import { BookOpen, Download, PlayCircle, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/ministries/teaching")({
  head: () => ({
    meta: [
      { title: "Teaching Ministry — Jeevanam" },
      { name: "description", content: "Bible classes, Sunday schools, leadership training and free downloadable resources for churches and families." },
      { property: "og:url", content: "/ministries/teaching" },
    ],
    links: [{ rel: "canonical", href: "/ministries/teaching" }],
  }),
  component: Teaching,
});

function Teaching() {
  return (
    <>
      {/* Editorial-magazine hero */}
      <section className="relative bg-background pt-40 pb-16 md:pt-56">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Teaching Ministry</p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,8vw,7rem)] font-light leading-[0.9]">
              To teach a child <em className="italic text-gold-gradient not-italic">is to bless a village.</em>
            </h1>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <Reveal delay={0.1} className="md:col-span-2">
              <img src={children} alt="Village children smiling in a Jeevanam classroom" loading="lazy" className="rounded-[2rem] shadow-xl" />
            </Reveal>
            <Reveal delay={0.15} className="flex flex-col justify-center">
              <p className="font-display italic text-2xl leading-snug">
                “Train up a child in the way he should go — and when he is old, he
                will not depart from it.”
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">Proverbs 22:6</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Program list — numbered editorial */}
      <section className="gradient-warm py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-4">
            {[
              ["01", "Bible Classes", "Weekly, in eight local languages, taught in homes and courtyards."],
              ["02", "Sunday School", "Every Sunday. Songs, stories, snacks — the sacred trio."],
              ["03", "Leadership Training", "For pastors, elders and lay leaders in rural churches."],
              ["04", "Youth Teaching", "Doubts welcome. Nothing is off-limits."],
              ["05", "Online Classes", "Recorded and streamed in Telugu, Hindi and English."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.06}
                className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-[color:var(--brown)]/20 py-8 first:border-t-0"
              >
                <p className="font-display text-3xl text-[color:var(--brown)]/70">{n}</p>
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <p className="font-display text-3xl md:text-4xl">{t}</p>
                  <p className="max-w-md text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-12 max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl">Free resources.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Download, print, share. All materials are free forever.</p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Download, t: "Study PDFs", d: "Old & New Testament study guides." },
              { icon: PlayCircle, t: "Video lessons", d: "Short-form teaching for youth groups." },
              { icon: GraduationCap, t: "Certificate courses", d: "8-week discipleship programs." },
            ].map((r, i) => (
              <Reveal key={r.t} delay={i * 0.08}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8"
              >
                <img src={handsBible} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-[0.05]" />
                <div className="relative">
                  <r.icon className="h-8 w-8 text-[color:var(--gold)]" />
                  <p className="mt-6 font-display text-2xl">{r.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
                  <Link to="/resources" className="mt-6 inline-flex text-sm font-semibold link-underline">Browse library →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-ink py-20 text-[color:var(--cream)] text-center">
        <Reveal>
          <BookOpen className="mx-auto h-8 w-8 text-[color:var(--gold)]" />
          <p className="mt-6 mx-auto max-w-2xl px-6 font-display text-3xl leading-snug">
            Enrol your children, your church, or yourself. Learning is a form of worship.
          </p>
          <Link to="/contact" className="mt-8 inline-flex rounded-full gradient-gold px-8 py-4 text-sm font-semibold text-[color:var(--ink)]">Enrol now</Link>
        </Reveal>
      </section>
    </>
  );
}
