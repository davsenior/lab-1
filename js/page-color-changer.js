const output = document.querySelector('body p:nth-of-type(2)');

/* STEP 2: The more complex if|elseif|else */
const page = document.querySelector('html');
const select = document.querySelector('select');
const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');
const range = document.querySelector('#range');

red.addEventListener("click", setColor);
green.addEventListener("click", setColor);
blue.addEventListener("click", setColor);

function setWeather() {
	console.log("changeColor function called!");
	let choice = select.value;
	let red = 
    let green = 
    let blue = 
	console.log(`Weather is ${choice} and temperature is ${temperature}.`);
if (choice === "red") {
	//change color of screen 
	if (range >= 255) {
		page.style.backgroundColor = "red";
	} 
} else if (choice === "green") {
	page.style.backgroundColor = "green";
} else if (choice === "blue") {
	page.style.backgroundColor = "blue";
} 
}