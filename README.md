# Interview Diagnosis Tool

A static lead-magnet web app for CS grads who are not getting interviews.

The tool asks 10 yes/no questions across job readiness, then returns:

- A score out of 10
- A root diagnosis: Foundation, Positioning, Strategy, or Interview Problem
- The primary area to improve based on missed answers
- Missed readiness checks and a quick action plan
- A subtle CTA to DM `DIAGNOSIS`

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

- `index.html`: main diagnostic layout and content sections
- `styles.css`: visual system, responsive layout, and interaction states
- `src/app.js`: question data, scoring, pattern matching, and diagnosis rendering
