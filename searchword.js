const ar = ["abc", "plsabc"];

const res = (data) => {
  for (let i = 1; i < data.length; i++) {
    if (data[i].includes(data[0])) return true;
  }
  return false;
};
console.log(res(ar));
