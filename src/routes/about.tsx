import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { Compass, Feather, Flame, Heart, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Jeevanam Ministries & Trust · Hyderabad" },
      { name: "description", content: "A ministry born in a Hyderabad living room — three churches, one calling. Led by Rev. Dr., Senior Pastor." },
      { property: "og:title", content: "Our Story — Jeevanam" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { y: "Beginnings", t: "One prayer meeting", d: "A small circle gathers in a Hyderabad living room. The first Jeevanam prayer is prayed — and never stopped." },
  { y: "Healing hands", t: "First medical camp", d: "A visiting doctor treats families under a tarpaulin. Jeevanam Medical Ministry is born." },
  { y: "Every doorstep", t: "Home visits begin", d: "A widow asks for prayer at her door. That knock becomes a weekly rhythm across the city." },
  { y: "Rooted", t: "Three churches", d: "Congregations open in Secunderabad, Kukatpally and L.B. Nagar — three homes, one family." },
  { y: "Registered", t: "Trust formed", d: "Jeevanam Trust is formally registered — bringing transparency, structure and CSR partnerships." },
  { y: "Today", t: "Teaching & beyond", d: "Sunday schools, leadership training and community outreach — carrying the story forward." },
];

const values = [
  { icon: Flame, t: "Faith", d: "We begin every plan on our knees." },
  { icon: Heart, t: "Compassion", d: "The person in front of us is the mission." },
  { icon: Feather, t: "Humility", d: "We stay when the cameras leave." },
  { icon: Compass, t: "Integrity", d: "Every rupee is traceable and audited." },
  { icon: Users, t: "Community", d: "No one heals alone." },
];

function About() {
  return (
    <>
      {/* Editorial hero */}
      <section className="relative overflow-hidden bg-[color:var(--cream)] pt-40 pb-24 dark:bg-background md:pt-56 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-12 md:px-10">
          <Reveal className="md:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">Our story · Hyderabad</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95] text-foreground text-balance">
              A ministry born <em className="italic text-gold-gradient not-italic">in a living room,</em> raised across the city.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Jeevanam means <span className="font-display italic text-foreground">"life."</span>
              From one prayer circle in Hyderabad to three churches and a ministry that walks
              into homes, hospitals and villages — we believe abundant life belongs at every doorstep.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] gradient-gold opacity-30 blur-2xl" />
              <img src={images.handsBible} alt="Hands resting on an open Bible" loading="lazy" className="relative rounded-[2rem] shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur">
                <p className="font-display italic text-lg text-foreground">"I have come that they may have life."</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">John 10:10</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline — vertical rail */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">Our journey</p>
            <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">
              One thread, <em className="italic text-gold-gradient not-italic">many chapters.</em>
            </h2>
          </Reveal>
          <div className="relative mt-16 border-l-2 border-dashed border-[color:var(--gold)]/40 pl-8 md:pl-12">
            {timeline.map((e, i) => (
              <Reveal key={e.y} delay={i * 0.05} className="relative mb-14 last:mb-0">
                <motion.span
                  className="absolute -left-[42px] md:-left-[54px] top-1 grid h-6 w-6 place-items-center rounded-full gradient-gold shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, type: "spring" }}
                >
                  <span className="h-2 w-2 rounded-full bg-[color:var(--ink)]" />
                </motion.span>
                <p className="font-display text-2xl text-[color:var(--gold)] md:text-3xl">{e.y}</p>
                <p className="mt-2 font-display text-2xl text-foreground">{e.t}</p>
                <p className="mt-2 max-w-xl text-muted-foreground">{e.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values — horizontal marquee grid */}
      <section className="relative gradient-warm py-24 dark:bg-card dark:bg-none md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">What we hold</p>
            <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">Five words we return to.</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-5">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.07}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <v.icon className="h-7 w-7 text-[color:var(--gold)]" />
                <p className="mt-6 font-display text-2xl text-foreground">{v.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">Leadership</p>
            <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">Servants, not celebrities.</h2>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              Our senior pastor, <span className="font-semibold text-foreground">Rev. Dr.</span>, leads
              a quiet team of pastors, doctors, teachers and trustees across three Hyderabad
              churches. They are named in our annual report — because transparency is a form of love.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "Rev. Dr.", r: "Founder · Senior Pastor", img: images.pastor },
                { n: "Medical Ministry Lead", r: "Free camps · rural healthcare", img: images.doctor },
                { n: "Teaching Ministry Lead", r: "Bible study · all ages", img: images.teacher },
                { n: "Trustee · Finance", r: "Transparency & audit", img: images.elder },
              ].map((p) => (
                <div key={p.n} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <img src={p.img} alt={p.n} loading="lazy" className="h-32 w-full object-cover" />
                  <div className="p-5">
                    <p className="font-display text-lg text-foreground">{p.n}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.r}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Statement of Faith */}
      <section className="relative gradient-ink py-24 text-[color:var(--cream)] md:py-32">
        <img src={images.homeVisit} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity" loading="lazy" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">Statement of faith</p>
            <p className="mt-8 font-display text-3xl leading-relaxed md:text-4xl text-balance">
              We believe in one God — Father, Son and Holy Spirit — who is at work,
              tenderly, in every home we enter and every wound we bandage.
              We believe that <em className="text-shimmer">the same hands that heal</em> can also teach,
              and that love is proof of the Gospel long before words are.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
