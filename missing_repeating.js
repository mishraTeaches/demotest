const data = [2, 3, 1, 4, 2, 5];
n = 6;
let repeating;
let missing;
for (let i = 1; i <= n; i++) {
  let count = 0;
  for (let j = 0; j < n; j++) {
    if (data[j] === i) {
      count++;
    }
  }
  if (count == 0) {
    missing = i;
  }
  if (count == 2) {
    repeating = i;
  }
}
console.log(missing, repeating);
