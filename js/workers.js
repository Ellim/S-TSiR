function updateWorkers() {
  clearInterval(workerInterval);
  workerInterval = setInterval(function() {
	  
	game.resources.food.owned += ((game.workers.farmers.rate * (game.workers.farmers.owned * game.workers.farmers.level)) + (game.buildings.fields.rate.production));
	if (game.resources.food.owned >= game.resources.food.max) {
		game.resources.food.owned = game.resources.food.max - 0.001;
	}
	var warriorconsume = (4 * (((game.resources.food.max * (.0033 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.explorers.owned)));
	var minerconsume = (4 * (((game.resources.food.max * (.0022 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.miners.owned)));
	var loggerconsume = (4 * (((game.resources.food.max * (.002 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.lumberJacks.owned)));
	var researcherconsume = (4 * (((game.resources.food.max * (.001 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.researchers.owned)));
	var fpsVar = document.getElementById("foodps");
	var tempFoodVar = ((game.workers.farmers.owned * game.workers.farmers.level) * (game.workers.farmers.rate * 4)) + (game.buildings.fields.rate.production * 4) - researcherconsume - loggerconsume - minerconsume - warriorconsume; 
	fpsVar.innerHTML = tempFoodVar.toFixed(2);
	
	if (game.resources.food.owned < 0) {
		game.resources.food.owned = 0;
	}
	
	document.getElementById("foodbar").style.width = ((game.resources.food.owned/game.resources.food.max) * 100) + '%';
	
	if (game.resources.water.owned >= game.resources.water.max) {
		game.resources.water.owned = game.resources.water.max - 0.001;
	}
	if (game.resources.water.owned < game.resources.water.max - 0.001) {
		game.resources.water.owned += game.buildings.river.rate;
	}
	
	var waterVar = document.getElementById("currentwater");
	waterVar.innerHTML = prettify(game.resources.water.owned);
	var wpsVar = document.getElementById("waterps");
	wpsVar.innerHTML = prettify((game.buildings.river.rate / (game.global.workerTick / 1000)));
	document.getElementById("waterbar").style.width = ((game.resources.water.owned / game.resources.water.max) * 100) + '%';
	
	if (game.stats.populationMax > 1 && game.resources.food.owned > (game.stats.populationMax * 10)) {
		if (game.stats.population < game.stats.populationMax) {
			var rand = 1 + Math.floor(Math.random() * 20);
			if (rand > 17) {
				game.stats.population += 1;
				game.workers.freeWorkers.owned += 1;
				game.buildings.river.rate -= .25;
				var popVar = document.getElementById("pop");
				popVar.innerHTML = prettify((game.stats.population - 1));
				var fwVar = document.getElementById("freeworkers");
				fwVar.innerHTML = prettify(game.workers.freeWorkers.owned);
			}
		}
	}
		
	if (game.resources.water.owned <= 0) {
		game.resources.water.owned = 1;
	}
	updateWorkerNumber();
	
	
	if (game.workers.lumberJacks.owned > 0) {
		if (game.resources.food.owned >= (game.resources.food.max * .15)) {
			game.resources.wood.owned += (game.workers.lumberJacks.rate * (game.workers.lumberJacks.owned * game.workers.lumberJacks.level)) * (1 + (game.buildings.sawMills.owned * 0.10));
			var wpsVar2 = document.getElementById("woodps");
			var wpsVar3 = ((game.workers.lumberJacks.owned * game.workers.lumberJacks.level) * (game.workers.lumberJacks.rate * 4)) * (1 + (game.buildings.sawMills.owned * 0.10)); 
			wpsVar2.innerHTML = prettify(wpsVar3);
		}
		if (game.resources.food.owned < (game.resources.food.max * .15)) {
			var wpsVar4 = document.getElementById("woodps");
			wpsVar4.innerHTML = 0;
		}
		game.resources.food.owned -= ((game.resources.food.max * (.002 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.lumberJacks.owned);
	}
	if (game.workers.lumberJacks.owned < 1) {
			var wpsVar5 = document.getElementById("woodps");
			wpsVar5.innerHTML = 0;
		}
	if (game.resources.wood.owned > game.resources.wood.max) {
		game.resources.wood.owned = game.resources.wood.max;
	}

	if (game.workers.explorers.owned > 0) {
		if (game.resources.food.owned >= (game.resources.food.max / 2)) {
			game.stats.totalEXP += (game.workers.explorers.rate * game.workers.explorers.owned) * (game.workers.explorers.level);
			var exppsVar = document.getElementById("expps");
			var exppsVar2 = ((game.workers.explorers.rate * 4) * game.workers.explorers.owned) * (game.workers.explorers.level); 
			exppsVar.innerHTML = prettify(exppsVar2);
			
		}
		game.resources.food.owned -= ((game.resources.food.max * (.0033 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.explorers.owned);
	}
	updatetotalexp();

	if (game.workers.miners.owned > 0) {
		if (game.resources.food.owned >= (game.resources.food.max * .10)) {
			game.resources.stone.owned += (game.workers.miners.rate * (game.workers.miners.owned * game.workers.miners.level));
			game.resources.clay.owned += ((game.workers.miners.rate / 4) * (game.workers.miners.owned * game.workers.miners.level));
			var spsVar = document.getElementById("stoneps");
			var spsVar2 = ((game.workers.miners.owned * game.workers.miners.level) * (game.workers.miners.rate * 4)); 
			spsVar.innerHTML = prettify(spsVar2);
			
			var cpsVar = document.getElementById("clayps");
			var cpsVar2 = ((game.workers.miners.owned * game.workers.miners.level) * ((game.workers.miners.rate / 5) * 4)); 
			cpsVar.innerHTML = prettify(cpsVar2);
		}
		if (game.resources.food.owned < (game.resources.foodmax * .10)) {
			var spsVar3 = document.getElementById("stoneps");
			var cpsVar3 = document.getElementById("clayps");
			spsVar3.innerHTML = 0;
			cpsVar3.innerHTML = 0;
		}
		game.resources.food.owned -= ((game.resources.food.max * (.0022 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.miners.owned);
	}
	if (game.workers.miners.owned < 1) {
		var spsVar4 = document.getElementById("stoneps");
		var cpsVar4 = document.getElementById("clayps");
		spsVar4.innerHTML = 0;
		cpsVar4.innerHTML = 0;
	}
	if (game.resources.stone.owned > game.resources.stone.max) {
		game.resources.stone.owned = game.resources.stone.max;
	}
	if (game.resources.clay.owned > game.resources.clay.max) {
		game.resources.clay.owned = game.resources.clay.max;
	}
	updateresources();

	var arrTalents = ['#riverupgradecost','#minetalentcost','#burntalentcost','#crafttalentcost','#keeneyecost'];
	var arrTalents1 = ["riverupgradecost","minetalentcost","burntalentcost","crafttalentcost","keeneyecost"];
		for (i = 0; i < arrTalents.length; i++) {
			var talentVar = document.getElementById(arrTalents1[i]);
				if (talentVar.innerHTML <= game.stats.talentPoints) {

					$(arrTalents[i]).removeClass('text-danger');
					$(arrTalents[i]).addClass('text-success');

				}
			}
			
		for (i = 0; i < arrTalents.length; i++) {
			var talentVar2 = document.getElementById(arrTalents1[i]);
				if (talentVar2.innerHTML > game.stats.talentPoints) {

					$(arrTalents[i]).removeClass('text-success');
					$(arrTalents[i]).addClass('text-danger');

				}
			}

	if (game.workers.researchers.owned > 0) {
		if (game.resources.food.owned >= (game.resources.food.max * .2)) {
			game.resources.researchPoints.owned += ((game.workers.researchers.rate * game.workers.researchers.owned) * game.workers.researchers.level);
			var rppsVar = document.getElementById("rpps");
			rppsVar.innerHTML = prettify((((game.workers.researchers.rate * game.workers.researchers.owned) * 4) * game.workers.researchers.level));
		}
		if (game.resources.food.owned < (game.resources.food.max * .2)) {
			var rppsVar2 = document.getElementById("rpps");
			rppsVar2.innerHTML = 0;
		}
		game.resources.food.owned -= ((game.resources.food.max * (.001 / ((game.buildings.aqueducts.owned + 1) * game.buildings.aqueducts.level))) * game.workers.researchers.owned);
	}
	if (game.resources.steam.owned > 0) {
		game.resources.steam.owned -= 1;
	}
	
	var shrpcost = (game.buildings.storeHouses.level * 1500) * (game.buildings.storeHouses.level * 1.15);
	var fieldrpcost = (game.buildings.fields.level * 1500) * (game.buildings.fields.level * 1.2);
	var researcherrp = (game.workers.researchers.level * 1500) * (game.workers.researchers.level * 1.25);
	var farmerrp = (game.workers.farmers.level * 600) * (game.workers.farmers.level * 1.25);
	var loggerrp = (game.workers.lumberJacks.level * 900) * (game.workers.lumberJacks.level * 1.25);
	var minerrp = (game.workers.miners.level * 1200) * (game.workers.miners.level * 1.25);
	var warriorrp = (game.workers.explorers.level * 2500) * (game.workers.explorers.level * 1.25);
	var arrRPproj = ['#farmercost','#loggercost','#minercost','#warriorcost','#carpentrycost','#masonrycost','#upgradeshcost','#fieldirrigationcost','#RPupcost','#farmerupcost','#loggerupcost','#minerupcost','#explorerupcost'];
	var arrRPproj1 = ["farmercost","loggercost","minercost","warriorcost","carpentrycost","masonrycost","upgradeshcost","fieldirrigationcost","RPupcost","farmerupcost","loggerupcost","minerupcost","explorerupcost"];
	var arrRPprojC = [25,150,350,1750,1000,3333,shrpcost,fieldrpcost,researcherrp,farmerrp,loggerrp,minerrp,warriorrp];
	
	for (i = 0; i < arrRPproj.length; i++) {
		var rpprojVar = document.getElementById(arrRPproj1[i]);
				$(arrRPproj[i]).html(prettify(arrRPprojC[i]));
	}
	for (i = 0; i < arrRPproj.length; i++) {
		var rpprojVar = document.getElementById(arrRPproj1[i]);
			if (arrRPprojC[i] <= game.resources.researchPoints.owned) {
				$(arrRPproj[i]).removeClass('text-danger');
				$(arrRPproj[i]).addClass('text-success');
			}
	}
	for (i = 0; i < arrRPproj.length; i++) {
		var rpprojVar2 = document.getElementById(arrRPproj1[i]);
			if (arrRPprojC[i] > game.resources.researchPoints.owned) {
				$(arrRPproj[i]).removeClass('text-success');
				$(arrRPproj[i]).addClass('text-danger');
			}
	}
	
	}, game.global.workerTick);
}