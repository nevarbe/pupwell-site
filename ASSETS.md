# Pupwell website assets

Source: existing Pupwell application assets. No mascot artwork was regenerated. The user's supplied Masko animations retain original frames and alpha.

- `mascot-wave.webp`, `mascot-tail.webp`: 540px animated alpha WebP, 73 frames each, ~3.04 second loop. Use matching poster for reduced motion.
- `mascot-notes.webp`: 240px animated alpha WebP, 90 frames, 3.75 second loop. Load below fold only.
- `garden.webp`, `pool.webp`, `campfire.webp`, `walk.webp`, `breathing.webp`: optimized existing application scene imagery. Static backgrounds are for website composition, not claims of a live app embed.
- `app-icon.webp`, `favicon.png`: resized current logo. Full original app-icon.png remains available.
- Fonts: Barlow Condensed Black headings; Manrope Medium body and Bold UI. Included OFL files must remain with font distribution.

Recommended minimum imagery: wave hero; garden preview; pool feature; campfire feature; notes journal. No proof screenshots were reused because they show private/test names or unfinished wardrobe.

## Clucky-inspired landing hero refresh (5 November 2026)

- `hero-hello.webp`: approved supplied v28 `helloSoft.webp`, optimized at540×540,72 encoded frames,3042ms, infinite loop, original alpha and frame timing preserved.1301980bytes.
- `pupwell-hero-poster.webp`: matching approved helloSoft poster,540×540 transparent still,20088bytes. Use immediately during load and for reduced motion; do not hide the hero while motion loads.
- `pupwell-footer.webp`: same matching poster at200×200,5006bytes. Prefer this still for a small footer rather than another animated decoder.

No new drawing, pose synthesis or AI image generation. Contact-sheet verification compares first, quarter, middle, three-quarter and final frames under `proof/hero-hello-frames.jpg` (local-only QA).
