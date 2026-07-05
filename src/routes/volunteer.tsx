import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/reveal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import {
  Stethoscope, BookOpen, Camera, Video, Music, Users, Baby, Utensils, Car,
  ClipboardList, Truck, Sprout,
} from "lucide-react";

const Schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
  role: z.string(),
  skills: z.string().optional(),
  availability: z.string(),
});
type FormData = z.infer<typeof Schema>;

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Jeevanam" },
      { name: "description", content: "Doctors, teachers, drivers, photographers — every skill has a place in Jeevanam." },
      { property: "og:url", content: "/volunteer" },
    ],
    links: [{ rel: "canonical", href: "/volunteer" }],
  }),
  component: Volunteer,
});

const roles = [
  { icon: Stethoscope, t: "Medical" }, { icon: BookOpen, t: "Teaching" },
  { icon: Camera, t: "Photography" }, { icon: Video, t: "Video" },
  { icon: Music, t: "Music" }, { icon: Users, t: "Youth" },
  { icon: Baby, t: "Children" }, { icon: Utensils, t: "Cooking" },
  { icon: ClipboardList, t: "Administration" }, { icon: Car, t: "Driver" },
  { icon: Sprout, t: "Field support" }, { icon: Truck, t: "Logistics" },
];

function Volunteer() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string>("Medical");
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormData>({ resolver: zodResolver(Schema), defaultValues: { role: "Medical" } });

  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-56 bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:px-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--brown)]">Volunteer</p>
            <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[0.95]">
              Bring your <em className="italic text-gold-gradient not-italic">whole self.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              You don't need to be a preacher. If you can drive, cook, listen,
              carry a camera or hold a hand — we have a place for you.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-3">
              {roles.map((r) => (
                <button
                  key={r.t}
                  onClick={() => setSelected(r.t)}
                  className={`group flex flex-col items-center justify-center gap-2 rounded-2xl border p-4 transition-all ${
                    selected === r.t
                      ? "border-[color:var(--gold)] bg-[color:var(--gold)]/10 shadow-lg"
                      : "border-border bg-card hover:border-[color:var(--gold)]/50"
                  }`}
                >
                  <r.icon className="h-6 w-6" />
                  <span className="text-xs font-medium">{r.t}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="gradient-warm py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          {submitted ? (
            <Reveal className="rounded-[2rem] border border-border bg-card p-12 text-center">
              <p className="font-display text-4xl">Welcome to the team.</p>
              <p className="mt-3 text-muted-foreground">Our coordinator will reach out within 3 working days.</p>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit(async () => { await new Promise((r) => setTimeout(r, 500)); setSubmitted(true); })}
                className="rounded-[2rem] border border-border bg-card p-8 md:p-10 space-y-5"
              >
                <p className="font-display text-3xl">Register your interest</p>
                <input type="hidden" {...register("role")} value={selected} />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input {...register("name")} required placeholder="Full name" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm" />
                  <input {...register("email")} required type="email" placeholder="Email" className="rounded-2xl border border-border bg-background px-4 py-3 text-sm" />
                </div>
                <input {...register("phone")} required placeholder="Phone / WhatsApp" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm" />
                <div className="rounded-2xl bg-muted/50 px-4 py-3 text-sm">
                  You're volunteering as: <span className="font-semibold">{selected}</span>
                </div>
                <textarea {...register("skills")} rows={3} placeholder="Tell us about your skills / experience" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm" />
                <input {...register("availability")} required placeholder="Availability (weekends / weekdays / full-time)" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm" />
                <button disabled={isSubmitting} className="w-full rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground">
                  {isSubmitting ? "Submitting…" : "Count me in"}
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
