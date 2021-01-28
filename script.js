const countDate = new Date('jan 1, 2022 00:00:00').getTime();

function newYear() {
	const now = new Date().getTime();
	gap = countDate - now;

	let second = 1000;
	let minute = second * 60;
	let hour = minute * 60;
	let day = hour * 24;

	const d = Math.floor(gap / (day));
	const h = Math.floor((gap % (day)) / (hour));
	const m = Math.floor((gap % (hour)) / (minute));
	const s = Math.floor((gap % (minute)) / (second));

	document.getElementById('days').innerText = d;
	document.getElementById('hours').innerText = h;
	document.getElementById('minutes').innerText = m;
	document.getElementById('seconds').innerText = s;
}

setInterval(function() {
	newYear();
},1000);