function reduce(nums, fn, init) {
  // Initialize the accumulator with the initial value
  let accum = init;

  // Iterate over each element in the array
  for (let i = 0; i < nums.length; i++) {
    // Update the accumulator by applying the function
    accum = fn(accum, nums[i]);
  }

  // Return the final value of the accumulator
  return accum;
}

// Example usage
const nums = [1, 2, 3, 4];
const fn = function sum(accum, curr) {
  return accum + curr;
};
const init = 0;

console.log(reduce(nums, fn, init)); // Output: 10
