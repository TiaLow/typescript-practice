"use strict";
exports.__esModule = true;
var message = 'Sup! Welcome Back!';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
// --- BASIC Data Types ---
// boolean
// number
// string
// let isBeginner of type boolean equal true
var isBeginner = true;
var total = 0;
var name = 'Tia';
// template strings
var sentence = "My name is " + name + "\nI am a beginner in Typescript";
console.log(sentence);
// INTELLISENSE
// type name. or total. and it will come up with list of methods available on those data types
// --- SUBTYPES of all other data ---
// can assign null or undefined to boolean, string, number variable
// null
// undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
// --- ARRAY Data Types ---
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
// --- TUPLE Data Type  ---
// issue with the below is it's fixed num of values, order of values has to match order of types
var person1 = ['Tia', 22];
// --- ENUM Data Type ---
// set of numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); //1
(function (Color) {
    Color[Color["Yellow"] = 5] = "Yellow";
    Color[Color["Purple"] = 6] = "Purple";
    Color[Color["Black"] = 7] = "Black";
})(Color || (Color = {}));
;
var p = Color.Purple;
console.log(p); //6
// --- ANY Data Type ---
// expecting value from library, or data from user, not sure of what type
var randomValue = 10;
randomValue = true;
randomValue = 'Tia';
