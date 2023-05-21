/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const H = parseInt(inputs[0]);
const W = parseInt(inputs[1]);
const probs = []
let count = 0
let perc = 1

for (let i = 0; i < H; i++) {
    const line = readline()
    for(let j = 0; j < line.length; j++) {
        if(line[j] == "G") 
            probs.push(1 - (Math.min(i, j) / (Math.pow(i, 2) + Math.pow(j, 2) + 1)))
    }
}

probs.sort((a,b) => b-a).forEach(e => {
    if(perc * e >= 0.6) {
        perc *= e;
        count++;
    }
})

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(count);
