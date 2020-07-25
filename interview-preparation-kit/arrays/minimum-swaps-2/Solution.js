// PROBLEM: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&h_r=next-challenge&h_v=zen

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let length = arr.length;
    let totalSwaps = 0;
    for (let i = 0; i < length; i++) {
        if (arr[i] != i + 1) {
            const tmp = arr[i];
            const swapIndex = arr.indexOf(i + 1, i);
            arr[i] = arr[swapIndex];
            arr[swapIndex] = tmp;
            totalSwaps++;
        }
    }

    return totalSwaps;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
