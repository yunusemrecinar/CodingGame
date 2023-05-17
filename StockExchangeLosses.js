/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
var inputs = readline().split(' ');
let max = 0;
let diff = 0;
for (let i = 0; i < n; i++) {
    const v = parseInt(inputs[i]);
    if(v > max) max = v;
    else if((v - max) < diff) diff =  v - max
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(diff);
