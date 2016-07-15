function newGame() {
	var returnValue = {
		global: {
			version: 0.1,
			start: new Date().getTime(),
			time: 0,
			achievementBonus: 0,
			workerTick: 250,
			saveTick: 300000,
		},
		
		stats: {
			currentLevel: 1,
			totalEXP: 0,
			EXPTNL: 25,
			talentPoints: 0,
			population: 0,
			populationMax: 0
		},
		
		resources: {
			water: {
				owned: 500,
				max: 1000,
				rate: -1
			},
			food: {
				owned: 14,
				max: 350,
				rate: -1
			},
			clay: {
				owned: 0,
				max: 25,
				rate: -1
			},
			charcoal: {
				owned: 0,
				max: 50,
				rate: -1
			},
			steam: {
				owned: 0,
				max: -1,
				rate: .25
			},
			wood: {
				owned: 0,
				max: 250,
				rate: -1
			},
			stone: {
				owned: 0,
				max: 300,
				rate: -1
			},
			logs: {
				owned: 0,
				max: -1,
				rate: 50
			},
			concrete: {
				owned:0,
				max: -1,
				rate: {
					stone: 100,
					water: 100
				}
			},
			bricks: {
				owned: 0,
				max: -1,
				rate: 25
			},
			researchPoints: {
				owned: 0,
				max: -1,
				rate: -1
			}
		},
		
		buildings: {
			river: {
				owned: 1,
				level: 0,
				rate: 2.5
			},
			fields: {
				owned: 0,
				level: 1,
				rate: {
					production: 0,
					price: 1
				}
			},
			huts: {
				owned: 0,
				level: 1,
				rate: 1
			},
			roundHouses: {
				owned: 0,
				level: 1,
				rate: 1
			},
			cabins: {
				owned: 0,
				level: 1,
				rate: 1
			},
			apartments: {
				owned: 0,
				level: 1,
				rate: 1
			},
			granaries: {
				owned: 0,
				level: 1,
				rate: 1
			},
			storeHouses: {
				owned: 0,
				level: 1,
				rate: 1
			},
			researchTowers: {
				owned: 0,
				level: 1,
				rate: 1
			},
			sawMills: {
				owned: 0,
				level: 1,
				rate: 1
			},
			aqueducts: {
				owned: 0,
				level: 1,
				rate: 1
			},
		},
		
		workers: {
			freeWorkers: {
				owned: 0,
				level: 1,
				rate: -1
			},
			researchers: {
				owned: 0,
				level: 1,
				rate: .0375
			},
			farmers: {
				owned: 0,
				level: 1,
				rate: 1.125
			},
			lumberJacks: {
				owned: 0,
				level: 1,
				rate: .125
			},
			miners: {
				owned: 0,
				level: 1,
				rate: .15
			},
			explorers: {
				owned: 0,
				level: 1,
				rate: 2.5
			},
			traders: {
				owned: 0,
				level: 1,
				rate: {
					buy: 1,
					sell: 1
				}
			}
		},
		talents: {
			researcherTalent: 0,
			farmerTalent: 0,
			loggerTalent: 0,
			mineTalent: 0,
			burnTalent: 0,
			minerTalent: 0,
			warriorTalent: 0,
			constructionTalent: 0,
			houseTalent: 0,
			workerTalent: 0,
			researchTalent: 0,
			craftingTalent: 0,
			logTalent: 0,
			traderTalent: 0,
			blockTalent: 0,
			granaryTalent: 0,
			aqueductTalent: 0,
			keenEyes: 1
		}
	};
return returnValue;
};

var game = newGame();
var workerInterval;
var saveInterval;

function save(exportThis) {
	var saveString = JSON.stringify(game);
	var saveGame = JSON.parse(saveString);
	saveString = LZString.compressToBase64(JSON.stringify(saveGame));
    if (exportThis) return saveString;
	try{
		localStorage.setItem("SurviveGameSave1",saveString);
		if (localStorage.getItem("SurviveGameSave1") == saveString){
			message("Game Saved!");
		}
		else {
			message("For some reason, your game is not saving. Make sure you export and back up your save!");
		}
	}
	catch(err){ 
		if(e.name == "NS_ERROR_FILE_CORRUPTED") {
        message("Sorry, it looks like your browser storage has been corrupted. Please clear your storage by going to Tools -> Clear Recent History -> Cookies and set time range to 'Everything'. This will remove the corrupted browser storage across all sites.");
		}
		else
		message("For some reason, your game is not saving. Make sure you export and back up your save!"); 
		}
}

function load(saveString) {
	var savegame;
    if (saveString) {
        savegame = JSON.parse(LZString.decompressFromBase64(document.getElementById("importBox").value.replace(/(\r\n|\n|\r|\s)/gm,"")));
		if (!savegame) {
			message("It looks like your import code isn't working properly.");
			return;
		}
    } else  {
		var unparsedSave;
		try {
			unparsedSave = localStorage.getItem("SurviveGameSave1");
		}
		catch (e) {
			message("Your browser is preventing Survive from accessing localStorage, and you will not be able to save or load your progress. <br/>Please check your browser settings to ensure that 3rd party cookies are not disabled, and that you're not using any addons that might interrupt storage!");
			return;
		}
        if (unparsedSave !== null) savegame = JSON.parse(LZString.decompressFromBase64(unparsedSave));
		else {
			return;
		}
    }
	if (typeof savegame === 'undefined' || savegame === null || typeof savegame.global === 'undefined') {
		return;
	}
	
	if (typeof savegame.global !== 'undefined') {
        for (var item in game.global) {
            if (item == "time" || item == "start") continue;
            if (typeof savegame.global[item] !== 'undefined') game.global[item] = savegame.global[item];
        }
    }
	
	if (typeof savegame.stats !== 'undefined') {
        for (var item in game.stats) {
            if (typeof savegame.stats[item] !== 'undefined') game.stats[item] = savegame.stats[item];
        }
    }
	
	if (typeof savegame.resources !== 'undefined') {
        for (var item in game.resources) {
            if (typeof savegame.resources[item] !== 'undefined') game.resources[item] = savegame.resources[item];
        }
    }
	
	if (typeof savegame.buildings !== 'undefined') {
        for (var item in game.buildings) {
            if (typeof savegame.buildings[item] !== 'undefined') game.buildings[item] = savegame.buildings[item];
        }
    }
	
	if (typeof savegame.workers !== 'undefined') {
        for (var item in game.workers) {
            if (typeof savegame.workers[item] !== 'undefined') game.workers[item] = savegame.workers[item];
        }
    }
	
	if (typeof savegame.talents !== 'undefined') {
        for (var item in game.talents) {
            if (typeof savegame.talents[item] !== 'undefined') game.talents[item] = savegame.talents[item];
        }
    }
	message("Game Loaded!");
}

function autoSave() {
	clearInterval(game.global.saveInterval);
		game.global.saveInterval = setInterval(function() {
			save();
		}, game.global.saveTick);
}
