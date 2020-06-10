// PROBLEM: https://www.hackerrank.com/challenges/30-review-loop/problem

function processData(input) {
    input = input.split('\n');
    for (let i = 1; i < input.length; i++){
        let even = '';
        let odd = '';

        for(let ii = 0; ii < input[i].length; ii++){
            if(ii % 2 === 0){
                even += input[i][ii];
            }else{
                odd += input[i][ii];
            }
        }
        console.log(`${even} ${odd}`);
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
