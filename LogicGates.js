/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline());
const m = parseInt(readline());
let signals = {}
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const inputName = inputs[0];
    const inputSignal = inputs[1];
    signals[inputName] = inputSignal;
}

let res = ""
let tempsign1 = ""
let tempsign2 = ""
let tempsign = ""

for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const outputName = inputs[0];
    const type = inputs[1];
    const inputName1 = inputs[2];
    const inputName2 = inputs[3];

    res = outputName
    tempsign = ""
    tempsign1 = signals[inputName1]
    tempsign2 = signals[inputName2]
    if(type == "AND") {
        for(let i = 0; i < tempsign1.length; i++) {
            if(tempsign1[i] == tempsign2[i] && tempsign2[i] == "-")
                tempsign += "-"
            else 
                tempsign += "_"
        }
        res += " " + tempsign
    } else if(type == "OR") {
        for(let i = 0; i < tempsign1.length; i++) {
            if(tempsign1[i] == "-" || tempsign2[i] == "-")
                tempsign += "-"
            else 
                tempsign += "_"
        }
        res += " " + tempsign
    } else if(type == "XOR") {
        for(let i = 0; i < tempsign1.length; i++) {
            if(tempsign1[i] != tempsign2[i])
                tempsign += "-"
            else 
                tempsign += "_"
        }
        res += " " + tempsign
    } else if(type == "NAND") {
        for(let i = 0; i < tempsign1.length; i++) {
            if(tempsign1[i] == tempsign2[i] && tempsign2[i] == "-")
                tempsign += "_"
            else 
                tempsign += "-"
        }
        res += " " + tempsign
    } else if(type == "NOR") {
        for(let i = 0; i < tempsign1.length; i++) {
            if(tempsign1[i] == tempsign2[i] && tempsign2[i] == "_")
                tempsign += "-"
            else 
                tempsign += "_"
        }
        res += " " + tempsign
    } else if(type == "NXOR") {
        for(let i = 0; i < tempsign1.length; i++) {
            if(tempsign1[i] == tempsign2[i])
                tempsign += "-"
            else 
                tempsign += "_"
        }
        res += " " + tempsign
    }
    console.log(res)
    tempsign = ""
}