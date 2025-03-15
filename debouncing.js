let count = 0;
function getData() {
  console.log("HI");
}
const debounce = (fn, d) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

const smartMethod = debounce(getData, 5000);
console.log(smartMethod());
("NOW YOU DID A GOOD JOB");

// THROTTLE

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       func();
//       lastCall = now;
//     }
//   };
// }

// window.addEventListener('scroll', throttle(() => {
//   console.log('Scroll event throttled');
// }, 1000));
