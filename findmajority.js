// FIND MAJORITY ELEMENT > N/2
// USING HASHING

// const findMajority = (arr) => {
//   const map = new Map();
//   const arr_length_div2 = Math.floor(arr.length / 2);
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       let count = map.get(arr[i]);
//       map.set(arr[i], count + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }
//   for (let [key, value] of map.entries()) {
//     if (value > arr_length_div2) {
//       return key;
//     }
//   }
// };
// console.log(findMajority([2, 2, 1, 3, 1, 1, 3, 1, 1]));

// MOORE'S ALGORITHM
const majority = (arr) => {
  let count = 0;
  let el;
  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      count = 1;
      el = arr[i];
    } else if (arr[i] == el) {
      count++;
    } else {
      count--;
    }
  }
  let count1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      count1++;
    }
  }
  if (count1 > Math.floor(arr.length / 2)) {
    return el;
  }
};
console.log(majority([2, 2, 1, 3, 1, 1, 2, 2, 2]));
