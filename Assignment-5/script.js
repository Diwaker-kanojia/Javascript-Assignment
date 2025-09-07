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
