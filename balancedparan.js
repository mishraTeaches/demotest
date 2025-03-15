function isValid(str) {
  let stack = [];
  const bracketPairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // If it's an opening bracket, push onto the stack
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // If it's a closing bracket, check if it matches the last opening bracket
    else if (bracketPairs[char]) {
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets are matched
  return stack.length === 0;
}

// Test cases
// console.log(isValid("([])")); // true
console.log(isValid("[]"));
// console.log(isValid("([)]")); // false
// console.log(isValid("()[]{}")); // true
// console.log(isValid("(]")); // false
// console.log(isValid(")")); // false
