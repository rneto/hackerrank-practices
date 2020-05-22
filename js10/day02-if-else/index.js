/**
 * PROBLEM: https://www.hackerrank.com/challenges/js10-if-else/problem
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getGrade(score) {
    let grade;
    // Write your code here
    grade = (score <= 5 ? 'F' :
             score <= 10 ? 'E' :
             score <= 15 ? 'D' :
             score <= 20 ? 'C' :
             score <= 25 ? 'B' :
             'A');
    return grade;
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}