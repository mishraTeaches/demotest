const arr = [1, 2, 3, 4, 5];

Array.prototype.customReduce = function (callback, initialValue) {
  // Check if the array is empty and no initial value is provided
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};

const result = arr.customReduce((acc, curr) => acc + curr, 0);

console.log(result);
