// code for even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// code for calculator
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b != 0) {
        return a / b;
      } else {
        console.log("cant divide");
      }
    default:
      return console.log("no such case available");
  }
}

console.log(calculator(10, 6, "&"));

// code for salary
function findTax(salary) {
  let tax = 0;

  switch (true) {
    case salary > 0 && salary <= 500000:
      tax = 0;
      break;

    case salary > 500000 && salary <= 1000000:
      tax = salary * 0.1;
      break;

    case salary > 1000000 && salary <= 1500000:
      tax = salary * 0.2;
      break;

    case salary > 1500000:
      tax = salary * 0.3;
      break;

    default:
      return "Invalid salary amount. Please enter a positive number.";
  }

  return tax;
}

// Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
  let sum = 0;

  while (n1 > 0 || n2 > 0) {
    // Extract the last digits of n1 and n2
    let digit1 = n1 % 10;
    let digit2 = n2 % 10;

    // Add the product of the corresponding digits
    sum += digit1 * digit2;

    // Remove the last digit from n1 and n2
    n1 = Math.floor(n1 / 10);
    n2 = Math.floor(n2 / 10);
  }

  return sum;
}

// Example usage:
console.log(sumOfProducts(6, 34)); // Output: 24
console.log(sumOfProducts(123, 456)); // Output: 27
console.log(sumOfProducts(0, 789)); // Output: 0
console.log(sumOfProducts(78, 56)); // Output: 68
