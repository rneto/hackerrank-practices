// PROBLEM: https://www.hackerrank.com/challenges/30-bitwise-and/problem

'use strict';

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

function getMaxLessThanK(n, k) {
    let max = 0;
    for(let a = 1; a < n; a++) {
        for(let b = a+1; b <= n; b++) {
            if ((a & b) < k && (a & b) > max) {
                max = (a & b);
            }
        }
    }
    return max;
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');
        const n = parseInt(nk[0], 10);
        const k = parseInt(nk[1], 10);

        console.log(getMaxLessThanK(n, k));
    }
}
