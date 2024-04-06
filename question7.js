// function test() {
//   return new Promise(function (resolve, reject) {
//     throw new Error("Whoops");
//   })
//     .catch(function (error) {
//       console.log("error detected");
//     })
//     .then(function () {
//       console.log("Next...");
//     });
// }
// test.then(function () {
//   console.log("Promise execution completes");
// });

const promise = new Promise((resolve, reject) => {
  resolve("successs");
});
promise.then((val) => {
  console.log(val);
});
