function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById("importSave").onclick = function() {
	$('#importModal').modal('show');
}

document.getElementById("importGame").onclick = function() {
	load(true);
	updateWorkers();
	autoSave();
	updatetotalexp();
	updatebuildings();
	updateresources();
	updateWorkerNumber();
	loadUI();
}

document.getElementById("exportSave").onclick = function() {
	$('#exportModal').modal('show');
	var exportString = document.getElementById("exportBox");
	exportString.value = save(true);
}

document.getElementById("forage").onclick = function() {
	forage(1);
	if ($('#consttalent').hasClass('hidden')) {
		if (game.resources.food.owned >= 50) {
		$('#consttalent').removeClass('hidden');
		$('#consttalent').addClass('btn-danger');
		$('#prodtab').addClass('btn-danger');
		game.talents.constructionTalent += 1;
		message("");
		message("You've gathered enough seeds from all that <span class='text-info'>Food</span> you should be able to grow something!");
		} 
	}
	if ($('#housetab').hasClass('hidden')) {
		if (game.resources.wood.owned >= 10) {
			$('#housetab').removeClass('hidden');
			$('#popspan').removeClass('hidden');
			$('#housetab').addClass('btn-danger');
			game.talents.houseTalent += 1;
			message("");
			message("Right on! You now have enough <span class='text-info'>Wood</span> to build a <span class='text-success'>Hut</span>.");
		}
	}
};


document.getElementById("forage10").onclick = function() {
	forage(10);   
};

document.getElementById("forage25").onclick = function() {
	forage(25);   
};

document.getElementById("forage100").onclick = function() {
	forage(100);   
};

document.getElementById("mine").onclick = function() {
	mine(1);   
};

document.getElementById("mine10").onclick = function() {
	mine(10);   
};

document.getElementById("mine25").onclick = function() {
	mine(25);   
};

document.getElementById("mine100").onclick = function() {
	mine(100);   
};

document.getElementById("burn").onclick = function() {
	burn(1);   
};

document.getElementById("save").onclick = function() {
	save();
}

document.getElementById("consttalent").onclick = function() {
	if ($('#consttalent').hasClass('btn-danger')) {
		$('#consttalent').removeClass('btn-danger');
	}   
};

document.getElementById("workertalent").onclick = function() {
	if ($('#workertalent').hasClass('btn-danger')) {
		$('#workertalent').removeClass('btn-danger');
	}   
};

document.getElementById("researchtalent").onclick = function() {
	if ($('#researchtalent').hasClass('btn-danger')) {
		$('#researchtalent').removeClass('btn-danger');
	}
};

document.getElementById("craftingtalent").onclick = function() {
	if ($('#craftingtalent').hasClass('btn-danger')) {
		$('#craftingtalent').removeClass('btn-danger');
	}   
};

document.getElementById("storetab").onclick = function() {
	if ($('#storetab').hasClass('btn-danger')) {
		$('#storetab').removeClass('btn-danger');
	}   
};

document.getElementById("housetab").onclick = function() {
	if ($('#housetab').hasClass('btn-danger')) {
		$('#housetab').removeClass('btn-danger');
	}   
};

document.getElementById("clastab").onclick = function() {
	if ($('#clastab').hasClass('btn-danger')) {
		$('#clastab').removeClass('btn-danger');
	}   
};

document.getElementById("prodtab").onclick = function() {
	if ($('#prodtab').hasClass('btn-danger')) {
		$('#prodtab').removeClass('btn-danger');
	}   
};

document.getElementById("craftab").onclick = function() {
	if ($('#craftab').hasClass('btn-danger')) {
		$('#craftab').removeClass('btn-danger');
	}   
};

document.getElementById("talenttalent").onclick = function() {
	if ($('#talenttalent').hasClass('btn-danger')) {
		$('#talenttalent').removeClass('btn-danger');
	}
};

document.getElementById("1worker").onclick = function() {
	if ($('#10worker').hasClass('btn-success')) {
		$('#10worker').removeClass('btn-success');
		$('#10worker').removeClass('active');
		$('#10worker').addClass('btn-primary');
	}
	if ($('#25worker').hasClass('btn-success')) {
		$('#25worker').removeClass('btn-success');
		$('#25worker').removeClass('active');
		$('#25worker').addClass('btn-primary');
	}
	if ($('#100worker').hasClass('btn-success')) {
		$('#100worker').removeClass('btn-success');
		$('#100worker').removeClass('active');
		$('#100worker').addClass('btn-primary');
	}
	if ($('#1worker').hasClass('btn-primary')) {
		$('#1worker').removeClass('btn-primary');
		$('#1worker').addClass('active');
		$('#1worker').addClass('btn-success');
	}
}

document.getElementById("10worker").onclick = function() {
	if ($('#1worker').hasClass('btn-success')) {
		$('#1worker').removeClass('btn-success');
		$('#1worker').removeClass('active');
		$('#1worker').addClass('btn-primary');
	}
	if ($('#25worker').hasClass('btn-success')) {
		$('#25worker').removeClass('btn-success');
		$('#25worker').removeClass('active');
		$('#25worker').addClass('btn-primary');
	}
	if ($('#100worker').hasClass('btn-success')) {
		$('#100worker').removeClass('btn-success');
		$('#100worker').removeClass('active');
		$('#100worker').addClass('btn-primary');
	}
	if ($('#10worker').hasClass('btn-primary')) {
		$('#10worker').removeClass('btn-primary');
		$('#10worker').addClass('active');
		$('#10worker').addClass('btn-success');
	}
}

document.getElementById("25worker").onclick = function() {
	if ($('#1worker').hasClass('btn-success')) {
		$('#1worker').removeClass('btn-success');
		$('#1worker').removeClass('active');
		$('#1worker').addClass('btn-primary');
	}
	if ($('#10worker').hasClass('btn-success')) {
		$('#10worker').removeClass('btn-success');
		$('#10worker').removeClass('active');
		$('#10worker').addClass('btn-primary');
	}
	if ($('#100worker').hasClass('btn-success')) {
		$('#100worker').removeClass('btn-success');
		$('#100worker').removeClass('active');
		$('#100worker').addClass('btn-primary');
	}
	if ($('#25worker').hasClass('btn-primary')) {
		$('#25worker').removeClass('btn-primary');
		$('#25worker').addClass('active');
		$('#25worker').addClass('btn-success');
	}
}

document.getElementById("100worker").onclick = function() {
	if ($('#1worker').hasClass('btn-success')) {
		$('#1worker').removeClass('btn-success');
		$('#1worker').removeClass('active');
		$('#1worker').addClass('btn-primary');
	}
	if ($('#10worker').hasClass('btn-success')) {
		$('#10worker').removeClass('btn-success');
		$('#10worker').removeClass('active');
		$('#10worker').addClass('btn-primary');
	}
	if ($('#25worker').hasClass('btn-success')) {
		$('#25worker').removeClass('btn-success');
		$('#25worker').removeClass('active');
		$('#25worker').addClass('btn-primary');
	}
	if ($('#100worker').hasClass('btn-primary')) {
		$('#100worker').removeClass('btn-primary');
		$('#100worker').addClass('active');
		$('#100worker').addClass('btn-success');
	}
}

document.getElementById("unlockminebutton").onclick = function() {
	if (game.stats.talentPoints >= 5) {
		game.stats.talentPoints -= 5;
		$('#minespan').removeClass('hidden');
		$('#minetalentlv2').removeClass('hidden');
		$('#minetalentlv1').addClass('hidden');
		$('#minetalentlv1desc').addClass('hidden');
		$('#minetalentlv2desc').removeClass('hidden');
		$('#crafttalentbutton').removeClass('hidden');
		$('#keeneyestalent').removeClass('hidden');
		$('#rivertalent').removeClass('hidden');
		$('#rtowerdiv').removeClass('hidden');
		updatetotalexp();
		game.talents.mineTalent += 1;
		$('#coaldiv').removeClass('hidden');
		message("");
		message("<span class='text-warning'>Mining</span> will take some <span class='text-info'>Food</span> and <span class='text-info'>Water</span>.");
		message("The head of Research pleads with you to gather some <span class='text-info'>Stone</span>!");
		message("He teaches you how to build a <span class='text-success'>Research Tower</span>; this will speed up future research.");
	}
}

document.getElementById("unlockburnbutton").onclick = function() {
	if (game.stats.talentPoints >= 3) {
		game.stats.talentPoints -= 3;
		$('#burnspan').removeClass('hidden');
		$('#burntalent').addClass('hidden');
		var tempvar = document.getElementById("talentpoints");
		tempvar.innerHTML = game.stats.talentPoints.toFixed(0);
		game.talents.burnTalent += 1;
		$('#coaldiv').removeClass('hidden');
		$('#steamdiv').removeClass('hidden');
		$('#brickdiv').removeClass('hidden');
		message("");
		message("Now that you wield the power of <span class='text-danger'>FIRE</span> you can make some real progress!");
		message("In order to make <span class='text-info'>Bricks</span> you'll need <span class='text-info'>Charcoal</span> and <span class='text-info'>Clay</span>.");
		message("25 <span class='text-info'>Wood</span> can be burned and you'll be left with some usable <span class='text-info'>Charcoal</span> for your efforts.")
	}
}

document.getElementById("riverbutton").onclick = function() {
	if (game.stats.talentPoints >= game.buildings.river.owned) {
		game.stats.talentPoints -= game.buildings.river.owned;
		game.buildings.river.rate += game.buildings.river.owned * 2.5;
		game.buildings.river.owned += game.buildings.river.owned;
		game.buildings.river.level += 1;
		var tempvar = document.getElementById("riverupgradecost");
		tempvar.innerHTML = game.buildings.river.owned.toFixed(0);
	}
};

document.getElementById("keeneyes").onclick = function() {
	if (game.stats.talentPoints >= game.talents.keenEyes * 2) {
		game.stats.talentPoints -= game.talents.keenEyes * 2;
		game.talents.keenEyes += 1;
		var keeneyescost = game.talents.keenEyes * 2;
		var tempvar = document.getElementById("keeneyecost");
		tempvar.innerHTML = keeneyescost.toFixed(0);
	}
}

document.getElementById("craftingbutton").onclick = function() {
	if (game.stats.talentPoints > 4) {
		game.stats.talentPoints -= 5;
		if ($('#craftingtalent').hasClass('hidden')) {
			$('#craftingtalent').removeClass('hidden');
			$('#craftab').removeClass('hidden');
			$('#burntalent').removeClass('hidden');
			$('#craftab').addClass('btn-danger');
			$('#researchtalent').addClass('btn-danger');
			$('#crafttalentbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = game.stats.talentPoints.toFixed(0);
			game.talents.craftingTalent += 1;
		}
	}
}

document.getElementById("logbutton").onclick = function() {
	if (game.resources.wood.owned >= game.resources.logs.rate) {
		game.resources.wood.owned -= game.resources.logs.rate;
		game.resources.logs.owned += 1;
		var tempexp = (50 * (game.stats.populationMax / 100));
		game.stats.totalEXP += tempexp;
		message("Crafted 1 <span class='text-info'>Plank</span> using " + prettify(game.resources.logs.rate) + " <span class='text-info'>Wood</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("log10").onclick = function() {
	if (game.resources.wood.owned >= game.resources.logs.rate * 10) {
		game.resources.wood.owned -= game.resources.logs.rate * 10;
		game.resources.logs.owned += 10;
		var tempexp = ((50 * (game.stats.populationMax / 100)) * 10);
		game.stats.totalEXP += tempexp;
		message("Crafted 10 <span class='text-info'>Planks</span> using " + prettify(game.resources.logs.rate * 10) + " <span class='text-info'>Wood</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("log25").onclick = function() {
	if (game.resources.wood.owned >= game.resources.logs.rate * 25) {
		game.resources.wood.owned -= game.resources.logs.rate * 25;
		game.resources.logs.owned += 25;
		var tempexp = ((50 * (game.stats.populationMax / 100)) * 25);
		game.stats.totalEXP += tempexp;
		message("Crafted 25 <span class='text-info'>Planks</span> using " + prettify(game.resources.logs.rate * 25) + " <span class='text-info'>Wood</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("log100").onclick = function() {
	if (game.resources.wood.owned >= game.resources.logs.rate * 100) {
		game.resources.wood.owned -= game.resources.logs.rate * 100;
		game.resources.logs.owned += 100;
		var tempexp = ((50 * (game.stats.populationMax / 100)) * 100);
		game.stats.totalEXP += tempexp;
		message("Crafted 100 <span class='text-info'>Planks</span> using " + prettify(game.resources.logs.rate * 100) + " <span class='text-info'>Wood</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}


document.getElementById("blockbutton").onclick = function() {
	if (game.resources.stone.owned >= game.resources.concrete.rate.stone) {
		if (game.resources.water.owned >= game.resources.concrete.rate.water) {
			game.resources.stone.owned -= game.resources.concrete.rate.stone;
			game.resources.water.owned -= game.resources.concrete.rate.water;
			game.resources.concrete.owned += 1;
			var tempexp = (50 * (game.stats.populationMax / 100));
			game.stats.totalEXP += tempexp;
			message("Crafted 1 <span class='text-info'>Concrete</span> using " + prettify(game.resources.concrete.rate.stone) + " <span class='text-info'>Stone</span> and " + prettify(game.resources.concrete.rate.water) + " <span class='text-info'>Water</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("sb10").onclick = function() {
	if (game.resources.stone.owned >= game.resources.concrete.rate.stone * 10) {
		if (game.resources.water.owned >= game.resources.concrete.rate.water * 10) {
			game.resources.stone.owned -= game.resources.concrete.rate.stone * 10;
			game.resources.water.owned -= game.resources.concrete.rate.water * 10;
			game.resources.concrete.owned += 10;
			var tempexp = ((50 * (game.stats.populationMax / 100)) * 10);
			game.stats.totalEXP += tempexp;
			message("Crafted 10 <span class='text-info'>Concrete</span> using " + prettify(game.resources.concrete.rate.stone * 10) + " <span class='text-info'>Stone</span> and " + prettify(game.resources.concrete.rate.water * 10) + " <span class='text-info'>Water</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("sb25").onclick = function() {
	if (game.resources.stone.owned >= game.resources.concrete.rate.stone * 25) {
		if (game.resources.water.owned >= game.resources.concrete.rate.water * 25) {
			game.resources.stone.owned -= game.resources.concrete.rate.stone * 25;
			game.resources.water.owned -= game.resources.concrete.rate.water * 25
			game.resources.concrete.owned += 25;
			var tempexp = ((50 * (game.stats.populationMax / 100)) * 25);
			game.stats.totalEXP += tempexp;
			message("Crafted 25 <span class='text-info'>Concrete</span> using " + prettify(game.resources.concrete.rate.stone * 25) + " <span class='text-info'>Stone</span> and " + prettify(game.resources.concrete.rate.water * 25) + " <span class='text-info'>Water</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("sb100").onclick = function() {
	if (game.resources.stone.owned >= game.resources.concrete.rate.stone * 100) {
		if (game.resources.water.owned >= game.resources.concrete.rate.water * 100) {
			game.resources.stone.owned -= game.resources.concrete.rate.stone * 100;
			game.resources.water.owned -= game.resources.concrete.rate.water * 100
			game.resources.concrete.owned += 100;
			var tempexp = ((50 * (game.stats.populationMax / 100)) * 100);
			game.stats.totalEXP += tempexp;
			message("Crafted 100 <span class='text-info'>Concrete</span> using " + prettify(game.resources.concrete.rate.stone * 100) + " <span class='text-info'>Stone</span> and " + prettify(game.resources.concrete.rate.water * 100) + " <span class='text-info'>Water</span>, gained " + prettify(tempexp) + " <span class='text-warning'>EXP</span>.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("unlocklogbutton").onclick = function() {
	if (game.resources.researchPoints.owned > 999) {
		game.resources.researchPoints.owned -= 1000;
		if ($('#logspan').hasClass('hidden')) {
			$('#logspan').removeClass('hidden');
			$('#cabinspan').removeClass('hidden');
			$('#unlocklogdiv').addClass('hidden');
			game.talents.logTalent += 1;
			$('#craftingtalent').addClass('btn-danger');
			$('#consttalent').addClass('btn-danger');
			$('#housetab').addClass('btn-danger');
			message("You now know how to craft <span class='text-info'>Planks</span>! Check out the Crafting Tab.");
		}
	}
}

document.getElementById("upgradeRPbutton").onclick = function() {
	if (game.resources.researchPoints.owned > ((game.workers.researchers.level * 1500) * game.workers.researchers.level)) {
		game.resources.researchPoints.owned -= ((game.workers.researchers.level * 1500) * game.workers.researchers.level);
		game.workers.researchers.level += 1;
		var tempvar = document.getElementById("RPupcost");
		tempvar.innerHTML = prettify(((game.workers.researchers.level * 1500) * game.workers.researchers.level));
	}
}


document.getElementById("unlockblockbutton").onclick = function() {
	if (game.resources.researchPoints.owned > 3332) {
		game.resources.researchPoints.owned -= 3333;
		if ($('#blockspan').hasClass('hidden')) {
			$('#blockspan').removeClass('hidden');
			$('#unlockblockdiv').addClass('hidden');
			game.talents.blockTalent += 1;
			$('#craftingtalent').addClass('btn-danger');
			$('#apartmentspan').removeClass('hidden');
			$('#consttalent').addClass('btn-danger');
			$('#housetab').addClass('btn-danger');
			message("You now know how to craft <span class='text-info'>Concrete</span>! Check out the Crafting Tab.");
		}
	}
}

document.getElementById("upgradeshbutton").onclick = function() {
	var rpCost = (game.buildings.storeHouses.level * 1500) * (game.buildings.storeHouses.level * 1.15);
	if (game.resources.researchPoints.owned >= rpCost) {
		game.resources.researchPoints.owned -= rpCost;
		game.buildings.storeHouses.level += 1;
		game.resources.wood.max += 250 * game.buildings.storeHouses.owned;
		game.resources.stone.max += 200 * game.buildings.storeHouses.owned;
		game.resources.charcoal.max += 50 * game.buildings.storeHouses.owned;
		game.resources.clay.max += 25 * game.buildings.storeHouses.owned;
		var tempvar = document.getElementById("upgradeshcost");
		rpCost = (game.buildings.storeHouses.level * 1500) * (game.buildings.storeHouses.level * 1.15);
		tempvar.innerHTML = prettify(rpCost);
		message("<span class='text-success'>Storehouses</span> now each hold " + prettify(250 * game.buildings.storeHouses.level) + " Wood, " + prettify(200 * game.buildings.storeHouses.level) + " Stone, " + prettify(50 * game.buildings.storeHouses.level) + " Coal, " + prettify(25 * game.buildings.storeHouses.level) + " Clay.");
	}
}

document.getElementById("fieldirrigationbutton").onclick = function() {
	var rpCost = (game.buildings.fields.level * 1500) * (game.buildings.fields.level * 1.2);
	if (game.resources.researchPoints.owned >= rpCost) {
		game.resources.researchPoints.owned -= rpCost;
		game.buildings.fields.level += 1;
		game.buildings.river.rate += .125 * game.buildings.fields.owned; 
		game.buildings.fields.rate.production += .175 * game.buildings.fields.owned;
		var tempvar = document.getElementById("fieldirrigationcost");
		rpCost = (game.buildings.fields.level * 1500) * (game.buildings.fields.level * 1.2);
		tempvar.innerHTML = prettify(rpCost);
		message("<span class='text-success'>Fields</span> now generate " + prettify(game.buildings.fields.rate.production * 4) + " Food and " + prettify((((game.buildings.fields.owned * game.buildings.fields.level) * .125) * 4)) + " Water per second.");
	}
}

document.getElementById("upgradefarmerbutton").onclick = function() {
	var rpCost = (game.workers.farmers.level * 600) * (game.workers.farmers.level * 1.25);
	if (game.resources.researchPoints.owned >= rpCost) {
		game.resources.researchPoints.owned -= rpCost;
		game.workers.farmers.level += 1;
		rpCost = (game.workers.farmers.level * 600) * (game.workers.farmers.level * 1.25);
		var tempvar = document.getElementById("farmerupcost");
		tempvar.innerHTML = prettify(rpCost);
		message("Farmers are cool now.");
	}
}

document.getElementById("upgradeloggerbutton").onclick = function() {
	var rpCost = (game.workers.lumberJacks.level * 900) * (game.workers.lumberJacks.level * 1.25);
	if (game.resources.researchPoints.owned >= rpCost) {
		game.resources.researchPoints.owned -= rpCost;
		game.workers.lumberJacks.level += 1;
		rpCost = (game.workers.lumberJacks.level * 900) * (game.workers.lumberJacks.level * 1.25);
		var tempvar = document.getElementById("loggerupcost");
		tempvar.innerHTML = prettify(rpCost);
		message("Loggers are cool now.");
	}
}

document.getElementById("upgrademinerbutton").onclick = function() {
	var rpCost = (game.workers.miners.level * 1200) * (game.workers.miners.level * 1.25);
	if (game.resources.researchPoints.owned >= rpCost) {
		game.resources.researchPoints.owned -= rpCost;
		game.workers.miners.level += 1;
		rpCost = (game.workers.miners.level * 1200) * (game.workers.miners.level * 1.25);
		var tempvar = document.getElementById("minerupcost");
		tempvar.innerHTML = prettify(rpCost);
		message("Miners are cool now.");
	}
}

document.getElementById("upgradeexplorerbutton").onclick = function() {
	var rpCost = (game.workers.explorers.level * 2500) * (game.workers.explorers.level * 1.25);
	if (game.resources.researchPoints.owned >= rpCost) {
		game.resources.researchPoints.owned -= rpCost;
		game.workers.explorers.level += 1;
		rpCost = (game.workers.explorers.level * 2500) * (game.workers.explorers.level * 1.25);
		var tempvar = document.getElementById("explorerupcost");
		tempvar.innerHTML = prettify(rpCost);
		message("Explorers are cool now.");
	}
}

document.getElementById("unlockfarmerbutton").onclick = function() {
	if (game.resources.researchPoints.owned > 24) {
		game.resources.researchPoints.owned -= 25;
		if ($('#farmerdiv').hasClass('hidden')) {
			$('#farmerdiv').removeClass('hidden');
			$('#unlockfarmerdiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = game.stats.talentPoints.toFixed(0);
			game.talents.farmerTalent += 1;
			message("");
			message("Your Researchers have gathered all their knowledge of Farming into a great Codex.");
			message("You can now train Farmers to till your <span class='text-success'>Fields</span> and increase <span class='text-info'>Food</span> production even more!");
			message("Each <span class='text-success'>Field</span> can hold one Farmer initially, the head of Research assures you he can improve this eventually.");
		}
	}
}

document.getElementById("unlockloggerbutton").onclick = function() {
	if (game.resources.researchPoints.owned > 149) {
		game.resources.researchPoints.owned -= 150;
		if ($('#loggerdiv').hasClass('hidden')) {
			$('#loggerdiv').removeClass('hidden');
			$('#unlockloggerdiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = game.stats.talentPoints.toFixed(0);
			game.talents.loggerTalent += 1;
			$('#consttalent').addClass('btn-danger');
			$('#prodtab').addClass('btn-danger');
			$('#sawmillspan').removeClass('hidden');
		}
	}
}

document.getElementById("unlockminerbutton").onclick = function() {
	if (game.resources.researchPoints.owned > 349) {
		game.resources.researchPoints.owned -= 350;
		if ($('#minerdiv').hasClass('hidden')) {
			$('#minerdiv').removeClass('hidden');
			$('#unlockminerdiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = game.stats.talentPoints.toFixed(0);
			game.talents.minerTalent += 1;
			$('#consttalent').addClass('btn-danger');
			$('#housetab').addClass('btn-danger');
			$('#rhspan').removeClass('hidden');
		}
	}
}

document.getElementById("unlockexplorerbutton").onclick = function() {
	if (game.resources.researchPoints.owned > 1749) {
		game.resources.researchPoints.owned -= 1750;
		if ($('#explorerdiv').hasClass('hidden')) {
			$('#explorerdiv').removeClass('hidden');
			$('#unlockexplorerdiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = game.stats.talentPoints.toFixed(0);
			game.talents.warriorTalent += 1;
		}
	}
}

document.getElementById("removefarmerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		var mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		var mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		var mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		var mult = 100;
	}
	if (game.workers.farmers.owned > 0) {
		game.workers.freeWorkers.owned += Math.min(game.workers.farmers.owned,mult);
		game.workers.farmers.owned -= Math.min(game.workers.farmers.owned,mult);
		updateWorkerNumber();
		if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) < 10) {
		$('#forage10').prop('disabled', true);
		}
		if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) < 25) {
		$('#forage25').prop('disabled', true);
		}
		if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) < 100) {
		$('#forage100').prop('disabled', true);
		}
	}
}

document.getElementById("addfarmerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		mult = 100;
	}
	if (game.workers.freeWorkers.owned > 0) {
		if (game.resources.food.owned >= (25 * Math.min(game.workers.freeWorkers.owned,mult))) {
			if ((game.workers.farmers.owned + Math.min(game.workers.freeWorkers.owned,mult)) <= ((game.buildings.fields.owned) * game.buildings.fields.level + 1)) {
				game.resources.food.owned -= (25 * Math.min(game.workers.freeWorkers.owned,mult));
				game.workers.farmers.owned += Math.min(game.workers.freeWorkers.owned,mult);
				game.workers.freeWorkers.owned -= Math.min(game.workers.freeWorkers.owned,mult);
				updateWorkerNumber();
				if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) >= 10) {
				$('#forage10').prop('disabled', false);
				}
				if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) >= 25) {
				$('#forage25').prop('disabled', false);
				}
				if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) >= 100) {
				$('#forage100').prop('disabled', false);
				}
			}
			if (game.workers.farmers.owned > ((game.buildings.fields.owned) * game.buildings.fields.level)) {
				message("");
				message("There's no room for more Farmers! Buy or Upgrade more <span class='text-success'>Fields</span>!");
			}
		}
	}
}

document.getElementById("removeloggerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		var mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		var mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		var mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		var mult = 100;
	}
	if (game.workers.lumberJacks.owned > 0) {
		game.workers.freeWorkers.owned += Math.min(game.workers.lumberJacks.owned,mult);
		game.workers.lumberJacks.owned -= Math.min(game.workers.lumberJacks.owned,mult);
		updateWorkerNumber();
		if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) < 10) {
		$('#forage10').prop('disabled', true);
		}
		if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) < 25) {
		$('#forage25').prop('disabled', true);
		}
		if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) < 100) {
		$('#forage100').prop('disabled', true);
		}
	}
}

document.getElementById("addloggerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		mult = 100;
	}
	if (game.workers.freeWorkers.owned > 0) {
		if (game.resources.food.owned >= (75 * Math.min(game.workers.freeWorkers.owned,mult))) {
			game.resources.food.owned -= (75 * Math.min(game.workers.freeWorkers.owned,mult));
			game.workers.lumberJacks.owned += Math.min(game.workers.freeWorkers.owned,mult);
			game.workers.freeWorkers.owned -= Math.min(game.workers.freeWorkers.owned,mult);
			updateWorkerNumber();
			if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) >= 15) {
			$('#forage10').prop('disabled', false);
			}
			if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) >= 35) {
			$('#forage25').prop('disabled', false);
			}
			if ((game.workers.farmers.owned + game.workers.lumberJacks.owned) >= 125) {
			$('#forage100').prop('disabled', false);
			}
		}
	}
}

document.getElementById("removeminerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		mult = 100;
	}
	if (game.workers.miners.owned > 0) {
		game.workers.freeWorkers.owned += Math.min(game.workers.miners.owned,mult);
		game.workers.miners.owned -= Math.min(game.workers.miners.owned,mult);
		updateWorkerNumber();
		if (game.workers.miners.owned < 10) {
		$('#mine10').prop('disabled', true);
		}
		if (game.workers.miners.owned < 25) {
		$('#mine25').prop('disabled', true);
		}
		if (game.workers.miners.owned < 100) {
		$('#mine100').prop('disabled', true);
		}
	}
}

document.getElementById("addminerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		mult = 100;
	}
	if (game.workers.freeWorkers.owned > 0) {
		if (game.resources.food.owned >= (75 * Math.min(game.workers.freeWorkers.owned,mult))) {
			game.resources.food.owned -= (75 * Math.min(game.workers.freeWorkers.owned,mult));
			game.workers.miners.owned += Math.min(game.workers.freeWorkers.owned,mult);
			game.workers.freeWorkers.owned -= Math.min(game.workers.freeWorkers.owned,mult);
			updateWorkerNumber();
			if (game.workers.miners.owned >= 10) {
			$('#mine10').prop('disabled', false);
			}
			if (game.workers.miners.owned >= 25) {
			$('#mine25').prop('disabled', false);
			}
			if (game.workers.miners.owned >= 100) {
			$('#mine100').prop('disabled', false);
			}
		}
	}
}

document.getElementById("removeresearcherbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		var mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		var mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		var mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		var mult = 100;
	}
	if (game.workers.researchers.owned > 0) {
		game.workers.freeWorkers.owned += Math.min(game.workers.researchers.owned,mult);
		game.workers.researchers.owned -= Math.min(game.workers.researchers.owned,mult);
		updateWorkerNumber();
	}
}

document.getElementById("addresearcherbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		var mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		var mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		var mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		var mult = 100;
	}
	if (game.workers.freeWorkers.owned > 0) {
		if (game.resources.food.owned >= (25 * Math.min(game.workers.freeWorkers.owned,mult))) {
			game.resources.food.owned -= (25 * Math.min(game.workers.freeWorkers.owned,mult));
			game.workers.researchers.owned += Math.min(game.workers.freeWorkers.owned,mult);
			game.workers.freeWorkers.owned -= Math.min(game.workers.freeWorkers.owned,mult);
			updateWorkerNumber();
			if ($('#researchtalent').hasClass('hidden')) {
			$('#researchtalent').removeClass('hidden');
			$('#researchtalent').addClass('btn-danger');
			$('#clastab').addClass('btn-danger');
			game.talents.researchTalent += 1;
			$('#rpdiv').removeClass('hidden');
			message("");
			message("Workers will eat up a small percentage of your <span class='text-info'>Food</span> every second.");
			message("If <span class='text-info'>Food</span> gets too low they will stop working. (Except for Farmers!)");
			message("Try to get as many <span class='text-info'>Research Points</span> as you can, there are many things to discover!");
			}
		}
	}
}

document.getElementById("removeexplorerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		var mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		var mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		var mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		var mult = 100;
	}
	if (game.workers.explorers.owned > 0) {
		game.workers.freeWorkers.owned += Math.min(game.workers.explorers.owned,mult);
		game.workers.explorers.owned -= Math.min(game.workers.explorers.owned,mult);
		updateWorkerNumber();
	}
}

document.getElementById("addexplorerbutton").onclick = function() {
	var mult;
	if ($('#1worker').hasClass('btn-success')) {
		var mult = 1;
	}
	if ($('#10worker').hasClass('btn-success')) {
		var mult = 10;
	}
	if ($('#25worker').hasClass('btn-success')) {
		var mult = 25;
	}
	if ($('#100worker').hasClass('btn-success')) {
		var mult = 100;
	}
	if (game.workers.freeWorkers.owned > 0) {
		if (game.resources.food.owned >= (125 * Math.min(game.workers.freeWorkers.owned,mult))) {
			game.resources.food.owned -= (125 * Math.min(game.workers.freeWorkers.owned,mult));
			game.workers.explorers.owned += Math.min(game.workers.freeWorkers.owned,mult);
			game.workers.freeWorkers.owned -= Math.min(game.workers.freeWorkers.owned,mult);
			updateWorkerNumber();
		}
	}
}



document.getElementById("hutbutton").onclick = function() {
	var hutcost = (10 * (Math.pow(game.buildings.huts.owned + 1,1.95)));
	if (game.resources.wood.owned >= hutcost) {
		game.resources.wood.owned -= hutcost;
		game.stats.totalEXP += hutcost;
		oHutCost = hutcost;
		game.buildings.huts.owned += 1;
		game.stats.populationMax += game.buildings.huts.level * 2;
		updatebuildings();
		updateresources();	
		message("");
		message("Built a <span class='text-success'>Hut</span> using " + prettify(oHutCost) + " <span class='text-info'>Wood</span> and gained " + prettify(oHutCost) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.huts.owned) + " <span class='text-success'>Huts</span>; Housing " + prettify(game.buildings.huts.owned * (game.buildings.huts.level * 2)) + ".");
		if ($('#workertalent').hasClass('hidden')) {
		if (game.stats.populationMax > 1) {
		$('#workertalent').removeClass('hidden');
		$('#workertalent').addClass('btn-danger');
		game.talents.workerTalent += 1;
		}
		if (game.buildings.huts.owned = 1) {
			message("");
			message("Great! Now you can sustain a few more people to help you out.");
			message("Don't worry, they will show up on their own.");
		}
	}
	}
};

document.getElementById("apartmentbutton").onclick = function() {
	var aptcost = (50 * (Math.pow(game.buildings.apartments.owned + 1,1.95)));
	if (game.resources.concrete.owned >= aptcost && game.resources.bricks.owned >= (aptcost/2)) {
		game.resources.concrete.owned -= aptcost;
		game.resources.bricks.owned -= (aptcost/2);
		game.stats.totalEXP += (2000 * game.buildings.apartments.owned);
		oAptCost = aptcost;
		game.buildings.apartments.owned += 1;
		game.stats.populationMax += game.buildings.apartments.level * 25;
		updatebuildings();
		updateresources();
		message("");
		message("Built an <span class='text-success'>Apartment Building</span> using " + prettify(oAptCost) + " <span class='text-info'>Concrete</span> and gained " + prettify(2000 * (game.buildings.apartments.owned - 1)) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.apartments.owned) + " <span class='text-success'>Apartments</span>; Housing " + prettify(game.buildings.apartments.owned * (game.buildings.apartments.level * 25)) + ".");
	}
}

document.getElementById("cabinbutton").onclick = function() {
	var cabincost = (50 * (Math.pow(game.buildings.cabins.owned + 1,1.9)));
	if (game.resources.logs.owned >= cabincost) {
		game.resources.logs.owned -= cabincost;
		game.stats.totalEXP += cabincost * 30;
		oCabinCost = cabincost;
		game.buildings.cabins.owned += 1;
		game.stats.populationMax += game.buildings.cabins.level * 10;
		updatebuildings();
		updateresources();
		message("");
		message("Built a <span class='text-success'>Cabin</span> using " + prettify(oCabinCost) + " <span class='text-info'>Planks</span> and gained " + prettify(oCabinCost * 30) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.cabins.owned) + " <span class='text-success'>Cabins</span>; Housing " + prettify(game.buildings.cabins.owned * (game.buildings.cabins.level * 10) + "."));		
	}
};

document.getElementById("rhbutton").onclick = function() {
	var rhcost = (33 * (Math.pow(game.buildings.roundHouses.owned + 1,1.47)));
	if (game.resources.clay.owned >= rhcost) {
		game.resources.clay.owned -= rhcost;
		game.stats.totalEXP += rhcost * 2;
		oRhCost = rhcost;
		game.buildings.roundHouses.owned += 1;
		game.stats.populationMax += game.buildings.roundHouses.level * 5;
		updatebuildings();
		updateresources();	
		message("");
		message("Built a <span class='text-success'>Roundhouse</span> using " + prettify(oRhCost) + " <span class='text-info'>Clay</span> and gained " + prettify(oRhCost * 2) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.roundHouses.owned) + " <span class='text-success'>Roundhouses</span>; Housing " + prettify(game.buildings.roundHouses.owned * (game.buildings.roundHouses.level * 5)) + ".");		
	}
};

document.getElementById("aqueductbutton").onclick = function() {
	var aqcost = (150 * (Math.pow(game.buildings.aqueducts.owned + 1,1.25)));
	var aqrpcost = (1000 * (Math.pow(game.buildings.aqueducts.owned+1,1.15)));
	if (game.resources.stone.owned >= aqcost && game.resources.food.owned >= (aqcost/2) && game.resources.researchPoints.owned >= aqrpcost) {
		game.resources.food.owned -= (aqcost/2);
		game.resources.stone.owned -= aqcost;
		game.resources.researchPoints.owned -= aqrpcost;
		game.stats.totalEXP += aqcost;
		game.buildings.aqueducts.owned += 1;
		updatebuildings();
		updateresources();
		message("");
		message("Built an <span class='text-success'>Aqueduct</span> using " + prettify(aqcost) + " <span class='text-info'>Stone</span> and " + prettify(aqcost/2) + " <span class='text-info'>Food</span> and gained " + prettify(aqcost) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.aqueducts.owned) + ".");
		if ($('#granaryspan').hasClass('hidden')) {
				message("<span class='text-success'>Granary</span> Unlocked!");
				message("<span class='text-danger'>Warning!</span> Increasing your <span class='text-info'>Food</span> max will increase how much your workers eat!");
				message("Make sure you've got some <span class='text-info'>Food</span> supplies built up or people prepared to learn how to farm.");
				$('#granaryspan').removeClass('hidden');
				game.talents.granaryTalent += 1;
		}
	}
}

document.getElementById("fieldbutton").onclick = function() {
	var fieldcost = (50 * (Math.pow(game.buildings.fields.owned + 1,1.07)));
	if (game.resources.food.owned >= fieldcost) {
		game.resources.food.owned -= fieldcost;
		game.buildings.fields.owned += 1;
		game.stats.totalEXP += (game.buildings.fields.owned * 5);
		ofieldcost = fieldcost;
		game.buildings.fields.rate.production += (.175 * (game.buildings.fields.level));
		game.buildings.river.rate += (.125 * (game.buildings.fields.level - 1));
		updatebuildings();
		updateresources();	
		message("");
		message("Tilled a <span class='text-success'>Field</span> at the expense of " + prettify(ofieldcost) + " <span class='text-info'>Food</span> and gained " + prettify((game.buildings.fields.owned * 5)) + " <span class='text-warning'>EXP</span>.");
		if (game.buildings.fields.level < 2) {
			message("This brings you to a total of " + prettify(game.buildings.fields.owned) + " <span class='text-success'>Fields</span>; Producing " + prettify(game.buildings.fields.rate.production * 4) + " <span class='text-info'>Food</span> per second.");
		}
		if (game.buildings.fields.level > 1) {
			message("This brings you to a total of " + prettify(game.buildings.fields.owned) + " <span class='text-success'>Fields</span>; Producing " + prettify(game.buildings.fields.rate.production * 4) + " <span class='text-info'>Food</span> and " + prettify((((game.buildings.fields.owned * game.buildings.fields.level) * .125) * 4)) + " <span class='text-info'>Water</span> per second.");
		}
		if ($('#aqueductspan').hasClass('hidden')) {
			if (game.buildings.fields.owned > 4) {
				message("");
				message("<span class='text-success'>Aqueduct</span> Unlocked!");
				$('#aqueductspan').removeClass('hidden');
				game.talents.aqueductTalent += 1;
			}
		}
		if (game.buildings.fields.owned < 2) {
			message("")
			message("Excellent! Now that you have <span class='text-info'>Food</span> and <span class='text-info'>Water</span> under control it's time to build a shelter.");
			message("Keep Foraging until you've gathered 10 <span class='text-info'>Wood</span>.")
			message("Don't forget to keep tilling <span class='text-success'>Fields</span> when you can!")
		}
	}
}



document.getElementById("granarybutton").onclick = function() {
	var granarywoodcost = (35 * (Math.pow(game.buildings.granaries.owned + 1,1.6)));
	var granarystonecost = (50 * (Math.pow(game.buildings.granaries.owned + 1,1.45)));
	if (game.resources.wood.owned >= granarywoodcost && game.resources.stone.owned >= granarystonecost) {
		game.resources.wood.owned -= granarywoodcost;
		game.resources.stone.owned -= granarystonecost;
		oGranaryWoodCost = granarywoodcost;
		oGranaryStoneCost = granarystonecost;
		game.buildings.granaries.owned += 1;
		game.resources.food.max += (175 * game.buildings.granaries.level);
		game.resources.water.max += (300 * game.buildings.granaries.level);
		game.stats.totalEXP += (150 * game.buildings.granaries.owned);
		updatebuildings();
		updateresources();
		updatetotalexp();
		message("");
		message("Built a <span class='text-success'>Granary</span> using " + prettify(oGranaryWoodCost) + " <span class='text-info'>Wood</span> and " + prettify(oGranaryStoneCost) + " <span class='text-info'>Stone</span> and gained " + prettify((game.buildings.granaries.owned * 150)) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.granaries.owned) + " <span class='text-success'>Granaries</span>.");
	}
}

document.getElementById("shbutton").onclick = function() {
	var shcost = (150 * (Math.pow(game.buildings.storeHouses.owned + 1,1.35)));
	if (game.resources.wood.owned >= shcost) {
		game.resources.wood.owned -= shcost;
		game.buildings.storeHouses.owned += 1;
		oShCost = shcost;
		game.stats.totalEXP += (75 * game.buildings.storeHouses.owned) * game.buildings.storeHouses.level;
		game.resources.wood.max += 250 * game.buildings.storeHouses.level;
		game.resources.stone.max += 200 * game.buildings.storeHouses.level;
		game.resources.charcoal.max += 50 * game.buildings.storeHouses.level;
		game.resources.clay.max += 25 * game.buildings.storeHouses.level;
		updatebuildings();
		updateresources();	
		updatetotalexp();
		message("");
		message("Built a <span class='text-success'>Storehouse</span> using " + prettify(oShCost) + " <span class='text-info'>Wood</span> and gained " + prettify((75 * game.buildings.storeHouses.owned) * game.buildings.storeHouses.level) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.storeHouses.owned) + " <span class='text-success'>Storehouses</span>.");
		message("<span class='text-success'>Storehouse</span> capacity is now " + prettify((250 * game.buildings.storeHouses.level) * game.buildings.storeHouses.owned) + " <span class='text-info'>Wood</span>, " + prettify((200 * game.buildings.storeHouses.level) * game.buildings.storeHouses.owned) + " <span class='text-info'>Stone</span>, " + prettify((50 * game.buildings.storeHouses.level) * game.buildings.storeHouses.owned) + " <span class='text-info'>Coal</span>, " + prettify((25 * game.buildings.storeHouses.level) * game.buildings.storeHouses.owned) + " <span class='text-info'>Clay</span>.");

	}
	
}



document.getElementById("rtowerbutton").onclick = function() {
	var rtowercost = (100 * (Math.pow(game.buildings.researchTowers.owned + 1,1.04)));
	if (game.resources.stone.owned >= rtowercost) {
		game.resources.stone.owned -= rtowercost;
		game.buildings.researchTowers.owned += 1;
		oRTowerCost = rtowercost;
		game.stats.totalEXP += (25 * game.buildings.researchTowers.owned);
		game.workers.researchers.rate = (game.workers.researchers.rate * 1.165);
		updatebuildings();
		updateresources();		
		updatetotalexp();
		message("");
		message("Built a <span class='text-success'>Research Tower</span> using " + prettify(oRTowerCost) + " <span class='text-info'>Stone</span> and gained " + prettify(25 * game.buildings.researchTowers.owned) + " <span class='text-warning'>EXP</span>.");
		message("This brings you to a total of " + prettify(game.buildings.researchTowers.owned) + " <span class='text-success'>Research Towers</span>.");
		message("Each Researcher now produces " + prettify((game.workers.researchers.rate * 4) * game.workers.researchers.level) + " <span class='text-info'>Research Points</span> per second.")
	}
	if (game.buildings.researchTowers.owned > 4 && $('#upgradeRPdiv').hasClass('hidden')) {
		$('#upgradeRPdiv').removeClass('hidden');
		$('#upgradefarmerdiv').removeClass('hidden');
		$('#upgradeloggerdiv').removeClass('hidden');
		$('#upgrademinerdiv').removeClass('hidden');
		$('#upgradeexplorerdiv').removeClass('hidden');
		$('#researchtalent').addClass('btn-danger');
		message("");
		message("<span class='text-danger'>More research projects unlocked!</span>");
	}
}

document.getElementById("sawmillbutton").onclick = function() {
	var smscost = (25 * (Math.pow(game.buildings.sawMills.owned + 1,1.5)));
	var smccost = (1 * (Math.pow(game.buildings.sawMills.owned + 1,1.5)));
	if (game.resources.stone.owned >= smscost) {
		if (game.resources.clay.owned >= smccost) {
			game.resources.stone.owned -= smscost;
			game.resources.clay.owned -= smccost;
			game.buildings.sawMills.owned += 1;
			oSmSCost = smscost;
			oSmCCost = smccost;
			game.stats.totalEXP += (25 * game.buildings.sawMills.owned);
			updatebuildings();
			updateresources();		
			updatetotalexp();
			message("");
			message("Built a <span class='text-success'>Sawmill</span> using " + prettify(oSmSCost) + " <span class='text-info'>Stone</span> and " + prettify(oSmCCost) + " <span class='text-info'>Clay</span> and gained " + prettify((game.buildings.sawMills.owned * 25)) + " <span class='text-warning'>EXP</span>.");
			message("This brings you to a total of " + prettify(game.buildings.sawMills.owned) + " <span class='text-success'>Sawmills</span>.");
			message("Each Lumberjack now produces " + prettify((game.workers.lumberJacks.rate * 4) * (1 + (game.buildings.sawMills.owned * 0.10))) + " <span class='text-info'>Wood</span> per second.");
			
		}
	}
}

document.getElementById("burnwater").onclick = function() {
	if ($('#burnwater').hasClass('active')) {
		($('#burnwater').removeClass('active'));
		($('#burnwater').removeClass('btn-success'));
		($('#burnwater').addClass('btn-danger'));
	} else {
		($('#burnwater').addClass('active'));
		($('#burnwater').addClass('btn-success'));
		($('#burnwater').removeClass('btn-danger'));
	}
}

document.getElementById("burncoal").onclick = function() {
	if ($('#burncoal').hasClass('active')) {
		($('#burncoal').removeClass('active'));
		($('#burncoal').removeClass('btn-success'));
		($('#burncoal').addClass('btn-danger'));
	} else {
		($('#burncoal').addClass('active'));
		($('#burncoal').addClass('btn-success'));
		($('#burncoal').removeClass('btn-danger'));
	}
}

document.getElementById("burnclay").onclick = function() {
	if ($('#burnclay').hasClass('active')) {
		($('#burnclay').removeClass('active'));
		($('#burnclay').removeClass('btn-success'));
		($('#burnclay').addClass('btn-danger'));
	} else {
		($('#burnclay').addClass('active'));
		($('#burnclay').addClass('btn-success'));
		($('#burnclay').removeClass('btn-danger'));
	}
}


function forage(m) {
	if (((game.resources.water.owned) - (5 * m)) >= 0) {
		var popbonus = (m * ((game.stats.population) * 0.05));
		game.stats.totalEXP += m + popbonus;
		game.resources.water.owned -= (m * 5);
		game.resources.food.owned += ((m + popbonus) * (game.talents.keenEyes));
		var fg = ((m + popbonus) * (game.talents.keenEyes));
		if (getRandomInt(0,100) >= 75) {
			game.resources.wood.owned += (((m + popbonus) * 0.25) * (game.talents.keenEyes));
			var wg = (((m + popbonus) * 0.25) * (game.talents.keenEyes));
		};
		if (getRandomInt(0,100) >= 85) {
			game.resources.stone.owned += (((m + popbonus) * 0.10) * (game.talents.keenEyes));
			var sg = (((m + popbonus) * 0.10) * (game.talents.keenEyes));
		};
		if (getRandomInt(0,100) >= 90) {
			game.resources.clay.owned += (((m + popbonus) * 0.05) * (game.talents.keenEyes));
			var cg = (((m + popbonus) * 0.05) * (game.talents.keenEyes));
		};
		if (game.resources.wood.owned > game.resources.wood.max) {game.resources.wood.owned = game.resources.wood.max};
		if (game.resources.food.owned > game.resources.food.max) {game.resources.food.owned = game.resources.food.max};
		if (game.resources.stone.owned > game.resources.stone.max) {game.resources.stone.owned = game.resources.stone.max};
		if (game.resources.clay.owned > game.resources.clay.max) {game.resources.clay.owned = game.resources.clay.max};
		if (game.resources.charcoal.owned > game.resources.charcoal.max) {game.resources.charcoal.owned = game.resources.charcoal.max};
		updateresources();
		updatetotalexp();/*
		if (wg > 0 && sg > 0 && cg > 0) {
			message("Foraged " + prettify(wg) + " Wood, " + prettify(sg) + " Stone, " + prettify(cg) + " Clay.")
			return;
		}
		if (wg > 0 && sg > 0) {
			message("Foraged " + prettify(wg) + " Wood, " + prettify(sg) + " Stone.")
			return;
		}
		if (wg > 0 && cg > 0) {
			message("Foraged " + prettify(wg) + " Wood, " + prettify(cg) + " Clay.")
			return;
		}
		if (sg > 0 && cg > 0) {
			message("Foraged " + prettify(sg) + " Stone, " + prettify(cg) + " Clay.")
			return;
		}
		if (wg > 0) {
			message("Foraged " + prettify(wg) + " Wood.")
		}
		if (sg > 0) {
			message("Foraged " + prettify(sg) + " Stone.")
		}
		if (cg > 0) {
			message("Foraged " + prettify(cg) + " Clay.")
		}*/
	}	
}

function mine(m) {
	if (((game.resources.water.owned) - (15 * m)) >= 0 && ((game.resources.food.owned) - (5 * m)) >= 0 ) {
		var popbonus = (m * ((game.stats.population - 1) * 0.05));
		game.resources.stone.owned += m + popbonus;
		game.stats.totalEXP += m + popbonus;
		game.resources.water.owned -= (m * 15);
		game.resources.food.owned -= (m * 7.5);
		if (getRandomInt(0,100) >= 50) { game.resources.clay.owned += ((m + popbonus) * 0.03125) };
		if (getRandomInt(0,100) >= 90) { game.resources.charcoal.owned += ((m + popbonus) * 0.05) };
		if (game.resources.stone.owned > game.resources.stone.max) {game.resources.stone.owned = game.resources.stone.max};
		if (game.resources.clay.owned > game.resources.clay.max) {game.resources.clay.owned = game.resources.clay.max};
		if (game.resources.charcoal.owned > game.resources.charcoal.max) {game.resources.charcoal.owned = game.resources.charcoal.max};
		updateresources();
		updatetotalexp();
	}	
}

function burn(m) {
	var popbonus = (m * ((game.stats.population - 1) * 0.025));
	
	if ($('#burncoal').hasClass('active')) {
		if (game.resources.wood.owned >= (m * 25)) {
			game.resources.wood.owned -= (m * 25);
			game.resources.charcoal.owned += m
			if (game.resources.charcoal.owned >= game.resources.charcoal.max) {
				game.resources.charcoal.owned = game.resources.charcoal.max;
			}
			game.stats.totalEXP += (m * 5) + popbonus;
			updatetotalexp();
			updateresources();
		}
	}
	if ($('#burnwater').hasClass('active')) {
		if (game.resources.water.owned >= (m * 500)) {
			if (game.resources.charcoal.owned >= (m)) {
				game.resources.water.owned -= (m * 500);
				game.resources.charcoal.owned -= m;
				game.resources.steam.owned += 50;
				game.stats.totalEXP += (m * 17.5) + popbonus;
				updatetotalexp();
				updateresources();
			}
		}
	}
	if ($('#burnclay').hasClass('active')) {
		if (game.resources.clay.owned >= (m * 25)) {
			if (game.resources.charcoal.owned >= (m)) {
				game.resources.clay.owned -= m * 25;
				game.resources.charcoal.owned -= m;
				game.resources.bricks.owned += 1;
				game.stats.totalEXP += (m * 7.5) + popbonus;
				updatetotalexp();
				updateresources();
			}
		}
	}
}

function resetGame(keepPortal) {
	//Hide all the stuff that needs to be hidden etc.
	game = null;
	game = newGame();
}

function loadUI() {
	
		if (game.talents.burnTalent > 0) {
			$('#burnspan').removeClass('hidden');
			$('#burntalent').addClass('hidden');
			$('#coaldiv').removeClass('hidden');
			$('#steamdiv').removeClass('hidden');
			$('#brickdiv').removeClass('hidden');
		}
		
		if (game.talents.mineTalent > 0) {
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
		
		if (game.talents.researcherTalent > 0) {
			$('#researchdiv').removeClass('hidden');
			$('#unlockresearcherbutton').addClass('hidden');
			$('#rpdiv').removeClass('hidden');
		}
		
		if (game.talents.farmerTalent > 0) {
			$('#farmerdiv').removeClass('hidden');
			$('#unlockfarmerdiv').addClass('hidden');
		}
		
		if (game.talents.loggerTalent > 0) {
			$('#loggerdiv').removeClass('hidden');
			$('#unlockloggerdiv').addClass('hidden');
			$('#sawmillspan').removeClass('hidden');
		}
		
		if (game.talents.minerTalent > 0) {
			$('#minerdiv').removeClass('hidden');
			$('#unlockminerdiv').addClass('hidden');
			$('#rhspan').removeClass('hidden');
		}
		
		if (game.talents.warriorTalent > 0) {
			$('#explorerdiv').removeClass('hidden');
			$('#unlockexplorerdiv').addClass('hidden');
		}
		
		if (game.talents.constructionTalent > 0) {
			$('#consttalent').removeClass('hidden');
		}
		
		if (game.talents.houseTalent > 0) {
			$('#housetab').removeClass('hidden');
			$('#popspan').removeClass('hidden');
		}
		
		if (game.talents.workerTalent > 0) {
			$('#workertalent').removeClass('hidden');
		}
		
		if (game.talents.researchTalent > 0) {
			$('#researchtalent').removeClass('hidden');
			$('#rpdiv').removeClass('hidden');
		}
		
		if (game.talents.craftingTalent > 0) {
			$('#craftingtalent').removeClass('hidden');
			$('#crafttalentbutton').addClass('hidden');
			$('#craftab').removeClass('hidden');
			if (game.talents.burnTalent < 1) {
				$('#burntalent').removeClass('hidden');
			}
			
		}
		
		if (game.talents.logTalent > 0) {
			$('#logspan').removeClass('hidden');
			$('#logdiv').removeClass('hidden');
			$('#unlocklogdiv').addClass('hidden');
			$('#cabinspan').removeClass('hidden');
		}
		
		if (game.talents.blockTalent > 0) {
			$('#blockspan').removeClass('hidden');
			$('#blockdiv').removeClass('hidden');
			$('#unlockblockdiv').addClass('hidden');
			$('#apartmentspan').removeClass('hidden');
		}
		
		if (game.talents.granaryTalent > 0) {
			$('#granaryspan').removeClass('hidden');
		}
		
		if (game.talents.aqueductTalent > 0) {
			$('#aqueductspan').removeClass('hidden');
		}
		
		if (game.workers.farmers.owned + game.workers.lumberJacks.owned >= 10) {
			$('#forage10').prop('disabled', false);
		}
		if (game.workers.miners.owned >= 10) {
			$('#mine10').prop('disabled', false);
		}
		
		if (game.workers.farmers.owned + game.workers.lumberJacks.owned >= 25) {
			$('#forage25').prop('disabled', false);
		}
		if (game.workers.miners.owned >= 25) {
			$('#mine25').prop('disabled', false);
		}
		
		if (game.workers.farmers.owned + game.workers.lumberJacks.owned >= 100) {
			$('#forage100').prop('disabled', false);
		}
		if (game.workers.miners.owned >= 100) {
			$('#mine100').prop('disabled', false);
		}
		
		if (game.stats.currentLevel > 14) {
			$('#talenttalent').removeClass('hidden');
		}
		
		if (game.buildings.researchTowers > 4) {
			$('#upgradefarmerdiv').removeClass('hidden');
			$('#upgradeloggerdiv').removeClass('hidden');
			$('#upgrademinerdiv').removeClass('hidden');
			$('#upgradeRPdiv').removeClass('hidden');
			$('#upgradeexplorerdiv').removeClass('hidden');
		}
		
		var farmerrp = (game.workers.farmers.level * 600) * (game.workers.farmers.level * 1.25);
		var loggerrp = (game.workers.lumberJacks.level * 900) * (game.workers.lumberJacks.level * 1.25);
		var minerrp = (game.workers.miners.level * 1200) * (game.workers.miners.level * 1.25);
		var warriorrp = (game.workers.explorers.level * 2500) * (game.workers.explorers.level * 1.25);
		var researcherrp = (game.workers.researchers.level * 1500) * (game.workers.researchers.level * 1.25);
		
		var tempvar = document.getElementById("riverupgradecost");
		tempvar.innerHTML = prettify(game.buildings.river.owned);
		
		var tempvar2 = document.getElementById("keeneyecost");
		tempvar2.innerHTML = prettify(game.talents.keenEyes * 2);
		
		var tempvar3 = document.getElementById("upgradeshcost");
		tempvar3.innerHTML = prettify((game.buildings.storeHouses.level * 1500) * (game.buildings.storeHouses.level * 1.15));
		
		var tempvar4 = document.getElementById("fieldirrigationcost");
		tempvar4.innerHTML = prettify((game.buildings.fields.level * 1500) * (game.buildings.fields.level * 1.2));
		
		var tempvar5 = document.getElementById("farmerupcost");
		tempvar5.innerHTML = prettify((game.workers.farmers.level * 600) * (game.workers.farmers.level * 1.25));
		
		var tempvar6 = document.getElementById("loggerupcost");
		tempvar6.innerHTML = prettify((game.workers.lumberJacks.level * 900) * (game.workers.lumberJacks.level * 1.25));
		
		var tempvar7 = document.getElementById("minerupcost");
		tempvar7.innerHTML = prettify((game.workers.miners.level * 1200) * (game.workers.miners.level * 1.25));
		
		var tempvar8 = document.getElementById("explorerupcost");
		tempvar8.innerHTML = prettify((game.workers.explorers.level * 2500) * (game.workers.explorers.level * 1.25));
		
		var tempvar9 = document.getElementById("RPupcost");
		tempvar9.innerHTML = prettify((game.workers.researchers.level * 1500) * game.workers.researchers.level);
		
		message("Welcome back!");
}

document.getElementById("newgame").onclick = function() {
		resetGame();
		updateWorkers();
		autoSave();
		updatetotalexp();
		updatebuildings();
		updateresources();
		updateWorkerNumber();

		message("You wake up with a splitting headache. Your stomach growls with hunger.");
		message("Luckily there is a River nearby giving you access to clean <span class='text-info'>Water</span>.")
		message("Better look around for something to eat.");
		
}


document.getElementById("loadgame").onclick = function() {
		load();
		updateWorkers();
		autoSave();
		updatetotalexp();
		updatebuildings();
		updateresources();
		updateWorkerNumber();
		loadUI();
	
}