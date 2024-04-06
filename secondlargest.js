//const ar = [3, 42, 2, 7, 8, 1];

const secondLargest = (arr) => {
  let largest = arr[0];
  let seclar = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      seclar = largest;
      largest = arr[i];
    } else {
      if (arr[i] > seclar && arr[i] !== largest) {
        seclar = arr[i];
      }
    }
  }
  return seclar;
};

console.log(secondLargest([3, 42, 2, 7, 8, 1, 43, 43, 4]));
