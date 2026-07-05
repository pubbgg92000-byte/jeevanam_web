import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { ShieldCheck, FileText, Users, Handshake, Building, Leaf } from "lucide-react";
import { images } from "@/lib/images";

export const Route = createFileRoute("/trust")({
  head: () => ({
    meta: [
      { title: "Jeevanam Trust — Registered NGO" },
      { name: "description", content: "A registered charitable trust with FCRA and 80G, working in education, healthcare, women empowerment, and rural development." },
      { property: "og:url", content: "/trust" },
    ],
    links: [{ rel: "canonical", href: "/trust" }],
  }),
  component: Trust,
});

function Trust() {
  return (
    <>
      {/* Distinctly NGO-professional hero — grid layout */}
      <section className="relative bg-background pt-40 pb-20 md:pt-56">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-[color:var(--sage)]" /> Registered · 80G · FCRA
              </p>
              <h1 className="mt-8 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95]">
                Jeevanam <span className="text-gold-gradient">Trust.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                The charitable arm of Jeevanam. A registered public trust working
                across education, healthcare, women empowerment and village
                development — with radical transparency and independent audit.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="md:col-span-4">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { l: "Status", v: "Registered" },
                  { l: "80G Certified", v: "Yes" },
                  { l: "FCRA", v: "Registered" },
                  { l: "Audit", v: "Independent" },
                ].map((s) => (
                  <div key={s.l} className="rounded-2xl border border-border bg-card p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{s.l}</p>
                    <p className="mt-1 font-display text-lg text-foreground">{s.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bg-[color:var(--cream)] py-24 dark:bg-card md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="font-display text-5xl text-foreground md:text-6xl">Four focus areas.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Building, t: "Education", d: "Scholarships, tuition centres, digital classrooms." },
              { icon: Users, t: "Healthcare", d: "Rural camps, hospital tie-ups, mental health." },
              { icon: Handshake, t: "Women's dignity", d: "Livelihoods, tailoring units, self-help groups." },
              { icon: Leaf, t: "Rural development", d: "Clean water, sanitation, tree plantation." },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 0.06} className="rounded-3xl border border-border bg-background p-8 hover:shadow-xl transition-shadow">
                <f.icon className="h-8 w-8 text-[color:var(--sage)]" />
                <p className="mt-6 font-display text-2xl text-foreground">{f.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">Transparency</p>
            <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">Every rupee, in the open.</h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              We publish independently-audited annual reports, project updates and open
              board minutes. Trust is not a slogan — it's a habit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
                <FileText className="h-4 w-4" /> Latest annual report
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground">
                Financial statements
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-[2rem]">
              <img src={images.communityFood} alt="Community food distribution" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-background/90 p-5 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Featured project</p>
                <p className="mt-1 font-display text-2xl text-foreground">Clean water for our villages</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-ink py-24 text-[color:var(--cream)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 text-center md:px-10">
          <Reveal>
            <p className="font-display text-4xl leading-snug md:text-5xl">Partner with us — CSR, corporate, foundation.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--ink)]">Become a partner</Link>
              <Link to="/projects" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium">Browse projects</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
