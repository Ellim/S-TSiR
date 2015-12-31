
/*Survive:TSIR V. 0.0.16*/
/*The Quest Update*/

function foo () {
	var e = document.getElementById("testthing");
	e.innerHTML = questcomp;
}

function update_total_resources() {    
  var e = document.getElementById("total_wood");
  e.innerHTML = wood.toFixed(0);
  var e2 = document.getElementById("total_stone");
  e2.innerHTML = stone.toFixed(0);
  var e3 = document.getElementById("woodperclick");
  e3.innerHTML = currentlevel;
  var e4 = document.getElementById("stoneperclick");
  e4.innerHTML = Math.round(currentlevel / 10).toFixed(0);
  var e5 = document.getElementById("total_coal");
  e5.innerHTML = coal.toFixed(0);
  var e6 = document.getElementById("currentfood");
  e6.innerHTML = currentfood.toFixed(0);
  var e7 = document.getElementById("berries");
  e7.innerHTML = berries.toFixed(0);
  var e8 = document.getElementById("berrychance");
  if (keeneyes > 0) {
  e8.innerHTML = (((6 - berryfindlevel)/6) * 100).toFixed(2) + '%';
  } else {e8.innerHTML = 0 + '%';}
  $('#foodbar').width((currentfood/100) + '%');
  var e9 = document.getElementById("pop");
  e9.innerHTML = population.toFixed(0);
  var h = document.getElementById("hutnum");
  h.innerHTML = huts;
  var e10 = document.getElementById("huts");
  e10.innerHTML = hutwcost.toFixed(0) + ' Wood || ' + hutscost.toFixed(0) + ' Stone';
  var e11 = document.getElementById("autoharvest");
  e11.innerHTML = autoharvestcost + ' Stone';
  var e12 = document.getElementById("autoclicker_level");
  e12.innerHTML = 'lvl  ' + woodpersecond;
  var e13 = document.getElementById("harvestupgrade_speed");
  e13.innerHTML = ((Math.pow(3, upgrade_speed)) * 30) + ' Stone';
  var e14 = document.getElementById("speed_level");
  e14.innerHTML = 'lvl  ' + upgrade_speed;
  var e15 = document.getElementById("talentpoints");
  e15.innerHTML = talentpoints;
  var e16 = document.getElementById("quest1");
  e16.innerHTML = quests[questnum];
  var e17 = document.getElementById("questdesc");
  e17.innerHTML = questdescs[questnum];
  updatefoodpersecond();
  updateui();
}

function update_total_exp() {   
  var exppct = totalexp/exptnl;
  var e = document.getElementById("exptotal");
  e.innerHTML = totalexp;
  var e2 = document.getElementById("exptnl");
  e2.innerHTML = exptnl;
    if (totalexp > exptnl-1) {
    totalexp = totalexp - exptnl;
    exptnl = (exptnl * 1.15).toFixed(0);
    currentlevel = currentlevel +1;
		if (currentlevel >= 10 && researchhidden == 0) {
			$('#researchmenubutton').removeClass('hidden');
			researchhidden += 1;
		}
		if (currentlevel >= 20 && buildingshidden == 0) {
			$('#buildingmenubutton').removeClass('hidden');
			buildingshidden += 1;
		}
		if (currentlevel >= 15 && upgradehidden == 0) {
			$('#upgrademenubutton').removeClass('hidden');
			upgradehidden += 1;
		}
      talentpoints += 1;
    } 
  var e3 = document.getElementById("current_level");
  e3.innerHTML = currentlevel;
  var e4 = document.getElementById("exptnl")
  e4.innerHTML = exptnl;
  var e5 = document.getElementById("bar");
  e5.innerHTML = (exppct * 100).toFixed(0) + '%';
  $('#bar').width((exppct * 100) + '%');
}

function updateui() {
  var e = document.getElementById("Burn");
  e.innerHTML = 'Burn ' + burncost.toFixed(2) + ' Wood for ' + coalrate + ' Charcoal';
  var e2 = document.getElementById("woodcoalratio");
  e2.innerHTML = woodcoalratiocost.toFixed(2) + ' Charcoal';
}

function buy(cost, resource, mult, cost2, resource2) {
	if (typeof cost2 === 'undefined') { 
	cost2 = 0; 
	}
	if (typeof resource2 === 'undefined') {
	resource2 = 1; 
	}
	if (resource < cost * mult || resource2 < cost2 * mult) {
	return false;
	} else {
	return true;
}}

function update_workers() {
  clearInterval(interval_auto);
  interval_auto = setInterval(function() {
    if (currentfood > 0) {
    wood += woodpersecond;
    stone += stonepersecond;
    update_total_resources();
    update_total_resources();  
	checkquestreq();
  }}, click_rate);

}

function updatefood() {
  clearInterval(interval_autof);
  interval_autof = setInterval(function() {
    if (currentfood < 0) {
      currentfood = 0;
    }
    if (currentfood > 0) {
      var e = 1 + (population * .1)
    currentfood -= ((5 * e) * population);
    }
   update_total_resources();
  }, foodrate);
}



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function foragestone(m) {
  var e = Math.round(currentlevel / 8);
  if (currentfood  > m) {
    var rand = 1 + Math.floor(Math.random() * 6);
    var randint = getRandomInt(1, m);
    if (rand > berryfindlevel) {
      if (keeneyes > 0){
      berries += randint;
      }
    }
    var randw = getRandomInt(1, currentlevel);
    var rands = getRandomInt(0, e)
    wood = wood + (randw * m);
    stone = stone + (rands * m);
    totalexp = totalexp + randint;
    truetotalexp = truetotalexp + randint;
    currentfood = currentfood - m;
    update_total_exp();
    update_total_resources();
  }
}

function update_wood_per_second() {
  var e = document.getElementById("wps");
  var num = (1000 * woodpersecond)/click_rate;
  var n = num.toFixed(2);
  e.innerHTML = '+' + n + '/sec';
}

function updatestonepersecond() {
  var e = document.getElementById("sps");
  var num = (1000*stonepersecond)/click_rate;
  var n = num.toFixed(2);
  e.innerHTML = '+' + n + '/sec';
}

function updatefoodpersecond() {
  var e2 = 1 + (population * .1)
  var e = document.getElementById("fps");
  var num = ((5000*population/foodrate) * e2);
  var n = num.toFixed(2);
  e.innerHTML = '-' + n + '/sec';
}

function burnwood(m) {
  coal = coal + m;
  totalexp = totalexp + ((burnexp * m) * (population * .1));
  update_total_exp();
  update_total_resources();
}

function eatberries(m) {
  if (berries >= m) {
    berries -= m;
    currentfood += (10 * m);
    update_total_resources();
  }
}

function roastberries(m) {
  if (berries >= (m * 5) && coal >= m) {      
    berries -= (m * 5);
    coal -= m
    currentfood += (m * 100);
    update_total_resources();
  }
}



//click events

document.getElementById("roastedberries").onclick = function() {
  roastberries(1);
}

document.getElementById("roastb10").onclick = function() {
  roastberries(10);
}


document.getElementById("roastb25").onclick = function() {
  roastberries(25);
}

document.getElementById("roastb100").onclick = function() {
  roastberries(100);
}

document.getElementById("eatberries").onclick = function() {
  eatberries(1);
  }

document.getElementById("eatb10").onclick = function() {
  eatberries(10);
  }

document.getElementById("eatb25").onclick = function() {
  eatberries(25);
  }

document.getElementById("eatb100").onclick = function() {
  eatberries(100);
  }


  




document.getElementById("Forage").onclick = function() {
  foragestone(1);
  update_total_exp();
  
};

document.getElementById("forage10").onclick = function() {
  foragestone(10);
  update_total_exp();
};

document.getElementById("forage25").onclick = function() {
  foragestone(25);
  update_total_exp();
};

document.getElementById("forage100").onclick = function() {
  foragestone(100);
  update_total_exp();
};

document.getElementById("Burn").onclick = function() {
  if (!buy(burncost, wood, 1)) return;
  burnwood(1);
  wood -= burncost;
  update_total_exp();
};

document.getElementById("burn10").onclick = function() {
  if (!buy(burncost, wood, 10)) return;
  burnwood(10);
  wood -= burncost * 10;
  update_total_exp();
};

document.getElementById("burn25").onclick = function() {
  if (!buy(burncost, wood, 25)) return;
  burnwood(25);
  wood -= burncost * 25;
  update_total_exp();
};

document.getElementById("burn100").onclick = function() {
  if (!buy(burncost, wood, 100)) return;
  burnwood(100);
  wood -= burncost * 100;
  update_total_exp();
};


document.getElementById("woodcoalratio").onclick = function() {
  if (!buy(woodcoalratiocost, coal, 1)) return;
  coal -= woodcoalratiocost;
  woodcoalratiocost = woodcoalratiocost + (woodcoalratiocost/2);
  burncost = (burncost*.9);
  update_total_resources();
  updateui();
}

document.getElementById("autoharvest").onclick = function() {
  if (!buy(autoharvestcost, stone, 1)) return;
  stone -= autoharvestcost;
  woodpersecond += 1;
  autoharvestcost = Math.pow(2, woodpersecond);
  update_total_exp();
  update_total_resources();
  update_wood_per_second();
};

document.getElementById("harvestupgrade_speed").onclick = function() {
  var upgrade_cost = (Math.pow(3, upgrade_speed)) * 30;
  if (!buy(upgrade_cost, stone, 1)) return;
  stone -= upgrade_cost;
  upgrade_speed += 1;
  click_rate = click_rate * .90;
  update_workers();
  update_total_exp();
  update_total_resources()
  update_wood_per_second();
};

document.getElementById("huts").onclick = function() {
	if (!buy(hutwcost, wood, 1, hutscost, stone)) return;
    wood -= hutwcost;
    stone -= hutscost;
    huts += 1;
    population += 2;
    hutwcost = hutwcost * 1.3;
    hutscost = hutscost * 1.5;
    totalexp += (huts * 25);
    update_total_resources();
    update_total_exp();
  };


document.getElementById("Cheat").onclick = function() {
  wood = wood + 50000;
  stone = stone + 50000;
  totalexp = totalexp + 50000;
  coal = coal + 50000;
}




//start our autoclickers



