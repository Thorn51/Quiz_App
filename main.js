$('document').ready(function () {

  let quizType = "";
  let quizLocation = 0;
  let score = 0;
  let questionNumber = 1;

  //start the quiz
  function startQuiz() {
    // user selects quiz type 
    $('.container-quiz-type-selection').on('click', '.jquery-quiz-selector', function (event) {
      //set quiz type
      quizType = $('.jquery-quiz-selector').val();
      // quiz selection choices are hiddent
      $('.container-quiz-type-selection', '.quiz-selector-title').hide(500);
      // questions are rendered to DOM
      renderQuizQuestion();
    })

  }

  // Generate the question html
  function createQuestion() {
    // better to store code in variable?
    let questionCode = ``
    if (quizLocation < QUESTIONS.length) {
      return questionCode;
    } else {
      finishQuiz();
    };
  };

  // add quiz question to DOM
  function renderQuizQuestion() {

  };

  // User can select and unselect answer choices
  function selectAnser() {

  };

  // Submit answer selection
  function submitAnswer() {
    // check if answer is correct
    // provide feedback
    // show next button on DOM
  };

  // Provide feedback after the asnwer is submitted
  function feedback() {
    // if code example block is present then hide
    // show feedbac based on question result
    // change color of star in header based on right or wrong
  };

  //after question submitted, add next button to DOM
  function nextQuestion() {
    //increment quiz location
    //increment question number
    //change question number in header
    // 
  };

  // when all 10 questions are answered 
  function finishQuiz() {
    //Show finish button on DOM
  };

  //display results on DOM
  function results() {
    //calculate score
    //render results on DOM
    //render restart button on DOM (Does restart reset quiz variables?)
    //render select a different quiz on DOM 
  }






});



