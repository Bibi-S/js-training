//VARIABLES

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  let result = userName.length;
  return result;
}
////////////call the function
console.log(getUserNameLength(userName) > 4);
////////////call the function

function isString(parameter) {
  if (typeof parameter === "string") {
    return "true";
  } else {
    return "false";
  }
}
////////////call the function
console.log(isString("Hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));
console.log(isString([]));
////////////call the function

//CONDITIONAL BLOCKS

//task 01
const size = 25;
let result;

if (size > 10 && size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
//task 02
function oddEven(oneParam) {
  let resultMyNum;
  if (oneParam % 2 === 0) {
    resultMyNum = "even";
  } else {
    resultMyNum = "odd";
  }

  return resultMyNum;
}
console.log(oddEven(-1));
//task 03
function oldYoung(age) {
  let result;

  //if (typeof age !== "number" || age !== Math.abs(age)) {
  //result = "invalid parameter";
  //}
  if (age < 16) {
    result = "child";
  } else if (age < 50) {
    result = "young person";
  } else if (age >= 50) {
    result = "elder person";
  } else if (typeof age !== "number" || age !== Math.abs(age)) {
    result = "invalid parameter";
  }
  return result;
}
console.log(oldYoung(-1));
console.log(oldYoung("x"));
console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(86));
// USING LOOP

//////// oddNumbers function
function oddNumbers(firstNum, secondNum) {
  let newOdd = "";
  for (let index = 0; index <= secondNum; index++) {
    if (index % 2 !== 0 && index >= 0) {
      newOdd += index + ",";
    }
  }
  return newOdd.substring(0, newOdd.length - 1);
}

console.log(oddNumbers(-10, 5));

/////// charCount function
function charCount(strWord, charWord) {
  let countChar = 0;
  for (let index = 0; index <= strWord.length; index++) {
    if (charWord === strWord[index]) {
      countChar++;
    }
  }
  return countChar;
}
console.log(charCount("hello", "l"));
console.log(charCount("mama", "m"));
console.log(charCount("Resümee", "e"));
