let quizLocation = 0;
let score = 0;
let questionNumber = 1;
let results = [];

// Generate the question html
function createQuestion() {
  // better to store code in variable?
  let questionCode =
    `
  <main class"quiz-page">
    <header>
        <div class="question-header">
            <div class="progress">
                <span class="question-numbers">${questionNumber}/10</span>
            </div>
            <div class="stars">
                <span id="st1" class="fa fa-star"></span>
                <span id="st2" class="fa fa-star"></span>
                <span id="st3" class="fa fa-star"></span>
                <span id="st4" class="fa fa-star"></span>
                <span id="st5" class="fa fa-star"></span>
                <span id="st6" class="fa fa-star"></span>
                <span id="st7" class="fa fa-star"></span>
                <span id="st8" class="fa fa-star"></span>
                <span id="st9" class="fa fa-star"></span>
                <span id="st10" class="fa fa-star"></span>
            </div>
            <div class="score">
                <span>Score ${score}</span>
            </div>
        </div>
    </header>
    <div class="container">
      <form class="question-block-form">
          <fieldset>
              <legend>
                  <h2 class="question-text">${QUESTIONS[quizLocation].question}</h2>
                  <div class="example-code-block">
                      <code class="prettyprint">${QUESTIONS[quizLocation].exampleCode}</code>
                  </div>
                  <section class="feedback" hidden>
                  </section>
              </legend>
              <button type="button" class="answer-choice a"
                  value="${QUESTIONS[quizLocation].answers[0].correct}">${QUESTIONS[quizLocation].answers[0].answerOne}</button>
              <button type="button" class="answer-choice b"
                  value="${QUESTIONS[quizLocation].answers[1].correct}">${QUESTIONS[quizLocation].answers[1].answerTwo}</button>
              <button type="button" class="answer-choice c"
                  value="${QUESTIONS[quizLocation].answers[2].correct}">${QUESTIONS[quizLocation].answers[2].answerThree}</button>
              <button type="button" class="answer-choice d"
                  value="${QUESTIONS[quizLocation].answers[3].correct}">${QUESTIONS[quizLocation].answers[3].answerFour}</button>
              <button type="button" class="check-answer" disabled>Check Answer</button>
              <button type="button" class="next-button" hidden>Next Question</button>
              <button type="button" class="finish-button" hidden>Finish Quiz</button>
          </fieldset>
      </form>
    </div>
  </main>`;
  return questionCode;
};

// add quiz question to DOM
function renderQuizQuestion() {
  $('body').html(createQuestion());
  if (QUESTIONS[quizLocation].exampleCode === null) {
    $('.example-code-block').hide();
  } else {
    $('.example-code-block').show();
  };
  selectAnswer();
  checkAnswer();
  correctFeedback();
  incorrectFeeback();
  nextQuestion();
  stars();
  finishQuiz();
};

// User can select and unselect answer choices
function selectAnswer() {
  results.push({ 'question': questionNumber, 'correct': null, starId: null });
  $('.answer-choice').on('click', function (event) {
    event.preventDefault();
    $('.answer-choice').not(this).removeClass('selected');
    $(this).toggleClass('selected')
    $('.check-answer').removeAttr('disabled');
    results[quizLocation].correct = $(this).val();
    results[quizLocation].starId = QUESTIONS[quizLocation].star;
  });
};

// Submit answer selection - mentor suggestion change to initCheckAnswer
function checkAnswer() {
  // check if answer is correct
  $('.check-answer').on('click', function (event) {
    event.preventDefault();
    if (results[quizLocation].correct == 'true') {
      $('.feedback').append(correctFeedback()).slideDown();
      $('.check-answer').hide();
      $('.answer-choice').prop('disabled', true);
      if (questionNumber < 10) {
        $('.next-button').show();
      } else {
        $('.finish-button').show();
      };
      calculateScore();
    } else {
      $('.feedback').append(incorrectFeeback()).show();
      $('.check-answer').hide();
      $('.answer-choice').prop('disabled', true);
      if (questionNumber < 10) {
        $('.next-button').show();
      } else {
        $('.finish-button').show();
      };
    };
    stars();
  });
};
//css z-index 10 above overlay
// Provide feedback after the asnwer is submitted
function correctFeedback() {
  // if code example block is present then hide
  // show feedback based on question result
  // change color of star in header based on right or wrong
  let correctFeeback = ` 
  <div class="correct">
    <h2>That's Correct!</h2>
    <p>${QUESTIONS[quizLocation].feedback}</p>
  </div>`;
  return correctFeeback;
};

function incorrectFeeback() {
  let incorrectFeedback = ` 
  <div class="incorrect">
    <h2>That's Incorrect</h2>
    <p>${QUESTIONS[quizLocation].feedback}</p>
  </div>`;
  return incorrectFeedback;
}
//after question submitted, add next button to DOM
function nextQuestion() {
  $('.next-button').on('click', function (event) {
    event.preventDefault();
    //increment quiz location
    quizLocation++;
    //increment question number
    //change question number in header
    questionNumber++;
    renderQuizQuestion();
  })
};

//control the star progress bar
function stars() {
  for (i = 0; i < results.length; i++) {
    if (results[i].correct === null) {
      $(results[i].starId).toggleClass('stars');
    } else if (results[i].correct === 'true') {
      $(results[i].starId).toggleClass('star-correct');
    } else {
      $(results[i].starId).toggleClass('star-incorrect');
    };
  };
};
// when all 10 questions are answered 
function finishQuiz() {
  $('.finish-button').on('click', function (event) {
    event.preventDefault();
    $('.question-page').remove();
    renderResultPage();
    resultsPageFeedback();
  });
};

//perfrom calculations for results
function calculateScore() {
  score++;
}

//results feedaback
function resultsPageFeedback() {
  if (score >= 8) {
    $('.average').hide();
  } else {
    $('.pass').hide();
  };
};


//create results page
function createResultsPage() {
  resultsPageFeedback();
  let resultsPage = `
  <main class="results-page">
    <header>
      <h1 class="quiz-selector-title">Results</h1>
    </header>
    <div class="container">
      <section class="pass">
        <h2>You Scored ${score} out of 10 on the jQuery Quiz</h2>
        <p>Excellent job! You are ready to venture forth on your studies.</p>
        <p>Next Up Module 10 - <a href="https://thinkful.typeform.com/to/yAylea?email=mtberry16%40hotmail.com&enrollment_id=61924">Program Manager: Mastering Captstones and Mock Interviews - Self Reflection</a></p>
      </section>
      <section class="average">
        <h2>You scored ${score} out of 10 on the jQuery Quiz</h2>
        <p>It looks like you could use some more time studying jQuery</p>
        <p>Here are some excellent resources:</p>
          <ul>
            <li><a href="https://courses.thinkful.com/interactive-web-apps-v1/checkpoint/1" target="_blank">Thinkful Interactive Web Apps</a></li>
            <li><a href="https://jquery.com/" target="_blank">jQuery.com</a></li>
            <li><a href="https://learn.freecodecamp.org/front-end-libraries/jquery/" target="_blank">freeCodeCamp - Introduction to jQuery</a></li>
          </ul>
      </section>
      <button type="button" class="restart-quiz">
        Restart Quiz
      </button>
      <button type="button" class="select-new-quiz">
        Select a Different Quiz
      </button>
    </div>
  </main>`;
  return resultsPage;
};

//display results on DOM
function renderResultPage() {
  $('body').html(createResultsPage());
  restartQuiz();
  quizChoices();
  //render results on DOM
};

function resetVariables() {
  quizLocation = 0;
  score = 0;
  questionNumber = 1;
  results = [];
}

function restartQuiz() {
  $('.restart-quiz').on('click', function (event) {
    $('.results-page').remove();
    resetVariables();
    renderQuizQuestion();
  });
}

function quizChoices() {
  $('.select-new-quiz').on('click', function () {
    location.reload();
    resetVariables();
  });
}

//start the quiz
function startQuiz() {
  // user selects quiz type 
  $('.jquery-quiz-selector').on('click', function (event) {
    //stop default behavior
    event.preventDefault();
    // quiz selection choices are hidden
    $('.index-page').remove();
    // questions are rendered to DOM
    createQuestion();
    renderQuizQuestion();
  })
};

function initiateQuiz() {
  startQuiz();
};

$(initiateQuiz);


