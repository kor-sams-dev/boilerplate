/**
 * 💁‍♂️ 타입스크립트의 함수
 * 자주 사용되는 함수는 크게 다음 3가지로 정의할 수 있다.
 * 함수의 파라미터(매개변수) 타입
 * 함수의 반환 타입
 * 함수의 구조 타입
 */

// 📌 함수의 기본적인 타입 선언
// 일반 javascript 함수
function sumJavascript(a, b) {
  return a + b;
}

// 위 함수에 타입을 부여하면
function sumTypescript(a: number, b: number): number {
  return a + b;
}
// 기존 javascript 함수 선언 방식에서 매개변수와 함수의 반환값에 타입을 추가함.

// 💡 함수의 반환값에 타입을 정하지 않을 때는 void라도 사용

/**
 * 📌 함수의 인자
 * typescript의 경우 함수의 인자를 모두 필수값으로 간주.
 * 함수의 매개변수를 설정하면 undefined나 null이라도 인자로 넘겨야 함.
 * 정해진 매개변수 값만 받을 수 있고 추가로 인자를 받을 수 없다.
 */
function sum2(a: number, b: number): number {
  return a + b;
}
sum2(10, 20);
// sum2(10, 20, 30); error: Expected 2 arguments, but got 3.ts(2554)
// sum2(10); error: Expected 2 arguments, but got 1.ts(2554)

// javascript의 특성과 비슷하게 매개변수의 갯수 만큼 인자를 넘기지 않아도 되는 특성을 살리고 싶다면 '?'를 이용하여 정의하면 된다
function sum3(a: number, b?: number): number {
  return a + b;
}

sum3(10, 20);
// sum3(10, 20, 30); error: Expected 2 arguments, but got 3.ts(2554)
sum3(10); // 👈 typeerror는 안남

// ES6문법을 활용하여 매개변수 초기화도 가능함.
function sum4(a: number, b = 100): number {
  return a + b;
}

sum3(10, 20);
// sum3(10, 20, 30); error: Expected 2 arguments, but got 3.ts(2554)
sum3(10); // 👈 110

/**
 * 📌 REST 문법이 적용된 매개변수
 * ES6 문법에서 지원하는 Rest 문법을 타입스크립트에서도 사용이 가능함.
 */

function sumRest(a: number, ...nums: number[]): number {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}

/**
 * 📌 this
 * typescript에서도 this가 잘못 사용되었을 때 감지 할 수 있음.
 * function 함수명(this: 타입) {} 형태로 사용이 가능함.
 */

interface Vue {
  el: string;
  count: number;
  init(this: Vue): () => {};
}

let vm: Vue = {
  el: "#app",
  count: 10,
  init: function (this: Vue) {
    return () => {
      return this.count;
    };
  },
};

let getCount = vm.init();
let count = getCount();

/**
 * 📌 콜백에서의 this
 * 일반적인 상황에서의 this와는 다르게 콜백으로 함수가 전달되었을 때의 this를 구분해줘야 할 때가 있음.
 * 그럴땐 강제할 수 있음.
 */

interface UIElement {
  // this: void 코드는 함수에 this 타입을 선언할 필요가 없다는 의미
  addClickListener(onClick: (this: void, e: Event) => void);
}

class Handler {
  info: string;
  onClick(this: Handler, e: Event) {
    // UIElement 인터페이스의 스펙에 this가 필요없다고 했지만 사용했기 때문에 에러가 발생함.
    // this.info = e.message; error: Property 'message' does not exist on type 'Event'.ts(2339)
  }
}

let handler = new Handler();
let uiElement: UIElement;
// uiElement.addClickListener(handler.onClick); // error: Cannot find name 'uiElement'. Did you mean 'Element'?ts(2552)

class Handler2 {
  info: string;
  onClick(this: void, e: Event) {
    // `this`의 타입이 void이기 때문에 여기서 `this`를 사용할 수 없습니다.
    console.log("clicked!");
  }
}
let handler2 = new Handler2();
uiElement.addClickListener(handler2.onClick);
