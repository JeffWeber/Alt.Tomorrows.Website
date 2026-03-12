# Alt.Tomorrows.Website — Claude Context

## What This Repository Is

The public-facing static website for the Alternate Tomorrows project. It displays finalized timeline content generated in the companion content engine at `../Alt.Tomorrows.Timelines`.

This repo is purely frontend. There is no build step, no framework, no package manager.

The timeline content for the website will eventually be generated from the content pipeline in `../Alt.Tomorrows.Timelines`. For now, it is hard-coded in the HTML files.

---

## Technology Constraints

- **Vanilla HTML5, CSS3, JavaScript only.** No frameworks, no libraries, no bundlers.
- **Google Fonts** for typography (loaded via CDN link in each HTML file).
- **No external JS dependencies.** Scroll-reveal uses native Intersection Observer API.

---

## File Structure

```
index.html                          # Homepage — timeline card grid
Timelines/
  All_the_Bees_Died/
    index.html                      # Individual timeline page
assets/
  css/
    global.css                      # Design system — single source of truth for all styles
  js/
    main.js                         # Scroll-reveal and site-wide interactivity
docs/
  AlternateTomorrows_Website_DesignSpec.md   # Authoritative design specification
.agent/skills/frontend-design/      # Frontend design skill for Claude
```

---

## Design System

**The authoritative reference is `docs/AlternateTomorrows_Website_DesignSpec.md`.** Read it before making any visual or layout decisions.

**Tone:** Dark, atmospheric, editorial — "literary journal meets declassified research archive." Not sci-fi, not cyberpunk, not a blog.

### Core Palette (all pages)

```
--bg-deep:        #0a0a08   /* Page background */
--bg-surface:     #111110   /* Elevated surfaces */
--bg-card:        #151514   /* Card interiors */
--bg-hover:       #1c1b1a   /* Hover states */
--text-primary:   #e8e4dc   /* Headlines, primary text */
--text-secondary: #aba69c   /* Body text */
--text-dim:       #7d786e   /* Captions, metadata */
--text-faint:     #4a4640   /* Footers */
--border:         #252320   /* Structural dividers */
```

### Timeline Accent Colors

Each timeline has one accent color used for labels, year markers, color bars, and highlights. Never used for body text or headlines.

```
Amber — All the Bees Died:    #c4923a  (dim: #a07830, glow: #d4a24a)
Slate — The Current Stopped:  #6a8fa8
Moss  — The Soil Went Quiet:  #7a9a6e
```

Non-timeline pages (Home, About, Process) use no accent color at all.

### Typography

```
Instrument Serif    — display headlines
DM Sans (300–500)   — body text
JetBrains Mono      — monospace labels, metadata, status indicators
```

---

## Content Policy

- **Content originates in `../Alt.Tomorrows.Timelines`.** Do not write or invent timeline narrative here.
- HTML files currently hard-code content as a prototype. This will eventually be generated from the content pipeline.
- Timeline pages follow the structure established in `Timelines/All_the_Bees_Died/index.html` — treat it as the template.

---

## What NOT to Do

- Do not introduce any third-party JS libraries or CSS frameworks.
- Do not invent or modify timeline narrative content — it comes from the Timelines repo.
- Do not deviate from the design spec without explicit instruction. When in doubt, do less.
- Do not add accent color usage beyond what the spec defines (labels, year markers, color bars — not body text, not backgrounds).
