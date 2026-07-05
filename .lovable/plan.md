## Goal
Simplify the site's navigation and reshape it around a few strong, interactive story blocks: ministries among the poor & sick, medical camps, home gatherings, prayer, and the pastor & pastor's wife story. Add lightweight "know more" surfaces (brochures, newsletter, contact) instead of many nav items.

## Nav (slim it down)
Reduce top nav to **5 items**:
- Home
- Our Work (was Ministries)
- Our Story (new — pastor & wife, trust, journey)
- Get Involved (donate + volunteer + brochure download + newsletter, one page)
- Contact

Move Sermons / Events / Blog / Resources / Gallery / Stories into small linked cards inside those pages rather than dedicated nav items (routes stay live for deep links).

## New / reshaped routes
- `src/routes/index.tsx` — rebuild hero + 5 interactive brief cards ("Among the poor & sick", "Medical camps", "Home gatherings", "Prayer & counsel", "Pastor & Mrs. — our story"). Each is a compact tile with hover reveal + "Know more →" leading to its detail page. Add: newsletter strip, brochure download strip, quiet Bible quote.
- `src/routes/our-story.tsx` — new. Pastor and pastor's wife side-by-side portraits, short journey, values, timeline. Links to Trust.
- `src/routes/get-involved.tsx` — new. Three tabs/sections: Donate (charity), Volunteer, Downloads (brochure PDF placeholder + newsletter signup). Consolidates donate/volunteer/resources entry.
- `src/routes/ministries.index.tsx` — trim the 16-card grid to the 5 core themes above with real thumbnails; keep others as a compact "Also serving" list.

## Nav component
Edit `src/components/site/nav.tsx`: keep only the 5 links above. Keep palette-picker and theme-toggle. Mobile menu updated accordingly.

## Footer
`src/components/site/footer.tsx`: trim link column to match, add newsletter mini-form and brochure link.

## Interactivity
- Reveal + hover-lift already exist. Add a subtle mouse-parallax on hero, and a scroll-linked reveal on the 5 brief cards using existing `Reveal`.
- Cards: image + short brief + `Know more →`. Expand-on-hover with a soft gold glow (already in tokens).
- Newsletter: pure UI (toast on submit) — no backend unless requested.

## Content tone
Keep it welcoming to all backgrounds; retain Bible quotes as "an old teaching we live by" style. Faith stays visible on `our-story` and `ministries/*` detail pages but the homepage stays warm & inclusive.

## Files touched
- Edit: `src/components/site/nav.tsx`, `src/components/site/footer.tsx`, `src/routes/index.tsx`, `src/routes/ministries.index.tsx`
- Create: `src/routes/our-story.tsx`, `src/routes/get-involved.tsx`
- No backend, no new packages.

## Out of scope
- Real newsletter backend, real brochure PDF (placeholder link), CMS.
- Removing old routes — they stay reachable via footer/deep links.
