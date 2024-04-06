function binarySearch(arr, target) {
  let low = 0; //left
  let high = arr.length - 1; // right

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
}
console.log(binarySearch([1, 2, 3, 6, 9, 11], 6));
