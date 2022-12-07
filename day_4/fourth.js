var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('\n');
	console.log(checkIfContains(arr));
	return;
});

function checkIfContains(assignments) {
	let total = 0;
	let totalofAnyOverlaps = 0;
	//length - 1 covers for the last empty element
	for (let i = 0; i < assignments.length - 1; i++) {
		let elem = assignments[i].split(',');
		let arr1 = elem[0].split('-');
		let arr2 = elem[1].split('-');
		if (checkFullOverlap(arr1, arr2)) {
			total += 1;
			totalofAnyOverlaps += 1;
		} else if (checkAnyOverlap(arr1, arr2)) {
			totalofAnyOverlaps += 1;
		}
	}
	console.log('total of any:', totalofAnyOverlaps);
	return totalofAnyOverlaps;
}

function checkFullOverlap(arr1, arr2) {
	if (
		parseInt(arr1[0]) == parseInt(arr2[0]) ||
		parseInt(arr1[1]) == parseInt(arr2[1])
	)
		return true;
	if (
		parseInt(arr1[0]) < parseInt(arr2[0]) &&
		parseInt(arr1[1]) > parseInt(arr2[1])
	)
		return true;
	else if (
		parseInt(arr1[0]) > parseInt(arr2[0]) &&
		parseInt(arr1[1]) < parseInt(arr2[1])
	)
		return true;
	else return false;
}

function checkAnyOverlap(arr1, arr2) {
	if (
		parseInt(arr1[0]) == parseInt(arr2[0]) ||
		parseInt(arr1[1]) == parseInt(arr2[1]) ||
		parseInt(arr1[1]) == parseInt(arr2[0]) ||
		parseInt(arr1[0]) == parseInt(arr2[1])
	)
		return true;

	//determine first pair - where the start is earlier
	let earlier = parseInt(arr1[0]) < parseInt(arr2[0]) ? arr1 : arr2;
	let later = parseInt(arr1[0]) < parseInt(arr2[0]) ? arr2 : arr1;
	if (parseInt(earlier[1]) > parseInt(later[0])) return true;
	else {
		return false;
	}
}

// console.log(checkAnyOverlap(['18', '92'], ['14', '18']));
// console.log(checkAnyOverlap(['98', '99'], ['30', '97']));
