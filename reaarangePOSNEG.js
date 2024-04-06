//const ar = [2, 2, -5, 1, 6, -8, -9];

const rearrange = (arr) => {
  let plus = 0;
  let neg = 1;
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      ans[neg] = arr[i];
      neg += 2;
    } else {
      ans[plus] = arr[i];
      plus += 2;
    }
  }
  return ans;
};
console.log(rearrange([1, 2, -4, -5]));
