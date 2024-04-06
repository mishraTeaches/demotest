const data = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

const searchIn = (arr, target) => {
  let n = arr.length; // HOW MANY ROWS IN 2D.
  let m = arr[0].length; // columns count of 1st row;
  let low = 0,
    high = n * m - 1;

  while (low <= high) {
    let mid = (low + high) / 2;

    //FIND ROW-INDEX,COL-INDEX as we are trying to convert 2D into 1D , as we can easily search in 1D using BINARY SEARCH.
    const row = Math.floor(mid / m); //(middle-value / column);
    const column = Math.floor(mid % m);
    if (arr[row][column] == target) return true;
    else if (arr[row][column] < target) low = mid + 1;
    else high = mid - 1;
  }
  return false;
};

console.log(
  searchIn(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    19
  )
);
