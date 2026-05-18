const CATEGORY_LABELS = {
  resume: "Resume",
  projects: "Projects",
  dsa: "DSA",
  outreach: "Outreach",
  interviews: "Interviews"
};

const CATEGORY_FIXES = {
  resume: [
    "Rewrite your headline around one target SWE role.",
    "Rewrite 3 resume bullets with tech + feature + impact.",
    "Move your strongest projects and proof higher on the page."
  ],
  projects: [
    "Pick one project to become your flagship product.",
    "Add auth, database, API usage, deployment, and screenshots.",
    "Rewrite the README so it clearly sells the problem and features."
  ],
  dsa: [
    "Practice 5 problems this week.",
    "Explain time and space complexity for every answer.",
    "Talk through each solution out loud like an interview."
  ],
  outreach: [
    "Send 5 referral DMs this week.",
    "Message engineers before applying.",
    "Track referrals, follow-ups, replies, and interviews."
  ],
  interviews: [
    "Practice your best project pitch in under 90 seconds.",
    "Use Problem -> System -> Decision -> Outcome.",
    "Run one mock interview every week."
  ]
};

const RESULT_BANDS = [
  {
    min: 0,
    max: 7,
    title: "Not Interview Ready",
    copy:
      "You are not ready to compete yet. Your biggest issue is likely weak projects, weak positioning, or unclear proof."
  },
  {
    min: 8,
    max: 11,
    title: "Close, But Not Competitive",
    copy:
      "You have some pieces, but your profile probably still looks too generic to recruiters."
  },
  {
    min: 12,
    max: 15,
    title: "Interview-Ready, But Underexposed",
    copy:
      "You are probably good enough to get interviews, but your job search system is weak."
  },
  {
    min: 16,
    max: 20,
    title: "Strong Candidate",
    copy:
      "You are close. Your next bottleneck is probably interview performance or offer conversion."
  }
];

const answers = new Map();
const scoreValue = document.getElementById("score-value");
const scoreSummary = document.getElementById("score-summary");
const scoreMeter = document.getElementById("score-meter");
const answeredCount = document.getElementById("answered-count");
const weakestArea = document.getElementById("weakest-area");
const resultTitle = document.getElementById("personal-result-title");
const resultCopy = document.getElementById("personal-result-copy");
const resultActions = document.getElementById("personal-action-list");
const questionRows = Array.from(document.querySelectorAll("[data-question]"));
const totalQuestions = questionRows.length;

function getCategoryScores() {
  return Object.keys(CATEGORY_LABELS).map((category) => {
    const rows = questionRows.filter((row) => row.closest("[data-category]").dataset.category === category);
    const yesCount = rows.filter((row) => answers.get(row.dataset.question) === "yes").length;

    return {
      id: category,
      label: CATEGORY_LABELS[category],
      score: yesCount
    };
  });
}

function getResultBand(score) {
  return RESULT_BANDS.find((band) => score >= band.min && score <= band.max);
}

function getWeakestCategory(categoryScores) {
  return [...categoryScores].sort((a, b) => a.score - b.score)[0];
}

function render() {
  const categoryScores = getCategoryScores();
  const totalScore = categoryScores.reduce((sum, category) => sum + category.score, 0);
  const answered = answers.size;
  const band = getResultBand(totalScore);
  const weakest = getWeakestCategory(categoryScores);

  scoreValue.textContent = `${totalScore}/20`;
  scoreMeter.style.width = `${(totalScore / totalQuestions) * 100}%`;
  answeredCount.textContent = `${answered} of ${totalQuestions} answered`;
  weakestArea.textContent = `Weakest area: ${weakest.label} (${weakest.score}/4)`;

  categoryScores.forEach((category) => {
    document.querySelector(`[data-category-score="${category.id}"]`).textContent = category.score;
  });

  if (answered < totalQuestions) {
    scoreSummary.textContent = "Answer every signal to unlock your full job readiness diagnosis.";
    resultTitle.textContent = "Answer all 20 signals to unlock your result.";
    resultCopy.textContent =
      "You will see whether you are ready to land interviews, your weakest area, and what to fix first.";
    resultActions.innerHTML = `
      <li>Answer each yes/no question above.</li>
      <li>Watch your score update in real time.</li>
      <li>Fix the weakest section before applying again.</li>
    `;
    return;
  }

  scoreSummary.textContent = `${band.title}. ${band.copy}`;
  resultTitle.textContent = `${band.title}: ${totalScore}/20`;
  resultCopy.textContent = `Your weakest area is ${weakest.label}. Fix this first before sending more applications.`;
  resultActions.innerHTML = CATEGORY_FIXES[weakest.id].map((fix) => `<li>${fix}</li>`).join("");
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer]");

  if (!button) {
    return;
  }

  const row = button.closest("[data-question]");
  answers.set(row.dataset.question, button.dataset.answer);
  row.querySelectorAll("[data-answer]").forEach((answerButton) => {
    answerButton.classList.toggle("is-selected", answerButton === button);
  });
  render();
});

render();
