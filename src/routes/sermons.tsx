import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { Play, Download, Search, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/sermons")({
  head: () => ({
    meta: [
      { title: "Sermons — Jeevanam" },
      { name: "description", content: "Latest sermons, audio & video messages, and teaching series from Jeevanam Ministries." },
      { property: "og:url", content: "/sermons" },
    ],
    links: [{ rel: "canonical", href: "/sermons" }],
  }),
  component: Sermons,
});

const sermons = [
  { t: "The God who visits", s: "Pastor Samuel Raj", d: "Luke 1:68", dur: "38 min", tag: "Advent" },
  { t: "Healing is a slow miracle", s: "Dr. Ananya M.", d: "Mark 5:25", dur: "42 min", tag: "Healing" },
  { t: "When a widow gives her all", s: "Priya Joseph", d: "Mark 12:41", dur: "29 min", tag: "Giving" },
  { t: "The house on the rock", s: "Pastor Samuel Raj", d: "Matthew 7:24", dur: "35 min", tag: "Discipleship" },
  { t: "Songs from the dust", s: "Daniel V.", d: "Psalm 40", dur: "31 min", tag: "Prayer" },
  { t: "A ministry of tears", s: "Pastor Samuel Raj", d: "John 11:35", dur: "45 min", tag: "Grief" },
];

function Sermons() {
  const [q, setQ] = useState("");
  const shown = sermons.filter((s) => (s.t + s.s + s.tag).toLowerCase().includes(q.toLowerCase()));

  return (
    <section className="gradient-ink pb-24 pt-40 text-[color:var(--cream)] md:pt-56">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">Sermons</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95]">
            The <em className="italic text-shimmer">Word,</em> made portable.
          </h1>
          <p className="mt-6 max-w-xl text-[color:var(--cream)]/75 text-lg">
            Free audio and video from every service and retreat. Download, share,
            listen while you cook. That's how we've always done it.
          </p>
        </Reveal>

        <div className="mb-10 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
          <Search className="h-4 w-4 text-[color:var(--gold)]" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title, speaker or theme"
            className="w-full bg-transparent text-sm text-[color:var(--cream)] outline-none placeholder:text-[color:var(--cream)]/40"
          />
        </div>

        <div className="grid gap-4">
          {shown.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.04}>
              <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10 md:p-6">
                <button className="grid h-14 w-14 shrink-0 place-items-center rounded-full gradient-gold text-[color:var(--ink)] transition-transform group-hover:scale-105">
                  <Play className="h-5 w-5 fill-current" />
                </button>
                <div className="min-w-0">
                  <p className="truncate font-display text-2xl">{s.t}</p>
                  <p className="mt-1 text-xs text-[color:var(--cream)]/60">
                    {s.s} · {s.d} · <span className="text-[color:var(--gold)]">{s.tag}</span>
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs text-[color:var(--cream)]/60">
                  <span className="hidden items-center gap-1.5 sm:inline-flex"><Clock className="h-3.5 w-3.5" /> {s.dur}</span>
                  <button aria-label="Download sermon" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]">
                    <Download className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
