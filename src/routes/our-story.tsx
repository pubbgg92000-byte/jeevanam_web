import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { images } from "@/lib/images";
import { ArrowRight, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — Rev. Pastor & Mrs. · Jeevanam" },
      { name: "description", content: "The husband-and-wife team behind Jeevanam — and how a small home gathering in Hyderabad became a trust that serves the poor, sick, and forgotten." },
      { property: "og:title", content: "Our Story — Jeevanam" },
      { property: "og:description", content: "How a small home gathering grew into a community trust." },
      { property: "og:url", content: "/our-story" },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-56 gradient-warm">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Our story</p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95] text-balance">
              A small home. <em className="italic text-gold-gradient not-italic">A stubborn hope.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              It began with a kettle of tea and eight neighbours in a Secunderabad living room.
              Twenty years on, Jeevanam is a family of ministries and a registered trust — but
              the tea, and the tenderness, is still the same.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pastor & wife */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {[
              { img: images.pastor, name: "Rev. Dr. — Founder", role: "Senior Pastor",
                bio: "Trained as a physician before he was a pastor, he spent his early years in rural Telangana — where he watched families choose between medicine and a meal. Jeevanam is his answer to that impossible choice." },
              { img: images.teacher, name: "Mrs. — Co-founder", role: "Community & Teaching Ministry",
                bio: "A former schoolteacher who leads Bible study, women's groups, slum outreach and awareness programs — walking with families of every age, from children to elders." },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-[2rem] border border-border bg-card">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">{p.role}</p>
                    <p className="mt-2 font-display text-3xl text-foreground">{p.name}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{p.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[color:var(--cream)] py-24 dark:bg-card md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">The journey</p>
            <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">Twenty small years.</h2>
          </Reveal>
          <ol className="relative space-y-10 border-l border-border pl-8">
            {[
              { y: "2005", t: "A living room", d: "The first home gathering — eight people, one kettle of tea." },
              { y: "2009", t: "First medical camp", d: "A weekend clinic in Nalgonda. 300 patients. One old jeep." },
              { y: "2014", t: "Three churches", d: "Small congregations open in Secunderabad, Kukatpally, L.B. Nagar." },
              { y: "2018", t: "Jeevanam Trust", d: "Registered as a charitable trust. 80G and FCRA follow." },
              { y: "2024", t: "16 ministries", d: "Sixteen quiet ways to show up — for whoever needs it." },
            ].map((s, i) => (
              <Reveal key={s.y} delay={i * 0.06}>
                <li className="relative">
                  <span className="absolute -left-[42px] top-1 grid h-6 w-6 place-items-center rounded-full gradient-gold text-[10px] font-bold text-[color:var(--ink)]">•</span>
                  <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">{s.y}</p>
                  <p className="mt-1 font-display text-2xl text-foreground">{s.t}</p>
                  <p className="mt-1 text-muted-foreground">{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-background py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Heart, t: "Kindness first", d: "Before doctrine, before difference." },
              { icon: Users, t: "For everyone", d: "No background required. No conditions." },
              { icon: ArrowRight, t: "Show up, stay long", d: "Especially after the cameras leave." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06} className="rounded-3xl border border-border bg-card p-8">
                <v.icon className="h-7 w-7 text-[color:var(--gold)]" />
                <p className="mt-6 font-display text-2xl text-foreground">{v.t}</p>
                <p className="mt-2 text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-ink py-20 text-[color:var(--cream)]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 text-center md:px-10">
          <Reveal>
            <p className="font-display text-4xl leading-snug md:text-5xl">
              Want to walk a little of this road with us?
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/get-involved" className="rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--ink)]">Get involved</Link>
              <Link to="/trust" className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium">About the trust</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
