// PROBLEM: https://www.hackerrank.com/challenges/30-2d-arrays/problem

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
        int[][] arr = new int[6][];

        for (int i = 0; i < 6; i++) {
            arr[i] = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp));
        }

        int MAX_R = 4;
        int MAX_C = 4;
        List<int> hourGlasses = new List<int>();
        for(int r = 0; r < MAX_R; r++) {
            for(int c = 0; c < MAX_C; c++) {
                hourGlasses.Add(arr[r][c] + arr[r][c+1] + arr[r][c+2] +
                    arr[r+1][c+1] +
                    arr[r+2][c] + arr[r+2][c+1] + arr[r+2][c+2]);
            }
        }
        Console.WriteLine(hourGlasses.Max());
    }
}
