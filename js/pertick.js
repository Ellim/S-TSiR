function updatetotalexp() {   
  var exppct = game.stats.totalEXP/game.stats.EXPTNL;
  var expVar = document.getElementById("exptotal");
  expVar.innerHTML = prettify(game.stats.totalEXP);
  var expVar2 = document.getElementById("exptnl");
  expVar2.innerHTML = prettify(game.stats.EXPTNL);
    if (game.stats.totalEXP > game.stats.EXPTNL - 1) {
    game.stats.totalEXP = game.stats.totalEXP - game.stats.EXPTNL;
    game.stats.EXPTNL = (game.stats.EXPTNL * 1.05);
    game.stats.currentLevel = game.stats.currentLevel + 1;
		if (game.stats.currentLevel % 3 === 0) {
			game.stats.talentPoints += 1;
		}
		if ($('#talenttalent').hasClass('hidden')) {
			if (game.stats.currentLevel > 14) {
				$('#talenttalent').removeClass('hidden');
				$('#talenttalent').addClass('btn-danger');
				message("");
				message("You've regained enough of your skill to learn a new ability!");
			}
		}
    }
	
	
  var levelVar = document.getElementById("current_level");
  levelVar.innerHTML = prettify(game.stats.currentLevel);
  var expVar3 = document.getElementById("exptnl")
  expVar3.innerHTML = prettify(game.stats.EXPTNL);
  var talentVar = document.getElementById("talentpoints")
  if (game.stats.talentPoints > 0) {
	  talentVar.innerHTML = prettify(game.stats.talentPoints);
  }
  if (game.stats.talentPoints < 1) {
	  talentVar.innerHTML = 0;
  }
  
  document.getElementById("expbar").style.width = ((game.stats.totalEXP/game.stats.EXPTNL) * 100) + '%';
}

function updateWorkerNumber() {
	var arrClass = ["freeworkers","researchernum","farmernum","loggernum","minernum","explorernum"];
	var arrClassDiv = [game.workers.freeWorkers.owned,game.workers.researchers.owned,game.workers.farmers.owned,game.workers.lumberJacks.owned,game.workers.miners.owned,game.workers.explorers.owned]
	for (i = 0; i < arrClass.length; i++) {
		var workerNumVar = document.getElementById(arrClass[i]);
		workerNumVar.innerHTML = prettify(arrClassDiv[i]);
	}	
}

function updateresources() {
	
	var arrResources = ["total_RP","pop","popmax","total_wood","woodmax","total_stone","stonemax","total_coal","coalmax","total_clay","claymax","currentfood","maxfood","maxwater","total_logs","total_blocks","total_steam","total_bricks"]
	var arrResourceDiv = [game.resources.researchPoints.owned,game.stats.population - 1,game.stats.populationMax - 1,game.resources.wood.owned,game.resources.wood.max,game.resources.stone.owned,game.resources.stone.max,game.resources.charcoal.owned,game.resources.charcoal.max,game.resources.clay.owned,game.resources.clay.max,game.resources.food.owned,game.resources.food.max,game.resources.water.max,game.resources.logs.owned,game.resources.concrete.owned,game.resources.steam.owned,game.resources.bricks.owned]
	
	for (i = 0; i < arrResources.length; i++) {
		var resVar = document.getElementById(arrResources[i]);
		resVar.innerHTML = prettify(arrResourceDiv[i]);
	}
	document.getElementById("foodbar").style.width = ((game.resources.food.owned/game.resources.food.max ) * 100) + '%';
	document.getElementById("waterbar").style.width = ((game.resources.water.owned/game.resources.water.max) * 100) + '%';
	document.getElementById("expbar").style.width = ((game.stats.totalEXP/game.stats.expTNL) * 100) + '%';
}

function updatebuildings() {
	var arrBuilding = ["cabinnum","cabincost","hutnum","hutcost","rhnum","rhcost","granarynum","granarywoodcost","granarystonecost","sthnum","shcost","rtowernum","rtowercost","sawmillnum","sawmillstonecost","sawmillclaycost","apartmentnum","apartmentcost","aptbrickcost","fieldnum","fieldcost","aqueductnum","aqueductcost","aqueductfcost","aqueductrpcost"]
	var arrBuildingDiv = [game.buildings.cabins.owned,(50 * (Math.pow(game.buildings.cabins.owned + 1,1.9))),game.buildings.huts.owned,(10 * (Math.pow(game.buildings.huts.owned + 1,2.5))),game.buildings.roundHouses.owned,(33 * (Math.pow(game.buildings.roundHouses.owned + 1,1.47))),game.buildings.granaries.owned,(35 * (Math.pow(game.buildings.granaries.owned + 1,1.6))),(50 * (Math.pow(game.buildings.granaries.owned + 1,1.45))),game.buildings.storeHouses.owned,(150 * (Math.pow(game.buildings.storeHouses.owned + 1,1.55))),game.buildings.researchTowers.owned,(100 * (Math.pow(game.buildings.researchTowers.owned + 1,1.45))),game.buildings.sawMills.owned,(25 * (Math.pow(game.buildings.sawMills.owned + 1,1.75))),(1 * (Math.pow(game.buildings.sawMills.owned + 1,1.75))),game.buildings.apartments.owned,(50 * (Math.pow(game.buildings.apartments.owned + 1,1.95))),(((50 * (Math.pow(game.buildings.apartments.owned + 1,1.95))))/2),game.buildings.fields.owned,(50 * (Math.pow(game.buildings.fields.owned + 1,1.2))),game.buildings.aqueducts.owned,(150 * (Math.pow(game.buildings.aqueducts.owned + 1,1.25))),((150 * (Math.pow(game.buildings.aqueducts.owned + 1,1.25)))/2),(1000 * (Math.pow(game.buildings.aqueducts.owned + 1,1.15)))]
	
	for (i = 0; i < arrBuilding.length; i++) {
		var buildVar = document.getElementById(arrBuilding[i]);
		buildVar.innerHTML = prettify(arrBuildingDiv[i]);
	}
		
}

function autosave() {
	clearInterval(saveInterval);
	saveInterval = setInterval(function() {
		save();
	}, game.global.saveTick);
}
