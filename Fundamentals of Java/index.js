// var name = prompt("What is your name?");
// alert("Hello, " + name + "!");

// let tweet = prompt("Compose your tweet");
// let yourCharacter = tweet.length;
// alert("You have written " + yourCharacter + "characters,  you have " + (140- tweet.length) + "charcters left");
// let tweetLess = tweet.slice(0,140);
// alert(tweetLess);
// let capital = tweet.toUpperCase();

// var name = prompt("What is your name?");
// var firstName = name.slice(0,1);
// var upperCase = firstName.toUpperCase();
// var restName = name.slice(1,name.length);
// var restLetter = restName.toLowerCase();
// restName = restLetter;
// var together = upperCase + restName;
// alert("Hello, " + together + " !");

//  function getMilk(money) {
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveUp");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + Math.floor(money/1.5) + " bottles of milk");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveDown");
//     console.log("moveLeft");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return money % 1.5;
// }

// getMilk(5);
// getMilk(2);

// function currentAge(age){
//     var remainingAge = 90 - age;
//     var days = remainingAge * 365;
//     var months = remainingAge * 12;
//     var weeks = remainingAge * 52;
//     console.log("You're " + days + " days, "+ months +" months, and "+ weeks +" weeks left.");
//     return age * 2;
// }
// currentAge(23);

// BMI = weight(kg)/ height squared 2 (m2)
// function bmiCalculator (weight, height){
//   var  bmi =  weight/ (height * height);
//   //bmi = Math.round(bmi);
//      if(bmi <= 18.5){
//        interpretation =  "Your BMI is "+bmi+", so you are underweight.";
//     }else if(bmi >= 18.5 && bmi <= 24.9){
//       interpretation = "Your BMI is "+bmi+", so you have a normal weight." ;
//     }else if (bmi > 24.9){
//      interpretation =  "Your BMI is "+bmi+", so you are overweight." ;
//     }
//     return interpretation
// }
// bmiCalculator(78, 163);

// /** The different types of functions in JavaScripts are:
//     * 1. Function Declaration
//     * 2. Function Expression
//     * 3. Arrow Function
//     * 4. Anonymous Function
//     * 5. IIFE (Immediately Invoked Function Expression)
//     * 6. Generator Function
//     * 7. Recursive Function
//     * 8. Callback Function
//     * 9. Higher Order Function
//     * 10. Pure Function
//     * 11. Impure Function
//     * 12. Asynchronous Function
//     * 13. Synchronous Function
//     * 14. Nested Function
//     * 15. Named Function
//     * 16. Anonymous Function
//     * 17. Constructor Function - is a special function that creates and initializes an object instance of a class. In JavaScript, a constructor gets called when an object is created using the new keyword
//     * 18. Factory Function
//     * 19. Method Function
//     * 20. Static Function
//     * 21. Prototype Function
//     * 22. Class Function
//     * 23. Regular Function
//     * 24. Generator Function
//     * 25. Recursive Function
//     * 26. Callback Function
//     * 27. Higher Order Function
//     * 28. Pure Function
//     * 29. Impure Function

//  */

// let n = Math.random();
// n = n * 12
// n= Math.floor(n) + 3;
// console.log(n);

// let nameOne = prompt("What is your name?");
// let nameTwo = prompt("What is their name?");
//   let n = Math.random();
//   n = n * 100;
//   n = Math.floor(n) + 1;
// if (n < 50){
// alert(`${nameOne} and  ${nameTwo} are ${n}% compartible, You will find love soon. Don't worry hun`);
// }else{
// alert(`${nameOne} and  ${nameTwo} are ${n}% compartible. Keep learning and communicating with your partner.`);

// }
// alert(`${nameOne} and  ${nameTwo} ${n}% compartible `);
// //learning the if else statement
// function isLeapYear(year){
// if(year % 4 == 0){
//   console.log("Leap year.");
// }else{
//   console.log("Not leap year.");
// }if(year %100 == 0){
//   console.log("Leap year.");
// }else{
//   console.log("Not leap year.");
// }if(year % 400 == 0){
//   console.log("Leap year.");
// }else{
//   console.log("Not leap year.");
// }
// }
// /**
// Learning Arrays in Javascript
// array.length, array.include
//  */
// var nameFinder = prompt("What is your name?");
// var guestList = ["Angela","Jack", "Pan", "James","Lara", "Jason"];
// if (guestList.includes(nameFinder)){
//   alert("welcome ")
// }else{
//   alert("sorry next time ")
// }

// var sequence = [];
// var count = 1;
// function fixbus(sequence) {
//   if (count % 3 == 0 && count % 5 == 0) {
//     sequence.push('FizzBuzz');
//   } else if (count % 3 == 0) {
//     sequence.push('Fizz');
//   } else if (count % 5 == 0) {
//     sequence.push('Buzz');
//   } else {
//     sequence.push(count);
//   }
//   count++;
//   return sequence;
// }
// console.log(fixbus());

//Loops in JavaScript

/**
while loops: repeatedly run a piece of code 
while (condition){
    Do something
    condition ++
}

For Loop: how many 
for(let i = 0; i< 2; i++){
    Do something 
}
 */

//Creating the Fibonnaci Sequence using an array. create a solution called output. Start from [0,1].
// making use of flowchart . using draw.io
// function fibonaciGenerator(n) {
//   var arr = [];
//   if (n > 0) {
//     arr.push(0);
//   }
//   if (n > 1) {
//     arr.push(1);
//   }
//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   return arr;
// }

var friends = ['Joyce', 'Jen', 'Sarah'];
friends.push('Justice');
console.log(friends);
console.log(friends.length);
friends.unshift('Dami');
console.log(friends);
