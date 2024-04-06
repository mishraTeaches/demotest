const obj = {
  name: "Billy",
  sing: () => {
    this.age = "20";
    console.log("a", this);
    var anotherFunction = function () {
      this.age = "30";
      console.log("b", this === global);
    };
    anotherFunction();
  },
};
obj.sing();
