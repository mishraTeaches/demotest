const remove = (arr) => {
  return [...new Set(arr)];
};
console.log(remove([2, 1, 1, 3, 4, 2]));
