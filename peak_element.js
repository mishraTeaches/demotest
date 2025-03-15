const data = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];

// function find_peak(data) {
//   for (let i = 0; i < data.length; i++) {
//     if (
//       (i == 0 || data[i] > data[i + 1]) &&
//       (i == data.length - 1 || data[i] > data[i - 1])
//     ) {
//       return data[i];
//     }
//   }
// }
// console.log(find_peak(data));
// using BINARY SEARCH

// function find_peak(data) {
//   let n = data.length;
//   if (n == 1) return 0;
//   if (data[0] > data[1]) return 0;
//   if (data[n - 1] > data[n - 2]) return n - 1;
//   let low = 1;
//   let high = n - 2;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (data[mid - 1] < data[mid] && data[mid] > data[mid + 1]) return mid;
//     if (data[mid] > data[mid - 1]) low = mid + 1;
//     else high = mid - 1;
//   }
//   return -1;
// }

const findPeakElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2); // Find the middle index
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1; // Move to the right half
    } else {
      right = mid; // Move to the left half
    }
  }

  return left; // Return the index of the peak element
};

// // Test cases
// console.log(findPeakElement([1, 2, 3, 1])); // Output: 2
// console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // Output: 5
// console.log(findPeakElement([1])); // Output: 0
// console.log(findPeakElement([1, 2])); // Output: 1
// console.log(findPeakElement([2, 1])); // Output: 0
// console.log(find_peak(data));

console.log(findPeakElement([1, 2, 3, 4, 5, 6, 7, 8, 5, 1]));
