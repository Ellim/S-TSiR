function updatefarmer() {
  clearInterval(farmerinterval);
  farmerinterval = setInterval(function() {
	if (farmers > 0) {
		currentfood += (farmerrate * farmers);
	}
	
	var tempvar = document.getElementById("currentfood");
	tempvar.innerHTML = currentfood.toFixed(2);
	var tempvar2 = document.getElementById("foodps");
	var tempvar3 = (farmers * (farmerrate*4)) + (foodrate*4); 
	tempvar2.innerHTML = tempvar3.toFixed(2) + '/sec';
	


	
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

function updateminer() {
  clearInterval(minerinterval);
  minerinterval = setInterval(function() {
	if (miners > 0) {
		stone += (minerrate * miners);
		clay += ((minerrate / 5) * miners);
		if (stone > stonemax) {
			stone = stonemax;
		}
		if (clay > claymax) {
			clay = claymax;
		}
	}
	updateresources();
	var tempvar2 = document.getElementById("stoneps");
	var tempvar3 = (miners * (minerrate*4)); 
	tempvar2.innerHTML = tempvar3.toFixed(2) + '/sec';
	
	}, workertick);
}

function updateresearcher() {
  clearInterval(researcherinterval);
  researcherinterval = setInterval(function() {
	if (researchers > 0) {
		researchpoints += (researcherrate * researchers);
	}
	
	var tempvar = document.getElementById("total_RP");
	tempvar.innerHTML = researchpoints.toFixed(0);

	}, workertick);
}
