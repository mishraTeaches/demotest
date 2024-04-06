function test() {
  console.log("zero args");
}
function test(a) {
  console.log(a);
}

function test(a, b) {
  console.log(a, b);
}

test();
test(1);
test(1, 2);
test(1, 2, 3, 4);
