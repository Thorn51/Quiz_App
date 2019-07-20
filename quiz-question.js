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
      `$('.help-button') - In this example all elements with the class="help-button" would be selected.<p>Resource: <a href="https://api.jquery.com/class-selector/" target="_blank">jQuery Class Selectors</a></p>`,
    star: "#st1"
  },
  {
    id: 2,
    type: "jq",
    question: "What is the result of this block of code?",
    exampleCode: '$(".menu").on("mouseenter", function() {$(".nav-menu").show(500);}).on("mouseleave", function() {$(".nav-menu").hide(500);});',
    answers: [
      {
        answerOne: "The menu will be hidden when the menu with #mouseenter id is clicked.",
        correct: false
      },
      {
        answerTwo: "The menu will be shown to the user when the mouse enters the menu area and the menu will be hidden when the mouse leaves the menu area.",
        correct: true
      },
      {
        answerThree: "Nothing, this code is incorrect.",
        correct: false
      },
      {
        answerFour: "The nav menu will be shown when the nav menu is clicked, and hidden when the mouse leaves the menu area.",
        correct: false
      }
    ],
    feedback:
      'This event listner is triggered when the mouse enters the element area, and is triggered again when the mouse leaves. <p>Resources: <a href="https://api.jquery.com/mouseenter/" target="_blank">jQuery .mouseenter()</p><p><a href="https://api.jquery.com/mouseleave/" target="_blank"</a>jQuery .mouseleave()</p>',
    star: "#st2"
  },
  {
    id: 3,
    type: "jq",
    question: "Which of the following calls to the .show() method will make a paragraph element show up the fastest in the document object model?",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘p’).show(100);",
        correct: true
      },
      {
        answerTwo: "$(‘p’).show(1000);",
        correct: false
      },
      {
        answerThree: "$(‘p’).show();",
        correct: false
      },
      {
        answerFour: "(‘#p’).show(100);",
        correct: false
      }
    ],
    feedback:
      'The call in this example is the duration it takes the animation to show the paragraph element and is measured in miliseconds. <p>Resource: <a href="https://api.jquery.com/show/" target="_blank">jQuery .show()</a></p>',
    star: "#st3"
  },
  {
    id: 4,
    type: "jq",
    question: "Which of the following will prevent default behavior of a button when added to an event listener?",
    exampleCode: null,
    answers: [
      {
        answerOne: "event.preventDefault();",
        correct: true
      },
      {
        answerTwo: "$(‘submit).preventDefault();",
        correct: false
      },
      {
        answerThree: "$(‘event’).on(‘preventDefault’);",
        correct: false
      },
      {
        answerFour: "$.preventDefault(event);",
        correct: false
      }
    ],
    feedback:
      'event.preventDefault(); - If this method is called, the default action of the event will not be triggered. <p>Resource: <a href="https://api.jquery.com/event.preventdefault/" target="_blank">jQuery event.preventDefault()</a><p>',
    star: "#st4"
  },
  {
    id: 5,
    type: "jq",
    question: "Which of the following keywords can replace event.currentTarget inside of an event handler?",
    exampleCode: null,
    answers: [
      {
        answerOne: "this",
        correct: true
      },
      {
        answerTwo: "target",
        correct: false
      },
      {
        answerThree: "current",
        correct: false
      },
      {
        answerFour: "event",
        correct: false
      }
    ],
    feedback:
      'Inside a callback function on an event listener, this refers to event.currentTarget. So anywhere that you have been typing out event.currentTarget, you can replace it with the this keyword. <p>Resource: <a href="https://courses.thinkful.com/interactive-web-apps-v1/checkpoint/3" target="_blank">Thinkful Interactive Web Apps - Event Listners</a><p>',
    star: "#st5"
  },
  {
    id: 6,
    type: "jq",
    question: 'Which of the following will show an element with an id="reveal"?',
    exampleCode: null,
    answers: [
      {
        answerOne: "$(‘.reveal’).show('slow');",
        correct: false
      },
      {
        answerTwo: "$(show).#reveal;",
        correct: false
      },
      {
        answerThree: '$("#reveal").show("fast");',
        correct: true
      },
      {
        answerFour: "$(‘reveal’).show();",
        correct: false
      }
    ],
    feedback:
      '$("#reveal") - In this example all elements with the id="myClass" would be selected. <p>Resource: <a href="https://api.jquery.com/id-selector/" target="_blank">jQuery ID Selector ("#id")</a></p>',
    star: "#st6"
  },
  {
    id: 7,
    type: "jq",
    question:
      'Which choice will add a click event handler to every element with class="help"?',
    exampleCode: null,
    answers: [
      {
        answerOne: "$('.help’).on(‘mouseenter’, () => {});",
        correct: false
      },
      {
        answerTwo: "$event.on(‘click’, function() {});",
        correct: false
      },
      {
        answerThree: "$(‘help’).on(‘click’, function() {});",
        correct: false
      },
      {
        answerFour: "$(‘.help’).on(‘click’, function() {});",
        correct: true
      }
    ],
    feedback:
      '$(‘.help’).on(‘click’, function() {}); uses the correct syntax and event handler for a click listner. <p>Resource: <a href="https://learn.jquery.com/events/handling-events/" target="_blank">Handling Events</a></p>',
    star: "#st7"
  },
  {
    id: 8,
    type: "jq",
    question:
      "Which of the following would you use to esnure a page can be safely manipulated",
    exampleCode: null,
    answers: [
      {
        answerOne: "$(ready).document()",
        correct: false
      },
      {
        answerTwo: "$(‘#document’).ready()",
        correct: false
      },
      {
        answerThree: "$(document).ready()",
        correct: true
      },
      {
        answerFour: "$document.on.ready;",
        correct: false
      }
    ],
    feedback:
      'A page can\'t be manipulated safely until the document is "ready." jQuery detects this state of readiness for you using $( document ).ready(). <p>Resource: <a href="https://learn.jquery.com/using-jquery-core/document-ready/" target="_blank">jQuery $( document ).ready()</a></p>',
    star: "#st8"
  },
  {
    id: 9,
    type: "jq",
    question:
      "In the block of code below, what is the event listener?",
    exampleCode: '$(".menu").on("mouseenter", function() {$(".nav-menu").show(500);})',
    answers: [
      {
        answerOne: '“mouseenter”',
        correct: true
      },
      {
        answerTwo: '$(“.menu")',
        correct: false
      },
      {
        answerThree: ".on",
        correct: false
      },
      {
        answerFour: ".show(500)",
        correct: false
      }
    ],
    feedback:
      'In this block of code the jQuery library is listening for the mouse to enter the area. Resource: <p><a https://api.jquery.com/mouseenter/" target="_blank">jQuery .mouseenter()</a></p>',
    star: "#st9"
  },
  {
    id: 10,
    type: "jq",
    question:
      "Which of these methods can be used to change the style of a jQuery object?",
    exampleCode: null,
    answers: [
      {
        answerOne: ".hide()",
        correct: false
      },
      {
        answerTwo: ".toggleClass()",
        correct: true
      },
      {
        answerThree: ".children()",
        correct: false
      },
      {
        answerFour: ".remove()",
        correct: false
      }
    ],
    feedback:
      'jQuery can utlize the .toggleClass() mehtod to alter an elements class and use css to target the new class with different styling. <p>Resource: <a href="https://api.jquery.com/toggleclass/" target="_blank">jQuery .toggleClass()</a></p>',
    star: "#st10"
  }
];
