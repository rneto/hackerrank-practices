// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

function processData(input) {
    //Enter your code here
    input = input.split('\n');

    let n = parseInt(input[0])
    let phoneBook = new Map(input.slice(1, n + 1).map(l => l.split(' ')));

    let contact;
    for (let i = n + 1; i < input.length; i++) {
        if (phoneBook.has(input[i])) {
            console.log(`${input[i]}=${phoneBook.get(input[i])}`);
        }
        else {
            console.log('Not found');
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
