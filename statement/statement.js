//de 5 nummers
var numbers = [19, 2, 420, 6, 20];
var highest = 0;

//blijf de hoogste selecteren
for(i = 0; i < numbers.length; i++){
	if(numbers[i] > highest){
		highest = numbers[i];
	}
}
//presenteer de hoogste
window.alert(highest);
