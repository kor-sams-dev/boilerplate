/**
 * πββοΈ νμμ€ν¬λ¦½νΈμ κΈ°λ³Έ νμ
 * κΈ°λ³Έ νμμ ν¬κ² 12κ°μ§κ° μμ
 */

// π String
const str: string = "hi";

// π Number
const num: number = 10;

// π Boolean
const isLoggedIn: boolean = false;

// π Object - Array
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3]; // μ λ€λ¦­μ μ¬μ©νμ¬ μ μΈκ°λ₯

// π  Tuple
const tup: [string, number] = ["hi", 10];
// λ§μ½ μ μνμ§ μμ νμ, μΈλ±μ€λ‘ μ κ·Όν  κ²½μ° μ€λ₯κ° λ°μν¨
// tup[1].concat("!"); error: Property 'concat' does not exist on type 'number'.ts(2339)
// tup[5] = "hello"; error: Tuple type '[string, number]' of length '2' has no element at index '5'.ts(2493)

// π  Enum (νΉμ  κ°(μμ)λ€μ μ§ν©)
enum Avengers {
  Capt = 2, // enumμ μΈλ±μ€λ₯Ό μ¬μ©μ νΈμλ‘ λ³κ²½ κ°λ₯
  IronMan,
  Thor,
}
const heroCapt: Avengers = Avengers.Capt;
const heroIronMan: string = Avengers[3]; // μΈλ±μ€ λ²νΈλ‘λ μ κ·Όμ΄ κ°λ₯

// π Any
// κΈ°μ‘΄μ μλ°μ€ν¬λ¦½νΈ μμ€μ νμμ€ν¬λ¦½νΈλ₯Ό μ μ§μ μΌλ‘ μ μ©ν  λ νμ©νλ©΄ μ’μ.
// λ¨μ΄ κ·Έλλ‘ λͺ¨λ  νμμ λν΄ νν½νλ€λ μλ―Έλ₯Ό κ°κ³  μμ.
const anyStr: any = "hi";
const anyNum: any = 10;
const anyArr: any = ["a", 1, true];

// π Void
// λ³μμ undefinedμ nullλ§ ν λΉνκ³ , ν¨μμλ λ°ν κ°μ μ€μ ν  μ μλ νμ
const unuseful: void = undefined;
function notUse(): void {
  console.log("shs");
}

// π Never
// ν¨μμ λμ μ λ λλ¬νμ§ μλλ€λ μλ―Έλ₯Ό μ§λ νμ
function neverEnd(): never {
  while (true) {}
}
