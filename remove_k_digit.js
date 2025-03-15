// Input: num = "1432219", k = 3
// Output: "1219"

function removalOfKdigit(num, k) {
  let stack = [];

  for (let digit of num) {
    // While we need to remove digits, and the current digit is smaller than the last one in the stack, pop the stack
    while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }

    // Add the current digit to the stack
    stack.push(digit);
  }

  // If we still need to remove digits, remove from the end of the stack
  // if (k > 0) {
  stack = stack.slice(0, stack.length - k);
  // }

  // Convert the stack to a string and remove leading zeros
  let result = stack.join("").replace(/^0+/, "");

  // If the result is empty, return '0'
  return result === "" ? "0" : result;
}

console.log(removalOfKdigit("1432219", 1));
