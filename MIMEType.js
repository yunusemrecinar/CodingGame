/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.

let mimeMap = {}

function getType(type) 
{
    let arr = type.split(".");

    if(arr.length > 1){
        let extension = arr.pop().toLowerCase()

        if(mimeMap[extension]) return mimeMap[extension]

    }
    return "UNKNOWN"
}

for(let i = 0; i < N; i++) {
    let line = readline().split(" ")

    mimeMap[line[0].toLowerCase()] = line[1]
}

for(let i = 0; i < Q; i++) {
    console.log(getType(readline()))
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
