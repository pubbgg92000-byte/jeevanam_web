import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { PalettePicker } from "./palette-picker";

const links = [
  { to: "/", label: "Home" },
  { to: "/ministries", label: "Our Work" },
  { to: "/our-story", label: "Our Story" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Close on outside click / Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown, { passive: true });
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-background/20 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full gradient-gold shadow-sm">
            <span className="font-display text-lg font-semibold text-[color:var(--ink)]">J</span>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-foreground">Jeevanam</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Ministries &amp; Trust
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground after:w-[calc(100%-2rem)]" }}
              inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
              className="relative px-4 py-2 text-sm font-medium transition-colors after:absolute after:bottom-1 after:left-4 after:h-px after:w-0 after:bg-[color:var(--gold)] after:transition-all hover:after:w-[calc(100%-2rem)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-2">
            <PalettePicker />
            <ThemeToggle />
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Desktop-only utility row — Donate on its own line */}
      <div className="hidden border-t border-border/40 bg-background/40 backdrop-blur-sm lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 px-8 py-2 text-xs">
          <span className="text-muted-foreground">
            Every small yes moves mountains.
          </span>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--gold)]/50 bg-transparent px-4 py-1.5 font-semibold text-[color:var(--gold)] transition-colors hover:bg-[color:var(--gold)]/10"
          >
            Donate
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden"
          >
            <div className="mx-4 mb-4 rounded-2xl border border-border bg-background/95 p-3 shadow-xl backdrop-blur">
              <div className="grid gap-1">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  to="/get-involved"
                  onClick={() => setOpen(false)}
                  className="mt-1 rounded-xl border border-[color:var(--gold)]/50 px-3 py-2.5 text-center text-sm font-semibold text-[color:var(--gold)] hover:bg-[color:var(--gold)]/10"
                >
                  Donate
                </Link>
              </div>
              <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/60 pt-3">
                <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Appearance
                </span>
                <div className="flex items-center gap-2">
                  <PalettePicker />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
