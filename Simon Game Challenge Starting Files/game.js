var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
   var randomNumber = Math.floor(Math.random() * 4);
   var randomChosenColour = buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
}

$("#" + randomChosenColor).on("click", function () {
 
      $("." + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100);
 
      var audio = new Audio("/Simon Game Challenge Starting Files/sounds" + randomChosenColor + ".mp3");
      audio.play();
      return randomChosenColor;
   });
 
$(".btn").click(nextSequence);
