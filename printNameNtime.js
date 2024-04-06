const print = (i, n) => {
  if (i > n) return;
  i++;
  console.log("ishu mishra");
  print(i, 5);
};
print(1, 5);
