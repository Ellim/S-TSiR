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
	var arrClass = ["freeworkers","researchernum","farmernum","loggernum","minernum","warriornum","tradernum"];
	var arrClassDiv = [freeworkers,researchers,farmers,loggers,miners,warriors,traders]
	for (i = 0; i < arrClass.length; i++) {
		var tempvar = document.getElementById(arrClass[i]);
		tempvar.innerHTML = arrClassDiv[i].toFixed(0);
	}	
}

function updateresources() {
	var arrResources = ["total_RP","pop","popmax","total_wood","woodmax","total_stone","stonemax","total_coal","coalmax","total_clay","claymax","total_mana","maxfood","maxwater","total_logs","total_blocks","total_steam"]
	var arrResourceDiv = [researchpoints,population,popmax,wood,woodmax,stone,stonemax,coal,coalmax,clay,claymax,mana,foodmax,watermax,logs,stoneblocks,steam]
	
	for (i = 0; i < arrResources.length; i++) {
		var tempvar = document.getElementById(arrResources[i]);
		tempvar.innerHTML = arrResourceDiv[i].toFixed(0);
	}
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
}

function updatebuildings() {
	var arrBuilding = ["cabinnum","cabincost","cabinexp","hutnum","hutcost","hutexp","rhnum","rhcost","rhexp","granarynum","granarywoodcost","granarystonecost","sthnum","shcost","rtowernum","rtowercost","sawmillnum","sawmillstonecost","sawmillclaycost"]
	var arrBuildingDiv = [cabins,cabincost,(cabincost*30),huts,hutcost,hutcost,roundhouses,rhcost,(rhcost/2),granaries,granarywoodcost,granarystonecost,storehouses,shcost,rtowers,rtowercost,sawmills,smscost,smccost]
	
	for (i = 0; i < arrBuilding.length; i++) {
		var tempvar = document.getElementById(arrBuilding[i]);
		tempvar.innerHTML = arrBuildingDiv[i].toFixed(0);
	}
		
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
	tempvar.innerHTML = water.toFixed(0);
	var tempvar2 = document.getElementById("waterps");
	tempvar2.innerHTML = (waterrate/(workertick/1000)).toFixed(0) + '/sec';
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
				tempvar2.innerHTML = freeworkers.toFixed(0);
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
					tempvar2.innerHTML = farmers.toFixed(0);
					return;
				}
				if (loggers > 0) {
					loggers -= 1;
					var tempvar3 = document.getElementById("loggernum");
					tempvar3.innerHTML = loggers.toFixed(0);
					return;
				}
				if (miners > 0) {
					miners -= 1;
					var tempvar4 = document.getElementById("minernum");
					tempvar4.innerHTML = miners.toFixed(0);
					return;
				}
				if (researchers > 0) {
					researchers -= 1;
					var tempvar5 = document.getElementById("researchernum");
					tempvar5.innerHTML = researchers.toFixed(0);
					return;
				}
				if (warriors > 0) {
					warriors -= 1;
					var tempvar6 = document.getElementById("warriornum");
					tempvar6.innerHTML = warriors.toFixed(0);
					return;
				}
				if (freeworkers > 0) {
					freeworkers -= 1;
					var tempvar7 = document.getElementById("freeworkers");
					tempvar7.innerHTML = freeworkers.toFixed(0);
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
	tempvar.innerHTML = currentfood.toFixed(0);
	
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
					tempvar2.innerHTML = farmers.toFixed(0);
					return;
				}
				if (loggers > 0) {
					loggers -= 1;
					var tempvar3 = document.getElementById("loggernum");
					tempvar3.innerHTML = loggers.toFixed(0);
					return;
				}
				if (miners > 0) {
					miners -= 1;
					var tempvar4 = document.getElementById("minernum");
					tempvar4.innerHTML = miners.toFixed(0);
					return;
				}
				if (researchers > 0) {
					researchers -= 1;
					var tempvar5 = document.getElementById("researchernum");
					tempvar5.innerHTML = researchers.toFixed(0);
					return;
				}
				if (warriors > 0) {
					warriors -= 1;
					var tempvar6 = document.getElementById("warriornum");
					tempvar6.innerHTML = warriors.toFixed(0);
					return;
				}
				if (freeworkers > 0) {
					freeworkers -= 1;
					var tempvar7 = document.getElementById("freeworkers");
					tempvar7.innerHTML = freeworkers.toFixed(0);
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
		updatetalents();
		updatetotalexp();
		updatebuildings();
		
		updateresources();
		updateworkers();
		updatetotalexp();
}

document.getElementById("loadgame").onclick = function() {
		loadgame();
		updatewater();
		updatefood();
		updatefarmer();
		updatelogger();
		updateminer();
		updateresearcher();
		updatetalents();
		autosave();
		updatetotalexp();
		updatebuildings();
		
		updateresources();
		updateworkers();
		updatetotalexp();
		
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
			$('#sawmillspan').removeClass('hidden');
		}
		
		if (minertalent > 0) {
			$('#minerdiv').removeClass('hidden');
			$('#unlockminerbutton').addClass('hidden');
			$('#rhspan').removeClass('hidden');
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
			$('#craftab').removeClass('hidden');
		}
		
		if (logtalent > 0) {
			$('#logspan').removeClass('hidden');
			$('#logdiv').removeClass('hidden');
			$('#unlocklogdiv').addClass('hidden');
			$('#cabinspan').removeClass('hidden');
		}
		
		if (blocktalent > 0) {
			$('#blockspan').removeClass('hidden');
			$('#blockdiv').removeClass('hidden');
			$('#unlockblockdiv').addClass('hidden');
		}
		
		if (tradertalent > 0) {
			$('#unlocktraderbutton').addClass('hidden');
		}
		
		if (granarytalent > 0) {
			$('#granaryspan').removeClass('hidden');
		}
		
		if (farmers >= 10) {
			$('#forage10').prop('disabled', false);
		}
		if (miners >= 10) {
			$('#mine10').prop('disabled', false);
		}
		
		if (farmers >= 25) {
			$('#forage25').prop('disabled', false);
		}
		if (miners >= 25) {
			$('#mine25').prop('disabled', false);
		}
		
		if (farmers >= 100) {
			$('#forage100').prop('disabled', false);
		}
		if (miners >= 100) {
			$('#mine100').prop('disabled', false);
		}

		
		var tempvar = document.getElementById("riverupgradecost");
		tempvar.innerHTML = riverupgradecost.toFixed(0);
		var tempvar2 = document.getElementById("riverlevel");
		tempvar2.innerHTML = riverlevel.toFixed(0);
		var tempvar3 = document.getElementById("riverproduction");
		tempvar3.innerHTML = ((riverupgradecost * 20)/(watertick/1000)).toFixed(0);
		
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
