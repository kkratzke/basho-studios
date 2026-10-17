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
and mobile WebP assets; it has no continuous rendering or motion loop. Games opens
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
