const jsQuiz = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a scripting language used to create dynamic web content. It runs in browsers and on servers (Node.js), supporting object-oriented, functional, and imperative styles.",
  },
  {
    question: "What is a variable?",
    answer:
      "A variable is a named container for storing data. In JavaScript, variables are declared using `let`, `const`, or `var` and can store any type of value.",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer:
      "Use `let`, `const`, or `var` to declare variables. `let` and `const` are block-scoped; `const` prevents reassignment. `var` is function-scoped and generally avoided today.",
  },
  {
    question: "What’s the difference between let and const?",
    answer:
      "`let` allows reassignment; `const` does not. Both are block-scoped. `const` variables holding objects can have their contents changed but not be reassigned entirely.",
  },
  {
    question: "What are data types in JavaScript?",
    answer:
      "JavaScript data types include primitives (string, number, boolean, null, undefined, symbol, bigint) and objects (arrays, functions). Variables can change types since JavaScript is loosely typed.",
  },
  {
    question: "How do you write a function in JavaScript?",
    answer:
      "Functions are written using declarations, expressions, or arrow syntax. Example: `function add(x, y) { return x + y; }` or `const add = (x, y) => x + y;`.",
  },
  {
    question: "What is an array?",
    answer:
      "An array stores ordered values accessed by index. Example: `let nums = [1, 2, 3]`. Arrays can hold any type and offer useful methods like `.map()` and `.push()`.",
  },
  {
    question: "How do you write an if statement?",
    answer:
      "`if (condition) { ... }` runs code when the condition is true. You can add `else` or `else if` for alternative logic. Used for conditional decisions.",
  },
  {
    question: "What does === mean in JavaScript?",
    answer:
      "`===` checks for strict equality: same value and type. Unlike `==`, it doesn’t perform type conversion, reducing unexpected results. Example: `5 === '5'` is false.",
  },
  {
    question: "What is a loop?",
    answer:
      "Loops repeat code while a condition is true. Common loops include `for`, `while`, and `for...of`. Example: `for (let i = 0; i < 5; i++) {}`.",
  },
  {
    question: "How do you write comments in JavaScript?",
    answer:
      "Use `//` for single-line comments and `/* ... */` for multi-line comments. Comments explain code and are ignored during execution. Example: `// This is a comment`.",
  },
  {
    question: "What is an object?",
    answer:
      "An object holds key-value pairs. Example: `{ name: 'Tom', age: 30 }`. Access values using dot or bracket notation. Objects can include functions (methods).",
  },
  {
    question: "What is the DOM?",
    answer:
      "The DOM represents a web page as a tree of elements. JavaScript can change content, styles, and respond to user input using DOM methods like `getElementById()`.",
  },
  {
    question: "What does 'undefined' mean?",
    answer:
      "`undefined` means a variable has been declared but not assigned. Also appears when functions return nothing or accessing nonexistent object properties.",
  },
  {
    question: "What is a callback function?",
    answer:
      "A callback is a function passed into another function to be executed later, often used for async tasks like `setTimeout()` or handling events.",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer:
      "`==` compares values with type coercion. `===` compares value and type without conversion. Example: `5 == '5'` is true, `5 === '5'` is false.",
  },
  {
    question: "What is a function parameter?",
    answer:
      "A parameter is a named variable in a function definition. It receives a value when the function is called. Example: `function greet(name) {}` — `name` is a parameter.",
  },
];

export default jsQuiz;
