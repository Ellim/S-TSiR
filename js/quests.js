
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
