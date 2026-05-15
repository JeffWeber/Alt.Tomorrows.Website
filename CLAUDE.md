# Alternate Tomorrows — Project Context

## Overview
**Alternate Tomorrows** is a static HTML website hosting near-future short stories and vignettes. It is hosted on GitHub Pages with no build step, no framework, and no server-side processing.

## Technology
- **HTML** — all pages are standalone `.html` files
- **CSS** — `css/styles.css` (design system) + `css/story.css` (reading view)
- **JS** — `js/main.js` (homepage) + `js/story.js` (story pages). Vanilla JS only.
- **Fonts** — JetBrains Mono (labels/UI), Oswald (display/titles), Source Serif 4 (story body)
- **Themes** — dark (default) and light, toggled via `data-theme` on `<html>`, persisted in `localStorage` under the key `at-theme`

## File Structure

```
Alt.Tomorrows.Website/
├── index.html            # Homepage — Ledger layout (Stories + Vignettes)
├── about.html            # About page
│
├── stories/
│   ├── _template.html    # Copy this when adding a new story
│   └── XXXX-slug.html    # One file per published story (e.g. 0021-the-quiet-after.html)
│
├── vignettes/
│   └── XXXX-slug.html    # One file per published vignette
│
├── css/
│   ├── styles.css        # Base design system (tokens, topbar, ledger, filterbar, footer)
│   └── story.css         # Story reading view styles
│
├── js/
│   ├── main.js           # Homepage: tag filtering, theme toggle, animations
│   └── story.js          # Story pages: topbar hide-on-scroll, theme toggle
│
└── data/
    └── stories.js        # Catalog metadata (NOT used by pages at runtime — reference only)
```

> **Note:** `data/stories.js` is a reference file for tracking what exists. The `index.html` homepage is hand-authored HTML — the story rows are written directly into the HTML, not generated from `stories.js`. When you add a story, update both the HTML and this file.

## Adding a New Story

### Step 1 — Write the story file
Copy `stories/_template.html` to `stories/XXXX-slug.html` where `XXXX` is the zero-padded story number (e.g. `0022-the-new-story.html`).

Fill in all fields marked with `<!-- EDIT: ... -->`:
- `<title>` and `<meta name="description">`
- `<h1 class="story__title">` and `<p class="story__premise">`
- Date, read time, tags in `.story__meta`
- The story body in `.story__body` — use `<p>` for paragraphs, `<h2>` for section breaks (I, II, III…), `<hr>` for scene breaks (renders as `• • •`)
- Prev/next nav links at the bottom

### Step 2 — Add a row to `index.html`
In the `#stories-col` div, add a new `<a class="ledger-row enter">` block at the **top** (most recent first). Follow the exact pattern of existing rows.

Key attributes:
- `data-tags="Tag1,Tag2"` — comma-separated, no spaces — used by the JS filter
- `href="stories/XXXX-slug.html"` — relative path from root

### Step 3 — Update `data/stories.js`
Add the metadata entry to the top of the `STORIES` array and set `file: "stories/XXXX-slug.html"`.

### Step 4 — Update prev/next links
Update the adjacent stories' `_template.html` prev/next nav to point to the new story.

---

## Adding a New Vignette
Same process as stories, but use the `vignettes/` folder and update the `#vignettes-col` in `index.html`.

> **Vignette vs Story:** Vignettes are shorter (flash fiction, scene sketches). They use the same `_template.html` pattern — just copy it to `vignettes/` instead. No separate template needed.

---

## Design System Notes

### Color Tokens (in `css/styles.css`)
| Token | Dark | Light | Use |
|---|---|---|---|
| `--bg` | `#181818` | `#f3eee2` | Page background |
| `--ink` | `#ece8dc` | `#1a1815` | Primary text |
| `--ink-soft` | `#b6b1a3` | `#3a3832` | Secondary text, premises |
| `--ink-mute` | `#7a7770` | `#6e6a60` | Dates, labels, numbers |
| `--ink-faint` | `#4a4842` | `#a8a293` | Separators, decorative |
| `--accent` | `#d97757` | `#d97757` | Hover states, active tags |
| `--rule` | `#2c2c2a` | `#cfc8b6` | Dividers |

### Tag Filtering
Tags work via `data-tags="Tag1,Tag2"` attributes on each `.ledger-row` and `.ledger-vrow`. `js/main.js` reads these and shows/hides rows. The filter buttons in `.filterbar` have `data-tag` attributes that must exactly match the tag strings in `data-tags`.

### Story Numbering
Stories are numbered sequentially from `0001`. The number is part of the filename (`0021-the-quiet-after.html`) and displayed in the index (`0021`). Vignettes have their own sequence starting at `0001`.
