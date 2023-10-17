/*
    Can Construct Problem
    canConstruct v. 1.0.0 >>> countConstruct v. 2.0.0 >>> allConstruct v. 3.0.0

    Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
    The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.
    You may reuse elements of `wordBank` as many times as needed.
    

    canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']) => true

    Graph:
                (enterapotentpot)
            ent/                \enter
        (erapotentpot)      (apotentpot)
                                 a|
                             (potentpot)
                                 p|
                             (otentpot)
                            o/        \ot
                        (tentpot)   (entpot)
                           t|          |ent
                        (entpot)     (pot)
                        ent|           |p
                        (pot)         (ot)
                         p|          o/  \ot
                        (ot)       (t)    ('')
                       o/  \ot     t|
                     (t)   ('')   ('')
                     t|
                     ('')

    ^^^ The node (entpot) is repeated twice, so we can use memoization to avoid redundant calculations. (e.g. memo = {entpot: true})

    Memo Graph:
                (enterapotentpot)
            ent/                \enter
        (erapotentpot)      (apotentpot)
                                 a|
                             (potentpot)
                                 p|
                             (otentpot)
                            o/        \ot
                        (tentpot)   (memo[entpot]) 
                           t|          
                        (entpot)     
                        ent|          
                        (pot)         
                         p|         
                        (ot)       
                       o/  \ot     
                     (t)   ('')   
                     t|
                     ('')

    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/ 

const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return true;

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
} // T: O(n * m^2) S: O(m^2)


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
