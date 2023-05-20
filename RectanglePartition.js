/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);

const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
const xArr = [0]
const yArr = [0]
let squareCount = 0
let tempX = 0;
let tempY = 0;

var inputs = readline().split(' ');
for (let i = 0; i < countX; i++) {
    xArr.push(parseInt(inputs[i]));
}
xArr.push(w);

var inputs = readline().split(' ');
for (let i = 0; i < countY; i++) {
    yArr.push(parseInt(inputs[i]));
}
yArr.push(h);

console.error(xArr, yArr)

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

for(let i = 1; i < xArr.length; i++) {
    for(let j = 0; j < i; j++) {
        tempX = xArr[i] - xArr[j];

        for(let i = 1; i < yArr.length; i++) {
            for(let j = 0; j < i; j++) {
                tempY = yArr[i] - yArr[j];
        
                if(tempX == tempY) squareCount++
            }
        }
    }
}

console.log(squareCount);