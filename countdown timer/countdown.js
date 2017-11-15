"use strict"

//totale tijd
let time;
time  = 61;

//zet tijd neer
document.getElementById('timer') .innerHTML = time;

//tel af van totale tijd
function countdown () {

	time = time - 1;
	window.setTimeout(countdown, 1000);

	//zet tijd neer
	document.getElementById('timer') .innerHTML = time;


	//maak tijd rood bij laatste 10 sec
	if (time < 11) {
    document.getElementById("timer").style.color = "red";
    //geef aan dat de tijd voorbij is en stop de tijd
    if (time < 1) {
    document.getElementById("timer"). innerHTML = "Einde minuut";
		}
	}
}

