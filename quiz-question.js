const QUESTIONS = [
  {
    id: 1,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      `$('.help-button') - In this example all elements with the class .help-button would be selected.<p>Resource: <a href="https://api.jquery.com/class-selector/" target="_blank">jQuery Class Selectors</a></p>`
  },
  {
    id: 2,
    type: "jq",
    question:
      "Question 2?",
    exampleCode: '$(".menu").on("mouseenter", function() {$(".nav-menu").show(500);}).on("mouseleave", function() {$(".nav-menu").hide(500);});',
    answers: [
      {
        answerOne: "Answer A",
        correct: false
      },
      {
        answerTwo: "Answer B",
        correct: false
      },
      {
        answerThree: "Answer C",
        correct: true
      },
      {
        answerFour: "Answer D",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 3,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 4,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 5,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 6,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 7,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 8,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 9,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 10,
    type: "jq",
    question:
      "Which jQuery object would you use to target all elements with the help-button class?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘#help-button’)",
        correct: false
      },
      {
        answerTwo: "(‘.help-button’)",
        correct: false
      },
      {
        answerThree: "$(‘.help-button’)",
        correct: true
      },
      {
        answerFour: "$(.help-button)",
        correct: false
      }
    ],
    feedback:
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  }
];
