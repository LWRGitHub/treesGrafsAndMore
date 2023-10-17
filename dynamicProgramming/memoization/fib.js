/*
    Write a function fib(n) that takes in a number as an argument.
    The function should return the n-th number of the Fibonacci sequence.
    The 1st and 2nd number of the sequence is 1.
    To generate the next number of the sequence, we sum the previous two.
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

    fib(6) -> 8
    Graph:
            (___6___)
           /        \
        (5)          (4)
        / \          / \
      (4) (3)      (3) (2)
      / \  / \     / \ 
    (3)(2)(2)(1)  (2)(1)
    / \ 
   (2)(1)

    ^^^: Notice that the graph has 3 (3) nodes & 2 (4) nodes. *** WE CAN MEMOIZE THIS (e.g. >>> memo = {"3": 2, "4": 3})***

    Memoization Graph:
            (___6___)
           /        \
        (5)      (memo[4])
        / \              
      (4) (memo[3])
      / \      
    (3)(2)  
    / \ 
   (2)(1)

   Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/

const fib = (n, memo={}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
} // O(n) time O(n) space

console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(50)) // 12586269025

