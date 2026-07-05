import { useState, useRef, useEffect } from "react";
import { Palette, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { palettes, useTheme, type PaletteId } from "./theme-provider";

export function PalettePicker({ className = "" }: { className?: string }) {
  const { palette, setPalette } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Change color palette"
        aria-expanded={open}
        className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-background/70 text-foreground backdrop-blur transition-colors hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
      >
        <Palette className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full mt-2 w-72 overflow-hidden rounded-2xl border border-border bg-popover/95 p-3 text-popover-foreground shadow-xl backdrop-blur"
          >
            <p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Color palette
            </p>
            <div className="space-y-1">
              {palettes.map((p) => {
                const active = p.id === palette;
                return (
                  <button
                    key={p.id}
                    onClick={() => { setPalette(p.id as PaletteId); setOpen(false); }}
                    className={`flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left transition-colors ${
                      active ? "bg-muted" : "hover:bg-muted/60"
                    }`}
                  >
                    <div className="flex h-6 overflow-hidden rounded-md ring-1 ring-border">
                      {p.swatches.map((c) => (
                        <span key={c} style={{ background: c }} className="h-full w-3.5" />
                      ))}
                    </div>
                    <span className="flex-1 text-sm font-medium text-foreground">{p.name}</span>
                    {active && <Check className="h-4 w-4 text-[color:var(--gold)]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
