// loops, if are so important

//i used the anonymous function, as you can see the funstion isn't defined

for(let i =0; i< document.querySelectorAll(".drum").length; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

alert("I just got clicked")
});
}


//caling a function inside a function 

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}