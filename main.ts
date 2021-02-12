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

let myVariable: any = 10;
// none of the below work, but they dont throw errors because type is any
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();


// --- UNKNOWN Data Type ---
// similar to any data type, but you can't access any properties of an unknown type unless you tell it what it is

let myVar: unknown = 'tia';
(myVar as string).toUpperCase();

// type "assertion" which is similar to "type casting" in other languages

// function to determine if an object has a name property
// has parameter object of type any, going to return an object that contains name property as a string
// 

function hasName(obj: any): obj is {name: string}{
  // making a check to see if name property exists in object or not
  return !!obj &&
  typeof obj === "object" &&
  "name" in obj
}

if(hasName(myVariable)) {
  console.log(myVariable.name)
}

// TYPE INFERENCE
// only works on variables that are initialized in the example below with b

let a;
a = 10;
a = true;

let b = 20;
b = true;
// typescript inferred the type of variable b


// --- UNION Data Types ---
// specify union of types for same variable 
// handy when type is out of your control (receiving data from API, user, etc)
// good for intellisense since it knows it can either be number or boolean

let multiType: number | boolean;
multiType = 20;
multiType = true;


// --- FUNCTIONS ---

//                                       telling it return type as well
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(5, 10);
add('tia', 5) // knows its not a number. static type checking for parameters


// in typescript every parameter is assumed to be required by the function. if you call it without a parameter it will throw an error (diff than plain JS where it would have just made that missing parameter to be undefined)

// adding a ? after makes it optional
// OPTIONAL PARAMETERS must ALWAYS be after the required ones

function add2(num1: number, num2?: number): number {

  if(num2){
    return num1 + num2;
  }  else {
    return num1;
  }
}

add2(5, 10);
add2(5) // in this case the second paramtere is treated as undefined

// -- DEFAULT PARAMETERS ---

function add3(num1: number, num2: number = 10): number {

  if(num2){
    return num1 + num2;
  }  else {
    return num1;
  }
}

add3(5, 10) // 15
add3(5)  // 15



