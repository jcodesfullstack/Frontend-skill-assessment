# Frontend Engineering Skills Assessment

A client-facing static quiz for assessing frontend engineering readiness.

The page includes:

- 30 multiple-choice questions across 6 sections
- "I don't know" option on every question to discourage guessing
- Completion tracking with submit validation
- Hidden answer key until after submission
- Final score, readiness band, strengths, focus areas, and recommended priorities
- Separate IDK count in the post-submit results
- Section-by-section skill gap diagnosis
- Post-submit answer review showing submitted answers and correct answers

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

- `index.html`: page shell and quiz containers
- `styles.css`: responsive visual design
- `src/app.js`: quiz data, answer key, scoring, validation, and results rendering
