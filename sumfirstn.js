let result = 0;
const sum = (i, n) => {
  if (i > n - 1) {
    console.log("ans", result);
    return;
  }
  i++;
  result += i;
  sum(i, n);
};
sum(0, 6);
