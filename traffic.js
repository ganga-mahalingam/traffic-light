var redl= document.getElementById("redl");
var yellowl= document.getElementById("yellowl");
var greenl= document.getElementById("greenl");

function stop(){
    redl.style.backgroundColor = "rgb(195, 44, 44)";  
    yellowl.style.backgroundColor = "whitesmoke";
    greenl.style.backgroundColor= "whitesmoke";
}

function ready(){
    redl.style.backgroundColor = "whitesmoke"; 
    yellowl.style.backgroundColor = "rgb(195, 158, 47)";
    greenl.style.backgroundColor = "whitesmoke";
}

function go(){
    redl.style.backgroundColor = "whitesmoke";  
    yellowl.style.backgroundColor = "whitesmoke";  
    greenl.style.backgroundColor = "green";
}