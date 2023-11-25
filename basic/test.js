"use strict";  // treat all JS code as newer version
console.log("Shivay")

var a = "harshit";
console.log(a)

// alert(3+3)  // Using nodejs , not browser
 let name = "harsh"
 let age = 3
 let isLogedIn = false


 // data type
 // null -> standalone value, it is empty
 // Example -> Rewuested a temp from client, but no response came, so, 
 // instead of passing zero, it will pass as empty value(null)
 //undefined -> when a value is not defined
 // symbol => to find uniqueness
 

 // object
 //console.log(typeof null);  //objeect
 //console.log(typeof undefined);  //undefined

 
 let score = "33abv";
 console.log(typeof score);
 let valueInNumber = Number(score);
 console.log(typeof score);
 console.log(valueInNumber);  //NaN Not an Number

 let test = undefined;
 console.log(typeof test);
 let valueInNumberfornull = Number(test);
 console.log(typeof test);
 console.log(valueInNumberfornull)  // 0


 /*
"33"  => 33
"33abc"  => NaN
true => 1
null  => 0
undefined => NaN
 */

// For Boolean   0, "" -> False 

 
// Primitive

/*
  7 types : String, NUmber, Boolean, null,undefined, Symbol, Reference

*/

// Reference type
// Array, Objects, Functions
// Type of Reference is Function , mostly object Function
// Javascipt -> JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
// False

let myobj = {
    name:"Harshit",
    name: 22
}

const myfunction = function(){
    console.log("Hello")
}