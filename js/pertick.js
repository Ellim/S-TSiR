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
		if ($('#talenttalent').hasClass('hidden')) {
			if (currentlevel > 14) {
				$('#talenttalent').removeClass('hidden');
				$('#talenttalent').addClass('btn-danger');
				message("");
				message("You've regained enough of your skill to learn a new ability!");
			}
		}
    }
	
	
  var tempvar3 = document.getElementById("current_level");
  tempvar3.innerHTML = prettify(currentlevel);
  var tempvar4 = document.getElementById("exptnl")
  tempvar4.innerHTML = prettify(exptnl);
  var tempvar5 = document.getElementById("talentpoints")
  if (talentpoints > 0) {
	  tempvar5.innerHTML = romanNumeral(talentpoints);
  }
  if (talentpoints < 1) {
	  tempvar5.innerHTML = 0;
  }
  
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
	var arrResources = ["total_RP","pop","popmax","total_wood","woodmax","total_stone","stonemax","total_coal","coalmax","total_clay","claymax","total_mana","maxfood","maxwater","total_logs","total_blocks","total_steam","total_bricks"]
	var arrResourceDiv = [researchpoints,population-1,popmax-1,wood,woodmax,stone,stonemax,coal,coalmax,clay,claymax,mana,foodmax,watermax,logs,stoneblocks,steam,bricks]
	
	for (i = 0; i < arrResources.length; i++) {
		var tempvar = document.getElementById(arrResources[i]);
		tempvar.innerHTML = prettify(arrResourceDiv[i]);
	}
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
	document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
}

function updatebuildings() {
	var arrBuilding = ["cabinnum","cabincost","hutnum","hutcost","rhnum","rhcost","granarynum","granarywoodcost","granarystonecost","sthnum","shcost","rtowernum","rtowercost","sawmillnum","sawmillstonecost","sawmillclaycost","apartmentnum","apartmentcost","aptbrickcost","fieldnum","fieldcost"]
	var arrBuildingDiv = [cabins,(50 * (Math.pow(cabins+1,1.9))),huts,(10 * (Math.pow(huts+1,2.5))),roundhouses,(33 * (Math.pow(roundhouses+1,1.47))),granaries,granarywoodcost,granarystonecost,storehouses,shcost,rtowers,rtowercost,sawmills,smscost,smccost,apartments,(50 * (Math.pow(apartments+1,1.95))),(((50 * (Math.pow(apartments+1,1.95))))/2),fields,(50 * (Math.pow(fields+1,1.4)))]
	
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
			if (rand > 17) {
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
		updatewarrior();
		updateresources();
		updateworkers();

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
		updatewarrior();
		updateresources();
		updateworkers();
		updatetotalexp();
		
		if (burntalent > 0) {
			$('#burnspan').removeClass('hidden');
			$('#burntalent').addClass('hidden');
			$('#coaldiv').removeClass('hidden');
			$('#steamdiv').removeClass('hidden');
			$('#brickdiv').removeClass('hidden');
		}
		
		if (minetalent > 0) {
			$('#minespan').removeClass('hidden');
			$('#minetalentlv2').removeClass('hidden');
			$('#minetalentlv1').addClass('hidden');
			$('#minetalentlv1desc').addClass('hidden');
			$('#minetalentlv2desc').removeClass('hidden');
			$('#coaldiv').removeClass('hidden');
			$('#crafttalentbutton').removeClass('hidden');
			$('#keeneyestalent').removeClass('hidden');
			$('#rivertalent').removeClass('hidden');
			$('#rtowerdiv').removeClass('hidden');
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
			$('#explorerdiv').removeClass('hidden');
			$('#unlockexplorerdiv').addClass('hidden');
		}
		
		if (constructiontalent > 0) {
			$('#consttalent').removeClass('hidden');
		}
		
		if (housetalent > 0) {
			$('#housetab').removeClass('hidden');
			$('#popspan').removeClass('hidden');
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
		
		if (farmers + loggers >= 15) {
			$('#forage10').prop('disabled', false);
		}
		if (miners >= 10) {
			$('#mine10').prop('disabled', false);
		}
		
		if (farmers + loggers >= 35) {
			$('#forage25').prop('disabled', false);
		}
		if (miners >= 25) {
			$('#mine25').prop('disabled', false);
		}
		
		if (farmers + loggers >= 125) {
			$('#forage100').prop('disabled', false);
		}
		if (miners >= 100) {
			$('#mine100').prop('disabled', false);
		}
		
		if (currentlevel > 14) {
			$('#talenttalent').removeClass('hidden');
		}
		
		if (rtowers > 4) {
			$('#upgradefarmerdiv').removeClass('hidden');
			$('#upgradeloggerdiv').removeClass('hidden');
			$('#upgrademinerdiv').removeClass('hidden');
			$('#upgradeRPdiv').removeClass('hidden');
			$('#upgradeexplorerdiv').removeClass('hidden');
		}
		
		var farmerrp = (farmerlevel * 600) * (farmerlevel * 1.25);
		var loggerrp = (loggerlevel * 900) * (loggerlevel * 1.25);
		var minerrp = (minerlevel * 1200) * (minerlevel * 1.25);
		var warriorrp = (warriorlevel * 2500) * (warriorlevel * 1.25);
		var researcherrp = (researcherlevel * 1500) * (researcherlevel * 1.25);
		
		var tempvar = document.getElementById("riverupgradecost");
		tempvar.innerHTML = prettify(riverupgradecost);
		
		var tempvar2 = document.getElementById("keeneyecost");
		tempvar2.innerHTML = prettify(keeneyescost);
		
		var tempvar3 = document.getElementById("upgradeshcost");
		tempvar3.innerHTML = prettify(shrpcost);
		
		var tempvar4 = document.getElementById("fieldirrigationcost");
		tempvar4.innerHTML = prettify(fieldrpcost);
		
		var tempvar5 = document.getElementById("farmerupcost");
		tempvar5.innerHTML = prettify(farmerrp);
		
		var tempvar6 = document.getElementById("loggerupcost");
		tempvar6.innerHTML = prettify(loggerrp);
		
		var tempvar7 = document.getElementById("minerupcost");
		tempvar7.innerHTML = prettify(minerrp);
		
		var tempvar8 = document.getElementById("explorerupcost");
		tempvar8.innerHTML = prettify(warriorrp);
		
		var tempvar9 = document.getElementById("RPupcost");
		tempvar9.innerHTML = prettify(researcherrp);
		
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
