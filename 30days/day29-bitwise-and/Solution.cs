// PROBLEM: https://www.hackerrank.com/challenges/30-bitwise-and/problem

using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {
    static void Main(string[] args) {
        int t = Convert.ToInt32(Console.ReadLine());

        for (int tItr = 0; tItr < t; tItr++) {
            string[] nk = Console.ReadLine().Split(' ');
            int n = Convert.ToInt32(nk[0]);
            int k = Convert.ToInt32(nk[1]);

            Console.WriteLine(getMaxLessThanK(n, k));
        }
    }

    static int getMaxLessThanK(int n, int k) {
        int max = 0;
        for(int a = 1; a < n; a++) {
            for(int b = a+1; b <= n; b++) {
                if ((a & b) < k && (a & b) > max) {
                    max = (a & b);
                }
            }
        }
        return max;
    }
}
