
document.getElementById("forage").onclick = function() {
	forage(1); 
	if ($('#consttalent').hasClass('hidden')) {
		if (currentfood >= 50) {
		$('#consttalent').removeClass('hidden');
		$('#consttalent').addClass('btn-danger');
		$('#prodtab').addClass('btn-danger');
		constructiontalent += 1;
		message("");
		message("You've gathered enough seeds from all the Food you should be able to grow something!");
		} 
	}
	if ($('#housetab').hasClass('hidden')) {
		if (wood >= 10) {
			$('#housetab').removeClass('hidden');
			$('#popspan').removeClass('hidden');
			$('#housetab').addClass('btn-danger');
			housetalent += 1;
			message("");
			message("Right on! You now have enough Wood to build a Hut.");
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

document.getElementById("unlockminebutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
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
		minetalent += 1;
		$('#coaldiv').removeClass('hidden');
		message("");
		message("Mining will take some Food and Water.");
		message("The head of Research pleads with you to gather some Stone!");
		message("He teaches you how to build a Research Tower; this will speed up future research.");
	}
}

document.getElementById("unlockburnbutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
		$('#burnspan').removeClass('hidden');
		$('#burntalent').addClass('hidden');
		var tempvar = document.getElementById("talentpoints");
		tempvar.innerHTML = talentpoints.toFixed(0);
		burntalent += 1;
		$('#coaldiv').removeClass('hidden');
		$('#steamdiv').removeClass('hidden');
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

document.getElementById("craftingbutton").onclick = function() {
	if (talentpoints > 4) {
		talentpoints -= 5;
		if ($('#craftingtalent').hasClass('hidden')) {
			$('#craftingtalent').removeClass('hidden');
			$('#craftab').removeClass('hidden');
			$('#burntalent').removeClass('hidden');
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
		var tempexp = (50 * (popmax/100));
		totalexp += tempexp;
		message("Crafted 1 Plank using " + prettify(woodlogcost) + " Wood, gained " + prettify(tempexp) + " EXP.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("log10").onclick = function() {
	if (wood >= woodlogcost * 10) {
		wood -= woodlogcost * 10;
		logs += 10;
		var tempexp = ((50 * (popmax/100)) * 10);
		totalexp += tempexp;
		message("Crafted 10 Planks using " + prettify(woodlogcost*10) + " Wood, gained " + prettify(tempexp) + " EXP.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("log25").onclick = function() {
	if (wood >= woodlogcost * 25) {
		wood -= woodlogcost * 25;
		logs += 25;
		var tempexp = ((50 * (popmax/100)) * 25);
		totalexp += tempexp;
		message("Crafted 25 Planks using " + prettify(woodlogcost*25) + " Wood, gained " + prettify(tempexp) + " EXP.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("log100").onclick = function() {
	if (wood >= woodlogcost * 100) {
		wood -= woodlogcost * 100;
		logs += 100;
		var tempexp = ((50 * (popmax/100)) * 100);
		totalexp += tempexp;
		message("Crafted 100 Planks using " + prettify(woodlogcost*100) + " Wood, gained " + prettify(tempexp) + " EXP.");
		if ($('#logdiv').hasClass('hidden')) {
		$('#logdiv').removeClass('hidden');
	}  
	updateresources();
	updatetotalexp();
	}
}


document.getElementById("blockbutton").onclick = function() {
	if (stone >= stoneblockscost) {
		if (clay >= stoneblockccost) {
			stone -= stoneblockscost;
			clay -= stoneblockccost
			stoneblocks += 1;
			var tempexp = (50 * (popmax/100));
			totalexp += tempexp;
			message("Crafted 1 Concrete using " + prettify(stoneblockscost) + " Stone and " + prettify(stoneblockccost) + " Clay, gained " + prettify(tempexp) + " EXP.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("sb10").onclick = function() {
	if (stone >= stoneblockscost*10) {
		if (clay >= stoneblockccost*10) {
			stone -= stoneblockscost*10;
			clay -= stoneblockccost*10
			stoneblocks += 10;
			var tempexp = ((50 * (popmax/100)) * 10);
			totalexp += tempexp;
			message("Crafted 10 Concrete using " + prettify(stoneblockscost*10) + " Stone and " + prettify(stoneblockccost*10) + " Clay, gained " + prettify(tempexp) + " EXP.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("sb25").onclick = function() {
	if (stone >= stoneblockscost*25) {
		if (clay >= stoneblockccost*25) {
			stone -= stoneblockscost*25;
			clay -= stoneblockccost*25
			stoneblocks += 25;
			var tempexp = ((50 * (popmax/100)) * 25);
			totalexp += tempexp;
			message("Crafted 25 Concrete using " + prettify(stoneblockscost*25) + " Stone and " + prettify(stoneblockccost*25) + " Clay, gained " + prettify(tempexp) + " EXP.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
	}
}

document.getElementById("sb100").onclick = function() {
	if (stone >= stoneblockscost*100) {
		if (clay >= stoneblockccost*100) {
			stone -= stoneblockscost*100;
			clay -= stoneblockccost*100
			stoneblocks += 100;
			var tempexp = ((50 * (popmax/100)) * 100);
			totalexp += tempexp;
			message("Crafted 100 Concrete using " + prettify(stoneblockscost*100) + " Stone and " + prettify(stoneblockccost*100) + " Clay, gained " + prettify(tempexp) + " EXP.");
			if ($('#blockdiv').hasClass('hidden')) {
			$('#blockdiv').removeClass('hidden');
		}
	}  
	updateresources();
	updatetotalexp();
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
			message("You now know how to craft Planks! Check out the Crafting Tab.");
		}
	}
}

document.getElementById("upgradeRPbutton").onclick = function() {
	if (researchpoints > ((researcherlevel * 1500)*researcherlevel)) {
		researchpoints -= ((researcherlevel * 1500)*researcherlevel);
		researcherlevel += 1;
		var tempvar = document.getElementById("RPupcost");
		tempvar.innerHTML = prettify(((researcherlevel * 1500)*researcherlevel));
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
			message("You now know how to craft Concrete! Check out the Crafting Tab.");
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
		message("Storehouses now each hold " + prettify(250 * shlevel) + " Wood, " + prettify(200 * shlevel) + " Stone, " + prettify(50 * shlevel) + " Coal, " + prettify(25 * shlevel) + " Clay.");
	}
}

document.getElementById("fieldirrigationbutton").onclick = function() {
	if (researchpoints >= fieldrpcost) {
		researchpoints -= fieldrpcost;
		fieldlevel += 1;
		fieldrpcost = fieldrpcost * 1.1;
		waterrate += .125 * fields; 
		foodrate += .125 * fields;
		var tempvar = document.getElementById("fieldirrigationcost");
		tempvar.innerHTML = prettify(fieldrpcost);
		message("Fields now generate " + prettify(foodrate*4) + " Food and " + prettify((((fields * fieldlevel) * .125) * 4)) + " Water per second.");
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
			message("");
			message("Your Researchers have gathered all their knowledge of Farming into a great Codex.");
			message("You can now train Farmers to till your fields and increase Food production even more!");
			message("Each Field can hold one Farmer initially, the head of Research assures you he can improve this eventually.");
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
		if (currentfood >= 25) {
			if (farmers < ((fields) * fieldlevel)) {
				currentfood -= 25;
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
			if (farmers > ((fields) * fieldlevel)) {
				message("");
				message("There's no room for more Farmers!");
			}
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
		if (currentfood >= 75) {
			currentfood -= 75;
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
		if (currentfood >= 75) {
			currentfood -= 75;
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
		if (currentfood >= 25) {
			currentfood -= 25;
			freeworkers -= 1;
			researchers += 1;
			updateworkers();
			if ($('#researchtalent').hasClass('hidden')) {
			$('#researchtalent').removeClass('hidden');
			$('#researchtalent').addClass('btn-danger');
			$('#clastab').addClass('btn-danger');
			researchtalent += 1;
			$('#rpdiv').removeClass('hidden');
			message("");
			message("Researchers will eat up a small percentage of your food every second.");
			message("If Food gets too low they will stop working. (Not eating though!)");
			message("Try to get as much research as you can, there are many things to discover!");
			}
		}
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
		if (currentfood >= 125) {
			currentfood -= 125;
			freeworkers -= 1;
			warriors += 1;
			updateworkers();
		}
	}
}



document.getElementById("hutbutton").onclick = function() {
	if (wood >= hutcost) {
		wood -= hutcost;
		totalexp += hutcost;
		oHutCost = hutcost;
		hutcost += (hutcost*1.2);
		huts += 1;
		popmax += hutlevel;
		updatebuildings();
		updateresources();	
		message("");
		message("Built a Hut using " + prettify(oHutCost) + " Wood and gained " + prettify(oHutCost) + " EXP.");
		message("This brings you to a total of " + prettify(huts) + " Huts; Housing " + prettify(huts * hutlevel) + ".");
		if ($('#workertalent').hasClass('hidden')) {
		if (popmax > 1) {
		$('#workertalent').removeClass('hidden');
		$('#workertalent').addClass('btn-danger');
		workertalent += 1;
		}
		if (huts = 1) {
			message("");
			message("Great! Now you can sustain a few more people to help you out.");
			message("Don't worry, they will show up on their own.");
		}
	}
	}
};

document.getElementById("apartmentbutton").onclick = function() {
	if (stoneblocks >= aptcost) {
		stoneblocks -= aptcost;
		totalexp += (2000 * apartments);
		oAptCost = aptcost;
		aptcost = (aptcost*1.3);
		apartments += 1;
		popmax += aptlevel;
		updatebuildings();
		updateresources();
		message("");
		message("Built an Apartment Building using " + prettify(oAptCost) + " Concrete and gained " + prettify(2000 * (apartments - 1)) + " EXP.");
		message("This brings you to a total of " + prettify(apartments) + " Apartments; Housing " + prettify(apartments * aptlevel) + ".");
	}
}

document.getElementById("cabinbutton").onclick = function() {
	if (logs >= cabincost) {
		logs -= cabincost;
		totalexp += cabincost * 30;
		oCabinCost = cabincost;
		cabincost = (cabincost*1.44);
		cabins += 1;
		popmax += cabinlevel;
		updatebuildings();
		updateresources();
		message("");
		message("Built a Cabin using " + prettify(oCabinCost) + " Planks and gained " + prettify(oCabinCost * 30) + " EXP.");
		message("This brings you to a total of " + prettify(cabins) + " Cabins; Housing " + prettify(cabins * cabinlevel) + ".");		
	}
};

document.getElementById("rhbutton").onclick = function() {
	if (clay >= rhcost) {
		clay -= rhcost;
		totalexp += rhcost*2;
		oRhCost = rhcost;
		rhcost = (rhcost*1.33);
		roundhouses += 1;
		popmax += rhlevel;
		updatebuildings();
		updateresources();	
		message("");
		message("Built a Roundhouse using " + prettify(oRhCost) + " Clay and gained " + prettify(oRhCost * 2) + " EXP.");
		message("This brings you to a total of " + prettify(roundhouses) + " Roundhouses; Housing " + prettify(roundhouses * rhlevel) + ".");		
	}
};

document.getElementById("fieldbutton").onclick = function() {
	if (currentfood >= fieldcost) {
		currentfood -= fieldcost;
		fields += 1;
		totalexp += (fields * 5);
		ofieldcost = fieldcost;
		fieldcost = (fieldcost * 1.24);
		foodrate += (.125 * (fieldlevel));
		waterrate += (.125 * (fieldlevel-1));
		updatebuildings();
		updateresources();	
		message("");
		message("Tilled a Field at the expense of " + prettify(ofieldcost) + " Food and gained " + prettify((fields * 5)) + " EXP.");
		if (fieldlevel < 2) {
			message("This brings you to a total of " + prettify(fields) + " Fields; Producing " + prettify(foodrate * 4) + " Food per second.");
		}
		if (fieldlevel > 1) {
			message("This brings you to a total of " + prettify(fields) + " Fields; Producing " + prettify(foodrate * 4) + " Food and " + prettify((((fields * fieldlevel) * .125) * 4)) + " Water per second.");
		}
		if ($('#granaryspan').hasClass('hidden')) {
			if (fields > 5) {
				message("");
				message("Granary Unlocked!");
				$('#granaryspan').removeClass('hidden');
				$('#storetab').addClass('btn-danger');
				granarytalent += 1;
			}
		}
		if (fields < 2) {
			message("")
			message("Excellent! Now that you have Food and Water under control it's time to build a shelter.");
			message("Keep Foraging until you've gathered 10 Wood.")
			message("Don't forget to keep tilling fields when you can!")
		}
	}
}



document.getElementById("granarybutton").onclick = function() {
	if (wood >= granarywoodcost && stone >= granarystonecost) {
		wood -= granarywoodcost;
		stone -= granarystonecost;
		oGranaryWoodCost = granarywoodcost;
		oGranaryStoneCost = granarystonecost;
		granarywoodcost = (granarywoodcost * 1.65);
		granarystonecost = (granarystonecost * 1.45);
		granaries += 1;
		foodmax += 175;
		watermax += 500;
		totalexp += (150*granaries);
		updatebuildings();
		updateresources();
		updatetotalexp();
		message("");
		message("Built a Granary using " + prettify(oGranaryWoodCost) + " Wood and " + prettify(oGranaryStoneCost) + " Stone and gained " + prettify((granaries * 150)) + " EXP.");
		message("This brings you to a total of " + prettify(granaries) + " Granaries.");
	}
}

document.getElementById("shbutton").onclick = function() {
	if (wood >= shcost) {
		wood -= shcost;
		storehouses += 1;
		oShCost = shcost;
		shcost = (shcost * 1.55);
		totalexp += (75*storehouses) * shlevel;
		woodmax += 250 * shlevel;
		stonemax += 200 * shlevel;
		coalmax += 50 * shlevel;
		claymax += 25 * shlevel;
		updatebuildings();
		updateresources();	
		updatetotalexp();
		message("");
		message("Built a Storehouse using " + prettify(oShCost) + " Wood and gained " + prettify((75*storehouses) * shlevel) + " EXP.");
		message("This brings you to a total of " + prettify(storehouses) + " Storehouses.");
		message("Storehouses capacity is now " + prettify((250 * shlevel)*storehouses) + " Wood, " + prettify((200 * shlevel)*storehouses) + " Stone, " + prettify((50 * shlevel)*storehouses) + " Coal, " + prettify((25 * shlevel)*storehouses) + " Clay.");

	}
	
}



document.getElementById("rtowerbutton").onclick = function() {
	if (stone >= rtowercost) {
		stone -= rtowercost;
		rtowers += 1;
		oRTowerCost = rtowercost;
		rtowercost = (rtowercost * 1.45);
		totalexp += (25*rtowers);
		researcherrate = (researcherrate * 1.165);
		updatebuildings();
		updateresources();		
		updatetotalexp();
		message("");
		message("Built a Research Tower using " + prettify(oRTowerCost) + " Stone and gained " + prettify(25*rtowers) + " EXP.");
		message("This brings you to a total of " + prettify(rtowers) + " Research Towers.");
		message("Each Researcher now produces " + prettify((researcherrate*4)*researcherlevel) + " Research Points per second.")
	}
}

document.getElementById("sawmillbutton").onclick = function() {
	if (stone >= smscost) {
		if (clay >= smccost) {
			stone -= smscost;
			clay -= smccost;
			sawmills += 1;
			oSmSCost = smscost;
			oSmCCost = smccost;
			smscost = (smscost * 1.75);
			smccost = (smccost * 1.75);
			totalexp += (25*sawmills);
			updatebuildings();
			updateresources();		
			updatetotalexp();
			message("");
			message("Built a Sawmill using " + prettify(oSmSCost) + " Stone and " + prettify(oSmCCost) + " Clay and gained " + prettify((sawmills * 25)) + " EXP.");
			message("This brings you to a total of " + prettify(sawmills) + " Sawmills.");
			message("Each Lumberjack now produces " + prettify((loggerrate*4) * (1 + (sawmills * 0.10))) + " Wood per second.");
			
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
	if (((water) - (15 * m)) >= 0 && ((currentfood) - (5 * m)) >= 0 ) {
		var popbonus = (m * ((population - 1) * 0.05));
		stone += m + popbonus;
		totalexp += m + popbonus;
		water -= (m * 15);
		currentfood -= (m * 7.5);
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
	
	if ($('#burncoal').hasClass('active')) {
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
	if ($('#burnwater').hasClass('active')) {
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
