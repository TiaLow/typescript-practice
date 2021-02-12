export{}
let message = 'Sup! Welcome Back!';

console.log(message);

let x = 10;
const y = 20;

let sum;

const title = "Codevolution";

// --- BASIC Data Types ---
// boolean
// number
// string

// let isBeginner of type boolean equal true
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Tia';

// template strings
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);

// INTELLISENSE
// type name. or total. and it will come up with list of methods available on those data types

// --- SUBTYPES of all other data ---
// can assign null or undefined to boolean, string, number variable
// null
// undefined

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

// --- ARRAY Data Types ---

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];


// --- TUPLE Data Type  ---
// issue with the below is it's fixed num of values, order of values has to match order of types

let person1: [string, number] = ['Tia', 22]

// --- ENUM Data Type ---
// set of numeric values

enum Color {Red, Green, Blue};

let c: Color = Color.Green;
console.log(c); //1

enum Color {Yellow = 5, Purple, Black};

let p: Color = Color.Purple;
console.log(p); //6

// --- ANY Data Type ---
// expecting value from library, or data from user, not sure of what type

let randomValue: any = 10;
randomValue = true;
randomValue = 'Tia';



