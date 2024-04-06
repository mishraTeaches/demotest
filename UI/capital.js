// maxChar("abcccccccd") === "c"
// // maxChar("apple 1231111") === "1"
function maxChar(s) {
  let map = new Map();
  for (let data of s) {
    if (map.has(data)) {
      map.set(data, map.get(data) + 1);
    } else {
      map.set(data, 1);
    }
  }
  let max = 0;
  let char = "";
  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      char = key;
    }
  }
  return char;
}
console.log(maxChar("apple 1231111"));
