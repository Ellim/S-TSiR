
document.getElementById("Forage").onclick = function() {
	forage(1);   
};

document.getElementById("fruittreebutton").onclick = function() {
	if (currentfood >= fruittreecost) {
		currentfood -= fruittreecost;
		fruittreecost += (2 * fruittreecost);
		foodrate += 0.5;
		waterrate -= 5;
		foodmax += 75;
		var tempvar = document.getElementById("fruittreecost");
		tempvar.innerHTML = fruittreecost.toFixed(2);
		var tempvar2 = document.getElementById("maxfood");
		tempvar2.innerHTML = foodmax.toFixed(2);
	}
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
		tempvar2.innerHTML = water.toFixed(2);
		var tempvar3 = document.getElementById("waterps");
		tempvar3.innerHTML = '+' + (waterrate/(watertick/1000)).toFixed(2) + '/sec';
		document.getElementById("waterbar").style.width = ((water/watermax) * 100) + '%';
		document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}	
}
