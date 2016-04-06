function updatefarmer() {
  clearInterval(farmerinterval);
  farmerinterval = setInterval(function() {
	currentfood += ((farmerrate * (farmers * farmerlevel)) + (fieldrate));
	if (currentfood >= foodmax) {
		currentfood = foodmax - 0.001;
	}
	var researcherconsume = (4*(((foodmax * .001) * researchers) * Math.max(1,researcherlevel/3)));
	var loggerconsume = (4*(((foodmax * .002) * loggers)));
	var minerconsume = (4*((foodmax * .0022) * miners));
	var warriorconsume = (4*((foodmax * .0033) * warriors));
	var tempvar = document.getElementById("currentfood");
	tempvar.innerHTML = prettify(currentfood);
	var tempvar2 = document.getElementById("foodps");
	var tempvar3 = ((farmers * farmerlevel) * (farmerrate*4)) + (fieldrate*4) - researcherconsume - loggerconsume - minerconsume - warriorconsume; 
	tempvar2.innerHTML = tempvar3.toFixed(2);
	
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
		if (currentfood >= (foodmax*.15)) {
			wood += (loggerrate * (loggers * loggerlevel)) * (1 + (sawmills * 0.10));
			var tempvar2 = document.getElementById("woodps");
			var tempvar3 = ((loggers * loggerlevel) * (loggerrate*4)) * (1 + (sawmills * 0.10)); 
			tempvar2.innerHTML = prettify(tempvar3);
		}
		if (currentfood < (foodmax*.15)) {
			var tempvar2 = document.getElementById("woodps");
			tempvar2.innerHTML = 0;
		}
		currentfood -= ((foodmax * .002) * loggers);
	}
	if (loggers < 1) {
			var tempvar2 = document.getElementById("woodps");
			tempvar2.innerHTML = 0;
		}
	if (wood > woodmax) {
		wood = woodmax;
	}
	}, workertick);
}

function updatewarrior() {
  clearInterval(warriorinterval);
  warriorinterval = setInterval(function() {
	if (warriors > 0) {
		if (currentfood >= (foodmax/2)) {
			totalexp += (warriorrate * warriors) * (warriorlevel);
			var tempvar2 = document.getElementById("expps");
			var tempvar3 = ((warriorrate * 4) * warriors) * (warriorlevel); 
			tempvar2.innerHTML = prettify(tempvar3);
			
		}
		currentfood -= ((foodmax * .0033) * warriors);
	}
	updatetotalexp();
	}, workertick);
}

function updateminer() {
  clearInterval(minerinterval);
  minerinterval = setInterval(function() {
	if (miners > 0) {
		if (currentfood >= (foodmax*.10)) {
			stone += (minerrate * miners);
			clay += ((minerrate / 4) * miners);
			var tempvar2 = document.getElementById("stoneps");
			var tempvar3 = (miners * (minerrate*4)); 
			tempvar2.innerHTML = prettify(tempvar3);
			
			var tempvar4 = document.getElementById("clayps");
			var tempvar5 = (miners * ((minerrate/5)*4)); 
			tempvar4.innerHTML = prettify(tempvar5);
		}
		if (currentfood < (foodmax*.10)) {
			var tempvar2 = document.getElementById("stoneps");
			var tempvar4 = document.getElementById("clayps");
			tempvar2.innerHTML = 0;
			tempvar4.innerHTML = 0;
		}
		currentfood -= ((foodmax * .0022) * miners);
	}
	if (miners < 1) {
		var tempvar2 = document.getElementById("stoneps");
		var tempvar4 = document.getElementById("clayps");
		tempvar2.innerHTML = 0;
		tempvar4.innerHTML = 0;
	}
	if (stone > stonemax) {
		stone = stonemax;
	}
	if (clay > claymax) {
		clay = claymax;
	}
	updateresources();
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
		if (currentfood >= (foodmax*.2)) {
			researchpoints += ((researcherrate * researchers) * researcherlevel);
			var tempvar = document.getElementById("rpps");
			tempvar.innerHTML = prettify((((researcherrate*researchers)*4)*researcherlevel));
		}
		if (currentfood < (foodmax * .2)) {
			var tempvar = document.getElementById("rpps");
			tempvar.innerHTML = 0;
		}
		currentfood -= (((foodmax * .001) * researchers) * Math.max(1,researcherlevel/3));
	}
	if (steam > 0) {
		steam -= 1;
	}
	
	var researcherrp = (researcherlevel * 1500) * (researcherlevel * 1.25);
	var farmerrp = (farmerlevel * 600) * (farmerlevel * 1.25);
	var loggerrp = (loggerlevel * 900) * (loggerlevel * 1.25);
	var minerrp = (minerlevel * 1200) * (minerlevel * 1.25);
	var warriorrp = (warriorlevel * 2500) * (warriorlevel * 1.25);
	
	var arrRPproj = ['#farmercost','#loggercost','#minercost','#warriorcost','#carpentrycost','#masonrycost','#upgradeshcost','#fieldirrigationcost','#RPupcost','#farmerupcost','#loggerupcost','#minerupcost','#explorerupcost'];
	var arrRPproj1 = ["farmercost","loggercost","minercost","warriorcost","carpentrycost","masonrycost","upgradeshcost","fieldirrigationcost","RPupcost","farmerupcost","loggerupcost","minerupcost","explorerupcost"];
	var arrRPprojC = [25,150,350,1750,1000,3333,shrpcost,fieldrpcost,researcherrp,farmerrp,loggerrp,minerrp,warriorrp];
	for (i = 0; i < arrRPproj.length; i++) {
		var tempvar = document.getElementById(arrRPproj1[i]);
			if (arrRPprojC[i] <= researchpoints) {
				$(arrRPproj[i]).removeClass('text-danger');
				$(arrRPproj[i]).addClass('text-success');
			}
	}
	for (i = 0; i < arrRPproj.length; i++) {
		var tempvar = document.getElementById(arrRPproj1[i]);
			if (arrRPprojC[i] > researchpoints) {
				$(arrRPproj[i]).removeClass('text-success');
				$(arrRPproj[i]).addClass('text-danger');
			}
	}
	}, workertick);
}
