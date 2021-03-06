// PROBLEM: https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let arr = Array(n + 1).fill(0);
    const MAX_QUERIES = queries.length;

    for(let q = 0; q < MAX_QUERIES; q++) {
        let [a, b, k] = queries[q];
        arr[a - 1] += k;
        arr[b] -= k;
    }
    
    return getMaxSum(arr);
}

// Get the accumulated maximum of the array.
function getMaxSum(arr) {
    let max = 0;
    let maxSum = 0;
    const ARRAY_LENGTH = arr.length;

    for(var i = 0; i < ARRAY_LENGTH; i++){
        maxSum += arr[i];
        max = Math.max(max, maxSum);
    }    

    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    ws.write(result + "\n");

    ws.end();
}
