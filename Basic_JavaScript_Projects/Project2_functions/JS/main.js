function Ericks_function() { //Naming my function
    var str = "You dare-devil you!"; //functions string result
    document.getElementById("button_text").style.color="blue";//Assigning the result a blue text
    document.getElementById("button_text").style.backgroundColor="pink";//Making the background pink
    document.getElementById("button_text").innerHTML = str;
}

function Function1() { //naming my concatenating function
    var sentence = "I am learning"; //result in sentence
    sentence += " a lot from this book!";//concatenating strings
    document.getElementById("Concatenate").innerHTML= sentence;//assigning this method an ID
}