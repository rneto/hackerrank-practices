// PROBLEM: https://www.hackerrank.com/challenges/30-review-loop/problem

using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int lines = Convert.ToInt32(Console.ReadLine());
        for (int i = 1; i <= lines; i++) {
            string even = "";
            string odd = "";
            string line = Console.ReadLine();
            for (int ii = 0; ii < line.Length; ii++) {
                if (ii % 2 == 0) {
                    even += line[ii];
                }
                else {
                    odd += line[ii];
                }
            }
            Console.WriteLine($"{even} {odd}");
        }
    }
}