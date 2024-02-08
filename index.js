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
function bmiCalculator (weight, height){
  var  bmi =  weight/ (height * height);
  //bmi = Math.round(bmi);
      console.log('Your BMI is ' + bmi);
      return bmi;
}
bmiCalculator(78, 163);

/** The different types of functions in JavaScripts are: 
    * 1. Function Declaration
    * 2. Function Expression
    * 3. Arrow Function
    * 4. Anonymous Function
    * 5. IIFE (Immediately Invoked Function Expression)
    * 6. Generator Function
    * 7. Recursive Function
    * 8. Callback Function
    * 9. Higher Order Function
    * 10. Pure Function
    * 11. Impure Function
    * 12. Asynchronous Function
    * 13. Synchronous Function
    * 14. Nested Function
    * 15. Named Function
    * 16. Anonymous Function
    * 17. Constructor Function
    * 18. Factory Function
    * 19. Method Function
    * 20. Static Function
    * 21. Prototype Function
    * 22. Class Function
    * 23. Regular Function
    * 24. Generator Function
    * 25. Recursive Function
    * 26. Callback Function
    * 27. Higher Order Function
    * 28. Pure Function
    * 29. Impure Function 
    
 */
 
// let n = Math.random();
// n = n * 12
// n= Math.floor(n) + 3;
// console.log(n); 

let nameOne = prompt("What is your name?");
let nameTwo = prompt("What is their name?");
  let n = Math.random();
  n = n * 100;
  n = Math.floor(n) + 1;
alert(`${nameOne} and  ${nameTwo} ${n}% compartible `);

