import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import medical from "@/assets/medical-camp.jpg";
import children from "@/assets/children-teaching.jpg";
import communityFood from "@/assets/community-food.jpg";
import homeVisit from "@/assets/home-visit.jpg";
import worship from "@/assets/worship.jpg";
import handsBible from "@/assets/hands-bible.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Trust Projects — Jeevanam" },
      { name: "description", content: "Education support, medical aid, women's empowerment, clean water, scholarships, disaster relief — active projects and their impact." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  { t: "Clean water for 40 villages", img: communityFood, goal: "40 boreholes", impact: "22 dug", area: "Warangal" },
  { t: "Girl child scholarships", img: children, goal: "500 girls", impact: "312 supported", area: "Nalgonda" },
  { t: "Rural medical van", img: medical, goal: "1 mobile unit", impact: "68% funded", area: "Mahbubnagar" },
  { t: "Widow monthly support", img: homeVisit, goal: "200 widows", impact: "146 supported", area: "Karimnagar" },
  { t: "Village Bible teacher training", img: handsBible, goal: "80 teachers", impact: "52 trained", area: "Statewide" },
  { t: "Community centre rebuild", img: worship, goal: "3 halls", impact: "1 opened", area: "Adilabad" },
];

function Projects() {
  return (
    <section className="bg-background pb-24 pt-40 md:pt-56">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-14 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Trust projects</p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95]">
            Where the <em className="italic text-gold-gradient not-italic">work</em> is happening.
          </h1>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <article className="group grid grid-cols-[auto_1fr] gap-6 rounded-[2rem] border border-border bg-card p-6 hover:shadow-2xl transition-shadow">
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-2xl">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--brown)]">{p.area}</p>
                  <h3 className="mt-1 font-display text-2xl leading-tight">{p.t}</h3>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-muted px-3 py-1">Goal: {p.goal}</span>
                    <span className="rounded-full bg-[color:var(--gold)]/15 px-3 py-1 text-[color:var(--brown)] font-semibold">Impact: {p.impact}</span>
                  </div>
                  <button className="mt-5 text-sm font-semibold link-underline">Support project →</button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
