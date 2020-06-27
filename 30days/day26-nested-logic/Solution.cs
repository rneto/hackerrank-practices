// PROBLEM: https://www.hackerrank.com/challenges/30-nested-logic/problem

using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        DateTime returned = ToDateTime(Console.ReadLine());
        DateTime expected = ToDateTime(Console.ReadLine());
        int fine = 0;

        if (expected.Year == returned.Year && expected.Month == returned.Month) {
            fine = (returned.Day - expected.Day) * 15;
        } else if (expected.Year == returned.Year && expected.Month < returned.Month) {
            fine = (returned.Month - expected.Month) * 500;
        } else if (expected.Year < returned.Year) {
            fine = 10000;
        }

        Console.WriteLine(fine);
    }

    static DateTime ToDateTime(string line) {
        return new DateTime(Convert.ToInt32(line.Split(' ')[2]), Convert.ToInt32(line.Split(' ')[1]), Convert.ToInt32(line.Split(' ')[0]));
    }
}