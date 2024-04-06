// function lengthOfLongestSubstring(s) {
//   const map = {};
//   var left = 0;

//   return s.split("").reduce((total, data, i) => {
//     left = map[data] >= left ? map[data] + 1 : left;
//     map[data] = i;
//     return Math.max(total, i - left + 1);
//   }, 0);
// }
// console.log(lengthOfLongestSubstring("abcabcbb"));

// function lengthOfLongestSubstring(s) {
//   const set = new Set();
//   let maxans = Number.MIN_VALUE;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       if (set.has(s[j])) {
//         maxans = Math.max(maxans, j - i);
//         break;
//       }
//       set.add(s[j]);
//     }
//   }
//   return maxans;
// }
function lengthOfLongestSubstring(s) {
  let maxans = Number.MIN_VALUE;
  const set = new Set();
  let left = 0;
  for (let r = 0; r < s.length; r++) {
    while (left < r && set.has(s[r])) {
      set.delete(s[r]);
      left++;
    }
    set.add(s[r]);
    maxans = Math.max(maxans, r - left + 1);
  }
  return maxans;
}
console.log(lengthOfLongestSubstring("abcaabcd"));
