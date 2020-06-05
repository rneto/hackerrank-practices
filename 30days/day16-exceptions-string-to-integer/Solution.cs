// PROBLEM: https://www.hackerrank.com/challenges/30-exceptions-string-to-integer/problem

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        string S = Console.ReadLine();

        try {
            Console.WriteLine(int.Parse(S));
        }
        catch(Exception) {
            Console.WriteLine("Bad String");
        }
    }
}