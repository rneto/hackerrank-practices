// PROBLEM: https://www.hackerrank.com/challenges/30-binary-numbers/problem

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
        int n = Convert.ToInt32(Console.ReadLine());
        string nbase2 = Convert.ToString(n, 2);
        IEnumerable<int> consecutive1s = nbase2.Split('0').Select(s => s.Length);
        
        Console.WriteLine(consecutive1s.Max());
    }
}
