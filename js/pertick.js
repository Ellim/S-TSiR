function updateworkers() {
	var tempvar = document.getElementById("freeworkers");
	tempvar.innerHTML = freeworkers.toFixed(0);
	var tempvar2 = document.getElementById("researchernum");
	tempvar2.innerHTML = researchers.toFixed(0);
	var tempvar3 = document.getElementById("farmernum");
	tempvar3.innerHTML = farmers.toFixed(0);
	var tempvar4 = document.getElementById("loggernum");
	tempvar4.innerHTML = loggers.toFixed(0);
	var tempvar5 = document.getElementById("minernum");
	tempvar5.innerHTML = miners.toFixed(0);
	var tempvar6 = document.getElementById("warriornum");
	tempvar6.innerHTML = warriors.toFixed(0);	
}

function updateresources() {
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
	var tempvar4 = document.getElementById("total_RP");
	tempvar4.innerHTML = researchpoints.toFixed(0);
	var tempvar5 = document.getElementById("pop");
	tempvar5.innerHTML = population.toFixed(0);
	var tempvar6 = document.getElementById("popmax");
	tempvar6.innerHTML = popmax.toFixed(0);
	var tempvar7 = document.getElementById("total_wood");
	tempvar7.innerHTML = wood.toFixed(2);
	var tempvar8 = document.getElementById("woodmax");
	tempvar8.innerHTML = woodmax.toFixed(0);
	var tempvar9 = document.getElementById("total_stone");
	tempvar9.innerHTML = stone.toFixed(2);
	var tempvar10 = document.getElementById("stonemax");
	tempvar10.innerHTML = stonemax.toFixed(0);
	var tempvar11 = document.getElementById("total_coal");
	tempvar11.innerHTML = coal.toFixed(2);
	var tempvar12 = document.getElementById("coalmax");
	tempvar12.innerHTML = coalmax.toFixed(0);
	var tempvar13 = document.getElementById("total_clay");
	tempvar13.innerHTML = clay.toFixed(2);
	var tempvar14 = document.getElementById("claymax");
	tempvar14.innerHTML = claymax.toFixed(0);
	var tempvar15 = document.getElementById("total_mana");
	tempvar15.innerHTML = mana.toFixed(0);
}

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
	tempvar2.innerHTML = (waterrate/(watertick/1000)).toFixed(2) + '/sec';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	
	if (popmax > 1 && currentfood > (popmax * 2)) {
		if (population < popmax) {
			var rand = 1 + Math.floor(Math.random() * 20);
			if (rand > 14) {
				population += 1;
				freeworkers += 1;
				foodrate -= .75;
				waterrate -= 2;
				var tempvar = document.getElementById("pop");
				tempvar.innerHTML = population.toFixed(0);
				var tempvar2 = document.getElementById("freeworkers");
				tempvar2.innerHTML = freeworkers;
			}
		}
	}
		
	if (water < 0) {
		water = 0;
		
		/*Need to improve this with a for loop and making jobs an array
	or possibly through an object*/
	
	if (population > 1) {
			if (water < 1) {
				population -= 1;
				var tempvar = document.getElementById("pop");
				tempvar.innerHTML = population.toFixed(0);
				foodrate += .75;
				
				waterrate += 2;
				
				if (farmers > 0) {
					farmers -= 1;
					var tempvar2 = document.getElementById("farmernum");
					tempvar2.innerHTML = farmers;
					return;
				}
				if (loggers > 0) {
					loggers -= 1;
					var tempvar3 = document.getElementById("loggernum");
					tempvar3.innerHTML = loggers;
					return;
				}
				if (miners > 0) {
					miners -= 1;
					var tempvar4 = document.getElementById("minernum");
					tempvar4.innerHTML = miners;
					return;
				}
				if (researchers > 0) {
					researchers -= 1;
					var tempvar5 = document.getElementById("researchernum");
					tempvar5.innerHTML = researchers;
					return;
				}
				if (warriors > 0) {
					warriors -= 1;
					var tempvar6 = document.getElementById("warriornum");
					tempvar6.innerHTML = warriors;
					return;
				}
				if (freeworkers > 0) {
					freeworkers -= 1;
					var tempvar7 = document.getElementById("freeworkers");
					tempvar7.innerHTML = freeworkers;
					return;
				}
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
	
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	
	if (currentfood < 0) {
		currentfood = 0;
		
		if (population > 1) {
			if (currentfood < 1) {
				population -= 1;
				var tempvar = document.getElementById("pop");
				tempvar.innerHTML = population.toFixed(0);
				foodrate += .75;
				
				waterrate += 2;
				
				if (farmers > 0) {
					farmers -= 1;
					var tempvar2 = document.getElementById("farmernum");
					tempvar2.innerHTML = farmers;
					return;
				}
				if (loggers > 0) {
					loggers -= 1;
					var tempvar3 = document.getElementById("loggernum");
					tempvar3.innerHTML = loggers;
					return;
				}
				if (miners > 0) {
					miners -= 1;
					var tempvar4 = document.getElementById("minernum");
					tempvar4.innerHTML = miners;
					return;
				}
				if (researchers > 0) {
					researchers -= 1;
					var tempvar5 = document.getElementById("researchernum");
					tempvar5.innerHTML = researchers;
					return;
				}
				if (warriors > 0) {
					warriors -= 1;
					var tempvar6 = document.getElementById("warriornum");
					tempvar6.innerHTML = warriors;
					return;
				}
				if (freeworkers > 0) {
					freeworkers -= 1;
					var tempvar7 = document.getElementById("freeworkers");
					tempvar7.innerHTML = freeworkers;
					return;
				}
			}
		}
	}
	}, foodtick);
}


document.getElementById("newgame").onclick = function() {
		updatewater();
		updatefood();
		updatefarmer();
		updatelogger();
		updateminer();
		updateresearcher();
		autosave();
		updateresources();
		updateworkers();
}

document.getElementById("loadgame").onclick = function() {
		loadgame();
		updatewater();
		updatefood();
		updatefarmer();
		updatelogger();
		updateminer();
		updateresearcher();
		autosave();
		updateresources();
		updateworkers();
		
		if (burntalent > 0) {
			$('#minebuttondiv').removeClass('hidden');
			$('#minetalent').addClass('hidden');
		}
		
		if (minetalent > 0) {
			$('#burnbuttondiv').removeClass('hidden');
			$('#burntalent').addClass('hidden');
		}

		var tempvar6 = document.getElementById("riverupgradecost");
		tempvar6.innerHTML = riverupgradecost.toFixed(0);
		var tempvar7 = document.getElementById("riverlevel");
		tempvar7.innerHTML = riverlevel;
		var tempvar8 = document.getElementById("riverproduction");
		tempvar8.innerHTML = ((riverupgradecost * 20)/(watertick/1000)).toFixed(2);
		
		var tempvar11 = document.getElementById("hutnum");
		tempvar11.innerHTML = huts;
		var tempvar12 = document.getElementById("hutcost");
		tempvar12.innerHTML = hutcost.toFixed(2);
		var tempvar13 = document.getElementById("hutexp");
		tempvar13.innerHTML = hutcost.toFixed(2);
		
		var tempvar21 = document.getElementById("granarynum");
		tempvar.innerHTML = granaries;
		var tempvar22 = document.getElementById("granarywoodcost");
		tempvar22.innerHTML = granarywoodcost;
		var tempvar23 = document.getElementById("granarystonecost");
		tempvar23.innerHTML = granarystonecost;

		var tempvar28 = document.getElementById("shnum");
		tempvar28 = storehouses;
		var tempvar29 = document.getElementById("shcost");
		tempvar29.innerHTML = shcost.toFixed(2);

}
	
/*
First water source is a stream, provides 10 water per second base.
Can upgrade base rate with Irrigation, Aquifer, Tank.

Second water source is waterfall, provides 50 water per second base.
Can upgrade base rate with Tributaries, and Pipes.

Third water source is Desalination Plant, provides 1000 water per second base but consumes power.
Upgrades pending.
*/
