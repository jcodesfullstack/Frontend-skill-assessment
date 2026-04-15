const ROLE_OPTIONS = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Software Engineer",
  "AI/ML Developer"
];

const EXAMPLES = [
  {
    role: "Full Stack Developer",
    projectCount: "4",
    buildType: "MERN apps",
    techStack: "MongoDB, Express, React, Node.js",
    feature: "authentication and real-time collaboration",
    problem: "product workflows from signup to live updates",
    credibilityCategory: "results",
    credibilityType: "users",
    credibilityDetail: "1000+ users",
    direction: "Open to SWE roles",
    before: "CS Student"
  },
  {
    role: "Backend Developer",
    projectCount: "3",
    buildType: "API-driven services",
    techStack: "Node.js, PostgreSQL, Redis",
    feature: "REST APIs and background jobs",
    problem: "slow data access and heavy query loads",
    credibilityCategory: "results",
    credibilityType: "performance",
    credibilityDetail: "35% faster queries",
    direction: "Actively seeking backend roles",
    before: "Aspiring Software Engineer"
  },
  {
    role: "Full Stack Developer",
    projectCount: "3",
    buildType: "apps",
    techStack: "React and Node.js",
    feature: "authentication, dashboards, and REST APIs",
    problem: "real product workflows",
    credibilityCategory: "complexity",
    credibilityType: "realtime",
    credibilityDetail: "real-time features and API integrations",
    direction: "Open to SWE roles",
    before: "I don't have users..."
  }
];

const FLUFF_WORDS = [
  "passionate",
  "motivated",
  "hardworking",
  "enthusiastic",
  "aspiring",
  "dedicated"
];

const state = {
  role: ROLE_OPTIONS[2],
  projectCount: "3",
  buildType: "full stack apps",
  techStack: "React, Node.js, MongoDB",
  feature: "authentication, dashboards, and REST APIs",
  problem: "real user workflows from login to data management",
  credibilityCategory: "results",
  credibilityType: "users",
  credibilityDetail: "1200 active users",
  direction: "Open to SWE roles"
};

const CREDIBILITY_OPTIONS = {
  results: {
    hint: "Outcome-based proof for stronger candidates.",
    cta: "",
    options: [
      {
        value: "users",
        label: "Users",
        placeholder: "1200 active users"
      },
      {
        value: "performance",
        label: "Performance improvement",
        placeholder: "40% faster load time"
      },
      {
        value: "usage",
        label: "Revenue / usage",
        placeholder: "2K+ API requests per day"
      }
    ]
  },
  complexity: {
    hint: "Use technical depth when you do not have metrics yet.",
    cta: "That’s exactly why recruiters skip your profile. You need projects that create real signals. DM “PROJECT”.",
    options: [
      {
        value: "auth",
        label: "Authentication system",
        placeholder: "implemented authentication and authorization"
      },
      {
        value: "api",
        label: "API design",
        placeholder: "designed REST APIs with CRUD and validation"
      },
      {
        value: "realtime",
        label: "Real-time features",
        placeholder: "implemented real-time features with WebSockets"
      },
      {
        value: "ai",
        label: "AI integration",
        placeholder: "integrated OpenAI APIs into product workflows"
      }
    ]
  },
  features: {
    hint: "Feature-based credibility is easy for recruiters to scan.",
    cta: "",
    options: [
      {
        value: "dashboard",
        label: "Dashboard",
        placeholder: "built analytics dashboards with filters and charts"
      },
      {
        value: "payments",
        label: "Payments",
        placeholder: "shipped payment integration with Stripe checkout"
      },
      {
        value: "chat",
        label: "Chat system",
        placeholder: "built a real-time chat system"
      },
      {
        value: "uploads",
        label: "File uploads",
        placeholder: "implemented file uploads and cloud storage"
      }
    ]
  },
  system: {
    hint: "System-level thinking creates stronger positioning fast.",
    cta: "",
    options: [
      {
        value: "backend",
        label: "Scalable backend",
        placeholder: "designed scalable backend architecture"
      },
      {
        value: "architecture",
        label: "Clean architecture",
        placeholder: "structured modular frontend and backend components"
      },
      {
        value: "errors",
        label: "Error handling",
        placeholder: "implemented error handling and logging"
      },
      {
        value: "state",
        label: "State management",
        placeholder: "handled state management and caching cleanly"
      }
    ]
  }
};

const elements = {
  roleOptions: document.getElementById("role-options"),
  projectCount: document.getElementById("project-count"),
  buildType: document.getElementById("build-type"),
  techStack: document.getElementById("tech-stack"),
  feature: document.getElementById("feature"),
  problem: document.getElementById("problem"),
  credibilityCategory: document.getElementById("credibility-category"),
  credibilityType: document.getElementById("credibility-type"),
  credibilityDetail: document.getElementById("credibility-detail"),
  credibilityHint: document.getElementById("credibility-hint"),
  directionSelect: document.getElementById("direction-select"),
  directionCustom: document.getElementById("direction-custom"),
  headlineOutput: document.getElementById("headline-output"),
  charCount: document.getElementById("char-count"),
  constraintStatus: document.getElementById("constraint-status"),
  checklist: document.getElementById("checklist"),
  copyButton: document.getElementById("copy-headline-btn"),
  shuffleButton: document.getElementById("shuffle-example-btn"),
  exampleCards: document.getElementById("example-cards"),
  ctaVariant: document.getElementById("cta-variant")
};

function createRoleOptions() {
  ROLE_OPTIONS.forEach((role) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice-pill";
    button.textContent = role;
    button.dataset.role = role;
    button.addEventListener("click", () => {
      state.role = role;
      render();
    });
    elements.roleOptions.appendChild(button);
  });
}

function credibilityText() {
  const detail = state.credibilityDetail.trim();
  const category = state.credibilityCategory;

  if (!detail) {
    return "";
  }

  if (category === "results") {
    return detail;
  }

  return capitalize(detail);
}

function proofText() {
  const count = state.projectCount.trim();
  const buildType = state.buildType.trim();
  const stack = state.techStack.trim();
  const feature = state.feature.trim();
  const problem = state.problem.trim();

  const proofVariants = [
    `Built ${count} ${buildType} using ${stack} with ${feature}${problem ? ` solving ${problem}` : ""}`,
    `Built ${count} ${buildType} with ${stack}${feature ? `; ${feature}` : ""}`,
    `Built ${count} ${buildType}${feature ? `; ${feature}` : ""}`,
    `Built ${count} ${buildType}`
  ];

  return proofVariants.find((variant) => variant.length > 0) || "";
}

function directionText() {
  if (elements.directionSelect.value === "custom") {
    return elements.directionCustom.value.trim();
  }
  return elements.directionSelect.value.trim();
}

function headlineText() {
  const role = state.role.trim();
  const credibility = credibilityText();
  const direction = directionText();
  const count = state.projectCount.trim();
  const buildType = state.buildType.trim();
  const stack = state.techStack.trim();
  const feature = state.feature.trim();
  const problem = state.problem.trim();

  const proofVariants = [
    `Built ${count} ${buildType} using ${stack} with ${feature}${problem ? ` solving ${problem}` : ""}`,
    `Built ${count} ${buildType} with ${stack}${feature ? `; ${feature}` : ""}`,
    `Built ${count} ${buildType}; ${feature || stack}`,
    `Built ${count} ${buildType}`
  ].filter(Boolean);

  const options = proofVariants.map((proof) => [role, proof, credibility, direction].filter(Boolean).join(" | "));
  return options.find((option) => option.length <= 220) || options[0] || role;
}

function headlineChecks(headline) {
  const normalized = headline.toLowerCase();
  const hasMetric = /\d/.test(headline);
  const hasFluff = FLUFF_WORDS.some((word) => normalized.includes(word));
  const withinLimit = headline.length <= 220;
  const hasRole = Boolean(state.role.trim());
  const hasProof = proofText().split(" ").length > 5;
  const hasCredibility = Boolean(credibilityText().trim());
  const credibilityLabel = state.credibilityCategory === "results"
    ? "Measurable impact?"
    : "Technical credibility?";

  return [
    { label: "Clear role?", pass: hasRole },
    { label: "Real proof?", pass: hasProof },
    {
      label: credibilityLabel,
      pass: state.credibilityCategory === "results" ? hasMetric : hasCredibility
    },
    { label: "No fluff?", pass: !hasFluff },
    { label: "Within 220 characters?", pass: withinLimit }
  ];
}

function renderChecklist(headline) {
  const checks = headlineChecks(headline);
  elements.checklist.innerHTML = "";

  checks.forEach((item) => {
    const li = document.createElement("li");
    li.className = item.pass ? "is-pass" : "is-fail";
    li.textContent = `${item.pass ? "✓" : "•"} ${item.label}`;
    elements.checklist.appendChild(li);
  });

  const allGood = checks.every((item) => item.pass);
  elements.constraintStatus.textContent = allGood ? "Ready to post" : "Needs work";
  elements.constraintStatus.classList.toggle("is-good", allGood);
}

function renderRoles() {
  const roleButtons = elements.roleOptions.querySelectorAll(".choice-pill");
  roleButtons.forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.role === state.role);
  });
}

function renderExamples() {
  elements.exampleCards.innerHTML = "";

  EXAMPLES.forEach((example, index) => {
    const article = document.createElement("article");
    article.className = "example-card";

    const headline = buildExampleHeadline(example);

    article.innerHTML = `
      <p class="mini-label">Example ${index + 1}</p>
      <p class="before-label">Before</p>
      <p class="before-text">${example.before}</p>
      <p class="after-label">After</p>
      <p class="after-text">${headline}</p>
      <button type="button" class="text-button" data-example-index="${index}">Use this example</button>
    `;

    elements.exampleCards.appendChild(article);
  });

  elements.exampleCards.querySelectorAll("[data-example-index]").forEach((button) => {
    button.addEventListener("click", () => {
      loadExample(Number(button.dataset.exampleIndex));
    });
  });
}

function buildExampleHeadline(example) {
  const current = { ...state };
  Object.assign(state, {
    role: example.role,
    projectCount: example.projectCount,
    buildType: example.buildType,
    techStack: example.techStack,
    feature: example.feature,
    problem: example.problem,
    credibilityCategory: example.credibilityCategory,
    credibilityType: example.credibilityType,
    credibilityDetail: example.credibilityDetail
  });

  const previousCategory = elements.credibilityCategory.value;
  const previousDirection = elements.directionSelect.value;
  const previousCustom = elements.directionCustom.value;

  elements.credibilityCategory.value = example.credibilityCategory;
  renderCredibilityOptions();
  elements.credibilityType.value = example.credibilityType;
  elements.credibilityDetail.value = example.credibilityDetail;
  elements.directionSelect.value = EXAMPLES.some((item) => item.direction === example.direction)
    ? example.direction
    : "custom";
  elements.directionCustom.value = elements.directionSelect.value === "custom" ? example.direction : "";

  const headline = headlineText();

  Object.assign(state, current);
  elements.credibilityCategory.value = previousCategory;
  renderCredibilityOptions();
  elements.directionSelect.value = previousDirection;
  elements.directionCustom.value = previousCustom;

  return headline;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function renderCredibilityOptions() {
  const category = elements.credibilityCategory.value;
  const config = CREDIBILITY_OPTIONS[category];

  elements.credibilityType.innerHTML = "";

  config.options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option.value;
    item.textContent = option.label;
    elements.credibilityType.appendChild(item);
  });

  elements.credibilityType.value = config.options[0].value;
  elements.credibilityDetail.placeholder = config.options[0].placeholder;
  if (!elements.credibilityDetail.value || elements.credibilityCategory.dataset.reset === "true") {
    elements.credibilityDetail.value = config.options[0].placeholder;
  }
  elements.credibilityHint.textContent = `Tip: ${config.hint}`;
  elements.credibilityCategory.dataset.reset = "false";
}

function syncStateFromInputs() {
  state.projectCount = elements.projectCount.value;
  state.buildType = elements.buildType.value;
  state.techStack = elements.techStack.value;
  state.feature = elements.feature.value;
  state.problem = elements.problem.value;
  state.credibilityCategory = elements.credibilityCategory.value;
  state.credibilityType = elements.credibilityType.value;
  state.credibilityDetail = elements.credibilityDetail.value;
}

function render() {
  syncStateFromInputs();
  renderRoles();

  const headline = headlineText();
  elements.headlineOutput.textContent = headline;
  elements.charCount.textContent = `${headline.length} / 220 characters`;
  elements.charCount.classList.toggle("is-over", headline.length > 220);
  renderChecklist(headline);
  elements.ctaVariant.textContent = CREDIBILITY_OPTIONS[state.credibilityCategory].cta;
}

function loadExample(index) {
  const example = EXAMPLES[index];
  state.role = example.role;
  elements.projectCount.value = example.projectCount;
  elements.buildType.value = example.buildType;
  elements.techStack.value = example.techStack;
  elements.feature.value = example.feature;
  elements.problem.value = example.problem;
  elements.credibilityCategory.dataset.reset = "true";
  elements.credibilityCategory.value = example.credibilityCategory;
  renderCredibilityOptions();
  elements.credibilityType.value = example.credibilityType;
  elements.credibilityDetail.value = example.credibilityDetail;

  if ([...elements.directionSelect.options].some((option) => option.value === example.direction)) {
    elements.directionSelect.value = example.direction;
    elements.directionCustom.value = "";
  } else {
    elements.directionSelect.value = "custom";
    elements.directionCustom.value = example.direction;
  }

  render();
}

async function copyHeadline() {
  const headline = headlineText();

  try {
    await navigator.clipboard.writeText(headline);
    elements.copyButton.textContent = "Copied";
    window.setTimeout(() => {
      elements.copyButton.textContent = "Copy Headline";
    }, 1400);
  } catch {
    elements.copyButton.textContent = "Copy failed";
    window.setTimeout(() => {
      elements.copyButton.textContent = "Copy Headline";
    }, 1400);
  }
}

function bindInputs() {
  [
    elements.projectCount,
    elements.buildType,
    elements.techStack,
    elements.feature,
    elements.problem,
    elements.credibilityCategory,
    elements.credibilityType,
    elements.credibilityDetail,
    elements.directionSelect,
    elements.directionCustom
  ].forEach((input) => {
    input.addEventListener("input", render);
    input.addEventListener("change", render);
  });

  elements.credibilityCategory.addEventListener("change", () => {
    elements.credibilityCategory.dataset.reset = "true";
    renderCredibilityOptions();
    render();
  });

  elements.credibilityType.addEventListener("change", () => {
    const category = elements.credibilityCategory.value;
    const selected = CREDIBILITY_OPTIONS[category].options.find((option) => option.value === elements.credibilityType.value);
    if (selected) {
      elements.credibilityDetail.placeholder = selected.placeholder;
      if (!elements.credibilityDetail.value || elements.credibilityDetail.dataset.autofill === "true") {
        elements.credibilityDetail.value = selected.placeholder;
      }
      elements.credibilityDetail.dataset.autofill = "true";
    }
    render();
  });

  elements.credibilityDetail.addEventListener("input", () => {
    elements.credibilityDetail.dataset.autofill = "false";
  });

  elements.copyButton.addEventListener("click", copyHeadline);
  elements.shuffleButton.addEventListener("click", () => {
    const index = Math.floor(Math.random() * EXAMPLES.length);
    loadExample(index);
  });
}

createRoleOptions();
renderCredibilityOptions();
renderExamples();
bindInputs();
render();
