# Full-Stack Internship Assessment Quiz

A static website version of the Full-Stack Developer Internship aptitude and
skills assessment.

The quiz includes:

- All 45 scored assessment questions
- Automatic scoring for 30 multiple-choice questions
- Written-answer capture for 15 short-answer questions
- Full, half, or no-credit grading controls for written answers
- A screenshot-ready results panel with student info, total score, scoring band,
  section breakdown, and learning reflection
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

- `index.html`: page structure, student info, quiz form, and results panel
- `styles.css`: responsive visual design, print styles, and score states
- `src/app.js`: question data, scoring logic, written review, and result rendering
