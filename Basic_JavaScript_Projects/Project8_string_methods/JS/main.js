function full_sentence(){ //concatenating strings to make a full sentence!
    var part_1 = "I can not ";
    var part_2 = "wait to go ";
    var part_3 = "to the gym ";
    var part_4 = "tonight.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML= whole_sentence;
}

function sliceMethod() { //Displaying a specific word from a sentence by positions.
    var sentence = "I love the new James Webb Space telescope."
    var section = sentence.slice(15, 25);
    document.getElementById("slice").innerHTML=section;
}


      var txt = "I love science!"; // upper and lower case method of text
      document.write(txt.toUpperCase());
      document.write("<br>");
      document.write(txt.toLowerCase());
      document.write("<br>");

      var txt_1 = "The moon is currently in a waning Gibbous phase." //Displaying specific position of a word in a sentence
      var txt_2 = txt_1.search("Gibbous");
      document.write(txt_2);
      document.write("<br>");

function string_Method(){ //toString method
    var X = 1000;
    document.getElementById("numbers_to_string").innerHTML=X.toString();
}

function precision_Method(){ //precision method(displaying a specific amount of integers)
    var X = 3.1415926535;
    document.getElementById("Precision").innerHTML=X.toPrecision(3);
}

function fixed_Method(){ //Fixed method rounding numbers up or down
    var X = 3.1415926535;
    document.getElementById("fixed").innerHTML=X.toFixed();
}

function value_Method(){ // displaying primitive value 
    var X = 5000;
    document.getElementById("value").innerHTML=X.valueOf();
}