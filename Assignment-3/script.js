//? Q1. Count Character
function countCharacters(string) {
  let b = [0, 0];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "A") {
      b[0]++;
      continue;
    }
    if (string[i] === "D") {
      b[1]++;
    }
  }

  return b;
}
let array = countCharacters("ADaDd");
console.log(`Count of A : ${array[0]}`);
console.log(`Count of D : ${array[1]}`);
