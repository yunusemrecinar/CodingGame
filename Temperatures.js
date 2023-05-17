/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
let diff = Number.MAX_SAFE_INTEGER;
let res = false;
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if((Math.abs(t) < Math.abs(diff)) || (Math.abs(t) == Math.abs(diff) && t > 0)) {
        diff = t
        res = true
    }
    console.error(t , diff, res);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.log(res ? diff : 0);
