let debounceId = null;
let throttleId = null;

const normal = document.querySelector(".normal");
const normalCount = document.querySelector(".count-normal");
normal.addEventListener("scroll", () => {
  normalCount.innerHTML = +normalCount.innerHTML + 1;
});

const debounce = document.querySelector(".debounce");
const debounceCount = document.querySelector(".count-debounce");

debounce.addEventListener("scroll", () => {
  clearTimeout(debounceId);
  debounceId = setTimeout(() => {
    debounceCount.innerHTML = +debounceCount.innerHTML + 1;
  }, 100);
});

const throttle = document.querySelector(".throttle");
const throttleCount = document.querySelector(".count-throttle");

throttle.addEventListener("scroll", () => {
  if (throttleId) return;
  throttleId = setTimeout(() => {
    throttleCount.innerHTML = +throttleCount.innerHTML + 1;
    throttleId = null;
  }, 100);
});
