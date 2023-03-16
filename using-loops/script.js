function oddNumbers(firstNum, secondNum) {
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
console.log(oddNumbers(-10, 2));
