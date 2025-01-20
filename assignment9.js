// Variable declarations and scope demonstration
function variableScopes() {
  var varVariable = "I'm function-scoped"; // Function-scoped
  let letVariable = "I'm block-scoped"; // Block-scoped
  const constVariable = "I can't be reassigned"; // Block-scoped and immutable

  console.log("Outside block:", varVariable, letVariable, constVariable);

  if (true) {
    var varVariable2 = "I'm still function-scoped";
    let letVariable2 = "I'm only available in this block";
    const constVariable2 = "I'm also only in this block";

    console.log("Inside block:", varVariable2, letVariable2, constVariable2);
  }

  console.log("Outside block:", varVariable2); // varVariable2 is accessible
  // console.log(letVariable2); // ReferenceError: letVariable2 is not defined
  // console.log(constVariable2); // ReferenceError: constVariable2 is not defined
}

// Array of fruits
const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

// Function to return second fruit
function getSecondFruit() {
  return fruits[1];
}

// Function to modify array using push and pop
function modifyArray(arr) {
  arr.push("new element"); // Add element to end
  arr.pop(); // Remove last element
  return arr;
}

// Function to square numbers using map
function squareNumbers(numbers) {
  return numbers.map((num) => num * num);
}

// Function to filter out even numbers
function filterEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 !== 0);
}

// Person object and greeting function
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Developer",
};

function greetPerson(person) {
  return `Hello, my name is ${person.name}. I'm ${person.age} years old and work as a ${person.occupation}.`;
}

// Rectangle area function
function calculateArea(rectangle) {
  return rectangle.width * rectangle.height;
}

// Function to get object keys
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// Function to merge objects
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// Function to sum array using reduce
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
console.log("Variable Scopes Example:");
variableScopes();

console.log("\nSecond Fruit:");
console.log(getSecondFruit()); // "banana"

console.log("\nModify Array Example:");
console.log(modifyArray([1, 2, 3])); // [1, 2, 3]

console.log("\nSquare Numbers Example:");
console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

console.log("\nFilter Even Numbers Example:");
console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [1, 3, 5]

console.log("\nGreet Person Example:");
console.log(greetPerson(person));

console.log("\nCalculate Area Example:");
console.log(calculateArea({ width: 5, height: 3 })); // 15

console.log("\nGet Object Keys Example:");
console.log(getObjectKeys(person)); // ["name", "age", "occupation"]

console.log("\nMerge Objects Example:");
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })); // { a: 1, b: 2, c: 3, d: 4 }

console.log("\nSum Array Example:");
console.log(sumArray([1, 2, 3, 4, 5])); // 15
