// Input: nums = [1, 0, 2, 1, 0]

// Output: [0, 0, 1, 1, 2]

// start=0;
// middle=0;
// high=arr.length-1

// 1->middle+;
// 0->swap krega start,middle se
// 2-> swap middle to high

const sortZeroOne = (nums) => {
  let start = 0;
  let middle = 0;
  let high = nums.length - 1;

  while (middle < high) {
    if (nums[middle] == 0) {
      [nums[start], nums[middle]] = [nums[middle], nums[start]];
      start++;
      middle++;
    } else if (nums[middle] == 1) {
      middle++;
    } else {
      [nums[middle], nums[high]] = [nums[high], nums[middle]];
      high--;
    }
  }
  return nums;
};
console.log(sortZeroOne([1, 0, 2, 1, 0]));
