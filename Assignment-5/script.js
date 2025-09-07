//? Q1. Write a JavaScript program to construct the following pattern using a nested for loop.
function printPattern(row) {
  for (let i = 1; i <= row; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += "* ";
    }
    console.log(string);
  }
}
printPattern(5);

//? Q2. Iterate through all numbers from 1 to 45. Print the following:
/*
For multiples of 3 print “Fizz”
For multiples of 5 print “Buzz”
For multiples of 3 and 5 print “FizzBuzz” 
*/

function printText() {
  for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
}
printText();

//? Q3. Calculate the sum of all the numbers in the following array

function calculateSum(arr) {
  return arr.reduce((acc, value) => acc + value, 0);
}

var numbersArray = [1, 13, 22, 123, 49];
let total = calculateSum(numbersArray);
console.log(total);
