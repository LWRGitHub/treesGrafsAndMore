/*

    canSum v. 1.0.0 >>> howSum v. 2.0.0 >>> bestSum v. 3.0.0


    
    Write a function 'howSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments.
    Use tabulations to solve this problem.
    The function should return an array containing any combination of elements that add up to exactly the targetSum.
    If there is no combination that adds up to the targetSum, then return null.
    If there are multiple combinations possible, you may return any single one.

    howSum(7, [5, 3, 4]) -> [3, 4] or [4, 3]

    Tabulation:

        NOTE:
            - tabulation works by looping thrugh the table array "numbers" and adding the current element to the current index

        idx:   0   1     2     3     4     5     6     7
            [ [], null, null, null, null, null, null, null]         // seed with [] @ idx[0]

            [ [], null, null, [3], [4], [5], null, null]            // [] >>> idx[3], idx[4] & idx[5]
               |________3______|    |    |
               |___________4________|    |    
               |_____________5___________|   

            [ [], null, null, [3], [4], [5], null, null]            // if null skip
                    |________3______|    |    |
                    |___________4________|    |    
                    |_____________5___________| 
            
            ... if null skip

            [ [], null, null, [3], [4], [5], [3,3], [3,4]]            // [3] >>> idx[6] & idx[7]
                               |________3______|      |    |
                               |_____________4________|    |    
                               |_________________5_________| 

            [ [], null, null, [3], [4], [5], [3,3], [4,3]] -> [4.3]   // [4] >>> idx[7] ***Answer @ idx[target]***
                                    |_________3_______|     |    |
                                    |_____________4_________|    |    
                                    |_________________5__________| 



    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk                                   
            
*/

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [...table[i], num];
            }
        }
    }
    return table[targetSum];
}


console.log(howSum(7, [2, 3])) // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])) // [4, 3]
console.log(howSum(7, [2, 4])) // null
console.log(howSum(8, [2, 3, 5])) // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])) // null