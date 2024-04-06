// const ar=[2,3,1,4,5,8,6]; d=2;left

const arryShift = (arr, d) => {
  let temp = [];
  for (let j = 0; j < d; j++) {
    temp.push(arr[j]);
  }
  for (let i = d; i < arr.length; i++) {
    arr[i - d] = arr[i];
  }
  for (let i = arr.length - d; i < arr.length; i++) {
    arr[i] = temp[i - (arr.length - d)];
  }
  return arr;
};
console.log(arryShift([2, 3, 1, 4, 5, 8, 6], 4));
