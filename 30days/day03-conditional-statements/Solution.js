// PROBLEM: https://www.hackerrank.com/challenges/30-conditional-statements/problem

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
    const N = parseInt(readLine(), 10);

    switch (true) {
        case (N % 2 === 1):
        console.log('Weird');
        break;

        case (N % 2 === 0 && N > 20):
        console.log('Not Weird');
        break;

        case (N % 2 === 0 && N >= 6):
        console.log('Weird');
        break;

        case (N % 2 === 0 && N >= 2):
        console.log('Not Weird');
        break;
    }
}
