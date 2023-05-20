/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let result = []
let row = []
for (let i = 0; i < 9; i++) {
    var inputs = readline().split(' ');
    console.error(inputs)
    for (let j = 0; j < 9; j++) {
        const n = parseInt(inputs[j]);
        row.push(n)
    }
    result.push(row)
    row = []
}
let check = true
let sum = 0;

//ROW CHECK
for(let i = 0; i < result.length; i++) {
    sum = [...new Set(result[i])].reduce((acc, element) => acc+ element, 0)
    
    if(sum !== 45) {
        check = false
        break
    }
}

sum = 0
//COLUMN CHECK
while(check) {
    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result.length; j++) {
            sum += result[j][i]
        }

        if(sum !== 45) {
            check = false
        }
        sum = 0
    }
    break
}

sum = 0
let subsum1 = 0
let subsum2 = 0
let subsum3 = 0
// SUB-GRIDS CHECK
while(check) {
    for(let i = 0; i < result.length; i += 3) {
        subsum1 = [...result[i].slice(0, 3), ...result[i+1].slice(0, 3), ...result[i+2].slice(0, 3)].reduce((acc, e) => acc+e, 0)
        subsum2 = [...result[i].slice(3, 6), ...result[i+1].slice(3, 6), ...result[i+2].slice(3, 6)].reduce((acc, e) => acc+e, 0)
        subsum3 = [...result[i].slice(6, 9), ...result[i+1].slice(6, 9), ...result[i+2].slice(6, 9)].reduce((acc, e) => acc+e, 0)
    
        if(subsum1 != 45 || subsum2 != 45 || subsum3 != 45) {
            check = false
            break
        }
    }
    break
}
console.error(result)
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

console.log(check);
