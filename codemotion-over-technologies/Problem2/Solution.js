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
 * Complete the 'minNum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER samDaily
 *  2. INTEGER kellyDaily
 *  3. INTEGER difference
 */

function minNum(samDaily, kellyDaily, difference) {
    // Write your code here
    if (samDaily === kellyDaily){
        return -1;
    }

    let kelly = 0;
    let sam = difference;
    let min = 0;

    while (kelly <= sam){
        kelly += kellyDaily;
        sam += samDaily;
        min++;
    }

    return min;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const samDaily = parseInt(readLine().trim(), 10);

    const kellyDaily = parseInt(readLine().trim(), 10);

    const difference = parseInt(readLine().trim(), 10);

    const result = minNum(samDaily, kellyDaily, difference);

    ws.write(result + '\n');

    ws.end();
}
