# Software Engineering Readiness Quiz

A 30-question multiple-choice quiz for CS grads and early-career software
engineers. Users answer every question before the score, questions they got
right, and full answer key are revealed.

The page includes:

- Eight readiness sections covering JS, TS, React, HTML/CSS, SQL, DSA, web architecture, Git, and backend basics
- All multiple-choice questions with code snippets and an "I don't know" option where useful
- A submit gate that hides the answer key until every question is answered
- Results showing score, level, percentage, questions answered correctly, and the full answer key

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

- `index.html`: quiz page shell and result containers
- `styles.css`: responsive visual design
- `src/app.js`: question data, progress tracking, scoring, and answer-key rendering
