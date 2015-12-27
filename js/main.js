
/*Survive:TSIR V. 0.0.14*/
/*The Github Update*/

//variables
var currentfood = 150; //Food will drain over time
var totalexp = 0; //EXP goes up with each forage
var truetotalexp = 0;
var exptnl = 10; //EXP to next level
var currentlevel = 1; //Level will go up with EXP gains
var wood = 10000; 
var stone = 1000;
var coal = 1000;
var berries = 1000;
var woodpersecond = 0; //wood gain per tick
var stonepersecond = 0; //stone **
var autoharvestcost = 1; //the cost of this should increase exponentially
var upgrade_speed = 0; //the level of the speed up upgrade
var click_rate = 1000; //ms between each autoclick
var foodrate = 5000; //ms between food decrease
var saverate = 300000;
var population = 1;
var interval_auto; 
var interval_autof;
var saveinterval;
var woodperclick = 1;
var stoneperclick = 0;
var burncost = 100;
var burnexp = 10;
var autoharvestexp = 0;
var woodcoalratiocost = 10;
var berryfindlevel = 5;
var coalrate = 1;
var hutwcost = 750;
var hutscost = 75;
var huts = 0;

//functions
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
  e8.innerHTML = (((6 - berryfindlevel)/6) * 100).toFixed(2) + '%';
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

function buy_with_wood(c, button) {
  if (wood < c) {
    button.className = 'btn btn-danger btn-lg btn-block';
    setTimeout(function() {
      var e = document.getElementsByClassName("btn-danger")[3];
      e.className = 'btn btn-info btn-lg btn-block';
    }, 1000);
    return false;
  }
  wood -= c;
  return true;
}

function buywithwood(c, mult) {
  var tc = (c * mult);
  if (wood <= tc) {
    return false;
  } else {wood -= tc;
  return true;
}}

function buywithcoal(c, mult) {
  var tc = (c * mult);
  if (coal <= tc) {
    return false;
  } else {coal -= tc;
  return true;
}}

function buy_with_stone(c, button) {
  if (stone < c) {
    button.className = 'btn btn-danger';
    setTimeout(function() {
      var e = document.getElementsByClassName("btn-danger")[3];
      e.className = 'btn btn-success';
    }, 1000);
    return false;
  }
  stone -= c;
  return true;
}

function buy_with_coal(c, button) {
  if (coal < c) {
    button.className = 'btn btn-danger';
    setTimeout(function() {
      var e = document.getElementsByClassName("btn-danger")[3];
      e.className = 'btn btn-success';
    }, 1000);
    return false;
  }
  coal -= c;
  return true;
}

function update_workers() {
  clearInterval(interval_auto);
  interval_auto = setInterval(function() {
    if (currentfood > 0) {
    wood += woodpersecond;
    stone += stonepersecond;
    update_total_resources();
    update_total_resources();  
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

function autosave() {
  clearInterval(saveinterval);
  saveinterval = setInterval(function() {
    savegame();
  }, saverate);
}

function savegame() {
  localStorage.setItem('currentfood', currentfood);
  localStorage.setItem('totalexp', totalexp);
  localStorage.setItem('truetotalexp', truetotalexp);
  localStorage.setItem('exptnl', exptnl);
  localStorage.setItem('currentlevel', currentlevel);
  localStorage.setItem('wood', wood);
  localStorage.setItem('stone', stone);
  localStorage.setItem('coal', coal);
  localStorage.setItem('berries', berries);
  localStorage.setItem('woodpersecond', woodpersecond);
  localStorage.setItem('stonepersecond', stonepersecond);
  localStorage.setItem('autoharvestcost', autoharvestcost);
  localStorage.setItem('upgrade_speed', upgrade_speed);
  localStorage.setItem('click_rate', click_rate);
  localStorage.setItem('foodrate', foodrate);
  localStorage.setItem('population', population);
  localStorage.setItem('woodperclick', woodperclick);
  localStorage.setItem('stoneperclick', stoneperclick);
  localStorage.setItem('burncost', burncost);
  localStorage.setItem('burnexp', burnexp);
  localStorage.setItem('autoharvestexp', autoharvestexp);
  localStorage.setItem('woodcoalratiocost', woodcoalratiocost);
  localStorage.setItem('berryfindlevel', berryfindlevel);
  localStorage.setItem('coalrate', coalrate);
  localStorage.setItem('hutwcost', hutwcost);
  localStorage.setItem('hutscost', hutscost);
  localStorage.setItem('huts', huts);
}

function foragestone(m) {
  var e = Math.round(currentlevel / 8);
  if (currentfood  > (0 + m)) {
    var rand = 1 + Math.floor(Math.random() * 6);
    if (rand > berryfindlevel) berries = berries + (1 * m);
    wood = wood + (currentlevel * m);
    stone = stone + (e * m);
    totalexp = totalexp + (1 * m);
    truetotalexp = truetotalexp + (1 * m);
    currentfood = currentfood - (1 * m);
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
  coal = coal + (1 * m);
  totalexp = totalexp + (burnexp * m);
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

function loadgame() {
  	if (localStorage.getItem('currentfood')) {
	currentfood = parseInt(localStorage.getItem('currentfood'));
}

	if (localStorage.getItem('totalexp')) {
	totalexp = parseInt(localStorage.getItem('totalexp'));
}

	if (localStorage.getItem('truetotalexp')) {
	truetotalexp = parseInt(localStorage.getItem('truetotalexp'));
}

	if (localStorage.getItem('exptnl')) {
	exptnl = parseInt(localStorage.getItem('exptnl'));
}

	if (localStorage.getItem('currentlevel')) {
	currentlevel = parseInt(localStorage.getItem('currentlevel'));
}

	if (localStorage.getItem('wood')) {
	wood = parseInt(localStorage.getItem('wood'));
}

	if (localStorage.getItem('stone')) {
	stone = parseInt(localStorage.getItem('stone'));
}

	if (localStorage.getItem('coal')) {
	coal = parseInt(localStorage.getItem('coal'));
}

	if (localStorage.getItem('berries')) {
	berries = parseInt(localStorage.getItem('berries'));
}

	if (localStorage.getItem('woodpersecond')) {
	woodpersecond = parseInt(localStorage.getItem('woodpersecond'));
}

	if (localStorage.getItem('stonepersecond')) {
	stonepersecond = parseInt(localStorage.getItem('stonepersecond'));
}

	if (localStorage.getItem('autoharvestcost')) {
	autoharvestcost = parseInt(localStorage.getItem('autoharvestcost'));
}

	if (localStorage.getItem('upgrade_speed')) {
	upgrade_speed = parseInt(localStorage.getItem('upgrade_speed'));
}

	if (localStorage.getItem('click_rate')) {
	click_rate = parseInt(localStorage.getItem('click_rate'));
}

	if (localStorage.getItem('foodrate')) {
	foodrate = parseInt(localStorage.getItem('foodrate'));
}

	if (localStorage.getItem('woodperclick')) {
	woodperclick = parseInt(localStorage.getItem('woodperclick'));
}

	if (localStorage.getItem('population')) {
	population = parseInt(localStorage.getItem('population'));
}

	if (localStorage.getItem('stoneperclick')) {
	stoneperclick = parseInt(localStorage.getItem('stoneperclick'));
}

	if (localStorage.getItem('burncost')) {
	burncost = parseInt(localStorage.getItem('burncost'));
}

	if (localStorage.getItem('burnexp')) {
	burnexp = parseInt(localStorage.getItem('burnexp'));
}

	if (localStorage.getItem('autoharvestexp')) {
	autoharvestexp = parseInt(localStorage.getItem('autoharvestexp'));
}

	if (localStorage.getItem('woodcoalratiocost')) {
	woodcoalratiocost = parseInt(localStorage.getItem('woodcoalratiocost'));
}

	if (localStorage.getItem('berryfindlevel')) {
	berryfindlevel = parseInt(localStorage.getItem('berryfindlevel'));
}
  if (localStorage.getItem('coalrate')) {
    coalrate = parseInt(localStorage.getItem('coalrate'));
}
  if (localStorage.getItem('hutwcost')) {
    hutwcost = parseInt(localStorage.getItem('hutwcost'));
}  
  if (localStorage.getItem('hutscost')) {
    hutscost = parseInt(localStorage.getItem('hutscost'));
}  
  if (localStorage.getItem('huts')) {
    huts = parseInt(localStorage.getItem('huts'));
}
  updatefood();
  autosave();
  update_total_resources();
  update_total_exp();
}

function showsave() {
  savegame();
  alert("The game has been saved. NOTE: The game will autosave every 5 minutes.")
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

document.getElementById("foodstart").onclick = function() {
  update_workers();
  updatefood();
  autosave();
  update_wood_per_second();
  updatestonepersecond();
};

document.getElementById("loadgame").onclick = function() {
  update_workers();
  loadgame();
  update_wood_per_second();
  updatestonepersecond();
};

document.getElementById("load").onclick = function() {
  update_workers();
  loadgame();
  update_wood_per_second();
  updatestonepersecond();
};

document.getElementById("huts").onclick = function() {
  if (wood >= hutwcost && stone >= hutscost) {
    wood -= hutwcost;
    stone -= hutscost;
    huts += 1;
    population += 2;
    hutwcost = hutwcost * 1.3;
    hutscost = hutscost * 1.5;
    totalexp += (huts * 25);
    update_total_resources();
    update_total_exp();
  }
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
  if (!buywithwood(burncost, 1)) return;
  burnwood(1);
  update_total_exp();
};

document.getElementById("burn10").onclick = function() {
  if (!buywithwood(burncost, 10)) return;
  burnwood(10);
  update_total_exp();
};

document.getElementById("burn25").onclick = function() {
  if (!buywithwood(burncost, 25)) return;
  burnwood(25);
  update_total_exp();
};

document.getElementById("burn100").onclick = function() {
  if (!buywithwood(burncost, 100)) return;
  burnwood(100);
  update_total_exp();
};


document.getElementById("woodcoalratio").onclick = function() {
  if (!buywithcoal(woodcoalratiocost, 1)) return;
  woodcoalratiocost = woodcoalratiocost + (woodcoalratiocost/2);
  burncost = (burncost*.9);
  update_total_resources();
  updateui();
}

document.getElementById("autoharvest").onclick = function() {
  if (!buy_with_stone(autoharvestcost, this)) return;
  woodpersecond++;
  autoharvestcost = Math.pow(2, woodpersecond); //new cost
  update_total_exp();
  update_total_resources();
  update_wood_per_second();
};

document.getElementById("harvestupgrade_speed").onclick = function() {
  var upgrade_cost = (Math.pow(3, upgrade_speed)) * 30;
  if (!buy_with_stone(upgrade_cost, this)) return;
  upgrade_speed++;
  click_rate = click_rate * .90;
  update_workers();
  update_total_exp();
  update_total_resources()
  update_wood_per_second();
};

document.getElementById("Cheat").onclick = function() {
  wood = wood + 50000;
  stone = stone + 50000;
  totalexp = totalexp + 50000;
  coal = coal + 50000;
}

document.getElementById("save").onclick = function() {
  savegame();
  showsave();
}
//start our autoclickers




