# SWE Roadmap Generator

A personalized SWE progression system for CS grads and early-career developers
trying to land software engineering interviews.

The page includes:

- Target-role selection for frontend, backend, full stack, AI/ML, and data engineering
- Emotional skill-level labels that map to beginner, intermediate, and advanced users
- Role-specific skill assessment questions
- Biggest-struggle selection to shape the bottleneck and recommendations
- Generated roadmap output with phases, a resume-level project, priority skills, and a "what not to learn" section

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

- `index.html`: page shell and generator containers
- `styles.css`: responsive visual design
- `src/app.js`: questionnaire state, role data, and roadmap generation logic
