/*
    Count Construct Problem
    canConstruct v. 1.0.0 >>> countConstruct v. 2.0.0 >>> allConstruct v. 3.0.0

    Write a function `countConstruct(target, wordBank)` that accepts a target string and an array of strings.
    The function should return the number of ways that the `target` can be constructed by concatenating elements of the `wordBank` array.
    You may reuse elements of `wordBank` as many times as needed.
    
    countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']) => 2
    Graph:
                        -> 2
                   1 + 1 + 0 = 2
                (_____purple_____)
            purp/       |p       \purpl
        (le)          (urple)     (e) -> 0
       le|               |ur
        ('') -> 1      (ple) 
                         |p
                        (le)
                         |le
                        ('') -> 1   
                        
    ^^^ The node (le) is repeated twice, so we can use memoization to avoid redundant calculations. (e.g. memo = {le: 1})   

    Memo Graph:
                        -> 2
                   1 + 1 + 0 = 2
                (_____purple_____)
            purp/       |p       \purpl
        (le)          (urple)     (e) -> 0
       le|               |ur
        ('') -> 1      (ple) 
                         |p
                    (memo[le]) -> 1

    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/

const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
} // O(n * m^2) time O(m^2) space

console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // 1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // 0
