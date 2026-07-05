import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

export type PaletteId =
  | "emerald-prestige"
  | "midnight-indigo"
  | "noir-gold"
  | "ocean-deep"
  | "terracotta-sage"
  | "sunset-blaze";

export const palettes: {
  id: PaletteId;
  name: string;
  swatches: [string, string, string, string];
}[] = [
  { id: "emerald-prestige", name: "Emerald Prestige", swatches: ["#064e3b", "#0d7a5f", "#c9a84c", "#f5f0e0"] },
  { id: "midnight-indigo",  name: "Midnight Indigo",  swatches: ["#0a0a1a", "#141432", "#1e1e5a", "#4f46e5"] },
  { id: "noir-gold",        name: "Noir & Gold",       swatches: ["#0d0d0d", "#1a1a1a", "#c9a84c", "#f0d78c"] },
  { id: "ocean-deep",       name: "Ocean Deep",        swatches: ["#0c2340", "#1a4a6e", "#2d8a9e", "#5cbdb9"] },
  { id: "terracotta-sage",  name: "Terracotta & Sage", swatches: ["#c4654a", "#e8a87c", "#87a878", "#4a6741"] },
  { id: "sunset-blaze",     name: "Sunset Blaze",      swatches: ["#ff6b35", "#f7931e", "#e84393", "#6c5ce7"] },
];

type Ctx = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
  palette: PaletteId;
  setPalette: (p: PaletteId) => void;
};

const ThemeCtx = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [palette, setPaletteState] = useState<PaletteId>("emerald-prestige");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme") as Theme | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeState(stored ?? (prefersDark ? "dark" : "light"));
      const p = localStorage.getItem("palette") as PaletteId | null;
      if (p) setPaletteState(p);
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    if (palette === "emerald-prestige") root.removeAttribute("data-palette");
    else root.setAttribute("data-palette", palette);
    try { localStorage.setItem("palette", palette); } catch {}
  }, [palette]);

  const value: Ctx = {
    theme,
    setTheme: setThemeState,
    toggle: () => setThemeState((t) => (t === "dark" ? "light" : "dark")),
    palette,
    setPalette: setPaletteState,
  };

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

// Inline script — runs pre-hydration to prevent flash of wrong theme/palette.
export const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){document.documentElement.classList.add('dark');}var p=localStorage.getItem('palette');if(p&&p!=='emerald-prestige'){document.documentElement.setAttribute('data-palette',p);}}catch(e){}})();`;
