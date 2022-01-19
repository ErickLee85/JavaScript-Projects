function Ride_Function() { // Here we are creating a ternary operator function. Dictating a variable based off user input and conditional statements.
    var Height, Can_Ride;
Height = document.getElementById("Height").value;
Can_Ride = (Height < 52) ? "You are too short":"You are tall enough"; //The question mark is the ternary operator.
document.getElementById("Ride").innerHTML= Can_Ride + " to ride."; //output based off user input
}

function Vote_Function() { // Another ternary, used in a voting context. 
    var Age, Can_Vote;
Age = document.getElementById("Age").value;
Can_Vote = (Age < 18) ? "Im sorry, you're not quite old enough":"Congratulations, you are eligible";
document.getElementById("Vote").innerHTML= Can_Vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) { //Creating a constructor function
    this.Vehicle_Make = Make; //"this" is creating new object properties
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
    var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // creating new instances of the vehicle class
    var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
    var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
    function myFunction() {
        document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year + ".";
    }

function Animal(Amphibians, Reptiles, Birds, Mammals) { // creating a constructor function 
    this.Animal_Amphibians = Amphibians;//giving properties to the object
    this.Animal_Reptiles = Reptiles;
    this.Animal_Birds = Birds;
    this.Animal_Mammals = Mammals;
}

var Erick = new Animal("Salamander", "Gecko", "Bluejay", "Tiger"); //creating new instances of the Animal object
var Vayda = new Animal("Frog", "Crocodile", "Cardinal", "Cat");
    function aFunction() {
        document.getElementById("Constructors").innerHTML= "Vaydas favorite animal is a " + Vayda.Animal_Mammals + ", her second favorite is a "
        + Vayda.Animal_Reptiles + ".";
    }

function count_Function() { //creating a nested function (function within a function)
    document.getElementById("Nested_Function").innerHTML= Count();
    function Count() {
        var Starting_point = "Hi";
        function Plus_one() {Starting_point +=" there"}
        Plus_one();
        return Starting_point;

    }
}