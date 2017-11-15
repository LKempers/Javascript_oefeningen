"use strict"

let number = '25683';

// selecteer en zet het nummer
document.getElementById('number') .innerHTML = number;

// blij klik op knop draai het om
function revert() {
	document.getElementById('number') .innerHTML = number.split("").reverse().join("");

}