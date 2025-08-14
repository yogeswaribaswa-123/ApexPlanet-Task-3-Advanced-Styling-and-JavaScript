// ===== QUIZ SECTION =====
const questions = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Management", "Digital Output Mode"],
    answer: "Document Object Model"
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: ["pop()", "push()", "shift()"],
    answer: "push()"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "#", "<!-- -->"],
    answer: "//"
  },
  {
    question: "Which one is a JavaScript framework?",
    options: ["Laravel", "React", "Django"],
    answer: "React"
  },
  {
    question: "Which function is used to fetch data from an API?",
    options: ["get()", "fetch()", "retrieve()"],
    answer: "fetch()"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreDisplay = document.getElementById("scoreDisplay");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(selected) {
  const correct = questions[currentQuestion].answer;
  if (selected === correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
    scoreDisplay.textContent = `Your score: ${score} / ${questions.length}`;
  }
}

nextBtn.addEventListener("click", () => {
  showQuestion();
});

showQuestion();

// ===== JOKE SECTION =====
const jokeBtn = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("jokeDisplay");

jokeBtn.addEventListener("click", async () => {
  jokeDisplay.textContent = "Fetching a funny joke...";
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await res.json();
    jokeDisplay.textContent = `${data.setup} — ${data.punchline}`;
  } catch (err) {
    jokeDisplay.textContent = "Oops! Couldn't fetch a joke. Try again.";
  }
});
