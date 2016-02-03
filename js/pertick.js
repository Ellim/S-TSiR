
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
				var tempvar2 = document.getElementById("freeloaders");
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
					return;
				}
				if (researchers > 0) {
					researchers -= 1;
					return;
				}
				if (warriors > 0) {
					warriors -= 1;
					return;
				}
				if (freeworkers > 0) {
					freeworkers -= 1;
					var tempvar7 = document.getElementById("freeloaders");
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
					return;
				}
				if (researchers > 0) {
					researchers -= 1;
					return;
				}
				if (warriors > 0) {
					warriors -= 1;
					return;
				}
				if (freeworkers > 0) {
					freeworkers -= 1;
					var tempvar7 = document.getElementById("freeloaders");
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
		
		if (burntalent > 0) {
			$('#Burn').removeClass('hidden');
			$('#burn10').removeClass('hidden');
			$('#burn25').removeClass('hidden');
			$('#burn100').removeClass('hidden'); 
			$('#burncheckboxes').removeClass('hidden'); 
			$('#unlockburnbutton').addClass('hidden');
			$('#burntalent').addClass('hidden');
		}
		
		if (minetalent > 0) {
			$('#Mine').removeClass('hidden');
			$('#mine10').removeClass('hidden');
			$('#mine25').removeClass('hidden');
			$('#mine100').removeClass('hidden');
			$('#unlockminebutton').addClass('hidden');
			$('#minetalent').addClass('hidden');
		}
		
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
		document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
		
		var tempvar = document.getElementById("fruittreescost");
		tempvar.innerHTML = fruittreescost.toFixed(2);
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
		var tempvar20 = document.getElementById("maxwater");
		tempvar20.innerHTML = watermax.toFixed(2);
		
		var tempvar21 = document.getElementById("granarynum");
		tempvar.innerHTML = granaries;
		var tempvar22 = document.getElementById("granarywoodcost");
		tempvar22.innerHTML = granarywoodcost;
		var tempvar23 = document.getElementById("granarystonecost");
		tempvar23.innerHTML = granarystonecost;
		var tempvar24 = document.getElementById("woodmax");
		tempvar24.innerHTML = woodmax.toFixed(2);
		var tempvar25 = document.getElementById("stonemax");
		tempvar25.innerHTML = stonemax.toFixed(2);
		
		var tempvar26 = document.getElementById("coalmax");
		tempvar26.innerHTML = coalmax.toFixed(2);
		var tempvar27 = document.getElementById("claymax");
		tempvar27.innerHTML = claymax.toFixed(2);
		var tempvar28 = document.getElementById("shnum");
		tempvar28 = storehouses;
		var tempvar29 = document.getElementById("shcost");
		tempvar29.innerHTML = shcost.toFixed(2);
		var tempvar30 = document.getElementById("total_stone");
		tempvar30.innerHTML = stone.toFixed(2);
		
		var tempvar31 = document.getElementById("total_coal");
		tempvar31.innerHTML = coal.toFixed(2);
		var tempvar32 = document.getElementById("total_clay");
		tempvar32.innerHTML = clay.toFixed(2);
		var tempvar33 = document.getElementById("total_mana");
		tempvar33.innerHTML = mana.toFixed(0);
		var tempvar34 = document.getElementById("total_steam");
		tempvar34.innerHTML = steam.toFixed(0);
		var tempvar35 = document.getElementById("fruittreescost");
		tempvar35.innerHTML = fruittreescost.toFixed(2);
		
		var tempvar36 = document.getElementById("farmernum");
		tempvar36.innerHTML = farmers;
		var tempvar37 = document.getElementById("loggernum");
		tempvar37.innerHTML = loggers;
}
	
/*
First water source is a stream, provides 10 water per second base.
Can upgrade base rate with Irrigation, Aquifer, Tank.

Second water source is waterfall, provides 50 water per second base.
Can upgrade base rate with Tributaries, and Pipes.

Third water source is Desalination Plant, provides 1000 water per second base but consumes power.
Upgrades pending.
*/
