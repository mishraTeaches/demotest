const findMin = (nums) => {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    // If the middle element is greater than the last element,
    // the minimum is in the right part of the array
    if (nums[mid] > nums[high]) {
      low = mid + 1;
    } else {
      // Otherwise, the minimum is in the left part (including mid)
      high = mid;
    }
  }

  return nums[low]; // The minimum element is at index low
};

console.log(findMin([3, 4, 5, 1, 2])); // Output: 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Output: 0
console.log(findMin([11, 13, 15, 17])); // Output: 11
