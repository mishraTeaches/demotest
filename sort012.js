// DUTCH NATIONAL FLAG

const data = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
const sortNumbers = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] == 0) {
      const { a, b } = swap(arr[low], arr[mid]);
      arr[low] = a;
      arr[mid] = b;
      low++;
      mid++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      const { a, b } = swap(arr[mid], arr[high]);
      arr[mid] = a;
      arr[high] = b;
      high--;
    }
  }
  return arr;
};

const swap = (a, b) => {
  let temp = a;
  a = b;
  b = temp;
  return { a, b };
};

console.log(sortNumbers(data));
