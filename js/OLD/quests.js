


function checkquestreq() {
			if (currentlevel >= 6 && questcomp == 0) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
			if (keeneyes == 1 && questcomp == 1) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
			if (currentlevel >= 10 && questcomp == 2) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
			if (currentlevel >= 15 && questcomp == 3) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
			if (currentlevel >= 16 && questcomp == 4) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
			if (berryroast >= 1 && questcomp == 5) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
			if (currentlevel >= 20 && questcomp == 6) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
			if (population >= 10 && questcomp == 7) {
			$('#questcomp').prop('disabled', false);
			$('#questcheckmark').removeClass('text-danger');
			$('#questcheckmark').addClass('text-success');
			return;
			}
	}
	
 
function questcomplete() {
	questcomp += 1;
	questnum += 1;
	$('#questcomp').prop('disabled', true);
	$('#questcheckmark').removeClass('text-success');
	$('#questcheckmark').addClass('text-danger');
}

document.getElementById("questcomp").onclick = function() {
	questcomplete();
	update_total_resources();
}
  