Array.prototype.customMap = function (callback) {
  // Create a new array to store the results
  const result = [];

  // Iterate over the array
  for (let i = 0; i < this.length; i++) {
    // Apply the callback to each element and push the result to the new array
    result.push(callback(this[i], i, this));
  }

  // Return the new array
  return result;
};

// Example usage
const data = [1, 2, 3].customMap((res) => res + 2);
console.log(data); // Output: [3, 4, 5]
