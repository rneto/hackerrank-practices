// PROBLEM: https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem

function processData(input) {
    //Enter your code here
    const numbers = input.split('\n').splice(1).map(Number);

    numbers.forEach((n) => {
        process.stdout.write(isPrime(n) ? 'Prime\n' : 'Not prime\n');
    });
} 

function isPrime(number) {
    if (number <= 1){
        return false;
    }
    for (let i = 2; i*i <= number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
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
