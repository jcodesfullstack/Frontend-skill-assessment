const sections = [
  {
    title: "JavaScript Fundamentals",
    description: "Core mental models that support React, Node, and TypeScript work.",
    questions: [
      {
        prompt: "What does the following log?",
        code: "console.log(typeof null);",
        options: {
          A: "\"null\"",
          B: "\"object\"",
          C: "\"undefined\"",
          D: "\"boolean\""
        },
        answer: "B"
      },
      {
        prompt: "What is the output?",
        code: "console.log(1 + \"2\" + 3);",
        options: {
          A: "6",
          B: "\"123\"",
          C: "\"15\"",
          D: "\"33\""
        },
        answer: "B"
      },
      {
        prompt: "What is the difference between let and const?",
        options: {
          A: "const variables cannot be reassigned; let variables can",
          B: "const is function-scoped; let is block-scoped",
          C: "const cannot hold objects; let can",
          D: "There is no functional difference"
        },
        answer: "A"
      },
      {
        prompt: "What does === do that == does not?",
        options: {
          A: "Compares value and type without coercion",
          B: "Compares only the type",
          C: "Is faster but otherwise identical",
          D: "Checks reference equality only"
        },
        answer: "A"
      },
      {
        prompt: "What is the output?",
        code: "const arr = [1, 2, 3];\nconst doubled = arr.map(x => x * 2);\nconsole.log(arr);",
        options: {
          A: "[2, 4, 6]",
          B: "[1, 2, 3]",
          C: "undefined",
          D: "[1, 2, 3, 2, 4, 6]"
        },
        answer: "B"
      }
    ]
  },
  {
    title: "TypeScript",
    description: "Beginner TypeScript concepts junior frontend roles increasingly expect.",
    questions: [
      {
        prompt: "What is the main benefit TypeScript adds over JavaScript?",
        options: {
          A: "It runs faster in the browser",
          B: "Static type checking at compile time",
          C: "It replaces the need for a bundler",
          D: "It allows you to write CSS in JS"
        },
        answer: "B"
      },
      {
        prompt: "What does this type mean?",
        code: "let value: string | number;",
        options: {
          A: "value must be both a string and a number",
          B: "value can be either a string or a number",
          C: "value is an array of strings and numbers",
          D: "This is a syntax error"
        },
        answer: "B"
      },
      {
        prompt: "What is the purpose of an interface in TypeScript?",
        options: {
          A: "To define the shape/structure of an object",
          B: "To create a new HTML element",
          C: "To make a network request",
          D: "To define a CSS class"
        },
        answer: "A"
      },
      {
        prompt: "What does the ? do here?",
        code: "interface User {\n  name: string;\n  email?: string;\n}",
        options: {
          A: "Makes email a required field",
          B: "Makes email an optional field",
          C: "Makes email a nullable string only",
          D: "Marks email as deprecated"
        },
        answer: "B"
      }
    ]
  },
  {
    title: "React",
    description: "The concepts that separate following a tutorial from understanding the model.",
    questions: [
      {
        prompt: "Why do you need a key prop when rendering a list of elements?",
        options: {
          A: "It's required for CSS styling",
          B: "It helps React identify which items changed, were added, or removed",
          C: "It sets the unique HTML id attribute",
          D: "It's optional and has no real effect"
        },
        answer: "B"
      },
      {
        prompt: "What does the useState hook return?",
        options: {
          A: "Just the current state value",
          B: "An array with the current state value and a function to update it",
          C: "A function that returns the state",
          D: "An object with get and set methods"
        },
        answer: "B"
      },
      {
        prompt: "When does a React component re-render? Choose the best answer.",
        options: {
          A: "Only when the page is refreshed",
          B: "When its state or props change",
          C: "Every second automatically",
          D: "Only when you call document.refresh()"
        },
        answer: "B"
      },
      {
        prompt: "What is wrong with this code?",
        code: "function Counter() {\n  const [count, setCount] = useState(0);\n  count = count + 1; // increment\n  return <div>{count}</div>;\n}",
        options: {
          A: "Nothing, it works fine",
          B: "You should never mutate state directly; use setCount instead",
          C: "useState should be called inside the return",
          D: "The div needs a key prop"
        },
        answer: "B"
      },
      {
        prompt: "What is the purpose of the dependency array in useEffect?",
        options: {
          A: "It lists the npm packages the effect needs",
          B: "It controls when the effect re-runs based on changed values",
          C: "It's purely decorative",
          D: "It defines the return type of the effect"
        },
        answer: "B"
      }
    ]
  },
  {
    title: "HTML / CSS",
    description: "Intro to intermediate concepts juniors are expected to know quickly.",
    questions: [
      {
        prompt: "What is the difference between display: none and visibility: hidden?",
        options: {
          A: "They are identical",
          B: "display: none removes the element from layout; visibility: hidden hides it but keeps its space",
          C: "visibility: hidden removes it from layout; display: none keeps its space",
          D: "Only display: none works in modern browsers"
        },
        answer: "B"
      },
      {
        prompt: "Which has the highest CSS specificity?",
        options: {
          A: "An element selector (div)",
          B: "A class selector (.btn)",
          C: "An ID selector (#header)",
          D: "They are all equal"
        },
        answer: "C"
      },
      {
        prompt: "What does semantic HTML, such as header, nav, and article, primarily improve?",
        options: {
          A: "Page load speed only",
          B: "Accessibility and SEO/document meaning",
          C: "JavaScript execution speed",
          D: "Nothing; it's the same as using div everywhere"
        },
        answer: "B"
      }
    ]
  },
  {
    title: "SQL & Databases",
    description: "Beginner database fundamentals with high interview and job ROI.",
    questions: [
      {
        prompt: "Which SQL clause filters rows before grouping?",
        options: {
          A: "HAVING",
          B: "WHERE",
          C: "ORDER BY",
          D: "GROUP BY"
        },
        answer: "B"
      },
      {
        prompt: "What does a JOIN do?",
        options: {
          A: "Combines rows from two or more tables based on a related column",
          B: "Deletes duplicate rows",
          C: "Merges two databases into one",
          D: "Sorts the result set"
        },
        answer: "A"
      },
      {
        prompt: "What is a primary key?",
        options: {
          A: "A column that can contain duplicate values",
          B: "A column or set that uniquely identifies each row in a table",
          C: "The first column in any table",
          D: "A password for the database"
        },
        answer: "B"
      },
      {
        prompt: "What's the key conceptual difference between SQL, such as PostgreSQL, and NoSQL, such as MongoDB?",
        options: {
          A: "SQL is faster in every case",
          B: "SQL uses structured tables with a fixed schema; NoSQL document stores are more flexible/schema-light",
          C: "NoSQL cannot store any structured data",
          D: "There is no difference; the names are interchangeable"
        },
        answer: "B"
      }
    ]
  },
  {
    title: "Data Structures & Algorithms",
    description: "The most common technical interview gate for junior candidates.",
    questions: [
      {
        prompt: "What is the time complexity of looking up a value by key in a hash map, average case?",
        options: {
          A: "O(n)",
          B: "O(log n)",
          C: "O(1)",
          D: "O(n^2)"
        },
        answer: "C"
      },
      {
        prompt: "You need to check if a string of brackets like ([]) is balanced. Which data structure fits best?",
        options: {
          A: "A queue",
          B: "A stack",
          C: "A hash map",
          D: "A linked list"
        },
        answer: "B"
      },
      {
        prompt: "What does Big O notation describe?",
        options: {
          A: "The exact runtime in seconds",
          B: "How an algorithm's resource use grows as input size grows",
          C: "The number of lines of code",
          D: "The memory address of a variable"
        },
        answer: "B"
      },
      {
        prompt: "What is the time complexity of a binary search on a sorted array of n elements?",
        options: {
          A: "O(n)",
          B: "O(1)",
          C: "O(log n)",
          D: "O(n log n)"
        },
        answer: "C"
      }
    ]
  },
  {
    title: "Web Architecture & System Design",
    description: "End-to-end web concepts juniors should recognize and explain.",
    questions: [
      {
        prompt: "What does an API typically do in a web application?",
        options: {
          A: "Styles the user interface",
          B: "Lets the frontend and backend, or different services, communicate, usually over HTTP",
          C: "Stores images on the user's device",
          D: "Compiles JavaScript"
        },
        answer: "B"
      },
      {
        prompt: "What is the difference between HTTP status codes 200, 404, and 500?",
        options: {
          A: "200 = success, 404 = resource not found, 500 = server error",
          B: "200 = error, 404 = success, 500 = redirect",
          C: "They are all success codes",
          D: "200 = not found, 404 = server error, 500 = success"
        },
        answer: "A"
      },
      {
        prompt: "What does client-side rendering vs server-side rendering refer to?",
        options: {
          A: "Whether the HTML is built in the browser (CSR) or on the server before sending (SSR)",
          B: "Which programming language is used",
          C: "Whether the site uses CSS",
          D: "The physical location of the data center"
        },
        answer: "A"
      }
    ]
  },
  {
    title: "Backend, Git & AWS",
    description: "Applied concepts around Node, Express, Git, and work-adjacent backend skills.",
    questions: [
      {
        prompt: "In Git, what does git merge do that git rebase does not?",
        options: {
          A: "Nothing, they are identical",
          B: "merge creates a merge commit preserving branch history; rebase rewrites commits onto a new base for a linear history",
          C: "merge deletes the branch; rebase keeps it",
          D: "rebase is only for remote repos; merge is only local"
        },
        answer: "B"
      },
      {
        prompt: "In a Node/Express backend, what is middleware?",
        options: {
          A: "A database that sits between two servers",
          B: "A function that runs during the request/response cycle, with access to req, res, and next",
          C: "A frontend styling library",
          D: "A type of AWS server"
        },
        answer: "B"
      }
    ]
  }
];

const scoreBands = [
  {
    min: 25,
    max: 30,
    level: "Approaching market-ready",
    copy: "Your fundamentals are solid. Gaps are likely depth, not breadth."
  },
  {
    min: 18,
    max: 24,
    level: "Solid beginner, real gaps",
    copy: "You have working knowledge, but the fundamentals are inconsistent."
  },
  {
    min: 12,
    max: 17,
    level: "Early beginner",
    copy: "Core concepts are still forming. Rebuild fundamentals before going wider."
  },
  {
    min: 0,
    max: 11,
    level: "Foundation-building phase",
    copy: "You are at the beginning of the runway. Keep the roadmap focused and honest."
  }
];

const quizRoot = document.getElementById("quiz-root");
const form = document.getElementById("quiz-form");
const progressLabel = document.getElementById("progress-label");
const progressMeter = document.getElementById("progress-meter");
const submitButton = document.getElementById("submit-button");
const submitHint = document.getElementById("submit-hint");
const resetButton = document.getElementById("reset-button");
const results = document.getElementById("results");
const resultsTitle = document.getElementById("results-title");
const resultsCopy = document.getElementById("results-copy");
const scoreValue = document.getElementById("score-value");
const scoreLevel = document.getElementById("score-level");
const percentValue = document.getElementById("percent-value");
const rightList = document.getElementById("right-list");
const answerKey = document.getElementById("answer-key");

const questions = sections.flatMap((section) =>
  section.questions.map((question) => ({ ...question, section: section.title }))
);
const idkOption = ["IDK", "I don't know"];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function getSelectedAnswers() {
  return new Map(
    [...new FormData(form).entries()].map(([name, value]) => [Number(name.replace("q", "")), value])
  );
}

function getScoreBand(score) {
  return scoreBands.find((band) => score >= band.min && score <= band.max);
}

function renderQuiz() {
  let questionNumber = 0;

  quizRoot.innerHTML = sections
    .map((section, sectionIndex) => {
      const questionCards = section.questions
        .map((question) => {
          questionNumber += 1;
          const options = [...Object.entries(question.options), idkOption]
            .map(
              ([letter, text]) => `
                <label class="option">
                  <input type="radio" name="q${questionNumber}" value="${letter}" />
                  <span class="option-letter">${letter}</span>
                  <span>${escapeHtml(text)}</span>
                </label>
              `
            )
            .join("");

          return `
            <article class="question-card" id="question-${questionNumber}">
              <div class="question-topline">
                <span>Q${questionNumber}</span>
                <span>${escapeHtml(section.title)}</span>
              </div>
              <h3>${escapeHtml(question.prompt)}</h3>
              ${question.code ? `<pre><code>${escapeHtml(question.code)}</code></pre>` : ""}
              <div class="options">${options}</div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="quiz-section" aria-labelledby="section-${sectionIndex}">
          <div class="section-heading">
            <p class="eyebrow">Section ${sectionIndex + 1}</p>
            <h2 id="section-${sectionIndex}">${escapeHtml(section.title)}</h2>
            <p>${escapeHtml(section.description)}</p>
          </div>
          <div class="question-grid">${questionCards}</div>
        </section>
      `;
    })
    .join("");
}

function updateProgress() {
  const answered = getSelectedAnswers().size;
  const total = questions.length;
  const remaining = total - answered;

  progressLabel.textContent = `${answered}/${total} answered`;
  progressMeter.style.width = `${(answered / total) * 100}%`;
  submitButton.disabled = answered !== total;
  submitHint.textContent =
    remaining === 0
      ? "All set. Submit when you are ready to reveal the answer key."
      : `Answer ${remaining} more ${remaining === 1 ? "question" : "questions"} to unlock your score and answer key.`;
}

function renderResults() {
  const selectedAnswers = getSelectedAnswers();
  const review = questions.map((question, index) => {
    const number = index + 1;
    const selected = selectedAnswers.get(number);
    return {
      number,
      question,
      selected,
      isCorrect: selected === question.answer
    };
  });
  const correct = review.filter((item) => item.isCorrect);
  const score = correct.length;
  const band = getScoreBand(score);
  const percentage = Math.round((score / questions.length) * 100);

  results.classList.remove("is-hidden");
  resultsTitle.textContent = `${band.level}: ${score}/${questions.length}`;
  resultsCopy.textContent = band.copy;
  scoreValue.textContent = `${score}/${questions.length}`;
  scoreLevel.textContent = band.level;
  percentValue.textContent = `${percentage}%`;
  rightList.innerHTML = correct.length
    ? correct.map((item) => `<span>Q${item.number}</span>`).join("")
    : "<p>No questions were marked correct this time.</p>";
  answerKey.innerHTML = review
    .map((item) => {
      const selectedText = item.selected === idkOption[0]
        ? `${idkOption[0]}) ${idkOption[1]}`
        : item.selected
        ? `${item.selected}) ${item.question.options[item.selected]}`
        : "No answer";
      const correctText = `${item.question.answer}) ${item.question.options[item.question.answer]}`;

      return `
        <article class="answer-row ${item.isCorrect ? "is-correct" : "is-wrong"}">
          <div>
            <span class="answer-status">${item.isCorrect ? "Correct" : "Review"}</span>
            <h4>Q${item.number}. ${escapeHtml(item.question.prompt)}</h4>
            <p>Your answer: ${escapeHtml(selectedText)}</p>
            <p>Correct answer: ${escapeHtml(correctText)}</p>
          </div>
        </article>
      `;
    })
    .join("");

  results.focus();
}

renderQuiz();
updateProgress();

form.addEventListener("change", updateProgress);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (getSelectedAnswers().size !== questions.length) {
    updateProgress();
    return;
  }
  renderResults();
});

resetButton.addEventListener("click", () => {
  form.reset();
  results.classList.add("is-hidden");
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
