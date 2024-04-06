const longest = (arr, k) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k < j; k++) {
        sum += arr[k];
      }
      if (sum === k) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
};
console.log(longest([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3));
