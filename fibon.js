let data = 5;
const fibo = (num) => {
  if (num <= 1) {
    return num;
  }
  return fibo(num - 2) + fibo(num - 1);
};
let result = fibo(4);

for (let i = 0; i < result; i++) {
  console.log(fibo(i));
}
