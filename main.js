"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var myVariable = 10;
// none of the below work, but they dont throw errors because type is any
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
// --- UNKNOWN Data Type ---
// similar to any data type, but you can't access any properties of an unknown type unless you tell it what it is
var myVar = 'tia';
myVar.toUpperCase();
// type "assertion" which is similar to "type casting" in other languages
// function to determine if an object has a name property
// has parameter object of type any, going to return an object that contains name property as a string
// 
function hasName(obj) {
    // making a check to see if name property exists in object or not
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
// TYPE INFERENCE
// only works on variables that are initialized in the example below with b
var a;
a = 10;
a = true;
var b = 20;
b = true;
// typescript inferred the type of variable b
// --- UNION Data Types ---
// specify union of types for same variable 
// handy when type is out of your control (receiving data from API, user, etc)
// good for intellisense since it knows it can either be number or boolean
var multiType;
multiType = 20;
multiType = true;
// --- FUNCTIONS ---
//                                       telling it return type as well
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
add('tia', 5); // knows its not a number. static type checking for parameters
// in typescript every parameter is assumed to be required by the function. if you call it without a parameter it will throw an error (diff than plain JS where it would have just made that missing parameter to be undefined)
// adding a ? after makes it optional
// OPTIONAL PARAMETERS must ALWAYS be after the required ones
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add2(5, 10);
add2(5); // in this case the second paramtere is treated as undefined
// -- DEFAULT PARAMETERS ---
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
add3(5, 10); // 15
add3(5); // 15
// --- INTERFACES ---
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var peep = {
    firstName: 'Tia',
    lastName: 'Low'
};
fullName(peep); // Tia Low
function fullName2(person) {
    console.log(person.firstName + " " + person.lastName);
}
var peep2 = {
    firstName: 'tia'
};
fullName2(peep2);
// --- CLASS and ACCESS MODIFIERS---
// typescript supports classes to build apps using object-oriented class-based approach
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning " + this.employeeName);
    };
    return Employee;
}());
var employee1 = new Employee('Tia');
console.log(employee1.employeeName); // Tia
employee1.greet(); // Good morning Tia
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    // accepts a main parameter that is used to initialize the base Employee class constructor
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    // when you instantiate a new Manager, the Manager class constructor calls the Employee class constructor to initialize the employeeName property
    // add a method to Manager class
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Bruce');
manager1.delegateWork(); // Manager delegating tasks
manager1.greet(); // Good morning Bruce
console.log(manager1.employeeName); // Bruce
// --- ACCESS MODIFIERS ---
// keywords that set the access ability of properties and methods in a class
// by default, each is Public
// PUBLIC (default)
// free accessiblity
// PRIVATE
// accessibility only within the class
// cannot be accessed from outside it's containing class
// cannot even be access by a class that extends the base one
// PROTECTED
// accessiblity within a class and the classes derived from it
// used when it shouldnt be accessed outside class, but it can be accessed by direct classes that extend the base 
