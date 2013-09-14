//Jason Jones - Thursday 12th September
// Expressions

var age = 5;
var dogAge = age * 7;
console.log("Sparky is " + age + " human years old which is " + dogAge + " in dog years.");


var slices = 8;
var people = 10;
var pizza = 10;
var sliceEach = pizza * slices/people;
console.log("Each person ate " + sliceEach + " slices of pizza at the party.");

var slices = 8;
var people = 10;
var pizza = 10;
var sliceEach = pizza * slices%people;
console.log("Sparky got " + sliceEach + " slices of pizza at the party.");

var groceries = [50, 90, 15, 10, 100];
var total = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4];
var average = total/5;
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");

var price = 100;
var discount = 20;
var item = "bag";
var salesTax = 6;
var withTax = price - discount + salesTax;
var noTax = price - discount;
console.log("Your " + item + " was originally $" + price + ", but after a " + discount + "% discount, it is now $" + noTax + ", without tax, and $" + withTax + " with tax.");
