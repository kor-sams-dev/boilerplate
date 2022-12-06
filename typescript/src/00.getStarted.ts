/**
 * 🧸 Types by Inference
 * 타입 추론
 * 변수를 생성하면서 특정 값을 할당하는 경우, typescript에서는 그 값을 변수의 타입으로 사용함.
 */
let helloWorld = "Hellow World"; // hellowWorld 👉 string

/**
 * 🧸 Defining Types
 * 타입 정의하기
 */
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "tom",
  age: 30,
  // userName: 'dev'  // 👈 error ts(2322) 선언하지 않은 타입의 경우에 경고를 줌.
};

/**
 * 🧸 Class의 경우에도 동일하게 사용이 가능함.
 */
class UserAccount {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const userClass: User = new UserAccount("tom", 30);

/**
 * 🧸 함수의 반환값이나 매개변수의 형태를 명시하는데도 사용됨.
 */
function getAdminUser(): User {
  // ....
  return;
}
function deleteUser(user: User) {
  // ....
  return;
}

/**
 * 🧸 Composing Types
 * 타입 구성
 * Union, Generic 2가지가 있음
 */

/**
 * 🧸 Unions
 * 타입이 여러 타입 중 하나일 경우 선언하는 방법
 */
type MyBool = true | false;
type WindowStates = "open" | "cloesd" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTem = 1 | 3 | 5 | 7 | 9;
function getLength(obj: string | string[]) {
  return obj.length;
}

/**
 * 🧸 typeof를 이용하여 타입을 구분 할 수 있음.
 */
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj]; //  👈 type string
  }

  return obj;
}

/**
 * 🧸 Generics
 * 타입에 변수를 제공하는 방법
 */
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// 제네릭을 사용하는 고유 타입을 선언할 수 있음
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
declare const backpack: Backpack<string>;
const object = backpack.get(); // 위에서 선언한 backpack으로 인해 object의 타입은 string.
// backpack.add(23); // 👈 error ts(2345) backpack 변수가 string이므로, add함수에 number 타입을 전달할 수 없음.

/**
 * 🧸 Structural Type System
 * 구조적 타입 시스템
 * 핵심 원칙 중 하나로 타입 검사가 값이 있는 형태에 집중한다는 것.
 * duck typing 또는 structural typing
 * 구조적 타입 시스템에서 두 객체가 같은 형태를 가지면 같은 것으로 간주됨.
 */

interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 }; // point 변수는 Point 타입으로 선언된 적이 없지만, point의 형태와 Pointd의 형태를 비교하여 통과함.
printPoint(point); // 12, 26을 출력함.

// 형태 일치는 일치시킬 객체 필드의 하위 집합만 필요로 함.
const point2 = { x: 12, y: 26, z: 89 };
printPoint(point2); // prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); // prints "33, 3"

const color = { hex: "#187ABF" };
// printPoint(color); // 👈 error ts(2345) 하위 집합에 필요한 인자가 없는 객체여서 에러.

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
printPoint(newVPoint); // prints "13, 56"
