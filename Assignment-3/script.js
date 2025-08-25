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



//? Q3. Count the Vowels
function countVowel(string) {
  const vowels = "aeiou";
  let count = 0;
  for (let ch of string.toLowerCase()) {
    if (vowels.includes(ch)) count++;
  }

  return count;
}


//? Q4. Concatenate the Strings
function concatenateString(string1, string2) {
  let newString = string1.concat(string2);
  return newString;
}

let firstName = "Diwaker ";
let lastName = "Kanojia";
let fullName = concatenateString(firstName, lastName);
console.log(`String After concatenate : ${fullName}`);

let count = countVowel("Diwaker");
console.log(`Count of vowels : ${count}`);


//? Q5. Find Length
function findLength(string) {
  let countLength = 0;
  string.split("").forEach((element) => countLength++);
  return countLength;
}

let stringLength = findLength("Hello, my name is Diwaker");
console.log(`Length of String : ${stringLength}`);


//? Q6. Find the Winner
function findTheWinner(string) {
  let countForAditya = 0;
  let countForDanish = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "A") {
      countForAditya++;
    } else {
      countForDanish++;
    }
  }
  return countForAditya > countForDanish
    ? "Aditya"
    : countForAditya === countForDanish
    ? "Draw"
    : "Danish";
}

let winner = findTheWinner("ADDAAADDDDD");
console.log(winner);
