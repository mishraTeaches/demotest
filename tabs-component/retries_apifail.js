//delay func
const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

// Test function
const getTestFunc = () => {
  let callCounter = 0;
  return () => {
    callCounter += 1;
    console.log(callCounter);
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

const retryWithDelay = async (
  fn,
  retries = 3,
  interval = 50,
  finalErr = "Retry failed"
) => {
  console.log(retries, interval);
  try {
    // try
    await fn();
  } catch (err) {
    // if no retries left
    // throw error
    if (retries <= 0) {
      return Promise.reject(finalErr);
    }

    //delay the next call
    await wait(interval);

    //recursively call the same func
    return retryWithDelay(fn, retries - 1, interval, finalErr);
  }
};
// Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

// Print the result
test().catch(console.error);
