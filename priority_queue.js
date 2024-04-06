const arr = [2, 1, 4, 5, 10];
const pquq = () => {
  for (let i = 0; i < arr.length; i++) {
    if (i === 2) {
      arr.splice(i, 1);
    }
  }
  return arr;
};
console.log(pquq());
