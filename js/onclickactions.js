
document.getElementById("Forage").onclick = function() {
	forage(1); 
	if ($('#consttalent').hasClass('hidden')) {
		if (currentfood >= 35) {
		$('#consttalent').removeClass('hidden');
		$('#consttalent').addClass('btn-danger');
		$('#prodtab').addClass('btn-danger');
		constructiontalent += 1;
		} 
	}
	if ($('#housetab').hasClass('hidden')) {
		if (wood >= 10) {
			$('#housetab').removeClass('hidden');
			$('#consttalent').addClass('btn-danger');
			$('#housetab').addClass('btn-danger');
			housetalent += 1;
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

document.getElementById("Mine").onclick = function() {
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

document.getElementById("Burn").onclick = function() {
	burn(1);   
};

document.getElementById("save").onclick = function() {
	showsave();
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

document.getElementById("craftingbutton").onclick = function() {
	if (talentpoints > 4) {
		talentpoints -= 5;
		if ($('#craftingtalent').hasClass('hidden')) {
			$('#craftingtalent').removeClass('hidden');
			$('#craftab').removeClass('hidden');
			$('#craftab').addClass('btn-danger');
			$('#researchtalent').addClass('btn-danger');
			$('#crafttalentbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints.toFixed(0);
			craftingtalent += 1;
		}
	}
}

document.getElementById("logbutton").onclick = function() {
	if (wood >= woodlogcost) {
		wood -= woodlogcost;
		logs += 1;
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	}
}

document.getElementById("log10").onclick = function() {
	if (wood >= woodlogcost * 10) {
		wood -= woodlogcost * 10;
		logs += 10;
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	}
}

document.getElementById("log25").onclick = function() {
	if (wood >= woodlogcost * 25) {
		wood -= woodlogcost * 25;
		logs += 25;
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	}
}

document.getElementById("log100").onclick = function() {
	if (wood >= woodlogcost * 100) {
		wood -= woodlogcost * 100;
		logs += 100;
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	}
}


document.getElementById("blockbutton").onclick = function() {
	if (stone >= stoneblockscost) {
		if (clay >= stoneblockccost) {
			stone -= stoneblockscost;
			clay -= stoneblockccost
			stoneblocks += 1;
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	}
}

document.getElementById("unlocklogbutton").onclick = function() {
	if (researchpoints > 999) {
		researchpoints -= 1000;
		if ($('#logspan').hasClass('hidden')) {
			$('#logspan').removeClass('hidden');
			$('#cabinspan').removeClass('hidden');
			$('#unlocklogdiv').addClass('hidden');
			logtalent += 1;
			$('#craftingtalent').addClass('btn-danger');
			$('#consttalent').addClass('btn-danger');
			$('#housetab').addClass('btn-danger');
		}
	}
}

document.getElementById("unlockblockbutton").onclick = function() {
	if (researchpoints > 3332) {
		researchpoints -= 3333;
		if ($('#blockspan').hasClass('hidden')) {
			$('#blockspan').removeClass('hidden');
			$('#unlockblockdiv').addClass('hidden');
			blocktalent += 1;
			$('#craftingtalent').addClass('btn-danger');
			$('#apartmentspan').removeClass('hidden');
			$('#consttalent').addClass('btn-danger');
			$('#housetab').addClass('btn-danger');
		}
	}
}

document.getElementById("upgradeshbutton").onclick = function() {
	if (researchpoints >= shrpcost) {
		researchpoints -= shrpcost;
		shlevel += 1;
		shrpcost = shrpcost * 1.75;
		woodmax += 250 * storehouses;
		stonemax += 200 * storehouses;
		coalmax += 50 * storehouses;
		claymax += 25 * storehouses;
		var tempvar = document.getElementById("upgradeshcost");
		tempvar.innerHTML = prettify(shrpcost);
	}
}

document.getElementById("fieldirrigationbutton").onclick = function() {
	if (researchpoints >= fieldrpcost) {
		researchpoints -= fieldrpcost;
		fieldlevel += 1;
		fieldrpcost = fieldrpcost * 1.1;
		waterrate += .125 * fields;
		var tempvar = document.getElementById("fieldirrigationcost");
		tempvar.innerHTML = prettify(fieldrpcost);
	}
}

document.getElementById("unlockfarmerbutton").onclick = function() {
	if (researchpoints > 99) {
		researchpoints -= 100;
		if ($('#farmerdiv').hasClass('hidden')) {
			$('#farmerdiv').removeClass('hidden');
			$('#unlockfarmerdiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints.toFixed(0);
			farmertalent += 1;
		}
	}
}

document.getElementById("unlockloggerbutton").onclick = function() {
	if (researchpoints > 249) {
		researchpoints -= 250;
		if ($('#loggerdiv').hasClass('hidden')) {
			$('#loggerdiv').removeClass('hidden');
			$('#unlockloggerdiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints.toFixed(0);
			loggertalent += 1;
			$('#consttalent').addClass('btn-danger');
			$('#prodtab').addClass('btn-danger');
			$('#sawmillspan').removeClass('hidden');
		}
	}
}

document.getElementById("unlockminerbutton").onclick = function() {
	if (researchpoints > 499) {
		researchpoints -= 500;
		if ($('#minerdiv').hasClass('hidden')) {
			$('#minerdiv').removeClass('hidden');
			$('#unlockminerdiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints.toFixed(0);
			minertalent += 1;
			$('#consttalent').addClass('btn-danger');
			$('#housetab').addClass('btn-danger');
			$('#rhspan').removeClass('hidden');
		}
	}
}

document.getElementById("unlockwarriorbutton").onclick = function() {
	if (researchpoints > 1749) {
		researchpoints -= 1750;
		if ($('#warriordiv').hasClass('hidden')) {
			$('#warriordiv').removeClass('hidden');
			$('#unlockwarriordiv').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints.toFixed(0);
			warriortalent += 1;
		}
	}
}

document.getElementById("removefarmerbutton").onclick = function() {
	if (farmers > 0) {
		farmers -= 1;
		freeworkers += 1;
		updateworkers();
		if ((farmers + loggers) < 15) {
		$('#forage10').prop('disabled', true);
		}
		if ((farmers + loggers) < 35) {
		$('#forage25').prop('disabled', true);
		}
		if ((farmers + loggers) < 125) {
		$('#forage100').prop('disabled', true);
		}
	}
}

document.getElementById("addfarmerbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		farmers += 1;
		updateworkers();
		if ((farmers + loggers) >= 15) {
		$('#forage10').prop('disabled', false);
		}
		if ((farmers + loggers) >= 35) {
		$('#forage25').prop('disabled', false);
		}
		if ((farmers + loggers) >= 125) {
		$('#forage100').prop('disabled', false);
		}
	}
}

document.getElementById("removeloggerbutton").onclick = function() {
	if (loggers > 0) {
		loggers -= 1;
		freeworkers += 1;
		updateworkers();
		if ((farmers + loggers) < 15) {
		$('#forage10').prop('disabled', true);
		}
		if ((farmers + loggers) < 35) {
		$('#forage25').prop('disabled', true);
		}
		if ((farmers + loggers) < 125) {
		$('#forage100').prop('disabled', true);
		}
	}
}

document.getElementById("addloggerbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		loggers += 1;
		updateworkers();
		if ((farmers + loggers) >= 15) {
		$('#forage10').prop('disabled', false);
		}
		if ((farmers + loggers) >= 35) {
		$('#forage25').prop('disabled', false);
		}
		if ((farmers + loggers) >= 125) {
		$('#forage100').prop('disabled', false);
		}
	}
}

document.getElementById("removeminerbutton").onclick = function() {
	if (miners > 0) {
		miners -= 1;
		freeworkers += 1;
		updateworkers();
		if (miners < 10) {
		$('#mine10').prop('disabled', true);
		}
		if (miners < 25) {
		$('#mine25').prop('disabled', true);
		}
		if (miners < 100) {
		$('#mine100').prop('disabled', true);
		}
	}
}

document.getElementById("addminerbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		miners += 1;
		updateworkers();
		if (miners >= 10) {
		$('#mine10').prop('disabled', false);
		}
		if (miners >= 25) {
		$('#mine25').prop('disabled', false);
		}
		if (miners >= 100) {
		$('#mine100').prop('disabled', false);
		}
	}
}

document.getElementById("removeresearcherbutton").onclick = function() {
	if (researchers > 0) {
		researchers -= 1;
		freeworkers += 1;
		updateworkers();
	}
}

document.getElementById("addresearcherbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		researchers += 1;
		updateworkers();
		if ($('#researchtalent').hasClass('hidden')) {
		$('#researchtalent').removeClass('hidden');
		$('#researchtalent').addClass('btn-danger');
		$('#clastab').addClass('btn-danger');
		researchtalent += 1;
		$('#rpdiv').removeClass('hidden');
	}
	}
}

document.getElementById("removetraderbutton").onclick = function() {
	if (traders > 0) {
		traders -= 1;
		freeworkers += 1;
		updateworkers();
	}
}

document.getElementById("addtraderbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		traders += 1;
		updateworkers();
	}
}

document.getElementById("removewarriorbutton").onclick = function() {
	if (warriors > 0) {
		warriors -= 1;
		freeworkers += 1;
		updateworkers();
	}
}

document.getElementById("addwarriorbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		warriors += 1;
		updateworkers();
	}
}

document.getElementById("riverbutton").onclick = function() {
	if (talentpoints >= riverupgradecost) {
		talentpoints -= riverupgradecost;
		waterrate += riverupgradecost * 2.5;
		riverupgradecost += riverupgradecost;
		riverlevel += 1;
		var tempvar = document.getElementById("riverupgradecost");
		tempvar.innerHTML = riverupgradecost.toFixed(0);
		var tempvar3 = document.getElementById("riverproduction");
		tempvar3.innerHTML = ((riverupgradecost * 20)/(watertick/1000)).toFixed(0);
	}
};

document.getElementById("keeneyes").onclick = function() {
	if (talentpoints >= keeneyescost) {
		talentpoints -= keeneyescost;
		keeneyelevel += 1;
		keeneyescost = keeneyescost * 2;
		var tempvar = document.getElementById("keeneyecost");
		tempvar.innerHTML = keeneyescost.toFixed(0);
	}
}

document.getElementById("hutbutton").onclick = function() {
	if (wood >= hutcost) {
		wood -= hutcost;
		totalexp += hutcost;
		hutcost += (hutcost*1.25);
		huts += 1;
		popmax += hutlevel;
		var tempvar = document.getElementById("hutnum");
		tempvar.innerHTML = huts.toFixed(0);
		var tempvar2 = document.getElementById("hutcost");
		tempvar2.innerHTML = hutcost.toFixed(0);
		var tempvar3 = document.getElementById("hutexp");
		tempvar3.innerHTML = hutcost.toFixed(0);
		updateresources();		
		if ($('#workertalent').hasClass('hidden')) {
		if (popmax > 1) {
		$('#workertalent').removeClass('hidden');
		$('#workertalent').addClass('btn-danger');
		workertalent += 1;
		} 
	}
	}
};

document.getElementById("apartmentbutton").onclick = function() {
	if (stoneblocks >= aptcost) {
		stoneblocks -= aptcost;
		totalexp += 2000;
		aptcost = (aptcost*1.2);
		apartments += 1;
		popmax += aptlevel;
		updatebuildings();
		updateresources();
	}
}

document.getElementById("cabinbutton").onclick = function() {
	if (logs >= cabincost) {
		logs -= cabincost;
		totalexp += cabincost * 30;
		cabincost = (cabincost*1.33);
		cabins += 1;
		popmax += cabinlevel;
		updatebuildings();
		updateresources();		
	}
};

document.getElementById("rhbutton").onclick = function() {
	if (clay >= rhcost) {
		clay -= rhcost;
		totalexp += rhcost/2;
		rhcost = (rhcost + (Math.pow(rhcost, 0.85)));
		roundhouses += 1;
		popmax += rhlevel;
		updatebuildings();
		updateresources();			
	}
};

document.getElementById("fieldbutton").onclick = function() {
	if (currentfood >= fieldcost) {
		currentfood -= fieldcost;
		fields += 1;
		totalexp += (fields * 5);
		ofieldcost = fieldcost;
		fieldcost = (fieldcost * 1.44);
		foodrate += (.125 * (fieldlevel));
		waterrate += (.125 * (fieldlevel-1));
		updatebuildings();
		updateresources();	
		message("");
		message("Bought a Field for " + prettify(ofieldcost) + " Food and gained " + prettify((fields * 5)) + " EXP.");
		message("This brings you to a total of " + prettify(fields) + " Fields; Producing " + prettify(foodrate * 4) + " Food per second.");
	}
}

document.getElementById("unlockminebutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
		$('#minebuttondiv').removeClass('hidden');
		$('#minetalent').addClass('hidden');
		var tempvar = document.getElementById("talentpoints");
		tempvar.innerHTML = talentpoints.toFixed(0);
		minetalent += 1;
		$('#coaldiv').removeClass('hidden');
	}
}

document.getElementById("unlockburnbutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
		$('#burnbuttondiv').removeClass('hidden');
		$('#burntalent').addClass('hidden');
		var tempvar = document.getElementById("talentpoints");
		tempvar.innerHTML = talentpoints.toFixed(0);
		burntalent += 1;
		$('#coaldiv').removeClass('hidden');
		$('#steamdiv').removeClass('hidden');
	}
}

document.getElementById("granarybutton").onclick = function() {
	if (wood >= granarywoodcost && stone >= granarystonecost) {
		wood -= granarywoodcost;
		stone -= granarystonecost;
		granarywoodcost = (granarywoodcost * 1.85);
		granarystonecost = (granarystonecost * 1.65);
		granaries += 1;
		foodmax += 175;
		watermax += 500;
		totalexp += 150;
		var tempvar = document.getElementById("granarynum");
		tempvar.innerHTML = granaries.toFixed(0);
		var tempvar2 = document.getElementById("granarywoodcost");
		tempvar2.innerHTML = granarywoodcost.toFixed(0);
		var tempvar3 = document.getElementById("granarystonecost");
		tempvar3.innerHTML = granarystonecost.toFixed(0);
		updateresources();
		updatetotalexp();
	}
}

document.getElementById("shbutton").onclick = function() {
	if (wood >= shcost) {
		wood -= shcost;
		storehouses += 1;
		shcost = (shcost * 1.75);
		totalexp += 75 * shlevel;
		woodmax += 250 * shlevel;
		stonemax += 200 * shlevel;
		coalmax += 50 * shlevel;
		claymax += 25 * shlevel;
		var tempvar = document.getElementById("sthnum");
		tempvar.innerHTML = storehouses.toFixed(0);
		var tempvar6 = document.getElementById("shcost");
		tempvar6.innerHTML = shcost.toFixed(0);
		updateresources();		
		updatetotalexp();
		
		if (storehouses > 1) {
		$('#granaryspan').removeClass('hidden');
		granarytalent += 1;
		}
	}
	
}



document.getElementById("rtowerbutton").onclick = function() {
	if (stone >= rtowercost) {
		stone -= rtowercost;
		rtowers += 1;
		rtowercost = (rtowercost * 1.55);
		totalexp += 25;
		researcherrate = (researcherrate * 1.165);
		var tempvar = document.getElementById("rtowernum");
		tempvar.innerHTML = rtowers.toFixed(0);
		var tempvar2 = document.getElementById("rtowercost");
		tempvar2.innerHTML = rtowercost.toFixed(0);
		updateresources();		
		updatetotalexp();
	}
}

document.getElementById("sawmillbutton").onclick = function() {
	if (stone >= smscost) {
		if (clay >= smccost) {
			stone -= smscost;
			clay -= smccost;
			sawmills += 1;
			smscost = (smscost * 2);
			smccost = (smccost * 2);
			totalexp += (25*sawmills);
			var tempvar = document.getElementById("sawmillnum");
			tempvar.innerHTML = sawmills.toFixed(0);
			var tempvar2 = document.getElementById("sawmillstonecost");
			tempvar2.innerHTML = smscost.toFixed(0);
			var tempvar3 = document.getElementById("sawmillclaycost");
			tempvar3.innerHTML = smccost.toFixed(0);
			updateresources();		
			updatetotalexp();
		}
	}
}

function forage(m) {
	if (((water) - (5 * m)) >= 0) {
		var popbonus = (m * ((population - 1) * 0.05));
		totalexp += m + popbonus;
		water -= (m * 5);
		currentfood += ((m + popbonus) * (keeneyelevel));
		var fg = ((m + popbonus) * (keeneyelevel));
		if (getRandomInt(0,100) >= 75) {
			wood += (((m + popbonus) * 0.25) * (keeneyelevel));
			var wg = (((m + popbonus) * 0.25) * (keeneyelevel));
		};
		if (getRandomInt(0,100) >= 85) {
			stone += (((m + popbonus) * 0.10) * (keeneyelevel));
			var sg = (((m + popbonus) * 0.10) * (keeneyelevel));
		};
		if (getRandomInt(0,100) >= 90) {
			clay += (((m + popbonus) * 0.05) * (keeneyelevel));
			var cg = (((m + popbonus) * 0.05) * (keeneyelevel));
		};
		if (wood > woodmax) {wood = woodmax};
		if (currentfood > foodmax) {currentfood = foodmax};
		if (stone > stonemax) {stone = stonemax};
		if (clay > claymax) {clay = claymax};
		if (coal > coalmax) {coal = coalmax};
		updateresources();
		updatetotalexp();
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
		}
	}	
}

function mine(m) {
	if (((water) - (25 * m)) >= 0 && ((currentfood) - (10 * m)) >= 0 ) {
		var popbonus = (m * ((population - 1) * 0.05));
		stone += m + popbonus;
		totalexp += m + popbonus;
		water -= (m * 25);
		currentfood -= (m * 10);
		if (getRandomInt(0,100) >= 50) { clay += ((m + popbonus) * 0.03125) };
		if (getRandomInt(0,100) >= 90) { coal += ((m + popbonus) * 0.05) };
		if (stone > stonemax) {stone = stonemax};
		if (clay > claymax) {clay = claymax};
		if (coal > coalmax) {coal = coalmax};
		updateresources();
		updatetotalexp();
	}	
}

function burn(m) {
	var popbonus = (m * ((population - 1) * 0.025));
	if (document.getElementById('burnwood').checked) {
		if (wood >= (m * 10)) {
			wood -= (m * 10);
			coal += m
			if (coal >= coalmax) {
				coal = coalmax;
			}
			totalexp += (m * 5) + popbonus;
			updatetotalexp();
			updateresources();
		}
	}
	if (document.getElementById('burncoal').checked) {
		if (water >= (m * 500)) {
			if (coal >= (m)) {
				water -= (m * 500);
				coal -= m;
				steam += 50;
				totalexp += (m * 17.5) + popbonus;
				updatetotalexp();
				updateresources();
			}
		}
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
