var myObject = {
  foo: "bar",
  func: function () {
    var self = this;
    console.log("before");
    (function () {
      console.log("this", this === globalThis);
      // console.log("self", self);
      // console.log("inner func:this.foo=" + this.foo);
      // console.log("inner func:self.foo=" + self.foo);
    })();
  },
};
myObject.func();
