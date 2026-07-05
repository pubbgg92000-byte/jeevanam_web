import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import homeVisit from "@/assets/home-visit.jpg";
import children from "@/assets/children-teaching.jpg";
import medical from "@/assets/medical-camp.jpg";
import communityFood from "@/assets/community-food.jpg";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Jeevanam" },
      { name: "description", content: "Real people, real transformation — stories of healing, education, and hope from the field." },
      { property: "og:url", content: "/stories" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: Stories,
});

const stories = [
  { name: "Lakshmi's second sight", loc: "Nalgonda · 2024", img: medical, excerpt: "At 72, Lakshmi thought blindness was inevitable. A single cataract surgery — free, in a mobile van — gave her back her grandchildren's faces." },
  { name: "The classroom under the neem", loc: "Karimnagar · 2023", img: children, excerpt: "When the government school closed, twelve children still gathered under the tree. Priya moved her Sunday school to their weekdays." },
  { name: "The knock that changed a home", loc: "Warangal · 2025", img: homeVisit, excerpt: "Ravi hadn't spoken to his wife in three months. One home visit later, the tea was for three of them." },
  { name: "A meal, a memory", loc: "Adilabad · 2024", img: communityFood, excerpt: "For Kamala, the weekly food packet is more than groceries. It is the reminder that someone remembered her name." },
];

function Stories() {
  return (
    <section className="bg-[color:var(--cream)] pb-24 pt-40 md:pt-56">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal className="mb-16 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Success stories</p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95]">
            Real people. <em className="italic text-gold-gradient not-italic">Real change.</em>
          </h1>
        </Reveal>

        <div className="space-y-24">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <article className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>:first-child]:order-2" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-[2rem] gradient-gold opacity-15 blur-2xl" />
                  <img src={s.img} alt={s.name} loading="lazy" className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-xl" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brown)]">{s.loc}</p>
                  <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">{s.name}</h2>
                  <p className="mt-6 font-display text-xl italic leading-snug text-muted-foreground">"{s.excerpt}"</p>
                  <button className="mt-6 text-sm font-semibold link-underline">Read the full story →</button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
