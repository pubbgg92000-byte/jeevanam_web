import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Heart, ShieldCheck } from "lucide-react";
import handsBible from "@/assets/hands-bible.jpg";

const Schema = z.object({
  name: z.string().min(1, "Please share your name"),
  contact: z.string().optional(),
  urgency: z.enum(["normal", "urgent", "immediate"]),
  privacy: z.enum(["public", "private"]),
  request: z.string().min(10, "A few more words help us pray."),
});
type FormData = z.infer<typeof Schema>;

export const Route = createFileRoute("/prayer")({
  head: () => ({
    meta: [
      { title: "Prayer Requests — Jeevanam" },
      { name: "description", content: "Send us your prayer request — we pray daily, together, for every name we receive." },
      { property: "og:url", content: "/prayer" },
    ],
    links: [{ rel: "canonical", href: "/prayer" }],
  }),
  component: Prayer,
});

const wall = [
  { n: "R.", r: "For my father's surgery on the 12th.", p: 142 },
  { n: "A friend", r: "For peace in my family.", p: 88 },
  { n: "S.", r: "For a job — it's been six months.", p: 210 },
  { n: "Anonymous", r: "For deliverance from addiction.", p: 320 },
  { n: "M.", r: "For strength in caring for my mother.", p: 76 },
];

function Prayer() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: { urgency: "normal", privacy: "private" },
  });

  return (
    <>
      {/* Calm hero */}
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-56 bg-[color:var(--cream)]">
        <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-[color:var(--sky)]/40 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[color:var(--gold)]/30 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--brown)]">Prayer request</p>
            <h1 className="mt-8 font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95]">
              Send us <em className="italic text-gold-gradient not-italic">a name.</em>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              We pray every morning at 6 AM as a team — for every request received.
              Nothing is too small. Nothing is too heavy.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-5 md:px-10">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <Reveal className="rounded-[2rem] border border-border gradient-warm p-10 text-center">
                <Heart className="mx-auto h-10 w-10 text-[color:var(--gold)]" />
                <p className="mt-6 font-display text-3xl">Received with love.</p>
                <p className="mt-3 text-muted-foreground">Your request has been added to tomorrow morning's prayer list.</p>
              </Reveal>
            ) : (
              <Reveal>
                <form onSubmit={handleSubmit(async () => { await new Promise((r) => setTimeout(r, 500)); setSubmitted(true); })}
                  className="rounded-[2rem] border border-border bg-card p-8 md:p-10 space-y-5"
                >
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Your name</label>
                    <input {...register("name")} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" placeholder="First name or 'Anonymous'" />
                    {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Contact (optional)</label>
                    <input {...register("contact")} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" placeholder="Email or phone — if you'd like a follow-up" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Urgency</label>
                      <select {...register("urgency")} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm">
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent (this week)</option>
                        <option value="immediate">Immediate — please call</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Visibility</label>
                      <select {...register("privacy")} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm">
                        <option value="private">Private — only our team</option>
                        <option value="public">Share on prayer wall</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Prayer request</label>
                    <textarea {...register("request")} rows={5} className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-[color:var(--gold)]" placeholder="Share what's on your heart…" />
                    {errors.request && <p className="mt-1 text-xs text-destructive">{errors.request.message}</p>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-[color:var(--sage)]" /> Confidential. Never shared without permission.
                  </div>
                  <button disabled={isSubmitting} type="submit" className="w-full rounded-full gradient-gold px-6 py-4 text-sm font-semibold text-[color:var(--ink)] transition-transform hover:scale-[1.02] disabled:opacity-60">
                    {isSubmitting ? "Sending…" : "Send prayer request"}
                  </button>
                </form>
              </Reveal>
            )}
          </div>

          {/* Prayer wall */}
          <div className="md:col-span-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Prayer wall</p>
              <h2 className="mt-3 font-display text-3xl">Pray with us.</h2>
              <p className="mt-2 text-sm text-muted-foreground">Tap the heart to say "I prayed."</p>
            </Reveal>
            <div className="mt-6 space-y-3">
              {wall.map((w, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5">
                    <img src={handsBible} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-[0.03]" />
                    <div className="relative">
                      <p className="text-sm">"{w.r}"</p>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{w.n}</p>
                        <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-[color:var(--gold)]">
                          <Heart className="h-3.5 w-3.5 fill-current" /> {w.p}
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
