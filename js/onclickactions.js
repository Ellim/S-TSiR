
document.getElementById("Forage").onclick = function() {
	forage(1);   
};

document.getElementById("Mine").onclick = function() {
	mine(1);   
};

document.getElementById("Burn").onclick = function() {
	burn(1);   
};


document.getElementById("save").onclick = function() {
	showsave();
}

document.getElementById("fruittreebutton").onclick = function() {
	if (currentfood >= fruittreecost) {
		currentfood -= fruittreecost;
		fruittreecost = (fruittreecost * 1.15);
		fruittrees += 1;
		foodrate += 0.5;
		waterrate -= 5;
		var tempvar = document.getElementById("fruittreecost");
		tempvar.innerHTML = fruittreecost.toFixed(2);
		var tempvar2 = document.getElementById("maxfood");
		tempvar2.innerHTML = foodmax.toFixed(2);
		var tempvar3 = document.getElementById("fruittreenum");
		tempvar3.innerHTML = fruittrees.toFixed(0);
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}
};

document.getElementById("fruittreechop").onclick = function() {
	if (fruittrees >= 1) {
		fruittrees -= 1;
		foodrate -= 0.5;
		waterrate += 5;
		fruittreecost = (fruittreecost/1.15);
		wood += (fruittreecost/2.5);
		currentfood += (fruittreecost * 0.25);
		if (wood > woodmax) {
			wood = woodmax;
		}
		var tempvar = document.getElementById("fruittreecost");
		tempvar.innerHTML = fruittreecost.toFixed(2);
		var tempvar2 = document.getElementById("fruittreenum");
		tempvar2.innerHTML = fruittrees.toFixed(0);
		var tempvar3 = document.getElementById("total_wood");
		tempvar3.innerHTML = wood.toFixed(2);
		var tempvar4 = document.getElementById("maxfood");
		tempvar4.innerHTML = foodmax.toFixed(2);
		var tempvar5 = document.getElementById("currentfood");
		tempvar5.innerHTML = currentfood.toFixed(2);
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}
}

document.getElementById("riverbutton").onclick = function() {
	if (talentpoints >= riverupgradecost) {
		talentpoints -= riverupgradecost;
		waterrate += riverupgradecost * 20;
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
		var tempvar5 = document.getElementById("waterps");
		tempvar5.innerHTML = '+' + (waterrate/(watertick/1000)).toFixed(2) + '/sec';
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
		var tempvar4 = document.getElementById("popmax");
		tempvar4.innerHTML = popmax.toFixed(0);
		var tempvar5 = document.getElementById("total_wood");
		tempvar5.innerHTML = wood.toFixed(2);		
		if (population >= 10) {
		$('#forage10').prop('disabled', false);
		$('#mine10').prop('disabled', false);
		}
	}
};

document.getElementById("unlockminebutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
		$('#Mine').removeClass('hidden');
		$('#mine10').removeClass('hidden');
		$('#mine25').removeClass('hidden');
		$('#mine100').removeClass('hidden');
		$('#unlockminebutton').addClass('hidden');
		$('#minetalent').addClass('hidden');
		var tempvar = document.getElementById("talentpoints");
		tempvar.innerHTML = talentpoints;
		minetalent += 1;
	}
}

document.getElementById("unlockburnbutton").onclick = function() {
	if (talentpoints >= 5) {
		talentpoints -= 5;
		$('#Burn').removeClass('hidden');
		$('#burn10').removeClass('hidden');
		$('#burn25').removeClass('hidden');
		$('#burn100').removeClass('hidden'); 
		$('#burncheckboxes').removeClass('hidden'); 
		$('#unlockburnbutton').addClass('hidden');
		$('#burntalent').addClass('hidden');
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
		watermax += 100;
		totalexp += 150;
		var tempvar = document.getElementById("granarynum");
		tempvar.innerHTML = granaries;
		var tempvar2 = document.getElementById("granarywoodcost");
		tempvar2.innerHTML = granarywoodcost;
		var tempvar3 = document.getElementById("granarystonecost");
		tempvar3.innerHTML = granarystonecost;
		var tempvar4 = document.getElementById("maxfood");
		tempvar4.innerHTML = foodmax.toFixed(2);
		var tempvar5 = document.getElementById("maxwater");
		tempvar5.innerHTML = watermax.toFixed(2);
		updatetotalexp();
	}
}

document.getElementById("shbutton").onclick = function() {
	if (wood >= shcost) {
		wood -= shcost;
		storehouses += 1;
		shcost = (shcost * 1.05);
		totalexp += 15;
		woodmax += 250;
		stonemax += 200;
		coalmax += 50;
		claymax += 500;
		var tempvar = document.getElementById("woodmax");
		tempvar.innerHTML = woodmax.toFixed(2);
		var tempvar2 = document.getElementById("stonemax");
		tempvar2.innerHTML = stonemax.toFixed(2);
		var tempvar3 = document.getElementById("coalmax");
		tempvar3.innerHTML = coalmax.toFixed(2);
		var tempvar4 = document.getElementById("claymax");
		tempvar4.innerHTML = claymax.toFixed(2);
		var tempvar5 = document.getElementById("shnum");
		tempvar5 = storehouses;
		var tempvar6 = document.getElementById("shcost");
		tempvar6.innerHTML = shcost.toFixed(2);
		var tempvar7 = document.getElementById("total_wood");
		tempvar7.innerHTML = wood.toFixed(2);
		updatetotalexp();
	}
}

function forage(m) {
	if (((water) - (5 * m)) >= 0) {
		var popbonus = (m * ((population - 1) * 0.25));
		currentfood += m + popbonus;
		totalexp += m + popbonus;
		water -= (m * 5)
		if (currentfood > foodmax) {currentfood = foodmax};
		var tempvar = document.getElementById("currentfood");
		tempvar.innerHTML = currentfood.toFixed(2);
		var tempvar2 = document.getElementById("currentwater");
		tempvar2.innerHTML = water.toFixed(2);
		updatetotalexp();
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
		document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
	}	
}

function mine(m) {
	if (((water) - (25 * m)) >= 0) {
		var popbonus = (m * ((population - 1) * 0.25));
		stone += m + popbonus;
		totalexp += m + popbonus;
		water -= (m * 25)
		if (stone > stonemax) {stone = stonemax};
		var tempvar = document.getElementById("total_stone");
		tempvar.innerHTML = stone.toFixed(2);
		var tempvar2 = document.getElementById("currentwater");
		tempvar2.innerHTML = water.toFixed(2);
		updatetotalexp();
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
	}	
}

function burn(m) {
	var popbonus = (m * ((population - 1) * 0.25));
	if (document.getElementById('burnwood').checked) {
		if (wood >= (m * 10)) {
			wood -= (m * 10);
			coal += m + popbonus;
			if (coal >= coalmax) {
				coal = coalmax;
			}
			totalexp += (m * 5) + popbonus;
			document.getElementById("expbar").style.width = ((totalexp/exptnl)* 100) + '%';
			var tempvar = document.getElementById("total_wood");
			tempvar.innerHTML = wood.toFixed(2);
			var tempvar2 = document.getElementById("total_coal");
			tempvar2.innerHTML = coal.toFixed(2);
		}
	}
}

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
	if (currentlevel % 5 === 0) {
		talentpoints += 1;
	}
    
    } 
  var tempvar3 = document.getElementById("current_level");
  tempvar3.innerHTML = currentlevel.toFixed(0);
  var tempvar4 = document.getElementById("exptnl")
  tempvar4.innerHTML = exptnl.toFixed(0);
  var tempvar5 = document.getElementById("talentpoints")
  tempvar5.innerHTML = talentpoints.toFixed(0);
}
