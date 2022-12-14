var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('\n');
	parseData(arr);
	return;
});

let stacks = {};

function parseData(arr) {
	let directions = [];
	for (let i = arr.length - 1; i > -1; i--) {
		if (arr[i].includes('move')) {
			directions.unshift(arr[i]);
		} else if (arr[i].includes('[')) {
			stackStacks(arr[i]);
		}
	}
	// moveStacksByOne(directions);
	moveStacksByMultiple(directions);
	findTop(stacks);
}

function stackStacks(row) {
	let arrRow = row.match(/.{1,4}/g);
	let stackNum = 1;
	//stack number will be i+1
	for (let i = 0; i < arrRow.length; i++) {
		if (arrRow[i] == '    ') continue;
		if (!stacks[`stack${i + 1}`]) {
			stacks[`stack${i + 1}`] = [];
		}
		stacks[`stack${i + 1}`].push(arrRow[i]);
	}
}

//refactor later - split functions logic
function moveStacksByOne(directions) {
	for (let i = 0; i < directions.length; i++) {
		let instructions = directions[i].split(' ');
		let howManyToMove = instructions[1];
		let fromStack = instructions[3];
		let toStack = instructions[5];
		for (let j = 1; j <= howManyToMove; j++) {
			//now we move:
			let popped = stacks[`stack${fromStack}`].pop();
			stacks[`stack${toStack}`].push(popped);
		}
	}
}

//change later
function findTop(stacks) {
	let i = 1;
	while (i < 10) {
		console.log(
			'stack number:',
			i,
			'last letter:',
			stacks[`stack${i}`][stacks[`stack${i}`].length - 1]
		);
		i++;
	}
}

//question 2

function moveStacksByMultiple(directions) {
	for (let i = 0; i < directions.length; i++) {
		let instructions = directions[i].split(' ');
		let howManyToMove = instructions[1];
		let fromStack = instructions[3];
		let toStack = instructions[5];
		let splicePoint = stacks[`stack${fromStack}`].length - howManyToMove;
		let popped = stacks[`stack${fromStack}`].splice(splicePoint);

		stacks[`stack${toStack}`] = stacks[`stack${toStack}`].concat(popped);
	}
}
