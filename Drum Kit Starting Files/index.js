// loops, if are so important

//i used the anonymous function, as you can see the funstion isn't defined


//detecting button press
for(let i =0; i< document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
});
}
//detecting keyboard press 

document.addEventListener("keypress", function(event){
makeSound(event.key) //functions can also be call back 
}); 

function makeSound(key){
switch (key) {
        case "w":
            var audio = new Audio('/Drum Kit Starting Files/sounds/tom-1.mp3');
           audio.play();
            break;
        case "a":
            var audio = new Audio('/Drum Kit Starting Files/sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
             var audio = new Audio('/Drum Kit Starting Files/sounds/tom-3.mp3');
             audio.play();
    case "d":
    var audio = new Audio('/Drum Kit Starting Files/sounds/tom-4.mp3');
             audio.play();
             break;
        case "j":
    var audio = new Audio('/Drum Kit Starting Files/sounds/snare.mp3');
             audio.play();
             break;
         case "k":
    var audio = new Audio('/Drum Kit Starting Files/sounds/kick-bass.mp3');
             audio.play();
             break;
      case "l":
    var audio = new Audio('/Drum Kit Starting Files/sounds/crash.mp3');
             audio.play();
             break;
        default: console.log(buttonInnerHTML);
            break
    }
}
















var housekeeper1 = {
    experience: 10,
    isSheMarried: false,
    ceaningSpecialuties: 'clothes washing',
    }



function Housekeeper (experience, name, hasWorkPermit) {
this.experience = experience;
this.name = name;
this.hasWorkPermit = hasWorkPermit;
this.cleaning = function (){
        alert("clean the stairs");
}
}

var housekeeper1 = new HouseKeeper(9, "JOHNNY, YES");

/**
an example of a constructor function: they start with capital letters  
function BellBoy(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.lanaguages = languages;
}
 */










//caling a function inside a function called higher order functions

// function add(num1, num2){
//     return num1 + num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }
 
//  function substract(num1, num2){
//     return num1 - num2;
//  }

//  function divide(num1, num2){
//     return num1 / num2;
//  }


// function calculator(num1, num2, operator){
//     return operator(num1, num2);
// }
