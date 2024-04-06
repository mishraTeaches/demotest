let count = 0;
function getData() {}
const debounce = (fn, d) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

const smartMethod = debounce(getData, 300);
