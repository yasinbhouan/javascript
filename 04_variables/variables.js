// Variables declaration and assignment in JavaScript
undeclared = 5; // undeclared variable, not recommended
var oldVariable = 10; // var is not recommended in modern JS (it's used from 1995 to 2015)
let modernVariable = 20; // modern variable declaration using let (only use if reassigning is needed)
const constantVariable = 30; // constant variable, cannot be reassigned

// variable names must start with a letter, underscore, or dollar sign
const number1 = 5; // valid variable name
const Number1 = 10; // valid variable name, case-sensitive
const _number2 = 20; // valid variable name with underscore
const $number3 = 30; // valid variable name with dollar sign

/*
// Reserved words, start with a number, special characters, space cannot be used as names
const let = 20; // 'let' is a reserved keyword
const 1number = 30; // variable names cannot start with a number
const name@!#%^&* = 40; // invalid variable name, contains special characters
const name two = 50; // invalid variable name, contains space
*/

// diclare variable
let myVariable; // declare a variable without assignment
myVariable = 100; // assign a value later
myVariable = 200; // reassigning the variable

//diclare variable with initial value
let anotherVariable = 300; // declare and assign a value in one step

// declare multiple variables in one line
let firstVar = 1, secondVar = 2, thirdVar = 3;

// arithmetic operations and string concatenation
let calculate = 3 + 7; // result is 10
let concatenation = 'good' + ' ' + 'Morning'; // result is 'good Morning'
let numberConcatenation = 5 + '5'; // result is '55' (string concatenation)
let mixedConcatenation = 5 + 5 + '5'; // result is '105' (5 + 5 = 10, then '10' + '5' = '105')
let complexConcatenation = 5 + '5' + 5; // result is '555' (5 + '5' = '55', then '55' + 5 = '555')
