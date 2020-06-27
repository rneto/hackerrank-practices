// PROBLEM: https://www.hackerrank.com/challenges/30-regex-patterns/problem

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
    let gmailNames = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');
        const firstName = firstNameEmailID[0];
        const emailID = firstNameEmailID[1];
        const re = new RegExp(/@gmail.com$/);

        if (re.test(emailID)) {
            gmailNames.push(firstName);
        }
    }

    gmailNames.sort();
    gmailNames.map(name => console.log(name));
}
