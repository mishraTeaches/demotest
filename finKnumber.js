const nums = [1, 5, 5, 2, 2, 3];
const k = 2;

const topKFrequent = (nums, k) => {
  const map = new Map(); //! map to count the frequency of the number
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
    // {1:1,5:2,2:2,3:1}
  }
  const result = [];
  for (let [key, value] of map) {
    result.push([key, value]); //! we will add the number and its frequency
  }
  console.log(result);
  result.sort((a, b) => b[1] - a[1]);
  console.log(result);
  //! we will solve with respect to the frequency of the number
  return result.slice(0, k).map((x) => x[0]); //! we will slice the list with respect to length of k
};
console.log(topKFrequent(nums, k));
