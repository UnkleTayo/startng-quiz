const quizContainer = document.querySelector('.quiz-container');
const questionCounter = document.querySelector('.question-num-value');
const totalQuestion = document.querySelector('.total-question');
const question = document.querySelector('.question');
const options = document.querySelector('.options');
const nextBtn = document.querySelector('.next');
const score = document.querySelector('.score');
username = localStorage.getItem('username');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const optionArr = Array.from(options.children);

let index = 0;
let questionIndex = 0;
let correctAnswers;
