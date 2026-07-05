// Central image registry — curated real-world photos with an Indian context.
// Every URL is a stable Unsplash photo id served via the images CDN with
// automatic format + width/quality params so they load fast and never break.

const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Hero — people at golden-hour, hopeful and inclusive
  heroSunrise: u("photo-1469571486292-0ba58a3f068b", 2000),
  // Congregation / worship — hands raised in warm light
  worship: u("photo-1519452575417-564c1401ecc0"),
  // Medical camp / Indian doctor with elderly patient
  medical: u("photo-1666214280557-f1b5022eb634"),
  // Open Bible with hands
  handsBible: u("photo-1504052434569-70ad5836ab65"),
  // Indian children in a village classroom
  children: u("photo-1503676260728-1c00da094a0b"),
  // Home / doorstep visit — elderly hands being held with care
  homeVisit: u("photo-1573497019940-1c28c88b4f3e"),
  // Community meal / food distribution to villagers
  communityFood: u("photo-1488521787991-ed7bbaae773c"),
  // Indian church interior with warm light
  church: u("photo-1548407260-da850faa41e3"),
  // Cross silhouette at dusk
  cross: u("photo-1508921912186-1d1a45ebb3c1"),
  // Pastor / senior Indian man — dignified portrait
  pastor: u("photo-1566492031773-4f4e44671857", 1000),
  // Elderly Indian woman — receiving prayer
  elder: u("photo-1615461066841-6116e61058f4", 1000),
  // Young Indian woman teaching / smiling
  teacher: u("photo-1580489944761-15a19d654956", 1000),
  // Indian doctor portrait
  doctor: u("photo-1612349317150-e413f6a5b16d", 1000),
  // Hands together in prayer
  handsPray: u("photo-1490645935967-10de6ba17061"),
  // Sunlight through leaves — ambient overlay
  light: u("photo-1441974231531-c6227db76b6e"),
};

export type ImageKey = keyof typeof images;
