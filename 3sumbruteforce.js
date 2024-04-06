function triplet(n, arr) {
  let st = new Set();
  let ans = [];

  // check all possible triplets:
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort();
          ans.push(temp);
        }
      }
    }
  }

  //store the set in the answer:
  let set = new Set(ans.map(JSON.stringify));
  console.log(set);
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

let arr = [-1, 0, 1, 2, -1, -4];
let n = arr.length;
let ans = triplet(n, arr);
for (let it of ans) {
  for (let i of it) {
    // console.log(i);
  }
}
