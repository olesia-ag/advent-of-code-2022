var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('\n');
	console.log(checkIfContains(arr));
	return;
});

function checkIfContains(assignments) {
	let total = 0;
	//length - 1 covers for the last empty element
	for (let i = 0; i < assignments.length - 1; i++) {
		let elem = assignments[i].split(',');
		let arr1 = elem[0].split('-');
		let arr2 = elem[1].split('-');
		//  console.log('arr1', arr1, 'arr2', arr2)
		if (checkOverlap(arr1, arr2)) {
			total += 1;
		}
	}
	return total;
}

function checkOverlap(arr1, arr2) {
	if (parseInt(arr1[0]) == parseInt(arr2[0]) || parseInt(arr1[1]) == parseInt(arr2[1])) return true;
	else if (parseInt(arr1[0]) < parseInt(arr2[0]) && parseInt(arr1[1]) > parseInt(arr2[1])) return true;
	else if (parseInt(arr1[0]) > parseInt(arr2[0]) && parseInt(arr1[1]) < parseInt(arr2[1])) return true;
	else return false;
}
