// const arr=[-2,-3,4,-1,-2,1,5,-3];

const maxSubArray = (arr) => {
  let max = -1;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }
  return max;
};

// console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));

// KADANE'S ALGORITHM

// const maxSub = (arr) => {
//   let sum = 0;
//   let max = -1;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     if (sum < 0) {
//       sum = 0;
//     }
//     if (sum > max) {
//       max = sum;
//     }
//   }
//   return max;
// };
console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]));
// [-4,-2,-3,-1]
