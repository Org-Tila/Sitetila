let playerName = '';

function askAge() {
  const nameInput = document.getElementById('player-name').value.trim();
  if (nameInput) {
    playerName = nameInput;
    document.getElementById('name-section').style.display = 'none';
    document.getElementById('age-section').style.display = 'block';
    const askAgeText = document.getElementById('ask-age-text');
    askAgeText.textContent = `Olá, ${playerName}! Qual a sua idade?`;
    askAgeText.style.display = 'block'; // mostra o texto na escolha da idade
  } else {
    alert('Por favor, digite seu nome!');
  }
}

const ageSelectionDiv = document.getElementById("age-selection");
const gameAreaDiv = document.getElementById("game-area");
const questionContainer = document.getElementById("question-container");
const feedbackElement = document.getElementById("feedback");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const floatingAnimalImg = document.getElementById("floating-animal");
const endScreenDiv = document.getElementById("end-screen");
const finalScoreElement = document.getElementById("final-score");

let currentAgeRange = null;
let currentQuestionIndex = 0;
let questions = [];
let score = 0;
const totalQuestions = 5;

const animalImages = [
  "img/owl.png",
  "img/fox.png",
  "img/turtle.png",
  "img/rabbit.png",
  "img/squirrel.png"
];
let currentAnimalIndex = 0;

function changeAnimalImage() {
  if (!floatingAnimalImg) return;
  currentAnimalIndex = (currentAnimalIndex + 1) % animalImages.length;
  floatingAnimalImg.src = animalImages[currentAnimalIndex];
}

if (floatingAnimalImg) {
  setInterval(changeAnimalImage, 5000);
  changeAnimalImage();
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(minAge, maxAge) {
  currentAgeRange = { min: minAge, max: maxAge };
  ageSelectionDiv.style.display = "none";
  gameAreaDiv.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  questions = generateQuestions(minAge, maxAge, totalQuestions);
  totalQuestionsSpan.textContent = totalQuestions;
  document.getElementById('ask-age-text').style.display = 'none'; // esconde o texto quando começa o jogo
  loadQuestion();
}

function restartGame() {
  endScreenDiv.style.display = "none";
  ageSelectionDiv.style.display = "block";
  // Se quiser que a saudação reapareça ao reiniciar, descomente a linha abaixo:
  // document.getElementById('ask-age-text').style.display = 'block';
}

function generateQuestions(minAge, maxAge, numQuestions) {
  const generatedQuestions = [];
  for (let i = 0; i < numQuestions; i++) {
    const type = Math.random() < 0.5 ? "math" : "portuguese";
    const questionData = type === "math"
      ? generateMathQuestion(minAge, maxAge)
      : generatePortugueseQuestion(minAge, maxAge);
    generatedQuestions.push(questionData);
  }
  return shuffleArray(generatedQuestions);
}

function generateMathQuestion(minAge, maxAge) {
  let num1, num2, operation, correctAnswer, questionText;

  if (minAge >= 10) {
    num1 = getRandomNumber(10, 50);
    num2 = getRandomNumber(5, 20);
    operation = ["+", "-", "*"][getRandomNumber(0, 2)];
  } else if (minAge >= 8) {
    num1 = getRandomNumber(5, 30);
    num2 = getRandomNumber(2, 15);
    operation = ["+", "-"][getRandomNumber(0, 1)];
  } else {
    num1 = getRandomNumber(1, 15);
    num2 = getRandomNumber(1, 10);
    operation = "+";
  }

  if (operation === "+") {
    questionText = `Quanto é ${num1} + ${num2}?`;
    correctAnswer = num1 + num2;
  } else if (operation === "-") {
    if (num1 < num2) [num1, num2] = [num2, num1];
    questionText = `Quanto é ${num1} - ${num2}?`;
    correctAnswer = num1 - num2;
  } else {
    questionText = `Quanto é ${num1} x ${num2}?`;
    correctAnswer = num1 * num2;
  }

  return {
    type: "math",
    question: questionText,
    answer: correctAnswer.toString()
  };
}

function generatePortugueseQuestion(minAge, maxAge) {
  let questionsPool;

  if (minAge >= 10) {
    questionsPool = [
      { q: "Qual o plural de 'cidade'?", a: "cidades" },
      { q: "Qual o antônimo de 'difícil'?", a: "fácil" },
      { q: "Complete a frase: 'O avião ______ no céu azul.'", a: "voa", options: ["voa", "nada", "anda"] },
      { q: "Qual a palavra que significa o oposto de 'quente'?", a: "frio" },
      { q: "Qual o sinônimo de 'bonito'?", a: "belo", options: ["feio", "belo", "velho"] },
    ];
  } else if (minAge >= 8) {
    questionsPool = [
      { q: "Qual palavra rima com 'flor'?", a: "amor", options: ["mesa", "amor", "bola"] },
      { q: "Complete: O cachorro ______ um osso.", a: "comeu", options: ["dormiu", "comeu", "voou"] },
      { q: "Qual a última letra da palavra 'pipoca'?", a: "a" },
      { q: "Qual animal faz 'miau'?", a: "gato", options: ["cachorro", "gato", "vaca"] },
    ];
  } else {
    questionsPool = [
      { q: "Qual a primeira letra da palavra 'sol'?", a: "s" },
      { q: "Quantas sílabas tem a palavra 'bola'?", a: "2" },
      { q: "Qual o nome do animal que faz 'muu'?", a: "vaca", options: ["gato", "vaca", "pato"] },
    ];
  }

  const selectedQuestion = questionsPool[getRandomNumber(0, questionsPool.length - 1)];
  let finalQuestion = selectedQuestion.q;

  if (selectedQuestion.options) {
    finalQuestion += ` (Opções: ${selectedQuestion.options.join(", ")})`;
    return {
      type: "portuguese",
      question: finalQuestion,
      answer: selectedQuestion.a.toLowerCase(),
      options: selectedQuestion.options
    };
  }

  return {
    type: "portuguese",
    question: finalQuestion,
    answer: selectedQuestion.a.toLowerCase()
  };
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuestion() {
  if (currentQuestionIndex < totalQuestions) {
    const questionData = questions[currentQuestionIndex];
    questionContainer.innerHTML = "";

    const questionBox = document.createElement("div");
    questionBox.classList.add("question-box");

    const questionTextElement = document.createElement("p");
    questionTextElement.textContent = questionData.question;
    questionBox.appendChild(questionTextElement);

    let answerInput;
    if (questionData.options) {
      answerInput = document.createElement("select");

      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Selecione";
      defaultOption.value = "";
      answerInput.appendChild(defaultOption);

      questionData.options.forEach(option => {
        const opt = document.createElement("option");
        opt.textContent = option;
        opt.value = option.toLowerCase();
        answerInput.appendChild(opt);
      });
    } else {
      answerInput = document.createElement("input");
      answerInput.type = "text";
      answerInput.placeholder = "Digite sua resposta";
    }

    answerInput.id = "user-answer-input";
    questionBox.appendChild(answerInput);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Responder";
    submitButton.onclick = checkAnswer;
    questionBox.appendChild(submitButton);

    questionContainer.appendChild(questionBox);

    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    feedbackElement.textContent = "";
    feedbackElement.className = "feedback";
  } else {
    endGame();
  }
}

function checkAnswer() {
  const userAnswerElement = document.getElementById("user-answer-input");
  const userAnswer = userAnswerElement ? userAnswerElement.value.trim().toLowerCase() : "";
  const currentQuestion = questions[currentQuestionIndex];
  const correctAnswer = currentQuestion.answer.toLowerCase();

  if (userAnswer === correctAnswer) {
    feedbackElement.textContent = "Resposta Correta! 😊";
    feedbackElement.classList.add("correct");
    score++;
  } else {
    feedbackElement.textContent = `Ops! Resposta Incorreta. A resposta correta é: "${currentQuestion.answer}" 😞`;
    feedbackElement.classList.add("incorrect");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < totalQuestions) {
    setTimeout(loadQuestion, 2000);
  } else {
    setTimeout(endGame, 2000);
  }
}

function endGame() {
  gameAreaDiv.style.display = "none";
  endScreenDiv.style.display = "block";
  finalScoreElement.textContent = `Você acertou ${score} de ${totalQuestions} perguntas!`;
}
