let nums = [100, 4, 200, 1, 3, 2];
//output=4 // longest sequence (1,2,3,4)

// BRUTE FORCE

// function linearSearch(nums, currentElement) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === currentElement) {
//       return true;
//     }
//   }
//   return false;
// }
// function longestConsecutive(nums) {
//   let longest = 1;
//   for (let i = 0; i < nums.length; i++) {
//     let x = nums[i];
//     let count = 1;
//     while (linearSearch(nums, x + 1)) {
//       x += 1;
//       count += 1;
//     }
//     longest = Math.max(longest, count);
//   }
//   return longest;
// }
// console.log(longestConsecutive(nums));

// BETTER APPROACH

// function longestConsecutive(nums) {
//   let n = nums.length;

//   // Return 0 if array is empty
//   if (n === 0) return 0;

//   nums.sort((a, b) => a - b);

//   // Track last smaller element
//   let lastSmaller = -Infinity;
//   // Count current sequence length
//   let cnt = 0;
//   // Track longest sequence length
//   let longest = 1;

//   for (let i = 0; i < n; i++) {
//     // If consecutive number exists
//     if (nums[i] - 1 === lastSmaller) {
//       // Increment sequence count
//       cnt += 1;
//       // Update last smaller element
//       lastSmaller = nums[i];
//     }
//     // If consecutive number doesn't exist
//     else if (nums[i] !== lastSmaller) {
//       // Reset count for new sequence
//       cnt = 1;
//       // Update last smaller element
//       lastSmaller = nums[i];
//     }
//     // Update longest if needed
//     longest = Math.max(longest, cnt);
//   }
//   return longest;
// }

// OPTIMAL

class Solution {
  longestConsecutive(nums) {
    let n = nums.length;
    // If the array is empty
    if (n === 0) return 0;

    // Initialize the longest sequence length
    let longest = 1;
    let st = new Set();

    // Put all the array elements into the set
    for (let i = 0; i < n; i++) {
      st.add(nums[i]);
    }

    // Traverse the set to find the longest sequence
    for (let it of st) {
      // Check if 'it' is a starting number of a sequence
      if (!st.has(it - 1)) {
        // Initialize the count of the current sequence
        let cnt = 1;
        // Starting element of the sequence
        let x = it;

        // Find consecutive numbers in the set
        while (st.has(x + 1)) {
          // Move to the next element in the sequence
          x = x + 1;
          // Increment the count of the sequence
          cnt = cnt + 1;
        }
        // Update the longest sequence length
        longest = Math.max(longest, cnt);
      }
    }
    return longest;
  }
}

//Sample array
const a = [100, 4, 200, 1, 3, 2];
// Create an instance of the solution class
const solution = new Solution();
// Function call to find the longest consecutive sequence
const ans = solution.longestConsecutive(a);
console.log("The longest consecutive sequence is " + ans);

console.log(longestConsecutive([1, 2, 3]));
