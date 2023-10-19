/*

    Count Construct 

    canConstruct v. 1.0.0 >>> countConstruct v. 2.0.0 >>> allConstruct v. 3.0.0


    Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
    The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.
    You may reuse elements of `wordBank` as many times as needed.
    Make sure to use tabulation.


    countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) => 2

    Tabulation:

    idx:          0  1  2  3  4  5  6 
                [ 1, 0, 0, 0, 0, 0, 0 ]                 // seed with 1 @ idx[0]
    target:       p  u  r  p  l  e


    idx:          (0)  1  2  3  4  5  6                 // look for words that starts @ idx[0] = 'p' & add a 1 at the idx after the last matching letter
                [ (1), 1, 0, 0, 1, 1, 0 ]               // purp >>> idx[4] += idx[0]
    target:       (p)  u  r  p  l  e                    // p >>> idx[1] += idx[0]
                                                        // purpl >>> idx[5] += idx[0]


    idx:          0  (1)  2  3  4  5  6                 // look for words that starts @ idx[1] = 'u'
                [ 1, (1), 0, 1, 1, 1, 0 ]               // ur >>> idx[3] += idx[1]
    target:       p  (u)  r  p  l  e                    


    idx:          0  1  (2)  3  4  5  6                 // look for words that starts @ idx[2] = 'r'
                [ 1, 1, (0), 1, 1, 1, 0 ]               // no words in the wordBank starts with 'r' so, skip
    target:       p  u  (r)  p  l  e    
    
    
    idx:          0  1  2  (3)  4  5  6                 // look for words that starts @ idx[3] = 'p' 
                [ 1, 1, 0, (1), 2, 1, 0 ]               // p >>> idx[4] += idx[3]
    target:       p  u  r  (p)  l  e    


    idx:          0  1  2  3  (4)  5  6                 // look for words that starts @ idx[3] = 'p' 
                [ 1, 1, 0, 1, (2), 1, 2 ]               // le >>> idx[6] += idx[4]
    target:       p  u  r  p  (l)  e    

    ... no words in wordBank starts with 'e' so, skip

    return tabulation[target.length] 



    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/


const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for(let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    return table[target.length];
}





console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0
