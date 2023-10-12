/*
    Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner.
    You may only move down or right.
    In how many ways can you travel to the goal on a grid with dimensions m * n?
    Write a function gridTraveler(m, n) that calculates this.

    gridTraveler(2, 3) -> 3
    Graph:
                (2,3)
               /    \
          (1,3)      (2,2)
         /    |      |    \
    (0,3)  (1,2)     (1,2) (2,1)
          /    |    /   |    |  \
     (0,2) (1,1) (0,2)(1,1) (1,1)(2,0)  

    ^^^: Notice that the graph has 2 (1,2) nodes. *** WE CAN MEMOIZE THIS (e.g. >>> memo = {"2,1": 1})***

    Memoization Graph:
                 (__2,3__)
                /         \
        (__1,3__)          (2,2)
        /    |             |    \
    (0,3)  (1,2)  (memo["2,1"])  (2,1)
          /    |                   |  \
     (0,2)  (1,1)                 (1,1)(2,0)  

    ^^^: Notice that the graph has (2,1) nodes. This is Returning the same answer as the reverse (e.g. (2,1). *** WE CAN MEMOIZE THIS (e.g. make the key start with the large number  >>> memo = {"2,1": 1}) ***

    Memoization Graph step 2:
                 (__2,3__)
                /         \
        (__1,3__)          (2,2)
        /    |              |   \
    (0,3)  (1,2)  (memo["2,1"])  (memo["2,1"])
          /    |                 
     (0,2)  (1,1)  
        
    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/

const gridTraveler = (m, n, memo = {}) => {
    const key = m > n ? m + ',' + n : n + ',' + m; // memo step 2 (e.g. (2,1) and (1,2) are the same)
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
} // O(m * n) time O(m + n) space

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // 2333606220