// Given a string s , consisting only of characters 'a' , 'b' , 'c'.
// Find the number of substrings that contain at least one occurrence of all these characters 'a' , 'b' , 'c'.

class Solution {
  numberOfSubstrings(s) {
    let count = 0;
    let freq = { a: 0, b: 0, c: 0 };
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      freq[s[right]]++;

      // Shrink the window from the left when all 'a', 'b', 'c' are present
      while (freq["a"] > 0 && freq["b"] > 0 && freq["c"] > 0) {
        console.log("before[s[left]]", s[left]);
        count += s.length - right; // All substrings from left to end are valid
        freq[s[left]]--;
        console.log("after[s[left]]--", s[left]);
        left++;
        console.log("after left++", left);
      }
    }

    return count;
  }
}

let s = "bbacba";
let sol = new Solution();
console.log(
  `Number of substrings containing 'a', 'b', 'c' in "${s}" is: ${sol.numberOfSubstrings(
    s
  )}`
);
