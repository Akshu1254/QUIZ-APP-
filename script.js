// ================================
// FIREBASE IMPORTS
// ================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


// ================================
// FIREBASE CONFIGURATION
// ================================

const firebaseConfig = {
  apiKey: "AIzaSyDNMtxRnq2Hll8ggtVqri2M8WGezifZ4Kk",
  authDomain: "quiz-master-5c85b.firebaseapp.com",
  projectId: "quiz-master-5c85b",
  storageBucket: "quiz-master-5c85b.firebasestorage.app",
  messagingSenderId: "91642115736",
  appId: "1:91642115736:web:0cac62878f9da6f45cc2ed",
  measurementId: "G-ZKRT9Y9R0X"
};


// ================================
// INITIALIZE FIREBASE
// ================================

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// ================================
// QUIZ QUESTIONS
// ================================

const questions = [

  {
    question: "What is HTML?",
    answers: [
      "Programming Language",
      "Markup Language",
      "Database"
    ],
    correct: 1
  },

  {
    question: "What is CSS used for?",
    answers: [
      "Styling websites",
      "Database management",
      "Creating hardware"
    ],
    correct: 0
  },

  {
    question: "What is JavaScript?",
    answers: [
      "A programming language",
      "A database",
      "An operating system"
    ],
    correct: 0
  },

  {
    question: "Which HTML tag is used for the largest heading?",
    answers: [
      "<h6>",
      "<heading>",
      "<h1>"
    ],
    correct: 2
  },

  {
    question: "Which symbol is used for an ID selector in CSS?",
    answers: [
      ".",
      "#",
      "*"
    ],
    correct: 1
  }

];


// ================================
// VARIABLES
// ================================

let currentQuestion = 0;
let score = 0;
let userName = "";
let answered = false;


// ================================
// HTML ELEMENTS
// ================================

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultBox = document.getElementById("resultBox");

const userNameInput = document.getElementById("userName");
const displayName = document.getElementById("displayName");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");

const scoreEl = document.getElementById("score");
const scoreLive = document.getElementById("scoreLive");

const questionNumber = document.getElementById("questionNumber");

const progressBar = document.getElementById("progressBar");

const messageEl = document.getElementById("message");
const nameError = document.getElementById("nameError");

const saveStatus = document.getElementById("saveStatus");

const resultsList = document.getElementById("resultsList");


// ================================
// START QUIZ
// ================================

startBtn.addEventListener("click", () => {

  userName = userNameInput.value.trim();

  if (userName === "") {

    nameError.innerText = "⚠️ Please enter your name!";

    return;
  }

  nameError.innerText = "";

  displayName.innerText = userName;

  startScreen.style.display = "none";

  quizScreen.style.display = "block";

  currentQuestion = 0;
  score = 0;

  loadQuestion();

});


// ================================
// LOAD QUESTION
// ================================

function loadQuestion() {

  answered = false;

  nextBtn.style.display = "none";

  const q = questions[currentQuestion];

  questionEl.innerText = q.question;

  answersEl.innerHTML = "";


  // Question Number

  questionNumber.innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;


  // Live Score

  scoreLive.innerText =
    `Score: ${score}`;


  // Progress Bar

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = progress + "%";


  // Create Answer Buttons

  q.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.innerText = answer;

    button.classList.add("answer-btn");

    button.addEventListener("click", () => {

      checkAnswer(index, button);

    });

    answersEl.appendChild(button);

  });

}


// ================================
// CHECK ANSWER
// ================================

function checkAnswer(selectedIndex, selectedButton) {

  if (answered) return;

  answered = true;

  const correctIndex =
    questions[currentQuestion].correct;

  const buttons =
    answersEl.querySelectorAll("button");


  buttons.forEach((button, index) => {

    button.disabled = true;

    if (index === correctIndex) {

      button.classList.add("correct");

    }

  });


  if (selectedIndex === correctIndex) {

    score++;

    scoreLive.innerText =
      `Score: ${score}`;

  } else {

    selectedButton.classList.add("wrong");

  }


  nextBtn.style.display = "block";

}


// ================================
// NEXT QUESTION
// ================================

nextBtn.addEventListener("click", () => {

  currentQuestion++;


  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showResult();

  }

});


// ================================
// SHOW RESULT
// ================================

async function showResult() {

  quizScreen.style.display = "none";

  resultBox.style.display = "block";


  scoreEl.innerText =
    `Your Score: ${score} / ${questions.length}`;


  const percentage =
    (score / questions.length) * 100;


  if (percentage === 100) {

    messageEl.innerText =
      "🏆 Perfect! Amazing performance!";

  } else if (percentage >= 60) {

    messageEl.innerText =
      "👏 Great job! Keep learning!";

  } else {

    messageEl.innerText =
      "💪 Keep practicing and try again!";

  }


  // Save result to Firebase

  saveStatus.innerText =
    "Saving your result... ⏳";


  try {

    await addDoc(collection(db, "quizResults"), {

      name: userName,

      score: score,

      totalQuestions: questions.length,

      percentage: percentage,

      timestamp: serverTimestamp()

    });


    saveStatus.innerText =
      "✅ Your result has been saved!";


    loadRecentResults();

  }

  catch (error) {

    console.error("Firebase Error:", error);

    saveStatus.innerText =
      "❌ Result could not be saved.";

  }

}


// ================================
// LOAD RECENT RESULTS
// ================================

async function loadRecentResults() {

  resultsList.innerHTML =
    "Loading results...";


  try {

    const resultsQuery = query(

      collection(db, "quizResults"),

      orderBy("timestamp", "desc"),

      limit(10)

    );


    const querySnapshot =
      await getDocs(resultsQuery);


    resultsList.innerHTML = "";


    querySnapshot.forEach((doc) => {

      const data = doc.data();


      const resultItem =
        document.createElement("div");


      resultItem.classList.add("result-item");


      resultItem.innerHTML = `

        <strong>${data.name}</strong>

        <span>
          ${data.score} / ${data.totalQuestions}
        </span>

      `;


      resultsList.appendChild(resultItem);

    });


    if (querySnapshot.empty) {

      resultsList.innerHTML =
        "No results yet.";

    }

  }

  catch (error) {

    console.error(error);

    resultsList.innerHTML =
      "Could not load results.";

  }

}


// ================================
// RESTART QUIZ
// ================================

restartBtn.addEventListener("click", () => {

  currentQuestion = 0;

  score = 0;

  userNameInput.value = "";

  resultBox.style.display = "none";

  quizScreen.style.display = "none";

  startScreen.style.display = "block";

});
