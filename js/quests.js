var quests = ["Aquire Talent Points","Unlock Keen Eyes","Reach Level 10","Research Cooking Talents","Aquire More Talent Points","Unlock Roasted Berries","Unlock Buildings","Increase Population to 10", "Unlock Carpentry"];
var questdescs = ["Performing actions such as Foraging or Burning Wood will award EXP.<br />Reach Level 6 and acquire 5 Talent Points.","In the Talents Menu open the Foraging Tree.<br />Spend your Talent Points to unlock 'Keen Eyes'.<br />This will allow you a chance to identify and gather edible berries while foraging.","Get to Level 10.<br />This will unlock the Research Menu.<br />Remember burning wood is a good source of early EXP.","Open the Research Menu.<br />Click the 'Next Project' button to initiate research.<br />Every time you click the button after it is initiated you will generate Research Points.<br /> Once enough RP is gained you will automatically complete the project and the next will be queued for you.","Reach Level 16 to acquire 10 additional Talent Points.","In the Talents Menu open the Cooking Tree.<br />Spend your Talent Points to unlock 'Roasted Berries'.<br />This will allow you to consume 5 Berries and a single unit of Charcoal to increase food at double the rate of eating them raw.","Unlock Buildings through Research.<br />(This will be added soon, for now it's just given at level 20.)","Gather enough raw materials to purchase 5 huts.<br />This will increase population to 11, allowing you to forage 10 times with a single click!"];


function checkquestreq() {
	switch(questnum) {
		case 0:
			if (currentlevel >= 6 && questcomp == 0) {
			questcomp += 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
		case 1:
			if (keeneyes >= 1 && questcomp == 0) {
			questcomp += 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
		case 2:
			if (currentlevel >= 10 && questcomp == 0) {
			questcomp += 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
		case 3:
			if (currentlevel >= 10 && questcomp == 0) {
			questcomp = 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
		case 4:
			if (currentlevel >= 16 && questcomp == 0) {
			questcomp += 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
		case 5:
			if (berryroast >= 1 && questcomp == 0) {
			questcomp += 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
		case 6:
			if (currentlevel >= 20 && questcomp == 0) {
			questcomp += 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
		case 7:
			if (population >= 10 && questcomp == 0) {
			questcomp += 1;
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			break;
		}
	}
	
}
 
function questcomplete() {
	questcomp = 0;
	questnum += 1;
	$('#questcomp').prop('disabled', true);
	$('#questcheckmark').removeClass('text-success');
	$('#questcheckmark').addClass('text-danger');
}
