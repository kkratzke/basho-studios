# Basho Studios

Static studio landing page for https://bashostudios.com/.

## Hosting

Publish **only `dist/`**. It contains prebuilt HTML, CSS, one small interaction script,
responsive landscape images, local fonts, and attribution notices.

- Component type: **Static Site**
- Repository branch: **main**
- Source directory: repository root (`/`)
- Output/publish directory: **dist**
- Build command: none required
- Run command: none
- Environment variables, database, and secrets: none

For DigitalOcean App Platform, connect this repository using an existing authorized
integration and select the settings above. Confirm available capacity and pricing
before adding any component. Keep Basho domain routing separate from other sites.

The project intentionally includes no app-creation automation or credentials.
Adding a repository alone does not deploy the website or configure its DNS.

## Design and behavior

The background is prerendered Shan Shui artwork, with separate desktop and mobile
WebP assets. It has no continuous animation or generation loop. The Games control
opens an "In development" panel; Shop links to the existing Daisan no Basho store.
Keyboard navigation, Escape, reduced motion, JavaScript-free fallback, and responsive
layouts were checked before publication.

## Credits

Landscape: Lingdong Huang, `{Shan, Shui}*`, commit
`9f754d2b2e73495db7883d4d4055a7b0903b0454`, https://github.com/LingDong-/shan-shui-inf.
Only flattened raster output is distributed; generator and noise implementation
source are excluded. The upstream MIT notice and p5.js LGPL 2.1 acknowledgement
are retained in `dist/licenses/` and `dist/credits.html`.

The DB card mark and Japanese lettering derive from the existing Daisan no Basho
brand. Alegreya Sans and Noto Serif JP are bundled with their SIL OFL notices.
