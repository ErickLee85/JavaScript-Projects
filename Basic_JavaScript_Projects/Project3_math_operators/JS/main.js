function addition_function() {
    var addition = 10 + 10;
    document.getElementById("Math").innerHTML= "10 + 10 = " + addition;
}

function subtraction() {
    var subtraction = 100 - 0;
    document.getElementById("Math1").innerHTML= "100 - 0 = " + subtraction;
}

function multiplication() {
    var simple_Math = 9 * 9;
    document.getElementById("Math2").innerHTML= "9 * 9 = " + simple_Math;
}

function division() {
    var simple_Math = 1000 / 100;
    document.getElementById("Math3").innerHTML= "1000 / 100 = " + simple_Math;
}

function crazyMath() {
    var simple_Math = (1 + 2) * 10 / 2 -5;
    document.getElementById("Math4").innerHTML= "1 plus 2 multiplied by 10 divided in half and subtracted by 5 equals "
    + simple_Math;
}

function modulus_operator() {
    var simple_Math = 50 % 11;
    document.getElementById("Math5").innerHTML = "When you divide 50 by 11 you have a remainder of : " + simple_Math;
}

function negation_Operator() {
    var x = 25;
    document.getElementById("Math6").innerHTML = -x;
}
function increment() {
var a = 10;
a++;
document.getElementById("Math7").innerHTML = a;
}

function decrement() {
var b = 10;
b--;
document.getElementById("Math8").innerHTML = b;
}

function random() {
window.alert(Math.random() * 1000);
}

var myNum;
myNum = Math.PI;



