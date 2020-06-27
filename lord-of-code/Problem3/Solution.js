'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'segment' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER x
 *  2. INTEGER_ARRAY space
 */


function segment(x, space) {
    // Write your code here
    let MAX = 0;
    let MIN = 0;
    let minPreviousSegmentSpace = 0;
    const spaceLength = space.length - x;
    for (let i = 0; i <= spaceLength; i++){
        MIN = 0;
        if (minPreviousSegmentSpace === 0){
            MIN = minSegmentSpace(space.slice(i, i + x));
        }
        else
        {
            let previousComputerSpace = space.slice(i - 1, i);
            let lastCurrentComputerSpace = space.slice(i + x - 1, i + x);

            if (previousComputerSpace <= minPreviousSegmentSpace) {
                MIN = minSegmentSpace(space.slice(i, i + x));
            }
            else
            {
                MIN = Math.min(minPreviousSegmentSpace, lastCurrentComputerSpace);
            }
        }
        if (MIN > MAX) {
            MAX = MIN;
        }
        minPreviousSegmentSpace = MIN;
    }
    
    return MAX;
}

function minSegmentSpace(segment) {
    let MIN = Number.MAX_VALUE;
    const segmentLength = segment.length;
    for (let i = 0; i < segmentLength; i++){
        if (segment[i] < MIN) {
            MIN = segment[i];
        }
    }
    return MIN
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x = parseInt(readLine().trim(), 10);

    const spaceCount = parseInt(readLine().trim(), 10);

    let space = [];

    for (let i = 0; i < spaceCount; i++) {
        const spaceItem = parseInt(readLine().trim(), 10);
        space.push(spaceItem);
    }

    const result = segment(x, space);

    ws.write(result + '\n');

    ws.end();
}
