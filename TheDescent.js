/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/


// game loop
while (true) {
    let index = 0, max = 0;
    for (let i = 0; i < 8; i++) {
        const mountainH = parseInt(readline()); // represents the height of one mountain.
        
        if(max < mountainH) {
            max = mountainH;
            index = i;
        }
    }
    
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    
    console.log(index);     // The index of the mountain to fire on.

}

/*

Game Input
Within an infinite loop, read the heights of the mountains from the standard input and print to the standard output the index of the mountain to shoot.

Input for one game turn
8 lines: one integer mountainH per line. Each represents the height of one mountain given in the order of their index (from 0 to 7).

Output for one game turn
A single line with one integer for the index of which mountain to shoot.

Constraints
0 ≤ mountainH ≤ 9
Response time per turn ≤ 100ms

*/