/**
 * Javascript의 모든 값은 저마다 다양한 동작들을 내장하고 있음
 * 다양한 연산(Operation)을 실행하여 확인 할 수 있음.
 */

// 📌 message의 프로퍼티 중 toLowerCase를 호출
// message.toLowerCase();
// 📌 message를 호출
// message()
/**
 * 💁‍♂️ message라는 값을 모르면 위 실행 결과가 무엇인지 확실히 알 수 없음.
 * 📌 생각해보아야 하는 부분
 * 1. message가 호출이 가능한가?
 * 2. toLowerCase라는 프로퍼티를 가지고 있는가?
 * 3. toLowerCase라는 프로퍼티를 호출이 가능한가?
 * 4. 각각 호출이 가능하다면 무엇을 반환하는가?
 * Javascript 코드를 작성할 때 흔히 고민하게 되는 것들임.
 */

// message를 아래와 같이 정의
const message = "Hellow World!";

// message.toLowerCase를 호출하면 소문자로 이뤄진 값을 얻음
// message()의 경우 error -> TypeError: message is not a function이 발생

/**
 * 💁‍♂️ string, number와 같은 원시 타입의 경우 typeof연산자를 사용하여 각 값들의 타입을 실행 시점에 알 수 있음.
 * 하지만 그 밖의 레퍼런스 타입의 값(함수...)의 경우 위 방식으로는 값의 타입을 실행 시점에 알아 낼 수 없슴.
 */

function fn(x) {
  return x.flip();
}

/**
 * 위 함수 fn은 인자로 전달된 객체가 호출 가능한 프로퍼티인 flip을 가지고 있어야 함수가 잘 작동함
 * 하지만 javascript의 경우 우리가 보는 것과 다르게 실행되는 동안 알지 못함.
 * fn이 특정 값과 어떤 동작을 수행하는지 알 수 있는 유일한 방법은 호출되어 무슨 일이 벌어지는지 보는 것 뿐임.
 * 이처럼 실행전에 예측을 어렵게 만듬.
 * 코드가 어떤 동작 결과를 보일 지 코드를 작성하는 동안에 알기 어렵다.
 * javascript는 오직 동적 타입만을 제공하며, 코드를 실행해야만 어떤 일을 벌이는지 확인이 가능함.
 * 대안은 정적 타입 시스템을 사용하여 코드가 실행되기 전 코드에 대해 예측하는 것.
 */

/**
 * 💁‍♂️ 정적 타입 검사
 * Static type-checking
 * typescript와 같은 정적 타입 검사기의 역할
 * 코드를 실행하기 전에 위와 같은 버그를 미리 발견할 수 있는 도구
 * 정적 타입 시스템은 작성한 프로그램에서 사용된 값들의 형태와 동작을 설명함.
 * typescript와 같은 타입 검사기는 이 정보를 활용하여 프로그램이 제대로 작동하지 않을 때 알려줌.
 */
const messageString = "Hello!";
// messageString(); // 👈 error: Type 'String' has no call signatures.ts(2349)

/**
 * 💁‍♂️ 예외가 아닌 실행 실패
 * Non-exception Failures
 * javascript 런타임이 무언가 이상하다고 프로그래머에게 직접 말해주는 경우에 해당함.
 * 명세에 따르면 호출 가능하지 않은 것에 대해 호출을 시도할 경우 오류가 발생한다
 * 이는 당연한 동작처럼 보일 수 있을테지만, 누군가는 객체에 존재하지 안는 프로퍼티에 접근을 시도했을 때에도 오류를 던져야 한다고 생각할 수 있다.
 * 하지만 javascript는 전혀 다르게 반응하며 undefined를 반환함
 */

const userInfo = {
  name: "Sam",
  age: 30,
};

// javascript의 경우 undefined를 반환함.
// typescript의 경우 정의도어 있지 않았다는 오류가 발생됨.
// userInfo.location

/**
 * 💁‍♂️ 이러한 부분은 명시적인 버그는 아니지만 버그로 타당히 간주되는 경우를 잡아내는 데에 그 목적이 있다.
 * 이를테면 오타, 호출되지 않은 함수, 기본적인 논리 오류 등이 있다.
 */

// 📌 오타
const announcement = "Hello World!";
// announcement.toLocaleLowercase();
// announcement.toLocalLowerCase();
announcement.toLocaleLowerCase();

// 📌 호출되지 않은 함수
function flipCoin() {
  // 본래 의도는 Math.random()
  // return Math.random < 0.5;
}

// 📌 기본적인 논리 오류
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // } else if (value === "b") {
}

/**
 * 💁‍♂️ 프로그래밍 도구로서의 타입
 * Types for Tooling
 * typescript는 코드상에 실수를 저질렀을 때 버그를 잡아줌.
 * 뿐만아니라 우리가 실수를 저지르는 바로 그 순간 막아줌
 * 타입 검사기는 변수 또는 다른 프로퍼티 상의 올바른 프로퍼티에 접근하고 있는지 여부를 검사할 수 있도록 정보를 가지고 있음.
 * 이 정보를 활용하면 타입 검사기는 우리가 사용할 수 있는 프로퍼티를 제안할 수 있음.
 * 코드 수정에 활용될 수 있고, 코드를 입력할 때 오류 메시지를 제공하거나 코드 완성 기능을 제공할 수 있음.
 * 코드 완성 및 오류 메시지 기능 이외에
 * 1. 오류를 자동으로 고쳐주는 Quick Fixes
 * 2. 코드를 간편하게 재조직하는 리팩토링
 * 3. 변수의 정의로 빠르게 이동하는 네비게이션
 * 4. 주어진 변수에 대한 모든 참조 검색
 * 등의 기능을 제공함.
 */
