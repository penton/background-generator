var css = document.querySelector("h3");
var colore1 = document.querySelector(".colore1");
var colore2 = document.querySelector(".colore2");
var body = document.getElementById("body");


function setGradient() {
	body.style.background = "linear gradient(to right," + colore1.value + "," + colore2.value + ")";
}


colore1.addEventListener("input", setGradient); 

colore2.addEventListener("input", setGradient);