
document.getElementById("Forage").onclick = function() {
	forage(1); 
	
	if ($('#consttalent').hasClass('hidden')) {
		if (wood >= 10) {
		$('#consttalent').removeClass('hidden');
		$('#consttalent').addClass('btn-danger');
		constructiontalent += 1;
		} 
	}
	
};

document.getElementById("cnqcollapsebutton").onclick = function() {
	$("#cnq1").collapse('toggle');
	$("#cnqcollapsebutton").addClass("hidden");
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

//document.getElementById("Burn").onclick = function() {
//	burn(1);   
//};

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

document.getElementById("craftingbutton").onclick = function() {
	if (talentpoints > 4) {
		talentpoints -= 5;
		if ($('#craftingtalent').hasClass('hidden')) {
			$('#craftingtalent').removeClass('hidden');
			$('#craftingtalent').addClass('btn-danger');
			$('#crafttalentbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints;
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
			$('#unlocklogdiv').addClass('hidden');
			logtalent += 1;
			$('#craftingtalent').addClass('btn-danger');
			researchmin = 1500;
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
		}
	}
}

document.getElementById("unlockfarmerbutton").onclick = function() {
	if (researchpoints > 99) {
		researchpoints -= 100;
		if ($('#farmerdiv').hasClass('hidden')) {
			$('#farmerdiv').removeClass('hidden');
			$('#unlockfarmerbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints;
			farmertalent += 1;
			researchmin = 250;
		}
	}
}

document.getElementById("unlockloggerbutton").onclick = function() {
	if (researchpoints > 249) {
		researchpoints -= 250;
		if ($('#loggerdiv').hasClass('hidden')) {
			$('#loggerdiv').removeClass('hidden');
			$('#unlockloggerbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints;
			loggertalent += 1;
			researchmin = 500;
		}
	}
}

document.getElementById("unlockminerbutton").onclick = function() {
	if (researchpoints > 499) {
		researchpoints -= 500;
		if ($('#minerdiv').hasClass('hidden')) {
			$('#minerdiv').removeClass('hidden');
			$('#unlockminerbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints;
			minertalent += 1;
			researchmin = 750;
		}
	}
}

document.getElementById("unlockwarriorbutton").onclick = function() {
	if (researchpoints > 749) {
		researchpoints -= 750;
		if ($('#warriordiv').hasClass('hidden')) {
			$('#warriordiv').removeClass('hidden');
			$('#unlockwarriorbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints;
			warriortalent += 1;
			researchmin = 1000;
		}
	}
}

document.getElementById("unlocktraderbutton").onclick = function() {
	if (researchpoints > 1499) {
		researchpoints -= 1500;
		if ($('#traderdiv').hasClass('hidden')) {
			$('#traderdiv').removeClass('hidden');
			$('#unlocktraderbutton').addClass('hidden');
			var tempvar = document.getElementById("talentpoints");
			tempvar.innerHTML = talentpoints;
			tradertalent += 1;
			researchmin = 3333;
		}
	}
}

document.getElementById("removefarmerbutton").onclick = function() {
	if (farmers > 0) {
		farmers -= 1;
		freeworkers += 1;
		updateworkers();
		if (farmers < 10) {
		$('#forage10').prop('disabled', true);
		}
		if (farmers < 25) {
		$('#forage25').prop('disabled', true);
		}
		if (farmers < 100) {
		$('#forage100').prop('disabled', true);
		}
	}
}

document.getElementById("addfarmerbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		farmers += 1;
		updateworkers();
		if (farmers >= 10) {
		$('#forage10').prop('disabled', false);
		}
		if (farmers >= 25) {
		$('#forage25').prop('disabled', false);
		}
		if (farmers >= 100) {
		$('#forage100').prop('disabled', false);
		}
	}
}

document.getElementById("removeloggerbutton").onclick = function() {
	if (loggers > 0) {
		loggers -= 1;
		freeworkers += 1;
		updateworkers();
	}
}

document.getElementById("addloggerbutton").onclick = function() {
	if (freeworkers > 0) {
		freeworkers -= 1;
		loggers += 1;
		updateworkers();
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
		researchtalent += 1;
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
		var tempvar2 = document.getElementById("riverlevel");
		tempvar2.innerHTML = riverlevel;
		var tempvar3 = document.getElementById("riverproduction");
		tempvar3.innerHTML = ((riverupgradecost * 20)/(watertick/1000)).toFixed(2);
		var tempvar4 = document.getElementById("talentpoints");
		tempvar4.innerHTML = talentpoints;
	}
};

document.getElementById("hutbutton").onclick = function() {
	if (wood >= hutcost) {
		wood -= hutcost;
		totalexp += hutcost;
		hutcost += (hutcost*1.25);
		huts += 1;
		popmax += hutlevel;
		var tempvar = document.getElementById("hutnum");
		tempvar.innerHTML = huts;
		var tempvar2 = document.getElementById("hutcost");
		tempvar2.innerHTML = hutcost.toFixed(2);
		var tempvar3 = document.getElementById("hutexp");
		tempvar3.innerHTML = hutcost.toFixed(2);
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
		var tempvar = document.getElementById("rhnum");
		tempvar.innerHTML = roundhouses;
		var tempvar2 = document.getElementById("rhcost");
		tempvar2.innerHTML = rhcost.toFixed(2);
		var tempvar3 = document.getElementById("rhexp");
		tempvar3.innerHTML = (rhcost/2).toFixed(2);
		updateresources();		
	}
};

document.getElementById("unlockminebutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
		$('#minebuttondiv').removeClass('hidden');
		$('#unlockminebutton').addClass('hidden');
		var tempvar = document.getElementById("talentpoints");
		tempvar.innerHTML = talentpoints;
		minetalent += 1;
	}
}

document.getElementById("unlockburnbutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
		$('#burnbuttondiv').removeClass('hidden');
		$('#unlockburnbutton').addClass('hidden');
		var tempvar = document.getElementById("talentpoints");
		tempvar.innerHTML = talentpoints;
		burntalent += 1;
	}
}

document.getElementById("granarybutton").onclick = function() {
	if (wood >= granarywoodcost && stone >= granarystonecost) {
		wood -= granarywoodcost;
		stone -= granarystonecost;
		granarywoodcost = (granarywoodcost * 1.5);
		granarystonecost = (granarystonecost * 1.5);
		granaries += 1;
		foodmax += 175;
		watermax += 500;
		totalexp += 150;
		var tempvar = document.getElementById("granarynum");
		tempvar.innerHTML = granaries;
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
		shcost = (shcost * 1.05);
		totalexp += 75;
		woodmax += 250;
		stonemax += 200;
		coalmax += 50;
		claymax += 25;
		var tempvar = document.getElementById("sthnum");
		tempvar.innerHTML = storehouses;
		var tempvar6 = document.getElementById("shcost");
		tempvar6.innerHTML = shcost.toFixed(0);
		updateresources();		
		updatetotalexp();
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
		tempvar.innerHTML = rtowers;
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
			tempvar.innerHTML = sawmills;
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
		var popbonus = (m * ((population - 1) * 0.25));
		totalexp += m + popbonus;
		water -= (m * 5);
		currentfood += m + popbonus;
		if (getRandomInt(0,100) >= 75) { wood += ((m + popbonus) * 0.25) };
		if (getRandomInt(0,100) >= 85) { stone += ((m + popbonus) * 0.10) };
		if (getRandomInt(0,100) >= 90) { clay += ((m + popbonus) * 0.05) };
		if (getRandomInt(0,100) >= 99) { mana += ((m + popbonus) * 0.5) };
		if (wood > woodmax) {wood = woodmax};
		if (currentfood > foodmax) {currentfood = foodmax};
		updateresources();
		updatetotalexp();
	}	
}

function mine(m) {
	if (((water) - (25 * m)) >= 0) {
		var popbonus = (m * ((population - 1) * 0.25));
		stone += m + popbonus;
		totalexp += m + popbonus;
		water -= (m * 25)
		if (getRandomInt(0,100) >= 50) { clay += ((m + popbonus) * 0.25) };
		if (getRandomInt(0,100) >= 90) { coal += ((m + popbonus) * 0.10) };
		if (stone > stonemax) {stone = stonemax};
		if (clay > claymax) {clay = claymax};
		if (coal > coalmax) {coal = coalmax};
		updateresources();
		updatetotalexp();
	}	
}

function burn(m) {
	var popbonus = (m * ((population - 1) * 0.15));
	if (document.getElementById('burnwood').checked) {
		if (wood >= (m * 10)) {
			wood -= (m * 10);
			coal += m + popbonus;
			if (coal >= coalmax) {
				coal = coalmax;
			}
			totalexp += (m * 5) + popbonus;
			updatetotalexp();
			updateresources();
		}
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
