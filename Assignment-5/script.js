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

//? Q4.Get the sum of two arrays…actually the sum of all their elements
function sumOfTwoArray(arr1, arr2) {
  return (
    arr1.reduce((acc, value) => acc + value, 0) +
    arr2.reduce((acc, value) => acc + value, 0)
  );
}

let arr_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26];
let sum = sumOfTwoArray(arr_1, arr_2);
console.log(sum);

//? Q5.Using a for loop output the elements in reverse order
function reverseArray(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}
let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
console.log("----- Before Reversing -----");
console.log(arr);
reverseArray(arr);
console.log("----- After Reversing -----");
console.log(arr);
