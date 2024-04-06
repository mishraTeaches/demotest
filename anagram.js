// function anagram(s, t) {
//   return s.split("").sort().join("") === t.split("").sort().join("");
// }
// console.log(anagram("anagram", "nagarat"));

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sobj = {};
  const tobj = {};
  const n = s.length;
  for (let i = 0; i < n; i++) {
    sobj[s[i]] = (sobj[s[i]] || 0) + 1;
    tobj[t[i]] = (tobj[t[i]] || 0) + 1;
  }
  console.log(sobj, tobj);
  for (let i in sobj) {
    if (sobj[i] !== tobj[i]) return false;
  }
  return true;
};
isAnagram("anagram", "nagarat");
