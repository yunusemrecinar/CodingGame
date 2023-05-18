/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
let words = MESSAGE.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(7, '0');
}).join("")

let res = "", zeroCheck = false, oneCheck = false

for(let i = 0; i < words.length; i++) {
    if(!zeroCheck && words[i] =="0") {
        res += " 00 ";
        zeroCheck = true
    } else if(!oneCheck && words[i] =="1") {
        res += " 0 ";
        oneCheck = true;
    } 
    if(zeroCheck && words[i] =="0") {
        res += "0";
        oneCheck = false;
    } else if(oneCheck && words[i] =="1") {
        res += "0";
        zeroCheck = false
    }
}

console.log(res.trim());
