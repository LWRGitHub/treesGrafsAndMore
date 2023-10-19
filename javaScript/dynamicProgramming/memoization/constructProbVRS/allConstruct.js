/*
    All Construct Problem
    canConstruct v. 1.0.0 >>> countConstruct v. 2.0.0 >>> allConstruct v. 3.0.0


    Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
    The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.
    You may reuse elements of 'wordBank' as many times as needed.

    allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])

    NOTE:
        - Empty strings are an empty array ( e.g. >>> [[]] )
        - When an empty string is reached an empty array bubbles back up adding pushing the edges to the array.

    Graph:

         -> [ 
                [ 'ab', 'cd', 'ef' ], 
                [ 'ab', 'c', 'def' ], 
                [ 'abc', 'def' ], 
                [ 'abcd', 'ef' ] 
            ]

                    (abcdef)
                 ab/  |abc  \abcd
             (cdef)   (def)  (ef)
          cd/  |c      |def   |ef 
        (ef)   (def)  ('')   ('') 
         |ef    |def
        ('')   ('')

    ^^^ the node (def) & (ef) are on the graph 2 times. we can memoize this (e.g memo = { def: [[ 'def' ]], ef: [[ 'ef' ]] } )

    Memoized Graph:

                  (____abcdef____)
               ab/       |abc     \abcd
             (cdef)   (memo[def])  (memo[ef])
          cd/  |c         
        (ef)   (def)    
         |ef    |def
        ('')   ('')


    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/

const allConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target];
    if(target === '') return [[]];

    const result = [];

    for(let word of wordBank){
        if(target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
}




console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); // 
/*
    [ 
        [ 'purp', 'le' ], 
        [ 'p', 'ur', 'p', 'le' ]
    ]
*/
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
/*
    [ 
        [ 'ab', 'cd', 'ef' ], 
        [ 'ab', 'c', 'def' ], 
        [ 'abc', 'def' ], 
        [ 'abcd', 'ef' ] 
    ]
*/
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); // []
console.log(allConstruct("aaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"])); // []
