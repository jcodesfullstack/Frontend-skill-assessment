# Software Engineering Skills Assessment Quiz

A static website version of the 30-question software engineering multiple-choice quiz.

The quiz includes:

- 30 multiple-choice questions
- An "I don't know" option on every question to discourage guessing
- 10 technology categories
- Automatic scoring after every question is answered
- Overall market-readiness scoring band
- Per-technology proficiency labels
- Uncertainty tracking in the final results
- Full answer review showing the client's answer, the correct answer, and a short explanation
- Print/save styling for sharing results

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

- `index.html`: page structure, client info, quiz form, and results panel
- `styles.css`: responsive visual design, print styles, and score states
- `src/app.js`: question data, scoring logic, proficiency breakdown, and answer review
