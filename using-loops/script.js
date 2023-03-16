//Variables

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  let result = userName.length;
  return result;
}

console.log(getUserNameLength(userName) > 4);

function isString(parameter) {
  if ((parameter = "string")) {
    let newVar = parameter;
    console.log(parameter);
  }

  return;
}

//Conditional blocks

// Using loops tasks

function oddNumbers(firstNum, secondNum) {
  // oddNumbers function
  let newOdd = "";
  for (let index = 0; index <= secondNum; index++) {
    //let allNum = index;
    //console.log(allNum);
    if (index % 2 !== 0 && index >= 0) {
      /*  kann man als 2.Bedienung schreiben: && index === Math.abs(index)?? */
      newOdd += index + ",";
      //console.log(newOdd);
    }
  }

  return newOdd.substring(0, newOdd.length - 1);
}
console.log(oddNumbers(-10, 5));

// charCount function

function charCount(strWord, charWord) {
  //let strWord = "string";
  //let charWord = "string";
  let countChar = 0;
  for (let index = 0; index <= strWord.length; index++) {
    // console.log(index);
    if (charWord === strWord[index]) {
      countChar++;
      //console.log(countChar);
    }
  }
  return countChar;
}
console.log(charCount("mama", "m"));
