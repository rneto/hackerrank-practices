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
 * Complete the 'minimizeBias' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ratings as parameter.
 */

function minimizeBias(ratings) {
    // Write your code here
    let min = 0;
    let pairs = ratings.sort((a, b) => a - b);

    for (let i = 0; i < pairs.length; i+=2){
        min += pairs[i + 1] - pairs[i];
    }

    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ratingsCount = parseInt(readLine().trim(), 10);

    let ratings = [];

    for (let i = 0; i < ratingsCount; i++) {
        const ratingsItem = parseInt(readLine().trim(), 10);
        ratings.push(ratingsItem);
    }

    const result = minimizeBias(ratings);

    ws.write(result + '\n');

    ws.end();
}
