// obj.test2(2).method2().print();

let computeAmount = function () {
  let amount = 2;

  let add = function (data) {
    amount += data;
    return this;
  };
  let subtract = function (num) {
    amount -= num;
    return this;
  };
  let value = function () {
    return amount;
  };
  return { add, subtract, value };
};

console.log(computeAmount().add(20).subtract(15).value());
