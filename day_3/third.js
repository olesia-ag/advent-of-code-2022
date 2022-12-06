let alpabet = new  Map()

for (let i = 0; i <26; i++){
  // alpabet.push(String.fromCharCode(97 + i))
  alpabet.set(String.fromCharCode(97 + i), i+1)
  alpabet.set(String.fromCharCode(65 +i), i + 27)
}

var fs = require('fs');

fs.readFile('./input.txt', 'utf8', function (err, data) {
	if (err) throw err;
	let arr = data.split('\n');
	console.log(checkRunsacks(arr))
	return;
});

function checkRunsacks(runsacks){
  let total = 0;
  for (let i =0; i< runsacks.length; i++){
    let firstCompartment = runsacks[i].slice(0, runsacks[i].length/2)
    let secondCompartment = runsacks[i].slice(runsacks[i].length/2)
    for (let j = 0; j< firstCompartment.length; j++){
      if (secondCompartment.includes(firstCompartment[j])){
        total += alpabet.get(firstCompartment[j])
        break
      }
    }
  }
  return total
}
