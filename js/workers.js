function updatefarmer() {
  clearInterval(farmerinterval);
  farmerinterval = setInterval(function() {
	currentfood += ((farmerrate * farmers) + (foodrate));
	if (currentfood >= foodmax) {
		currentfood = foodmax - 0.001;
	}

	var tempvar = document.getElementById("currentfood");
	tempvar.innerHTML = prettify(currentfood);
	var tempvar2 = document.getElementById("foodps");
	var tempvar3 = (farmers * (farmerrate*4)) + (foodrate*4); 
	tempvar2.innerHTML = prettify(tempvar3) + '/sec';
	
	if (currentfood < 0) {
		currentfood = 0;
	}
	
	document.getElementById("foodbar").style.width = ((currentfood/foodmax)* 100) + '%';
	}, workertick);
}

function updatelogger() {
  clearInterval(loggerinterval);
  loggerinterval = setInterval(function() {
	if (loggers > 0) {
		wood += (loggerrate * loggers) * (1 + (sawmills * 0.10));
		if (wood > woodmax) {
			wood = woodmax;
		}
	}
	
	var tempvar = document.getElementById("total_wood");
	tempvar.innerHTML = wood.toFixed(2);
	var tempvar2 = document.getElementById("woodps");
	var tempvar3 = (loggers * (loggerrate*4)) * (1 + (sawmills * 0.10)); 
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
	
	var tempvar4 = document.getElementById("clayps");
	var tempvar5 = (miners * ((minerrate/5)*4)); 
	tempvar4.innerHTML = tempvar5.toFixed(2) + '/sec';
	
	}, workertick);
}

function updatetalents() {
	clearInterval(talentinterval);
	talentinterval = setInterval(function() {
		
			var arrTalents = ['#riverupgradecost','#minetalentcost','#burntalentcost','#crafttalentcost','#keeneyecost'];
			var arrTalents1 = ["riverupgradecost","minetalentcost","burntalentcost","crafttalentcost","keeneyecost"];
			for (i = 0; i < arrTalents.length; i++) {
				var tempvar = document.getElementById(arrTalents1[i]);
				if (tempvar.innerHTML <= talentpoints) {

					$(arrTalents[i]).removeClass('text-danger');
					$(arrTalents[i]).addClass('text-success');

				}
			}
			
			for (i = 0; i < arrTalents.length; i++) {
				var tempvar = document.getElementById(arrTalents1[i]);
				if (tempvar.innerHTML > talentpoints) {

					$(arrTalents[i]).removeClass('text-success');
					$(arrTalents[i]).addClass('text-danger');

				}
			}
			
			
	}, workertick);
}

function updateresearcher() {
  clearInterval(researcherinterval);
  researcherinterval = setInterval(function() {
	if (researchers > 0) {
		researchpoints += (researcherrate * researchers);
		
		var arrRPproj = ['#farmercost','#loggercost','#minercost','#warriorcost','#carpentrycost','#masonrycost'];
		var arrRPproj1 = ["farmercost","loggercost","minercost","warriorcost","carpentrycost","masonrycost"];

			for (i = 0; i < arrRPproj.length; i++) {
				var tempvar = document.getElementById(arrRPproj1[i]);

					if (tempvar.innerHTML <= researchpoints) {

						$(arrRPproj[i]).removeClass('text-danger');
						$(arrRPproj[i]).addClass('text-success');
					}

			}
			
			for (i = 0; i < arrRPproj.length; i++) {
				var tempvar = document.getElementById(arrRPproj1[i]);
				if (tempvar.innerHTML > researchpoints) {
					
					$(arrRPproj[i]).removeClass('text-success');
					$(arrRPproj[i]).addClass('text-danger');

				}
			}
	}
	if (steam > 0) {
		steam -= 1;
	}
	}, workertick);
}
