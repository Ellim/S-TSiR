function prettify(number, noSup) {
	var numberTmp = number;
	number = Math.round(number * 1000000) / 1000000;
	if (!isFinite(number)) return "<span class='icomoon icon-infinity'></span>";
	if (number >= 1000 && number < 10000) return Math.floor(number);
	if(number === 0)
	{
		return prettifySub(0);
	}
	var base = Math.floor(Math.log(number)/Math.log(1000));
	if (base <= 0) return prettifySub(number);	
	number /= Math.pow(1000, base);
	
	var suffices = [
		'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud',
		'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv',
		'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt'
	];
	var suffix;
	if (base <= suffices.length && base > 0)
	{
		suffix = suffices[base-1];
	}
	else
	{
		var exponent = parseFloat(numberTmp).toExponential(2);
		if (!noSup) exponent = exponent.replace('+','<sup>') + '</sup>';
		else exponent = exponent.replace('+', '');
		return exponent;
	}

	return prettifySub(number) + suffix;
}

function romanNumeral(number){
//This is only accurate up to 399, but that's more than plenty for this game. Probably not the cleanest converter ever, but I thought of it myself, it works, and I'm proud.
	var numeral = "";
	while (number >= 100){
		number -= 100;
		numeral += "C";
	}
	//77
	if (number >= 90){
		number -= 90;
		numeral += "XC";
	}
	if (number >= 50){
		number -= 50;
		numeral += "L";
	}
	if (number >= 40){
		number -= 40;
		numeral += "XL";
	}
	while (number >= 10){
		number -= 10;
		numeral += "X";
	}
	if (number >= 9){
		number -= 9;
		numeral += "IX";
	}
	if (number >= 5){
		number -= 5;
		numeral += "V";
	}
	if (number >= 4){
		number -= 4;
		numeral += "IV";
	}
	while (number >= 1){
		number -= 1;
		numeral += "I";
	}
	return numeral;
}

function prettifySub(number){
	number = parseFloat(number.toFixed(3));
	if (number >= 1000) number = 999;
	number = number.toString();
	var hasDecimal = number.split('.');
	if (typeof hasDecimal[1] === 'undefined' || hasDecimal[0].length >= 3) return number.substring(0, 3);
	return number.substring(0, 4);	
}

function nodeToArray(nodeList){
	for(var a=[], l=nodeList.length; l--; a[l]=nodeList[l]);
    return a;
}

function message(messageString) {
	var log = document.getElementById("eventlog");
	log.innerHTML += "<span class='logmessage'>" + messageString + "</span><br />";
	log.scrollTop = log.scrollHeight;
	trimMessages();
}

function trimMessages(){
	var log = document.getElementById("eventlog");
	var toChange = document.getElementsByClassName('logmessage');
	toChange = nodeToArray(toChange);
	var messageCount = toChange.length;
	if (messageCount > 999){
		for (var count = 0; count < (messageCount - 999); count++){
			log.removeChild(toChange[count]);
		}
	}
}