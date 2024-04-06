const poly9 = (data) => {
  let num = data.toString();
  for (let i = 0, j = num.length - 1; i <= j; i++, j--) {
    if (num[i] !== num[j]) return false;
    return true;
  }
};

console.log(poly9("momi"));
