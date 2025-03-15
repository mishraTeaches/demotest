Array.prototype.customFilter = function (callback) {
  let filteredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      filteredArray.push(this[i]);
    }
  }
  return filteredArray;
};

const result = [2, 17, 4, 0].customFilter((res) => res > 2);
console.log(result);
