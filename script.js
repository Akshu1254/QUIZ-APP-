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
    answers: [
      "Styling web pages",
      "Creating databases",
      "Running servers",
      "Writing HTML"
    ],
    correct: 0
  },

  {
    question: "Which language makes websites interactive?",
    answers: [
      "HTML",
      "CSS",
      "JavaScript",
      "SQL"
    ],
    correct: 2
  },

  {
    question: "Which HTML tag creates a hyperlink?",
    answers: [
      "<link>",
      "<a>",
      "<href>",
      "<url>"
    ],
    correct: 1
  },

  {
    question: "Which CSS symbol is used for an ID?",
    answers: [
      ".",
      "#",
      "*",
      "&"
    ],
    correct: 1
  },

  {
    question: "Which HTML tag creates the largest heading?",
    answers: [
      "<h6>",
      "<heading>",
      "<h1>",
      "<head>"
    ],
    correct: 2
  },

  {
    question: "Which JavaScript keyword declares a variable?",
    answers: [
      "let",
      "style",
      "html",
      "select"
    ],
    correct: 0
  },

  {
    question: "Which method prints in the browser console?",
    answers: [
      "print()",
      "console.log()",
      "show()",
      "output()"
    ],
    correct: 1
  },

  {
    question: "Which is a JavaScript library?",
    answers: [
      "React",
      "HTML",
      "CSS",
      "MySQL"
    ],
    correct: 0
  },

  {
    question: "Which HTML tag displays an image?",
    answers: [
      "<image>",
      "<img>",
      "<picturefile>",
      "<src>"
    ],
    correct: 1
  }

];


let currentQuestion = 0;
let score = 0;
let answered = false;
let playerName = "";


/* GET HTML ELEMENTS */

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultBox = document.getElementById("resultBox");

const userNameInput = document.getElementById("userName");
const displayName = document.getElementById("displayName");

const nameError = document.getElementById("nameError");

const startBtn = document.getElementById("startBtn");

const questionEl = document.getElementById("question");

const answersEl = document.getElementById("answers");

const nextBtn = document.getElementById("nextBtn");

const restartBtn = document.getElementById("restartBtn");

const scoreEl = document.getElementById("score");

const finalTitle = document.getElementById("finalTitle");

const messageEl = document.getElementById("message");

const questionNumberEl =
  document.getElementById("questionNumber");

const scoreLiveEl =
  document.getElementById("scoreLive");

const progressBar =
  document.getElementById("progressBar");

const resultsList =
  document.getElementById("resultsList");


/* START QUIZ */

startBtn.onclick = function () {

  playerName = userNameInput.value.trim();

  if (playerName.length < 2) {

    nameError.innerText =
      "Please enter your name.";

    return;
  }

  nameError.innerText = "";

  displayName.innerText = playerName;

  startScreen.style.display = "none";

  quizScreen.style.display = "block";

  currentQuestion = 0;

  score = 0;

  loadQuestion();
};


/* LOAD QUESTION */

function loadQuestion() {

  answered = false;

  let q = questions[currentQuestion];

  questionEl.innerText = q.question;

  answersEl.innerHTML = "";


  questionNumberEl.innerText =
    "Question " +
    (currentQuestion + 1) +
    " of " +
    questions.length;


  scoreLiveEl.innerText =
    "Score: " + score;


  progressBar.style.width =
    (currentQuestion / questions.length) * 100 + "%";


  nextBtn.style.display = "none";


  q.answers.forEach(function (answer, index) {

    let button =
      document.createElement("button");

    button.innerText = answer;

    button.classList.add("answer-btn");


    button.onclick = function () {

      checkAnswer(index, button);

    };


    answersEl.appendChild(button);

  });

}


/* CHECK ANSWER */

function checkAnswer(index, selectedButton) {

  if (answered) return;


  answered = true;


  let correctAnswer =
    questions[currentQuestion].correct;


  let allButtons =
    document.querySelectorAll(".answer-btn");


  allButtons.forEach(function (button, buttonIndex) {

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


  scoreLiveEl.innerText =
    "Score: " + score;


  if (currentQuestion === questions.length - 1) {

    nextBtn.innerText =
      "See Result 🏆";

  } else {

    nextBtn.innerText =
      "Next Question →";

  }


  nextBtn.style.display = "block";

}


/* NEXT QUESTION */

nextBtn.onclick = function () {

  currentQuestion++;


  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showScore();

  }

};


/* SHOW FINAL RESULT */

function showScore() {

  quizScreen.style.display = "none";

  resultBox.style.display = "block";


  finalTitle.innerText =
    "Great job, " +
    playerName +
    "! 🎉";


  scoreEl.innerText =
    "Your Score: " +
    score +
    " / " +
    questions.length;


  let percentage =
    (score / questions.length) * 100;


  if (percentage === 100) {

    messageEl.innerText =
      "Perfect score! Outstanding performance!";

  }

  else if (percentage >= 70) {

    messageEl.innerText =
      "Great job! You have strong knowledge!";

  }

  else if (percentage >= 50) {

    messageEl.innerText =
      "Good effort! Keep practicing!";

  }

  else {

    messageEl.innerText =
      "Keep learning and try again!";

  }


  saveResult();

  showResults();

}


/* SAVE RESULT */

function saveResult() {

  let results =
    JSON.parse(
      localStorage.getItem("quizResults")
    ) || [];


  results.unshift({

    name: playerName,

    score: score,

    total: questions.length,

    date:
      new Date().toLocaleString()

  });


  localStorage.setItem(

    "quizResults",

    JSON.stringify(results)

  );

}


/* SHOW SAVED RESULTS */

function showResults() {

  let results =
    JSON.parse(
      localStorage.getItem("quizResults")
    ) || [];


  resultsList.innerHTML = "";


  results.forEach(function (result) {

    let item =
      document.createElement("div");


    item.classList.add("result-item");


    item.innerHTML =
      "<strong>" +
      result.name +
      "</strong><br>" +

      "Score: " +
      result.score +
      "/" +
      result.total +

      "<br><small>" +

      result.date +

      "</small>";


    resultsList.appendChild(item);

  });

}


/* PLAY AGAIN */

restartBtn.onclick = function () {

  resultBox.style.display = "none";

  startScreen.style.display = "block";


  userNameInput.value = "";


  currentQuestion = 0;

  score = 0;


  progressBar.style.width = "0%";

};
