// Input: num = "1432219", k = 3
// Output: "1219"
function removalOfKdigit(num, k) {
  let stack = [];
  let removed = 0;
  for (let n of num) {
    while (stack.length && n < stack[stack.length - 1] && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(n);
  }
  while (removed < k) {
    stack.pop();
    removed += 1;
  }
  return stack.join("") || "0";
}

console.log(removalOfKdigit("1432219", 3));
