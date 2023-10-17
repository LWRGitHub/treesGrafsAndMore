/*
    Can Sum
    canSum v 1.0.0 >>> howSum v 2.0.0 >>> bestSum v 3.0.0


    Take the targetSum and an array of numbers as arguments.
    Return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are nonnegative.
    You may assume that the targetSum is nonnegative.
    You may assume that the array does not contain duplicates.
    You may assume that the array is not empty.
    You may assume that the array is sorted.

    canSum(8, [2, 3, 5]) -> true
    Graph:
                         (________8________)
                        /        |          \
                 (__6__)       (_5_)        (3)
                /   |  \       / | \         /\    
            (4)   (3)  (1)  (3) (2) (0)   (1)  (0)
           /   \  | |       / |   \             
        (2)  (1) (1)(0)   (1)(0)  (0)
         |
        (0)

    ^^^: Notice that the graph has 3 (3) nodes. ***WE CAN MEMOIZE THIS (e.g. >>> memo = {"3": true})***

    Memoization Graph:
                         (________8________)
                        /        |          \
                 (__6__)       (____5____)   (memo[3])
                /   |  \       /     |    \             
            (4)   (3)  (1) (memo[3]) (2)  (0)   
           /   \  | |                 |             
        (2)  (1) (1)(0)              (0)
         |
        (0)


    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk
*/

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    
    for (let num of numbers) {
        if(num <= targetSum){ // if num is greater than targetSum, we can't use it
            const remainder = targetSum - num;
            if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
            }
        }
    }
    
    memo[targetSum] = false;
    return false;
} // O(n^m) time O(m) space

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
console.log(canSum(300, [7, 14])) // false
