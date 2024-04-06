const arr = [4, 0, 3, 5, 0, 1, 2, 9];

function pushZeroesEnd(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      a[count] = a[i];
      count++;
    }
  }
  while (count < a.length) {
    a[count++] = 0;
  }
  return a;
}
console.log(pushZeroesEnd(arr));
