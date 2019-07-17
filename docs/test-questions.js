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
      'jQuery(".myClass") - In this example all elements with the class .myClass would be selected. <a href="https://api.jquery.com/class-selector/"></a>'
  },
  {
    id: 2,
    type: "jq",
    question: "TQ 2",
    exampleCode: null,
    answers: [
      {
        answerOne: "2A",
        correct: false
      },
      {
        answerTwo: "2B",
        correct: false
      },
      {
        answerThree: "2C",
        correct: true
      },
      {
        answerFour: "2D",
        correct: false
      }
    ],
    feedback: "Feedback 2"
  },
  {
    id: 3,
    type: "jq",
    question: "TQ3",
    exampleCode: null,
    answers: [
      {
        answerOne: "3A",
        correct: false
      },
      {
        answerTwo: "3B",
        correct: false
      },
      {
        answerThree: "3C",
        correct: true
      },
      {
        answerFour: "3D",
        correct: false
      }
    ],
    feedback: "Feedback 3"
  }
];
