// Input: nums = [1, 2, 4]
// Output: 5
const arr = [2, 1, 4, 9];
const sum = (arr, n) => {
  if (n == 0) return arr[n];
  if (n < 0) return 0;
  const pick = arr[n] + sum(arr, n - 2);
  const notpick = 0 + sum(arr, n - 1);
  return Math.max(pick, notpick);
};

// DP APPROACH.
class Solution {
  helper(nums, index, dp) {
    if (index == 0) return nums[index];
    if (index < 0) return 0;
    if (dp[index]) return dp[index];
    let pick = nums[index] + this.helper(nums, index - 2, dp);
    let notpick = 0 + this.helper(nums, index - 1, dp);
    dp[index] = Math.max(pick, notpick);
    return dp[index];
  }
  nonAdjacent(nums) {
    let dp = {};
    return this.helper(nums, nums.length - 1, dp);
  }
}

console.log(sum(arr, arr.length - 1));
