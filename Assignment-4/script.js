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


//? Q6. Higher Age
const highAgeFunction = (arr) => {
  return arr.filter((age) => age >= 18);
};

const highAge = highAgeFunction([11, 23, 3, 45, 72, 68]);
console.log(highAge);


//? Q7. Increment the Array Elements
const incrementByOne = (arr) => arr.map((num) => num + 1);

let increArray = incrementByOne([1, 2, 3, 4, 5]);
console.log(increArray);


//? Q8. Pass or Fail
function passOrFail(arr) {
  return arr.every((number) => number >= 32) ? "YES" : "NO";
}

let result = passOrFail([23, 89, 45, 98, 67, 45, 54]);
console.log(result);


//? Q9. Unique Color Shirt
function uniqueColorShirt(arr) {
  let M = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }

    if (count === 1) {
      M++;
    }
  }
  return M;
}
let uniqueShirtCount = uniqueColorShirt([3, 2, 4, 1, 2, 3, 8]);
console.log(`Number of Unique shirt : ${uniqueShirtCount}`);


//? Q10. Min and Max
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const arr1 = [66, 33, 11, 44, 66, 22, 77];
let min = findMin(arr1);
let max = findMax(arr1);
console.log("Min. Element : " + min);
console.log("Max. Element : " + max);
