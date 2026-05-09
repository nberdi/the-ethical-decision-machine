const perspectives = [
  { key: "utilitarianism", label: "⚖️ Utilitarianism" },
  { key: "deontology", label: "📜 Deontology" },
  { key: "virtueEthics", label: "🧠 Virtue Ethics" },
  { key: "civilJustice", label: "🕊️ Civil Disobedience & Justice" },
  { key: "careEthics", label: "❤️ Care Ethics" },
];

const dilemmas = [
  {
    id: "trolley",
    icon: "🚋",
    title: "The Trolley Problem",
    preview: "One track has five people; the other has one.",
    scenario:
      "A runaway trolley is heading toward five workers. You can pull a lever to redirect it to a side track where one worker is standing.",
    choices: [
      {
        text: "Pull the lever to save five.",
        meter: {
          consequences: 92,
          duty: 48,
          justice: 55,
          care: 60,
          character: 66,
        },
        analysis: {
          utilitarianism:
            "This choice focuses on outcomes. Saving five lives at the cost of one can be defended as maximizing overall well-being.",
          deontology:
            "A duty-based view may object that you are intentionally redirecting harm, even for a better outcome.",
          virtueEthics:
            "This can show courage under pressure, but it also raises questions about humility in deciding who bears the cost.",
          civilJustice:
            "A justice lens stresses equal moral worth and asks whether efficiency alone is a fair basis for action.",
          careEthics:
            "Care ethics asks whether urgent responsibility to the many can be balanced with empathy for the one person harmed.",
        },
      },
      {
        text: "Do not intervene.",
        meter: {
          consequences: 20,
          duty: 62,
          justice: 45,
          care: 38,
          character: 52,
        },
        analysis: {
          utilitarianism:
            "From a consequences view, allowing greater harm when you could reduce it is hard to justify.",
          deontology:
            "Some deontological views argue that refusing to directly cause harm respects a moral limit.",
          virtueEthics:
            "This may reflect restraint, but it may also look like avoidance in a moment that demands action.",
          civilJustice:
            "Justice reasoning can question whether inaction is neutral when the power to prevent harm is available.",
          careEthics:
            "Care ethics may view this as an insufficient response to preventable suffering.",
        },
      },
      {
        text: "Look for another rescue option.",
        meter: {
          consequences: 70,
          duty: 70,
          justice: 68,
          care: 72,
          character: 74,
        },
        analysis: {
          utilitarianism:
            "A third option is attractive if it can still protect the greatest number in time.",
          deontology:
            "This approach tries to respect moral rules while still taking responsibility to act.",
          virtueEthics:
            "It reflects practical wisdom by refusing a false two-choice frame and searching for a better path.",
          civilJustice:
            "Justice is supported when we question tragic tradeoffs and seek fairer alternatives.",
          careEthics:
            "Care ethics values this attempt to protect both sides of the dilemma rather than abandoning either one.",
        },
      },
    ],
  },
  {
    id: "lying",
    icon: "🗣️",
    title: "Lying to Protect a Friend",
    preview: "Truthfulness versus loyalty and protection.",
    scenario:
      "A friend confides in you about a serious mistake. Later, someone in authority asks you for details that could cause your friend major harm.",
    choices: [
      {
        text: "Tell the full truth.",
        meter: {
          consequences: 50,
          duty: 90,
          justice: 68,
          care: 40,
          character: 65,
        },
        analysis: {
          utilitarianism:
            "If full disclosure causes major harm with little public benefit, the overall consequences may be hard to defend.",
          deontology:
            "Truthfulness is often treated as a central duty, regardless of personal cost.",
          virtueEthics:
            "Honesty matters, but virtue ethics also asks whether good judgment includes compassion in context.",
          civilJustice:
            "If authority is fair, openness can support trust. If authority is unfair, disclosure may enable injustice.",
          careEthics:
            "Care ethics may see this as weak protection of a vulnerable relationship built on trust.",
        },
      },
      {
        text: "Lie to protect your friend.",
        meter: {
          consequences: 72,
          duty: 35,
          justice: 52,
          care: 88,
          character: 63,
        },
        analysis: {
          utilitarianism:
            "A protective lie may be justified if it prevents serious harm and leads to better overall outcomes.",
          deontology:
            "A strict deontological view maintains that lying is wrong, even when intentions are protective.",
          virtueEthics:
            "This can show loyalty, but it may also encourage habits of dishonesty over time.",
          civilJustice:
            "A justice lens asks whether deception blocks fair accountability or resists an unfair process.",
          careEthics:
            "Care ethics emphasizes responsibility to protect someone who trusted you with sensitive information.",
        },
      },
      {
        text: "Decline to answer.",
        meter: {
          consequences: 78,
          duty: 74,
          justice: 75,
          care: 84,
          character: 80,
        },
        analysis: {
          utilitarianism:
            "This can reduce harm while avoiding direct deception.",
          deontology:
            "You avoid lying while also honoring a duty to confidentiality.",
          virtueEthics:
            "The choice reflects integrity, courage, and practical judgment in a tense situation.",
          civilJustice:
            "Refusal can be principled when requests for information seem excessive or unfair.",
          careEthics:
            "Care ethics supports boundaries that protect trust, dignity, and relational responsibility.",
        },
      },
    ],
  },
  {
    id: "unjust-law",
    icon: "🏛️",
    title: "Breaking an Unjust Law",
    preview: "Legal obedience versus moral resistance.",
    scenario:
      "A law in your city unfairly restricts a vulnerable group. You can comply, quietly oppose it, or openly break the law in protest.",
    choices: [
      {
        text: "Obey and push for reform.",
        meter: {
          consequences: 58,
          duty: 82,
          justice: 45,
          care: 52,
          character: 60,
        },
        analysis: {
          utilitarianism:
            "Gradual reform may avoid short-term instability, but it can also extend preventable harm.",
          deontology:
            "This reflects duty to legal order and shared civic rules.",
          virtueEthics:
            "It may express patience, yet virtue ethics can still ask whether courage is underused.",
          civilJustice:
            "Justice theory cautions that legality and fairness are not always the same.",
          careEthics:
            "Care ethics asks whether delay leaves affected people without needed support now.",
        },
      },
      {
        text: "Break the law in public protest.",
        meter: {
          consequences: 74,
          duty: 57,
          justice: 94,
          care: 78,
          character: 86,
        },
        analysis: {
          utilitarianism:
            "Public resistance may produce long-term reform and reduce future harm.",
          deontology:
            "Although it conflicts with civic duty, some duty-based views recognize a higher duty to moral principle.",
          virtueEthics:
            "This can show courage and integrity when actions align with considered convictions.",
          civilJustice:
            "Civil disobedience directly challenges unjust systems and highlights the moral limits of legal authority.",
          careEthics:
            "Care ethics values standing with those who are harmed rather than remaining passive.",
        },
      },
      {
        text: "Quietly support affected people.",
        meter: {
          consequences: 70,
          duty: 63,
          justice: 74,
          care: 90,
          character: 76,
        },
        analysis: {
          utilitarianism:
            "Direct support can reduce immediate suffering even if the law itself remains in place.",
          deontology:
            "This approach balances duties: respect for law and responsibility to protect persons.",
          virtueEthics:
            "It reflects compassion and prudence, though it may avoid public moral confrontation.",
          civilJustice:
            "It helps individuals but may leave structural injustice mostly unchallenged.",
          careEthics:
            "Care ethics values this attention to concrete needs and ongoing relationships.",
        },
      },
    ],
  },
  {
    id: "medicine",
    icon: "💊",
    title: "Stealing Medicine to Save a Life",
    preview: "Property rights versus urgent survival.",
    scenario:
      "A parent cannot afford life-saving medicine for their child. The pharmacy refuses to provide it without payment.",
    choices: [
      {
        text: "Steal the medicine.",
        meter: {
          consequences: 88,
          duty: 34,
          justice: 76,
          care: 94,
          character: 79,
        },
        analysis: {
          utilitarianism:
            "Preserving a life carries major weight in outcome-focused reasoning.",
          deontology:
            "Theft violates a rule against taking what is not yours, even in an emergency.",
          virtueEthics:
            "This may show compassion and courage, while still raising concerns about respect for norms.",
          civilJustice:
            "The case exposes fairness problems in access to essential care.",
          careEthics:
            "Care ethics gives priority to urgent protection of a vulnerable person.",
        },
      },
      {
        text: "Do not steal; keep it legal.",
        meter: {
          consequences: 42,
          duty: 86,
          justice: 54,
          care: 44,
          character: 58,
        },
        analysis: {
          utilitarianism:
            "If legal routes fail in time, this choice can lead to severe harm.",
          deontology:
            "It respects legal and moral rules about property and social order.",
          virtueEthics:
            "It may reflect restraint, but it can also seem unresponsive to urgent human need.",
          civilJustice:
            "Justice concerns remain if lawful systems still deny basic care.",
          careEthics:
            "Care ethics may judge this as insufficient care for someone in immediate danger.",
        },
      },
      {
        text: "Take now, repay later.",
        meter: {
          consequences: 86,
          duty: 61,
          justice: 80,
          care: 90,
          character: 83,
        },
        analysis: {
          utilitarianism:
            "This aims to save life now while reducing broader harm through later repair.",
          deontology:
            "It still breaks a rule, but it acknowledges responsibility by seeking later accountability.",
          virtueEthics:
            "The choice can reflect practical wisdom by combining compassion with responsibility.",
          civilJustice:
            "It supports the claim that basic survival should not depend only on purchasing power.",
          careEthics:
            "Care ethics supports urgent protection while keeping responsibilities to others in view.",
        },
      },
    ],
  },
  {
    id: "ai-workers",
    icon: "🤖",
    title: "AI Replacing Human Workers",
    preview: "Innovation, efficiency, and social responsibility.",
    scenario:
      "A company can automate most roles with AI to boost productivity, but many long-time employees would lose their jobs.",
    choices: [
      {
        text: "Automate as fast as possible.",
        meter: {
          consequences: 67,
          duty: 46,
          justice: 38,
          care: 32,
          character: 52,
        },
        analysis: {
          utilitarianism:
            "If the gains are broad and transition costs are managed, automation can improve overall welfare.",
          deontology:
            "A duty-based view asks whether workers are being treated as means rather than ends.",
          virtueEthics:
            "Prudence can support innovation, but fairness and compassion still matter in implementation.",
          civilJustice:
            "Justice concerns focus on whether displaced workers bear an unfair share of the burden.",
          careEthics:
            "Care ethics questions rapid replacement when families and communities absorb the cost.",
        },
      },
      {
        text: "Pause automation to protect jobs.",
        meter: {
          consequences: 52,
          duty: 78,
          justice: 70,
          care: 84,
          character: 72,
        },
        analysis: {
          utilitarianism:
            "This may protect short-term well-being, though it can reduce long-term benefits from innovation.",
          deontology:
            "It supports duties of loyalty and respect toward existing workers.",
          virtueEthics:
            "It reflects care and fairness, though it may limit adaptability.",
          civilJustice:
            "The choice emphasizes distributive fairness by refusing to shift transition costs onto workers alone.",
          careEthics:
            "Care ethics values this protection of relationships, households, and community stability.",
        },
      },
      {
        text: "Automate gradually with retraining.",
        meter: {
          consequences: 89,
          duty: 84,
          justice: 90,
          care: 88,
          character: 87,
        },
        analysis: {
          utilitarianism:
            "A phased approach can preserve innovation gains while reducing harm.",
          deontology:
            "It better respects workers as persons by supporting their future agency.",
          virtueEthics:
            "This reflects practical wisdom, fairness, and responsibility during change.",
          civilJustice:
            "Justice is strengthened when benefits and burdens are shared more fairly.",
          careEthics:
            "Care ethics supports transitions that protect people through disruption, not just institutions.",
        },
      },
    ],
  },
  {
    id: "punishment",
    icon: "⚖️",
    title: "Punishment vs Rehabilitation",
    preview: "Accountability, safety, and the possibility of change.",
    scenario:
      "A young offender committed a serious non-violent crime. The court must choose between a long punitive sentence and a rehabilitation-focused program.",
    choices: [
      {
        text: "Prioritize strict punishment.",
        meter: {
          consequences: 48,
          duty: 80,
          justice: 62,
          care: 28,
          character: 46,
        },
        analysis: {
          utilitarianism:
            "If punishment deters future harm, it may have public benefit, though long-term effects are uncertain.",
          deontology:
            "Duty-based reasoning may support proportionate punishment as a matter of accountability.",
          virtueEthics:
            "It can express seriousness about wrongdoing, but may underemphasize growth and mercy.",
          civilJustice:
            "Justice asks whether penalties are proportional, consistent, and free from bias.",
          careEthics:
            "Care ethics may see this as giving too little attention to context, repair, and future relationships.",
        },
      },
      {
        text: "Prioritize rehabilitation.",
        meter: {
          consequences: 86,
          duty: 65,
          justice: 84,
          care: 92,
          character: 88,
        },
        analysis: {
          utilitarianism:
            "Rehabilitation can lower future harm by reducing repeat offenses.",
          deontology:
            "Some duty-based views support this if accountability remains meaningful.",
          virtueEthics:
            "It reflects commitment to moral growth and practical wisdom about human change.",
          civilJustice:
            "Justice is served when systems aim to restore social participation, not only punish.",
          careEthics:
            "Care ethics supports responses that address needs, responsibility, and the possibility of repair.",
        },
      },
      {
        text: "Combine accountability and rehab.",
        meter: {
          consequences: 90,
          duty: 82,
          justice: 91,
          care: 86,
          character: 90,
        },
        analysis: {
          utilitarianism:
            "Combining structure and support can improve both safety and long-term outcomes.",
          deontology:
            "This approach can uphold accountability while respecting each person's dignity.",
          virtueEthics:
            "It reflects balance, fairness, and practical judgment rather than moral extremes.",
          civilJustice:
            "Justice is stronger when sanctions are proportional and reintegration remains possible.",
          careEthics:
            "Care ethics values this model for pairing responsibility with humane support and repair.",
        },
      },
    ],
  },
];

const dilemmaListEl = document.getElementById("dilemma-list");
const placeholderEl = document.getElementById("placeholder");
const detailEl = document.getElementById("dilemma-detail");
const detailTagEl = document.getElementById("detail-tag");
const detailTitleEl = document.getElementById("detail-title");
const detailScenarioEl = document.getElementById("detail-scenario");
const choiceButtonsEl = document.getElementById("choice-buttons");
const analysisBlockEl = document.getElementById("analysis-block");
const analysisCardsEl = document.getElementById("analysis-cards");
const meterBarsEl = document.getElementById("meter-bars");
const closingReflectionEl = document.getElementById("closing-reflection");

const state = {
  activeDilemmaId: null,
  selectedChoiceIndex: null,
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  window.scrollTo(0, 0);

  if (window.location.hash) {
    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    history.replaceState(null, "", cleanUrl);
  }
});

function renderDilemmaList() {
  dilemmaListEl.innerHTML = "";

  dilemmas.forEach((dilemma) => {
    const button = document.createElement("button");
    button.className = "dilemma-card";
    button.setAttribute("type", "button");
    button.innerHTML = `<strong>${dilemma.icon} ${dilemma.title}</strong><span>${dilemma.preview}</span>`;

    button.addEventListener("click", () => {
      selectDilemma(dilemma.id);
    });

    if (state.activeDilemmaId === dilemma.id) {
      button.classList.add("active");
    }

    dilemmaListEl.appendChild(button);
  });
}

function selectDilemma(dilemmaId) {
  state.activeDilemmaId = dilemmaId;
  state.selectedChoiceIndex = null;

  const dilemma = dilemmas.find((item) => item.id === dilemmaId);
  if (!dilemma) {
    return;
  }

  placeholderEl.classList.add("hidden");
  detailEl.classList.remove("hidden");
  analysisBlockEl.classList.add("hidden");

  detailTagEl.textContent = "Dilemma";
  detailTitleEl.textContent = dilemma.title;
  detailScenarioEl.textContent = dilemma.scenario;

  renderChoiceButtons(dilemma);
  renderDilemmaList();
}

function renderChoiceButtons(dilemma) {
  choiceButtonsEl.innerHTML = "";

  dilemma.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-btn";
    button.setAttribute("type", "button");
    button.textContent = `${index + 1}. ${choice.text}`;

    button.addEventListener("click", () => {
      state.selectedChoiceIndex = index;
      applyChoiceSelection();
      renderAnalysis(dilemma, choice);
    });

    choiceButtonsEl.appendChild(button);
  });
}

function applyChoiceSelection() {
  const buttons = choiceButtonsEl.querySelectorAll(".choice-btn");
  buttons.forEach((button, index) => {
    button.classList.toggle("selected", state.selectedChoiceIndex === index);
  });
}

function renderAnalysis(dilemma, choice) {
  analysisBlockEl.classList.remove("hidden");
  analysisCardsEl.innerHTML = "";

  perspectives.forEach((perspective, index) => {
    const card = document.createElement("article");
    card.className = "analysis-card";
    card.style.animationDelay = `${index * 0.08}s`;

    const title = document.createElement("h5");
    title.textContent = perspective.label;

    const body = document.createElement("p");
    body.textContent = choice.analysis[perspective.key];

    card.appendChild(title);
    card.appendChild(body);
    analysisCardsEl.appendChild(card);
  });

  renderMeter(choice.meter);
  closingReflectionEl.textContent = `You chose: "${choice.text}". There is no single easy answer here. Each ethical framework highlights different responsibilities.`;

  detailEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderMeter(values) {
  const fields = [
    { key: "consequences", label: "Consequences" },
    { key: "duty", label: "Duty" },
    { key: "justice", label: "Justice" },
    { key: "care", label: "Care" },
    { key: "character", label: "Character" },
  ];

  meterBarsEl.innerHTML = "";

  fields.forEach((field) => {
    const row = document.createElement("div");
    row.className = "meter-row";

    const label = document.createElement("span");
    label.className = "meter-label";
    label.textContent = field.label;

    const track = document.createElement("div");
    track.className = "meter-track";

    const fill = document.createElement("div");
    fill.className = "meter-fill";

    const score = document.createElement("span");
    score.className = "meter-score";

    const target = Math.max(0, Math.min(100, Number(values[field.key] || 0)));
    score.textContent = `${target}`;

    track.appendChild(fill);
    row.appendChild(label);
    row.appendChild(track);
    row.appendChild(score);
    meterBarsEl.appendChild(row);

    requestAnimationFrame(() => {
      fill.style.width = `${target}%`;
    });
  });
}

renderDilemmaList();
