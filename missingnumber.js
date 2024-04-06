const ar = [1, 2, 3, 4, 5, 6, 8];
const missing = (ar) => {
  let missingnumber = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] - ar[i - 1] > 1) {
      missingnumber = ar[i - 1] + 1;
    }
  }
  return missingnumber;
};

console.log(missing([1, 2, 3, 4, 5, 6, 8]));
