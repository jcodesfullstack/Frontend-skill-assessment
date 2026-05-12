const SECTIONS = [
  {
    id: "html-css",
    title: "HTML & CSS",
    subtitle: "Foundational web structure and styling",
    questions: [
      {
        id: "q1",
        number: 1,
        type: "choice",
        prompt: "What does HTML stand for?",
        answer: "A",
        options: {
          A: "HyperText Markup Language",
          B: "High Transfer Markup Layout",
          C: "HyperText Managing Links",
          D: "Hosted Text Markup Language"
        }
      },
      {
        id: "q2",
        number: 2,
        type: "choice",
        prompt: "Which HTML tag is used to link an external CSS stylesheet to a webpage?",
        answer: "C",
        options: {
          A: "<style>",
          B: "<css>",
          C: "<link>",
          D: "<script>"
        }
      },
      {
        id: "q3",
        number: 3,
        type: "written",
        prompt:
          "Describe the CSS Box Model. Name the four layers from the inside out and briefly explain what each does.",
        guide:
          "Full credit: Content -> Padding -> Border -> Margin. Content is the actual text or element. Padding is space inside the element. Border wraps the padding. Margin is outside the border and separates the element from others."
      },
      {
        id: "q4",
        number: 4,
        type: "choice",
        prompt: "What does the CSS property display: flex do to a container element?",
        answer: "B",
        options: {
          A: "Makes the element invisible",
          B: "Turns the container into a flexbox layout where children become flex items",
          C: "Adds equal space between all child elements automatically",
          D: "Centers all text inside the element"
        }
      },
      {
        id: "q5",
        number: 5,
        type: "choice",
        prompt: "What is the difference between an id and a class in HTML/CSS?",
        answer: "B",
        options: {
          A: "No difference - both work the same way",
          B: "id targets one unique element per page; class can be reused on many elements",
          C: "class is more specific than id in the cascade",
          D: "id is used in CSS files only; class is used in HTML files only"
        }
      },
      {
        id: "q6",
        number: 6,
        type: "choice",
        prompt:
          "Which CSS property controls the space inside an element, between the content and its border?",
        answer: "D",
        options: {
          A: "margin",
          B: "spacing",
          C: "gap",
          D: "padding"
        }
      }
    ]
  },
  {
    id: "javascript",
    title: "JavaScript Fundamentals",
    subtitle: "Core language concepts and behavior",
    questions: [
      {
        id: "q7",
        number: 7,
        type: "choice",
        prompt: "What will typeof null return in JavaScript?",
        answer: "C",
        options: {
          A: '"null"',
          B: '"undefined"',
          C: '"object"',
          D: '"boolean"'
        }
      },
      {
        id: "q8",
        number: 8,
        type: "written",
        prompt:
          "What is the difference between let, const, and var? Explain scope and reassignability for each.",
        guide:
          "Full credit: var is function-scoped, hoisted, and can be reassigned. let is block-scoped and can be reassigned. const is block-scoped and cannot be reassigned. Prefer const by default, then let."
      },
      {
        id: "q9",
        number: 9,
        type: "choice",
        prompt: "What does the following code output? Explain why.",
        code: "console.log(1 + '2')",
        answer: "B",
        options: {
          A: "3 - because 1 + 2 = 3",
          B: '"12" - JavaScript converts the number to a string and concatenates',
          C: "TypeError - cannot add a number and a string",
          D: "NaN - not a valid operation"
        }
      },
      {
        id: "q10",
        number: 10,
        type: "written",
        prompt:
          "In your own words, what is a function in programming, and why are functions useful?",
        guide:
          "Full credit: A function is a reusable, often named block of code that performs a task. Functions reduce repetition, make code easier to read, and allow logic to be tested in isolation."
      },
      {
        id: "q11",
        number: 11,
        type: "choice",
        prompt: "Which of the following correctly creates an array in JavaScript?",
        answer: "C",
        options: {
          A: "let x = (1, 2, 3)",
          B: "let x = {1, 2, 3}",
          C: "let x = [1, 2, 3]",
          D: "let x = <1, 2, 3>"
        }
      },
      {
        id: "q12",
        number: 12,
        type: "choice",
        prompt: "What is the difference between == and === in JavaScript?",
        answer: "C",
        options: {
          A: "No difference - they both check equality the same way",
          B: "== checks type only; === checks value only",
          C: "== checks value with type coercion; === checks value and type strictly",
          D: "=== is used for comparing strings only"
        }
      },
      {
        id: "q13",
        number: 13,
        type: "choice",
        prompt: "What does array.push(item) do?",
        answer: "C",
        options: {
          A: "Removes the last item from the array and returns it",
          B: "Adds an item to the beginning of the array",
          C: "Adds an item to the end of the array",
          D: "Returns the total length of the array without modifying it"
        }
      },
      {
        id: "q14",
        number: 14,
        type: "written",
        prompt: "What will this code output? Walk through it step by step.",
        code: "let nums = [10, 20, 30];\nfor (let i = 0; i < nums.length; i++) {\n  console.log(nums[i] * 2);\n}",
        guide:
          "Full credit: Output is 20, 40, 60, one per line. The loop runs with i = 0, 1, 2, accesses 10, 20, 30, and multiplies each by 2."
      }
    ]
  },
  {
    id: "python",
    title: "Python Fundamentals",
    subtitle: "Syntax, data types, and core concepts",
    questions: [
      {
        id: "q15",
        number: 15,
        type: "choice",
        prompt: "What is the output of print(type([])) in Python?",
        answer: "B",
        options: {
          A: "<class 'tuple'>",
          B: "<class 'list'>",
          C: "<class 'array'>",
          D: "<class 'dict'>"
        }
      },
      {
        id: "q16",
        number: 16,
        type: "choice",
        prompt: "How do you write a single-line comment in Python?",
        answer: "C",
        options: {
          A: "// This is a comment",
          B: "/* This is a comment */",
          C: "# This is a comment",
          D: "-- This is a comment"
        }
      },
      {
        id: "q17",
        number: 17,
        type: "written",
        prompt:
          "What is a Python list comprehension? Write an example that doubles each number in range(5).",
        guide:
          "Full credit: A list comprehension is a concise way to build a list. Example: [x * 2 for x in range(5)] returns [0, 2, 4, 6, 8]."
      },
      {
        id: "q18",
        number: 18,
        type: "choice",
        prompt: "What is the main difference between a Python list and a tuple?",
        answer: "C",
        options: {
          A: "No difference - they behave exactly the same",
          B: "Lists use () and tuples use []",
          C: "Lists are mutable; tuples are immutable",
          D: "Tuples can only store numbers, not strings"
        }
      },
      {
        id: "q19",
        number: 19,
        type: "choice",
        prompt: "What does len('hello') return?",
        answer: "B",
        options: {
          A: "4",
          B: "5",
          C: "6",
          D: "Error - len() only works on lists"
        }
      },
      {
        id: "q20",
        number: 20,
        type: "choice",
        prompt: "What keyword is used to define a function in Python?",
        answer: "D",
        options: {
          A: "function",
          B: "define",
          C: "fun",
          D: "def"
        }
      },
      {
        id: "q21",
        number: 21,
        type: "written",
        prompt: "What will this Python code output? Explain why range(3) starts at 0.",
        code: "for i in range(3):\n    print(i)",
        guide:
          "Full credit: Output is 0, 1, 2, one per line. range(3) starts at 0 by default and stops before 3 because the upper bound is exclusive."
      }
    ]
  },
  {
    id: "c-cpp",
    title: "C++ & C Basics",
    subtitle: "Systems language fundamentals",
    questions: [
      {
        id: "q22",
        number: 22,
        type: "choice",
        prompt: "What is the purpose of #include <iostream> at the top of a C++ program?",
        answer: "B",
        options: {
          A: "It defines the main() function automatically",
          B: "It imports input/output functionality like cout and cin",
          C: "It declares all variables used in the program",
          D: "It links external third-party libraries"
        }
      },
      {
        id: "q23",
        number: 23,
        type: "choice",
        prompt: "What is the difference between int and float data types in C/C++?",
        answer: "B",
        options: {
          A: "There is no practical difference between them",
          B: "int stores whole numbers; float stores numbers with decimal points",
          C: "float is always faster to compute than int",
          D: "int can store more data than float"
        }
      },
      {
        id: "q24",
        number: 24,
        type: "choice",
        prompt: "What does this C++ code print?",
        code: "int x = 5;\ncout << x * 2 << endl;",
        answer: "C",
        options: {
          A: "5",
          B: "52",
          C: "10",
          D: "Compilation error"
        }
      },
      {
        id: "q25",
        number: 25,
        type: "written",
        prompt:
          "In your own words, what is a pointer in C? Why are pointers considered both powerful and dangerous?",
        guide:
          "Full credit: A pointer stores the memory address of another variable. It is powerful because it enables direct memory work and efficient data structures. It is dangerous because mistakes can cause leaks, crashes, undefined behavior, and security issues."
      },
      {
        id: "q26",
        number: 26,
        type: "choice",
        prompt: "In C++, what is the key default-access difference between a struct and a class?",
        answer: "B",
        options: {
          A: "They are completely identical with no differences",
          B: "struct members are public by default; class members are private by default",
          C: "Only a class can contain methods/functions - struct cannot",
          D: "struct is computationally faster than class"
        }
      },
      {
        id: "q27",
        number: 27,
        type: "written",
        prompt: "What does this C code print? Trace through each iteration manually.",
        code: "int i = 0;\nwhile (i < 4) {\n  printf(\"%d\\n\", i);\n  i++;\n}",
        guide:
          "Full credit: Output is 0, 1, 2, 3, one per line. The loop starts at i = 0, prints i, increments, and stops when i reaches 4."
      }
    ]
  },
  {
    id: "git",
    title: "Git & Version Control",
    subtitle: "Collaboration and code management",
    questions: [
      {
        id: "q28",
        number: 28,
        type: "choice",
        prompt: "What does git clone [url] do?",
        answer: "B",
        options: {
          A: "Creates a new empty repository on your computer",
          B: "Downloads a copy of a remote repository to your local machine",
          C: "Uploads your local code to GitHub",
          D: "Merges two branches together"
        }
      },
      {
        id: "q29",
        number: 29,
        type: "choice",
        prompt: "What is the correct sequence to save and push your code changes to GitHub?",
        answer: "C",
        options: {
          A: "push -> commit -> add",
          B: "commit -> add -> push",
          C: "add -> commit -> push",
          D: "add -> push -> commit"
        }
      },
      {
        id: "q30",
        number: 30,
        type: "written",
        prompt:
          "What is a Git branch, and why would you use one instead of working directly on the main branch?",
        guide:
          "Full credit: A branch is a separate line of development that does not affect main until merged. Branches let you work on features or fixes in isolation so main stays stable."
      },
      {
        id: "q31",
        number: 31,
        type: "choice",
        prompt: "What does git status show you?",
        answer: "B",
        options: {
          A: "Your full commit history in reverse chronological order",
          B: "Which files have been changed, staged, or are untracked",
          C: "The name of the current branch only",
          D: "Your GitHub profile and repo list"
        }
      },
      {
        id: "q32",
        number: 32,
        type: "choice",
        prompt: "What is a .gitignore file used for?",
        answer: "B",
        options: {
          A: "Storing API keys and environment variables securely",
          B: "Listing files and folders that Git should not track or commit",
          C: "Defining branch names and merge strategies",
          D: "Automatically merging branches without conflicts"
        }
      },
      {
        id: "q33",
        number: 33,
        type: "written",
        prompt:
          "You accidentally committed a file with a password in it. What steps would you take?",
        guide:
          "Strong answer: rotate or invalidate the password immediately, remove the file, untrack it with git rm --cached if needed, add it to .gitignore, scrub history with a tool like BFG or git filter-repo, and force-push only with team coordination."
      }
    ]
  },
  {
    id: "fullstack",
    title: "Web Dev & Full-Stack Concepts",
    subtitle: "APIs, databases, and industry essentials",
    questions: [
      {
        id: "q34",
        number: 34,
        type: "written",
        prompt:
          "What does API stand for, and what does an API do? Give a real-world analogy if you can.",
        guide:
          "Full credit: API stands for Application Programming Interface. It is a set of rules that lets software systems communicate. A waiter taking an order to a kitchen and bringing back a response is a common analogy."
      },
      {
        id: "q35",
        number: 35,
        type: "choice",
        prompt: "What is the difference between frontend and backend development?",
        answer: "B",
        options: {
          A: "They are the same thing - just different names",
          B: "Frontend is what the user sees; backend runs on servers and handles data and logic",
          C: "Backend is the design and layout; frontend handles the database",
          D: "Frontend uses Python; backend uses JavaScript exclusively"
        }
      },
      {
        id: "q36",
        number: 36,
        type: "choice",
        prompt: "What does SQL stand for and what is it used for?",
        answer: "B",
        options: {
          A: "System Query Layout - used for styling web pages",
          B: "Structured Query Language - used to interact with relational databases",
          C: "Simple Quick Language - a subset of Python for data analysis",
          D: "Server Queue Logic - used in network request management"
        }
      },
      {
        id: "q37",
        number: 37,
        type: "choice",
        prompt: "What is the purpose of a package.json file in a JavaScript project?",
        answer: "B",
        options: {
          A: "It stores user passwords and authentication tokens",
          B: "It defines project metadata and tracks dependencies",
          C: "It is the main HTML entry point of the application",
          D: "It contains all the CSS styles for the project"
        }
      },
      {
        id: "q38",
        number: 38,
        type: "choice",
        prompt: "What is the difference between HTTP and HTTPS?",
        answer: "C",
        options: {
          A: "There is no real difference - they function identically",
          B: "HTTPS is significantly faster than HTTP for all requests",
          C: "HTTPS encrypts data in transit using TLS/SSL; HTTP sends data in plain text",
          D: "HTTP is a newer, more secure version of HTTPS"
        }
      },
      {
        id: "q39",
        number: 39,
        type: "choice",
        prompt: "In web development, what does responsive design mean?",
        answer: "B",
        options: {
          A: "The website loads very quickly on all devices",
          B: "The site layout adapts to different screen sizes - mobile, tablet, and desktop",
          C: "The site responds to API calls without page reloads",
          D: "The site uses animations and transitions to feel interactive"
        }
      },
      {
        id: "q40",
        number: 40,
        type: "written",
        prompt:
          "What is React, and have you used it? Describe it in your own words, even if just from what you've heard.",
        guide:
          "Credit for general awareness: React is a JavaScript library for building user interfaces with reusable components. Strong answers may mention JSX, state, props, rendering, or the virtual DOM."
      },
      {
        id: "q41",
        number: 41,
        type: "written",
        prompt:
          "What is a database? Name at least one type you've heard of, and explain what it stores.",
        guide:
          "Full credit: A database is an organized collection of persistent data. Accept examples like MySQL, PostgreSQL, SQLite, MongoDB, or others, with understanding that databases store and retrieve data."
      }
    ]
  },
  {
    id: "logic",
    title: "Problem Solving & Logic",
    subtitle: "Thinking like a developer",
    questions: [
      {
        id: "q42",
        number: 42,
        type: "choice",
        prompt: "What will this Python code output? Why does range(3) not include 3?",
        code: "for i in range(3):\n    print(i)",
        answer: "B",
        options: {
          A: "1 2 3, one per line",
          B: "0 1 2, one per line",
          C: "0 1 2 3, one per line",
          D: "1 2, one per line"
        }
      },
      {
        id: "q43",
        number: 43,
        type: "written",
        prompt:
          "You have a list [5, 2, 8, 1, 9]. Without using a built-in max() function, write pseudocode or real code to find the largest number.",
        guide:
          "Full credit: Set largest = first item, loop through remaining items, update largest when the current item is greater, then return or print largest."
      },
      {
        id: "q44",
        number: 44,
        type: "written",
        prompt:
          "What is an infinite loop? Describe one way it can accidentally happen, and how you would fix it.",
        guide:
          "Full credit: An infinite loop never reaches its exit condition. Common cause: a while loop where the counter is never changed. Fix by updating the loop variable, correcting the condition, or adding a break when appropriate."
      },
      {
        id: "q45",
        number: 45,
        type: "choice",
        prompt: "What does DRY stand for in software development, and why does it matter?",
        answer: "B",
        options: {
          A: "Design, Run, Yield - a project management methodology",
          B: "Don't Repeat Yourself - avoid duplicating code by using functions and abstractions",
          C: "Deploy, Refactor, Yield - a deployment best practice cycle",
          D: "Dynamic Rendering Yes - a frontend rendering strategy"
        }
      }
    ]
  }
];

const SCORING_BANDS = [
  {
    min: 38,
    label: "Strong",
    title: "Solid foundation",
    copy: "Accelerate into frameworks, portfolio depth, and interview practice."
  },
  {
    min: 28,
    label: "Good",
    title: "Core concepts present",
    copy: "Fill gaps in JavaScript, web concepts, and any sections that dipped below 70%."
  },
  {
    min: 18,
    label: "Building",
    title: "Fundamentals need reinforcement",
    copy: "Review the basics before moving too quickly into frameworks."
  },
  {
    min: 0,
    label: "Early stage",
    title: "Start with the basics",
    copy: "Focus first on HTML, CSS, JavaScript syntax, and basic programming logic."
  }
];

const sectionsEl = document.getElementById("sections");
const form = document.getElementById("quiz-form");
const studentDate = document.getElementById("student-date");
const answeredCount = document.getElementById("answered-count");
const completionStatus = document.getElementById("completion-status");
const progressFill = document.getElementById("progress-fill");
const scoreAssessmentButton = document.getElementById("score-assessment");
const results = document.getElementById("results");
const studentSummary = document.getElementById("student-summary");
const totalScoreEl = document.getElementById("total-score");
const scoreBandEl = document.getElementById("score-band");
const objectiveScoreEl = document.getElementById("objective-score");
const writtenScoreEl = document.getElementById("written-score");
const writtenStatusEl = document.getElementById("written-status");
const planTitleEl = document.getElementById("plan-title");
const planCopyEl = document.getElementById("plan-copy");
const scoreMeterFill = document.getElementById("score-meter-fill");
const sectionBreakdown = document.getElementById("section-breakdown");
const writtenReview = document.getElementById("written-review");
const toggleWrittenReview = document.getElementById("toggle-written-review");
const reflectionOutput = document.getElementById("reflection-output");
const printResults = document.getElementById("print-results");

const allQuestions = SECTIONS.flatMap((section) =>
  section.questions.map((question) => ({ ...question, sectionId: section.id }))
);
const choiceQuestions = allQuestions.filter((question) => question.type === "choice");
const writtenQuestions = allQuestions.filter((question) => question.type === "written");
const writtenGrades = Object.fromEntries(writtenQuestions.map((question) => [question.id, null]));

let latestSubmission = null;

studentDate.valueAsDate = new Date();

function renderSections() {
  sectionsEl.innerHTML = SECTIONS.map((section) => {
    const questions = section.questions.map(renderQuestion).join("");

    return `
      <section class="section-card" aria-labelledby="${section.id}-title">
        <div class="section-heading">
          <p class="eyebrow">${escapeHtml(section.questions.length)} Questions</p>
          <h2 id="${section.id}-title">${escapeHtml(section.title)}</h2>
          <p>${escapeHtml(section.subtitle)}</p>
        </div>
        <div class="question-list">${questions}</div>
      </section>
    `;
  }).join("");
}

function renderQuestion(question) {
  const code = question.code ? `<pre class="code-block"><code>${escapeHtml(question.code)}</code></pre>` : "";

  if (question.type === "written") {
    return `
      <label class="written-question" id="${question.id}-card">
        <span class="question-number">Q${question.number}</span>
        ${escapeHtml(question.prompt)}
        ${code}
        <textarea name="${question.id}" rows="5" placeholder="Type answer here"></textarea>
      </label>
    `;
  }

  const options = Object.entries(question.options).map(([letter, text], optionIndex) => `
    <label class="answer-option">
      <input
        type="radio"
        name="${question.id}"
        value="${letter}"
      />
      <span><strong>${letter}.</strong> ${escapeHtml(text)}</span>
    </label>
  `).join("");

  return `
    <article class="question-card" id="${question.id}-card">
      <div class="question-topline">
        <p class="question-title">${escapeHtml(question.prompt)}</p>
        <span class="question-number">Q${question.number}</span>
      </div>
      ${code}
      <div class="answer-list">${options}</div>
    </article>
  `;
}

function getSubmission() {
  const data = new FormData(form);
  const answers = {};

  allQuestions.forEach((question) => {
    answers[question.id] = data.get(question.id) || "";
  });

  return {
    answers,
    reflections: {
      familiar: data.get("reflection-familiar") || "",
      learn: data.get("reflection-learn") || "",
      style: data.get("reflection-style") || "",
      project: data.get("reflection-project") || ""
    },
    student: {
      name: document.getElementById("student-name").value.trim(),
      date: studentDate.value,
      school: document.getElementById("student-school").value.trim(),
      role: document.getElementById("student-role").value.trim()
    }
  };
}

function getObjectiveScore(submission = getSubmission()) {
  return choiceQuestions.reduce((score, question) => {
    return score + (submission.answers[question.id] === question.answer ? 1 : 0);
  }, 0);
}

function getWrittenScore() {
  return Object.values(writtenGrades).reduce((sum, grade) => sum + (Number(grade) || 0), 0);
}

function getBand(total) {
  return SCORING_BANDS.find((band) => total >= band.min);
}

function getCompletion(submission = getSubmission()) {
  const completedChoiceCount = choiceQuestions.filter((question) => submission.answers[question.id]).length;
  const completedWrittenCount = writtenQuestions.filter((question) => {
    return submission.answers[question.id].trim().length > 0;
  }).length;
  const completedCount = completedChoiceCount + completedWrittenCount;

  return {
    completedCount,
    completedChoiceCount,
    completedWrittenCount,
    isComplete: completedCount === allQuestions.length
  };
}

function getFirstIncompleteQuestion(submission = getSubmission()) {
  return allQuestions.find((question) => {
    return question.type === "choice"
      ? !submission.answers[question.id]
      : submission.answers[question.id].trim().length === 0;
  });
}

function updateLiveProgress() {
  const submission = getSubmission();
  const completion = getCompletion(submission);

  answeredCount.textContent = `${completion.completedCount} of ${allQuestions.length} scored questions completed`;
  completionStatus.textContent = completion.isComplete
    ? "Results unlocked"
    : "Results locked until finished";
  scoreAssessmentButton.disabled = !completion.isComplete;
  progressFill.style.width = `${(completion.completedCount / allQuestions.length) * 100}%`;
}

function showResults() {
  const submission = getSubmission();
  const completion = getCompletion(submission);

  if (!completion.isComplete) {
    focusFirstIncompleteQuestion(submission);
    return;
  }

  latestSubmission = submission;
  markObjectiveAnswers();
  renderWrittenReview();
  renderReflectionOutput();
  updateResultNumbers();

  results.classList.add("is-visible");
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function focusFirstIncompleteQuestion(submission = getSubmission()) {
  const question = getFirstIncompleteQuestion(submission);

  if (!question) {
    return;
  }

  const card = document.getElementById(`${question.id}-card`);
  const input = question.type === "choice"
    ? card.querySelector("input")
    : card.querySelector("textarea");

  card.scrollIntoView({ behavior: "smooth", block: "center" });
  input?.focus({ preventScroll: true });
}

function updateResultNumbers() {
  const objectiveScore = getObjectiveScore(latestSubmission);
  const writtenScore = getWrittenScore();
  const total = objectiveScore + writtenScore;
  const band = getBand(total);
  const pendingWritten = Object.values(writtenGrades).filter((grade) => grade === null).length;
  const percent = (total / allQuestions.length) * 100;

  totalScoreEl.textContent = `${formatScore(total)}/${allQuestions.length}`;
  scoreBandEl.textContent = band.label;
  objectiveScoreEl.textContent = `${objectiveScore}/${choiceQuestions.length}`;
  writtenScoreEl.textContent = `${formatScore(writtenScore)}/${writtenQuestions.length}`;
  writtenStatusEl.textContent = pendingWritten
    ? `${pendingWritten} written answer${pendingWritten === 1 ? "" : "s"} still need review.`
    : "All written answers reviewed.";
  planTitleEl.textContent = band.title;
  planCopyEl.textContent = band.copy;
  scoreMeterFill.style.width = `${percent}%`;

  const name = latestSubmission.student.name || "Student";
  const school = latestSubmission.student.school || "School not entered";
  const role = latestSubmission.student.role || "Full-Stack Internship";
  const date = latestSubmission.student.date || "Date not entered";
  studentSummary.textContent = `${name} | ${school} | ${role} | ${date}`;

  renderSectionBreakdown();
}

function renderSectionBreakdown() {
  sectionBreakdown.innerHTML = SECTIONS.map((section) => {
    const sectionQuestions = section.questions;
    const score = sectionQuestions.reduce((sum, question) => {
      if (question.type === "choice") {
        return sum + (latestSubmission.answers[question.id] === question.answer ? 1 : 0);
      }

      return sum + (Number(writtenGrades[question.id]) || 0);
    }, 0);
    const max = sectionQuestions.length;

    return `
      <div class="breakdown-row">
        <span>${escapeHtml(section.title)}</span>
        <div class="mini-meter" aria-hidden="true"><i style="width: ${(score / max) * 100}%"></i></div>
        <strong>${formatScore(score)}/${max}</strong>
      </div>
    `;
  }).join("");
}

function renderWrittenReview() {
  writtenReview.innerHTML = writtenQuestions.map((question) => {
    const answer = latestSubmission.answers[question.id]?.trim() || "No written answer provided.";
    const selectedGrade = writtenGrades[question.id];

    return `
      <article class="review-item" data-question-id="${question.id}">
        <h4>Q${question.number}. ${escapeHtml(question.prompt)}</h4>
        ${question.code ? `<pre class="code-block"><code>${escapeHtml(question.code)}</code></pre>` : ""}
        <div class="review-answer">${escapeHtml(answer)}</div>
        <div class="review-guide">${escapeHtml(question.guide)}</div>
        <div class="grade-actions" aria-label="Grade Q${question.number}">
          ${renderGradeButton(question.id, "1", "Full Credit", selectedGrade)}
          ${renderGradeButton(question.id, "0.5", "Half Credit", selectedGrade)}
          ${renderGradeButton(question.id, "0", "No Credit", selectedGrade)}
        </div>
      </article>
    `;
  }).join("");
}

function renderGradeButton(questionId, value, label, selectedGrade) {
  const isSelected = Number(selectedGrade) === Number(value);

  return `
    <button
      class="grade-button ${isSelected ? "is-selected" : ""}"
      type="button"
      data-question-id="${questionId}"
      data-grade="${value}"
    >
      ${label}
    </button>
  `;
}

function renderReflectionOutput() {
  const reflectionItems = [
    ["Most familiar / most challenging", latestSubmission.reflections.familiar],
    ["Next 30 days", latestSubmission.reflections.learn],
    ["Preferred learning style", latestSubmission.reflections.style],
    ["Portfolio project idea", latestSubmission.reflections.project]
  ];

  reflectionOutput.innerHTML = reflectionItems.map(([label, value]) => `
    <div>
      <strong>${escapeHtml(label)}</strong>
      <p>${escapeHtml(value.trim() || "No response provided.")}</p>
    </div>
  `).join("");
}

function markObjectiveAnswers() {
  choiceQuestions.forEach((question) => {
    const card = document.getElementById(`${question.id}-card`);
    const isCorrect = latestSubmission.answers[question.id] === question.answer;

    card.classList.toggle("is-correct", isCorrect);
    card.classList.toggle("is-incorrect", !isCorrect);
  });
}

function formatScore(score) {
  return Number.isInteger(score) ? String(score) : score.toFixed(1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

renderSections();
updateLiveProgress();

form.addEventListener("input", updateLiveProgress);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showResults();
});

toggleWrittenReview.addEventListener("click", () => {
  const isHidden = writtenReview.hidden;
  writtenReview.hidden = !isHidden;
  toggleWrittenReview.textContent = isHidden ? "Hide Written Answers" : "Show Written Answers";
});

writtenReview.addEventListener("click", (event) => {
  const button = event.target.closest("[data-grade]");

  if (!button) {
    return;
  }

  writtenGrades[button.dataset.questionId] = Number(button.dataset.grade);
  renderWrittenReview();
  updateResultNumbers();
});

printResults.addEventListener("click", () => {
  if (!results.classList.contains("is-visible")) {
    focusFirstIncompleteQuestion();
    return;
  }

  window.print();
});
