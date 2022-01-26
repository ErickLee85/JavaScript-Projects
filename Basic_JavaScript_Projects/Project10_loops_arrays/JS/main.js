function Call_Loop() { //creating a loop function
    var text = "";
    var i = 0;
    while (i < 10) { // while loop/properties
        text += "<br>" + i;
        i++;
    document.getElementById("Loop").innerHTML= text;
    }
}

function halloween(){ //function for length method of a my string 
let text = "Happy Halloween";
let length = text.length;
document.getElementById("length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {//utilizing a loop to quickly display an array 
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML= Content;
}

function cat_pics(){ 
    var cat_Picture = ["sleeping", "playing", "eating", "purring" ];
    document.getElementById("cat").innerHTML="In this picture, the cat is " + cat_Picture[1] + ".";
}

function constant_function(){ //creating an object with properties and values
    const acura_Types = {brand:"Acura", color:"pearl white", model:"TLX"};
    acura_Types.price = "$45,000";
    acura_Types.color = "sunset orange";
    document.getElementById("constant").innerHTML= "My favorite car is a " + acura_Types.brand +" " + acura_Types.model +
    ", I want the " + acura_Types.color + " one" + " but it's so expensive: " + acura_Types.price + ".";
}

function ericksFunction(){ //return function utilizing math.PI method
    return Math.PI;
}
document.getElementById("pie").innerHTML= ericksFunction();

let house = { //creating the object "house" with properties and values
    color: "navy blue",
    stories: "one",
    bathrooms: "three",
    garage: "2 car",
    acres: "1",
    description: function() { // utilizing a return function for output
        return "I would love a " + house.color + " home, on " + house.acres + " acre with a "
        + house.garage + " garage.";
    }
};
    document.getElementById("House_Object").innerHTML= house.description();

    var text = ""; 
    var i = 0;
    while (i < 10) {
        text += "<br>" +i; i++;
        if (i == 5) {break;}//break statement if condition exist, the loop will stop. Opposite is true with "continue"
    }
    document.getElementById("breaking").innerHTML= text;
