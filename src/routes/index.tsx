import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Stethoscope, BookOpen, HandHeart, Users, ArrowRight, Heart,
  Home as HomeIcon, Download, Mail, Sparkles,
} from "lucide-react";
import { images } from "@/lib/images";
import heroChildren from "@/assets/hero-children.jpg";
import heroChildrenPortrait from "@/assets/hero-children-portrait.jpg";
import { Reveal } from "@/components/site/reveal";
import { toast } from "sonner";

const SITE_URL = "https://hope-woven-narratives.lovable.app";
const OG_IMAGE = `${SITE_URL}/__l5e/assets-v1/f69e0727-26da-4bb2-82c0-19803a50a0a0/jeevanam-hero.jpg`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeevanam — Care that finds you, in Hyderabad" },
      {
        name: "description",
        content:
          "Jeevanam is a Hyderabad ministry serving all ages — medical camps, spiritual care, Bible teaching, slum outreach and community awareness programs.",
      },
      { property: "og:title", content: "Jeevanam — Care that finds you" },
      { property: "og:description", content: "Medical, spiritual, teaching, slum outreach & awareness — for all ages, open to all." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1920" },
      { property: "og:image:height", content: "1088" },
      { property: "og:image:alt", content: "Children smiling at golden hour — a Jeevanam gathering in Hyderabad." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Jeevanam — Care that finds you" },
      { name: "twitter:description", content: "Medical, spiritual, teaching, slum outreach & awareness — for all ages, open to all." },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Home,
});


function Home() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <BriefCards />
      <PastorAndWife />
      <StayInTouch />
      <ClosingCTA />
    </>
  );
}

/* ────────────────────────── IMPACT STATS ────────────────────────── */
function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString("en-IN")}{suffix}</span>;
}

function ImpactStats() {
  const stats = [
    { to: 1248, suffix: "+", label: "Lives touched", detail: "Across camps, homes & clinics" },
    { to: 48, suffix: "",  label: "Medical camps", detail: "Rural & urban Hyderabad" },
    { to: 12, suffix: "",  label: "Years walking", detail: "With families others forgot" },
    { to: 100, suffix: "%", label: "Free to all", detail: "No caste, creed, or cost" },
  ];
  return (
    <section aria-labelledby="impact-heading" className="relative border-y border-border bg-[color:var(--cream)] py-16 dark:bg-background md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 id="impact-heading" className="sr-only">Our impact so far</h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-start">
                <p className="font-display text-3xl font-light leading-none text-gold-gradient md:text-4xl tabular-nums">
                  <CountUp to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground">
                  {s.label}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── HERO ────────────────────────── */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 60, damping: 20, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 60, damping: 20, mass: 0.6 });
  const tx = useTransform(smx, [0, 1], [20, -20]);
  const ty = useTransform(smy, [0, 1], [12, -12]);
  const spotX = useTransform(smx, (v) => `${v * 100}%`);
  const spotY = useTransform(smy, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotX} ${spotY}, rgba(255,215,140,0.18), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => { mx.set(0.5); my.set(0.5); }}
      className="relative min-h-[100svh] overflow-hidden grain bg-[color:var(--ink)]"
    >
      {/* Mobile: 9:16 portrait, full viewport, children framed above the text */}
      <div className="absolute inset-0 overflow-hidden md:hidden">
        <motion.div style={{ scale, y }} className="absolute -inset-6">
          <img
            src={heroChildrenPortrait}
            alt="A Jeevanam gathering — families, elders and children in a Hyderabad community."
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] from-0% via-[color:var(--ink)]/70 via-30% to-transparent to-55%" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[color:var(--ink)]/60 to-transparent" />
        </motion.div>
        <motion.div aria-hidden style={{ backgroundImage: spotlight }} className="pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light" />
        <div className="grain-overlay" />
      </div>



      {/* Desktop: 16:9 image, full viewport, content overlaid */}
      <div className="absolute inset-0 hidden overflow-hidden md:block">
        <motion.div style={{ scale, y }} className="absolute -inset-6">
          <img
            src={heroChildren}
            alt="A Jeevanam gathering — families, elders and children in a Hyderabad community."
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[color:var(--ink)]/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)]/60 via-[color:var(--ink)]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/85 via-[color:var(--ink)]/15 to-transparent" />
        </motion.div>
        <motion.div aria-hidden style={{ backgroundImage: spotlight }} className="pointer-events-none absolute inset-0 z-[1] mix-blend-soft-light" />
        <div className="grain-overlay" />
      </div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-6 pb-10 pt-[52vh] md:justify-center md:px-10 md:pb-28 md:pt-40"
      >
        <div className="relative max-w-2xl">


          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.36em] text-[color:var(--gold)]"
          >
            <span className="h-px w-10 bg-[color:var(--gold)]" />
            Jeevanam · Hyderabad
          </motion.p>

          <h1 className="font-display text-[clamp(2.5rem,7.5vw,6.25rem)] font-light leading-[0.98] tracking-tight text-[color:var(--cream)] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
            <motion.span
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              Care that
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="block italic text-shimmer"
            >
              finds you.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-[color:var(--cream)]/90 text-balance [text-shadow:0_1px_12px_rgba(0,0,0,0.6)] md:text-lg"
          >
            Medical camps, spiritual care and Bible teaching, ministry in the slums,
            and community awareness programs — for every age, open to everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/get-involved"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full gradient-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--ink)] shadow-lg shadow-[color:var(--gold)]/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[color:var(--gold)]/40"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Get involved</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/our-story"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--cream)]/30 bg-white/5 px-7 py-3.5 text-sm font-medium text-[color:var(--cream)] backdrop-blur-md transition-all hover:border-[color:var(--gold)]/60 hover:bg-white/10"
            >
              <HandHeart className="h-4 w-4 transition-transform group-hover:scale-110 group-hover:-rotate-6" /> Our story
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[color:var(--cream)]/60 md:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px origin-top bg-gradient-to-b from-[color:var(--gold)] to-transparent"
        />
      </motion.div>
    </section>
  );
}

/* ────────────────────────── FIVE BRIEF CARDS ────────────────────────── */
function BriefCards() {
  const cards = [
    {
      icon: Stethoscope,
      tag: "Healthcare",
      title: "Medical camps",
      brief: "Free check-ups, medicines and rural clinics — for children, adults and the elderly alike. No questions asked.",
      img: images.medical,
      to: "/ministries/medical",
      accent: "sage",
    },
    {
      icon: HomeIcon,
      tag: "Community",
      title: "Home gatherings",
      brief: "Small circles in living rooms — where neighbours of every age share tea, stories and a quiet word of hope.",
      img: images.homeVisit,
      to: "/ministries/home-visits",
      accent: "gold",
    },
    {
      icon: Heart,
      tag: "Slum ministry",
      title: "Among the slums",
      brief: "Groceries, medicine, prayer and presence — brought to the bastis and doorsteps most people forget.",
      img: images.communityFood,
      to: "/ministries",
      accent: "sky",
    },
    {
      icon: HandHeart,
      tag: "Spiritual",
      title: "Prayer & teaching",
      brief: "Bible study, prayer and pastoral counsel for anyone carrying something heavy — every age, every background.",
      img: images.handsPray,
      to: "/prayer",
      accent: "gold",
    },
    {
      icon: BookOpen,
      tag: "Awareness",
      title: "Awareness programs",
      brief: "Health, hygiene, addiction and family workshops — practical teaching where it's most needed.",
      img: images.children,
      to: "/get-involved",
      accent: "sage",
    },
  ];

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">
              What we do
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] text-foreground md:text-6xl text-balance">
              Small things, <em className="italic text-gold-gradient not-italic">done with care.</em>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Five quiet ways we try to show up — for anyone who needs it.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/ministries" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground link-underline">
              All our work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-6">
          {cards.map((c, i) => {
            // 2 large + 3 small layout
            const span =
              i === 0 ? "md:col-span-4" :
              i === 1 ? "md:col-span-2" :
              "md:col-span-2";
            const h = i === 0 ? "h-[440px]" : "h-[320px]";
            return (
              <Reveal key={c.title} delay={i * 0.06} className={span}>
                <Link
                  to={c.to}
                  className={`group relative block h-full overflow-hidden rounded-[1.75rem] border border-border bg-card`}
                >
                  <div className={`relative ${h} overflow-hidden`}>
                    <img
                      src={c.img}
                      alt={c.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    />
                    {/* dark scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                    {/* accent glow on hover */}
                    <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                      c.accent === "gold" ? "bg-[radial-gradient(circle_at_50%_120%,rgba(230,180,90,0.4),transparent_60%)]" :
                      c.accent === "sage" ? "bg-[radial-gradient(circle_at_50%_120%,rgba(140,180,140,0.4),transparent_60%)]" :
                      "bg-[radial-gradient(circle_at_50%_120%,rgba(140,180,220,0.4),transparent_60%)]"
                    }`} />
                    {/* content */}
                    <div className="absolute inset-x-0 bottom-0 p-7 text-[color:var(--cream)]">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] backdrop-blur">
                        <c.icon className="h-3.5 w-3.5 text-[color:var(--gold)]" />
                        {c.tag}
                      </span>
                      <p className="mt-3 font-display text-3xl leading-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.7)] md:text-4xl">
                        {c.title}
                      </p>
                      <p className="mt-2 max-w-md text-sm text-[color:var(--cream)]/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
                        {c.brief}
                      </p>
                      <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
                        Know more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────── PASTOR & PASTOR'S WIFE ────────────────────────── */
function PastorAndWife() {
  return (
    <section className="relative overflow-hidden gradient-ink py-24 text-[color:var(--cream)] md:py-32 grain">
      <div className="grain-overlay" />
      <img src={images.light} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-luminosity" loading="lazy" />
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">The people behind Jeevanam</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.05] md:text-6xl">
            Rev. Pastor <span className="italic text-gold-gradient">& Mrs.</span>
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--cream)]/80">
            A husband-and-wife team who traded comfortable lives for something quieter and harder — walking with families others had given up on.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            { img: images.pastor, name: "Rev. Dr. — Founder", role: "Senior Pastor", quote: "We didn't come to build a church. We came to become one." },
            { img: images.teacher, name: "Mrs. — Co-founder", role: "Community & Teaching Ministry", quote: "Every person we sit with — child or elder — is a small future being written by hand." },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-[color:var(--cream)]/10 shadow-2xl">
                <img src={p.img} alt={p.name} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[color:var(--gold)]">{p.role}</p>
                  <p className="mt-2 font-display text-3xl">{p.name}</p>
                  <p className="mt-3 max-w-md font-display text-lg italic leading-snug text-[color:var(--cream)]/85">"{p.quote}"</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <Link to="/our-story" className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--gold)] link-underline">
            Read their full story <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── NEWSLETTER + BROCHURE ────────────────────────── */
function StayInTouch() {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thanks — we'll be in touch.", { description: "Look out for our monthly newsletter." });
    setEmail("");
  };
  return (
    <section className="relative bg-[color:var(--cream)] py-24 dark:bg-background md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <div className="h-full rounded-[2rem] border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">
              <Mail className="h-4 w-4" /> Newsletter
            </div>
            <p className="mt-4 font-display text-3xl leading-tight text-foreground md:text-4xl">
              A short letter, once a month.
            </p>
            <p className="mt-3 max-w-md text-muted-foreground">
              Where we've been, who we've met, and one small story of change. No spam, unsubscribe anytime.
            </p>
            <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)] focus:outline-none"
              />
              <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
                Subscribe
              </button>
            </form>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full overflow-hidden rounded-[2rem] gradient-warm p-8 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[color:var(--gold)]/25 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brown)]">
                <Download className="h-4 w-4" /> Brochure
              </div>
              <p className="mt-4 font-display text-3xl leading-tight text-[color:var(--ink)] md:text-4xl">
                Know us in one page.
              </p>
              <p className="mt-3 max-w-md text-[color:var(--brown)]">
                A short PDF — what we do, how we work, and how you can help. Great to share with friends, workplaces, or partners.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/jeevanam-brochure.pdf"
                  download="Jeevanam-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--cream)] transition-transform hover:scale-[1.03]"
                >
                  <Download className="h-4 w-4" /> Download brochure
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--ink)]/25 px-6 py-3 text-sm font-semibold text-[color:var(--ink)]"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── FINAL CTA ────────────────────────── */
function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">Be part of it</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
            Small hands. <em className="italic text-gold-gradient not-italic">Big difference.</em>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Volunteer a weekend, share a skill, or send us a little help. Everyone is welcome — no background required.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/get-involved" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              Get involved <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted">
              <Sparkles className="h-4 w-4" /> Say hello
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="relative">
          <div className="absolute -inset-6 rounded-[3rem] gradient-gold opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img src={images.communityFood} alt="Volunteers serving meals." loading="lazy" className="h-[540px] w-full object-cover" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-background/85 p-5 backdrop-blur">
              <p className="font-display italic text-lg leading-snug text-foreground">
                "I was hungry and you gave me something to eat…"
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">An old teaching we live by</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
