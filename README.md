# SWE Job Readiness Calculator

A fast interactive lead-magnet page for CS grads and early-career software
engineers. Users answer yes/no signals, get a 20-point readiness score, and
see the weakest area to fix first.

The page includes:

- A clear lead-magnet hero and CTA
- Five 4-point readiness categories with yes/no buttons
- Live score, answer progress, and weakest-area detection
- Quick fixes for resume, projects, DSA, outreach, and interview readiness
- Score range explanations from 0 to 20
- A final CTA for candidates scoring under 14

## Running Locally

Serve the project with a local web server:

```bash
python3 -m http.server 4180
```

Then open:

```text
http://127.0.0.1:4180/index.html
```

## Files

- `index.html`: lead-magnet page content and interactive scorecard markup
- `styles.css`: responsive visual design
- `src/app.js`: yes/no scoring, category totals, and result rendering
