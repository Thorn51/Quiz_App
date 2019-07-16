let quizType = "";
let quizLocation = 0;
let score = 0;

function startQuiz() {}

function createQuestion() {
  if (quizLocation < QUESTIONS.length) {
    if (QUESTIONS[quizLocation].exampleCode === null) {
      $(".example-code-block").hide();
    } else {
      $(".example-code-block").show();
    }
    return (
      <div class="container">
        <form class="question-block-form">
          <fieldset>
            <legend>
              <h2 class="question-text">
                `${QUESTIONS[quizLocation].question}`
              </h2>
              <div class="example-code-block">
                <code class="prettyprint">
                  `${QUESTIONS[quizLocation].exampleCode}`
                </code>
              </div>
            </legend>
            <button
              type="button"
              class="answer-choice a"
              value="`$QUESTIONS[quizLocation].answers[0].correct`"
            >
              `${QUESTIONS[quizLocation].answers[0].answerOne}`
            </button>
            <button
              type="button"
              class="answer-choice b"
              value="`$QUESTIONS[quizLocation].answers[1].correct`"
            >
              `${QUESTIONS[quizLocation].answers[1].answerTwo}`
            </button>
            <button
              type="button"
              class="answer-choice c"
              value="`$QUESTIONS[quizLocation].answers[2].correct`"
            >
              `${QUESTIONS[quizLocation]}.answers[2].answerThree}`
            </button>
            <button
              type="button"
              class="answer-choice d"
              value="`$QUESTIONS[quizLocation].answers[3].correct`"
            >
              `${QUESTIONS[quizLocation]}.answers[3].answerFour}`
            </button>
            <button type="submit" value="Submit" class="submit-button">
              Check Answer
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

function renderQuestion() {}

function checkAnswer() {}

function calculateScore() {}

function rightAnswer() {}

function wrongAnswer() {}

function feedbackCorrect() {}

function feedbackWrong() {}

function renderResults() {}

function nextQuestion() {}

function restartQuiz() {}

function createQuiz() {}

$(createQuiz);
