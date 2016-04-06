var waterinterval;
var foodinterval;
var saveinterval;
var farmerinterval;
var loggerinterval;
var researcherinterval;
var minerinterval;
var talentinterval;
var warriorinterval;

var workertick = 250;
var watertick = 2000;
var foodtick = 500;
var savetick = 300000;

var waterrate = 2.5;
var fieldrate = 0;

var water = 500;
var watermax = 1000;
var currentfood = 0;
var foodmax = 350;
var coal = 0;
var coalmax = 50;
var clay = 0;
var claymax = 25;
var mana = 0;
var steam = 0;
var wood = 0;
var woodmax = 250;
var stone = 0;
var stonemax = 200;
var logs = 0;
var woodlogcost = 50;
var stoneblocks = 0;
var stoneblockscost = 100;
var bricks = 0;
var bricklevel = 1;

var researchmin = 100;

var currentlevel = 1;
var totalexp = 0;
var exptnl = 10;
var talentpoints = 0;
var researchpoints = 0;

var fields = 0;
var fieldlevel = 1;
var fieldrpcost = 550;

var riverupgradecost = 1;
var riverlevel = 0;

var keeneyescost = 2;
var keeneyelevel = 1;

var huts = 0;
var hutlevel = 2;

var roundhouses = 0;
var rhlevel = 5;

var cabins = 0;
var cabinlevel = 10;

var apartments = 0;
var aptlevel = 25;

var granaries = 0;
var granarywoodcost = 35;
var granarystonecost = 50;
var granarylevel = 1;

var storehouses = 0;
var shcost = 150;
var shlevel = 1;
var shrpcost = 1500;

var rtowers = 0;
var rtowercost = 100;

var sawmills = 0;
var smscost = 25;
var smccost = 1;

var population = 1;
var popmax = 1;
var freeworkers = 0;
var loggers = 0;
var miners = 0;
var researchers = 0;
var warriors = 0;
var farmers = 0;
var traders = 0;

var farmerrate = 1.125;
var farmerlevel = 1;
var loggerrate = 0.125;
var loggerlevel = 1;
var researcherrate = .0375;
var researcherlevel = 1;
var minerrate = 0.15;
var minerlevel = 1;
var warriorrate = 2.5;
var warriorlevel = 1;

var researchertalent = 0;
var farmertalent = 0;
var loggertalent = 0;
var minetalent = 0;
var burntalent = 0;
var minertalent = 0;
var warriortalent = 0;
var constructiontalent = 0;
var housetalent = 0;
var workertalent = 0;
var researchtalent = 0;
var craftingtalent = 0;
var logtalent = 0;
var tradertalent = 0;
var blocktalent = 0;
var granarytalent = 0;

var btc = 0;

function savegame() {
	var save = {
	waterinterval: waterinterval,
	foodinterval: foodinterval,
	saveinterval: saveinterval,
	farmerinterval: farmerinterval,
	loggerinterval: loggerinterval,
	researcherinterval: researcherinterval,
	minerinterval: minerinterval,
	talentinterval: talentinterval,
	warriorinterval: warriorinterval,
	
	workertick: workertick,
	watertick: watertick,
	foodtick: foodtick,
	savetick: savetick,
	
	waterrate: waterrate,
	fieldrate: fieldrate,
	
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
	logs: logs,
	woodlogcost: woodlogcost,
	stoneblocks: stoneblocks,
	stoneblockscost: stoneblockscost,
	bricks: bricks,
	bricklevel: bricklevel,
	
	researchmin: researchmin,
	
	currentlevel: currentlevel,
	totalexp: totalexp,
	exptnl: exptnl,
	talentpoints: talentpoints,
	researchpoints: researchpoints,
	
	fields: fields,
	fieldlevel: fieldlevel,
	fieldrpcost: fieldrpcost,
	
	riverupgradecost: riverupgradecost,
	riverlevel: riverlevel,
	
	keeneyelevel: keeneyelevel,
	keeneyescost: keeneyescost,
	
	huts: huts,
	hutlevel: hutlevel,
	
	roundhouses: roundhouses,
	rhlevel: rhlevel,
	
	cabins: cabins,
	cabinlevel: cabinlevel,
	
	apartments: apartments,
	aptlevel: aptlevel,
	
	granaries: granaries,
	granarywoodcost: granarywoodcost,
	granarystonecost: granarystonecost,
	granarylevel: granarylevel,
	
	storehouses: storehouses,
	shcost: shcost,
	shlevel: shlevel,
	shrpcost: shrpcost,
	
	rtowers: rtowers,
	rtowercost: rtowercost,

	sawmills: sawmills,
	smscost: smscost,
	smccost: smccost,
	
	population: population,
	popmax: popmax,
	freeworkers: freeworkers,
	loggers: loggers,
	miners: miners,
	researchers: researchers,
	warriors: warriors,
	farmers: farmers,
	traders: traders,
	
	farmerrate: farmerrate,
	farmerlevel: farmerlevel,
	loggerrate: loggerrate,
	loggerlevel: loggerlevel,
	researcherrate: researcherrate,
	researcherlevel: researcherlevel,
	minerrate: minerrate,
	minerlevel: minerlevel,
	warriorrate: warriorrate,
	warriorlevel: warriorlevel,
	
	researchertalent: researchertalent,
	farmertalent: farmertalent,
	loggertalent: loggertalent,
	minetalent: minetalent,
	burntalent: burntalent,
	minertalent: minertalent,
	warriortalent: warriortalent,
	constructiontalent: constructiontalent,
	housetalent: housetalent,
	workertalent: workertalent,
	researchtalent: researchtalent,
	craftingtalent: craftingtalent,
	logtalent: logtalent,
	tradertalent: tradertalent,
	blocktalent: blocktalent,
	granarytalent: granarytalent,
	
	btc: btc
	
	}
	localStorage.setItem("save",JSON.stringify(save));
}

function loadgame() {
	var savestring = JSON.parse(localStorage.getItem("save")); 
	
	if (typeof savestring.workertick !== "undefined") workertick = savestring.workertick;
	if (typeof savestring.watertick !== "undefined") watertick = savestring.watertick;
	if (typeof savestring.foodtick !== "undefined") foodtick = savestring.foodtick;
	if (typeof savestring.savetick !== "undefined") savetick = savestring.savetick;
	
	if (typeof savestring.waterrate !== "undefined") waterrate = savestring.waterrate;
	if (typeof savestring.fieldrate !== "undefined") fieldrate = savestring.fieldrate;
	
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
	if (typeof savestring.logs !== "undefined") logs = savestring.logs;	
	if (typeof savestring.woodlogcost !== "undefined") woodlogcost = savestring.woodlogcost;
	if (typeof savestring.stoneblocks !== "undefined") stoneblocks = savestring.stoneblocks;
	if (typeof savestring.stoneblockscost !== "undefined") stoneblockscost = savestring.stoneblockscost;
	if (typeof savestring.bricks !== "undefined") bricks = savestring.bricks;
	if (typeof savestring.bricklevel !== "undefined") bricklevel = savestring.bricklevel;
		
	if (typeof savestring.researchmin !== "undefined") researchmin = savestring.researchmin;
	
	if (typeof savestring.currentlevel !== "undefined") currentlevel = savestring.currentlevel;
	if (typeof savestring.totalexp !== "undefined") totalexp = savestring.totalexp;
	if (typeof savestring.exptnl !== "undefined") exptnl = savestring.exptnl;
	if (typeof savestring.talentpoints !== "undefined") talentpoints = savestring.talentpoints;
	if (typeof savestring.researchpoints !== "undefined") researchpoints = savestring.researchpoints;
	
	if (typeof savestring.fields !== "undefined") fields = savestring.fields;
	if (typeof savestring.fieldlevel !== "undefined") fieldlevel = savestring.fieldlevel;
	if (typeof savestring.fieldrpcost !== "undefined") fieldrpcost = savestring.fieldrpcost;
	
	if (typeof savestring.riverupgradecost !== "undefined") riverupgradecost = savestring.riverupgradecost;
	if (typeof savestring.riverlevel !== "undefined") riverlevel = savestring.riverlevel;
	
	if (typeof savestring.keeneyelevel !== "undefined") keeneyelevel = savestring.keeneyelevel;
	if (typeof savestring.keeneyescost !== "undefined") keeneyescost = savestring.keeneyescost;
	
	if (typeof savestring.huts !== "undefined") huts = savestring.huts;
	if (typeof savestring.hutlevel !== "undefined") hutlevel = savestring.hutlevel;
	
	if (typeof savestring.roundhouses !== "undefined") roundhouses = savestring.roundhouses;
	if (typeof savestring.rhlevel !== "undefined") rhlevel = savestring.rhlevel;
	
	if (typeof savestring.cabins !== "undefined") cabins = savestring.cabins;
	if (typeof savestring.cabinlevel !== "undefined") cabinlevel = savestring.cabinlevel;
	
	if (typeof savestring.apartments !== "undefined") apartments = savestring.apartments;
	if (typeof savestring.aptlevel !== "undefined") aptlevel = savestring.aptlevel;
	
	if (typeof savestring.granaries !== "undefined") granaries = savestring.granaries;
	if (typeof savestring.granarywoodcost !== "undefined") granarywoodcost = savestring.granarywoodcost;
	if (typeof savestring.granarystonecost !== "undefined") granarystonecost = savestring.granarystonecost;
	if (typeof savestring.granarylevel !== "undefined") granarylevel = savestring.granarylevel;
	
	if (typeof savestring.storehouses !== "undefined") storehouses = savestring.storehouses;
	if (typeof savestring.shcost !== "undefined") shcost = savestring.shcost;
	if (typeof savestring.shlevel !== "undefined") shlevel = savestring.shlevel;
	if (typeof savestring.shrpcost !== "undefined") shrpcost = savestring.shrpcost;
	
	if (typeof savestring.rtowers !== "undefined") rtowers = savestring.rtowers;
	if (typeof savestring.rtowercost !== "undefined") rtowercost = savestring.rtowercost;
	
	if (typeof savestring.sawmills !== "undefined") sawmills = savestring.sawmills;
	if (typeof savestring.smscost !== "undefined") smscost = savestring.smscost;
	if (typeof savestring.smccost !== "undefined") smccost = savestring.smccost;
	
	if (typeof savestring.population !== "undefined") population = savestring.population;
	if (typeof savestring.popmax !== "undefined") popmax = savestring.popmax;
	if (typeof savestring.freeworkers !== "undefined") freeworkers = savestring.freeworkers;
	if (typeof savestring.loggers !== "undefined") loggers = savestring.loggers;
	if (typeof savestring.miners !== "undefined") miners = savestring.miners;
	if (typeof savestring.researchers !== "undefined") researchers = savestring.researchers;
	if (typeof savestring.warriors !== "undefined") warriors = savestring.warriors;
	if (typeof savestring.farmers !== "undefined") farmers = savestring.farmers;
	if (typeof savestring.traders !== "undefined") traders = savestring.traders;
	
	if (typeof savestring.farmerrate !== "undefined") farmerrate = savestring.farmerrate;
	if (typeof savestring.farmerlevel !== "undefined") farmerlevel = savestring.farmerlevel;
	if (typeof savestring.loggerrate !== "undefined") loggerrate = savestring.loggerrate;
	if (typeof savestring.loggerlevel !== "undefined") loggerlevel = savestring.loggerlevel;
	if (typeof savestring.researcherrate !== "undefined") researcherrate = savestring.researcherrate;
	if (typeof savestring.researcherlevel !== "undefined") researcherlevel = savestring.researcherlevel;
	if (typeof savestring.minerrate !== "undefined") minerrate = savestring.minerrate;
	if (typeof savestring.minerlevel !== "undefined") minerlevel = savestring.minerlevel;
	if (typeof savestring.warriorrate !== "undefined") warriorrate = savestring.warriorrate;
	if (typeof savestring.warriorlevel !== "undefined") warriorlevel = savestring.warriorlevel;
	
	if (typeof savestring.researchertalent !== "undefined") researchertalent = savestring.researchertalent;
	if (typeof savestring.farmertalent !== "undefined") farmertalent = savestring.farmertalent;
	if (typeof savestring.loggertalent !== "undefined") loggertalent = savestring.loggertalent;
	if (typeof savestring.minetalent !== "undefined") minetalent = savestring.minetalent;
	if (typeof savestring.burntalent !== "undefined") burntalent = savestring.burntalent;
	if (typeof savestring.minertalent !== "undefined") minertalent = savestring.minertalent;
	if (typeof savestring.warriortalent !== "undefined") warriortalent = savestring.warriortalent;
	if (typeof savestring.constructiontalent !== "undefined") constructiontalent = savestring.constructiontalent;
	if (typeof savestring.housetalent !== "undefined") housetalent = savestring.housetalent;
	if (typeof savestring.workertalent !== "undefined") workertalent = savestring.workertalent;
	if (typeof savestring.researchtalent !== "undefined") researchtalent = savestring.researchtalent;
	if (typeof savestring.craftingtalent !== "undefined") craftingtalent = savestring.craftingtalent;
	if (typeof savestring.logtalent !== "undefined") logtalent = savestring.logtalent;
	if (typeof savestring.tradertalent !== "undefined") tradertalent = savestring.tradertalent;
	if (typeof savestring.blocktalent !== "undefined") blocktalent = savestring.blocktalent;
	if (typeof savestring.granarytalent !== "undefined") granarytalent = savestring.granarytalent;
	
	if (typeof savestring.btc !== "undefined") btc = savestring.btc;
	
	fieldrate = ((.175 * (fields)) * fieldlevel);
}

function showsave() {
  savegame();
  alert("The game has been saved. NOTE: The game will autosave once every five minutes.");
  
}
