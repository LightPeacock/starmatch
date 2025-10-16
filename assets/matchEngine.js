// --- StarMatch Result Logic --- ✨

// Retrieve dominant trait from localStorage
const userTrait = localStorage.getItem("trait");

const personaEl = document.getElementById("persona");
const monthEl = document.getElementById("month");
const descEl = document.getElementById("desc");

// --- Personality and Zodiac Mapping ---
const personas = {
  E: {
    name: "💖 The Empath",
    description:
      "You feel deeply and love with intensity. You value emotional connection and honesty. You’re the heart of any relationship.",
    matches: ["July", "March"], // Cancer, Pisces
  },
  A: {
    name: "🔥 The Adventurer",
    description:
      "You crave excitement and spontaneity. You’re drawn to partners who challenge you and keep the spark alive.",
    matches: ["April", "December"], // Aries, Sagittarius
  },
  L: {
    name: "🧠 The Thinker",
    description:
      "You seek harmony through understanding and communication. You value intellect and emotional balance.",
    matches: ["September", "January"], // Virgo, Capricorn
  },
  S: {
    name: "🌳 The Stabilizer",
    description:
      "Loyal, grounded, and patient — you’re the rock others depend on. You flourish with dependable and caring partners.",
    matches: ["May", "October"], // Taurus, Libra
  },
  D: {
    name: "🌙 The Dreamer",
    description:
      "Romantic and imaginative, you live in your emotions. You connect deeply with intuitive, creative souls.",
    matches: ["March", "July"], // Pisces, Cancer
  },
};

// --- Display Results ---
if (userTrait && personas[userTrait]) {
  const persona = personas[userTrait];
  personaEl.textContent = persona.name;
  monthEl.textContent = `💫 Ideal Partner Months: ${persona.matches.join(" & ")}`;
  descEl.textContent = persona.description;
} else {
  personaEl.textContent = "No result found 😅";
  monthEl.textContent = "";
  descEl.textContent = "Please retake the quiz to discover your cosmic match!";
}
