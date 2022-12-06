let alpabet = new Map();

for (let i = 0; i < 26; i++) {
	alpabet.set(String.fromCharCode(97 + i), i + 1);
	alpabet.set(String.fromCharCode(65 + i), i + 27);
}

var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('\n');
	// console.log(checkRunsacks(arr));
  console.log(checkBadges(arr))
	return;
});

function checkRunsacks(runsacks) {
	let total = 0;
	for (let i = 0; i < runsacks.length; i++) {
		let firstCompartment = runsacks[i].slice(0, runsacks[i].length / 2);
		let secondCompartment = runsacks[i].slice(runsacks[i].length / 2);
		for (let j = 0; j < firstCompartment.length; j++) {
			if (secondCompartment.includes(firstCompartment[j])) {
				total += alpabet.get(firstCompartment[j]);
				break;
			}
		}
	}
	return total;
}

function checkBadges(badges) {
	let total = 0;
	for (let i = 0; i < badges.length; i+=3) {
		let group1 = badges[i];
		let group2 = badges[i + 1];
		let group3 = badges[i + 2];
    for (let j = 0; j < group1.length; j++) {
			if (group2.includes(group1[j])) {
        if(group3.includes(group1[j])){
          total += alpabet.get(group1[j]);
          break;
        }else continue
			}
		}
	}
  return total;
}

// function determineShortest(a, b, c) {
// 	if (a.length < b.length) {
// 		if (a.length < c.length) {
// 			return a;
// 		} else {
// 			return b;
// 		}
// 	} else {
// 		if (b.length < c.length) {
// 			return b;
// 		} else {
// 			return c;
// 		}
// 	}
// }
