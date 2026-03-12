# Alternate Tomorrows — Design System Specification

Use this document as the authoritative style reference when building any page for AlternateTomorrows.com. The accompanying HTML files (homepage.html and index.html) are visual references — this spec defines the rules.

---

## Design Philosophy

Dark, atmospheric, editorial. The site reads like a declassified document archive, not a tech product or a blog. Every design choice should reinforce restraint and credibility. When in doubt, do less.

**Tone:** Literary journal meets field research archive
**NOT:** Sci-fi, cyberpunk, startup, blog, or magazine

---

## Color System

### Brand Layer (all pages)

These colors are constant across every page on the site.

```
--bg-deep:        #0a0a08    /* Page background — warm-shifted near-black */
--bg-surface:     #111110    /* Elevated surfaces, cards */
--bg-card:        #151514    /* Card interiors */
--bg-hover:       #1c1b1a    /* Hover states on cards */
--text-primary:   #e8e4dc    /* Headlines, primary body text */
--text-secondary: #aba69c    /* Paragraph body text */
--text-dim:       #7d786e    /* Captions, metadata, secondary info */
--text-faint:     #4a4640    /* Footers, very low-priority text */
--border:         #252320    /* Structural dividers */
--border-light:   #3a3835    /* Subtle borders, image frames */
```

### Non-Timeline Pages (Home, About, Process)

No accent color. Use only the brand layer palette above. Buttons, labels, and interactive elements use `--text-dim` or `--text-secondary` — never a color.

### Timeline Accent Colors

Each timeline gets ONE accent color. This color is used for:
- Era badge backgrounds
- Event year labels
- Monospace section labels
- Sensory profile labels
- The color bar on the homepage card
- The timeline span/year text

The accent color is NEVER used for body text or headlines.

Current timeline accents:

```
Amber (All the Bees Died):     #c4923a  /  dim: #a07830  /  glow: #d4a24a
Slate (The Current Stopped):   #6a8fa8  /  dim: tbd
Moss (The Soil Went Quiet):    #7a9a6e  /  dim: tbd
```

Each timeline accent should have three variants:
- **Full:** Used for small labels and highlights
- **Dim:** Used for monospace metadata, year labels
- **Glow:** Used sparingly for lexicon terms or emphasis

Accent colors should feel muted and natural — never neon, never saturated. They should be plausible as ink or pigment colors.

---

## Typography

### Font Stack

```
Display/Headlines:  'Instrument Serif', serif
Body text:          'DM Sans', sans-serif  (weight: 300)
Monospace/Labels:   'JetBrains Mono', monospace  (weight: 300–400)
```

### Scale

```
Hero title:          clamp(2.8rem, 6vw, 5rem)  — Instrument Serif
Timeline name:       clamp(2.5rem, 6vw, 4.5rem) — Instrument Serif
Section titles:      2.2rem — Instrument Serif
Lexicon terms:       1.4rem — Instrument Serif
Card titles:         1.65rem — Instrument Serif
Body text:           1.02–1.15rem — DM Sans 300
Intro paragraphs:    1.2rem — DM Sans 300
Monospace labels:    0.7–0.75rem — JetBrains Mono, uppercase, letter-spacing 0.25em
Figure numbers:      0.68rem — JetBrains Mono
Figure descriptions: 0.85rem — DM Sans 300, italic
Footer text:         0.65rem — JetBrains Mono, uppercase
```

### Rules

- Headlines are ALWAYS Instrument Serif, never bold, never uppercase
- Body text is ALWAYS DM Sans weight 300 (light) — never 400 or 500 for paragraphs
- Monospace is ONLY for labels, metadata, badges, figure numbers, and technical identifiers
- Monospace labels are ALWAYS uppercase with generous letter-spacing (0.15–0.3em)
- Minimum font size for any visible text: 0.65rem (roughly 11px)
- Drop caps on first paragraph of era sections: Instrument Serif, 3.2rem, timeline accent color

---

## Spacing

### Vertical Rhythm

```
Between major sections:     6rem padding top/bottom
Hero top padding:           10rem (desktop), 7rem (mobile)
Hero bottom padding:        3rem (desktop), 2rem (mobile)
Between paragraphs:         1.5rem margin-bottom
Between sense blocks:       3rem margin-bottom
Section label to content:   2–3rem
Figure margin (inline):     3rem top and bottom
Figure margin (wide):       4rem top and bottom, negative horizontal
```

### Horizontal

```
Max content width:          780px (timeline reading pages)
Max content width:          900px (homepage timeline grid)
Max summary/intro width:    680px
Page horizontal padding:    3rem (desktop), 1.5rem (mobile)
Figure max width (inline):  640px
```

### Principle

Generous vertical space between sections. Tight vertical space within sections. The page should feel like it has room to breathe between ideas but is dense within each idea.

---

## Components

### Era Section
- Amber badge (monospace, uppercase, accent background with --bg-deep text)
- Instrument Serif title
- Monospace year range in accent-dim color
- Body paragraphs in --text-secondary
- Drop cap on first paragraph
- Optional: event list, rules list, figure

### Event List
- No bullets or list markers
- Grid layout: year column (80px) + content column
- Year in monospace, accent color
- Event title in DM Sans weight 500, --text-primary
- Event description in --text-dim
- 1px border between items using --border

### Rules List
- No bullets — use em dash (—) as prefix in accent-dim color
- Left padding 1.5rem
- Text in --text-dim
- 1px border-bottom between items

### Figures (Images)
- Thin frame: 1px border in --border-light, 6px padding, --bg-surface background
- Image filter: saturate(0.8) brightness(0.88) contrast(1.05) — desaturated to blend with dark theme
- On hover: brighten slightly — saturate(0.9) brightness(0.95)
- Subtle vignette overlay via radial-gradient pseudo-element
- Caption below: figure number (monospace, accent-dim) + description (italic, --text-dim)
- Two variants:
  - **Inset:** max-width 640px, centered in text column
  - **Wide:** breaks out of text column with negative margins

### Lexicon Entry
- Term in Instrument Serif, accent-glow color, 1.4rem
- Definition in --text-secondary, 0.95rem
- Emotional charge line in monospace, --text-dim, with charge value in accent-dim
- 1px border-bottom between entries

### Day in the Life Block
- Background: --bg-surface
- 1px border in --border
- 2.5rem padding
- Monospace label in accent color
- Italic body text in --text-secondary

### Timeline Card (Homepage)
- 4px vertical color bar in timeline's accent color
- Grid: color-bar | content | status badge
- Card number in monospace, --text-dim
- Title in Instrument Serif
- Year span in monospace, accent color
- Description in --text-secondary, max-width 520px
- Status badge: monospace, uppercase, small, with 1px border
- Background transition on hover to --bg-hover

### Email Signup
- Centered, max-width 400–440px
- Input: --bg-card background, --border border, DM Sans
- Button: solid accent (on timeline pages) or --text-dim (on neutral pages)
- Button text: monospace, uppercase, small
- No border-radius anywhere — all sharp corners

### Navigation
- Flex row: logo left, links right
- Logo: Instrument Serif, 1.15rem, "Alternate" in --text-primary, "Tomorrows" in italic --text-secondary
- Links: monospace, uppercase, 0.7rem, --text-dim, hover to --text-primary

---

## Interaction & Animation

### Scroll Reveals
- Era sections, sensory blocks, and lexicon sections use IntersectionObserver
- Start state: opacity 0, translateY(30px)
- Revealed state: opacity 1, translateY(0)
- Transition: 0.8s ease
- Threshold: 0.08–0.15

### Hero Animation
- Staggered fadeUp: badge at 0.2s, title at 0.4s, subtitle at 0.6s, scroll cue at 1s
- fadeUp keyframes: from opacity 0 translateY(20px) to opacity 1 translateY(0)

### Hover States
- Cards: background color shift to --bg-hover, 0.4s transition
- Figure images: slight brightness increase, 0.5s transition
- Links: color shift to --text-primary, 0.3s transition
- Buttons: background shift to lighter variant, 0.3s transition

### General Rules
- No bouncing, no elastic easing, no scale transforms
- All transitions are ease or ease-out
- Animations should feel like things appearing, not things moving

---

## Texture & Atmosphere

### Grain Overlay
The entire site has a fixed-position SVG noise texture overlay at low opacity (0.5) on the body::after pseudo-element. This gives the dark background a subtle film grain quality. It must be pointer-events: none and z-index: 9999.

### Background Warmth
The background #0a0a08 has a deliberately warm (brown) tint. Do not change this to pure neutral black. This warmth carries through the entire site and works with the amber accents and field-guide imagery.

---

## Responsive Behavior

### Breakpoint: 640px

- Page horizontal padding: 3rem → 1.5rem
- Hero top padding: 10rem → 7rem
- Event grid: 2-column → 1-column (stack year above content)
- Email signup form: row → column
- Timeline card status badges: hidden on mobile
- Footer: row → column, centered
- Figure captions: row → column (number above description)

### Principle
Nothing fundamentally changes at mobile — the single-column layout simply tightens. No hamburger menus, no layout shifts, no hidden content. Everything visible on desktop is visible on mobile.

---

## Content Rules

These aren't design rules but affect how the AI should generate page content:

- Monospace labels are always short (1–3 words): "Inciting Era", "Acoustic", "Fig. 01"
- Figure descriptions are written as in-world artifact captions, e.g., "Ink and wash on survey paper"
- Upcoming/unrevealed timelines show as "[ Classified ]"
- Status labels: "Read" (published), "Coming Soon" (next), "In Research" (future)
- The "What is a Divergent Timeline?" block appears on the homepage and optionally as an intro on timeline pages

---

## File Reference

- `homepage.html` — The homepage / timeline index page (neutral, no accent color)
- `index.html` — The "All the Bees Died" timeline reading page (amber accent)
- `figure-mockup.html` — Figure/image placement examples (inset and wide variants)

These three files together demonstrate every component and pattern in the system.
