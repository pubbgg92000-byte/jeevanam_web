import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const churches = [
  { name: "Jeevanam Central", area: "Secunderabad" },
  { name: "Jeevanam West", area: "Kukatpally" },
  { name: "Jeevanam South", area: "L.B. Nagar" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden gradient-ink text-[color:var(--cream)]">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[80%] -translate-x-1/2 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full gradient-gold">
              <span className="font-display text-xl font-semibold text-[color:var(--ink)]">J</span>
            </span>
            <div>
              <p className="font-display text-2xl">Jeevanam</p>
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--cream)]/60">
                Ministries &amp; Trust · Hyderabad
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[color:var(--cream)]/75">
            Rooted in Hyderabad, we serve the least, the lost, and the last — through the
            healing hands of medicine, the light of teaching, and the quiet presence of
            prayer in every home we enter.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[color:var(--gold)]/90">
            Led by Rev. Dr. — Senior Pastor
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social link"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Explore
          </p>
          <ul className="space-y-2.5 text-sm">
            {[
              ["/ministries", "Our work"],
              ["/our-story", "Our story"],
              ["/get-involved", "Get involved"],
              ["/prayer", "Prayer & counsel"],
              ["/events", "Events"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-[color:var(--cream)]/70 transition-colors hover:text-[color:var(--gold)]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Our churches
          </p>
          <ul className="space-y-2.5 text-sm">
            {churches.map((c) => (
              <li key={c.name} className="text-[color:var(--cream)]/75">
                <span className="block">{c.name}</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--cream)]/45">
                  {c.area}
                </span>
              </li>
            ))}
            <li className="pt-1">
              <Link to="/trust" className="text-[color:var(--cream)]/70 hover:text-[color:var(--gold)]">
                Jeevanam Trust →
              </Link>
            </li>
            <li>
              <Link to="/donate" className="text-[color:var(--cream)]/60 hover:text-[color:var(--gold)]">
                Support us
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--gold)]">
            Reach us
          </p>
          <ul className="space-y-3 text-sm text-[color:var(--cream)]/75">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Hyderabad, Telangana</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> Available on request</li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[color:var(--gold)]" /> hello@jeevanam.org</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-[color:var(--cream)]/50 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Jeevanam Ministries &amp; Trust, Hyderabad.</p>
          <p className="font-display italic">“He heals the brokenhearted and binds up their wounds.” — Psalm 147:3</p>
        </div>
      </div>
    </footer>
  );
}
