# Headline Positioning Engine

A static web app that helps junior developers turn weak LinkedIn headlines into proof-driven positioning.

The experience is built around a simple system:

- Choose one target role
- Add real proof from projects and tech stack
- Add a credibility signal with measurable impact
- Add an optional direction statement

The builder generates a headline live, checks it against quality constraints, and includes example transformations plus a CTA block for monetization.

## Running Locally

Serve the project through a local web server:

```bash
python3 -m http.server 4180
```

Then open:

```text
http://127.0.0.1:4180/index.html
```

## Files

- `index.html`: page structure and content sections
- `styles.css`: visual system and responsive layout
- `src/app.js`: interactive builder logic and headline generation
