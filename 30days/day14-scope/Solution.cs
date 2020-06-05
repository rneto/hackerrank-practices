// PROBLEM: https://www.hackerrank.com/challenges/30-scope/problem

using System;
using System.Linq;

class Difference {
    private int[] elements;
    public int maximumDifference;

	// Add your code here
    public Difference(int[] elements) {
        this.elements = elements;
    }

    public void computeDifference() {
        Array.Sort(this.elements);
        int min = this.elements[0];
        int max = this.elements[this.elements.Length - 1];
        maximumDifference = max - min;
    }

} // End of Difference Class

class Solution {
    static void Main(string[] args) {
        Convert.ToInt32(Console.ReadLine());
        
        int[] a = Console.ReadLine().Split(' ').Select(x=>Convert.ToInt32(x)).ToArray();
        
        Difference d = new Difference(a);
        
        d.computeDifference();
        
        Console.Write(d.maximumDifference);
    }
}