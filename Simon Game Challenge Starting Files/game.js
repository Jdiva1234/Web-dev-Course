// var gamePattern = [];
// var buttonColours = ["red", "blue", "green", "yellow"];

// function nextSequence() {
//    var randomNumber = Math.floor(Math.random() * 4);
//    var randomChosenColour = buttonColours[randomNumber];
//    gamePattern.push(randomChosenColour);
// }

// $("#" + randomChosenColor).on("click", function () {

//       $("." + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100);

//       var audio = new Audio("/Simon Game Challenge Starting Files/sounds" + randomChosenColor + ".mp3");
//       audio.play();
//       return randomChosenColor;
//    });

// $(".btn").click(nextSequence);

// creates a array with the colors
var buttonsColors = ["red", "blue", "green", "yellow"];

// creates a game pattern
var gamePatterns = [];

// Creates a random number 0-3. Links the randon number with the colors. insert pattern in the game pattern
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonsColors[randomNumber];
  gamePatterns.push(randomChosenColor);

  //On click select the element's ID and execute the following function.

  $("#" + randomChosenColor).on("click", function () {
    // Select the corresponding CLASS e make it pulse.
    $("." + randomChosenColor)
      .fadeOut(100)
      .fadeIn(100);

    //added the sound
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

    return randomChosenColor;
  });
}
// Triggers again the function after a click
$(".btn").click(nextSequence);

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
});
