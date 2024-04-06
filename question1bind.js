// var naming = "mishra";
// let user = {
//   name: "ishu",
//   hi: function () {
//     return this;
//   },
// };

// let hi = user.hi.bind(user);
// // let username = hi();
// console.log(hi);

let a = {
  name: "ishu",
  hi: function (location) {
    return this.name + "-" + location;
  },
};

let b = {
  name: "rahul",
};

let data = a.hi.bind(b);
