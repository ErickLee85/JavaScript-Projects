function DinoDictionary() { //Naming my function!
    var Dinosaurs = { //Creating a Dinosaur dictionary with key value pairs of clades and species.
        Theropod:"Tyrannosaurus Rex",
        Sauropod:"Apatosaurus",
        Ornithischia:"Tianyulong"
    };
    delete Dinosaurs.Theropod; //deleting this key value pair so it wont be displayed.
    document.getElementById("Dino").innerHTML=Dinosaurs.Theropod + " of course!"; //output.
}