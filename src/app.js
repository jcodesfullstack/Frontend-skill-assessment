const form = document.getElementById("audit-form");
const resultCard = document.getElementById("diagnosis-result");

const BOTTLENECKS = {
  value: {
    label: "Value problem",
    headline: "Your content has a value problem.",
    reason: "High views with low saves means people saw the post, but did not find it useful enough to keep.",
    fix: "Make your next post a step-by-step system with a clear framework, checklist, or repeatable process."
  },
  impact: {
    label: "Emotional impact problem",
    headline: "Your content is useful, but it is not hitting hard enough.",
    reason: "Saves without shares usually means the post is practical, but not sharp, relatable, or bold enough to pass along.",
    fix: "Add a stronger opinion, call out the painful mistake, or name the private frustration your reader already feels."
  },
  cta: {
    label: "CTA problem",
    headline: "Your content has a CTA problem.",
    reason: "High saves with low comments means people value the post, but you are not giving them a reason to raise their hand.",
    fix: "End with a keyword CTA such as 'comment SYSTEM' or ask a specific question that forces a real response."
  },
  positioning: {
    label: "Positioning problem",
    headline: "Your content has a positioning problem.",
    reason: "Comments without profile clicks means people engaged, but the post did not make your authority or offer obvious.",
    fix: "Rewrite the hook and post angle so the reader knows who you help, what problem you solve, and why they should click."
  },
  offer: {
    label: "Offer problem",
    headline: "Your content has an offer problem.",
    reason: "Profile clicks without DMs means people are interested, but your offer or next step is not clear enough.",
    fix: "Make the promise sharper, add a direct next step, and make your profile explain the result you help people get."
  },
  healthy: {
    label: "Conversion path working",
    headline: "Your content is converting better than most.",
    reason: "Your metrics show attention, value, intent, and buying interest moving in the same direction.",
    fix: "Double down on this post format and create three variations with a stronger CTA."
  }
};

function getNumber(name) {
  const value = Number(new FormData(form).get(name));
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function percent(part, total) {
  if (!total) {
    return 0;
  }

  return (part / total) * 100;
}

function diagnose(metrics) {
  const saveRate = percent(metrics.saves, metrics.views);
  const shareRate = percent(metrics.shares, metrics.views);
  const commentRate = percent(metrics.comments, metrics.views);
  const clickRate = percent(metrics.clicks, metrics.views);

  if (metrics.views >= 1000 && saveRate < 2) {
    return { ...BOTTLENECKS.value, saveRate, shareRate, commentRate, clickRate };
  }

  if (saveRate >= 2 && shareRate < 0.75) {
    return { ...BOTTLENECKS.impact, saveRate, shareRate, commentRate, clickRate };
  }

  if (saveRate >= 2 && commentRate < 0.25) {
    return { ...BOTTLENECKS.cta, saveRate, shareRate, commentRate, clickRate };
  }

  if (metrics.comments >= 5 && clickRate < 0.7) {
    return { ...BOTTLENECKS.positioning, saveRate, shareRate, commentRate, clickRate };
  }

  if (metrics.clicks >= 8 && metrics.dms === 0) {
    return { ...BOTTLENECKS.offer, saveRate, shareRate, commentRate, clickRate };
  }

  return { ...BOTTLENECKS.healthy, saveRate, shareRate, commentRate, clickRate };
}

function renderDiagnosis(event) {
  event?.preventDefault();

  const metrics = {
    views: getNumber("views"),
    saves: getNumber("saves"),
    shares: getNumber("shares"),
    comments: getNumber("comments"),
    clicks: getNumber("clicks"),
    dms: getNumber("dms")
  };
  const diagnosis = diagnose(metrics);

  resultCard.innerHTML = `
    <p class="mini-label">Your diagnosis</p>
    <span class="result-pill">${escapeHtml(diagnosis.label)}</span>
    <h3>${escapeHtml(diagnosis.headline)}</h3>
    <p>${escapeHtml(diagnosis.reason)}</p>
    <dl class="rate-grid">
      <div>
        <dt>Save rate</dt>
        <dd>${diagnosis.saveRate.toFixed(1)}%</dd>
      </div>
      <div>
        <dt>Share rate</dt>
        <dd>${diagnosis.shareRate.toFixed(1)}%</dd>
      </div>
      <div>
        <dt>Comment rate</dt>
        <dd>${diagnosis.commentRate.toFixed(1)}%</dd>
      </div>
      <div>
        <dt>Click rate</dt>
        <dd>${diagnosis.clickRate.toFixed(1)}%</dd>
      </div>
    </dl>
    <div class="fix-card">
      <strong>Fix your next post</strong>
      <p>${escapeHtml(diagnosis.fix)}</p>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

form.addEventListener("submit", renderDiagnosis);
form.addEventListener("input", renderDiagnosis);
renderDiagnosis();
