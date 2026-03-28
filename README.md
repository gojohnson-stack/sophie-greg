# Sophie & Greg's Wedding Website

A minimal wedding website with a letterpress-inspired design, built for a relaxed summer camp wedding at Camp Foley.  
*README and changelog are updated as the project changes.*

## Design

- **Colors**: Background `#fffffa`, primary text `#005229` (Pantone 347 green)
- **Fonts**: Sorts Mill Goudy (primary), EB Garamond, Times New Roman (fallbacks)
- **Style**: Clean, minimal, letterpress-inspired with subtle rustic elements
- **Tone**: Warm and welcoming, relaxed and comfortable

## Features

- Minimal, elegant design matching invitation aesthetic
- Fully responsive (mobile, tablet, desktop)
- **Details**: 2-column grid (max), clickable Location card with map link and red map pin icon
- **Schedule**: Multi-day (Friday–Sunday), no hover effects on items
- **Lodging**: On-site cabin photos (Cabin_s.jpg, Shower.jpg) + clickable Hotel/Airbnb cards (replace `AddLinkHere` with URLs)
- **Transportation**: Carpooling, flights, driving, parking
- **Things to do**: Camp + nearby attractions
- **RSVP**: Embedded Google Form; height 50vh (min 300px) on desktop, ~17vh on mobile; “here” link opens form in new tab
- **Decorative trees**: Left and right border images (bottom of viewport); hidden on mobile devices (JS) and when browser width ≤ 1000px (CSS)

## Getting Started

1. **Open the website**: Open `index.html` in a browser, or use a local server.

2. **Customize content**: Search for `AddDetailsHere` in `index.html` for placeholders. Search for `AddLinkHere` for lodging card URLs.

3. **Images**: Cabin photos are in `images/` (e.g. `Cabin_s.jpg`, `Shower.jpg`). Tree graphics: `images/Tree_left_005229_trans_crop.png`, `images/Tree_right_005229_trans_crop.png` (right may be in `PossibleImages/`).

4. **Contact**: Update the footer contact/email as needed.

## Key Files & Customization

| What | Where |
|------|------|
| Tree decoration height | `styles.css` → `:root` → `--tree-decoration-height` (e.g. `min(80vh, 30vw)`) |
| Hide trees on narrow desktop | `styles.css` → media query `@media (max-width: 1000px)` |
| Hide trees on mobile devices | `script.js` → `hideTreesOnMobile()` (user-agent based) |
| Section spacing | `styles.css` → `.section { padding: 60px 0; }` |
| Google Form URL | `index.html` → RSVP section (iframe `src` and “here” link) |
| Google Form height | `styles.css` → `.google-form` (desktop: 50vh, min 300px; mobile in media query) |
| Details grid columns | `styles.css` → `.details-grid` (2 columns; 1 on mobile) |
| Lodging image height (desktop) | `styles.css` → `.lodging-image-wrapper img` (300px) |
| RSVP container width | `styles.css` → `.rsvp-form-container` (max-width: 800px) |

## Fonts

**Sorts Mill Goudy** is loaded from Google Fonts in `index.html`. No extra setup; fallbacks are Garamond and Times New Roman.

## RSVP Form

The form is embedded and linked. To change the form:
- Edit the iframe `src` and the “here” link `href` in the RSVP section of `index.html`.

## Images in Use

- **Left/right border**: `Tree_left_005229_trans_crop.png`, `Tree_right_005229_trans_crop.png` (paths in `index.html`; right may be `PossibleImages/`).
- **Lodging**: `images/Cabin_s.jpg`, `images/Shower.jpg`.

## Colors

Defined in `styles.css` under `:root` (e.g. `--bg-color`, `--primary-text`, `--secondary-accent`). Change there to adjust the palette.

## File Structure

```
WeddingWebsite/
├── index.html
├── styles.css
├── script.js
├── README.md
├── images/           # Cabin photos, tree graphics, etc.
└── PossibleImages/   # Optional (e.g. Tree_right_005229_trans_crop.png)
```

## Deployment

- **GitHub Pages**: Push repo, then Settings → Pages → choose branch.
- **Netlify**: Drag-and-drop the folder or connect the repo.
- **Other**: Upload all files; keep `index.html` at the root.

## Testing Mobile View

In Chrome/Edge: DevTools (F12) → device toolbar (Ctrl+Shift+M / Cmd+Shift+M) → pick a device or custom size. Use portrait for phone layout.

## Notes

- Placeholders: `AddDetailsHere` (text), `AddLinkHere` (lodging URLs).
- Trees: Hidden on mobile by JS; hidden on narrow desktop by CSS so they reappear when the window is widened without refresh.
- Location card: Links to Google Maps; only detail card with hover and map icon.
- Navigation: RSVP link is highlighted; when in RSVP section it uses white background and underline.

## Changelog

*(Brief log of changes; README and this section are updated as the project evolves.)*

- **README**: Added changelog; noted that README is maintained as we go.
- **Trees**: Fixed reappearing on resize—JS now only hides on mobile user-agent; desktop clears inline display so CSS media query controls visibility.
- **Details**: Grid limited to max 2 columns; Location card clickable with map link and red map pin icon; other detail cards and schedule items have no hover.
- **Lodging**: Cabin + Shower images at 300px height, 1rem gap; hotel/Airbnb cards are links (`AddLinkHere`); mobile/iOS sizing fixes for cabin image width.
- **RSVP**: Google Form embedded; height 50vh (min 300px) desktop, ~17vh mobile; “here” link; RSVP nav button white + underline when section active.
- **Decorative trees**: Left/right border images, height via `--tree-decoration-height`; hidden on mobile (JS) and when width ≤ 1000px (CSS).

---

Made with care for Sophie & Greg's special day 💚
