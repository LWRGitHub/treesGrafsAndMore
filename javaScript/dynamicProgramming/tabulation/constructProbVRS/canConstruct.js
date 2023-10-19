/*

    Can Construct

    canConstruct v. 1.0.0 >>> countConstruct v. 2.0.0 >>> allConstruct v. 3.0.0


    Write a function `canConstruct(target, wordBank)` that accepts a target string and an array of strings.
    Make sure to use tabulation.
    The function should return a boolean indicating whether or not the `target` can be constructed by concatenating elements of the `wordBank` array.
    You may reuse elements of `wordBank` as many times as needed.

    canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']) -> true

    Tabulation:

    idx:        0     1      2      3      4      5      6
            [ true, false, false, false, false, false, false ]              // seed with true @ idx[0] 
    target:     a     b      c      d      e      f


    idx:       (0)       9     2     3      4     5      6
            [ (true), false, true, true, true, false, false ]               // starting at idx[0] looking forward  
    target:    (a)       b     c     d      e     f                         // ab >>> true @ idx[2] abc >>> true @ idx[3] abcd >>> true @ idx[4]


    idx:        0     (1)      2     3      4     5      6
            [ true, (false), true, true, true, false, false ]               // starting at idx[1] looking forward  
    target:     a     (b)      c     d      e     f                         // nothing @ idx[1] >>> false


    idx:        0      1     (2)     3     4     5      6
            [ true, false, (true), true, true, false, false ]               // starting at idx[2] looking forward  
    target:     a      b     (c)     d     e     f                          // cd >>> true @ idx[4]


    idx:        0      1     2     (3)     4     5      6
            [ true, false, true, (true), true, false, true ]                // starting at idx[3] looking forward  
    target:     a      b     c     (d)     e     f                          // def >>> true @ idx[6]


    ... all others wordBank words can be found
    
    return the last element @ idx[target.length]
               

    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk
*/


const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false) // create an array of false values with a length of target.length + 1
    table[0] = true // seed the table with true @ idx[0]
    
    for(let i=0; i <= target.length; i++) { // loop through the table array
        if(table[i] === true) { // if the current element is true
            for(let word of wordBank) { // loop through the wordBank array
                // if the word matches the characters starting at position i
                if(target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true // set the element @ idx[i + word length] to true
                }
            }
        }
    }
    return table[target.length] // return the last element @ idx[target length]
}



console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); // true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])); // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'])); // false
