const questions = [

  // ================= HTML =================

  {
    question: "1. What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language",
      "Home Text Markup Language"
    ],
    correct: 0
  },

  {
    question: "2. Which HTML tag is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1
  },

  {
    question: "3. Which HTML tag is used for the largest heading?",
    answers: ["<h6>", "<heading>", "<h1>", "<head>"],
    correct: 2
  },

  {
    question: "4. Which tag is used to insert an image?",
    answers: ["<image>", "<img>", "<picture>", "<src>"],
    correct: 1
  },

  {
    question: "5. Which attribute provides alternative text for an image?",
    answers: ["title", "alt", "src", "href"],
    correct: 1
  },

  {
    question: "6. Which HTML tag is used to create a paragraph?",
    answers: ["<para>", "<p>", "<paragraph>", "<text>"],
    correct: 1
  },

  {
    question: "7. Which tag is used to create an unordered list?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1
  },

  {
    question: "8. Which tag is used for a line break?",
    answers: ["<break>", "<br>", "<lb>", "<hr>"],
    correct: 1
  },

  {
    question: "9. Which HTML section contains metadata?",
    answers: ["<body>", "<footer>", "<head>", "<main>"],
    correct: 2
  },

  {
    question: "10. Which attribute is used to give an element a unique identifier?",
    answers: ["class", "name", "id", "style"],
    correct: 2
  },


  // ================= CSS =================

  {
    question: "11. What does CSS stand for?",
    answers: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets"
    ],
    correct: 1
  },

  {
    question: "12. Which CSS property changes text color?",
    answers: ["font-color", "text-color", "color", "background-color"],
    correct: 2
  },

  {
    question: "13. Which CSS property changes the background color?",
    answers: ["color", "background-color", "bgcolor", "background"],
    correct: 1
  },

  {
    question: "14. Which symbol is used for a CSS class selector?",
    answers: [".", "#", "*", "@"],
    correct: 0
  },

  {
    question: "15. Which symbol is used for an ID selector in CSS?",
    answers: [".", "#", "*", "&"],
    correct: 1
  },

  {
    question: "16. Which property is used to make text bold?",
    answers: ["font-style", "font-weight", "text-bold", "font-size"],
    correct: 1
  },

  {
    question: "17. Which CSS property controls the size of text?",
    answers: ["font-size", "text-size", "size", "font-weight"],
    correct: 0
  },

  {
    question: "18. Which property is used to add space inside an element?",
    answers: ["margin", "padding", "border", "spacing"],
    correct: 1
  },

  {
    question: "19. Which property is used to add space outside an element?",
    answers: ["padding", "margin", "border", "gap"],
    correct: 1
  },

  {
    question: "20. Which CSS layout system is commonly used for responsive layouts?",
    answers: ["Flexbox", "HTML", "Python", "SQL"],
    correct: 0
  },


  // ================= JAVASCRIPT =================

  {
    question: "21. JavaScript is mainly used to make websites?",
    answers: ["Static", "Interactive", "Offline only", "Printed"],
    correct: 1
  },

  {
    question: "22. Which keyword is used to declare a variable in JavaScript?",
    answers: ["var", "int", "string", "define"],
    correct: 0
  },

  {
    question: "23. Which keyword creates a constant in JavaScript?",
    answers: ["let", "var", "const", "static"],
    correct: 2
  },

  {
    question: "24. Which function is used to display a message in the console?",
    answers: ["print()", "console.log()", "display()", "echo()"],
    correct: 1
  },

  {
    question: "25. Which operator checks both value and data type?",
    answers: ["==", "=", "===", "!="],
    correct: 2
  },

  {
    question: "26. Which method converts JSON text into a JavaScript object?",
    answers: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
    correct: 1
  },

  {
    question: "27. Which event occurs when a user clicks an element?",
    answers: ["onchange", "onclick", "onload", "onsubmit"],
    correct: 1
  },

  {
    question: "28. Which keyword is used to declare a block-scoped variable?",
    answers: ["var", "let", "int", "define"],
    correct: 1
  },

  {
    question: "29. What does DOM stand for?",
    answers: [
      "Document Object Model",
      "Data Object Model",
      "Digital Output Method",
      "Document Order Method"
    ],
    correct: 0
  },

  {
    question: "30. Which method selects an element using its ID?",
    answers: [
      "getElementById()",
      "getElementByClass()",
      "selectElement()",
      "findElement()"
    ],
    correct: 0
  },


  // ================= PYTHON =================

  {
    question: "31. Which keyword is used to define a function in Python?",
    answers: ["function", "func", "def", "define"],
    correct: 2
  },

  {
    question: "32. Which function is used to display output in Python?",
    answers: ["console.log()", "echo()", "print()", "display()"],
    correct: 2
  },

  {
    question: "33. Which symbol is used for a comment in Python?",
    answers: ["//", "#", "/*", "--"],
    correct: 1
  },

  {
    question: "34. Which data type stores True or False?",
    answers: ["int", "str", "bool", "float"],
    correct: 2
  },

  {
    question: "35. Which brackets are used for a Python list?",
    answers: ["()", "{}", "[]", "<>"],
    correct: 2
  },

  {
    question: "36. Which keyword is used for a loop over a sequence?",
    answers: ["while", "for", "loop", "repeat"],
    correct: 1
  },

  {
    question: "37. What is the correct file extension for Python?",
    answers: [".java", ".py", ".js", ".html"],
    correct: 1
  },

  {
    question: "38. Which function is used to get user input in Python?",
    answers: ["get()", "input()", "read()", "scan()"],
    correct: 1
  },

  {
    question: "39. Which operator is used for exponentiation in Python?",
    answers: ["^", "**", "//", "%%"],
    correct: 1
  },

  {
    question: "40. Which keyword is used to handle exceptions?",
    answers: ["catch", "try", "error", "handle"],
    correct: 1
  },


  // ================= AI / ML =================

  {
    question: "41. What does AI stand for?",
    answers: [
      "Artificial Intelligence",
      "Automatic Intelligence",
      "Advanced Internet",
      "Artificial Integration"
    ],
    correct: 0
  },

  {
    question: "42. What does ML stand for?",
    answers: [
      "Machine Learning",
      "Manual Learning",
      "Model Language",
      "Machine Logic"
    ],
    correct: 0
  },

  {
    question: "43. Which is a type of Machine Learning?",
    answers: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Reinforcement Learning",
      "All of these"
    ],
    correct: 3
  },

  {
    question: "44. In supervised learning, the training data is usually?",
    answers: [
      "Labeled",
      "Always empty",
      "Unstructured only",
      "Without input"
    ],
    correct: 0
  },

  {
    question: "45. Which algorithm is commonly used for classification?",
    answers: [
      "Linear Regression",
      "Logistic Regression",
      "Sorting",
      "HTML"
    ],
    correct: 1
  },

  {
    question: "46. Which algorithm is commonly used for predicting continuous values?",
    answers: [
      "Linear Regression",
      "K-Means",
      "HTML",
      "Decision Tree only"
    ],
    correct: 0
  },

  {
    question: "47. What is a dataset?",
    answers: [
      "A collection of data",
      "A programming language",
      "A web browser",
      "A computer virus"
    ],
    correct: 0
  },

  {
    question: "48. What does CNN commonly stand for in Deep Learning?",
    answers: [
      "Computer Neural Network",
      "Convolutional Neural Network",
      "Central Network Node",
      "Common Neural Node"
    ],
    correct: 1
  },

  {
    question: "49. What is overfitting in Machine Learning?",
    answers: [
      "Model performs well on training data but poorly on new data",
      "Model never learns",
      "Computer shuts down",
      "Data is deleted"
    ],
    correct: 0
  },

  {
    question: "50. Which Python library is widely used for Machine Learning?",
    answers: [
      "scikit-learn",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    correct: 0
  }

];
