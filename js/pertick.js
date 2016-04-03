function updatetotalexp() {   
  var exppct = totalexp/exptnl;
  var tempvar = document.getElementById("exptotal");
  tempvar.innerHTML = prettify(totalexp);
  var tempvar2 = document.getElementById("exptnl");
  tempvar2.innerHTML = prettify(exptnl);
    if (totalexp > exptnl - 1) {
    totalexp = totalexp - exptnl;
    exptnl = (exptnl * 1.05);
    currentlevel = currentlevel + 1;
		if (currentlevel % 3 === 0) {
			talentpoints += 1;
		}
    } 
  var tempvar3 = document.getElementById("current_level");
  tempvar3.innerHTML = prettify(currentlevel);
  var tempvar4 = document.getElementById("exptnl")
  tempvar4.innerHTML = prettify(exptnl);
  var tempvar5 = document.getElementById("talentpoints")
  tempvar5.innerHTML = prettify(talentpoints);
  document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
}

function updateworkers() {
	var arrClass = ["freeworkers","researchernum","farmernum","loggernum","minernum","warriornum"];
	var arrClassDiv = [freeworkers,researchers,farmers,loggers,miners,warriors]
	for (i = 0; i < arrClass.length; i++) {
		var tempvar = document.getElementById(arrClass[i]);
		tempvar.innerHTML = prettify(arrClassDiv[i]);
	}	
}

function updateresources() {
	var arrResources = ["total_RP","pop","popmax","total_wood","woodmax","total_stone","stonemax","total_coal","coalmax","total_clay","claymax","total_mana","maxfood","maxwater","total_logs","total_blocks","total_steam","rpps"]
	var arrResourceDiv = [researchpoints,population-1,popmax-1,wood,woodmax,stone,stonemax,coal,coalmax,clay,claymax,mana,foodmax,watermax,logs,stoneblocks,steam,(((researcherrate*researchers)*4)*researcherlevel)]
	
	for (i = 0; i < arrResources.length; i++) {
		var tempvar = document.getElementById(arrResources[i]);
		tempvar.innerHTML = prettify(arrResourceDiv[i]);
	}
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
}

function updatebuildings() {
	var arrBuilding = ["cabinnum","cabincost","hutnum","hutcost","rhnum","rhcost","granarynum","granarywoodcost","granarystonecost","sthnum","shcost","rtowernum","rtowercost","sawmillnum","sawmillstonecost","sawmillclaycost","apartmentnum","apartmentcost","fieldnum","fieldcost"]
	var arrBuildingDiv = [cabins,cabincost,huts,hutcost,roundhouses,rhcost,granaries,granarywoodcost,granarystonecost,storehouses,shcost,rtowers,rtowercost,sawmills,smscost,smccost,apartments,aptcost,fields,fieldcost]
	
	for (i = 0; i < arrBuilding.length; i++) {
		var tempvar = document.getElementById(arrBuilding[i]);
		tempvar.innerHTML = prettify(arrBuildingDiv[i]);
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
	tempvar.innerHTML = prettify(water);
	var tempvar2 = document.getElementById("waterps");
	tempvar2.innerHTML = prettify((waterrate/(workertick/1000)));
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	
	if (popmax > 1 && currentfood > (popmax * 2)) {
		if (population < popmax) {
			var rand = 1 + Math.floor(Math.random() * 20);
			if (rand > 14) {
				population += 1;
				freeworkers += 1;
				waterrate -= .25;
				var tempvar = document.getElementById("pop");
				tempvar.innerHTML = prettify((population - 1));
				var tempvar2 = document.getElementById("freeworkers");
				tempvar2.innerHTML = prettify(freeworkers);
			}
		}
	}
		
	if (water <= 0) {
		water = 1;
	}
	updateworkers();
	}, workertick);
}


document.getElementById("newgame").onclick = function() {
		updatewater();
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
		message("You wake up with a splitting headache. Your stomach growls with hunger.");
		message("Luckily there is a River nearby giving you access to clean water.")
		message("Better look around for something to eat.");
		
}

document.getElementById("loadgame").onclick = function() {
		loadgame();
		updatewater();
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
			$('#coaldiv').removeClass('hidden');
			$('#steamdiv').removeClass('hidden');
		}
		
		if (minetalent > 0) {
			$('#minebuttondiv').removeClass('hidden');
			$('#minetalentlv2').removeClass('hidden');
			$('#minetalentlv1').addClass('hidden');
			$('#minetalentlv1desc').addClass('hidden');
			$('#minetalentlv2desc').removeClass('hidden');
			$('#coaldiv').removeClass('hidden');
			$('#crafttalentbutton').removeClass('hidden');
		}
		
		if (researchertalent > 0) {
			$('#researchdiv').removeClass('hidden');
			$('#unlockresearcherbutton').addClass('hidden');
			$('#rpdiv').removeClass('hidden');
		}
		
		if (farmertalent > 0) {
			$('#farmerdiv').removeClass('hidden');
			$('#unlockfarmerdiv').addClass('hidden');
		}
		
		if (loggertalent > 0) {
			$('#loggerdiv').removeClass('hidden');
			$('#unlockloggerdiv').addClass('hidden');
			$('#sawmillspan').removeClass('hidden');
		}
		
		if (minertalent > 0) {
			$('#minerdiv').removeClass('hidden');
			$('#unlockminerdiv').addClass('hidden');
			$('#rhspan').removeClass('hidden');
		}
		
		if (warriortalent > 0) {
			$('#warriordiv').removeClass('hidden');
			$('#unlockwarriordiv').addClass('hidden');
		}
		
		if (constructiontalent > 0) {
			$('#consttalent').removeClass('hidden');
		}
		
		if (housetalent > 0) {
			$('#housetab').removeClass('hidden');
		}
		
		if (workertalent > 0) {
			$('#workertalent').removeClass('hidden');
		}
		
		if (researchtalent > 0) {
			$('#researchtalent').removeClass('hidden');
			$('#rpdiv').removeClass('hidden');
		}
		
		if (craftingtalent > 0) {
			$('#craftingtalent').removeClass('hidden');
			$('#crafttalentbutton').addClass('hidden');
			$('#craftab').removeClass('hidden');
			if (burntalent < 1) {
				$('#burntalent').removeClass('hidden');
			}
			
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
			$('#apartmentspan').removeClass('hidden');
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
		tempvar.innerHTML = prettify(riverupgradecost);
		
		var tempvar2 = document.getElementById("keeneyecost");
		tempvar2.innerHTML = prettify(keeneyescost);
		
		var tempvar3 = document.getElementById("upgradeshcost");
		tempvar3.innerHTML = prettify(shrpcost);
		
		var tempvar4 = document.getElementById("fieldirrigationcost");
		tempvar4.innerHTML = prettify(fieldrpcost);
		
		var tempvar5 = document.getElementById("RPupcost");
		tempvar5.innerHTML = prettify(((researcherlevel * 1500)*researcherlevel));
		
		message("Welcome back!");
		
		

		
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
