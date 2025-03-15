const mary = {
  name: "Mary",
  city: "Mumbai",
};

const heera = {
  name: "Heera",
  city: "luckhnow",
};

function myName(obj) {
  return this.name + this.city;
}

Function.prototype.myCall = function (callingObj, ...args) {
  let uniqueKey = Symbol("fn");
  callingObj[uniqueKey] = this;
  let result = callingObj[uniqueKey](...args);
  delete callingObj[uniqueKey];
  return result;
};

console.log(myName.myCall(mary));
