const MultipleChoiceQuestionsHard = [
  {
    id: 101,
    question:
      "What is the difference between `Object.freeze()` and `Object.seal()`?",
    answers: [
      {
        text: "`Object.freeze()` makes an object completely immutable. `Object.seal()` allows changing existing properties but prevents adding or removing properties.",
        isCorrect: true,
      },
      {
        text: "`Object.freeze()` and `Object.seal()` are the same thing.",
        isCorrect: false,
      },
      {
        text: "`Object.seal()` makes an object immutable; `Object.freeze()` does not.",
        isCorrect: false,
      },
      {
        text: "`Object.seal()` allows adding new properties.",
        isCorrect: false,
      },
    ],
  },
  {
    id: 102,
    question: "What is the purpose of the `Symbol` type in JavaScript?",
    answers: [
      {
        text: "`Symbol` is a primitive type used to create unique identifiers, especially useful for object keys to avoid collisions.",
        isCorrect: true,
      },
      {
        text: "It's a built-in object for string manipulation.",
        isCorrect: false,
      },
      { text: "It's used to define secret classes.", isCorrect: false },
      { text: "It's a special syntax for enums.", isCorrect: false },
    ],
  },
  {
    id: 103,
    question: "Explain event delegation and why it's useful.",
    answers: [
      {
        text: "It’s a technique where a single event listener is added to a parent element to handle events for its children, improving performance and flexibility.",
        isCorrect: true,
      },
      {
        text: "It involves manually calling listeners on each child.",
        isCorrect: false,
      },
      { text: "It stops event bubbling from occurring.", isCorrect: false },
      { text: "It disables events on dynamic elements.", isCorrect: false },
    ],
  },
  {
    id: 104,
    question: "What does the `??` (nullish coalescing) operator do?",
    answers: [
      {
        text: "Returns the right-hand operand only if the left-hand operand is null or undefined. Unlike `||`, it doesn't consider falsy values like 0 or ''.",
        isCorrect: true,
      },
      {
        text: "Acts exactly like the logical OR (`||`) operator.",
        isCorrect: false,
      },
      { text: "Returns true if both sides are null.", isCorrect: false },
      { text: "Used to check for empty strings only.", isCorrect: false },
    ],
  },
  {
    id: 105,
    question: "What is a memory leak, and how can it happen in JS?",
    answers: [
      {
        text: "A memory leak happens when memory is not properly released. Causes include closures holding references, timers, or detached DOM elements.",
        isCorrect: true,
      },
      {
        text: "It's when a variable is declared without var, let, or const.",
        isCorrect: false,
      },
      { text: "It occurs only when using recursion.", isCorrect: false },
      {
        text: "Memory leaks are not possible in JavaScript.",
        isCorrect: false,
      },
    ],
  },
  {
    id: 106,
    question: "Why is `typeof null` equal to `'object'`?",
    answers: [
      {
        text: "It’s a historical bug in JavaScript due to how values were originally stored in memory.",
        isCorrect: true,
      },
      {
        text: "Because null is an object type in JavaScript.",
        isCorrect: false,
      },
      { text: "Because null is the prototype of objects.", isCorrect: false },
      { text: "It indicates a weakly typed language.", isCorrect: false },
    ],
  },
  {
    id: 107,
    question: "What is a closure in JavaScript?",
    answers: [
      {
        text: "A closure is a function that retains access to its outer scope, even after the outer function has returned.",
        isCorrect: true,
      },
      {
        text: "A function that closes over an object and keeps it alive.",
        isCorrect: false,
      },
      { text: "A function that is immediately executed.", isCorrect: false },
      { text: "A block scope for const and let.", isCorrect: false },
    ],
  },
  {
    id: 108,
    question: "What is the event loop in JavaScript?",
    answers: [
      {
        text: "It's the mechanism that allows asynchronous, non-blocking behavior by managing the call stack and the task queue.",
        isCorrect: true,
      },
      {
        text: "A built-in infinite loop in the JavaScript engine.",
        isCorrect: false,
      },
      { text: "A method to call async functions directly.", isCorrect: false },
      { text: "Part of the DOM that listens for events.", isCorrect: false },
    ],
  },
  {
    id: 109,
    question: "What are 'pure functions'?",
    answers: [
      {
        text: "Functions that produce the same output given the same input and have no side effects (don’t alter external state).",
        isCorrect: true,
      },
      { text: "Functions that always return objects.", isCorrect: false },
      {
        text: "Functions that mutate inputs to optimize speed.",
        isCorrect: false,
      },
      { text: "Functions that avoid using any parameters.", isCorrect: false },
    ],
  },
  {
    id: 110,
    question:
      "What is the difference between `call()`, `apply()`, and `bind()`?",
    answers: [
      {
        text: "`call()` and `apply()` invoke a function with a specified `this`, with arguments passed differently. `bind()` returns a new function with bound `this`.",
        isCorrect: true,
      },
      { text: "`bind()` immediately invokes the function.", isCorrect: false },
      { text: "`apply()` doesn’t accept any arguments.", isCorrect: false },
      { text: "`call()` creates a copy of the function.", isCorrect: false },
    ],
  },
];

export default MultipleChoiceQuestionsHard;
