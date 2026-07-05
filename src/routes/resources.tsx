import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { FileText, BookMarked, Video, Sparkles, Notebook, Book } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Jeevanam" },
      { name: "description", content: "Free Bible studies, devotionals, teaching notes and downloads." },
      { property: "og:url", content: "/resources" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

const kinds = [
  { icon: Book, t: "Bible Studies", c: 32 },
  { icon: FileText, t: "PDF Downloads", c: 84 },
  { icon: BookMarked, t: "Devotionals", c: 120 },
  { icon: Notebook, t: "Teaching Notes", c: 46 },
  { icon: Video, t: "Videos", c: 58 },
  { icon: Sparkles, t: "Articles", c: 210 },
];

function Resources() {
  return (
    <section className="bg-background pb-24 pt-40 md:pt-56">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Resources</p>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95]">
            Every word we teach, <em className="italic text-gold-gradient not-italic">yours to keep.</em>
          </h1>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {kinds.map((k, i) => (
            <Reveal key={k.t} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 transition-shadow hover:shadow-2xl">
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[color:var(--gold)]/15 blur-2xl transition-opacity group-hover:opacity-100" />
                <k.icon className="relative h-8 w-8 text-[color:var(--gold)]" />
                <p className="relative mt-8 flex items-baseline gap-3 font-display">
                  <span className="text-6xl">{k.c}</span>
                  <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">free</span>
                </p>
                <p className="relative mt-2 text-xl font-display">{k.t}</p>
                <button className="relative mt-6 inline-flex text-sm font-semibold link-underline">Browse library →</button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 rounded-[2.5rem] gradient-warm p-10 md:p-16">
          <p className="font-display text-3xl leading-snug md:text-4xl max-w-2xl">
            A monthly devotional in Telugu, Hindi and English — delivered to your inbox for free.
          </p>
          <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input type="email" required placeholder="you@email.com" className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-[color:var(--gold)]" />
            <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Subscribe</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
