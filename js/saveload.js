var waterinterval;
var foodinterval;
var saveinterval;

var watertick = 2000;
var foodtick = 500;
var savetick = 300000;

var waterrate = 20;
var foodrate = 0;

var water = 250;
var watermax = 1000;
var currentfood = 25;
var foodmax = 350;
var coal = 0;
var coalmax = 50;
var clay = 0;
var claymax = 1000;
var mana = 0;
var steam = 0;
var wood = 0;
var woodmax = 250;
var stone = 0;
var stonemax = 200;

var currentlevel = 1;
var totalexp = 0;
var exptnl = 10;
var talentpoints = 0;

var fruittreecost = 25;
var fruittrees = 0;

var riverupgradecost = 1;
var riverlevel = 0;

var huts = 0;
var hutcost = 25;
var hutlevel = 2;

var roundhouses = 0;
var rhcost = 250;
var rhlevel = 5;

var cabins = 0;
var cabincost = 100;
var cabinlevel = 10;

var granaries = 0;
var granarywoodcost = 175;
var granarystonecost = 50;

var storehouses = 0;
var shcost = 150;
var shlevel = 1;

var population = 1;
var popmax = 1;

var minetalent = 0;
var burntalent = 0;

function savegame() {
	var save = {
	waterinterval: waterinterval,
	foodinterval: foodinterval,
	saveinterval: saveinterval,
	
	watertick: watertick,
	foodtick: foodtick,
	savetick: savetick,
	
	waterrate: waterrate,
	foodrate: foodrate,
	
	water: water,
	watermax: watermax,
	currentfood: currentfood,
	foodmax: foodmax,
	coal: coal,
	coalmax: coalmax,
	clay: clay,
	claymax: claymax,
	mana: mana,
	steam: steam,
	wood: wood,
	woodmax: woodmax,
	stone: stone,
	stonemax: stonemax,
	
	currentlevel: currentlevel,
	totalexp: totalexp,
	exptnl: exptnl,
	talentpoints: talentpoints,
	
	fruittreecost: fruittreecost,
	fruittrees: fruittrees,
	
	riverupgradecost: riverupgradecost,
	riverlevel: riverlevel,
	
	huts: huts,
	hutcost: hutcost,
	hutlevel: hutlevel,
	
	roundhouses: roundhouses,
	rhcost: rhcost,
	rhlevel: rhlevel,
	
	cabins: cabins,
	cabincost: cabincost,
	cabinlevel: cabinlevel,
	
	granaries: granaries,
	granarywoodcost: granarywoodcost,
	granarystonecost: granarystonecost,
	
	storehouses: storehouses,
	shcost: shcost,
	shlevel: shlevel,
	
	population: population,
	popmax: popmax,
	
	minetalent: minetalent,
	burntalent: burntalent
	
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function loadgame() {
	var savestring = JSON.parse(localStorage.getItem("save")); 
	
	if (typeof savestring.watertick !== "undefined") watertick = savestring.watertick;
	if (typeof savestring.foodtick !== "undefined") foodtick = savestring.foodtick;
	if (typeof savestring.savetick !== "undefined") savetick = savestring.savetick;
	
	if (typeof savestring.waterrate !== "undefined") waterrate = savestring.waterrate;
	if (typeof savestring.foodrate !== "undefined") foodrate = savestring.foodrate;
	
	if (typeof savestring.water !== "undefined") water = savestring.water;
	if (typeof savestring.watermax !== "undefined") watermax = savestring.watermax;
	if (typeof savestring.currentfood !== "undefined") currentfood = savestring.currentfood;
	if (typeof savestring.foodmax !== "undefined") foodmax = savestring.foodmax;
	if (typeof savestring.coal !== "undefined") coal = savestring.coal;
	if (typeof savestring.coalmax !== "undefined") coalmax = savestring.coalmax;
	if (typeof savestring.clay !== "undefined") clay = savestring.clay;
	if (typeof savestring.claymax !== "undefined") claymax = savestring.claymax;
	if (typeof savestring.mana !== "undefined") mana = savestring.mana;
	if (typeof savestring.steam !== "undefined") steam = savestring.steam;
	if (typeof savestring.wood !== "undefined") wood = savestring.wood;	
	if (typeof savestring.woodmax !== "undefined") woodmax = savestring.woodmax;	
	if (typeof savestring.stone !== "undefined") stone = savestring.stone;	
	if (typeof savestring.stonemax !== "undefined") stonemax = savestring.stonemax;	
	
	if (typeof savestring.currentlevel !== "undefined") currentlevel = savestring.currentlevel;
	if (typeof savestring.totalexp !== "undefined") totalexp = savestring.totalexp;
	if (typeof savestring.exptnl !== "undefined") exptnl = savestring.exptnl;
	if (typeof savestring.talentpoints !== "undefined") talentpoints = savestring.talentpoints;
	
	if (typeof savestring.fruittreecost !== "undefined") fruittreecost = savestring.fruittreecost;
	if (typeof savestring.fruittrees !== "undefined") fruittrees = savestring.fruittrees;
	
	if (typeof savestring.riverupgradecost !== "undefined") riverupgradecost = savestring.riverupgradecost;
	if (typeof savestring.riverlevel !== "undefined") riverlevel = savestring.riverlevel;
	
	if (typeof savestring.huts !== "undefined") huts = savestring.huts;
	if (typeof savestring.hutcost !== "undefined") hutcost = savestring.hutcost;
	if (typeof savestring.hutlevel !== "undefined") hutlevel = savestring.hutlevel;
	
	if (typeof savestring.roundhouses !== "undefined") roundhouses = savestring.roundhouses;
	if (typeof savestring.rhcost !== "undefined") rhcost = savestring.rhcost;
	if (typeof savestring.rhlevel !== "undefined") rhlevel = savestring.rhlevel;
	
	if (typeof savestring.cabins !== "undefined") cabins = savestring.cabins;
	if (typeof savestring.cabincost !== "undefined") cabincost = savestring.cabincost;
	if (typeof savestring.cabinlevel !== "undefined") cabinlevel = savestring.cabinlevel;
	
	if (typeof savestring.granaries !== "undefined") granaries = savestring.granaries;
	if (typeof savestring.granarywoodcost !== "undefined") granarywoodcost = savestring.granarywoodcost;
	if (typeof savestring.granarystonecost !== "undefined") granarystonecost = savestring.granarystonecost;
	
	if (typeof savestring.storehouses !== "undefined") storehouses = savestring.storehouses;
	if (typeof savestring.shcost !== "undefined") shcost = savestring.shcost;
	if (typeof savestring.shlevel !== "undefined") shlevel = savestring.shlevel;
	
	if (typeof savestring.population !== "undefined") population = savestring.population;
	if (typeof savestring.popmax !== "undefined") popmax = savestring.popmax;
	
	if (typeof savestring.minetalent !== "undefined") minetalent = savestring.minetalent;
	if (typeof savestring.burntalent !== "undefined") burntalent = savestring.burntalent;
}

function showsave() {
  savegame();
  alert("The game has been saved. NOTE: The game will autosave once every five minutes.")
}
