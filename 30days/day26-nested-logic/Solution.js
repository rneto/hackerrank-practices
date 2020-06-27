// PROBLEM: https://www.hackerrank.com/challenges/30-nested-logic/problem

const toDateObject = (line) => {
    const [day, month, year] = line.split(' ').map(Number);
    return { year, month, day};
}

function processData(input) {
    //Enter your code here
    const returned = toDateObject(input.split('\n')[0]);
    const expected = toDateObject(input.split('\n')[1]);
    let fine = 0;

    if (expected.year === returned.year && expected.month === returned.month) {
        fine = (returned.day - expected.day) * 15;
    } else if (expected.year === returned.year && expected.month < returned.month) {
        fine = (returned.month - expected.month) * 500;
    } else if (expected.year < returned.year) {
        fine = 10000;
    }

    console.log(fine);
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
