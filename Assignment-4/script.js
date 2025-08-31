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
