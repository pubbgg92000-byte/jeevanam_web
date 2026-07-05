import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import handsBible from "@/assets/hands-bible.jpg";
import worship from "@/assets/worship.jpg";
import medical from "@/assets/medical-camp.jpg";
import homeVisit from "@/assets/home-visit.jpg";
import children from "@/assets/children-teaching.jpg";
import { useState } from "react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Jeevanam" },
      { name: "description", content: "Reflections on faith, health, community, and life on the mission field." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { t: "On praying with strangers", cat: "Faith", date: "Jun 24, 2026", img: homeVisit, excerpt: "There is a specific loneliness that only prayer can meet. We learned this at a stranger's kitchen table." },
  { t: "The quiet arithmetic of healing", cat: "Health", date: "Jun 12, 2026", img: medical, excerpt: "Why we count follow-ups, not just first visits." },
  { t: "Teaching a village to read the Book", cat: "Teaching", date: "May 30, 2026", img: children, excerpt: "Literacy is a spiritual discipline. Here's what we've learned." },
  { t: "When worship happens under a tarp", cat: "Community", date: "May 14, 2026", img: worship, excerpt: "Notes from a rain-drenched youth retreat." },
  { t: "The Bible on the bedside table", cat: "Faith", date: "Apr 28, 2026", img: handsBible, excerpt: "A small habit that keeps a family soft." },
];
const cats = ["All", "Faith", "Health", "Teaching", "Community"];

function Blog() {
  const [cat, setCat] = useState("All");
  const shown = cat === "All" ? posts : posts.filter((p) => p.cat === cat);
  const [feature, ...rest] = shown;

  return (
    <section className="bg-background pb-24 pt-40 md:pt-56">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Journal</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.95]">
              Notes from <em className="italic text-gold-gradient not-italic">the field.</em>
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${cat === c ? "bg-[color:var(--ink)] text-[color:var(--gold)]" : "border border-border text-muted-foreground hover:text-foreground"}`}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {feature && (
          <Reveal>
            <article className="group grid gap-8 rounded-[2.5rem] border border-border bg-card p-6 md:grid-cols-2 md:p-10">
              <div className="overflow-hidden rounded-[2rem]">
                <img src={feature.img} alt={feature.t} loading="lazy" className="h-[380px] w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.22em] text-[color:var(--gold)]">{feature.cat} · {feature.date}</p>
                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{feature.t}</h2>
                <p className="mt-6 text-lg text-muted-foreground">{feature.excerpt}</p>
                <button className="mt-6 self-start text-sm font-semibold link-underline">Read →</button>
              </div>
            </article>
          </Reveal>
        )}

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06} as="article" className="group">
              <div className="overflow-hidden rounded-3xl">
                <img src={p.img} alt={p.t} loading="lazy" className="h-64 w-full object-cover transition-transform duration-[1.4s] group-hover:scale-105" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[color:var(--brown)]">{p.cat} · {p.date}</p>
              <h3 className="mt-2 font-display text-2xl leading-tight">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
