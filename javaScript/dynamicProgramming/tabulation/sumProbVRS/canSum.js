/*

    canSum v. 1.0.0 >>> howSum v. 2.0.0 >>> bestSum v. 3.0.0

    

    Problem: Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
    The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are nonnegative.


    canSum(7, [5, 3, 4]) -> true

    Tabulation:

        NOTE:
            - 0 is always true
            - tabulation works by looping thrugh the table array "numbers" and adding the current element to the current index


    idx:   0     1      2      3      4      5      6      7
        [true, false, false, false, false, false, false, false]         // seed with true @ idx[0]   

        [(true), false, false, true, true, true, false, false]          // true >>> idx[3], idx[4] & idx[5]
            |________3__________|      |      |
            |_____________4____________|      |
            |_________________5_______________|

        [true, (false), false, true, true, true, false, false]          // if fasle, do nothing
                  |________3__________|      |      |
                  |_____________4____________|      |
                  |_________________5_______________|

        ... idx[2] is fales, do nothing

        [true, false, false, (true), true, true, true, ture]            // true >>> idx[6], idx[7]
                                |________3__________|      |      
                                |_____________4____________|      

        [true, false, false, true, (true), true, true, true] -> true    // true >>> idx[7] ***Answer @ idx[target]***
                                      |________3__________|  
                 
                                      
    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk
*/


const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }
    return table[targetSum];
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false

