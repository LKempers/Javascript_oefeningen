"use strict"

//defineer even
//defineer odd


for (i = 0;i<21;i++){

	//wat is het restant?
	let remainingnumber = i % 2;

	//waneer het nummer dat overblijft hoger dan 0 is, is het odd
	if ( remainingnumber > 0 ) {
		console.log( i + " is odd " );
	}
	
	else {
	console.log( i + " is even " );

	}
}
