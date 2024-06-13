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

// var friends = ['Joyce', 'Jen', 'Sarah'];
// friends.push('Justice');
// // console.log(friends);
// // console.log(friends.length);
// friends.unshift('Dami');

// console.log(friends.indexOf('Sarah'));
// console.log(friends.includes('Jayde'));

// if (friends.includes('Nancy')) {
//   console.log('call Jayde');
// } else {
//   console.log('Jayde is not your friend, love');
// }

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(tips, total);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYear: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: false,

//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${jonas.calcAge(this.birthYear)} year old ${
//       jonas.job
//     }, and has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//   },
// };
// console.log(jonas);
// console.log(jonas.age);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt(
//   'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
// );
// console.log(jonas[interestedIn]); //this is better for object bracket notation than dot notation. It is more dynamic.

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     'Wrong request, please choose between firstName, lastName, age, job, and friends'
//   );
// }
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

//Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
// console.log(jonas.friends[0]);
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );
// console.log(jonas.calcAge(1994));

// console.log(
//   `${jonas.firstName} is a ${jonas.calcAge(1991)} old teacher,and has a ${
//     jonas.hasDriversLicense
//   } driver's license`
// );

// console.log(jonas.getSummary());

// /* Write your code below. Good luck! 🙂 */

// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
//   );
// }

// for (let cook = 0; cook <= 10; cook++) {
//   console.log('cooking repetition ' + cook);
// }

// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   false,
// ];

// for (let i = 0; i < 5; i++) {
//   console.log(jonas[i]);
// }

// const year = [1991, 2007, 1969, 2020];
// const age = [];
// for (let i = 0; i < year.length; i++) {
//   age.push(2037 - year[i]);
// }
// console.log(age);

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏼‍♂️`);
//   }
// }

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
// while (dice !== 6) {
//   console.log(`you have rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end');
// }

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
