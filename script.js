// @ts-check

console.log("Barbara");
console.log("B" + "a" + "r" + "b" + "a" + "r" + "a");

// Error! Make it work
console.log("Hallo");
// Error! Make it work
console.log('That doesn"t work');
// should return true. Change only the operator to fix it.
console.log(50 + 2 >= 52);
// should be false. Change only the operator to fix it.
console.log("333" === 333);
// Wrong result: Expected 555 not 855. Change only the operator to fix it.
console.log((600 + 510) / 2);
// Wrong result: Expected a Number 4 received 22
console.log(2 + 2);
console.log(25 / 5 === 5 && 50 / 10 === 5);

//Functions
function welcomeMsg(personName) {
  if (typeof personName === "string" && personName.length > 1) {
    return "Welcome " + personName + "!";
  } else {
    return personName + " is not a name ";
  }
}

console.log(welcomeMsg("Marc"));
console.log(welcomeMsg("x"));

function calcGrossPrice(netPrice, taxRate) {
  const grossPrice = netPrice + netPrice * taxRate;
  return grossPrice;
}
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

function addPositive(first, second) {
  const result = Math.abs(first) + Math.abs(second);
  return result;
}
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
console.log(addPositive(-1.5, -7));
console.log(addPositive("-1.5", "-7"));
console.log(addPositive("foo", "-bar"));
