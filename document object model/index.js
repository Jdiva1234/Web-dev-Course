
// document.querySelector("h1").innerHTML= "GoodBye User";
var heading = document.firstElementChild.lastElementChild.firstChild;
heading.innerHTML = "Good morning";
document.querySelector("input").click();
//document.querySelector("ul").lastElementChild.innerHTML="Johnny";
document.getElementsByTagName("li")[2].style.color = "green";
document.querySelector("li").style.fontSize = "300%";

document.querySelector("button").style.backgroundColor = "yellow";

/**
Seperation of content.
HTML - for content only
CSS-  for styling
JavaScript-  for behavoiur 
 */

document.querySelector("h1").classList.add("huge");
document.querySelector("h1").innerHTML = "<em> Good Bye</em>";
document.querySelector("a").setAttribute("href", "https://github.com/Jdiva1234");