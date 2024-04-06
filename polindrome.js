var s = "race a car";
s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
console.log(s);
function checkPoli(s) {
  let temp = s;
  for (let i = s.length - 1; i >= 0; i--) {
    while (i > 0) {
      if (s[i] === temp[i]) return true;
    }
  }
  return false;
}
console.log(checkPoli(s));
