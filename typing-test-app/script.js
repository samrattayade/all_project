const quotes = [
  "Python is a powerful programming language used in artificial intelligence and machine learning.",
  "JavaScript is the backbone of modern web development and frontend applications.",
  "Artificial intelligence is transforming the world with automation and smart systems.",
  "Practice makes a person perfect in typing and coding."
];

let time = 60;
let timer;
let currentQuote = "";
let isTestRunning = false;

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");

function startTest() {
  if (isTestRunning) return;

  isTestRunning = true;
  time = 60;
  inputElement.value = "";
  inputElement.disabled = false;
  inputElement.focus();

  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.innerText = currentQuote;

  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  time--;
  timeElement.innerText = time;

  if (time === 0) {
    clearInterval(timer);
    endTest();
  }
}

function endTest() {
  isTestRunning = false;
  inputElement.disabled = true;

  const typedText = inputElement.value;
  const wordsTyped = typedText.trim().split(" ").length;

  const wpm = wordsTyped;
  wpmElement.innerText = wpm;

  let correctChars = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === currentQuote[i]) {
      correctChars++;
    }
  }

  const accuracy = ((correctChars / typedText.length) * 100).toFixed(2);
  accuracyElement.innerText = accuracy;
}