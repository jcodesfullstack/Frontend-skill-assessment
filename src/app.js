const sections = [
  {
    title: "JavaScript",
    questions: [
      {
        prompt: "What will the following code output?",
        code: "console.log(typeof null);",
        options: ["null", "undefined", "object", "string"],
        answer: "C"
      },
      {
        prompt: "Which method creates a new array without modifying the original array?",
        options: ["splice()", "push()", "pop()", "map()"],
        answer: "D"
      },
      {
        prompt: "What is the difference between == and ===?",
        options: ["No difference", "=== checks value only", "== checks value and type", "=== checks value and type"],
        answer: "D"
      },
      {
        prompt: "What will this code return?",
        code: "const nums = [1, 2, 3];\nconst result = nums.reduce((acc, num) => acc + num, 0);\n\nconsole.log(result);",
        options: ["3", "5", "6", "0"],
        answer: "C"
      },
      {
        prompt: "Which JavaScript feature allows functions to remember variables from their outer scope?",
        options: ["Hoisting", "Closure", "Promise", "Prototype"],
        answer: "B"
      }
    ]
  },
  {
    title: "TypeScript",
    questions: [
      {
        prompt: "What is the main purpose of TypeScript?",
        options: ["Improve CSS styling", "Add static typing to JavaScript", "Replace React", "Improve browser speed"],
        answer: "B"
      },
      {
        prompt: "Which type correctly represents a variable that can be either a string or number?",
        options: ["string && number", "string | number", "string + number", "any"],
        answer: "B"
      },
      {
        prompt: "What does the following mean?",
        code: "interface User {\n  name: string;\n  age?: number;\n}",
        options: ["age is required", "age must be null", "age is optional", "age is a string"],
        answer: "C"
      },
      {
        prompt: "Which keyword creates a custom reusable type?",
        options: ["interface", "define", "model", "struct"],
        answer: "A"
      },
      {
        prompt: "Which TypeScript type should generally be avoided because it removes type safety?",
        options: ["unknown", "never", "any", "string"],
        answer: "C"
      }
    ]
  },
  {
    title: "React & Next.js",
    questions: [
      {
        prompt: "What causes a React component to re-render?",
        options: ["CSS updates", "State or prop changes", "Browser refresh only", "Git commits"],
        answer: "B"
      },
      {
        prompt: "Which hook is used to manage component state?",
        options: ["useMemo", "useEffect", "useState", "useRef"],
        answer: "C"
      },
      {
        prompt: "What is the purpose of useEffect?",
        options: ["Create components", "Handle side effects", "Create routes", "Style components"],
        answer: "B"
      },
      {
        prompt: "What is one major benefit of Next.js compared to standard React?",
        options: ["Built-in routing and server-side rendering", "Replaces JavaScript", "Eliminates CSS", "Doesn't require React"],
        answer: "A"
      },
      {
        prompt: "When rendering a list in React, why are keys important?",
        options: ["Improve styling", "Prevent compilation errors", "Help React identify changed elements efficiently", "Required for API calls"],
        answer: "C"
      }
    ]
  },
  {
    title: "HTML, CSS & Accessibility",
    questions: [
      {
        prompt: "Which HTML element is most semantically appropriate for site navigation?",
        options: ["div", "section", "nav", "span"],
        answer: "C"
      },
      {
        prompt: "What does CSS Flexbox primarily help with?",
        options: ["Database queries", "Layout and alignment", "State management", "Routing"],
        answer: "B"
      },
      {
        prompt: "Which accessibility practice is most important for images?",
        options: ["Use PNG files only", "Add alt text when appropriate", "Compress images", "Use SVG"],
        answer: "B"
      },
      {
        prompt: "What is the CSS specificity order from highest to lowest?",
        options: ["Element -> Class -> ID", "ID -> Class -> Element", "Class -> ID -> Element", "ID -> Element -> Class"],
        answer: "B"
      },
      {
        prompt: "What does the following CSS do?",
        code: "box-sizing: border-box;",
        options: [
          "Removes padding",
          "Includes padding and border in total element width/height",
          "Creates responsive layouts",
          "Centers content"
        ],
        answer: "B"
      }
    ]
  },
  {
    title: "Git, Node.js & SQL",
    questions: [
      {
        prompt: "Which Git command uploads local commits to GitHub?",
        options: ["git pull", "git push", "git merge", "git clone"],
        answer: "B"
      },
      {
        prompt: "What does git pull do?",
        options: ["Deletes commits", "Downloads and merges remote changes", "Creates a repository", "Pushes code"],
        answer: "B"
      },
      {
        prompt: "What is Node.js primarily used for?",
        options: ["Database management", "Running JavaScript outside the browser", "Styling applications", "Mobile app development"],
        answer: "B"
      },
      {
        prompt: "What is Express.js?",
        options: ["Frontend framework", "CSS framework", "Backend framework for Node.js", "Database"],
        answer: "C"
      },
      {
        prompt: "Which SQL statement retrieves data?",
        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
        answer: "C"
      }
    ]
  },
  {
    title: "Industry Readiness",
    subtitle: "Testing, AI, Cloud, Performance",
    questions: [
      {
        prompt: "What is the primary goal of frontend testing?",
        options: ["Improve CSS", "Verify code behaves as expected", "Improve Git workflow", "Deploy applications"],
        answer: "B"
      },
      {
        prompt: "Which testing library is commonly used with React?",
        options: ["Jest", "MongoDB", "Prisma", "Docker"],
        answer: "A"
      },
      {
        prompt: "When integrating an AI API like Anthropic or OpenAI, where should API keys generally be stored?",
        options: ["React component", "Browser local storage", "Backend environment variables", "GitHub repository"],
        answer: "C"
      },
      {
        prompt: "What is AWS?",
        options: ["JavaScript framework", "Cloud computing platform", "SQL database", "React library"],
        answer: "B"
      },
      {
        prompt: "Which frontend optimization improves page load speed the most?",
        options: ["Adding more animations", "Larger images", "Code splitting and lazy loading", "More JavaScript files"],
        answer: "C"
      }
    ]
  }
];

const scoreBands = [
  {
    min: 27,
    max: 30,
    title: "Job Market Ready Frontend Engineer",
    strengths: ["Strong React/Next.js fundamentals", "Good JavaScript understanding", "Likely capable of passing many junior-mid frontend interviews"],
    focus: ["System design", "Testing", "Cloud deployment", "Advanced performance optimization"]
  },
  {
    min: 22,
    max: 26,
    title: "Solid Junior Frontend Engineer",
    strengths: ["Has enough technical knowledge to contribute professionally"],
    focus: ["TypeScript depth", "Testing", "Backend fundamentals", "Cloud technologies"],
    recommended: ["Testing with Jest and React Testing Library", "TypeScript", "AWS basics", "SQL", "Node/Express"]
  },
  {
    min: 16,
    max: 21,
    title: "Developing Frontend Engineer",
    strengths: ["Basic competency exists"],
    focus: ["React fundamentals", "TypeScript", "State management", "Git workflow", "Backend communication"],
    recommended: ["Advanced JavaScript", "React patterns", "TypeScript", "SQL basics", "Testing fundamentals"]
  },
  {
    min: 10,
    max: 15,
    title: "Beginner Frontend Engineer",
    strengths: [],
    focus: ["JavaScript fundamentals", "React lifecycle", "Git workflow", "Accessibility", "TypeScript basics"],
    recommended: ["Foundational project building before applying heavily"]
  },
  {
    min: 0,
    max: 9,
    title: "Early Learning Stage",
    strengths: [],
    focus: ["HTML/CSS", "JavaScript fundamentals", "React basics", "Git fundamentals", "Building 3-5 small projects"],
    recommended: ["Focus on foundations before Next.js, AI integration, or cloud technologies"]
  }
];

const idkAnswer = {
  letter: "E",
  text: "I don't know"
};
const letterLabels = ["A", "B", "C", "D", idkAnswer.letter];
const totalQuestions = sections.reduce((sum, section) => sum + section.questions.length, 0);

const form = document.getElementById("quiz-form");
const questionsContainer = document.getElementById("quiz-questions");
const progressLabel = document.getElementById("progress-label");
const progressMeter = document.getElementById("progress-meter");
const formMessage = document.getElementById("form-message");
const results = document.getElementById("results");
const resultsOutput = document.getElementById("results-output");
const retakeButton = document.getElementById("retake-button");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function questionName(questionNumber) {
  return `question-${questionNumber}`;
}

function optionId(questionNumber, letter) {
  return `question-${questionNumber}-${letter.toLowerCase()}`;
}

function renderQuiz() {
  let questionNumber = 1;

  questionsContainer.innerHTML = sections
    .map((section, sectionIndex) => {
      const questionsHtml = section.questions
        .map((question) => {
          const currentNumber = questionNumber++;
          const optionsHtml = [...question.options, idkAnswer.text]
            .map((option, optionIndex) => {
              const letter = letterLabels[optionIndex];
              const id = optionId(currentNumber, letter);

              return `
                <label class="option-card" for="${id}">
                  <input id="${id}" type="radio" name="${questionName(currentNumber)}" value="${letter}" />
                  <span class="option-letter">${letter}</span>
                  <span>${escapeHtml(option)}</span>
                </label>
              `;
            })
            .join("");

          return `
            <article class="question-card" data-question-card="${currentNumber}">
              <div class="question-heading">
                <span>Question ${currentNumber}</span>
                <h3>${escapeHtml(question.prompt)}</h3>
              </div>
              ${question.code ? `<pre><code>${escapeHtml(question.code)}</code></pre>` : ""}
              <div class="option-grid">${optionsHtml}</div>
            </article>
          `;
        })
        .join("");

      return `
        <section class="quiz-group" aria-labelledby="section-${sectionIndex + 1}">
          <div class="section-heading">
            <p class="eyebrow">Section ${sectionIndex + 1}</p>
            <h2 id="section-${sectionIndex + 1}">${escapeHtml(section.title)}</h2>
            ${section.subtitle ? `<p>${escapeHtml(section.subtitle)}</p>` : ""}
          </div>
          ${questionsHtml}
        </section>
      `;
    })
    .join("");
}

function getSelections() {
  const formData = new FormData(form);
  const selections = {};

  for (let questionNumber = 1; questionNumber <= totalQuestions; questionNumber += 1) {
    selections[questionNumber] = formData.get(questionName(questionNumber));
  }

  return selections;
}

function updateProgress() {
  const answered = Object.values(getSelections()).filter(Boolean).length;
  progressLabel.textContent = `${answered} of ${totalQuestions} answered`;
  progressMeter.style.width = `${(answered / totalQuestions) * 100}%`;
  formMessage.textContent = answered === totalQuestions ? "Ready to submit." : "";
}

function getQuestionByNumber(number) {
  let cursor = 1;

  for (const section of sections) {
    for (const question of section.questions) {
      if (cursor === number) {
        return { section, question };
      }
      cursor += 1;
    }
  }

  return null;
}

function gradeQuiz(selections) {
  let totalCorrect = 0;
  let totalIdk = 0;
  let cursor = 1;

  const sectionScores = sections.map((section) => {
    let correct = 0;
    let idk = 0;

    section.questions.forEach((question) => {
      if (selections[cursor] === question.answer) {
        correct += 1;
        totalCorrect += 1;
      }

      if (selections[cursor] === idkAnswer.letter) {
        idk += 1;
        totalIdk += 1;
      }

      cursor += 1;
    });

    return {
      title: section.title,
      score: correct,
      idk,
      interpretation: sectionInterpretation(correct)
    };
  });

  return { totalCorrect, totalIdk, sectionScores };
}

function sectionInterpretation(score) {
  if (score <= 2) return "Major weakness";
  if (score === 3) return "Needs improvement";
  if (score === 4) return "Good";
  return "Interview ready";
}

function scoreBand(score) {
  return scoreBands.find((band) => score >= band.min && score <= band.max);
}

function listHtml(items) {
  if (!items || items.length === 0) return "";
  return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function optionText(question, letter) {
  if (letter === idkAnswer.letter) {
    return idkAnswer.text;
  }

  const index = letterLabels.indexOf(letter);
  return question.options[index] ?? "";
}

function renderResults(selections, grade) {
  const band = scoreBand(grade.totalCorrect);
  const percentage = Math.round((grade.totalCorrect / totalQuestions) * 100);

  const sectionDiagnosis = grade.sectionScores
    .map(
      (section) => `
        <article class="diagnosis-card">
          <span>${escapeHtml(section.title)}</span>
          <strong>${section.score} / 5</strong>
          <p>${escapeHtml(section.interpretation)}</p>
          ${section.idk > 0 ? `<small>${section.idk} marked I don't know</small>` : ""}
        </article>
      `
    )
    .join("");

  const reviewRows = Array.from({ length: totalQuestions }, (_, index) => {
    const questionNumber = index + 1;
    const item = getQuestionByNumber(questionNumber);
    const selected = selections[questionNumber];
    const isCorrect = selected === item.question.answer;
    const isIdk = selected === idkAnswer.letter;

    return `
      <tr>
        <td>${questionNumber}</td>
        <td>${escapeHtml(item.section.title)}</td>
        <td>
          <span class="status-pill ${isCorrect ? "is-correct" : isIdk ? "is-idk" : "is-incorrect"}">
            ${isCorrect ? "Correct" : isIdk ? "IDK" : "Review"}
          </span>
        </td>
        <td>${escapeHtml(selected)} - ${escapeHtml(optionText(item.question, selected))}</td>
        <td>${escapeHtml(item.question.answer)} - ${escapeHtml(optionText(item.question, item.question.answer))}</td>
      </tr>
    `;
  }).join("");

  resultsOutput.innerHTML = `
    <div class="score-panel">
      <div>
        <span class="score-kicker">Final Score</span>
        <strong>${grade.totalCorrect} / ${totalQuestions}</strong>
        <p>${percentage}% correct | ${grade.totalIdk} marked I don't know</p>
      </div>
      <div>
        <h3>${escapeHtml(band.title)}</h3>
        <p>This interpretation is based on the submitted answers. IDK selections are counted separately so guessing does not hide knowledge gaps.</p>
      </div>
    </div>

    <div class="results-grid">
      <article class="insight-panel">
        <h3>Strengths</h3>
        ${listHtml(band.strengths.length ? band.strengths : ["Foundational progress has started"])}
      </article>
      <article class="insight-panel">
        <h3>Focus Areas</h3>
        ${listHtml(band.focus)}
      </article>
      ${band.recommended ? `<article class="insight-panel wide"><h3>Recommended Priority</h3>${listHtml(band.recommended)}</article>` : ""}
    </div>

    <div class="section-diagnosis">
      <div class="section-heading">
        <p class="eyebrow">Skill Gap Diagnosis</p>
        <h2>Section scores</h2>
      </div>
      <div class="diagnosis-grid">${sectionDiagnosis}</div>
    </div>

    <div class="answer-review">
      <div class="section-heading">
        <p class="eyebrow">Answer Key</p>
        <h2>Review after submission</h2>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Section</th>
              <th>Status</th>
              <th>Submitted</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody>${reviewRows}</tbody>
        </table>
      </div>
    </div>
  `;
}

form.addEventListener("change", (event) => {
  const optionCard = event.target.closest(".option-card");
  const questionCard = event.target.closest(".question-card");

  if (optionCard && questionCard) {
    questionCard.querySelectorAll(".option-card").forEach((card) => {
      card.classList.toggle("is-selected", card === optionCard);
    });
  }

  updateProgress();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const selections = getSelections();
  const unanswered = Object.entries(selections)
    .filter(([, value]) => !value)
    .map(([number]) => Number(number));

  if (unanswered.length > 0) {
    const firstUnanswered = document.querySelector(`[data-question-card="${unanswered[0]}"]`);
    formMessage.textContent = `Please answer all questions before submitting. First missing: Question ${unanswered[0]}.`;
    firstUnanswered?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  renderResults(selections, gradeQuiz(selections));
  results.classList.remove("is-hidden");
  results.focus();
  results.scrollIntoView({ behavior: "smooth" });
});

retakeButton.addEventListener("click", () => {
  form.reset();
  results.classList.add("is-hidden");
  resultsOutput.innerHTML = "";
  formMessage.textContent = "";
  document.querySelectorAll(".option-card").forEach((card) => card.classList.remove("is-selected"));
  updateProgress();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
});

renderQuiz();
updateProgress();
