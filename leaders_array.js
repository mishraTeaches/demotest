// const arr=[10,22,12,3,0,6];
const leaders = (arr) => {
  let max = 0;
  let ans = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
    }
    max = Math.max(max, arr[i]);
  }
  return ans;
};

console.log(leaders([10, 22, 12, 3, 0, 6]));
