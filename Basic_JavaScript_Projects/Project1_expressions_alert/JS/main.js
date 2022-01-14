window.alert("I hope you\'re having a great day!")//Alert window upon page opening

document.write("This is the body.")//Writing in the body
    document.write("<br>");

var a = "Jupiter", b = "Saturn"; //Assigning string values to  the var a & b
    document.write("<br>");

document.write("My favorite planets are " +a+  " and "  +b+".");//Concatenating string values
    document.write("<br>");

document.write(5 + 5);//Writing an expression
    document.write("<br>");

function My_first_function() {//Button function
    var str = "This is the button text!";
    document.getElementById("Button_Text").innerHTML= str;
}