const QUESTIONS = [
  {
    id: "role",
    category: "Resume / Positioning",
    shortLabel: "Specific target role",
    text:
      "Do you clearly state a specific role on your resume and LinkedIn, like Backend Developer instead of CS Student?"
  },
  {
    id: "impact",
    category: "Resume / Positioning",
    shortLabel: "Measured resume impact",
    text:
      "Do your resume bullet points include measurable impact, such as users, performance, revenue, time saved, or results?"
  },
  {
    id: "realFeatures",
    category: "Project Quality",
    shortLabel: "Real-world features",
    text:
      "Do you have at least 2 to 3 projects that include real-world features like auth, APIs, databases, payments, dashboards, or background jobs?"
  },
  {
    id: "realProblem",
    category: "Project Quality",
    shortLabel: "Real problem solved",
    text:
      "Does at least one of your projects solve a real problem instead of being only a tutorial clone?"
  },
  {
    id: "proof",
    category: "Credibility Signals",
    shortLabel: "Proof or usage",
    text:
      "Do any of your projects have measurable proof, such as users, metrics, usage, performance improvements, or deployment data?"
  },
  {
    id: "explainEndToEnd",
    category: "Credibility Signals",
    shortLabel: "End-to-end clarity",
    text:
      "Can you confidently explain your strongest project end-to-end without struggling?"
  },
  {
    id: "applicationVolume",
    category: "Outreach / Strategy",
    shortLabel: "Enough applications",
    text:
      "Have you applied to at least 20 to 30 relevant jobs in the past 2 weeks?"
  },
  {
    id: "directOutreach",
    category: "Outreach / Strategy",
    shortLabel: "Referral outreach",
    text:
      "Have you reached out directly to engineers, alumni, recruiters, or hiring managers for referrals?"
  },
  {
    id: "projectPitch",
    category: "Interview Readiness",
    shortLabel: "2-minute project pitch",
    text: "Can you clearly explain your projects in under 2 minutes?"
  },
  {
    id: "practice",
    category: "Interview Readiness",
    shortLabel: "Recent practice",
    text: "Have you practiced common technical and behavioral interview questions recently?"
  }
];

const CATEGORY_DETAILS = {
  "Resume / Positioning": {
    label: "Priority area: Positioning",
    issue: "Your resume and LinkedIn are not making your value obvious fast."
  },
  "Project Quality": {
    label: "Priority area: Project depth",
    issue: "Your projects may not look like real engineering work yet."
  },
  "Credibility Signals": {
    label: "Priority area: Proof",
    issue: "You are not showing enough evidence that your work matters or that you can explain it."
  },
  "Outreach / Strategy": {
    label: "Priority area: Opportunity creation",
    issue: "You are not getting in front of enough people or enough relevant openings."
  },
  "Interview Readiness": {
    label: "Priority area: Interview conversion",
    issue: "You may be close, but your answers need more structure and confidence."
  }
};

const DIAGNOSES = [
  {
    min: 0,
    max: 3,
    title: "Foundation Problem",
    copy:
      "You are probably not getting interviews because the fundamentals are not strong enough yet. The market cannot see a clear role, strong projects, or credible proof.",
    actions: [
      "Pick one target role and make your resume, LinkedIn headline, and project descriptions point toward it.",
      "Upgrade one project with real-world features like authentication, APIs, a database, and deployment.",
      "Add proof to your resume: users, performance, time saved, test coverage, usage, or before-and-after results."
    ]
  },
  {
    min: 4,
    max: 6,
    title: "Positioning Problem",
    copy:
      "You likely have enough skill to be taken seriously, but it is not being communicated clearly. Your resume may sound vague, academic, or too much like a task list.",
    actions: [
      "Rewrite 3 resume bullets using action, tech, feature, and impact.",
      "Add one measurable result to your strongest project, even if it is usage, speed, reliability, or scope.",
      "Fix your LinkedIn headline so it says the role you want and the stack you can contribute with."
    ]
  },
  {
    min: 7,
    max: 8,
    title: "Strategy Problem",
    copy:
      "You are doing many things right, but you are probably not creating enough quality opportunities. More proof will not help if the right people never see it.",
    actions: [
      "Apply to 20 to 30 relevant roles in the next 2 weeks with a focused target role.",
      "Send 10 direct messages to engineers, alumni, recruiters, or hiring managers asking for advice or referrals.",
      "Track applications, replies, referrals, and interview requests so you can see what needs attention first."
    ]
  },
  {
    min: 9,
    max: 10,
    title: "Interview Problem",
    copy:
      "You are close. Your profile has many of the right pieces, so the next challenge is likely converting conversations into offers with clearer answers.",
    actions: [
      "Practice a 2-minute project walkthrough using problem, technical decision, tradeoff, result, and lesson learned.",
      "Prepare answers for common questions about conflicts, debugging, ownership, and why you chose your stack.",
      "Record one mock answer and tighten it until it sounds specific, calm, and structured."
    ]
  }
];

const state = new Map();

const elements = {
  questionList: document.getElementById("question-list"),
  progressText: document.getElementById("progress-text"),
  progressBar: document.getElementById("progress-bar"),
  scoreValue: document.getElementById("score-value"),
  answeredValue: document.getElementById("answered-value"),
  scoreNote: document.getElementById("score-note"),
  diagnosisCard: document.getElementById("diagnosis-card"),
  diagnosisTitle: document.getElementById("diagnosis-title"),
  diagnosisCopy: document.getElementById("diagnosis-copy"),
  primaryFocus: document.getElementById("primary-focus"),
  actionList: document.getElementById("action-list")
};

function getScore() {
  return Array.from(state.values()).filter(Boolean).length;
}

function getAnsweredCount() {
  return state.size;
}

function getDiagnosis(score) {
  return DIAGNOSES.find((diagnosis) => score >= diagnosis.min && score <= diagnosis.max);
}

function getMissedQuestions() {
  return QUESTIONS.filter((question) => state.get(question.id) === false);
}

function getPrimaryFocus() {
  const counts = getMissedQuestions().reduce((totals, question) => {
    totals[question.category] = (totals[question.category] || 0) + 1;
    return totals;
  }, {});

  const sortedFocusAreas = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return sortedFocusAreas[0]?.[0] || null;
}

function renderQuestions() {
  elements.questionList.innerHTML = "";

  QUESTIONS.forEach((question, index) => {
    const article = document.createElement("article");
    article.className = "question-card";

    article.innerHTML = `
      <div class="question-meta">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${question.category}</strong>
      </div>
      <h3>${question.text}</h3>
      <div class="answer-row" role="group" aria-label="${question.shortLabel}">
        <button type="button" data-question="${question.id}" data-answer="yes">Yes</button>
        <button type="button" data-question="${question.id}" data-answer="no">No</button>
      </div>
    `;

    elements.questionList.appendChild(article);
  });
}

function renderButtonStates() {
  document.querySelectorAll("[data-question]").forEach((button) => {
    const value = state.get(button.dataset.question);
    const isSelected =
      (button.dataset.answer === "yes" && value === true) ||
      (button.dataset.answer === "no" && value === false);

    button.classList.toggle("is-selected", isSelected);
  });
}

function renderResult() {
  const score = getScore();
  const answered = getAnsweredCount();
  const progress = (answered / QUESTIONS.length) * 100;
  const isComplete = answered === QUESTIONS.length;

  elements.progressText.textContent = `${answered} of ${QUESTIONS.length} answered`;
  elements.progressBar.style.width = `${progress}%`;
  elements.scoreValue.textContent = `${score}/10`;
  elements.answeredValue.textContent = isComplete ? "Diagnosis complete" : "Answer every question";
  elements.scoreNote.textContent = isComplete
    ? "Your result is based on both total score and the pattern of missing answers."
    : "Your diagnosis will sharpen as you answer each question.";

  if (!isComplete) {
    elements.diagnosisCard.classList.add("is-muted");
    elements.diagnosisTitle.textContent = "Waiting for inputs";
    elements.diagnosisCopy.textContent =
      "Once all 10 answers are complete, you will see the likely reason you are not getting interviews and what to fix first.";
    elements.primaryFocus.textContent = "No priority area yet";
    elements.actionList.innerHTML = "<li>Answer all 10 questions to unlock your quick-win plan.</li>";
    renderButtonStates();
    return;
  }

  const diagnosis = getDiagnosis(score);
  const primaryFocus = getPrimaryFocus();
  const focusDetails = primaryFocus ? CATEGORY_DETAILS[primaryFocus] : null;
  const missedQuestions = getMissedQuestions();

  elements.diagnosisCard.classList.remove("is-muted");
  elements.diagnosisTitle.textContent = diagnosis.title;
  elements.diagnosisCopy.textContent = diagnosis.copy;
  elements.primaryFocus.textContent = focusDetails
    ? `${focusDetails.label}: ${focusDetails.issue}`
    : "No obvious weak area: focus on interview conversion and consistency.";

  const missedItems = missedQuestions
    .slice(0, 3)
    .map((question) => `<li>Missed check: ${question.shortLabel}</li>`)
    .join("");
  const actionItems = diagnosis.actions.map((action) => `<li>${action}</li>`).join("");

  elements.actionList.innerHTML = `${missedItems}${actionItems}`;
  renderButtonStates();
}

function bindAnswers() {
  elements.questionList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-question]");

    if (!button) {
      return;
    }

    state.set(button.dataset.question, button.dataset.answer === "yes");
    renderResult();
  });
}

renderQuestions();
bindAnswers();
renderResult();
