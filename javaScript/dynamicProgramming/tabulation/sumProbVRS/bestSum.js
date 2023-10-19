/*

    canSum v. 1.0.0 >>> howSum v. 2.0.0 >>> bestSum v. 3.0.0


    Write a function `bestSum(targetSum, numbers)` that uses tabulation & takes in a targetSum and an array of numbers as arguments.
    The function should return an array containing the shortest combination of numbers that add up to exactly the targetSum.
    If there is a tie for the shortest combination, you may return any one of the shortest.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are nonnegative.
    You may assume that the targetSum is nonnegative.
    You may assume that the array does not contain duplicates.
    You may assume that the array is not empty.
    You may assume that the array is sorted.

    bestSum(8, [2, 3, 5]) -> [3, 5]

    Tabulation:

        NOTE:
            - tabulation works by looping thrugh the table array "numbers" and adding the current element to the current index

        idx:   0   1     2     3     4     5     6     7     8
            [ [], null, null, null, null, null, null, null, null]               // seed with [] @ idx[0]

            [ [], null, [2], [3], null, [5], null, null, null]                  // [] >>> idx[2], idx[3] & idx[5]
              |____2_____|    |          |
              |______3________|          |
              |____________5_____________|

            [ [], null, [2], [3], null, [5], null, null, nulll]                 // if null >>> skip
                    |____2_____|    |         |
                    |______3________|         |
                    |____________5____________|

            [ [], null, [2], [3], [2, 2], [5], null, [2,5], null]               // [2] >>> idx[4] & idx[7] ***but not idx[5] (e.g [5].length < [2,3])***
                         |____2_____|      |          |
                         |________3________|          |
                         |_______________5____________|

            [ [], null, [2], [3], [2, 2], [5], [3,3], [2,5], [3,5]]             // [3]  >>> idx[6] & idx[8] ***but not idx[5] (e.g [5].length < [3,2])***
                              |______2_____|     |             |
                              |_________3________|             |
                              |________________5_______________|

            ... all other changes are >= to the above, so we skip them

            [ [], null, [2], [3], [2, 2], [5], [3,3], [2,5], [3,5]] -> [3,5]    // return the last element @ idx[targetSum]
                                                        |___2___|     |     |
                                                        |______3______|     |
                                                        |_________5_________|


    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk 
*/

const bestSum = (targetSum, numbers) => {

    const table = Array(targetSum + 1).fill(null) // create an array of null values with a length of targetSum + 1
    table[0] = [] // seed the table with an empty array @ idx[0]

    for (let i = 0; i <= targetSum; i++) { // loop through the table array
        if (table[i] !== null) { // if the current element is not null
            for (let num of numbers) { // loop through the numbers array
                const combination = [...table[i], num] // create a combination of the current element and the current number
                if (!table[i + num] || table[i + num].length > combination.length) { // if the next element is null or the next element is greater than the combination
                    table[i + num] = combination // set the next element to the combination
                }
            }
        }
    }

    return table[targetSum] // return the last element of the table array
}



console.log(bestSum(7, [5, 3, 4, 7])) // [7]
console.log(bestSum(8, [2, 3, 5])) // [3, 5]
console.log(bestSum(8, [1, 4, 5])) // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])) // [25, 25, 25, 25]
