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


