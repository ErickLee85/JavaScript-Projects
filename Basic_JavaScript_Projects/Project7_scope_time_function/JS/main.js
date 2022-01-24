function localFunction() { // Creating a local variable by placing x inside the function, it can only be used inside this function.
    var x = 20
    document.write(x + 10 + "<br>");
    document.write("<br>");
}
    localFunction();

    var x = 100 // Creating a global variable by placing it outside the function, any function can call it.
    function globalFunction() {
        document.write(200 - x + "<br>" );
        document.write("<br>");
    }
    globalFunction();

    function debugTime() { // Debugging code in the console, the variable A is not defined. 
        console.log(A + 100);
    }
     debugTime();

function newFunction(){ //Creating a conditional function using if and else statements.
    var Bank;
    Bank = document.getElementById("money").value;
    if (Bank < 100) {
        moneyOne = "You had better start saving!";
    }
    else {
        moneyOne = "You are doing great, keep it up!";
    }
       document.getElementById("condition").innerHTML= moneyOne;
}

function Time_function(){ //Creating a conditional function using three statements(if, else if and else)
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time >=12 == Time < 18){
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
}

