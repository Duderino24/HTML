function grossIncome() {
	var rate = document.getElementById('rate').value;
	var hour = document.getElementById('hour').value;
	var income = document.getElementById('grossIncome');
	if (hour <= 40) {
		income.innerHTML = parseInt((rate * hour) * 52/12),10;
	} else if (hour > 40) {
		var overRate = rate + (0.2 * rate);
		income.innerHTML = parseInt((rate * 40) + ((hour - 40) * overRate) * 52/12),10;
	} 
}
function fToC() {
	var fahrenheit = document.getElementById('fahrenheit').value;
	var celsius = (fahrenheit - 32) * 5/9;
	if (celsius < 0) {
		document.getElementById('celsius').innerHTML = celsius + " degrees celsius, It's Freezing!";
	} else if (celsius > 30) {
		document.getElementById('celsius').innerHTML = celsius + " degrees celsius, It's too hot!";
	} else {
		document.getElementById('celsius').innerHTML = celsius + " degrees celsius";
	}
}
