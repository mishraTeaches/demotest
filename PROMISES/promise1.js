function promise() {
  return new Promise((resolve, reject) => {
    reject("Promise1");
  }).catch((error) => {
    return new Error(error);
  });
}
async function result() {
  const res = await promise();
  console.log(res);
}
result();
