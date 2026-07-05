import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import medical from "@/assets/medical-camp.jpg";
import { Stethoscope, HeartPulse, Pill, Syringe, Users, Activity } from "lucide-react";

export const Route = createFileRoute("/ministries/medical")({
  head: () => ({
    meta: [
      { title: "Medical Ministry — Jeevanam" },
      { name: "description", content: "Free medical camps, rural healthcare, doctor volunteers and emergency support for the villages the road forgot." },
      { property: "og:url", content: "/ministries/medical" },
    ],
    links: [{ rel: "canonical", href: "/ministries/medical" }],
  }),
  component: Medical,
});

function Medical() {
  const stats = [
    { n: "18,400+", l: "Patients treated" },
    { n: "240+", l: "Camps organised" },
    { n: "68", l: "Volunteer doctors" },
    { n: "12,900+", l: "Free prescriptions" },
  ];
  const services = [
    { icon: HeartPulse, t: "Rural medical camps", d: "Weekend camps in villages with no clinic within 20 km." },
    { icon: Pill, t: "Free medicine distribution", d: "Essential medicines dispensed with clear counselling." },
    { icon: Syringe, t: "Vaccination drives", d: "Partnering with district hospitals for children and mothers." },
    { icon: Activity, t: "Health awareness", d: "Diabetes, hypertension and hygiene sessions." },
    { icon: Users, t: "Volunteer doctors & nurses", d: "Register your skills. We deploy you where you're needed." },
    { icon: Stethoscope, t: "Emergency help", d: "Ambulance coordination and hospital referrals." },
  ];

  return (
    <>
      {/* Hero — split image left, deep sage panel right */}
      <section className="relative grid min-h-[95svh] pt-24 md:grid-cols-2">
        <div className="relative order-2 md:order-1">
          <img src={medical} alt="Doctor examining an elderly village woman at a Jeevanam medical camp." className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-none" />
        </div>
        <div className="relative order-1 flex items-center bg-[color:var(--sage)]/25 px-8 py-20 md:order-2 md:px-16">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Medical Ministry</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light leading-[0.95] text-balance">
              Medicine <em className="italic text-gold-gradient not-italic">as ministry.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-foreground/75 leading-relaxed">
              A stethoscope is a strange thing to carry into ministry — until you
              watch a grandmother weep because someone, finally, took her pain
              seriously. This is where we live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/volunteer" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Volunteer as doctor / nurse</Link>
              <Link to="/donate" className="rounded-full gradient-gold px-6 py-3 text-sm font-semibold text-[color:var(--ink)]">Sponsor a camp</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats row — asymmetric */}
      <section className="border-y border-border bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-border sm:grid-cols-4 sm:divide-y-0 md:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.05} className="p-8 text-center md:p-12">
              <p className="font-display text-5xl text-[color:var(--gold)] md:text-6xl">{s.n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-[color:var(--cream)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl">What we offer.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Simple, dignified, free — from the first blood-pressure cuff to follow-up phone calls a month later.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.05} className="rounded-3xl border border-border bg-card p-8 hover:shadow-xl transition-shadow">
                <s.icon className="h-8 w-8 text-[color:var(--sage)]" />
                <p className="mt-6 font-display text-2xl">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="gradient-ink py-24 text-[color:var(--cream)] md:py-32">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 text-center md:px-10">
          <Reveal>
            <h2 className="font-display text-5xl md:text-6xl">Next camp opens registration soon.</h2>
            <p className="mx-auto mt-4 max-w-xl text-[color:var(--cream)]/75">Warangal district · early consultation, free lab tests, medicines and a hot meal for every patient.</p>
            <Link to="/contact" className="mt-8 inline-flex rounded-full gradient-gold px-8 py-4 text-sm font-semibold text-[color:var(--ink)]">Register interest</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
