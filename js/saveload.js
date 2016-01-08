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
var currentfood = 15;
var foodmax = 150;
var coal = 0;
var coalmax = 50;
var mud = 0;
var mudmax = 1000;
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
var roundhouses = 0;
var cabins = 0;


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
	mud: mud,
	mudmax: mudmax,
	mana: mana,
	steam: steam,
	wood: wood,
	woodmax: woodmax,
	stone: stone,
	stonemax: stonemax,
	
	currentlevel: currentlevel,
	totalexp: totalexp,
	exptnl: exptnl,
	
	fruittreecost: fruittreecost,
	fruittrees: fruittrees,
	riverupgradecost: riverupgradecost,
	riverlevel: riverlevel

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
	if (typeof savestring.mud !== "undefined") mud = savestring.mud;
	if (typeof savestring.mudmax !== "undefined") mudmax = savestring.mudmax;
	if (typeof savestring.mana !== "undefined") mana = savestring.mana;
	if (typeof savestring.steam !== "undefined") steam = savestring.steam;
	if (typeof savestring.wood !== "undefined") wood = savestring.wood;	
	if (typeof savestring.woodmax !== "undefined") woodmax = savestring.woodmax;	
	if (typeof savestring.stone !== "undefined") stone = savestring.stone;	
	if (typeof savestring.stonemax !== "undefined") stonemax = savestring.stonemax;	
	
	if (typeof savestring.currentlevel !== "undefined") currentlevel = savestring.currentlevel;
	if (typeof savestring.totalexp !== "undefined") totalexp = savestring.totalexp;
	if (typeof savestring.exptnl !== "undefined") exptnl = savestring.exptnl;
	
	if (typeof savestring.fruittreecost !== "undefined") fruittreecost = savestring.fruittreecost;
	if (typeof savestring.fruittrees !== "undefined") fruittrees = savestring.fruittrees;
	if (typeof savestring.riverupgradecost !== "undefined") riverupgradecost = savestring.riverupgradecost;
	if (typeof savestring.riverlevel !== "undefined") riverlevel = savestring.riverlevel;
}

function showsave() {
  savegame();
  alert("The game has been saved. NOTE: The game will autosave once every five minutes.")
}