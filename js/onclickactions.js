var currentfood = 150;
var foodmax = 1500;
var totalexp = 0;

document.getElementById("Forage").onclick = function() {
  forage(1);   
};

function forage(m) {
	if (((water) - (5 * m)) > 0) {
		currentfood += m;
		totalexp += m ;
		water -= (m * 5)
		if (currentfood > foodmax) {currentfood = foodmax};
	  	var tempvar = document.getElementById("currentfood");
	  	tempvar.innerHTML = currentfood.toFixed(2);
	  	$('#foodbar').width(((currentfood/foodmax)* 100) + '%');
	}	
}
