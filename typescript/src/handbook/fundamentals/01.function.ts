/**
 * πββοΈ νμμ€ν¬λ¦½νΈμ ν¨μ
 * μμ£Ό μ¬μ©λλ ν¨μλ ν¬κ² λ€μ 3κ°μ§λ‘ μ μν  μ μλ€.
 * ν¨μμ νλΌλ―Έν°(λ§€κ°λ³μ) νμ
 * ν¨μμ λ°ν νμ
 * ν¨μμ κ΅¬μ‘° νμ
 */

// π ν¨μμ κΈ°λ³Έμ μΈ νμ μ μΈ
// μΌλ° javascript ν¨μ
function sumJavascript(a, b) {
  return a + b;
}

// μ ν¨μμ νμμ λΆμ¬νλ©΄
function sumTypescript(a: number, b: number): number {
  return a + b;
}
// κΈ°μ‘΄ javascript ν¨μ μ μΈ λ°©μμμ λ§€κ°λ³μμ ν¨μμ λ°νκ°μ νμμ μΆκ°ν¨.

// π‘ ν¨μμ λ°νκ°μ νμμ μ νμ§ μμ λλ voidλΌλ μ¬μ©

/**
 * π ν¨μμ μΈμ
 * typescriptμ κ²½μ° ν¨μμ μΈμλ₯Ό λͺ¨λ νμκ°μΌλ‘ κ°μ£Ό.
 * ν¨μμ λ§€κ°λ³μλ₯Ό μ€μ νλ©΄ undefinedλ nullμ΄λΌλ μΈμλ‘ λκ²¨μΌ ν¨.
 * μ ν΄μ§ λ§€κ°λ³μ κ°λ§ λ°μ μ μκ³  μΆκ°λ‘ μΈμλ₯Ό λ°μ μ μλ€.
 */
function sum2(a: number, b: number): number {
  return a + b;
}
sum2(10, 20);
// sum2(10, 20, 30); error: Expected 2 arguments, but got 3.ts(2554)
// sum2(10); error: Expected 2 arguments, but got 1.ts(2554)

// javascriptμ νΉμ±κ³Ό λΉμ·νκ² λ§€κ°λ³μμ κ°―μ λ§νΌ μΈμλ₯Ό λκΈ°μ§ μμλ λλ νΉμ±μ μ΄λ¦¬κ³  μΆλ€λ©΄ '?'λ₯Ό μ΄μ©νμ¬ μ μνλ©΄ λλ€
function sum3(a: number, b?: number): number {
  return a + b;
}

sum3(10, 20);
// sum3(10, 20, 30); error: Expected 2 arguments, but got 3.ts(2554)
sum3(10); // π typeerrorλ μλ¨

// ES6λ¬Έλ²μ νμ©νμ¬ λ§€κ°λ³μ μ΄κΈ°νλ κ°λ₯ν¨.
function sum4(a: number, b = 100): number {
  return a + b;
}

sum3(10, 20);
// sum3(10, 20, 30); error: Expected 2 arguments, but got 3.ts(2554)
sum3(10); // π 110

/**
 * π REST λ¬Έλ²μ΄ μ μ©λ λ§€κ°λ³μ
 * ES6 λ¬Έλ²μμ μ§μνλ Rest λ¬Έλ²μ νμμ€ν¬λ¦½νΈμμλ μ¬μ©μ΄ κ°λ₯ν¨.
 */

function sumRest(a: number, ...nums: number[]): number {
  let totalOfNums = 0;
  for (let key in nums) {
    totalOfNums += nums[key];
  }
  return a + totalOfNums;
}

/**
 * π this
 * typescriptμμλ thisκ° μλͺ» μ¬μ©λμμ λ κ°μ§ ν  μ μμ.
 * function ν¨μλͺ(this: νμ) {} ννλ‘ μ¬μ©μ΄ κ°λ₯ν¨.
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
 * π μ½λ°±μμμ this
 * μΌλ°μ μΈ μν©μμμ thisμλ λ€λ₯΄κ² μ½λ°±μΌλ‘ ν¨μκ° μ λ¬λμμ λμ thisλ₯Ό κ΅¬λΆν΄μ€μΌ ν  λκ° μμ.
 * κ·Έλ΄λ κ°μ ν  μ μμ.
 */

interface UIElement {
  // this: void μ½λλ ν¨μμ this νμμ μ μΈν  νμκ° μλ€λ μλ―Έ
  addClickListener(onClick: (this: void, e: Event) => void);
}

class Handler {
  info: string;
  onClick(this: Handler, e: Event) {
    // UIElement μΈν°νμ΄μ€μ μ€νμ thisκ° νμμλ€κ³  νμ§λ§ μ¬μ©νκΈ° λλ¬Έμ μλ¬κ° λ°μν¨.
    // this.info = e.message; error: Property 'message' does not exist on type 'Event'.ts(2339)
  }
}

let handler = new Handler();
let uiElement: UIElement;
// uiElement.addClickListener(handler.onClick); // error: Cannot find name 'uiElement'. Did you mean 'Element'?ts(2552)

class Handler2 {
  info: string;
  onClick(this: void, e: Event) {
    // `this`μ νμμ΄ voidμ΄κΈ° λλ¬Έμ μ¬κΈ°μ `this`λ₯Ό μ¬μ©ν  μ μμ΅λλ€.
    console.log("clicked!");
  }
}
let handler2 = new Handler2();
uiElement.addClickListener(handler2.onClick);
