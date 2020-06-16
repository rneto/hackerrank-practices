// PROBLEM: https://www.hackerrank.com/challenges/30-binary-trees/problem

using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Node{
    public Node left,right;
    public int data;
    public Node(int data){
        this.data=data;
        left=right=null;
    }
}
class Solution{

	static void levelOrder(Node root){
  		//Write your code here
        if (root == null) {
            return;
        }

        List<int> data = new List<int>();
        Queue queue = new Queue();
        queue.Enqueue(root);

        while(queue.Count > 0) {
            Node node = (Node)queue.Dequeue();
            data.Add(node.data);

            if (node.left != null) {
                queue.Enqueue(node.left);
            }

            if (node.right != null) {
                queue.Enqueue(node.right);
            }
        }
        
        Console.WriteLine(String.Join(" ", data));
    }

	static Node insert(Node root, int data){
        if(root==null){
            return new Node(data);
        }
        else{
            Node cur;
            if(data<=root.data){
                cur=insert(root.left,data);
                root.left=cur;
            }
            else{
                cur=insert(root.right,data);
                root.right=cur;
            }
            return root;
        }
    }
    static void Main(String[] args){
        Node root=null;
        int T=Int32.Parse(Console.ReadLine());
        while(T-->0){
            int data=Int32.Parse(Console.ReadLine());
            root=insert(root,data);            
        }
        levelOrder(root);
        
    }
}