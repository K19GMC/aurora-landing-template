# Aurora — landing page template

A single-page marketing site built from three static files. No build step, no
dependencies, no framework. Edit the copy, change a few CSS variables, deploy the
folder.

**Live demo:** deployed on Vercel — see the repository's deployment link.

## What's inside

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and copy |
| `styles.css` | Design tokens, layout, components, responsive rules |
| `script.js` | Mobile nav, copy button, scroll reveal, footer year |
| `vercel.json` | Static hosting config and security headers |
| `favicon.svg` | Inline-SVG favicon |
| `404.html` | Static not-found page |

Total payload is about 29 KB of source (roughly 7 KB gzipped) and there are no
external requests: no webfonts, no trackers, no CDN.

## Quick start

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# or
npx serve .
```

Then visit <http://localhost:8080>.

## Customise

1. **Brand and copy** — edit `index.html`. Sections: hero, logo strip, features,
   how it works, pricing, FAQ, CTA, footer.
2. **Colours and spacing** — edit the `:root` block at the top of `styles.css`.
   `--accent` and `--accent-2` drive the gradient used by buttons and headings.
3. **Links** — replace the `https://github.com` placeholders in the header and CTA
   with your own repository or sign-up URL.
4. **Pricing** — the plans are sample content; update or remove them.

## Deploy

Any static host works, because the output is the folder itself.

- **Vercel** — import the repository; framework preset "Other", no build command,
  output directory `.`.
- **Netlify** — drag the folder onto the dashboard, or connect the repo with no
  build command.
- **GitHub Pages** — Settings → Pages → deploy from branch `main`, root folder.
  Note that `vercel.json` and `404.html` only affect their respective hosts.
- **Any server** — copy the files to your web root.

## Accessibility and performance notes

- Semantic landmarks, a skip link, and visible `:focus-visible` rings.
- `prefers-reduced-motion` disables scroll reveal and smooth scrolling.
- System font stack, so there is no font download and no layout shift.
- Mobile navigation is a real button with `aria-expanded` and closes on `Escape`.

## Licence

MIT — see [LICENSE](LICENSE).