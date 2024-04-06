const data = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];

// function find_peak(data) {
//   for (let i = 0; i < data.length; i++) {
//     if (
//       (i == 0 || data[i] > data[i + 1]) &&
//       (i == data.length - 1 || data[i] > data[i - 1])
//     ) {
//       return data[i];
//     }
//   }
// }
// console.log(find_peak(data));
// using BINARY SEARCH

function find_peak(data) {
  let n = data.length;
  if (n == 1) return 0;
  if (data[0] > data[1]) return 0;
  if (data[n - 1] > data[n - 2]) return n - 1;
  let low = 1;
  let high = n - 2;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (data[mid - 1] < data[mid] && data[mid] > data[mid + 1]) return mid;
    if (data[mid] > data[mid - 1]) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
console.log(find_peak(data));
