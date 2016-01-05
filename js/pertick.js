
var waterinterval;
var foodinterval;
var watertick = 2000;
var foodtick = 500;
var water = 0;
var waterrate = 20;
var watermax = 1000;
var foodrate = 0;
var foodon = 0;
var currentfood = 15;
var foodmax = 150;
var totalexp = 0;
var fruittreecost = 25;

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
	tempvar.innerHTML = water;
	var tempvar2 = document.getElementById("waterps");
	tempvar2.innerHTML = '+' + (waterrate/(watertick/1000)).toFixed(2) + '/sec';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	}, watertick);
}
	
function updatefood() {
  clearInterval(foodinterval);
  foodinterval = setInterval(function() {
	if (food < foodmax) {
		food += foodrate;
	}
	if (food > foodmax) {
		food = foodmax;
	}
	var tempvar = document.getElementById("currentfood");
	tempvar.innerHTML = currentfood;
	var tempvar2 = document.getElementById("foodps");
	tempvar2.innerHTML = '+' + (foodrate/(foodtick/1000)).toFixed(2) + '/sec';
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}, foodtick);
}


document.getElementById("newgame").onclick = function() {
		updatewater();
	}

	
/*
First water source is a stream, provides 10 water per second base.
Can upgrade base rate with Irrigation, Aquifer, Tank.

Second water source is waterfall, provides 50 water per second base.
Can upgrade base rate with Tributaries, and Pipes.

Third water source is Desalination Plant, provides 1000 water per second base but consumes power.
Upgrades pending.
*/
