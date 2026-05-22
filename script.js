const questions = [
  {
    question: "What is HTML?",
    answers: ["Programming Language", "Markup Language", "Database"],
    correct: 1
  },

  {
    question: "What is CSS used for?",
    answers: ["Styling", "Database", "Server"],
    correct: 0
  },

  {
    question: "What is JavaScript?",
    answers: ["Game", "Language", "Browser"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {

  let q = questions[currentQuestion];

  questionEl.innerText = q.question;

  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {

    let button = document.createElement("button");

    button.innerText = answer;

    button.onclick = () => checkAnswer(index);

    answersEl.appendChild(button);
  });
}

function checkAnswer(index) {

  if (index === questions[currentQuestion].correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

    nextBtn.style.display = "none";

  } else {

    showScore();
  }
};

function showScore() {

  questionEl.innerText = "Quiz Finished";

  answersEl.innerHTML = "";

  nextBtn.style.display = "none";

  scoreEl.innerText =
    "Your Score: " + score + "/" + questions.length;
}

loadQuestion();

nextBtn.style.display = "none";
