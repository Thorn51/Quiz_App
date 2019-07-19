let quizType = "";
let quizLocation = 0;
let score = 0;
let questionNumber = 1;
let results = [];

// Generate the question html
function createQuestion() {
  // better to store code in variable?
  let questionCode =
    `
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
  <main class "quiz">
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
              <button type="button" class="next-button" hidden>Next</button>
          </fieldset>
      </form>
    </div>
  </main>`;

  if (quizLocation < 10) {
    return questionCode;
  } else {
    finishQuiz();
  };
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
};

// User can select and unselect answer choices
function selectAnswer() {
  results.push({ 'question': questionNumber, 'correct': null });
  $('.answer-choice').on('click', function (event) {
    event.preventDefault();
    $('.answer-choice').not(this).removeClass('selected');
    $(this).toggleClass('selected')
    $('.check-answer').removeAttr('disabled');
    results[quizLocation].correct = $(this).val();
  });
};

// Submit answer selection - mentor suggestion change to initCheckAnswer
function checkAnswer() {
  // check if answer is correct
  $('.check-answer').on('click', function (event) {
    event.preventDefault();
    console.log(typeof results[quizLocation].correct);
    if (results[quizLocation].correct == 'true') {
      $('.feedback').append(correctFeedback()).slideDown();
      $('.check-answer').hide();
      $('.next-button').show();
      $('.answer-choice').prop('disabled', true);
      score++;
      $('.score').change();
    } else {
      $('.feedback').append(incorrectFeeback()).show();
      $('.check-answer').hide();
      $('.next-button').show();
      $('.answer-choice').prop('disabled', true);
    }
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
    alert('I was clicked')
    //increment quiz location
    quizLocation++;
    //increment question number
    //change question number in header
    questionNumber++;
    renderQuizQuestion();
  })
};

// when all 10 questions are answered 
function finishQuiz() {
  //Show finish button on DOM
};

//display results on DOM
function resultCalcs() {
  //calculate score
  //render results on DOM
  //render restart button on DOM (Does restart reset quiz variables?)
  //render select a different quiz on DOM 
}

//start the quiz
function startQuiz() {
  // user selects quiz type 
  $('.jquery-quiz-selector').on('click', function (event) {
    //stop default behavior
    event.preventDefault();
    //set quiz type
    quizType = $('.jquery-quiz-selector').val();
    // quiz selection choices are hidden
    $('index').remove();
    // questions are rendered to DOM
    createQuestion();
    renderQuizQuestion();
  })
};

function initiateQuiz() {
  startQuiz();
};

$(initiateQuiz);


