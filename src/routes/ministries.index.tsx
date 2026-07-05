import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import {
  BookOpen, Stethoscope, HandHeart, Users, Baby, HeartHandshake, Church,
  Utensils, GraduationCap, Building2, HeartPulse, Sparkles, Speech, MessageCircleHeart,
  Home, ArrowUpRight,
} from "lucide-react";

export const Route = createFileRoute("/ministries/")({
  head: () => ({
    meta: [
      { title: "Our Ministries — Jeevanam" },
      { name: "description", content: "Sixteen expressions of one calling — from medical camps to Bible teaching, prison ministry to elderly care." },
      { property: "og:url", content: "/ministries" },
    ],
    links: [{ rel: "canonical", href: "/ministries" }],
  }),
  component: Ministries,
});

const ministries = [
  { icon: BookOpen, t: "Teaching", d: "Bible classes & discipleship.", to: "/ministries/teaching", accent: "gold" },
  { icon: Stethoscope, t: "Medical", d: "Camps & rural healthcare.", to: "/ministries/medical", accent: "sage" },
  { icon: HandHeart, t: "Prayer", d: "Daily intercession & prayer wall.", to: "/prayer", accent: "sky" },
  { icon: Users, t: "Youth", d: "Retreats & mentorship.", to: "/ministries", accent: "gold" },
  { icon: HeartHandshake, t: "Women's", d: "Fellowship & counselling.", to: "/ministries", accent: "sage" },
  { icon: Baby, t: "Children", d: "Sunday school & tuition.", to: "/ministries", accent: "sky" },
  { icon: Church, t: "Village Outreach", d: "Reaching where none go.", to: "/ministries", accent: "gold" },
  { icon: Speech, t: "Evangelism", d: "Good news, gentle voice.", to: "/ministries", accent: "sage" },
  { icon: MessageCircleHeart, t: "Counselling", d: "Confidential care.", to: "/ministries", accent: "sky" },
  { icon: BookOpen, t: "Bible Study", d: "Weekly small groups.", to: "/ministries", accent: "gold" },
  { icon: Utensils, t: "Food Distribution", d: "Weekly meals in slums.", to: "/ministries", accent: "sage" },
  { icon: GraduationCap, t: "Elderly Care", d: "Visits, medicine, dignity.", to: "/ministries", accent: "sky" },
  { icon: HeartPulse, t: "Widow Support", d: "Sustained monthly care.", to: "/ministries", accent: "gold" },
  { icon: Home, t: "Home Visits", d: "Prayer at the doorstep.", to: "/ministries/home-visits", accent: "sage" },
  { icon: Building2, t: "Hospital Visits", d: "Beside every bed.", to: "/ministries", accent: "sky" },
  { icon: Sparkles, t: "Prison Ministry", d: "Hope behind walls.", to: "/ministries", accent: "gold" },
];

function Ministries() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-56 gradient-warm">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Sixteen ministries · one calling</p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.95] text-balance">
              A ministry for <em className="italic text-gold-gradient not-italic">every ache</em> of the human story.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              We refuse to be specialists in one kind of suffering. Wherever people
              carry heavy things, we try to be there — with prayer, with practical
              help, and with patience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-background py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {ministries.map((m, i) => (
              <Reveal key={m.t} delay={i * 0.03}>
                <Link
                  to={m.to}
                  className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div
                    className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity ${
                      m.accent === "gold" ? "bg-[color:var(--gold)]/25" :
                      m.accent === "sage" ? "bg-[color:var(--sage)]/25" :
                      "bg-[color:var(--sky)]/30"
                    } opacity-60 group-hover:opacity-100`}
                  />
                  <m.icon className="relative h-8 w-8 text-[color:var(--ink)]" />
                  <p className="relative mt-8 font-display text-2xl">{m.t}</p>
                  <p className="relative mt-1.5 text-sm text-muted-foreground">{m.d}</p>
                  <span className="relative mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)]/70 group-hover:text-[color:var(--ink)]">
                    Learn more <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
