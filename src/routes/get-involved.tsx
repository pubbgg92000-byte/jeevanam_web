import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { images } from "@/lib/images";
import { Heart, HandHeart, Download, Mail, ArrowRight, Users, Stethoscope, BookOpen } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/get-involved")({
  head: () => ({
    meta: [
      { title: "Get Involved — Donate, Volunteer, Partner · Jeevanam" },
      { name: "description", content: "Give, volunteer a weekend, or download our brochure and newsletter. Every small yes moves mountains." },
      { property: "og:title", content: "Get Involved — Jeevanam" },
      { property: "og:description", content: "Donate, volunteer, or partner with a Hyderabad community trust." },
      { property: "og:url", content: "/get-involved" },
    ],
    links: [{ rel: "canonical", href: "/get-involved" }],
  }),
  component: GetInvolved,
});

const amounts = [500, 1000, 2500, 5000];
const impact: Record<number, string> = {
  500: "One medical check-up",
  1000: "A week of school for a child",
  2500: "A family's monthly groceries",
  5000: "A rural medical camp for one village",
};

function GetInvolved() {
  const [amount, setAmount] = useState<number>(1000);
  const [email, setEmail] = useState("");

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("You're on the list.", { description: "One small letter, once a month." });
    setEmail("");
  };
  const donate = () => toast.success(`Thank you — ₹${amount} is a real difference.`, { description: "Payments open soon. We'll email you a link." });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-52 gradient-warm">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Get involved</p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] font-light leading-[0.95] text-balance">
              Every small yes <em className="italic text-gold-gradient not-italic">moves mountains.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground">
              Three quiet ways to walk with us — give a little, give some time, or just stay in touch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Donate */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem]">
                <img src={images.communityFood} alt="Community meal distribution" loading="lazy" className="h-full max-h-[540px] w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">
                  <Heart className="h-4 w-4" /> Give
                </div>
                <p className="mt-4 font-display text-4xl leading-tight text-foreground">A little charity, a lot of change.</p>
                <p className="mt-3 text-muted-foreground">Every rupee is accounted for. Every camp, publicly reported.</p>

                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className={`min-w-0 rounded-full border px-2 py-2.5 text-center text-sm font-semibold whitespace-nowrap transition-colors ${
                        amount === a
                          ? "border-transparent gradient-gold text-[color:var(--ink)]"
                          : "border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      ₹{a.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">₹{amount.toLocaleString("en-IN")}</span> — {impact[amount]}.
                </p>

                <button onClick={donate} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]">
                  Donate now <ArrowRight className="h-4 w-4" />
                </button>
                <p className="mt-3 text-center text-xs text-muted-foreground">80G tax-exemption receipt provided.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section className="bg-[color:var(--cream)] py-20 dark:bg-card md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Reveal className="mb-12 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">
              <HandHeart className="h-4 w-4" /> Volunteer
            </div>
            <h2 className="mt-4 font-display text-5xl text-foreground md:text-6xl">Give a weekend.</h2>
            <p className="mt-4 text-muted-foreground">Doctors, teachers, drivers, listeners — every skill has a place.</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Stethoscope, t: "Medical camps", d: "GPs, dentists, opticians. One Saturday a month." },
              { icon: BookOpen, t: "Tuition & mentoring", d: "Two hours a week with a child who needs one." },
              { icon: Users, t: "Home visits", d: "Ride along on a Thursday. Listen. Share tea." },
            ].map((v, i) => (
              <Reveal key={v.t} delay={i * 0.06} className="rounded-3xl border border-border bg-background p-7 hover:shadow-xl transition-shadow">
                <v.icon className="h-8 w-8 text-[color:var(--gold)]" />
                <p className="mt-6 font-display text-2xl text-foreground">{v.t}</p>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15} className="mt-8">
            <Link to="/volunteer" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground link-underline">
              Full volunteer roles <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Newsletter + brochure */}
      <section className="bg-background py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-border bg-card p-8 md:p-10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brown)] dark:text-[color:var(--gold)]">
                <Mail className="h-4 w-4" /> Newsletter
              </div>
              <p className="mt-4 font-display text-3xl text-foreground md:text-4xl">A short letter, once a month.</p>
              <p className="mt-3 text-muted-foreground">Where we've been and one small story of change.</p>
              <form onSubmit={subscribe} className="mt-6 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)] focus:outline-none"
                />
                <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">Subscribe</button>
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
                <p className="mt-4 font-display text-3xl text-[color:var(--ink)] md:text-4xl">Know us in one page.</p>
                <p className="mt-3 text-[color:var(--brown)]">A short PDF — great to share with friends, workplaces, or CSR teams.</p>
                <a
                  href="/jeevanam-brochure.pdf"
                  download="Jeevanam-Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-sm font-semibold text-[color:var(--cream)]"
                >
                  <Download className="h-4 w-4" /> Download brochure
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
