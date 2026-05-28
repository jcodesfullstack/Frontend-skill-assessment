const roles = [
  {
    id: "frontend",
    title: "Frontend Engineer",
    summary: "Interfaces, React, state, accessibility, and product polish.",
    questions: [
      "Can you build responsive UIs without fighting CSS?",
      "Have you used React beyond tutorials?",
      "Have you managed frontend state across multiple screens?",
      "Have you deployed a frontend app?"
    ],
    fundamentals: ["responsive UI systems", "React component architecture", "state management", "frontend deployment"],
    project: "Interview Prep Dashboard",
    features: ["auth", "saved question sets", "progress charts", "responsive layout", "deployed production build"],
    priorities: ["React architecture", "state management", "responsive UI", "project polish"],
    avoid: ["pixel-perfect clones with no product logic", "another static portfolio redesign", "jumping into animation libraries before React depth"]
  },
  {
    id: "backend",
    title: "Backend Engineer",
    summary: "APIs, databases, auth, deployments, and service reliability.",
    questions: [
      "Have you built APIs with clear routes and status codes?",
      "Have you worked with relational databases?",
      "Have you implemented authentication?",
      "Have you deployed a backend server?"
    ],
    fundamentals: ["REST APIs", "authentication", "database relationships", "error handling"],
    project: "Inventory Management System",
    features: ["JWT auth", "PostgreSQL schema", "role permissions", "dashboard API", "cloud deployment"],
    priorities: ["API architecture", "database schema design", "deployment", "project explanation"],
    avoid: ["random backend tutorials", "building endpoints without a real data model", "advanced algorithms before project depth"]
  },
  {
    id: "fullstack",
    title: "Full Stack Engineer",
    summary: "End-to-end products, frontend flow, backend logic, and deployment.",
    questions: [
      "Can you connect a frontend to your own API?",
      "Have you designed database-backed features?",
      "Have you handled auth from UI to backend?",
      "Have you deployed a full stack app?"
    ],
    fundamentals: ["frontend-backend contracts", "auth flows", "database-backed UI", "full stack deployment"],
    project: "SaaS Job Tracker",
    features: ["user accounts", "application pipeline", "notes and reminders", "analytics page", "deployed frontend and API"],
    priorities: ["end-to-end feature design", "API integration", "auth flow", "deployment confidence"],
    avoid: ["separate toy frontend and backend apps", "framework hopping", "features that cannot be explained in interviews"]
  },
  {
    id: "ai-ml",
    title: "AI/ML Engineer",
    summary: "Python, models, evaluation, data pipelines, and practical ML products.",
    questions: [
      "Can you train and evaluate a baseline model?",
      "Have you cleaned and transformed real datasets?",
      "Have you used Python ML libraries?",
      "Have you deployed or demoed an ML-powered app?"
    ],
    fundamentals: ["Python data workflows", "model evaluation", "feature engineering", "ML app deployment"],
    project: "Candidate Resume Insight Tool",
    features: ["data ingestion", "model baseline", "evaluation report", "interactive UI", "deployed demo"],
    priorities: ["Python ML stack", "evaluation metrics", "data cleaning", "portfolio demo storytelling"],
    avoid: ["only watching model theory videos", "training models without evaluation", "chasing every new AI tool before shipping one demo"]
  },
  {
    id: "data",
    title: "Data Engineer",
    summary: "SQL, pipelines, warehousing, orchestration, and dependable data flows.",
    questions: [
      "Are you comfortable writing SQL joins and aggregations?",
      "Have you built a repeatable data pipeline?",
      "Have you worked with batch jobs or scheduling?",
      "Have you created dashboards from cleaned data?"
    ],
    fundamentals: ["SQL modeling", "ETL pipelines", "data validation", "dashboard-ready datasets"],
    project: "Startup Metrics Pipeline",
    features: ["raw data ingestion", "cleaned warehouse tables", "scheduled transforms", "quality checks", "analytics dashboard"],
    priorities: ["SQL depth", "pipeline design", "data modeling", "operational debugging"],
    avoid: ["memorizing tool lists", "dashboards on unclean data", "cloud certifications before pipeline projects"]
  }
];

const levels = [
  {
    id: "beginner",
    title: "Beginner",
    description: "I understand coding fundamentals but struggle building projects.",
    pacing: "foundation-first",
    weekOne: "Turn scattered fundamentals into one working, explainable base."
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "I can build projects but struggle getting interviews.",
    pacing: "project-depth",
    weekOne: "Tighten the weak parts of your stack and make your project sound hireable."
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "I am interview-ready but struggling with job search execution.",
    pacing: "execution",
    weekOne: "Convert existing ability into sharper interview stories and outbound consistency."
  }
];

const struggles = [
  { id: "no-projects", title: "No projects", bottleneck: "missing project proof" },
  { id: "weak-resume", title: "Weak resume", bottleneck: "weak project depth" },
  { id: "no-interviews", title: "No interviews", bottleneck: "positioning and application strategy" },
  { id: "failing-interviews", title: "Failing interviews", bottleneck: "technical interview execution" },
  { id: "dont-know", title: "Do not know what to learn", bottleneck: "unclear learning priorities" },
  { id: "no-confidence", title: "No confidence", bottleneck: "lack of repeated proof and practice" }
];

const generalQuestions = [
  "Comfortable with Git/GitHub?",
  "Comfortable debugging without getting stuck for hours?",
  "Comfortable explaining your projects clearly?"
];

const state = {
  step: 1,
  role: roles[0].id,
  level: levels[0].id,
  struggle: struggles[0].id,
  skills: new Set()
};

const totalSteps = 5;
const roleOptions = document.getElementById("role-options");
const levelOptions = document.getElementById("level-options");
const assessmentOptions = document.getElementById("assessment-options");
const struggleOptions = document.getElementById("struggle-options");
const steps = [...document.querySelectorAll(".step")];
const progressLabel = document.getElementById("progress-label");
const progressMeter = document.getElementById("progress-meter");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");
const form = document.getElementById("roadmap-form");
const results = document.getElementById("roadmap-results");
const roadmapOutput = document.getElementById("roadmap-output");
const startOverButton = document.getElementById("start-over-button");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function selectedRole() {
  return roles.find((role) => role.id === state.role);
}

function selectedLevel() {
  return levels.find((level) => level.id === state.level);
}

function selectedStruggle() {
  return struggles.find((struggle) => struggle.id === state.struggle);
}

function renderChoiceCards(container, groupName, items, selectedId) {
  container.innerHTML = items
    .map(
      (item) => `
        <label class="choice-card ${item.id === selectedId ? "is-selected" : ""}">
          <input type="radio" name="${groupName}" value="${item.id}" ${item.id === selectedId ? "checked" : ""} />
          <span class="choice-title">${escapeHtml(item.title)}</span>
          ${item.summary ? `<span class="choice-copy">${escapeHtml(item.summary)}</span>` : ""}
          ${item.description ? `<span class="choice-copy">${escapeHtml(item.description)}</span>` : ""}
        </label>
      `
    )
    .join("");
}

function renderAssessment() {
  const role = selectedRole();
  const questions = [...role.questions, ...generalQuestions];

  assessmentOptions.innerHTML = questions
    .map((question, index) => {
      const id = `skill-${index}`;
      const isChecked = state.skills.has(question);

      return `
        <label class="check-card ${isChecked ? "is-selected" : ""}">
          <input type="checkbox" name="skills" value="${escapeHtml(question)}" ${isChecked ? "checked" : ""} />
          <span class="check-mark" aria-hidden="true"></span>
          <span>${escapeHtml(question)}</span>
        </label>
      `;
    })
    .join("");
}

function renderStruggles() {
  renderChoiceCards(struggleOptions, "struggle", struggles, state.struggle);
}

function updateStep() {
  steps.forEach((step) => {
    step.classList.toggle("is-active", Number(step.dataset.step) === state.step);
  });
  progressLabel.textContent = `Step ${state.step} of ${totalSteps}`;
  progressMeter.style.width = `${(state.step / totalSteps) * 100}%`;
  backButton.disabled = state.step === 1;
  nextButton.classList.toggle("is-hidden", state.step === totalSteps);
}

function syncCards() {
  renderChoiceCards(roleOptions, "role", roles, state.role);
  renderChoiceCards(levelOptions, "level", levels, state.level);
  renderAssessment();
  renderStruggles();
}

function getWeakSkills() {
  const role = selectedRole();
  const allQuestions = [...role.questions, ...generalQuestions];
  return allQuestions.filter((question) => !state.skills.has(question));
}

function getPhaseOneFocus() {
  const role = selectedRole();
  const weakSkills = getWeakSkills();
  const roleFocus = role.fundamentals.slice(0, 4);

  if (weakSkills.length === 0) {
    return roleFocus;
  }

  return roleFocus.map((skill, index) => (weakSkills[index] ? skill : roleFocus[index])).slice(0, 4);
}

function phaseTwoCopy() {
  const struggle = selectedStruggle();

  const copy = {
    "no-projects": "Build one complete project instead of collecting half-finished ideas.",
    "weak-resume": "Turn your best project into resume evidence with measurable, technical bullets.",
    "no-interviews": "Package the project so recruiters can understand your signal in under 20 seconds.",
    "failing-interviews": "Use the project as your anchor for behavioral and technical explanations.",
    "dont-know": "Let one project decide what you learn next instead of learning everything in theory.",
    "no-confidence": "Create proof you can point to, demo, and explain without apologizing."
  };

  return copy[struggle.id];
}

function getPracticeItems() {
  const struggle = selectedStruggle();
  const base = ["explain architecture", "explain tradeoffs", "mock technical questions"];

  if (struggle.id === "failing-interviews") {
    return ["timed coding questions", "system walkthroughs", "behavioral stories", "post-mock review notes"];
  }

  if (struggle.id === "no-confidence") {
    return ["record project walkthroughs", "repeat mock explanations", "small daily coding wins", "weekly feedback"];
  }

  return base;
}

function roadmapHtml() {
  const role = selectedRole();
  const level = selectedLevel();
  const struggle = selectedStruggle();
  const weakSkills = getWeakSkills();
  const focus = getPhaseOneFocus();
  const practice = getPracticeItems();
  const priorities = [...new Set([...role.priorities, ...weakSkills.slice(0, 2).map((skill) => skill.replace("?", "").toLowerCase())])].slice(0, 5);
  const avoidItems = [
    ...role.avoid,
    struggle.id === "dont-know" ? "switching topics every few days" : "random tutorials that do not improve your target role"
  ];

  return `
    <div class="summary-grid">
      <article>
        <span>Target Role</span>
        <strong>${escapeHtml(role.title)}</strong>
      </article>
      <article>
        <span>Current Level</span>
        <strong>${escapeHtml(level.title)}</strong>
      </article>
      <article>
        <span>Biggest Bottleneck</span>
        <strong>${escapeHtml(struggle.bottleneck)}</strong>
      </article>
    </div>

    <div class="roadmap-grid">
      <article class="phase-card">
        <p class="phase-label">Phase 1 - Week 1-2</p>
        <h3>Strengthen ${escapeHtml(role.title.replace(" Engineer", ""))} Fundamentals</h3>
        <p>${escapeHtml(level.weekOne)}</p>
        <h4>Focus</h4>
        <ul>${focus.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
        <h4>Build</h4>
        <ul>
          <li>${escapeHtml(focus[0])} mini-feature</li>
          <li>debugging notes for every issue you solve</li>
        </ul>
      </article>

      <article class="phase-card">
        <p class="phase-label">Phase 2 - Week 3-4</p>
        <h3>Build One Resume-Level Project</h3>
        <p>${escapeHtml(phaseTwoCopy())}</p>
        <h4>Project</h4>
        <p class="project-name">${escapeHtml(role.project)}</p>
        <h4>Required Features</h4>
        <ul>${role.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
      </article>

      <article class="phase-card">
        <p class="phase-label">Phase 3 - Week 5</p>
        <h3>Interview Readiness</h3>
        <p>Make your knowledge easy to prove under pressure.</p>
        <h4>Practice</h4>
        <ul>${practice.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>

      <article class="phase-card">
        <p class="phase-label">Phase 4 - Week 6</p>
        <h3>Outreach & Applications</h3>
        <p>Use targeted volume instead of passive applications.</p>
        <h4>Goals</h4>
        <ul>
          <li>5 tailored applications per week</li>
          <li>10 referral DMs per week</li>
          <li>startup outreach with a project demo link</li>
        </ul>
      </article>
    </div>

    <div class="strategy-grid">
      <article class="priority-panel">
        <h3>Priority Skills</h3>
        <ol>${priorities.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("")}</ol>
      </article>
      <article class="stop-panel">
        <h3>What NOT To Learn</h3>
        <ul>${avoidItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </article>
    </div>
  `;
}

function generateRoadmap() {
  roadmapOutput.innerHTML = roadmapHtml();
  results.classList.remove("is-hidden");
  results.focus();
}

syncCards();
updateStep();

roleOptions.addEventListener("change", (event) => {
  state.role = event.target.value;
  state.skills.clear();
  syncCards();
});

levelOptions.addEventListener("change", (event) => {
  state.level = event.target.value;
  syncCards();
});

assessmentOptions.addEventListener("change", () => {
  state.skills = new Set([...new FormData(form).getAll("skills")]);
  syncCards();
});

struggleOptions.addEventListener("change", (event) => {
  state.struggle = event.target.value;
  syncCards();
});

nextButton.addEventListener("click", () => {
  state.step = Math.min(totalSteps, state.step + 1);
  updateStep();
});

backButton.addEventListener("click", () => {
  state.step = Math.max(1, state.step - 1);
  updateStep();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  generateRoadmap();
});

startOverButton.addEventListener("click", () => {
  state.step = 1;
  state.role = roles[0].id;
  state.level = levels[0].id;
  state.struggle = struggles[0].id;
  state.skills.clear();
  results.classList.add("is-hidden");
  syncCards();
  updateStep();
  document.getElementById("generator").scrollIntoView({ behavior: "smooth" });
});
