/*

    How Sum >>> New vertion stemming from `canSum.js`

    Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
    The function should return an array containing any combination of elements that add up to exactly the targetSum. If there is no combination that adds up to the targetSum, then return null.
    If there are multiple combinations possible, you may return any single one.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are nonnegative.
    You may assume that the targetSum is nonnegative.
    You may assume that the array does not contain duplicates.
    You may assume that the array is not empty.
    You may assume that the array is sorted.

    howSum(7, [5, 3, 4, 7])) -> [4, 3] 
    Graph:
             [4,3] 
        (______7______)
      -5/  -3|   -4|   \-7
     (2)    (4)   (3)   (0)
         -3/  |-4  |-3            
         (1) (0)  (0) 
        
    ^^^: a (0) node means we reached our target sum & (0) node returns [] that bubles up to the top pushing the current number(s) into the array. all other leaf nodes return null. in this case when we reach the first (0) node we return [] and [].push(4) then [4].push(3) then we've reached the top and return [4, 3] as the answer.

    Certain arguments will cause duplicates in the graph ***We can memoize this***.

    howSum(8, [2, 3, 5])) -> [2, 2, 2, 2] 
    Graph:

                 
    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk    

*/

const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    
    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [...remainderResult, num];
            return memo[targetSum];
        }
    }
    
    memo[targetSum] = null;
    return null;
} // O(n * m^2) time O(m^2) space
// m = targetSum
// n = numbers.length


console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null
