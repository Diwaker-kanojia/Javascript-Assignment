//?  Q1. Find the Product.
const findProduct = (arr) => {
  return arr.reduce((acc, value) => acc * value, 1);
};

const product = findProduct([1, 2, 3, 4, 5]);
console.log(product);


//?  Q2. Find the Sum.
const findSum = (arr) => arr.reduce((acc, value) => acc + value, 0);

const sum = findSum([1, 2, 3, 4, 5]);
console.log(sum);


//? Q3. Find the Occurrance.
const findOccurance = (arr, key) => {
  return arr.filter((item) => item === key).length;
};

const countOfOccurance = findOccurance([1, 2, 3, 2, 3, 5, 8, 3, 3], 3);
console.log(countOfOccurance);


//? Q4. Find sum even or odd.
const sumEvenOrOdd = (arr) => {
  let count = [0, 0];
  for (const number of arr) {
    if (number % 2 === 0) {
      count[0] += number;
    } else {
      count[1] += number;
    }
  }

  return count;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const evenOrOdd = sumEvenOrOdd(arr);
console.log(`Sum of all Even Element : ${evenOrOdd[0]}`);
console.log(`Sum of all Odd Element : ${evenOrOdd[1]}`);


//? Q5. Find whether the number is present or not.
const findNumInlcude = (arr, target) => {
  if (arr.includes(target)) {
    return "Yes";
  }
  return "No";
};

let number = [10, 20, 30, 40, 50];
let isAvailable = findNumInlcude(number, 20);
console.log(isAvailable);

