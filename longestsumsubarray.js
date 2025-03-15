// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

const longest = (arr, k) => {
  let max = 0;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end]; // Add the current element to the sum

    // Shrink the window if sum exceeds k
    while (sum > k) {
      sum -= arr[start]; // Subtract the element at the start of the window
      start++;
    }

    // Check if sum equals k
    if (sum === k) {
      max = Math.max(max, end - start + 1); // Update the max length of the subarray
    }
  }

  return max;
};

console.log(longest([1, 2, 3, 2, 1, 1, 1, 1, 5, 2, 3], 3));
