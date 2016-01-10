
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
		water = watermax - 0.01;
	}
	var tempvar = document.getElementById("currentwater");
	tempvar.innerHTML = water.toFixed(2);
	var tempvar2 = document.getElementById("waterps");
	tempvar2.innerHTML = '+' + (waterrate/(watertick/1000)).toFixed(2) + '/sec';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	
	if (popmax > 1) {
		if (population < popmax) {
			var rand = 1 + Math.floor(Math.random() * 20);
			if (rand > 14) {
				population += 1;
				foodrate -= .75;
				waterrate -= 2;
				var tempvar = document.getElementById("pop");
				tempvar.innerHTML = population.toFixed(0);
			}
		}
	}
	
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
	if (population > 1) {
		if (currentfood < 1) {
			population -= 1;
			foodrate += .75;
			waterrate += 2;
		}
	}
	if (currentfood < 0) {
		currentfood = 0;
	}
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
		
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
		document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
		
		var tempvar = document.getElementById("fruittreecost");
		tempvar.innerHTML = fruittreecost.toFixed(2);
		var tempvar2 = document.getElementById("maxfood");
		tempvar2.innerHTML = foodmax.toFixed(2);
		var tempvar3 = document.getElementById("fruittreenum");
		tempvar3.innerHTML = fruittrees.toFixed(0);
		var tempvar4 = document.getElementById("total_wood");
		tempvar4.innerHTML = wood.toFixed(2);
		var tempvar5 = document.getElementById("currentfood");
		tempvar5.innerHTML = currentfood.toFixed(2);
		
		var tempvar6 = document.getElementById("riverupgradecost");
		tempvar6.innerHTML = riverupgradecost.toFixed(0);
		var tempvar7 = document.getElementById("riverlevel");
		tempvar7.innerHTML = riverlevel;
		var tempvar8 = document.getElementById("riverproduction");
		tempvar8.innerHTML = ((riverupgradecost * 20)/(watertick/1000)).toFixed(2);
		var tempvar9 = document.getElementById("talentpoints");
		tempvar9.innerHTML = talentpoints;
		var tempvar10 = document.getElementById("waterps");
		tempvar10.innerHTML = '+' + (waterrate/(watertick/1000)).toFixed(2) + '/sec';
		
		var tempvar11 = document.getElementById("hutnum");
		tempvar11.innerHTML = huts;
		var tempvar12 = document.getElementById("hutcost");
		tempvar12.innerHTML = hutcost.toFixed(2);
		var tempvar13 = document.getElementById("hutexp");
		tempvar13.innerHTML = hutcost.toFixed(2);
		var tempvar14 = document.getElementById("popmax");
		tempvar14.innerHTML = popmax.toFixed(0);
		var tempvar15 = document.getElementById("currentwater");
		tempvar15.innerHTML = water.toFixed(2);
		
		var tempvar16 = document.getElementById("exptotal");
		tempvar16.innerHTML = totalexp.toFixed(0);
		var tempvar17 = document.getElementById("exptnl");
		tempvar17.innerHTML = exptnl.toFixed(0);
		var tempvar18 = document.getElementById("current_level");
		tempvar18.innerHTML = currentlevel.toFixed(0);
		var tempvar19 = document.getElementById("pop");
		tempvar19.innerHTML = population.toFixed(0);
}
	
/*
First water source is a stream, provides 10 water per second base.
Can upgrade base rate with Irrigation, Aquifer, Tank.

Second water source is waterfall, provides 50 water per second base.
Can upgrade base rate with Tributaries, and Pipes.

Third water source is Desalination Plant, provides 1000 water per second base but consumes power.
Upgrades pending.
*/
