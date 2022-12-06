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
 * string, number와 같은 원시 타입의 경우 typeof연산자를 사용하여 각 값들의 타입을 실행 시점에 알 수 있음.
 * 하지만 그 밖의 레퍼런스 타입의 값(함수...)의 경우 위 방식으로는 값의 타입을 실행 시점에 알아 낼 수 없슴.
 */

function fn(x) {
  return x.flip();
}
