# Instagram Content Conversion Diagnostic

A static landing-page tool that reframes Instagram content performance around
conversion metrics instead of vanity metrics.

The page includes:

- A bold hero with the "wrong metrics" hook
- A false-belief section for followers, likes, and views
- The Content Conversion Stack: saves, shares, comments, and profile clicks
- An interactive bottleneck diagnosis engine
- A next-action layer for each problem
- A soft conversion section with call, DM, and review CTAs

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

- `index.html`: landing-page sections and audit form
- `styles.css`: dark and white visual system, responsive layout, metric cards
- `src/app.js`: bottleneck diagnosis logic and live result rendering
