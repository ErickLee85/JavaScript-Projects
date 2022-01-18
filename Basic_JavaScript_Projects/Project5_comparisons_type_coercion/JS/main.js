document.write("50" + 100); //concatenating a string and integer
document.write("<br>");

document.write(2E310); //displaying infinity
document.write("<br>");

document.write(-3E310); //displaying negative infinity
document.write("<br>");

document.write(100 < 101); //boolean logic truth
document.write("<br>");

document.write(1000 < 100); //boolean logic false
document.write("<br>");

document.write(typeof "word"); //typeof operator displays date type of a variable. Here "word" is defined as a string
document.write("<br>");

document.write(typeof 6); //type of operator displays data type of a variable. Here 6 is an integer, if it was in quotes it would be a string.

function my_Function() {
    document.getElementById("test").innerHTML=isNaN('69'); //boolean logic false. NaN="Not a Number"
}

console.log(typeof "word"); //typeof operator displays date type of a variable. "string" would be displayed in console

console.log(20 + 20); //addition in the console

console.log(20 > 50); //boolean logic in console

console.log(20==21); // checking if both variables are equal to one another

console.log(21==21); // """"

A = 10
B = 10
console.log(A===B); // === checking if both value and type are equal

C = "10"
D = 11
console.log(C===D); //here the types are different because 10 is in "" it is defined as a string

E = "11"
F = 11
console.log(E===F); // here the types are different as well because 11 is both a string and number in these variables

G = 12
H = 13
console.log(G===H); // same type but different values

console.log(5 > 1 && 5 > 4); //&& AND logic computes if both expressions are true

console.log(10 < 9 && 10 < 100);

console.log(1 < 2 || 5 > 6); // || OR logic computes if one expression is true

console.log(1 > 2 || 2 < 1);

function not_Function() { // ! NOT logic displays false if something is true and vice versas
    document.getElementById("not").innerHTML=! (30 > 10);
}



