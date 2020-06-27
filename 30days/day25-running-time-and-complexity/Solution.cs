// PROBLEM: https://www.hackerrank.com/challenges/30-running-time-and-complexity/problem

using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int numbers = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i < numbers; i++) {
            int number = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine(IsPrime(number) ? "Prime" : "Not prime");
        }
    }

    private static bool IsPrime(int number) {
        if (number <= 1){
            return false;
        }
        for (int i = 2; i*i <= number; i++) {
            if (number % i == 0) {
                return false;
            }
        }
        return true;
    }
}