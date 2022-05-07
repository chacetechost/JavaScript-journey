////Increment and Decreament by any number.
num1 += 10;
console.log(num1);

/* Let's create a function that takes in a name 
and returns to us "Hello" followed by your name.

for Example, 
Name: Chace
The function should return "Hello Chace"
*/

function greeting(yourName) {
  var result = 'Hello ' + yourName; // screen concatenation.
  console.log(result);
}

// var name =  prompt('What is your name?');
// greeting(name);

// How to make functions take in Arguments.
// how to add two numbers together in a function.

function someNumbers(num1, num2) {
  var result = num1 + num2;
  console.log(result);
}

// someNumbers(10, 10);

/* While Loops

var num = 0;

while (num < 100) {
    num += 1
    console.log(num);
}

For Loop */
for (let num = 0; num < 100; num++) {
  console.log(num);
}

// Data Types.
let yourAge = 18;
let yourName = 'Chace';
let name = { first: 'Red', last: 'Snow' }; // This is an object in JavaScript
let truth = false; // This is a boolean
let groceries = ['apple', 'Bananna', 'Oranges']; // This is an Array
let random; // undefined
let nothing = null; // value null.

// Strings in javaScript and common methods.
let fruit = 'bananna';
let moreFruits = 'bananna\nApple'; // New line.

console.log(fruit.length);
console.log(fruit.indexOf('nan')); // To find something in a string.
console.log(fruit.slice(2, 6)); // This is to slice or give a value.
console.log(fruit.replace('nan', 123)); // This is to replace a string.
console.log(fruit.toUpperCase(fruit)); // This converts a string to uppercase.
console.log(fruit.toLowerCase(fruit)); // This converts a string to lowercase.
console.log(fruit[2]); // To get a character of a string.
console.log(fruit.split('')); // To split a string by character.

// Arrays in JavaScript.
let fruits = ['grape', 'orange', 'lemon', 'melon'];
fruits = new Array('grape', 'orange', 'lemon', 'melon');

console.log(fruits[2]); // Accessing values in an array

fruits[0] = 'banana'; // Changing a value in an Array
console.log(fruits);

// Looping through Arrays.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Array common methos.
console.log('to string', fruits.toString()); // Coverting an array to strings
console.log(fruits.join('-')); // To join things to an Array.
console.log(fruits.pop(), fruits); // This pops off a value.
