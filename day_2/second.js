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

function getMyChoice(map, neededScore, opponentLetter) {
	for (let [key, value] of map.entries()) {
		if (value === neededScore && key.charAt(0) == opponentLetter)
			return key.charAt(2);
	}
}

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('\n');
	// console.log(predictStrategy(arr, results))
	console.log(preditcCorrectStrategy(arr, results));
	return;
});

function predictStrategy(strategyArr, results) {
	let score = 0;
	for (let i = 0; i < strategyArr.length; i++) {
		if (
			strategyArr[i] == ' ' ||
			strategyArr[i] == '' ||
			!strategyArr[i] ||
			strategyArr[i] == undefined
		)
			return score;
		score += results.get(strategyArr[i]);
		let myChoice = strategyArr[i].charAt(2);
		if (myChoice == 'X') score += 1;
		else if (myChoice == 'Y') score += 2;
		else score += 3;
	}
	return score;
}

function preditcCorrectStrategy(strategyArr, results) {
	let score = 0;
	for (let i = 0; i < strategyArr.length; i++) {
		if (
			strategyArr[i] == ' ' ||
			strategyArr[i] == '' ||
			!strategyArr[i] ||
			strategyArr[i] == undefined
		)
			return score;
		let neededScore = 0;
		if (strategyArr[i].charAt(2) == 'X') neededScore = 0;
		else if (strategyArr[i].charAt(2) == 'Y') neededScore = 3;
		else neededScore = 6;
		let myChoice = getMyChoice(results, neededScore, strategyArr[i].charAt(0));
		if (myChoice == 'X') score += 1;
		else if (myChoice == 'Y') score += 2;
		else score += 3;
		score += neededScore;
	}
	return score;
}
