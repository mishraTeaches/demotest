const ar = [2, 1, 1, 2, 3, 3, 6]; // FIND ELEMENT WHICH IS COMING ONLY ONCE !
let map = {};
const num = (ar) => {
  for (let i = 0; i < ar.length; i++) {
    map[ar[i]] = (map[ar[i]] || 0) + 1;
  }
  for (let [key, value] of Object.entries(map)) {
    if (value == 1) {
      return key;
    }
  }
};
console.log(num([2, 1, 1, 2, 3, 3, 6]));
