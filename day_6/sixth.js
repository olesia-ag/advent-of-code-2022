var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('');
	console.log('result', findMarker(arr));
	return;
});

function findMarker(arr) {
	let markerCheck = [];
	for (let i = 0; i < arr.length; i++) {
		if (markerCheck.length === 4) return i;
		if (!markerCheck.includes(arr[i])) {
			markerCheck.push(arr[i]);
		} else {
			markerCheck = markerCheck.slice(markerCheck.indexOf(arr[i])+1);
      markerCheck.push(arr[i]);
		}
	}
}
