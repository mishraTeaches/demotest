let arr = [1, 2, 3, 4, 5, 6];
try {
  arr.forEach((num) => {
    console.log(num);
    if (num === 4) throw new Error("BreakException");
  });

  // for (let el of arr) {
  //   console.log(el);
  //   if (el === 5) {
  //     break;
  //   }
  // }
} catch (e) {
  console.log("e", e);
  if (e !== "BreakException") throw e;
}
