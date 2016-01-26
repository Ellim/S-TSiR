function updatefarmer() {
  clearInterval(farmerinterval);
  farmerinterval = setInterval(function() {
	if (farmers > 0) {
		currentfood += (farmerrate * farmers);
		water -= ((farmerrate/5) * farmers);
	}
	
	var tempvar = document.getElementById("currentfood");
	tempvar.innerHTML = currentfood.toFixed(2);
	var tempvar2 = document.getElementById("foodps");
	var tempvar3 = (farmers * (farmerrate*4)) + (foodrate*2); 
	tempvar2.innerHTML = tempvar3.toFixed(2) + '/sec';
	
	var tempvar4 = document.getElementById("waterps");
	var tempvar5 = ((waterrate/2) - (farmers * ((farmerrate*4)/5)));
	tempvar4.innerHTML = tempvar5.toFixed(2) + '/sec';
	
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}, workertick);
}

function updatelogger() {
  clearInterval(loggerinterval);
  loggerinterval = setInterval(function() {
	if (loggers > 0) {
		wood += (loggerrate * loggers);
		if (wood > woodmax) {
			wood = woodmax;
		}
	}
	
	var tempvar = document.getElementById("total_wood");
	tempvar.innerHTML = wood.toFixed(2);
	var tempvar2 = document.getElementById("woodps");
	var tempvar3 = (loggers * (loggerrate*4)); 
	tempvar2.innerHTML = tempvar3.toFixed(2) + '/sec';
	
	}, workertick);
}