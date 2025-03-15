function wordBreak(s, wordDict) {
  const wordSet = new Set(wordDict); // Convert the dictionary to a set for faster lookup
  const dp = Array(s.length + 1).fill(false); // Initialize dp array, dp[0] will be true
  dp[0] = true; // An empty string can always be segmented

  for (let i = 1; i <= s.length; i++) {
    console.log("dp[i]" + i, dp[i]);
    for (let j = 0; j < i; j++) {
      console.log("dp[j]" + j, dp[j]);
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        console.log(s.substring(j, i));
        dp[i] = true;
        break; // No need to check further if we found a valid segmentation
      }
    }
  }

  return dp[s.length]; // Return whether the entire string can be segmented
}

// Example usage:
const s = "catsandog";
const wordDict = ["cats", "dog", "sand", "and", "cat"];
wordBreak(s, wordDict); // Output: true
