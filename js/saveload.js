//variables
var currentfood = 250; //Food will drain over time
var totalexp = 0; //EXP goes up with each forage
var truetotalexp = 0;
var exptnl = 10; //EXP to next level
var currentlevel = 1; //Level will go up with EXP gains
var wood = 100; 
var stone = 10;
var coal = 1;
var berries = 10;
var woodpersecond = 0; //wood gain per tick
var stonepersecond = 0; //stone **
var autoharvestcost = 1; //the cost of this should increase exponentially
var upgrade_speed = 0; //the level of the speed up upgrade
var click_rate = 1000; //ms between each autoclick
var foodrate = 5000; //ms between food decrease
var saverate = 60000;
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
var keeneyes = 0;
var talentpoints = 0;
var berryroast = 0;
var questnum = 0;
var researchhidden = 0;
var tradehidden = 0;
var buildingshidden = 0;
var questcomp = 0;

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
  localStorage.setItem('keeneyes', keeneyes);
  localStorage.setItem('talentpoints', talentpoints);
  localStorage.setItem('berryroast', berryroast);
  localStorage.setItem('questnum', questnum);
  localStorage.setItem('researchhidden', researchhidden);
  localStorage.setItem('tradehidden', tradehidden);
  localStorage.setItem('questcomp', questcomp);
  localStorage.setItem('buildingshidden', buildingshidden);
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
  if (localStorage.getItem('keeneyes')) {
    keeneyes = parseInt(localStorage.getItem('keeneyes'));
}
  if (localStorage.getItem('talentpoints')) {
    talentpoints = parseInt(localStorage.getItem('talentpoints'));
}
  if (localStorage.getItem('berryroast')) {
    berryroast = parseInt(localStorage.getItem('berryroast'));
}
  if (localStorage.getItem('questnum')) {
    questnum = parseInt(localStorage.getItem('questnum'));
}
  if (localStorage.getItem('researchhidden')) {
    researchhidden = parseInt(localStorage.getItem('researchhidden'));
}
  if (localStorage.getItem('tradehidden')) {
    tradehidden = parseInt(localStorage.getItem('tradehidden'));
}
  if (localStorage.getItem('questcomp')) {
    questcomp = parseInt(localStorage.getItem('questcomp'));
}  
  if (localStorage.getItem('buildingshidden')) {
    buildingshidden = parseInt(localStorage.getItem('buildingshidden'));
}  
  
  updatefood();
  autosave();
  update_total_resources();
  update_total_exp();
}

function showsave() {
  savegame();
  alert("The game has been saved. NOTE: The game will autosave once a minute.")
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
    if (keeneyes > 0) {
    $('#cookingtalentsbutton').prop('disabled', false);
    $('#doublestoneforage').prop('disabled', false);
    $('#foragefooddown1').prop('disabled', false);
    $('#cookingmenubutton').removeClass('hidden');
    $('#addberryforage').removeClass('btn-success');
    $('#addberryforage').addClass('btn-info');
  }
  if (berryroast > 0) {
    $('#roastedberries').removeClass('hidden');
    $('#roastberriesmultibutton').removeClass('hidden');
    $('#unlockberryroast').removeClass('btn-danger');
    $('#unlockberryroast').addClass('btn-info');
  }
  if (researchhidden > 0) {
	$('#researchmenubutton').removeClass('hidden');
  }
    if (tradehidden > 0) {
	$('#trademenubutton').removeClass('hidden');
  }
    if (buildingshidden > 0) {
	$('#buildingmenubutton').removeClass('hidden');
  }
  
	if (questcomp > 0) {
	$('#questcomp').prop('disabled', false);
	$('#questcheckmark').removeClass('text-danger');
    $('#questcheckmark').addClass('text-success');
	}
};

document.getElementById("save").onclick = function() {
  savegame();
  showsave();
}
