/*
    Best Sum
    canSum v 1.0.0 >>> howSum v 2.0.0 >>> bestSum v 3.0.0


    Write a function `bestSum(targetSum, numbers)` that takes in a targetSum and an array of numbers as arguments.
    The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
    If there is a tie for the shortest combination, you may return any one of the shortest.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are nonnegative.
    You may assume that the targetSum is nonnegative.
    You may assume that the array does not contain duplicates.
    You may assume that the array is not empty.
    You may assume that the array is sorted.

    bestSum(8, [2, 3, 5]) -> [3, 5]
    Graph:
                                               [3,5] 
                                (________________8________________)
                            -2/                -3|               -5\   
                (_____6_____)                 (__5__)              (3)   
                -2/   -3|    \-5           -2/  -3|  \-5        -2/   \-3     
             (4)       (3)    (1)         (3)    (2)  (0)      (1)     (0)
           -2/ \-3   -2/ \-3           -2/ |-3   |-2
          (2)  (1)  (1)   (0)          (1)(0)   (0)
           |-2
          (0)

    ^^^: a (0) node means we reached our target sum & (0) node returns [] that bubles up to the top pushing the current number(s) into the array. all other leaf nodes return null. in this case when we reach the first (0) node we return [] and [].push(3) then [3].push(5) then at each level we compair length & make sure shortestCombination is smalles length of the posible sums we find [3, 5] as the answer.

    Certain arguments will cause duplicates in the graph ***We can memoize this***. (e.g. memo = { "2": [2], "3": [3]})

    Memoization Graph:
                                               [3,5] 
                                (________________8________________)
                            -2/                -3|               -5\   
                (_____6_____)               (___5___)           (memo[3])   
                -2/   -3|    \-5         -2/  -3|    \-5            
             (4)       (3)    (1) (memo[3]) (memo[2]) (0)      
           -2/ \-3   -2/ \-3              
          (2)  (1)  (1)   (0)          
           |-2
          (0)


    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    
    let shortestCombination = null;
    
    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    
    memo[targetSum] = shortestCombination;
    return shortestCombination;
} // O(n * m^2) time O(m^2) space

console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
