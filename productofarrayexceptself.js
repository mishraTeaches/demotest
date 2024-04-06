function productArrayExceptSelf(nums) {
  let left = new Array(nums.length);
  // Array to store all right multiplication
  let right = new Array(nums.length);

  left[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  right[nums.length - 1] = 1;
  for (let i = nums.length - 2; i > -1; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  let ans = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    ans[i] = left[i] * right[i];
  }

  return ans;
}
console.log(productArrayExceptSelf([1, 2, 3, 4]));
