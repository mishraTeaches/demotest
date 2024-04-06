const arr = [10, 20, 30, 40];
for (var i = 0; i < arr.length; i++) {
  let data = arr[i];
  setTimeout(() => {
    console.log("Index:" + i + ",element:" + data);
  }, 3000);
}
