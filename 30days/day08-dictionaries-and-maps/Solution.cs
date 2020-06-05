// https://www.hackerrank.com/challenges/30-dictionaries-and-maps/problem

using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution */
        int n = Convert.ToInt32(Console.ReadLine());
        Dictionary<string, string> phoneBook = new Dictionary<string, string>();
        var consoleLine = string.Empty;

        for(int i = 1; i <= n; i++) {
            consoleLine = Console.ReadLine();
            phoneBook.Add(consoleLine.Split(' ')[0], consoleLine.Split(' ')[1]);
        }
        
        consoleLine = Console.ReadLine();
        while (consoleLine != null) {
            if (phoneBook.ContainsKey(consoleLine)) {
                Console.WriteLine($"{consoleLine}={phoneBook[consoleLine]}");
            }
            else {
                Console.WriteLine("Not found");
            }
            consoleLine = Console.ReadLine();
        }
    }
}
