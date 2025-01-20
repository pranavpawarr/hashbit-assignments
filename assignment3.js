// question 1
const states = [
  "Andhra Pradesh",
  "Bihar",
  "Uttar Pradesh",
  "Odisha",
  "Karnataka",
];
const filteredStates = states.filter((state) => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);

// question 2
let str = "I love my India";
let reversed = str.split(" ").reverse().join(" ");
console.log(reversed);

// question3

let string = "INDIA".split("");
string.splice(1, 4, "NDONESIA".split("").join(""));
console.log(string.join(""));

//question 4
let longString =
  "This is a simple example string for counting vowels and consonants.";
const vowels = longString.match(/[aeiouAEIOU]/g)?.length || 0;
const consonants =
  longString.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length ||
  0;
console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);

// question 5

function correctfn(string, wrong, correct) {
  return string.replace(new RegExp(wrong, "g"), correct);
}
console.log(correctfn("I have an apple", "apple", "banana"));

// question 6
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const greaterThanFive = inputArr.filter((num) => num > 5);
console.log(greaterThanFive);

// question 7
const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] },
];

const output = students.map((student) => ({
  name: student.name,
  average:
    student.scores.reduce((sum, score) => sum + score, 0) /
    student.scores.length,
}));
console.log(output);

// question 8
function repeatedSum(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + +digit, 0);
  }
  return num;
}
console.log(repeatedSum(456)); // Output: 6

// question 9
function countWords(paragraph) {
  return paragraph.split(/\s+/).filter((word) => word.length > 0).length;
}
console.log(countWords("This is an example paragraph with multiple words."));

// question 10
function reverseString(input) {
  return input.split("").reverse().join("");
}
console.log(reverseString("Hello"));

// question 11
const studentsData = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
};

const averages = Object.entries(studentsData).map(([student, subjects]) => ({
  [student]: {
    average:
      Object.values(subjects).reduce((sum, marks) => sum + marks, 0) /
      Object.values(subjects).length,
  },
}));
console.log(averages);
