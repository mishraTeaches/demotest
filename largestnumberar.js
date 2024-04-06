// let ar=[2,1,3,4];
const largest = (arr) => {
  let lar = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lar) {
      lar = arr[i];
    }
  }
  return lar;
};

console.log(largest([2, 1, 3, 4, 8, 7, 10, 50]));
