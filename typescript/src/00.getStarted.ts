/**
 * π§Έ Types by Inference
 * νμ μΆλ‘ 
 * λ³μλ₯Ό μμ±νλ©΄μ νΉμ  κ°μ ν λΉνλ κ²½μ°, typescriptμμλ κ·Έ κ°μ λ³μμ νμμΌλ‘ μ¬μ©ν¨.
 */
let helloWorld = "Hellow World"; // hellowWorld π string

/**
 * π§Έ Defining Types
 * νμ μ μνκΈ°
 */
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "tom",
  age: 30,
  // userName: 'dev'  // π error ts(2322) μ μΈνμ§ μμ νμμ κ²½μ°μ κ²½κ³ λ₯Ό μ€.
};

/**
 * π§Έ Classμ κ²½μ°μλ λμΌνκ² μ¬μ©μ΄ κ°λ₯ν¨.
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
 * π§Έ ν¨μμ λ°νκ°μ΄λ λ§€κ°λ³μμ ννλ₯Ό λͺμνλλ°λ μ¬μ©λ¨.
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
 * π§Έ Composing Types
 * νμ κ΅¬μ±
 * Union, Generic 2κ°μ§κ° μμ
 */

/**
 * π§Έ Unions
 * νμμ΄ μ¬λ¬ νμ μ€ νλμΌ κ²½μ° μ μΈνλ λ°©λ²
 */
type MyBool = true | false;
type WindowStates = "open" | "cloesd" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTem = 1 | 3 | 5 | 7 | 9;
function getLength(obj: string | string[]) {
  return obj.length;
}

/**
 * π§Έ typeofλ₯Ό μ΄μ©νμ¬ νμμ κ΅¬λΆ ν  μ μμ.
 */
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj]; //  π type string
  }

  return obj;
}

/**
 * π§Έ Generics
 * νμμ λ³μλ₯Ό μ κ³΅νλ λ°©λ²
 */
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// μ λ€λ¦­μ μ¬μ©νλ κ³ μ  νμμ μ μΈν  μ μμ
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
declare const backpack: Backpack<string>;
const object = backpack.get(); // μμμ μ μΈν backpackμΌλ‘ μΈν΄ objectμ νμμ string.
// backpack.add(23); // π error ts(2345) backpack λ³μκ° stringμ΄λ―λ‘, addν¨μμ number νμμ μ λ¬ν  μ μμ.

/**
 * π§Έ Structural Type System
 * κ΅¬μ‘°μ  νμ μμ€ν
 * ν΅μ¬ μμΉ μ€ νλλ‘ νμ κ²μ¬κ° κ°μ΄ μλ ννμ μ§μ€νλ€λ κ².
 * duck typing λλ structural typing
 * κ΅¬μ‘°μ  νμ μμ€νμμ λ κ°μ²΄κ° κ°μ ννλ₯Ό κ°μ§λ©΄ κ°μ κ²μΌλ‘ κ°μ£Όλ¨.
 */

interface Point {
  x: number;
  y: number;
}

function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 }; // point λ³μλ Point νμμΌλ‘ μ μΈλ μ μ΄ μμ§λ§, pointμ ννμ Pointdμ ννλ₯Ό λΉκ΅νμ¬ ν΅κ³Όν¨.
printPoint(point); // 12, 26μ μΆλ ₯ν¨.

// νν μΌμΉλ μΌμΉμν¬ κ°μ²΄ νλμ νμ μ§ν©λ§ νμλ‘ ν¨.
const point2 = { x: 12, y: 26, z: 89 };
printPoint(point2); // prints "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); // prints "33, 3"

const color = { hex: "#187ABF" };
// printPoint(color); // π error ts(2345) νμ μ§ν©μ νμν μΈμκ° μλ κ°μ²΄μ¬μ μλ¬.

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
