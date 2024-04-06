const ar = [1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1];

const consecutive = (arr) => {
  let count = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      count++;
      max = Math.max(max, count);
    } else {
      count = 0;
    }
  }
  return max;
};
console.log(consecutive([1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1]));
