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

  for (let index = firstNum; index <= secondNum; index++) {
    //let allNum = index;
    //console.log(allNum);
    if (index % 2 !== 0 && index >= 0) {
      /*  kann man als 2.Bedienung schreiben: && index === Math.abs(index)?? */
      newOdd = index;
      console.log(newOdd);
    }
  }
}
console.log(oddNumbers(-10, 5));

// charCount function

function charCount(strWord, charWord) {
  //let strWord = "string";
  //let charWord = "string";
  for (let index = strWord[0]; index <= strWord.length; index++) {
    //let charaWord = index;
    if (charWord === index) {
      let countChar = index++;

      console.log(countChar);
    }
  }
}
console.log(charCount("mama", "m"));
