@../Alt.Tomorrows.StoryEngine/PROJECTS.md

# Alt Tomorrows: Website

## This Repo

The public-facing static site. No build step — edit HTML, CSS, and JS directly.

## Repo Structure

- `index.html` — Main entry point; loads stories dynamically
- `data/stories.json` — Story catalog (title, teaser, narrator_gender, date, id)
- `stories/<id>/story.md` — Story content files
- `js/app.js` — Story grid renderer, story viewer, theme toggle
- `css/style.css` — Responsive styles, light/dark theme
- `assets/` — Images and media
- `templates/` — HTML templates
- `scripts/` — Build/utility scripts

## How We Work

- Step-by-step, back-and-forth. Don't jump ahead.
- No framework, no build process — keep changes simple and direct.
