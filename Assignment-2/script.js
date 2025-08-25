//? Q1. Find Grades
function findGrades(marks) {
  switch (true) {
    case marks > 50:
      return "Invalid";
    case marks >= 41:
      return "A";
    case marks >= 31:
      return "B";
    case marks >= 21:
      return "C";
    case marks >= 11:
      return "D";
    case marks >= 0:
      return "E";
    default:
      return "Invalid !!";
  }
}

let grade = findGrades(98);
console.log(`Grade : ${grade}`);

//? Q2. Get Values
function getValue(char) {
  let newChar = char.toLowerCase();
  switch (newChar) {
    case "p":
      return "PrepBytes";
    case "z":
      return "Zenith";
    case "e":
      return "ExpertCoder";
    case "d":
      return "Data Structure";
    default:
      return "[p,P,z,Z,e,E,d,D]";
  }
}

let text = getValue("C");
console.log(text);

//? Q3. Find maximum out of three numbers

function findMax(a, b, c) {
  if (a === b && b === c) {
    return -1;
  }

  if (a > b && a > c) {
    return a;
  }

  if (b > c) {
    return b;
  }
  return c;
}

let maxNumber = findMax(1, 1, 1);
console.log(maxNumber);

//? Q4. Find second largest number
function findSecondLargest(a, b, c) {
  let max = Math.max(a, b, c);
  let min = Math.min(a, b, c);
  return a + b + c - max - min;
}
let secondLargest = findSecondLargest(10, 20, 30);
console.log(`Second Largest : ${secondLargest}`);

//? Q5. Find angle
function findAngle(a, b, c) {
  let sum = a + b + c;
  if (sum > 0 && sum < 90) {
    return "Acute Angle Triangle";
  }
  if (angle > 90 && angle < 180) {
    return "Obtuse Angle Triangle";
  }
}

let angle = findAngle(120);
console.log(angle);
