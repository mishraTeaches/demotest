// Array.prototype.customFlatInPlace = function (depth = 1) {
//   let i = 0;

//   while (i < this.length) {
//     if (Array.isArray(this[i]) && depth > 0) {
//       // Recursively flatten nested arrays
//       this.splice(i, 1, ...this[i]); // Flatten by "splicing" the array
//       depth--;
//     } else {
//       i++;
//     }
//   }

//   return this;
// };

let ar = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];

function flatten(ar, depth) {
  for (let i = 0; i < ar.length; i++) {
    if (depth > 0 && Array.isArray(ar[i])) {
      ar.splice(i, 1, ...ar[i]);
      depth--;
    }
  }
  return ar;
}
console.log(flatten([1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]], 2));
