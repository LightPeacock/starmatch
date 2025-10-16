// StarMatch Quiz Logic ✨

// --- Questions Data ---
const questions = [
  {
    question: "How do you express love?",
    options: [
      { text: "Through care and loyalty", trait: "E" },
      { text: "Through fun and excitement", trait: "A" },
      { text: "Through deep conversations", trait: "L" },
      { text: "Through stability and patience", trait: "S" },
    ],
  },
  {
    question: "What kind of partner attracts you most?",
    options: [
      { text: "Creative dreamers", trait: "D" },
      { text: "Confident risk-takers", trait: "A" },
      { text: "Calm and grounded types", trait: "S" },
      { text: "Thoughtful planners", trait: "L" },
    ],
  },
  {
    question: "When you're in love, you tend to...",
    options: [
      { text: "Lose yourself in emotions", trait: "E" },
      { text: "Stay realistic and balanced", trait: "L" },
      { text: "Go all in impulsively", trait: "A" },
      { text: "Stay steady and loyal", trait: "S" },
    ],
  },
  {
    question: "What's your ideal date night?",
    options: [
      { text: "Long drive with music", trait: "A" },
      { text: "Cozy movie and snacks", trait: "S" },
      { text: "Deep conversation under the stars", trait: "D" },
      { text: "Trying something new and wild", trait: "A" },
    ],
  },
  {
    question: "Which describes you best?",
    options: [
      { text: "Empathetic and intuitive", trait: "E" },
      { text: "Organized and logical", trait: "L" },
      { text: "Adventurous and spontaneous", trait: "A" },
      { text: "Calm and dependable", trait: "S" },
    ],
  },
  {
    question: "How do you handle conflicts in relationships?",
    options: [
      { text: "Talk it out calmly", trait: "L" },
      { text: "Get emotional and expressive", trait: "E" },
      { text: "Withdraw until things cool down", trait: "S" },
      { text: "Act impulsively or defensively", trait: "A" },
    ],
  },
  {
    question: "What do you expect from your partner the most?",
    options: [
      { text: "Emotional understanding", trait: "E" },
      { text: "Adventure and fun", trait: "A" },
      { text: "Stability and trust", trait: "S" },
      { text: "Intellectual connection", trait: "L" },
    ],
  },
  {
    question: "What’s your love language?",
    options: [
      { text: "Quality Time", trait: "E" },
      { text: "Acts of Service", trait: "S" },
      { text: "Physical Touch", trait: "A" },
      { text: "Words of Affirmation", trait: "L" },
    ],
  },
];


// --- State Variables ---
let currentQuestion = 0;
let answers = [];

// --- DOM Elements ---
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// --- Functions ---
function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.classList.add("option");
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.trait);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectOption(trait) {
  answers[currentQuestion] = trait;
  const allBtns = document.querySelectorAll(".option");
  allBtns.forEach((b) => (b.disabled = true));
  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
});

function finishQuiz() {
  // Count trait frequency
  const counts = {};
  answers.forEach((t) => (counts[t] = (counts[t] || 0) + 1));
  const dominantTrait = Object.keys(counts).reduce((a, b) =>
    counts[a] > counts[b] ? a : b
  );

  // Store result locally for result page
  localStorage.setItem("trait", dominantTrait);

  // Redirect to result page
  window.location.href = "result.html";
}

// --- Initialize ---
loadQuestion();
