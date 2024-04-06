// INFINITE CURRYING

// const add = (a) => {
//   if (b) {
//     return a + b;
//   }
//   return (c) => {
//     console.log("c", c, a);
//     if (c) return add(a + c);
//     return a;
//   };
// };
const add = function (a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
};
console.log(add(5)(2)(4)(5)());
//console.log(add(5, 6));
