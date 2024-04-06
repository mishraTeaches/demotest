// obj.test2(2).method2().print(); WITH CLOSURE.
var x = function () {
  var i = 4;

  var test2 = function (data) {
    i += data;
    return this;
  };
  var method2 = function () {
    return this;
  };
  var print = function () {
    return i;
  };
  return { test2, method2, print };
};

const obj = x();

console.log(obj.test2(2).method2().print());
