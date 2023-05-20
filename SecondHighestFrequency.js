/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const str = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let freq = new Map()
for(let i = 0; i < str.length; i++) {
    freq.set(str[i], freq.get(str[i]) ? freq.get(str[i]) + 1: 1);
}
let max = 0;
let vals = [...new Set(Array.from(freq.values()))].sort((a,b) => b-a);
console.log(vals[1] ? vals[1] : -1);
