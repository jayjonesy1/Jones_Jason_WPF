/**
 * Created with JetBrains WebStorm.
 * User: jayjonesy1
 * Date: 9/13/13
 * Time: 8:03 PM
 * To change this template use File | Settings | File Templates.
 */
//Jason Jones - Friday 13th September
//Conditionals Worksheet

var temp = 60;
var unit = "F";

if (unit=="F"){
    var tempF = temp * 1.8 + 32;
}

if (unit=="C"){
    console.log("The temperature is " + temp + " degrees Celsius")
} else {
    console.log("The temperature is " + tempF + " degrees Fahrenheit")
}


var testGrade = 77;
var letterGrade = "";


if (testGrade>90){
    letterGrade = "A";
} else if (testGrade>80){
    letterGrade = "B";
} else if (testGrade>70){
    letterGrade = "C";
} else if (testGrade>60){
    letterGrade = "D";
} else {
    letterGrade = "F";
}

console.log("You have a " + testGrade + "%, which means you have earned a " + letterGrade);


var movieTime = 1600;
var age = "30";
var price = 7;


if (movieTime<1500 || movieTime>1700){
    price = 12;
} else if (age<10 || age>55){
    price = 7;
}

console.log("Ticket price is $" + price);