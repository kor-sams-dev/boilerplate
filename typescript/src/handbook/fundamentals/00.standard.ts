/**
 * 💁‍♂️ 타입스크립트의 기본 타입
 * 기본 타입은 크게 12가지가 있음
 */

// 📌 String
const str: string = "hi";

// 📌 Number
const num: number = 10;

// 📌 Boolean
const isLoggedIn: boolean = false;

// 📌 Object - Array
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3]; // 제네릭을 사용하여 선언가능

// 📌  Tuple
const tup: [string, number] = ["hi", 10];
// 만약 정의하지 않은 타입, 인덱스로 접근할 경우 오류가 발생함
// tup[1].concat("!"); error: Property 'concat' does not exist on type 'number'.ts(2339)
// tup[5] = "hello"; error: Tuple type '[string, number]' of length '2' has no element at index '5'.ts(2493)

// 📌  Enum (특정 값(상수)들의 집합)
enum Avengers {
  Capt = 2, // enum의 인덱스를 사용자 편의로 변경 가능
  IronMan,
  Thor,
}
const heroCapt: Avengers = Avengers.Capt;
const heroIronMan: string = Avengers[3]; // 인덱스 번호로도 접근이 가능

// 📌 Any
// 기존의 자바스크립트 소스에 타입스크립트를 점진적으로 적용할 때 활용하면 좋음.
// 단어 그대로 모든 타입에 대해 허횽한다는 의미를 갖고 있음.
const anyStr: any = "hi";
const anyNum: any = 10;
const anyArr: any = ["a", 1, true];

// 📌 Void
// 변수에 undefined와 null만 할당하고, 함수에는 반환 값을 설정할 수 없는 타입
const unuseful: void = undefined;
function notUse(): void {
  console.log("shs");
}

// 📌 Never
// 함수의 끝에 절대 도달하지 않는다는 의미를 지닌 타입
function neverEnd(): never {
  while (true) {}
}
