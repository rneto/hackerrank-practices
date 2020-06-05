// PROBLEM: https://www.hackerrank.com/challenges/30-2d-arrays/problem

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



function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const MAX_R = 4;
    const MAX_C = 4;
    let hourGlasses = [];
    for(let r = 0; r < MAX_R; r++) {
        for(let c = 0; c < MAX_C; c++) {
            hourGlasses.push(arr[r][c] + arr[r][c+1] + arr[r][c+2] +
                arr[r+1][c+1] +
                arr[r+2][c] + arr[r+2][c+1] + arr[r+2][c+2]);
        }
    }
     console.log(Math.max(...hourGlasses));
}
