// PROBLEM: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

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

// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
    const stringLength = s.length;
    let substrings = [];
    let anagrams = 0;

    for(let i = 0; i < stringLength; i++) {
        for(let j = i + 1; j <= stringLength; j++) {
            substrings.push(s.substring(i, j).split('').sort().join(''));
        }
    }

    const substringsLength = substrings.length;
    for(let i = 0; i < substringsLength; i++) {
        for(let j = i + 1; j <= substringsLength; j++) {
            if (substrings[i] === substrings[j]) {
                anagrams ++;
            }
        }
    }

    return anagrams;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        ws.write(result + "\n");
    }

    ws.end();
}
