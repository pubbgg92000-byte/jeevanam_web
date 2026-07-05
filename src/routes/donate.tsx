import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, HandHeart, Heart, Sparkles, ShieldCheck } from "lucide-react";
import { images } from "@/lib/images";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Support us · Jeevanam Ministries & Trust" },
      { name: "description", content: "A quiet, dignified way to help — support medical camps, teaching and home visits across Hyderabad." },
    ],
  }),
  component: Donate,
});

const causes = [
  { key: "medical", label: "Medical camp", desc: "Doctors, medicines, transport", img: images.medical },
  { key: "teaching", label: "Teaching a child", desc: "Books, Bibles, tuition", img: images.children },
  { key: "home", label: "Home visits", desc: "Care packs, groceries, prayer", img: images.homeVisit },
  { key: "where", label: "Where most needed", desc: "Let us direct the gift", img: images.handsBible },
];

function Donate() {
  const [cause, setCause] = useState<string>("where");
  const [amount, setAmount] = useState<number | "">(1000);
  const [freq, setFreq] = useState<"once" | "monthly">("once");

  const presets = [500, 1000, 2500, 5000, 10000];

  return (
    <>
      {/* Hero — soft, minimal, no big banner */}
      <section className="relative overflow-hidden bg-background pt-40 pb-16 md:pt-48">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">
              Support us
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              A quiet way to <em className="italic text-gold-gradient not-italic">stand with us.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Every rupee walks somewhere — into a medicine, a schoolbook, a bag of rice, or a
              journey to a home that hasn't seen a friend in weeks.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The give card */}
      <section className="relative pb-28 md:pb-40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-12 md:px-10">

          {/* Left — story image collage */}
          <Reveal className="md:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <img src={images.medical} loading="lazy" alt="" className="col-span-2 aspect-[16/11] w-full rounded-3xl object-cover" />
              <img src={images.homeVisit} loading="lazy" alt="" className="aspect-square w-full rounded-3xl object-cover" />
              <img src={images.children} loading="lazy" alt="" className="aspect-square w-full rounded-3xl object-cover" />
            </div>
            <div className="mt-6 rounded-3xl border border-border bg-card p-6">
              <p className="font-display italic text-lg leading-snug text-foreground">
                “You didn't just bring medicine. You brought back the feeling that we are seen.”
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">— A grandmother in Nalgonda</p>
            </div>
          </Reveal>

          {/* Right — the give form (attractive, non-generic) */}
          <Reveal delay={0.15} className="md:col-span-7">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 md:p-10">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full gradient-gold opacity-20 blur-3xl" />

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Step 1 · Where should your gift walk?
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {causes.map((c) => {
                  const active = cause === c.key;
                  return (
                    <button
                      key={c.key}
                      onClick={() => setCause(c.key)}
                      className={`group relative overflow-hidden rounded-2xl border p-3 text-left transition-all ${active ? "border-[color:var(--gold)] ring-2 ring-[color:var(--gold)]/40" : "border-border hover:border-[color:var(--gold)]/50"}`}
                    >
                      <div className="aspect-square overflow-hidden rounded-xl">
                        <img src={c.img} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" loading="lazy" />
                      </div>
                      <p className="mt-2 text-xs font-semibold text-foreground">{c.label}</p>
                      <p className="text-[10px] text-muted-foreground">{c.desc}</p>
                    </button>
                  );
                })}
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Step 2 · How often?
              </p>
              <div className="mt-3 inline-flex rounded-full border border-border p-1">
                {(["once", "monthly"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFreq(f)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${freq === f ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {f === "once" ? "One time" : "Monthly"}
                  </button>
                ))}
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                Step 3 · Amount (₹)
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {presets.map((p) => (
                  <button
                    key={p}
                    onClick={() => setAmount(p)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${amount === p ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 text-foreground" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}
                  >
                    ₹{p.toLocaleString("en-IN")}
                  </button>
                ))}
                <div className="flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
                  <span className="text-sm text-muted-foreground">₹</span>
                  <input
                    type="number"
                    min={100}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
                    className="w-24 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                    placeholder="Other"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-gold py-4 text-sm font-semibold text-[color:var(--ink)] shadow-lg shadow-[color:var(--gold)]/25"
              >
                <HandHeart className="h-4 w-4" />
                Give ₹{typeof amount === "number" ? amount.toLocaleString("en-IN") : "—"}
                {freq === "monthly" ? " /month" : ""}
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[color:var(--sage)]" /> Secure UPI · Card · Netbanking</span>
                <span className="inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5 text-[color:var(--gold)]" /> 80G tax exemption (India)</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other ways to give */}
      <section className="relative bg-[color:var(--cream)] py-24 dark:bg-card md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">Other ways</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl text-balance">
              Not every gift is money.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { t: "Give your time", d: "Volunteer at a Sunday, a camp or a home visit.", to: "/volunteer" },
              { t: "Give your skills", d: "Doctors, teachers, designers, drivers — we need you.", to: "/volunteer" },
              { t: "Give in kind", d: "Medicines, books, groceries, or your prayer.", to: "/contact" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.08} className="rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
                <Heart className="h-6 w-6 text-[color:var(--gold)]" />
                <p className="mt-6 font-display text-2xl text-foreground">{b.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
                <Link to={b.to} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground link-underline">
                  Get involved <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-16 max-w-2xl text-sm text-muted-foreground">
            Jeevanam Trust is a registered charitable body in Hyderabad. Every gift is
            recorded and every rupee is accounted for — because trust is our second name.
          </p>
        </div>
      </section>
    </>
  );
}
