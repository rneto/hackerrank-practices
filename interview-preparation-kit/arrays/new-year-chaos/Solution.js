// PROBLEM: https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let length = q.length;
    let isTooChaotic = false;
    let swapped = false;
    let totalBribes = 0;
    do {
        swapped = false;
        for (let i = 0; i < length; i++) {
            if (q[i] - i > 3){
                isTooChaotic = true;
                swapped = false;
                break;
            }
            if (q[i] > q[i + 1]) {
                let tmp = q[i];
                q[i] = q[i + 1];
                q[i + 1] = tmp;
                swapped = true;
                totalBribes++;
            }
        }
    } while (swapped);

    console.log(isTooChaotic ? 'Too chaotic' : totalBribes);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
