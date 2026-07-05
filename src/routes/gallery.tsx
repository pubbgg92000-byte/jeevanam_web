import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { useState } from "react";
import hero from "@/assets/hero-sunrise.jpg";
import worship from "@/assets/worship.jpg";
import medical from "@/assets/medical-camp.jpg";
import handsBible from "@/assets/hands-bible.jpg";
import children from "@/assets/children-teaching.jpg";
import homeVisit from "@/assets/home-visit.jpg";
import communityFood from "@/assets/community-food.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Jeevanam" },
      { name: "description", content: "Photographs from medical camps, teaching sessions, home visits and community outreach." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { src: hero, cat: "Prayer", h: 520, caption: "Sunrise service — Yercaud Hills." },
  { src: medical, cat: "Medical", h: 380, caption: "Village medical camp, 2025." },
  { src: children, cat: "Teaching", h: 460, caption: "Sunday school, Nalgonda." },
  { src: homeVisit, cat: "Home Visits", h: 500, caption: "A quiet afternoon prayer." },
  { src: handsBible, cat: "Prayer", h: 380, caption: "Hands, held in silence." },
  { src: worship, cat: "Events", h: 420, caption: "Youth retreat worship night." },
  { src: communityFood, cat: "Village", h: 460, caption: "Food distribution under the mango tree." },
];
const cats = ["All", "Medical", "Teaching", "Prayer", "Home Visits", "Events", "Village"] as const;

function Gallery() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("All");
  const shown = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <section className="bg-[color:var(--cream)] pb-24 pt-40 md:pt-56">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Gallery</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95]">
            Moments we <em className="italic text-gold-gradient not-italic">will not forget.</em>
          </h1>
        </Reveal>

        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                filter === c ? "bg-[color:var(--ink)] text-[color:var(--gold)]" : "border border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Masonry via columns */}
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {shown.map((it, i) => (
            <Reveal key={i} delay={(i % 6) * 0.04} className="mb-5 break-inside-avoid">
              <figure className="group relative overflow-hidden rounded-3xl">
                <img
                  src={it.src}
                  alt={it.caption}
                  loading="lazy"
                  style={{ height: `${it.h}px` }}
                  className="w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 text-[color:var(--cream)] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--gold)]">{it.cat}</p>
                  <p className="mt-1 font-display text-lg leading-snug [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">{it.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
