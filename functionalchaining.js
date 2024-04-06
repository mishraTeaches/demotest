// obj.test2(2).method2().print();

var obj = function () {
  this.i = 2;

  this.test2 = function (data) {
    this.i += data;
    return this;
  };
  this.method2 = function () {
    console.log("method2");
    return this;
  };
  this.print = function () {
    return this.i;
  };
};

console.log(new obj().test2(2).method2().print());
