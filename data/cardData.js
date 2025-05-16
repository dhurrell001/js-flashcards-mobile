const jsQuiz = [
  {
    question: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted scripting language primarily used to create interactive effects within web browsers. It is one of the core technologies of the web, alongside HTML and CSS. JavaScript allows developers to manipulate the DOM (Document Object Model), handle user events, validate forms, make network requests, and build complex applications. It runs in the browser and also on servers via environments like Node.js. JavaScript supports multiple programming paradigms including object-oriented, imperative, and functional styles, making it extremely versatile and widely adopted in web development.",
  },
  {
    question: "What is a variable?",
    answer:
      "A variable is a named storage for data in a program. It acts like a container that holds values which can be referenced and manipulated throughout your code. In JavaScript, variables are dynamically typed, meaning they can store values of any type without a fixed type definition. Variables can hold numbers, strings, booleans, arrays, objects, functions, and more. You declare variables using `let`, `const`, or the older `var`. Naming variables clearly helps keep your code readable and maintainable. For example: `let score = 100;` or `const name = 'Jane';`.",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answer:
      "Variables in JavaScript can be declared using `var`, `let`, or `const`. `let` is used when you expect the variable's value to change later, while `const` is used when you don’t want the variable to be reassigned. `var` is an older keyword that is function-scoped and is generally avoided in modern code due to hoisting issues. Syntax examples include `let age = 25;`, `const name = 'John';`, and `var total = 100;`. Declaring with `const` provides more predictable code, especially when dealing with constants, though objects declared with `const` can still be mutated.",
  },
  {
    question: "What’s the difference between let and const?",
    answer:
      "`let` and `const` are both used to declare block-scoped variables, but they behave differently in terms of reassignment. `let` allows you to reassign a new value to the variable after it has been declared, making it suitable for variables whose values might change, such as counters. `const` creates a constant reference, meaning the variable cannot be reassigned after declaration. However, if a `const` holds an object or array, you can still modify its contents (mutate it), though you can’t point it to a new object or array. This distinction is important in maintaining code clarity and avoiding bugs.",
  },
  {
    question: "What are data types in JavaScript?",
    answer:
      "JavaScript supports several data types categorized into primitives and objects. Primitive types include `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`. These represent single values. Objects (including arrays and functions) are complex data types that can store collections of values. JavaScript is loosely typed, meaning variables can change types at runtime. The `typeof` operator is used to check the type of a value, though it has some quirks (e.g., `typeof null` returns 'object'). Understanding types is crucial to prevent unexpected behavior in your programs.",
  },
  {
    question: "How do you write a function in JavaScript?",
    answer:
      "In JavaScript, functions are reusable blocks of code that perform a specific task. You can define functions in three main ways: (1) **Function declaration**: `function greet() { console.log('Hi'); }`; (2) **Function expression**: `const greet = function() { console.log('Hi'); };`; and (3) **Arrow function**: `const greet = () => { console.log('Hi'); };`. Functions can accept parameters and return values using the `return` keyword. They're essential for breaking your code into manageable, testable parts. Functions can also be passed as arguments, making JavaScript a functional language.",
  },
  {
    question: "What is an array?",
    answer:
      "An array is a special type of object in JavaScript used to store ordered collections of values. Arrays can hold values of any type—strings, numbers, booleans, objects, other arrays, or even functions. Elements in an array are accessed by their index, starting from 0. Arrays are declared using square brackets: `let fruits = ['apple', 'banana', 'orange'];`. JavaScript arrays come with many useful methods such as `.push()`, `.pop()`, `.map()`, `.filter()`, `.reduce()`, and `.forEach()`. These methods make it easy to manipulate or transform the array's contents.",
  },
  {
    question: "How do you write an if statement?",
    answer:
      "An `if` statement in JavaScript allows you to perform conditional execution of code blocks. The basic syntax is: `if (condition) { // code } else { // fallback code }`. If the condition evaluates to `true`, the code block inside the `if` is executed; otherwise, the `else` block (if present) runs. You can also chain multiple conditions using `else if`. Example: `if (score >= 90) { grade = 'A'; } else if (score >= 80) { grade = 'B'; } else { grade = 'C'; }`. Conditional logic is essential for decision-making in programs.",
  },
  {
    question: "What does === mean in JavaScript?",
    answer:
      "`===` is the strict equality operator in JavaScript, used to compare two values. It returns `true` only if the values being compared are of the same type **and** have the same value. For example, `3 === '3'` returns `false` because one is a number and the other is a string. This is in contrast to the loose equality operator `==`, which performs type coercion and may return `true` even if the types differ (e.g., `3 == '3'` is `true`). Using `===` is generally recommended because it avoids unexpected behavior due to type conversion.",
  },
  {
    question: "What is a loop?",
    answer:
      "A loop allows you to repeatedly execute a block of code as long as a specified condition is true. JavaScript provides several loop types: `for` (ideal for known iteration counts), `while` (runs while a condition is true), `do...while` (runs at least once), `for...in` (iterates over object keys), and `for...of` (iterates over iterable values like arrays or strings). Example: `for (let i = 0; i < 5; i++) { console.log(i); }`. Loops are essential for tasks like iterating over arrays, processing data, or running animations and timers.",
  },
  {
    question: "How do you write comments in JavaScript?",
    answer:
      "Comments are used to explain your code and make it more readable. They’re ignored by the JavaScript engine during execution. There are two types of comments: (1) **Single-line comments**, which start with `//`. Example: `// This is a comment`. (2) **Multi-line comments**, enclosed between `/*` and `*/`. Example: `/* This is a multi-line comment */`. Writing clear comments helps collaborators understand your logic and is considered a good coding practice, especially in larger projects or when working in teams.",
  },
  {
    question: "What is an object?",
    answer:
      "An object in JavaScript is a collection of key-value pairs, where keys (also called properties) are strings (or symbols), and values can be any data type. Objects are used to represent real-world entities and structured data. Example: `const person = { name: 'Alice', age: 25, greet: () => console.log('Hi') };`. You can access properties using dot notation (`person.name`) or bracket notation (`person['age']`). Objects can also include methods (functions as values) and be nested inside other objects. They are fundamental to most JavaScript applications.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a web page as a tree of nodes, where each node is an object representing part of the page (e.g., an element, attribute, or piece of text). JavaScript can interact with the DOM to dynamically update content, modify styles, handle events, or add/remove elements. Methods like `document.getElementById()`, `querySelector()`, and `addEventListener()` allow you to manipulate the DOM. Mastering DOM manipulation is key to creating interactive web applications.",
  },
  {
    question: "What does 'undefined' mean?",
    answer:
      "`undefined` is a special value in JavaScript that represents the absence of a value. A variable that has been declared but not assigned a value is `undefined`. It also appears when a function doesn’t return anything, or when trying to access a non-existent property on an object. Example: `let x; console.log(x); // undefined`. It’s different from `null`, which is an intentional absence of value. Understanding the difference between `undefined`, `null`, and `NaN` helps avoid logic errors in your code.",
  },
  {
    question: "What is a callback function?",
    answer:
      "A callback is a function passed into another function as an argument, which is then invoked inside the outer function. Callbacks are often used for asynchronous operations, such as fetching data, waiting for a timer, or responding to user input. Example: `setTimeout(() => { console.log('Hello after 1 second'); }, 1000);`. In this case, the arrow function is the callback executed after 1 second. Callbacks help manage execution order, especially in non-blocking JavaScript, and are foundational to concepts like Promises and async/await.",
  },
];

export default jsQuiz;
