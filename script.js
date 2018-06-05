var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

initialState();

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
	// body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

color2.addEventListener("input", setGradient);
	// body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// });

// "#" + Math.random().toString(16).slice(2, 8);

button.addEventListener("click", function(){
	color1.value = "#" + Math.random().toString(16).slice(2, 8);
	color2.value = "#" + Math.random().toString(16).slice(2, 8);
	setGradient();
});

function initialState(){
	color1.value = "#" + Math.random().toString(16).slice(2, 8);
	color2.value = "#" + Math.random().toString(16).slice(2, 8);
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
}