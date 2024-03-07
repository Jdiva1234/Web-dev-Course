$("h1").css("color","red");
$("button").css("fontSize", 10);   //playing with the syles in JQuery
$("a").attr("href",  "https://bootcamp.uxdesign.cc/5-6-ui-patterns-to-power-your-ai-products-ae1591981a78?gi=064232448b49&ref=dailydev") //playing JQuery attribute 

$("button").click(function(){
    $("h1").css("color","purple");
})

$(document).keypress(function(event){
    $("h1").text(event.key); //this allows it to show on the hello section
    $("button").text(event.key); //this allows it to show the keypad pressed in the buttons just like the h1 and the console
    console.log(event.key); //this allows it to show on the console.
});