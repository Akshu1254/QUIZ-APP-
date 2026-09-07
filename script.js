const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    correct: 0
  },
  {
    question: "What is CSS mainly used for?",
    answers: ["Styling web pages", "Creating databases", "Running servers", "Writing HTML"],
    correct: 0
  },
  {
    question: "Which language is mainly used to make web pages interactive?",
    answers: ["HTML", "CSS", "JavaScript", "SQL"],
    correct: 2
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },
  {
    question: "Which CSS symbol is used for an ID selector?",
    answers: [".", "#", "*", "&"],
    correct: 1
  },
  {
    question: "Which HTML tag creates the largest heading?",
    answers: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: 2
  },
  {
    question: "Which JavaScript keyword can declare a variable?",
    answers: ["let", "style", "html", "select"],
    correct: 0
  },
  {
    question: "Which method is commonly used to print something in the browser console?",
    answers: ["print()", "console.log()", "show()", "output()"],
    correct: 1
  },
  {
    question: "Which of the following is a JavaScript library?",
    answers: ["React", "HTML", "CSS", "MySQL"],
    correct: 0
  },
  {
    question: "Which HTML element is used to display an image?",
    answers: ["<image>", "<img>", "<picturefile>", "<src>"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");
const resultBox = document.getElementById("resultBox");
const questionNumberEl = document.getElementById("questionNumber");
const scoreLiveEl = document.getElementById("scoreLive");
const progressBar = document.getElementById("progressBar");

function loadQuestion() {
  answered = false;
  const q = questions[currentQuestion];

  questionEl.innerText = q.question;
  answersEl.innerHTML = "";
  questionNumberEl.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
  scoreLiveEl.innerText = `Score: ${score}`;
  progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");

    button.onclick = () => checkAnswer(index, button);

    answersEl.appendChild(button);
  });

  nextBtn.style.display = "none";
}

function checkAnswer(index, selectedButton) {
  if (answered) return;

  answered = true;

  const correctAnswer = questions[currentQuestion].correct;
  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach((button, buttonIndex) => {
    button.disabled = true;

    if (buttonIndex === correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (index === correctAnswer) {
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  scoreLiveEl.innerText = `Score: ${score}`;

  if (currentQuestion === questions.length - 1) {
    nextBtn.innerText = "See Result 🏆";
  } else {
    nextBtn.innerText = "Next Question →";
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.style.display = "none";
  answersEl.style.display = "none";
  nextBtn.style.display = "none";
  questionNumberEl.style.display = "none";

  progressBar.style.width = "100%";

  resultBox.style.display = "block";
  scoreEl.innerText = `Your Score: ${score} / ${questions.length}`;

  const percentage = (score / questions.length) * 100;

  if (percentage === 100) {
    messageEl.innerText = "Perfect! Outstanding performance! 🎉";
  } else if (percentage >= 70) {
    messageEl.innerText = "Great job! You have strong knowledge! 👏";
  } else if (percentage >= 50) {
    messageEl.innerText = "Good प्रयास! Keep practicing and improve! 💪";
  } else {
    messageEl.innerText = "Keep learning and try again! 📚";
  }
}

restartBtn.onclick = () => {
  currentQuestion = 0;
  score = 0;

  questionEl.style.display = "block";
  answersEl.style.display = "block";
  questionNumberEl.style.display = "block";
  resultBox.style.display = "none";

  loadQuestion();
};

loadQuestion();
