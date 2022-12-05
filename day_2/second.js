var fs = require('fs');

let results = new Map();

results.set('A X', 3);
results.set('A Y', 6);
results.set('A Z', 0);
results.set('B X', 0);
results.set('B Y', 3);
results.set('B Z', 6);
results.set('C X', 6);
results.set('C Y', 0);
results.set('C Z', 3);

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('\n');
	console.log(predictStrategy(arr, results))
	return;
});



function predictStrategy(strategyArr, results) {
	let score = 0;

	for (let i = 0; i < strategyArr.length; i++) {
    if (strategyArr[i] == ' ' || strategyArr[i] == '' || !strategyArr[i] || strategyArr[i] == undefined) return score
		score += results.get(strategyArr[i]);
		let myChoice = strategyArr[i].charAt(2);
		if (myChoice == 'X') score += 1;
		else if (myChoice == 'Y') score += 2;
		else score += 3;
	}
	return score;
}
