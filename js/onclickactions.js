var currentfood = 150;
var foodmax = 1500;
var totalexp = 0;

document.getElementById("Forage").onclick = function() {
  forage(1);   
};

function forage(m) {
	if (((water) - (5 * m)) >= 0) {
		currentfood += m;
		totalexp += m ;
		water -= (m * 5)
		if (currentfood > foodmax) {currentfood = foodmax};
		var tempvar = document.getElementById("currentfood");
		tempvar.innerHTML = currentfood.toFixed(2);
		var tempvar2 = document.getElementById("currentwater");
		tempvar2.innerHTML = water;
		var tempvar3 = document.getElementById("waterps");
		tempvar3.innerHTML = '+' + (waterrate/(watertick/1000)).toFixed(2) + '/sec';
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}	
}