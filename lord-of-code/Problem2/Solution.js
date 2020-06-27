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
 * Complete the 'getMaxDeletions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function getMaxDeletions(s) {
    // Write your code here
    const S = [...s]; 
    const length = S.length; 
    let L = S.filter(l => l === 'L').length;
    let R = S.filter(r => r === 'R').length;
    let U = S.filter(u => u === 'U').length;
    let D = S.filter(d => d === 'D').length;
    
    return L + R - Math.abs(L - R) + U + D - Math.abs(U - D);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = getMaxDeletions(s);

    ws.write(result + '\n');

    ws.end();
}
