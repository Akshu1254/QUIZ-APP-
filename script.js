// ======================================================
// FIREBASE IMPORTS
// ======================================================

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


// ======================================================
// FIREBASE CONFIG
// ======================================================

const firebaseConfig = {
    apiKey: "AIzaSyDNMtxRnq2Hll8ggtVqri2M8WGezifZ4Kk",
    authDomain: "quiz-master-5c85b.firebaseapp.com",
    projectId: "quiz-master-5c85b",
    storageBucket: "quiz-master-5c85b.firebasestorage.app",
    messagingSenderId: "91642115736",
    appId: "1:91642115736:web:0cac62878f9da6f45cc2ed",
    measurementId: "G-ZKRT9Y9R0X"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ======================================================
// DOM ELEMENTS
// ======================================================

const startScreen = document.getElementById("startScreen");
const quizScreen = document.getElementById("quizScreen");
const resultBox = document.getElementById("resultBox");

const userNameInput = document.getElementById("userName");
const displayName = document.getElementById("displayName");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const timerElement = document.getElementById("timer");
const questionNumberElement = document.getElementById("questionNumber");
const progressBar = document.getElementById("progressBar");

const scoreLive = document.getElementById("scoreLive");
const correctLive = document.getElementById("correctLive");
const wrongLive = document.getElementById("wrongLive");
const answeredLive = document.getElementById("answeredLive");

const totalQuestionsElement =
    document.getElementById("totalQuestions");

const finalCorrect =
    document.getElementById("finalCorrect");

const finalWrong =
    document.getElementById("finalWrong");

const finalPercentage =
    document.getElementById("finalPercentage");

const performanceLevel =
    document.getElementById("performanceLevel");

const predictedScore =
    document.getElementById("predictedScore");

const weakTopic =
    document.getElementById("weakTopic");

const recommendation =
    document.getElementById("recommendation");

const aiAnalysis =
    document.getElementById("aiAnalysis");

const saveStatus =
    document.getElementById("saveStatus");

const resultsList =
    document.getElementById("resultsList");

const leaderboard =
    document.getElementById("leaderboard");

const nameError =
    document.getElementById("nameError");


// ======================================================
// QUIZ VARIABLES
// ======================================================

let currentQuestion = 0;

let score = 0;

let userName = "";

let timer;

let timeLeft = 15;

let answered = false;

let totalTimeTaken = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let answeredQuestions = 0;


// ======================================================
// TOPIC STATISTICS
// ======================================================

let topicStats = {
    "HTML": {
        correct: 0,
        total: 0
    },

    "CSS": {
        correct: 0,
        total: 0
    },

    "JavaScript": {
        correct: 0,
        total: 0
    },

    "Python": {
        correct: 0,
        total: 0
    },

    "AI/ML": {
        correct: 0,
        total: 0
    }
};


// ======================================================
// QUESTIONS
// ======================================================

let questions = [

    // ================= HTML =================

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0,
        topic: "HTML"
    },

    {
        question: "Which tag is used for the largest heading?",
        answers: [
            "<h6>",
            "<h1>",
            "<heading>",
            "<head>"
        ],
        correct: 1,
        topic: "HTML"
    },

    {
        question: "Which tag is used to create a paragraph?",
        answers: [
            "<p>",
            "<para>",
            "<paragraph>",
            "<text>"
        ],
        correct: 0,
        topic: "HTML"
    },

    {
        question: "Which tag is used to create a hyperlink?",
        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        correct: 1,
        topic: "HTML"
    },

    {
        question: "Which attribute specifies the image path?",
        answers: [
            "href",
            "src",
            "path",
            "link"
        ],
        correct: 1,
        topic: "HTML"
    },

    {
        question: "Which HTML tag is used to create a table?",
        answers: [
            "<table>",
            "<tab>",
            "<tr>",
            "<data>"
        ],
        correct: 0,
        topic: "HTML"
    },

    {
        question: "Which tag creates a line break?",
        answers: [
            "<break>",
            "<lb>",
            "<br>",
            "<line>"
        ],
        correct: 2,
        topic: "HTML"
    },

    {
        question: "Which tag is used for an unordered list?",
        answers: [
            "<ol>",
            "<ul>",
            "<list>",
            "<li>"
        ],
        correct: 1,
        topic: "HTML"
    },

    {
        question: "Which tag is used to create a form?",
        answers: [
            "<form>",
            "<input>",
            "<field>",
            "<data>"
        ],
        correct: 0,
        topic: "HTML"
    },

    {
        question: "Which HTML element is used to display an image?",
        answers: [
            "<image>",
            "<img>",
            "<picture>",
            "<src>"
        ],
        correct: 1,
        topic: "HTML"
    },


    // ================= CSS =================

    {
        question: "What does CSS stand for?",
        answers: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 0,
        topic: "CSS"
    },

    {
        question: "Which property changes text color?",
        answers: [
            "font-color",
            "text-color",
            "color",
            "foreground"
        ],
        correct: 2,
        topic: "CSS"
    },

    {
        question: "Which property changes the background color?",
        answers: [
            "background-color",
            "bgcolor",
            "background",
            "color-background"
        ],
        correct: 0,
        topic: "CSS"
    },

    {
        question: "Which property changes font size?",
        answers: [
            "font-style",
            "font-size",
            "text-size",
            "size"
        ],
        correct: 1,
        topic: "CSS"
    },

    {
        question: "Which CSS property makes text bold?",
        answers: [
            "font-weight",
            "font-bold",
            "text-bold",
            "bold"
        ],
        correct: 0,
        topic: "CSS"
    },

    {
        question: "Which symbol represents a class selector?",
        answers: [
            "#",
            ".",
            "@",
            "$"
        ],
        correct: 1,
        topic: "CSS"
    },

    {
        question: "Which symbol represents an ID selector?",
        answers: [
            ".",
            "#",
            "@",
            "&"
        ],
        correct: 1,
        topic: "CSS"
    },

    {
        question: "Which CSS property controls space inside an element?",
        answers: [
            "margin",
            "padding",
            "spacing",
            "inside-space"
        ],
        correct: 1,
        topic: "CSS"
    },

    {
        question: "Which CSS property controls space outside an element?",
        answers: [
            "padding",
            "margin",
            "border",
            "space"
        ],
        correct: 1,
        topic: "CSS"
    },

    {
        question: "Which display value is commonly used for flexible layouts?",
        answers: [
            "block",
            "inline",
            "flex",
            "static"
        ],
        correct: 2,
        topic: "CSS"
    },


    // ================= JAVASCRIPT =================

    {
        question: "JavaScript is mainly used to make web pages:",
        answers: [
            "Static",
            "Interactive",
            "Only colorful",
            "Only secure"
        ],
        correct: 1,
        topic: "JavaScript"
    },

    {
        question: "Which keyword declares a variable that can be reassigned?",
        answers: [
            "let",
            "constant",
            "define",
            "variable"
        ],
        correct: 0,
        topic: "JavaScript"
    },

    {
        question: "Which keyword declares a constant?",
        answers: [
            "let",
            "var",
            "const",
            "constant"
        ],
        correct: 2,
        topic: "JavaScript"
    },

    {
        question: "Which symbol is used for a single-line comment?",
        answers: [
            "//",
            "/*",
            "#",
            "<!--"
        ],
        correct: 0,
        topic: "JavaScript"
    },

    {
        question: "Which function prints something to the browser console?",
        answers: [
            "print()",
            "console.log()",
            "display()",
            "writeConsole()"
        ],
        correct: 1,
        topic: "JavaScript"
    },

    {
        question: "Which method adds an element to the end of an array?",
        answers: [
            "push()",
            "add()",
            "append()",
            "insert()"
        ],
        correct: 0,
        topic: "JavaScript"
    },

    {
        question: "Which operator checks strict equality?",
        answers: [
            "=",
            "==",
            "===",
            "!="
        ],
        correct: 2,
        topic: "JavaScript"
    },

    {
        question: "Which keyword is used to define a function?",
        answers: [
            "function",
            "def",
            "fun",
            "method"
        ],
        correct: 0,
        topic: "JavaScript"
    },

    {
        question: "Which object represents the webpage document?",
        answers: [
            "WINDOW",
            "DOCUMENT",
            "PAGE",
            "HTML"
        ],
        correct: 1,
        topic: "JavaScript"
    },

    {
        question: "Which method selects an element by its ID?",
        answers: [
            "getElementById()",
            "getById()",
            "selectId()",
            "findId()"
        ],
        correct: 0,
        topic: "JavaScript"
    },


    // ================= PYTHON =================

    {
        question: "Python is a:",
        answers: [
            "Programming language",
            "Database",
            "Operating system",
            "Web browser"
        ],
        correct: 0,
        topic: "Python"
    },

    {
        question: "Which symbol is used for comments in Python?",
        answers: [
            "//",
            "#",
            "/*",
            "--"
        ],
        correct: 1,
        topic: "Python"
    },

    {
        question: "Which function is used to display output?",
        answers: [
            "display()",
            "show()",
            "print()",
            "output()"
        ],
        correct: 2,
        topic: "Python"
    },

    {
        question: "Which data type stores True or False?",
        answers: [
            "int",
            "bool",
            "str",
            "float"
        ],
        correct: 1,
        topic: "Python"
    },

    {
        question: "Which symbol is used to create a list?",
        answers: [
            "()",
            "{}",
            "[]",
            "<>"
        ],
        correct: 2,
        topic: "Python"
    },

    {
        question: "Which keyword defines a function in Python?",
        answers: [
            "function",
            "def",
            "fun",
            "define"
        ],
        correct: 1,
        topic: "Python"
    },

    {
        question: "Which keyword is used to create a class?",
        answers: [
            "class",
            "ClassName",
            "object",
            "struct"
        ],
        correct: 0,
        topic: "Python"
    },

    {
        question: "Which function returns the length of a list?",
        answers: [
            "length()",
            "size()",
            "len()",
            "count()"
        ],
        correct: 2,
        topic: "Python"
    },

    {
        question: "Which data type stores key-value pairs?",
        answers: [
            "List",
            "Tuple",
            "Dictionary",
            "Set"
        ],
        correct: 2,
        topic: "Python"
    },

    {
        question: "Which keyword is used for inheritance-related parent access?",
        answers: [
            "parent",
            "super()",
            "base",
            "inherit"
        ],
        correct: 1,
        topic: "Python"
    },


    // ================= AI / ML =================

    {
        question: "What does AI stand for?",
        answers: [
            "Artificial Intelligence",
            "Automatic Information",
            "Advanced Internet",
            "Artificial Internet"
        ],
        correct: 0,
        topic: "AI/ML"
    },

    {
        question: "What does ML stand for?",
        answers: [
            "Machine Learning",
            "Machine Logic",
            "Model Learning",
            "Multiple Learning"
        ],
        correct: 0,
        topic: "AI/ML"
    },

    {
        question: "Which is a type of machine learning?",
        answers: [
            "Supervised Learning",
            "Manual Learning",
            "Static Learning",
            "Fixed Learning"
        ],
        correct: 0,
        topic: "AI/ML"
    },

    {
        question: "Which learning uses labelled data?",
        answers: [
            "Unsupervised Learning",
            "Supervised Learning",
            "Random Learning",
            "Manual Learning"
        ],
        correct: 1,
        topic: "AI/ML"
    },

    {
        question: "Which learning generally works with unlabelled data?",
        answers: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Teacher Learning",
            "Guided Learning"
        ],
        correct: 1,
        topic: "AI/ML"
    },

    {
        question: "Which algorithm can be used for classification?",
        answers: [
            "Decision Tree",
            "HTML",
            "CSS",
            "SQL"
        ],
        correct: 0,
        topic: "AI/ML"
    },

    {
        question: "Which library is commonly used for machine learning in Python?",
        answers: [
            "Scikit-learn",
            "HTML",
            "Bootstrap",
            "Firebase"
        ],
        correct: 0,
        topic: "AI/ML"
    },

    {
        question: "What is a feature in machine learning?",
        answers: [
            "Input variable",
            "Final answer only",
            "Error message",
            "Program name"
        ],
        correct: 0,
        topic: "AI/ML"
    },

    {
        question: "What is the purpose of training data?",
        answers: [
            "To train a machine learning model",
            "To design CSS",
            "To create HTML",
            "To store passwords"
        ],
        correct: 0,
        topic: "AI/ML"
    },

    {
        question: "Which metric is commonly used to evaluate classification?",
        answers: [
            "Accuracy",
            "Color",
            "Font size",
            "Padding"
        ],
        correct: 0,
        topic: "AI/ML"
    }

];


// ======================================================
// SHUFFLE QUESTIONS
// ======================================================

function shuffleQuestions(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
}


// ======================================================
// RESET STATISTICS
// ======================================================

function resetStatistics() {

    score = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    answeredQuestions = 0;

    totalTimeTaken = 0;

    currentQuestion = 0;

    topicStats = {
        "HTML": {
            correct: 0,
            total: 0
        },

        "CSS": {
            correct: 0,
            total: 0
        },

        "JavaScript": {
            correct: 0,
            total: 0
        },

        "Python": {
            correct: 0,
            total: 0
        },

        "AI/ML": {
            correct: 0,
            total: 0
        }
    };

    updateLiveStats();
}


// ======================================================
// LIVE STATS
// ======================================================

function updateLiveStats() {

    scoreLive.textContent = score;

    correctLive.textContent = correctAnswers;

    wrongLive.textContent = wrongAnswers;

    answeredLive.textContent = answeredQuestions;
}


// ======================================================
// START QUIZ
// ======================================================

startBtn.addEventListener("click", startQuiz);


function startQuiz() {

    userName = userNameInput.value.trim();

    if (userName === "") {

        nameError.textContent = "Please enter your name.";

        return;
    }

    nameError.textContent = "";

    resetStatistics();

    shuffleQuestions(questions);

    startScreen.classList.remove("active");

    quizScreen.classList.add("active");

    displayName.textContent = userName;

    showQuestion();
}


// ======================================================
// SHOW QUESTION
// ======================================================

function showQuestion() {

    clearInterval(timer);

    answered = false;

    nextBtn.disabled = true;

    timeLeft = 15;

    timerElement.textContent = timeLeft;

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumberElement.textContent =
        `${currentQuestion + 1} / ${questions.length}`;

    progressBar.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersElement.innerHTML = "";

    question.answers.forEach((answer, index) => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = answer;

        button.addEventListener("click", () => {

            checkAnswer(index, button);

        });

        answersElement.appendChild(button);
    });

    startTimer();
}


// ======================================================
// TIMER
// ======================================================

function startTimer() {

    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            handleTimeOut();
        }

    }, 1000);
}


// ======================================================
// TIME OUT
// ======================================================

function handleTimeOut() {

    if (answered) return;

    answered = true;

    wrongAnswers++;

    answeredQuestions++;

    const topic = questions[currentQuestion].topic;

    topicStats[topic].total++;

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {

        button.disabled = true;

    });

    buttons[questions[currentQuestion].correct]
        .classList.add("correct");

    nextBtn.disabled = false;

    updateLiveStats();
}


// ======================================================
// CHECK ANSWER
// ======================================================

function checkAnswer(selectedIndex, selectedButton) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const question = questions[currentQuestion];

    const timeUsed = 15 - timeLeft;

    totalTimeTaken += timeUsed;

    answeredQuestions++;

    topicStats[question.topic].total++;

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selectedIndex === question.correct) {

        score++;

        correctAnswers++;

        topicStats[question.topic].correct++;

        selectedButton.classList.add("correct");

    } else {

        wrongAnswers++;

        selectedButton.classList.add("wrong");

        buttons[question.correct]
            .classList.add("correct");
    }

    updateLiveStats();

    nextBtn.disabled = false;
}


// ======================================================
// NEXT QUESTION
// ======================================================

nextBtn.addEventListener("click", nextQuestion);


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        showResult();

        return;
    }

    showQuestion();
}


// ======================================================
// PERFORMANCE LEVEL
// ======================================================

function getPerformanceLevel(percentage) {

    if (percentage >= 80) {

        return "Excellent";

    } else if (percentage >= 60) {

        return "Good";

    } else if (percentage >= 40) {

        return "Average";

    } else {

        return "Needs Improvement";
    }
}


// ======================================================
// FIND WEAK TOPIC
// ======================================================

function findWeakTopic() {

    let weakestTopic = "HTML";

    let lowestPercentage = 101;

    for (const topic in topicStats) {

        const stats = topicStats[topic];

        if (stats.total === 0) {
            continue;
        }

        const percentage =
            (stats.correct / stats.total) * 100;

        if (percentage < lowestPercentage) {

            lowestPercentage = percentage;

            weakestTopic = topic;
        }
    }

    return weakestTopic;
}


// ======================================================
// RECOMMENDATION
// ======================================================

function getRecommendation(weakTopic, percentage) {

    if (percentage >= 80) {

        return `Excellent performance! Keep practicing ${weakTopic} and maintain your consistency.`;

    }

    if (percentage >= 60) {

        return `Good performance. Revise ${weakTopic} and practice more questions to improve further.`;

    }

    if (percentage >= 40) {

        return `Your performance is average. Focus especially on ${weakTopic} and revise its basic concepts.`;

    }

    return `Your performance needs improvement. Start with the basics of ${weakTopic} and practice regularly.`;
}


// ======================================================
// AI STYLE ANALYSIS
// ======================================================

function generateAIAnalysis(percentage) {

    const level =
        getPerformanceLevel(percentage);

    const weak =
        findWeakTopic();

    const recommendationText =
        getRecommendation(weak, percentage);


    performanceLevel.textContent = level;

    predictedScore.textContent =
        `${Math.round(percentage)}%`;

    weakTopic.textContent = weak;

    recommendation.textContent =
        recommendationText;

    aiAnalysis.style.display = "block";

    return {
        level,
        weak,
        recommendation: recommendationText
    };
}


// ======================================================
// SHOW RESULT
// ======================================================

async function showResult() {

    clearInterval(timer);

    quizScreen.classList.remove("active");

    resultBox.classList.add("active");


    const percentage =
        Math.round((score / questions.length) * 100);


    totalQuestionsElement.textContent =
        questions.length;

    finalCorrect.textContent =
        correctAnswers;

    finalWrong.textContent =
        wrongAnswers;

    finalPercentage.textContent =
        `${percentage}%`;


    const analysis =
        generateAIAnalysis(percentage);


    saveStatus.textContent =
        "Saving your result...";


    await saveResult(
        percentage,
        analysis
    );


    await loadRecentResults();

    await loadLeaderboard();
}


// ======================================================
// SAVE RESULT TO FIREBASE
// ======================================================

async function saveResult(percentage, analysis) {

    try {

        await addDoc(
            collection(db, "quizResults"),
            {

                name: userName,

                score: score,

                totalQuestions: questions.length,

                percentage: percentage,

                correctAnswers: correctAnswers,

                wrongAnswers: wrongAnswers,

                answeredQuestions: answeredQuestions,

                totalTimeTaken: totalTimeTaken,

                performanceLevel: analysis.level,

                predictedPerformance: percentage,

                weakTopic: analysis.weak,

                topicPerformance: {

                    HTML: topicStats["HTML"],

                    CSS: topicStats["CSS"],

                    JavaScript: topicStats["JavaScript"],

                    Python: topicStats["Python"],

                    AI_ML: topicStats["AI/ML"]
                },

                timestamp: serverTimestamp()
            }
        );


        saveStatus.textContent =
            "✅ Result saved successfully!";

    } catch (error) {

        console.error(
            "Firebase save error:",
            error
        );

        saveStatus.textContent =
            "⚠️ Result could not be saved.";
    }
}


// ======================================================
// LOAD RECENT RESULTS
// ======================================================

async function loadRecentResults() {

    try {

        const resultsQuery = query(
            collection(db, "quizResults"),
            orderBy("timestamp", "desc"),
            limit(10)
        );

        const snapshot =
            await getDocs(resultsQuery);


        if (snapshot.empty) {

            resultsList.innerHTML =
                "<p>No results yet.</p>";

            return;
        }


        resultsList.innerHTML = "";


        snapshot.forEach(doc => {

            const data = doc.data();

            const item =
                document.createElement("div");

            item.className = "result-item";

            item.innerHTML = `
                <div>
                    <strong>${escapeHTML(data.name || "Anonymous")}</strong>
                    <br>
                    <small>
                        Score: ${data.score || 0}/${data.totalQuestions || 50}
                    </small>
                </div>

                <strong>
                    ${data.percentage || 0}%
                </strong>
            `;

            resultsList.appendChild(item);
        });

    } catch (error) {

        console.error(
            "Recent results error:",
            error
        );

        resultsList.innerHTML =
            "<p>Unable to load recent results.</p>";
    }
}


// ======================================================
// LOAD LEADERBOARD
// ======================================================

async function loadLeaderboard() {

    try {

        const leaderboardQuery = query(
            collection(db, "quizResults"),
            orderBy("score", "desc"),
            limit(10)
        );

        const snapshot =
            await getDocs(leaderboardQuery);


        if (snapshot.empty) {

            leaderboard.innerHTML =
                "<p>No leaderboard data yet.</p>";

            return;
        }


        leaderboard.innerHTML = "";

        let rank = 1;


        snapshot.forEach(doc => {

            const data = doc.data();

            const item =
                document.createElement("div");

            item.className = "result-item";

            item.innerHTML = `
                <div>
                    <strong>
                        #${rank} ${escapeHTML(data.name || "Anonymous")}
                    </strong>

                    <br>

                    <small>
                        ${data.score || 0}/${data.totalQuestions || 50}
                    </small>
                </div>

                <strong>
                    ${data.percentage || 0}%
                </strong>
            `;

            leaderboard.appendChild(item);

            rank++;
        });

    } catch (error) {

        console.error(
            "Leaderboard error:",
            error
        );

        leaderboard.innerHTML =
            "<p>Unable to load leaderboard.</p>";
    }
}


// ======================================================
// BASIC HTML ESCAPE
// ======================================================

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


// ======================================================
// RESTART QUIZ
// ======================================================

restartBtn.addEventListener(
    "click",
    restartQuiz
);


function restartQuiz() {

    clearInterval(timer);

    resultBox.classList.remove("active");

    startScreen.classList.add("active");

    userNameInput.value = "";

    nameError.textContent = "";

    progressBar.style.width = "0%";

    resetStatistics();
}


// ======================================================
// ENTER KEY SUPPORT
// ======================================================

userNameInput.addEventListener(
    "keypress",
    function(event) {

        if (event.key === "Enter") {

            startQuiz();
        }
    }
);


// ======================================================
// INITIAL DATA LOAD
// ======================================================

loadRecentResults();

loadLeaderboard();
