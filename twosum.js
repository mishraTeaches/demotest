// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

const twoSum = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let third = target - nums[i];
    if (third in obj) {
      return [i, obj[third]];
    }
    obj[nums[i]] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
