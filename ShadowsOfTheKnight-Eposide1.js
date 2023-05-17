/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
let W = parseInt(inputs[0]) - 1; // width of the building.
let H = parseInt(inputs[1]) - 1; // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
let X0 = parseInt(inputs[0]);
let Y0 = parseInt(inputs[1]);
let xstart = 0;
let ystart = 0;

// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)

    console.error(bombDir)
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    if(bombDir == 'U') {
        H = Y0 - 1;
        Y0 = Math.floor((ystart + Y0) / 2);
    } else if(bombDir == 'UR') {
        H = Y0 - 1;
        Y0 = Math.floor((ystart + Y0) / 2);
        xstart = X0 + 1
        X0 = Math.floor((xstart + W) / 2);
    } else if(bombDir == 'R') {
        xstart = X0 + 1
        X0 = Math.floor((xstart + W) / 2);
    } else if(bombDir == 'DR') {
        ystart = Y0 + 1
        Y0 = Math.floor((ystart + H) / 2);
        xstart = X0 + 1
        X0 = Math.floor((xstart + W) / 2);
    } else if(bombDir == 'D') {
        ystart = Y0 + 1
        Y0 = Math.floor((ystart + H) / 2);
    } else if(bombDir == 'DL') {
        ystart = Y0 + 1
        Y0 = Math.floor((ystart + H) / 2);
        W = X0 - 1
        X0 = Math.floor((xstart + X0) / 2);
    } else if(bombDir == 'L') {
        W = X0 - 1
        X0 = Math.floor((xstart + X0) / 2);
    } else if(bombDir == 'UL') {
        H = Y0 - 1
        Y0 = Math.floor((ystart + Y0) / 2);
        W = X0 - 1
        X0 = Math.floor((xstart + X0) / 2);
    }
    // the location of the next window Batman should jump to.
    console.log(`${X0} ${Y0}`);
}
