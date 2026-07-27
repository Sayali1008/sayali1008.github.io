Adding a new palette.

To activate it, set `data-scheme="sunnyBeachDay"` on the `<html>` tag in `index.html`. Since there's no dark/light toggle for this scheme, the theme button won't visually change anything — you may want to hide it or leave it harmless.

---

**What each variable does:**

| Variable | Role |
|---|---|
| `--bg` | The base canvas. Every section that doesn't have a `--tint-*` override shows this. The bottommost layer of every page. |
| `--surface` | One level above bg. Cards, the nav bar, and any "lifted" container use this. The perceived gap between `--bg` and `--surface` is what gives cards their depth without needing box shadows. |
| `--ink` | Primary text — headings, body copy, any content that needs to be fully readable. Should have strong contrast against `--bg`. |
| `--muted` | Secondary text — dates, org names, subtitles, placeholder labels. Lower contrast than `--ink` to create visual hierarchy: your eye lands on `--ink` first. |
| `--accent` | The personality color. Section labels, active nav links, badge pills, button fills, timeline dots, and the contact card glow all read from this one variable. Swap it and the entire mood of the site shifts. |
| `--border` | Card outlines and dividers. Should sit perceptually between `--bg` and `--surface` in lightness — present enough to define edges, subtle enough not to compete with content. |
| `--accent-text` | Text rendered **on top of** an accent-filled element (a button, a badge). Needs contrast against `--accent`, not against `--bg`. Most accents use white here; a very light accent (e.g. `#E9C46A` golden yellow) would need `#000` instead so the label remains readable. |