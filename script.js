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
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()"
    ],
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
// ASSIGN TOPICS
// ========================================

questions.forEach((q, index) => {

  if (index < 10) {
    q.topic = "HTML";
  }

  else if (index < 20) {
    q.topic = "CSS";
  }

  else if (index < 30) {
    q.topic = "JavaScript";
  }

  else if (index < 40) {
    q.topic = "Python";
  }

  else {
    q.topic = "AI/ML";
  }

});



// ========================================
// VARIABLES
// ========================================

let currentQuestion = 0;
let score = 0;
let userName = "";
let answered = false;

let timeLeft = 15;
let timer = null;

let totalTimeTaken = 0;

let correctAnswers = 0;
let wrongAnswers = 0;
let answeredQuestions = 0;



// ========================================
// TOPIC STATISTICS
// ========================================

let topicStats = {
  HTML: {
    correct: 0,
    total: 0
  },

  CSS: {
    correct: 0,
    total: 0
  },

  JavaScript: {
    correct: 0,
    total: 0
  },

  Python: {
    correct: 0,
    total: 0
  },

  "AI/ML": {
    correct: 0,
    total: 0
  }
};



// ========================================
// GET HTML ELEMENTS
// ========================================

const startScreen =
  document.getElementById("startScreen");

const quizScreen =
  document.getElementById("quizScreen");

const resultBox =
  document.getElementById("resultBox");

const userNameInput =
  document.getElementById("userName");

const displayName =
  document.getElementById("displayName");

const startBtn =
  document.getElementById("startBtn");

const nextBtn =
  document.getElementById("nextBtn");

const restartBtn =
  document.getElementById("restartBtn");

const questionEl =
  document.getElementById("question");

const answersEl =
  document.getElementById("answers");

const scoreEl =
  document.getElementById("score");

const scoreLive =
  document.getElementById("scoreLive");

const questionNumber =
  document.getElementById("questionNumber");

const progressBar =
  document.getElementById("progressBar");

const messageEl =
  document.getElementById("message");

const nameError =
  document.getElementById("nameError");

const saveStatus =
  document.getElementById("saveStatus");

const resultsList =
  document.getElementById("resultsList");

const timeEl =
  document.getElementById("time");

const leaderboardEl =
  document.getElementById("leaderboard");



// New AI / ML elements

const correctLive =
  document.getElementById("correctLive");

const wrongLive =
  document.getElementById("wrongLive");

const answeredLive =
  document.getElementById("answeredLive");

const aiAnalysis =
  document.getElementById("aiAnalysis");

const performanceLevel =
  document.getElementById("performanceLevel");

const predictedScore =
  document.getElementById("predictedScore");

const weakTopic =
  document.getElementById("weakTopic");

const recommendation =
  document.getElementById("recommendation");

const totalQuestionsEl =
  document.getElementById("totalQuestions");

const finalCorrect =
  document.getElementById("finalCorrect");

const finalWrong =
  document.getElementById("finalWrong");

const finalPercentage =
  document.getElementById("finalPercentage");



// ========================================
// SHUFFLE QUESTIONS
// ========================================

function shuffleQuestions(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] =
      [array[j], array[i]];

  }

}



// ========================================
// RESET STATISTICS
// ========================================

function resetStatistics() {

  score = 0;

  correctAnswers = 0;

  wrongAnswers = 0;

  answeredQuestions = 0;

  totalTimeTaken = 0;

  topicStats = {

    HTML: {
      correct: 0,
      total: 0
    },

    CSS: {
      correct: 0,
      total: 0
    },

    JavaScript: {
      correct: 0,
      total: 0
    },

    Python: {
      correct: 0,
      total: 0
    },

    "AI/ML": {
      correct: 0,
      total: 0
    }

  };

}



// ========================================
// UPDATE LIVE STATISTICS
// ========================================

function updateLiveStats() {

  scoreLive.innerText =
    `Score: ${score}`;

  if (correctLive) {

    correctLive.innerText =
      `Correct: ${correctAnswers}`;

  }

  if (wrongLive) {

    wrongLive.innerText =
      `Wrong: ${wrongAnswers}`;

  }

  if (answeredLive) {

    answeredLive.innerText =
      `Answered: ${answeredQuestions}`;

  }

}



// ========================================
// START QUIZ
// ========================================

startBtn.addEventListener("click", () => {

  userName =
    userNameInput.value.trim();

  if (userName === "") {

    nameError.innerText =
      "⚠️ Please enter your name!";

    return;

  }

  nameError.innerText = "";

  displayName.innerText =
    userName;

  resetStatistics();

  currentQuestion = 0;

  answered = false;

  shuffleQuestions(questions);

  startScreen.style.display =
    "none";

  quizScreen.style.display =
    "block";

  resultBox.style.display =
    "none";

  if (aiAnalysis) {

    aiAnalysis.style.display =
      "none";

  }

  updateLiveStats();

  loadQuestion();

});



// ========================================
// TIMER
// ========================================

function startTimer() {

  clearInterval(timer);

  timeLeft = 15;

  timeEl.innerText =
    timeLeft;

  timer = setInterval(() => {

    timeLeft--;

    timeEl.innerText =
      timeLeft;

    if (timeLeft <= 0) {

      clearInterval(timer);

      if (!answered) {

        answered = true;

        wrongAnswers++;

        answeredQuestions++;

        const currentTopic =
          questions[currentQuestion].topic;

        topicStats[currentTopic].total++;

        updateLiveStats();

        showCorrectAnswer();

        nextBtn.style.display =
          "block";

      }

    }

  }, 1000);

}



// ========================================
// SHOW CORRECT ANSWER
// ========================================

function showCorrectAnswer() {

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

}



// ========================================
// LOAD QUESTION
// ========================================

function loadQuestion() {

  answered = false;

  nextBtn.style.display =
    "none";

  startTimer();

  const q =
    questions[currentQuestion];

  questionEl.innerText =
    q.question;

  answersEl.innerHTML =
    "";

  questionNumber.innerText =
    `Question ${currentQuestion + 1} of ${questions.length}`;

  updateLiveStats();

  const progress =
    ((currentQuestion + 1) /
      questions.length) * 100;

  progressBar.style.width =
    progress + "%";



  q.answers.forEach((answer, index) => {

    const button =
      document.createElement("button");

    button.innerText =
      answer;

    button.classList.add(
      "answer-btn"
    );

    button.addEventListener(
      "click",
      () => {

        checkAnswer(
          index,
          button
        );

      }
    );

    answersEl.appendChild(
      button
    );

  });

}



// ========================================
// CHECK ANSWER
// ========================================

function checkAnswer(
  selectedIndex,
  selectedButton
) {

  if (answered) return;

  answered = true;

  clearInterval(timer);

  // Calculate time used for this question
  const questionTimeUsed =
    15 - timeLeft;

  totalTimeTaken +=
    questionTimeUsed;

  answeredQuestions++;

  const currentQ =
    questions[currentQuestion];

  const correctIndex =
    currentQ.correct;

  const currentTopic =
    currentQ.topic;

  topicStats[currentTopic].total++;

  const buttons =
    answersEl.querySelectorAll("button");

  buttons.forEach(
    (button, index) => {

      button.disabled = true;

      if (index === correctIndex) {

        button.classList.add(
          "correct"
        );

      }

    }
  );



  if (
    selectedIndex ===
    correctIndex
  ) {

    score++;

    correctAnswers++;

    topicStats[currentTopic].correct++;

  }

  else {

    wrongAnswers++;

    selectedButton.classList.add(
      "wrong"
    );

  }



  updateLiveStats();

  nextBtn.style.display =
    "block";

}



// ========================================
// NEXT QUESTION
// ========================================

nextBtn.addEventListener(
  "click",
  () => {

    currentQuestion++;

    if (
      currentQuestion <
      questions.length
    ) {

      loadQuestion();

    }

    else {

      showResult();

    }

  }
);



// ========================================
// GET PERFORMANCE LEVEL
// ========================================

function getPerformanceLevel(
  percentage
) {

  if (percentage >= 90) {

    return "Excellent 🏆";

  }

  if (percentage >= 75) {

    return "Good 🟢";

  }

  if (percentage >= 50) {

    return "Average 🟡";

  }

  return "Needs Improvement 🔴";

}



// ========================================
// FIND WEAK TOPIC
// ========================================

function findWeakTopic() {

  let weakestTopic =
    "None";

  let lowestPercentage =
    101;

  for (
    const topic in topicStats
  ) {

    const data =
      topicStats[topic];

    if (data.total === 0) {

      continue;

    }

    const topicPercentage =
      (data.correct /
        data.total) * 100;

    if (
      topicPercentage <
      lowestPercentage
    ) {

      lowestPercentage =
        topicPercentage;

      weakestTopic =
        topic;

    }

  }

  return weakestTopic;

}



// ========================================
// GET RECOMMENDATION
// ========================================

function getRecommendation(
  weakTopic,
  percentage
) {

  if (
    percentage >= 90
  ) {

    return "Excellent performance! Keep practicing all topics and try advanced questions.";

  }

  if (
    weakTopic === "None"
  ) {

    return "Continue practicing regularly to improve your knowledge.";

  }

  if (
    percentage >= 75
  ) {

    return `Good performance. Focus more on ${weakTopic} to reach an excellent level.`;

  }

  if (
    percentage >= 50
  ) {

    return `You need more practice. Give extra attention to ${weakTopic}.`;

  }

  return `Your performance needs improvement. Start with ${weakTopic} basics and practice daily.`;

}



// ========================================
// AI PERFORMANCE ANALYSIS
// ========================================

function generateAIAnalysis(
  percentage
) {

  const level =
    getPerformanceLevel(
      percentage
    );

  const weak =
    findWeakTopic();

  const predicted =
    Math.min(
      100,
      Math.round(
        percentage +
        (percentage >= 75 ? 3 : 8)
      )
    );

  const advice =
    getRecommendation(
      weak,
      percentage
    );

  if (performanceLevel) {

    performanceLevel.innerText =
      level;

  }

  if (predictedScore) {

    predictedScore.innerText =
      `${predicted}%`;

  }

  if (weakTopic) {

    weakTopic.innerText =
      weak;

  }

  if (recommendation) {

    recommendation.innerText =
      advice;

  }

  if (aiAnalysis) {

    aiAnalysis.style.display =
      "block";

  }

}



// ========================================
// SHOW RESULT
// ========================================

async function showResult() {

  clearInterval(timer);

  quizScreen.style.display =
    "none";

  resultBox.style.display =
    "block";



  const percentage =
    Math.round(
      (score /
        questions.length) * 100
    );



  scoreEl.innerText =
    `Your Score: ${score} / ${questions.length}`;



  // ========================================
  // PERFORMANCE MESSAGE
  // ========================================

  if (percentage === 100) {

    messageEl.innerText =
      "🏆 Perfect! Amazing performance!";

  }

  else if (percentage >= 80) {

    messageEl.innerText =
      "🔥 Excellent! Great job!";

  }

  else if (percentage >= 60) {

    messageEl.innerText =
      "👏 Good job! Keep learning!";

  }

  else {

    messageEl.innerText =
      "💪 Keep practicing and try again!";

  }



  // ========================================
  // FINAL STATISTICS
  // ========================================

  if (totalQuestionsEl) {

    totalQuestionsEl.innerText =
      questions.length;

  }

  if (finalCorrect) {

    finalCorrect.innerText =
      correctAnswers;

  }

  if (finalWrong) {

    finalWrong.innerText =
      wrongAnswers;

  }

  if (finalPercentage) {

    finalPercentage.innerText =
      `${percentage}%`;

  }



  // ========================================
  // AI ANALYSIS
  // ========================================

  generateAIAnalysis(
    percentage
  );



  // ========================================
  // SAVE RESULT
  // ========================================

  saveStatus.innerText =
    "Saving your result... ⏳";



  try {

    const weak =
      findWeakTopic();

    const level =
      getPerformanceLevel(
        percentage
      );

    const predicted =
      Math.min(
        100,
        Math.round(
          percentage +
          (percentage >= 75 ? 3 : 8)
        )
      );



    await addDoc(
      collection(
        db,
        "quizResults"
      ),
      {

        name: userName,

        score: score,

        totalQuestions:
          questions.length,

        percentage:
          percentage,

        correctAnswers:
          correctAnswers,

        wrongAnswers:
          wrongAnswers,

        answeredQuestions:
          answeredQuestions,

        totalTimeTaken:
          totalTimeTaken,

        performanceLevel:
          level,

        predictedPerformance:
          predicted,

        weakTopic:
          weak,

        topicPerformance: {

          HTML:
            topicStats.HTML,

          CSS:
            topicStats.CSS,

          JavaScript:
            topicStats.JavaScript,

          Python:
            topicStats.Python,

          AI_ML:
            topicStats["AI/ML"]

        },

        timestamp:
          serverTimestamp()

      }
    );



    saveStatus.innerText =
      "✅ Your result has been saved!";



    await loadRecentResults();

    await loadLeaderboard();

  }

  catch (error) {

    console.error(
      "Firebase Error:",
      error
    );

    saveStatus.innerText =
      "❌ Result could not be saved.";

    loadRecentResults();

    loadLeaderboard();

  }

}



// ========================================
// LOAD RECENT RESULTS
// ========================================

async function loadRecentResults() {

  resultsList.innerHTML =
    "Loading results...";



  try {

    const resultsQuery =
      query(

        collection(
          db,
          "quizResults"
        ),

        orderBy(
          "timestamp",
          "desc"
        ),

        limit(10)

      );



    const querySnapshot =
      await getDocs(
        resultsQuery
      );



    resultsList.innerHTML =
      "";



    if (
      querySnapshot.empty
    ) {

      resultsList.innerHTML =
        "No results yet.";

      return;

    }



    querySnapshot.forEach(
      (doc) => {

        const data =
          doc.data();

        const resultItem =
          document.createElement(
            "div"
          );

        resultItem.classList.add(
          "result-item"
        );



        resultItem.innerHTML = `
          <strong>${data.name}</strong>
          <span>${data.score} / ${data.totalQuestions}</span>
        `;

        resultsList.appendChild(
          resultItem
        );

      }
    );

  }

  catch (error) {

    console.error(
      "Error loading results:",
      error
    );

    resultsList.innerHTML =
      "Could not load results.";

  }

}



// ========================================
// GLOBAL LEADERBOARD
// ========================================

async function loadLeaderboard() {

  leaderboardEl.innerHTML =
    "Loading leaderboard...";



  try {

    const leaderboardQuery =
      query(

        collection(
          db,
          "quizResults"
        ),

        orderBy(
          "score",
          "desc"
        ),

        limit(10)

      );



    const snapshot =
      await getDocs(
        leaderboardQuery
      );



    leaderboardEl.innerHTML =
      "";



    if (
      snapshot.empty
    ) {

      leaderboardEl.innerHTML =
        "No players yet.";

      return;

    }



    let rank = 1;



    snapshot.forEach(
      (doc) => {

        const data =
          doc.data();

        const item =
          document.createElement(
            "div"
          );

        item.classList.add(
          "leaderboard-item"
        );



        let medal = "";

        if (rank === 1) {

          medal = "🥇";

        }

        else if (rank === 2) {

          medal = "🥈";

        }

        else if (rank === 3) {

          medal = "🥉";

        }

        else {

          medal =
            `#${rank}`;

        }



        item.innerHTML = `

          <span>
            ${medal}
            <strong>${data.name}</strong>
          </span>

          <span>
            ${data.score}/${data.totalQuestions}
          </span>

        `;



        leaderboardEl.appendChild(
          item
        );

        rank++;

      }
    );

  }

  catch (error) {

    console.error(
      "Leaderboard Error:",
      error
    );

    leaderboardEl.innerHTML =
      "Could not load leaderboard.";

  }

}



// ========================================
// RESTART QUIZ
// ========================================

restartBtn.addEventListener(
  "click",
  () => {

    clearInterval(timer);

    currentQuestion = 0;

    answered = false;

    resetStatistics();

    userNameInput.value =
      "";

    displayName.innerText =
      "";

    scoreLive.innerText =
      "Score: 0";

    timeEl.innerText =
      "15";

    if (correctLive) {

      correctLive.innerText =
        "Correct: 0";

    }

    if (wrongLive) {

      wrongLive.innerText =
        "Wrong: 0";

    }

    if (answeredLive) {

      answeredLive.innerText =
        "Answered: 0";

    }

    if (aiAnalysis) {

      aiAnalysis.style.display =
        "none";

    }

    resultBox.style.display =
      "none";

    quizScreen.style.display =
      "none";

    startScreen.style.display =
      "block";

  }
);



// ========================================
// INITIAL LOAD
// ========================================

loadRecentResults();
loadLeaderboard();
