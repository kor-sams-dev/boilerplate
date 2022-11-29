const normal = document.querySelector(".normal");
const normalCount = document.querySelector(".count-normal");
normal.addEventListener("scroll", () => {
  normalCount.innerHTML = +normalCount.innerHTML + 1;
});

const debounce = document.querySelector(".debounce");
const debounceCount = document.querySelector(".count-debounce");

debounce.addEventListener(
  "scroll",
  _.debounce(() => {
    debounceCount.innerHTML = +debounceCount.innerHTML + 1;
  }, 100)
);

const throttle = document.querySelector(".throttle");
const throttleCount = document.querySelector(".count-throttle");

throttle.addEventListener(
  "scroll",
  _.throttle(() => {
    throttleCount.innerHTML = +throttleCount.innerHTML + 1;
  }, 100)
);
