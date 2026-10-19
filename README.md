# Basho Studios

Static studio landing page for https://bashostudios.com/.

## Hosting

Publish **only `dist/`**. It contains prebuilt HTML, CSS, a small Games-panel
interaction script, responsive landscape images, local fonts and license notices.

- Component type: **Static Site**
- Repository branch: **main**
- Source directory: repository root (`/`)
- Output/publish directory: **dist**
- Build command: none required
- Run command: none
- Environment variables, database and secrets: none

Keep Basho domain routing separate from other sites. No app-creation automation,
credentials, generator source or commerce code is included.

## Design and behavior

The editorial Basho Studios identity uses Newsreader typography, fine-line icons
and restrained charcoal tones. The background is prerendered artwork with desktop
and mobile WebP assets. A seamless, non-mirrored raster strip moves at 8 CSS pixels
per second using one Web Animation transform and two copies of the same image.
Reduced-motion still fallback, hidden/offscreen suspension, and
image-load failure fallback are supported. Reduced-motion initial visits do not
request loop assets. The loop also pauses while Games is open. No generator or
per-frame JavaScript runs in visitors' browsers. Games opens
an accessible "In development" panel. Shop links to the separate Daisan no Basho
store. Keyboard navigation, Escape, reduced motion, JavaScript-free fallback and
responsive layouts are supported.

The homepage omits the former tagline and artist byline. Full artwork attribution
remains on `credits.html`, and copyright/license notices are retained in
`dist/licenses/`.

## Credits

Landscape: Lingdong Huang, `{Shan, Shui}*`, commit
`9f754d2b2e73495db7883d4d4055a7b0903b0454`, https://github.com/LingDong-/shan-shui-inf.
Only flattened raster output is distributed. The upstream MIT notice and p5.js
LGPL 2.1 acknowledgement are retained. The MIT notice requires retaining its
copyright and permission notice; it does not specify a visible homepage byline.

Newsreader and Alegreya Sans are bundled with their SIL OFL notices. The studio
wordmark, typographic favicon and interface treatment are distinct from the shop.

## Landscape loop

The 3200 x 800 desktop strip is 280,038 bytes; the 2400 x 600 mobile strip is 161,272 bytes. Both have a 4:1 aspect ratio. Complete original landscape features are wrapped at both edges in their depth order before rasterization; no mirrored transition or crossfade is used. Each displayed tile is at least as wide as the viewport. Its exact width sets the animation period, so the two-tile transform resets to an identical image at each boundary. The original still images remain available without JavaScript, with reduced motion, and after image decoding errors.

Only flattened raster output and the small motion controller are distributed. Local generator, vector master, capture tooling, QA scripts, and unpublished Careers/TDZ previews are excluded from dist and this change.
