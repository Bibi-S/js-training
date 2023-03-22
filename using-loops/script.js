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
    return true;
  } else {
    false;
  }
}
////////////call the function
console.log(isString("Hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));
console.log(isString([4]));
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
  for (let index = firstNum; index <= secondNum; index++) {
    if (index % 2 !== 0 && index >= 0) {
      newOdd += index + ",";
    }
  }
  return newOdd.substring(0, newOdd.length - 1);
}

console.log(oddNumbers(-5, 10));

/////// charCount function
function charCount(strWord, charWord) {
  let countChar = 0;
  for (let index = 0; index < strWord.length; index++) {
    if (charWord === strWord[index]) {
      countChar++;
    }
  }
  return countChar;
}
console.log(charCount("hello", "l"));
console.log(charCount("mama", "m"));
console.log(charCount("Resümee", "e"));

//ARRAYS

////// removeItem function

function removeItem(paramArr, numArr) {
  //let paramArr; //kann ich hier paraArr = []; definieren?
  const paramArrCopy = structuredClone(paramArr);
  paramArrCopy.splice(numArr - 1, 1);

  return paramArrCopy;
}
const animals = ["Dog", "Cat", "Lion"];
console.log(removeItem(animals, 1));

///////sumOfCharacters function

function sumOfCharacters(arr) {
  let arrChar = 0;
  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "string") {
      arrChar += arr[index].length;
    }
  }
  return arrChar;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

function whatday(num) {
  //console.log(num);
  let result;
  const weekdays = [
    ["Sunday", 1],
    ["Monday", 2],
    ["Tuesday", 3],
    ["Wednesday", 4],
    ["Thursday", 5],
    ["Friday", 6],
    ["Saturday", 7],
  ];

  for (let i = 0; i < weekdays.length; i++) {
    const currentDay = weekdays[i];
    //console.log(currentDay);
    typeof currentDay[1] == "number";
    typeof currentDay[0] == "string";
    if (num === currentDay[1]) {
      result = currentDay[0];
    } else if (num < 1 || num > 7) {
      result = "Wrong, please enter a number between 1 and 7";
    }
  }
  return result;
}
console.log(whatday(1));
console.log(whatday(2));
console.log(whatday(3));
console.log(whatday(8));
console.log(whatday(20));
