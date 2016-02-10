function updatetotalexp() {   
  var exppct = totalexp/exptnl;
  var tempvar = document.getElementById("exptotal");
  tempvar.innerHTML = totalexp.toFixed(0);
  var tempvar2 = document.getElementById("exptnl");
  tempvar2.innerHTML = exptnl.toFixed(0);
    if (totalexp > exptnl - 1) {
    totalexp = totalexp - exptnl;
    exptnl = (exptnl * 1.05);
    currentlevel = currentlevel + 1;
		if (currentlevel % 3 === 0) {
			talentpoints += 1;
		}
    } 
  var tempvar3 = document.getElementById("current_level");
  tempvar3.innerHTML = currentlevel.toFixed(0);
  var tempvar4 = document.getElementById("exptnl")
  tempvar4.innerHTML = exptnl.toFixed(0);
  var tempvar5 = document.getElementById("talentpoints")
  tempvar5.innerHTML = talentpoints.toFixed(0);
  document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
}

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
	var tempvar16 = document.getElementById("maxfood");
	tempvar16.innerHTML = foodmax.toFixed(2);
	var tempvar17 = document.getElementById("maxwater");
	tempvar17.innerHTML = watermax.toFixed(2);
	var tempvar18 = document.getElementById("total_logs");
	tempvar18.innerHTML = logs.toFixed(0);
}

function updatebuildings() {
		var tempvar = document.getElementById("cabinnum");
		tempvar.innerHTML = cabins.toFixed(0);
		var tempvar2 = document.getElementById("cabincost");
		tempvar2.innerHTML = cabincost.toFixed(2);
		var tempvar3 = document.getElementById("cabinexp");
		tempvar3.innerHTML = (cabincost*30).toFixed(0);
		
		var tempvar4 = document.getElementById("hutnum");
		tempvar4.innerHTML = huts.toFixed(0);
		var tempvar5 = document.getElementById("hutcost");
		tempvar5.innerHTML = hutcost.toFixed(2);
		var tempvar6 = document.getElementById("hutexp");
		tempvar6.innerHTML = hutcost.toFixed(2);
		
		var tempvar7 = document.getElementById("rhnum");
		tempvar7.innerHTML = roundhouses.toFixed(0);
		var tempvar8 = document.getElementById("rhcost");
		tempvar8.innerHTML = rhcost.toFixed(2);
		var tempvar9 = document.getElementById("rhexp");
		tempvar9.innerHTML = (rhcost/2).toFixed(2);
		
		var tempvar10 = document.getElementById("granarynum");
		tempvar10.innerHTML = granaries.toFixed(0);
		var tempvar11 = document.getElementById("granarywoodcost");
		tempvar11.innerHTML = granarywoodcost.toFixed(2);
		var tempvar12 = document.getElementById("granarystonecost");
		tempvar12.innerHTML = granarystonecost.toFixed(2);

		var tempvar13 = document.getElementById("sthnum");
		tempvar13.innerHTML = storehouses.toFixed(0);
		var tempvar14 = document.getElementById("shcost");
		tempvar14.innerHTML = shcost.toFixed(2);
		
		var tempvar15 = document.getElementById("rtowernum");
		tempvar15.innerHTML = rtowers.toFixed(0);
		var tempvar16 = document.getElementById("rtowercost");
		tempvar16.innerHTML = rtowercost.toFixed(2);
		
		
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
	if (water >= watermax) {
		water = watermax - 0.001;
	}
	if (water < watermax - 0.001) {
		water += waterrate;
	}
	
	var tempvar = document.getElementById("currentwater");
	tempvar.innerHTML = water.toFixed(2);
	var tempvar2 = document.getElementById("waterps");
	tempvar2.innerHTML = (waterrate/(workertick/1000)).toFixed(2) + '/sec';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	
	if (popmax > 1 && currentfood > (popmax * 2)) {
		if (population < popmax) {
			var rand = 1 + Math.floor(Math.random() * 20);
			if (rand > 14) {
				population += 1;
				freeworkers += 1;
				foodrate -= .375;
				waterrate -= .25;
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
				foodrate += .375;
				
				waterrate += .25;
				
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
	updateworkers();
	}, workertick);
}
	
function updatefood() {
  clearInterval(foodinterval);
  foodinterval = setInterval(function() {
	
	if (currentfood >= foodmax) {
		currentfood = foodmax - 0.001;
	}
	if (currentfood <= foodmax) {
		currentfood += foodrate;
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
				foodrate += .375;
				
				waterrate += .25;
				
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
	}, workertick);
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
		
		
		if (burntalent > 0) {
			$('#burnbuttondiv').removeClass('hidden');
			$('#burntalent').addClass('hidden');
		}
		
		if (minetalent > 0) {
			$('#minebuttondiv').removeClass('hidden');
			$('#minetalent').addClass('hidden');
		}
		
		if (researchertalent > 0) {
			$('#researchdiv').removeClass('hidden');
			$('#unlockresearcherbutton').addClass('hidden');
		}
		
		if (farmertalent > 0) {
			$('#farmerdiv').removeClass('hidden');
			$('#unlockfarmerbutton').addClass('hidden');
		}
		
		if (loggertalent > 0) {
			$('#loggerdiv').removeClass('hidden');
			$('#unlockloggerbutton').addClass('hidden');
		}
		
		if (minertalent > 0) {
			$('#minerdiv').removeClass('hidden');
			$('#unlockminerbutton').addClass('hidden');
		}
		
		if (warriortalent > 0) {
			$('#warriordiv').removeClass('hidden');
			$('#unlockwarriorbutton').addClass('hidden');
		}
		
		if (constructiontalent > 0) {
			$('#consttalent').removeClass('hidden');
		}
		
		if (workertalent > 0) {
			$('#workertalent').removeClass('hidden');
		}
		
		if (researchtalent > 0) {
			$('#researchtalent').removeClass('hidden');
		}
		
		if (craftingtalent > 0) {
			$('#craftingtalent').removeClass('hidden');
			$('#crafttalentbutton').addClass('hidden');
		}
		
		if (logtalent > 0) {
			$('#logspan').removeClass('hidden');
			$('#unlocklogdiv').addClass('hidden');
		}
		
		if (logs > 0) {
			$('#logdiv').removeClass('hidden');
		}
		
		if (popmax >= 10) {
		$('#forage10').prop('disabled', false);
		$('#mine10').prop('disabled', false);
		$('#burn10').prop('disabled', false);
		}
		
		if (popmax >= 25) {
		$('#forage25').prop('disabled', false);
		$('#mine25').prop('disabled', false);
		$('#burn25').prop('disabled', false);
		}
		
		if (popmax >= 100) {
		$('#forage100').prop('disabled', false);
		$('#mine100').prop('disabled', false);
		$('#burn100').prop('disabled', false);
		}
		
		var tempvar = document.getElementById("riverupgradecost");
		tempvar.innerHTML = riverupgradecost.toFixed(0);
		var tempvar2 = document.getElementById("riverlevel");
		tempvar2.innerHTML = riverlevel;
		var tempvar3 = document.getElementById("riverproduction");
		tempvar3.innerHTML = ((riverupgradecost * 20)/(watertick/1000)).toFixed(2);
		
		updatebuildings();
		
		updateresources();
		updateworkers();
		updatetotalexp();
		
}
	
/*
First water source is a stream, provides 10 water per second base.
Can upgrade base rate with Irrigation, Aquifer, Tank.

Second water source is waterfall, provides 50 water per second base.
Can upgrade base rate with Tributaries, and Pipes.

Third water source is Desalination Plant, provides 1000 water per second base but consumes power.
Upgrades pending.
*/
