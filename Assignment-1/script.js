//? Q1. Add Two Number
function addTwoNumber(a, b) {
  return a + b;
}

const sum = addTwoNumber(2, 5);
console.log(sum);

//? Q2. Find if the conditions are obeyed or not?
function checkCondition(a, b) {
  return a < 10 && a > b;
}

const conditionResult = checkCondition(5, 3);
console.log(conditionResult);

//? Q3.Check the conditions
// You are given two numbers A and B. You need to do the following checks:
// 1.	if both are divisible by 10 console true.
// 2.	if both are not divisible by 10 console false. 3. if one of them only is divisible by 10 console true.

function checkDivisibility(a, b) {
  if (a % 10 === 0 && b % 10 === 0) {
    console.log(true);
  } else if (a % 10 !== 0 && b % 10 !== 0) {
    console.log(false);
  } else if (a % 10 === 0 || b % 10 === 0) {
    console.log(true);
  }
}

checkDivisibility(12, 20);

//? Q4.Find the first digit of a 4 digit number
function firstDigit(number) {
  return Math.floor(number / 1000);
}

let digit = 5678;
console.log(firstDigit(digit));

//? Q5.Find the last digit of a 4 digit number
function lastDigit(number) {
  return number % 10;
}

let number = 4321;
console.log(lastDigit(number));

//? Q6. Find the remainder
function findRemainder(a, b) {
  return b % a;
}
console.log(findRemainder(2, 10));

//? Q7.Multiply two Numbers
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 5));

//? Q8. Marks Calculator
function calculateMarks(sub1, sub2, sub3) {
  let totalMarks = sub1 + sub2 + sub3;
  let percentage = totalMarks / 3;
  console.log("Total Marks : " + totalMarks);
  console.log("Percentage : " + percentage);
}


calculateMarks(50,20,100);
