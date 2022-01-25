function countdown(){ //creating a countdown function
    var seconds = document.getElementById("seconds").value; //assigning the method to get seconds value
    function tick(){ //creating the ticking function
        seconds = seconds - 1; //creating a negative 1 decrement from initial time start
        timer.innerHTML=seconds;
        var time = setTimeout(tick, 1000); //tick rate 1000milliseconds which is 1 second
        if (seconds == -1) { // if timer goes below 0 seconds then execute next line
            alert("Times up!");
            clearTimeout(time);
            timer.innerHTML="";
        }
    }
    tick();
}