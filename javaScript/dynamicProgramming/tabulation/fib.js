/*
    Fibonacci sequence 

    Write a function `fib(n)` that takes in a number as an argument.
    The function should return the n-th number of the Fibonacci sequence.
    The 1st and 2nd number of the sequence is 1.
    To generate the next number of the sequence, we sum the previous two.

    Fibonacci: 1, 2, 3, 4, 5, 6, 7,  8, ...

    Tabulation:

        fib(6) -> 8

            Start with 0 at every index of the table array

            idx: 0  1  2  3  4  5 (6)       >>> 6 is the target
                [0, 0, 0, 0, 0, 0, 0]

                [0, 1, 0, 0, 0, 0, 0]       >>> seed with 1 @ idx 1

                [ 0, 1, 0, 0, 0, 0, 0]      >>> add 0 to idx 1 & 2
                  |  |  |
                  |__|  | 
                  |_____|
                  
                [ 0, 1, 1, 1, 0, 0, 0]      >>> add 1 to idx 2 & 3
                     |  |  |
                     |__|  | 
                     |_____|
                    
                [ 0, 1, 1, 2, 1, 0, 0]      >>> add 1 to idx 3 & 4
                        |  |  |
                        |__|  | 
                        |_____|
                    
                [ 0, 1, 1, 2, 3, 2, 0]      >>> add 2 to idx 4 & 5
                           |  |  |
                           |__|  | 
                           |_____|

                [0, 1, 1, 2, 3, 5, 3]       >>> add 3 to idx 5 & 6
                             |  |  |
                             |__|  | 
                             |_____|

                [0, 1, 1, 2, 3, 5, 8]       >>> add 5 to idx 6 & 7
                                |  |  |
                                |__|  | 
                                |_____|
                     
*/

const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}


console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
