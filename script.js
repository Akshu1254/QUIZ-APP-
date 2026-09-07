// ========================================
// FIREBASE IMPORTS
// ========================================

import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  serverTimestamp
} from
  "https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js";


// ========================================
// FIREBASE CONFIGURATION
// ========================================

const firebaseConfig = {
  apiKey: "AIzaSyDNMtxRnq2Hll8ggtVqri2M8WGezifZ4Kk",
  authDomain: "quiz-master-5c85b.firebaseapp.com",
  projectId: "quiz-master-5c85b",
  storageBucket: "quiz-master-5c85b.firebasestorage.app",
  messagingSenderId: "91642115736",
  appId: "1:91642115736:web:0cac62878f9da6f45cc2ed",
  measurementId: "G-ZKRT9Y9R0X"
};


// ========================================
// INITIALIZE FIREBASE
// ========================================

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ========================================
// QUIZ QUESTIONS
// ========================================

const questions = [

  // ========== HTML ==========

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
    question: "Which HTML tag is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },

  {
    question: "Which HTML tag is used for the largest heading?",
    answers: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: 2
  },

  {
    question: "Which tag is used to insert an image?",
    answers: ["<image>", "<img>", "<picture>", "<src>"],
    correct: 1
  },

  {
    question: "Which attribute provides alternative text for an image?",
    answers: ["title", "alt", "src", "href"],
    correct: 1
  },

  {
    question: "Which HTML tag is used to create a paragraph?",
    answers: ["<para>", "<p>", "<paragraph>", "<text>"],
    correct: 1
  },

  {
    question: "Which tag is used to create an unordered list?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1
  },

  {
    question: "Which tag is used for a line break?",
    answers: ["<break>", "<br>", "<lb>", "<hr>"],
    correct: 1
  },

  {
    question: "Which HTML section contains metadata?",
    answers: ["<body>", "<footer>", "<head>", "<main>"],
    correct: 2
  },

  {
    question: "Which attribute gives an HTML element a unique identifier?",
    answers: ["class", "name", "id", "style"],
    correct: 2
  },


  // ========== CSS ==========

  {
    question: "What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets"
    ],
    correct: 1
  },

  {
    question: "Which CSS property changes text color?",
    answers: ["font-color", "text-color", "color", "background-color"],
    correct: 2
  },

  {
    question: "Which CSS property changes the background color?",
    answers: ["color", "background-color", "bgcolor", "background"],
    correct: 1
  },

  {
    question: "Which symbol is used for a CSS class selector?",
    answers: [".", "#", "*", "@"],
    correct: 0
  },

  {
    question: "Which symbol is used for an ID selector in CSS?",
    answers: [".", "#", "*", "&"],
    correct: 1
  },

  {
    question: "Which CSS property makes text bold?",
    answers: ["font-style", "font-weight", "text-bold", "font-size"],
    correct: 1
  },

  {
    question: "Which CSS property controls text size?",
    answers: ["font-size", "text-size", "size", "font-weight"],
    correct: 0
  },

  {
    question: "Which property adds space inside an element?",
    answers: ["margin", "padding", "border", "spacing"],
    correct: 1
  },

  {
    question: "Which property adds space outside an element?",
    answers: ["padding", "margin", "border", "gap"],
    correct: 1
  },

  {
    question: "Which CSS system is commonly used for flexible layouts?",
    answers: ["Flexbox", "HTML", "Python", "SQL"],
    correct: 0
  },


  // ========== JAVASCRIPT ==========

  {
    question: "JavaScript is mainly used to make websites?",
    answers: ["Static", "Interactive", "Offline only", "Printed"],
    correct: 1
  },

  {
    question: "Which keyword can declare a variable in JavaScript?",
    answers: ["var", "int", "string", "define"],
    correct: 0
  },

  {
    question: "Which keyword creates a constant in JavaScript?",
    answers: ["let", "var", "const", "static"],
    correct: 2
  },

  {
    question: "Which function displays a message in the browser console?",
    answers: ["print()", "console.log()", "display()", "echo()"],
    correct: 1
  },

  {
    question: "Which operator checks both value and data type?",
    answers: ["==", "=", "===", "!="],
    correct: 2
  },

  {
    question: "Which method converts JSON text into a JavaScript object?",
    answers: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    correct: 1
  },

  {
    question: "Which event occurs when a user clicks an element?",
    answers: ["onchange", "onclick", "onload", "onsubmit"],
    correct: 1
  },

  {
    question: "Which keyword creates a block-scoped variable?",
    answers: ["var", "let", "int", "define"],
    correct: 1
  },

  {
    question: "What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Digital Output Method",
      "Document Order Method"
    ],
    correct: 0
  },

  {
    question: "Which method selects an element using its ID?",
    answers: [
      "getElementById()",
      "getElementByClass()",
      "selectElement()",
      "findElement()"
    ],
    correct: 0
  },


  // ========== PYTHON ==========

  {
    question: "Which keyword is used to define a function in Python?",
    answers: ["function", "func", "def", "define"],
    correct: 2
  },

  {
    question: "Which function displays output in Python?",
    answers: ["console.log()", "echo()", "print()", "display()"],
    correct: 2
  },

  {
    question: "Which symbol is used for comments in Python?",
    answers: ["//", "#", "/*", "--"],
    correct: 1
  },

  {
    question: "Which data type stores True or False?",
    answers: ["int", "str", "bool", "float"],
    correct: 2
  },

  {
    question: "Which brackets are used for a Python list?",
    answers: ["()", "{}", "[]", "<>"],
    correct: 2
  },

  {
    question: "Which keyword is commonly used to loop over a sequence?",
    answers: ["while", "for", "loop", "repeat"],
    correct: 1
  },

  {
    question: "What is the file extension for Python files?",
    answers: [".java", ".py", ".js", ".html"],
    correct: 1
  },

  {
    question: "Which function gets user input in Python?",
    answers: ["get()", "input()", "read()", "scan()"],
    correct: 1
  },

  {
    question: "Which operator is used for exponentiation in Python?",
    answers: ["^", "**", "//", "%"],
    correct: 1
  },

  {
    question: "Which keyword is used to begin exception handling?",
    answers: ["catch", "try", "error", "handle"],
    correct: 1
  },


  // ========== AI / ML ==========

  {
    question: "What does AI stand for?",
    answers: [
      "Artificial Intelligence",
      "Automatic Intelligence",
      "Advanced Internet",
      "Artificial Integration"
    ],
    correct: 0
  },

  {
    question: "What does ML stand for?",
    answers: [
      "Machine Learning",
      "Manual Learning",
      "Model Language",
      "Machine Logic"
    ],
    correct: 0
  },

  {
    question: "Which is a type of Machine Learning?",
    answers: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "All of these"
    ],
    correct: 3
  },

  {
    question: "In supervised learning, training data is usually?",
    answers: [
      "Labeled",
      "Always empty",
      "Unstructured only",
      "Without input"
    ],
    correct: 0
  },

  {
    question: "Which algorithm is commonly used for classification?",
    answers: [
      "Linear Regression",
      "Logistic Regression",
      "Sorting",
      "HTML"
    ],
    correct: 1
  },

  {
    question: "Which algorithm predicts continuous values?",
    answers: [
      "Linear Regression",
      "K-Means",
      "HTML",
      "CSS"
    ],
    correct: 0
  },

  {
    question: "What is a dataset?",
    answers: [
      "A collection of data",
      "A programming language",
      "A web browser",
      "A computer virus"
    ],
    correct: 0
  },

  {
    question: "What does CNN stand for in Deep Learning?",
    answers: [
      "Computer Neural Network",
      "Convolutional Neural Network",
      "Central Network Node",
      "Common Neural Node"
    ],
    correct: 1
  },

  {
    question: "What is overfitting in Machine Learning?",
    answers: [
      "Model performs well on training data but poorly on new data",
      "Model never learns",
      "Computer shuts down",
      "Data is deleted"
    ],
    correct: 0
  },

  {
    question: "Which Python library is widely used for Machine Learning?",
    answers: [
      "scikit-learn",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    correct: 0
  }

];


// ========================================
// VARIABLES
// ========================================

let currentQuestion = 0;
let score = 0;
let userName = "";
let answered = false;


// ========================================
// GET HTML ELEMENTS
// ========================================

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


// ========================================
// START QUIZ
// ========================================

startBtn.addEventListener("click", () => {

  userName = userNameInput.value.trim();

  if (userName === "") {

    nameError.innerText = "⚠️ Please enter your name!";
    return;

  }

  nameError.innerText = "";

  displayName.innerText = userName;

  currentQuestion = 0;
  score = 0;

  startScreen.style.display = "none";
  quizScreen.style.display = "block";
  resultBox.style.display = "none";

  loadQuestion();

});


// ========================================
// LOAD QUESTION
// ========================================

function loadQuestion() {

  answered = false;

  nextBtn.style.display = "none";

  const q = questions[currentQuestion];

  questionEl.innerText = q.question;

  answersEl.innerHTML = "";

  questionNumber.innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  scoreLive.innerText =
    `Score: ${score}`;

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  progressBar.style.width = progress + "%";


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


// ========================================
// CHECK ANSWER
// ========================================

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


// ========================================
// NEXT QUESTION
// ========================================

nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < questions.length) {

    loadQuestion();

  } else {

    showResult();

  }

});


// ========================================
// SHOW RESULT
// ========================================

async function showResult() {

  quizScreen.style.display = "none";
  resultBox.style.display = "block";

  scoreEl.innerText =
    `Your Score: ${score} / ${questions.length}`;

  const percentage =
    Math.round((score / questions.length) * 100);


  if (percentage === 100) {

    messageEl.innerText =
      "🏆 Perfect! Amazing performance!";

  } else if (percentage >= 80) {

    messageEl.innerText =
      "🔥 Excellent! Great job!";

  } else if (percentage >= 60) {

    messageEl.innerText =
      "👏 Good job! Keep learning!";

  } else {

    messageEl.innerText =
      "💪 Keep practicing and try again!";

  }


  // SAVE RESULT TO FIREBASE

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


// ========================================
// LOAD RECENT RESULTS
// ========================================

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


    if (querySnapshot.empty) {

      resultsList.innerHTML =
        "No results yet.";

      return;

    }


    querySnapshot.forEach((doc) => {

      const data = doc.data();

      const resultItem =
        document.createElement("div");

      resultItem.classList.add("result-item");

      resultItem.innerHTML = `
        <strong>${data.name}</strong>
        <span>${data.score} / ${data.totalQuestions}</span>
      `;

      resultsList.appendChild(resultItem);

    });

  }

  catch (error) {

    console.error("Error loading results:", error);

    resultsList.innerHTML =
      "Could not load results.";

  }

}


// ========================================
// RESTART QUIZ
// ========================================

restartBtn.addEventListener("click", () => {

  currentQuestion = 0;
  score = 0;

  userNameInput.value = "";

  resultBox.style.display = "none";
  quizScreen.style.display = "none";
  startScreen.style.display = "block";

});
