const SECTIONS = [
  {
    id: "web",
    title: "HTML / CSS / JavaScript",
    level: "Proficient",
    questions: [
      {
        prompt: "What is the difference between == and === in JavaScript?",
        answer: "B",
        explanation: "=== checks both value and type. == compares with type coercion.",
        options: {
          A: "== is faster than ===",
          B: "=== checks both value and type; == only checks value with type coercion",
          C: "They are identical",
          D: "=== is only used in TypeScript"
        }
      },
      {
        prompt: "What will this code output?",
        code: "console.log(typeof null);",
        answer: "C",
        explanation: 'typeof null returns "object", a famous JavaScript quirk.',
        options: {
          A: '"null"',
          B: '"undefined"',
          C: '"object"',
          D: '"boolean"'
        }
      },
      {
        prompt: "Which CSS property is used to create a flex container?",
        answer: "B",
        explanation: "display: flex turns an element into a flex container.",
        options: {
          A: "display: flexbox",
          B: "display: flex",
          C: "flex: container",
          D: "position: flex"
        }
      },
      {
        prompt: "What is event delegation in JavaScript?",
        answer: "B",
        explanation: "Event delegation uses one parent listener to handle child events through bubbling.",
        options: {
          A: "Assigning events to multiple elements individually",
          B: "Attaching a single event listener to a parent element to handle events on its children via event bubbling",
          C: "Removing event listeners after use",
          D: "Delegating events to a web worker"
        }
      },
      {
        prompt: "What does Promise.all([p1, p2, p3]) do if p2 rejects?",
        answer: "B",
        explanation: "Promise.all rejects as soon as one input promise rejects. Use Promise.allSettled when you need every result.",
        options: {
          A: "Returns results from p1 and p3 only",
          B: "The entire promise rejects immediately",
          C: "Waits for all to complete regardless",
          D: "Returns undefined"
        }
      }
    ]
  },
  {
    id: "react",
    title: "React",
    level: "Intermediate",
    questions: [
      {
        prompt: "What is the purpose of the useEffect dependency array?",
        answer: "B",
        explanation: "The dependency array tells React when the effect should re-run.",
        options: {
          A: "To pass props to the component",
          B: "To control when the effect re-runs based on changes to listed values",
          C: "To cache the component",
          D: "It's optional and has no real effect"
        }
      },
      {
        prompt: "Which statement about React keys is correct?",
        answer: "B",
        explanation: "Keys help React match list items between renders and should be unique among siblings.",
        options: {
          A: "Keys should always be array indexes",
          B: "Keys help React identify which items have changed and should be unique among siblings",
          C: "Keys are required on every JSX element",
          D: "Keys improve CSS rendering"
        }
      },
      {
        prompt: "What is the difference between useMemo and useCallback?",
        answer: "B",
        explanation: "useMemo caches a calculated value. useCallback caches a function reference.",
        options: {
          A: "They are identical",
          B: "useMemo memoizes a value; useCallback memoizes a function",
          C: "useCallback is deprecated",
          D: "useMemo is only for arrays"
        }
      },
      {
        prompt: "What causes prop drilling and what's a common solution?",
        answer: "B",
        explanation: "Prop drilling happens when props pass through many layers. Context or a state library can reduce it.",
        options: {
          A: "Too many state variables; solved by useState",
          B: "Passing props through many intermediate components; solved by Context API or state management libraries",
          C: "Using too many components; solved by removing them",
          D: "A CSS issue; solved by Tailwind"
        }
      }
    ]
  },
  {
    id: "vue",
    title: "Vue.js",
    level: "Beginner",
    questions: [
      {
        prompt: "In Vue 3, what is the Composition API primarily used for?",
        answer: "B",
        explanation: "The Composition API organizes reusable component logic with functions such as ref, reactive, and computed.",
        options: {
          A: "Replacing HTML",
          B: "Organizing component logic using functions like ref, reactive, and computed",
          C: "Styling components",
          D: "Routing"
        }
      },
      {
        prompt: "What does v-model do in Vue?",
        answer: "B",
        explanation: "v-model creates two-way binding, commonly between form inputs and component state.",
        options: {
          A: "Creates a new component",
          B: "Provides two-way data binding between form inputs and component data",
          C: "Defines a route",
          D: "Imports a module"
        }
      }
    ]
  },
  {
    id: "next",
    title: "Next.js",
    level: "Intermediate",
    questions: [
      {
        prompt: "What is the difference between getServerSideProps and getStaticProps in Next.js Pages Router?",
        answer: "B",
        explanation: "getServerSideProps runs on every request. getStaticProps runs at build time.",
        options: {
          A: "They are the same",
          B: "getServerSideProps runs on every request; getStaticProps runs at build time",
          C: "getStaticProps runs on the client",
          D: "Both run only in development"
        }
      },
      {
        prompt: "In the Next.js App Router, what makes a component a Server Component by default?",
        answer: "B",
        explanation: 'Components in app/ are Server Components by default unless they include "use client".',
        options: {
          A: 'Adding "use server" at the top',
          B: 'Components in the app/ directory are Server Components unless marked with "use client"',
          C: "Importing from next/server",
          D: "Using TypeScript"
        }
      },
      {
        prompt: "What is the purpose of the next/image component?",
        answer: "B",
        explanation: "next/image helps with optimization, responsive sizing, and lazy loading.",
        options: {
          A: "Generates AI images",
          B: "Provides automatic image optimization, lazy loading, and responsive sizing",
          C: "Only works with SVGs",
          D: "Replaces CSS background images"
        }
      }
    ]
  },
  {
    id: "node",
    title: "Node.js / Express",
    level: "Intermediate",
    questions: [
      {
        prompt: "What is middleware in Express?",
        answer: "B",
        explanation: "Express middleware can inspect or change req/res and decide whether to call next().",
        options: {
          A: "A database driver",
          B: "Functions that have access to the request, response objects, and the next() function in the request-response cycle",
          C: "A frontend library",
          D: "A type of route"
        }
      },
      {
        prompt: "Which is a security best practice in an Express API?",
        answer: "B",
        explanation: "Production APIs should validate input, limit abuse, set secure headers, and keep secrets out of code.",
        options: {
          A: "Storing passwords in plain text",
          B: "Using helmet, validating input, rate limiting, and never exposing secrets in code",
          C: "Allowing all CORS origins in production",
          D: "Logging passwords for debugging"
        }
      },
      {
        prompt: "What does app.use(express.json()) do?",
        answer: "B",
        explanation: "express.json() parses JSON request bodies so the data is available on req.body.",
        options: {
          A: "Converts the app to JSON",
          B: "Parses incoming JSON payloads and makes them available on req.body",
          C: "Sends JSON responses",
          D: "Validates JSON schemas"
        }
      }
    ]
  },
  {
    id: "typescript",
    title: "TypeScript",
    level: "Beginner / Comfortable",
    questions: [
      {
        prompt: "What is the difference between interface and type in TypeScript?",
        answer: "B",
        explanation: "Both define shapes. Interfaces can merge declarations, while type aliases are more flexible with unions and intersections.",
        options: {
          A: "They are completely different",
          B: "Both define shapes; interface is extendable via declaration merging, type can use unions and intersections more flexibly",
          C: "type is deprecated",
          D: "interface only works with classes"
        }
      },
      {
        prompt: "What does the ? do in function greet(name?: string)?",
        answer: "B",
        explanation: "The question mark makes the parameter optional.",
        options: {
          A: "Makes the parameter required",
          B: "Makes the parameter optional",
          C: "Throws an error",
          D: "Converts it to a number"
        }
      },
      {
        prompt: "What is a generic in TypeScript?",
        answer: "B",
        explanation: "Generics let code work across multiple types while keeping type information.",
        options: {
          A: "A default type",
          B: "A way to create reusable components that work with multiple types while preserving type safety",
          C: "A keyword for global variables",
          D: "A type of class"
        }
      }
    ]
  },
  {
    id: "python",
    title: "Python",
    level: "Beginner / Intermediate",
    questions: [
      {
        prompt: "What is the output of print([1, 2, 3] * 2)?",
        answer: "B",
        explanation: "Multiplying a list by 2 repeats the list.",
        options: {
          A: "[2, 4, 6]",
          B: "[1, 2, 3, 1, 2, 3]",
          C: "Error",
          D: "[1, 2, 3, 2]"
        }
      },
      {
        prompt: "What is a list comprehension in Python?",
        answer: "B",
        explanation: "A list comprehension is compact syntax for building a list from an expression and iterable.",
        options: {
          A: "A way to write a class",
          B: "A concise syntax for creating lists, e.g., [x*2 for x in range(5)]",
          C: "A loop replacement only for dictionaries",
          D: "A built-in function"
        }
      },
      {
        prompt: "What's the difference between a tuple and a list?",
        answer: "B",
        explanation: "Tuples are immutable. Lists are mutable.",
        options: {
          A: "Tuples are mutable, lists are not",
          B: "Tuples are immutable, lists are mutable",
          C: "They are identical",
          D: "Tuples can only hold numbers"
        }
      }
    ]
  },
  {
    id: "ai",
    title: "AI Integration",
    level: "Intermediate / Beginner",
    questions: [
      {
        prompt: "When integrating an LLM API, why is it important to handle streaming responses?",
        answer: "B",
        explanation: "Streaming improves perceived speed because users see output as it is generated.",
        options: {
          A: "Streaming is required by law",
          B: "It improves perceived performance by showing tokens as they're generated rather than waiting for the full response",
          C: "Streaming reduces accuracy",
          D: "It's only useful for images"
        }
      },
      {
        prompt: "What is a system prompt when working with an LLM?",
        answer: "B",
        explanation: "A system prompt sets behavior, role, style, and constraints for the model.",
        options: {
          A: "The user's first question",
          B: "Instructions that set the model's behavior, role, and constraints for the conversation",
          C: "An error message",
          D: "The model's response"
        }
      },
      {
        prompt: "Why should API keys for AI services never be stored in frontend code?",
        answer: "B",
        explanation: "Frontend code is visible to users, so exposed keys can be stolen and abused.",
        options: {
          A: "They make the bundle slow",
          B: "They would be exposed to anyone inspecting the client, allowing abuse and theft of the key",
          C: "Frontend code can't read them",
          D: "It's a style preference"
        }
      }
    ]
  },
  {
    id: "database",
    title: "MongoDB / SQL",
    level: "Beginner",
    questions: [
      {
        prompt: "What is the SQL command to retrieve all columns from a table named users?",
        answer: "B",
        explanation: "SELECT * FROM users retrieves every column from the users table.",
        options: {
          A: "GET * FROM users",
          B: "SELECT * FROM users",
          C: "FETCH ALL users",
          D: "RETURN users.*"
        }
      },
      {
        prompt: "What is a key difference between MongoDB and a SQL database?",
        answer: "B",
        explanation: "MongoDB stores flexible document data. SQL databases organize data relationally with schemas.",
        options: {
          A: "MongoDB doesn't store data",
          B: "MongoDB is document-based (NoSQL) using flexible JSON-like documents; SQL databases are relational with strict schemas",
          C: "MongoDB only runs on Windows",
          D: "SQL databases don't support indexes"
        }
      }
    ]
  },
  {
    id: "testing",
    title: "Testing",
    level: "Minimal Experience",
    questions: [
      {
        prompt: "What is the purpose of a unit test?",
        answer: "B",
        explanation: "A unit test checks a small piece of code in isolation.",
        options: {
          A: "To test the entire application end-to-end",
          B: "To test individual functions or components in isolation to verify they work as expected",
          C: "To test only the UI",
          D: "To replace manual testing entirely"
        }
      },
      {
        prompt: "What does mocking mean in testing?",
        answer: "B",
        explanation: "Mocking replaces real dependencies with controlled fakes so the test can focus on one unit.",
        options: {
          A: "Making fun of bad code",
          B: "Replacing real dependencies (APIs, databases, modules) with fake versions to isolate the code being tested",
          C: "Writing tests in a mocking tone",
          D: "A type of integration test"
        }
      }
    ]
  }
];

const IDK_VALUE = "IDK";
const IDK_LABEL = "I don't know";

const BANDS = [
  {
    min: 25,
    label: "Junior to Mid-Level Competitive",
    copy: "You are at or above the stated skill profile and can lean into full-stack junior to mid-level opportunities."
  },
  {
    min: 18,
    label: "Solid Foundation",
    copy: "You are roughly aligned with the stated self-assessment. Focus on missed topics, especially the intermediate areas."
  },
  {
    min: 12,
    label: "Fundamentals Need Work",
    copy: "There are gaps in core basics. Prioritize JavaScript behavior, React hooks, SQL syntax, and testing fundamentals."
  },
  {
    min: 0,
    label: "Early Fundamentals",
    copy: "Spend more time on fundamentals before applying. Build two or three portfolio projects covering React, Node, and a database."
  }
];

const sectionsEl = document.getElementById("sections");
const form = document.getElementById("quiz-form");
const studentDate = document.getElementById("student-date");
const answeredCount = document.getElementById("answered-count");
const completionStatus = document.getElementById("completion-status");
const progressFill = document.getElementById("progress-fill");
const scoreButton = document.getElementById("score-assessment");
const results = document.getElementById("results");
const studentSummary = document.getElementById("student-summary");
const totalScoreEl = document.getElementById("total-score");
const scoreBandEl = document.getElementById("score-band");
const scoreBandCard = document.getElementById("score-band-card");
const readinessCopy = document.getElementById("readiness-copy");
const strongestTech = document.getElementById("strongest-tech");
const focusTech = document.getElementById("focus-tech");
const idkCountEl = document.getElementById("idk-count");
const idkCopy = document.getElementById("idk-copy");
const scoreMeterFill = document.getElementById("score-meter-fill");
const sectionBreakdown = document.getElementById("section-breakdown");
const answerReview = document.getElementById("answer-review");
const printResults = document.getElementById("print-results");

const questions = SECTIONS.flatMap((section, sectionIndex) =>
  section.questions.map((question, questionIndex) => ({
    ...question,
    id: `q${sectionIndex + 1}-${questionIndex + 1}`,
    number: SECTIONS.slice(0, sectionIndex).reduce((sum, item) => sum + item.questions.length, 0) + questionIndex + 1,
    sectionId: section.id,
    sectionTitle: section.title
  }))
);

studentDate.valueAsDate = new Date();

function renderQuiz() {
  sectionsEl.innerHTML = SECTIONS.map((section, sectionIndex) => {
    const offset = SECTIONS.slice(0, sectionIndex).reduce((sum, item) => sum + item.questions.length, 0);
    const sectionQuestions = section.questions.map((question, questionIndex) =>
      renderQuestion({
        ...question,
        id: `q${sectionIndex + 1}-${questionIndex + 1}`,
        number: offset + questionIndex + 1
      })
    ).join("");

    return `
      <section class="section-card" aria-labelledby="${section.id}-title">
        <div class="section-heading">
          <p class="eyebrow">${section.questions.length} Questions | Target: ${escapeHtml(section.level)}</p>
          <h2 id="${section.id}-title">${escapeHtml(section.title)}</h2>
        </div>
        <div class="question-list">${sectionQuestions}</div>
      </section>
    `;
  }).join("");
}

function renderQuestion(question) {
  const code = question.code ? `<pre class="code-block"><code>${escapeHtml(question.code)}</code></pre>` : "";
  const options = Object.entries(question.options).map(([letter, text]) => `
    <label class="answer-option">
      <input type="radio" name="${question.id}" value="${letter}" />
      <span><strong>${letter}.</strong> ${escapeHtml(text)}</span>
    </label>
  `).join("");
  const idkOption = `
    <label class="answer-option idk-option">
      <input type="radio" name="${question.id}" value="${IDK_VALUE}" />
      <span><strong>IDK.</strong> ${escapeHtml(IDK_LABEL)}</span>
    </label>
  `;

  return `
    <article class="question-card" id="${question.id}-card">
      <div class="question-topline">
        <p class="question-title">${escapeHtml(question.prompt)}</p>
        <span class="question-number">Q${question.number}</span>
      </div>
      ${code}
      <div class="answer-list">${options}${idkOption}</div>
    </article>
  `;
}

function getSubmission() {
  const data = new FormData(form);
  const answers = Object.fromEntries(questions.map((question) => [question.id, data.get(question.id) || ""]));

  return {
    answers,
    student: {
      name: document.getElementById("student-name").value.trim(),
      date: studentDate.value,
      role: document.getElementById("student-role").value.trim()
    }
  };
}

function getSectionScores(submission) {
  return SECTIONS.map((section) => {
    const sectionQuestions = questions.filter((question) => question.sectionId === section.id);
    const score = sectionQuestions.filter((question) => submission.answers[question.id] === question.answer).length;
    const idkCount = sectionQuestions.filter((question) => submission.answers[question.id] === IDK_VALUE).length;
    const percent = Math.round((score / sectionQuestions.length) * 100);

    return {
      id: section.id,
      title: section.title,
      target: section.level,
      score,
      max: sectionQuestions.length,
      idkCount,
      percent,
      label: getTechnologyLevel(percent)
    };
  });
}

function getTechnologyLevel(percent) {
  if (percent >= 90) return "Strong";
  if (percent >= 75) return "Aligned";
  if (percent >= 50) return "Developing";
  return "Needs Review";
}

function getBand(score) {
  return BANDS.find((band) => score >= band.min);
}

function updateProgress() {
  const submission = getSubmission();
  const answered = questions.filter((question) => submission.answers[question.id]).length;
  const complete = answered === questions.length;

  answeredCount.textContent = `${answered} of ${questions.length} questions answered`;
  completionStatus.textContent = complete ? "Ready to score" : "Results unlock after every question is answered";
  progressFill.style.width = `${(answered / questions.length) * 100}%`;
  scoreButton.disabled = !complete;
}

function showResults() {
  const submission = getSubmission();
  const unanswered = questions.find((question) => !submission.answers[question.id]);

  if (unanswered) {
    focusQuestion(unanswered.id);
    return;
  }

  const total = questions.filter((question) => submission.answers[question.id] === question.answer).length;
  const idkTotal = questions.filter((question) => submission.answers[question.id] === IDK_VALUE).length;
  const band = getBand(total);
  const sectionScores = getSectionScores(submission);
  const strongest = [...sectionScores].sort((a, b) => b.percent - a.percent)[0];
  const focus = [...sectionScores].sort((a, b) => a.percent - b.percent)[0];

  markAnswers(submission);
  totalScoreEl.textContent = `${total}/${questions.length}`;
  scoreBandEl.textContent = band.label;
  scoreBandCard.textContent = band.label;
  readinessCopy.textContent = band.copy;
  strongestTech.textContent = `${strongest.title}: ${strongest.label} (${strongest.score}/${strongest.max})`;
  focusTech.textContent = `${focus.title}: ${focus.label} (${focus.score}/${focus.max})`;
  idkCountEl.textContent = `${idkTotal}/${questions.length}`;
  idkCopy.textContent = idkTotal
    ? `${idkTotal} answer${idkTotal === 1 ? "" : "s"} were marked "I don't know" and counted as incorrect.`
    : "No answers were marked \"I don't know\".";
  scoreMeterFill.style.width = `${(total / questions.length) * 100}%`;

  const name = submission.student.name || "Client";
  const role = submission.student.role || "Full-stack web developer";
  const date = submission.student.date || "No date entered";
  studentSummary.textContent = `${name} | ${role} | ${date}`;

  renderSectionBreakdown(sectionScores);
  renderAnswerReview(submission);

  results.classList.add("is-visible");
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSectionBreakdown(sectionScores) {
  sectionBreakdown.innerHTML = sectionScores.map((section) => `
    <div class="breakdown-row">
      <span>${escapeHtml(section.title)}</span>
      <div class="mini-meter" aria-hidden="true"><i style="width: ${section.percent}%"></i></div>
      <strong>${section.score}/${section.max} ${escapeHtml(section.label)}${section.idkCount ? ` | ${section.idkCount} IDK` : ""}</strong>
    </div>
  `).join("");
}

function renderAnswerReview(submission) {
  answerReview.innerHTML = questions.map((question) => {
    const selected = submission.answers[question.id];
    const isCorrect = selected === question.answer;
    const isIdk = selected === IDK_VALUE;

    return `
      <article class="review-item ${isCorrect ? "is-correct" : "is-incorrect"}">
        <div class="review-topline">
          <h4>Q${question.number}. ${escapeHtml(question.sectionTitle)}</h4>
          <span>${isCorrect ? "Correct" : isIdk ? "I don't know" : "Review"}</span>
        </div>
        <p>${escapeHtml(question.prompt)}</p>
        ${question.code ? `<pre class="code-block"><code>${escapeHtml(question.code)}</code></pre>` : ""}
        <div class="answer-result">
          <strong>Your answer:</strong> ${escapeHtml(formatAnswer(selected, question))}
        </div>
        <div class="answer-result correct-answer">
          <strong>Correct answer:</strong> ${escapeHtml(formatAnswer(question.answer, question))}
        </div>
        <p>${escapeHtml(question.explanation)}</p>
      </article>
    `;
  }).join("");
}

function formatAnswer(value, question) {
  if (value === IDK_VALUE) {
    return `IDK. ${IDK_LABEL}`;
  }

  return `${value}. ${question.options[value]}`;
}

function markAnswers(submission) {
  questions.forEach((question) => {
    const card = document.getElementById(`${question.id}-card`);
    const isCorrect = submission.answers[question.id] === question.answer;

    card.classList.toggle("is-correct", isCorrect);
    card.classList.toggle("is-incorrect", !isCorrect);
  });
}

function focusQuestion(questionId) {
  const card = document.getElementById(`${questionId}-card`);
  card.scrollIntoView({ behavior: "smooth", block: "center" });
  card.querySelector("input")?.focus({ preventScroll: true });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderQuiz();
updateProgress();

form.addEventListener("input", updateProgress);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  showResults();
});

printResults.addEventListener("click", () => {
  if (!results.classList.contains("is-visible")) {
    updateProgress();
    return;
  }

  window.print();
});
