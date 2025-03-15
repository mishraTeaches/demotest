// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and
// j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// function triplet(n, arr) {
//   let st = new Set();
//   let ans = [];

//   // check all possible triplets:
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (arr[i] + arr[j] + arr[k] === 0) {
//           let temp = [arr[i], arr[j], arr[k]];
//           temp.sort();
//           ans.push(temp);
//         }
//       }
//     }
//   }

//   //store the set in the answer:
//   let set = new Set(ans.map(JSON.stringify));
//   console.log(set);
//   ans = Array.from(set).map(JSON.parse);
//   return ans;
// }

// let arr = [-1, 0, 1, 2, -1, -4];
// let n = arr.length;
// let ans = triplet(n, arr);
// for (let it of ans) {
//   for (let i of it) {
//     // console.log(i);
//   }
// }

// OPTIMAL VERSION......

// class Solution {
//   threeSum(nums, target) {
//       let result = [];
//       let n = nums.length;

//       // Sort the array to use the two-pointer approach
//       nums.sort((a, b) => a - b);

//       for (let i = 0; i < n - 2; i++) {
//           // Skip duplicates for the first element
//           if (i > 0 && nums[i] === nums[i - 1]) continue;

//           let left = i + 1;
//           let right = n - 1;

//           while (left < right) {
//               const sum = nums[i] + nums[left] + nums[right];

//               if (sum === target) {
//                   result.push([nums[i], nums[left], nums[right]]);
//                   // Skip duplicates for the second element
//                   while (left < right && nums[left] === nums[left + 1]) left++;
//                   // Skip duplicates for the third element
//                   while (left < right && nums[right] === nums[right - 1]) right--;
//                   left++;
//                   right--;
//               } else if (sum < target) {
//                   left++;
//               } else {
//                   right--;
//               }
//           }
//       }

//       return result;
//   }
// }

// class Solution {
//   threeSum(nums) {
//       let result = [];
//       let n = nums.length;

//       // Sort the array to easily find duplicates
//       nums.sort((a, b) => a - b);

//       for (let i = 0; i < n - 2; i++) {
//           // Skip duplicates
//           if (i > 0 && nums[i] === nums[i - 1]) continue;

//           for (let j = i + 1; j < n - 1; j++) {
//               // Skip duplicates
//               if (j > i + 1 && nums[j] === nums[j - 1]) continue;

//               for (let k = j + 1; k < n; k++) {
//                   if (nums[i] + nums[j] + nums[k] === 0) {
//                       result.push([nums[i], nums[j], nums[k]]);
//                   }
//               }
//           }
//       }

//       return result;
//   }
// }

function threeSum(nums) {
  const result = [];
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements for the first element
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);

        // Skip duplicate elements for the second element
        while (left < right && nums[left] === nums[left + 1]) left++;
        // Skip duplicate elements for the third element
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++; // Move left pointer to increase the sum
      } else {
        right--; // Move right pointer to decrease the sum
      }
    }
  }

  return result;
}
