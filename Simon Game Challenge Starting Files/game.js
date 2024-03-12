var gamePattern = [];
var buttonColours = ["red","blue","green","yellow"];

function nextSequence() {
   var randomNumber =  Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
     gamePattern.push(randomChosenColour);
}

$("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

function playAudio(){
var audio = new Audio('/Simon Game Challenge Starting Files/sounds/yellow.mp3');
audio.play();
}