"use strict";
// Declare a variable named greeting with the string value "Hello, World!" and print it.
Object.defineProperty(exports, "__esModule", { value: true });
let greeting = "Hello, World!";
console.log(greeting);
// Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1 = 5;
let num2 = 7;
// sum
let sum = num1 + num2;
console.log(`The Sum is : ${sum}`);
// Difference
let difference = num1 - num2;
console.log(`The Difference is : ${difference}`);
// Product
let product = num1 * num2;
console.log(`The Product is : ${product}`);
// Quotient
let quotient = num1 / num2;
console.log(`The Quotient is : ${quotient}`);
// Swap the values of two variables without using a third variable.
let val1 = 10;
let val2 = 20;
console.log(`Before Swap : Value1 = ${val1} and Value2 = ${val2}`);
console.log(`After Swap : Value1 = ${val2} and Value2 = ${val1}`);
// This applies to TypeScript. Create a string variable and try changing its type.
let myName = 'Danyal';
console.log(myName);
// myName = 10;
console.log(myName);
// Use the modulus operator to find the remainder of two numbers.
let numMode1 = 25;
let numMode2 = 3;
let modulus = numMode1 % numMode2;
console.log(`The Remainder is : ${modulus}`);
// Increment a variable's value by 1 using two different methods.
let variable1 = 5;
// method 1
let meth1 = variable1++;
console.log(`First Method : ${meth1}`);
// method 2
variable1 += 1;
console.log(`Second Method : ${variable1}`);
// Show examples of using compound assignment operators.
let num = 10;
num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);
num %= 5;
console.log(num);
// Write a program to check if a number is even or odd.
let inputNumber = 10;
if (inputNumber % 2 == 0) {
    console.log(`${inputNumber} is Even Number`);
}
else {
    console.log(`${inputNumber} is Odd Number`);
}
// Check if a person is eligible to vote.
let age = 25;
console.log(`Age is : ${age}`);
if (age > 18) {
    console.log('Person is eligible to vote');
}
else {
    console.log('Person is not eligible to vote');
}
// Assign a grade based on a numerical score.
let score = 80;
console.log(`Score is : ${score}`);
if (score >= 90) {
    console.log('The Grade is: A');
}
else if (score >= 80 && score < 90) {
    console.log('The Grade is: B');
}
else if (score >= 70 && score < 80) {
    console.log('The Grade is: C');
}
else if (score >= 60 && score < 70) {
    console.log('The Grade is: D');
}
else {
    console.log('The Grade is: F');
}
// Find the maximum of three numbers.
let x = 5, y = 10, z = 15;
console.log(`The three numbers are ${x}, ${y}, ${z}`);
console.log(`The maximum of the three numbers is ${Math.max(x, y, z)}`);
// Check if a given year is a leap year.
let year = 2024;
console.log(`The year is : ${year}`);
if (year % 4 == 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(`${year} is a Leap Year`);
}
// Write a program that converts temperature from Fahrenheit to Celsius.
let Fahrenheit = 100;
let Celsius = (Fahrenheit - 32) * (5 / 9);
console.log(`The temperature in Celsius is : ${Math.floor(Celsius)}`);
// Check if a number is positive, negative, or zero.
let numStore = 5;
console.log(`The number to check is : ${numStore}`);
if (numStore > 0) {
    console.log(`${numStore} is a Positive Number`);
}
else if (numStore < 0) {
    console.log(`${numStore} is a Negative Number`);
}
else {
    console.log(`The number is 0`);
}
// Write a program that prints the multiplication table of a given number up to 10
let tableNumber = 5;
let text;
for (let i = 1; i <= 10; i++) {
    let tableNum;
    let multiplier = tableNumber;
    tableNum = multiplier * i;
    console.log(`${tableNumber}x${i} = ${tableNum}`);
}
