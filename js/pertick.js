
function autosave() {
	clearInterval(saveinterval);
	saveinterval = setInterval(function() {
		savegame();
	}, savetick);
}


function updatewater() {
  clearInterval(waterinterval);
  waterinterval = setInterval(function() {
	if (water < watermax) {
		water += waterrate;
	}
	if (water > watermax) {
		water = watermax;
	}
	var tempvar = document.getElementById("currentwater");
	tempvar.innerHTML = water.toFixed(2);
	var tempvar2 = document.getElementById("waterps");
	tempvar2.innerHTML = '+' + (waterrate/(watertick/1000)).toFixed(2) + '/sec';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	}, watertick);
}
	
function updatefood() {
  clearInterval(foodinterval);
  foodinterval = setInterval(function() {
	if (currentfood < foodmax) {
		currentfood += foodrate;
	}
	if (currentfood > foodmax) {
		currentfood = foodmax;
	}
	var tempvar = document.getElementById("currentfood");
	tempvar.innerHTML = currentfood.toFixed(2);
	var tempvar2 = document.getElementById("foodps");
	tempvar2.innerHTML = '+' + (foodrate/(foodtick/1000)).toFixed(2) + '/sec';
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}, foodtick);
}


document.getElementById("newgame").onclick = function() {
		updatewater();
		updatefood();
		autosave();
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
}

document.getElementById("loadgame").onclick = function() {
		loadgame();
		updatewater();
		updatefood();
		autosave();
		var tempvar = document.getElementById("currentwater");
		tempvar.innerHTML = water.toFixed(2);
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
}
	
/*
First water source is a stream, provides 10 water per second base.
Can upgrade base rate with Irrigation, Aquifer, Tank.

Second water source is waterfall, provides 50 water per second base.
Can upgrade base rate with Tributaries, and Pipes.

Third water source is Desalination Plant, provides 1000 water per second base but consumes power.
Upgrades pending.
*/
