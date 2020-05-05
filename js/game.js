// Whoever will be grading this should pls be gentle on me
// @mentor how do you guys learn JS pls I would love to know maybe my approach is the problem

const quizContainer = document.querySelector('.quiz-container'),
  questionCounter = document.querySelector('.question-num-value'),
  totalQuestion = document.querySelector('.total-question'),
  question = document.querySelector('.question'),
  options = document.querySelector('.options'),
  nextBtn = document.querySelector('.next'),
  score = document.querySelector('.score'),
  option1 = document.querySelector('.option1'),
  option2 = document.querySelector('.option2'),
  option3 = document.querySelector('.option3'),
  option4 = document.querySelector('.option4'),
  quizOver = document.querySelector('.game-over'),
  user = document.querySelector('.user'),
  finalScore = document.querySelector('.mark'),
  optionArr = Array.from(options.children);

username = localStorage.getItem('username');
let index = 0;
let indexArray = [];
let questionIndex = 0;
let rightanswer = 0;

const questions = [
  {
    question:
      'When was the Declaration of Independence approved by the Second Continental Congress?',
    options: ['May 4, 1776', 'June 4, 1776', 'July 4, 1776', 'July 2, 1776'],
    answer: 2,
  },

  {
    question: 'Who is the creator of JavaScript programming?',
    options: ['Brendan Eich', 'Kingabesh', 'Ryan Dahl', 'JEFF'],
    answer: 0,
  },

  {
    question:
      'Who scored AC Milan first goal, in the famous 2005 UCL final against Liverpool?',
    options: ['Nesta', 'Seedorf', 'Crespo', 'Shevchenko'],
    answer: 2,
  },

  {
    question:
      'Paul McCartney has always used his middle name. What is his real first name? ',
    options: ['John', 'Jack', 'Justin', 'James'],
    answer: 3,
  },

  {
    question:
      'All of the following programs are classified as raster graphics editors EXCEPT:',
    options: ['Inkscape', 'Paint.NET', 'GIMP', 'Adobe Photoshop'],
    answer: 0,
  },
];

// setting questNumbr
totalQuestion.textContent = questions.length;

// Getting question
loadQuiz = () => {
  question.innerHTML = questions[questionIndex].question;
  option1.innerHTML = questions[questionIndex].options[0];
  option2.innerHTML = questions[questionIndex].options[1];
  option3.innerHTML = questions[questionIndex].options[2];
  option4.innerHTML = questions[questionIndex].options[3];
  index++;
  questionCounter.innerText = index;
  if (questions.length == index) {
    nextBtn.innerText = 'Finish';
  }
  // answerCheck();
};

// Check for Answer

answerCheck = (e) => {
  if (e.id == questions[questionIndex].answer) {
    // score increament
    rightanswer += 1;
    console.log(rightanswer);
    score.textContent = rightanswer;
    finalScore.innerText = rightanswer;
    e.classList.add('correct');
  } else {
    e.classList.add('wrong');
  }
  disableOption();
  nextBtn.style.display = 'block';
};

function disableOption() {
  for (let i = 0; i < optionArr.length; i++) {
    // console.log(optionArr);
    optionArr[i].classList.add('disabled');
    if (optionArr[i].id == questions[questionIndex].answer) {
      optionArr[i].classList.add('correct');
    }
  }
}

function enableOptions() {
  for (let i = 0; i < optionArr.length; i++) {
    optionArr[i].classList.remove('disabled', 'correct', 'wrong');
  }
}

function validite() {
  if (!optionArr[0].classList.contains('disabled')) {
    alert('Please select an Option');
  } else {
    enableOptions();
    randownQuestions();
  }
}

nextQuestion = () => {
  validite();
};

// nextBtnQuestion

randownQuestions = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let duplicate = 0;
  // removing duplicates
  // I did all my best to find how to do this part with shotetr code but couldnt get pls pardon me

  if (index == questions.length) {
    nextBtn.innerText = 'Finish';
    nextBtn.style.display = 'none';
    gameOver();
  } else {
    if (indexArray.length > 0) {
      for (let i = 0; i < indexArray.length; i++) {
        if (indexArray[i] == randomNumber) {
          duplicate = 1;
          break;
        }
      }
      if (duplicate == 1) {
        randownQuestions();
      } else {
        questionIndex = randomNumber;
        loadQuiz();
      }
    }
    if (indexArray.length == 0) {
      questionIndex = randomNumber;
      loadQuiz();
    }
    indexArray.push(randomNumber);
  }
};

function gameOver() {
  user.innerText = `${username}`;
  quizOver.style.display = 'flex';
}
nextBtn.addEventListener('click', nextQuestion);

randownQuestions();
