/*

    All Construct

    canConstruct v. 1.0.0 >>> countConstruct v. 2.0.0 >>> allConstruct v. 3.0.0


    Write a function 'allConstruct(target, wordBank)' that accepts a target string and an array of strings.
    The function should return a 2D array containing all of the ways that the 'target' can be constructed by concatenating elements of the 'wordBank' array. Each element of the 2D array should represent one combination that constructs the 'target'.
    You may reuse elements of 'wordBank' as many times as needed.
    Make sure to use tabulation.

    allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])

    Tabulation:

    idx:       0    1   2   3   4   5   6
            [ [[]], [], [], [], [], [], [] ]                                                // seed idx[0] = [[]]
    target:     a    b   c   d   e   f


    idx:       0     1     2       3        4       5   6                                   // Start looking from idx[0] = 'a'
            [ [[]], [], [[ab]], [[abc]], [[abcd]], [], [] ]                                 // ab >>> idx[2] = [[ab]]
    target:    a     b     c       d        e       f                                       // abc >>> idx[3] = [[abc]]
                                                                                            // abcd >>> idx[4] = [[abcd]]


    idx:       0     1     2       3        4       5   6                                   // Start looking from idx[1] = 'b'
            [ [[]], [], [[ab]], [[abc]], [[abcd]], [], [] ]                                 // no word in the wordBank starts with 'b', so skip
    target:    a     b     c       d        e       f                       


    idx:       0     1     2           3                4           5   6                   // Start looking from idx[2] = 'c' 
            [ [[]], [], [[ab]], [[[abc],[ab,c]], [[abcd],[ab,cd]], [], [] ]                 // cd >>> @ idx[2] = [[ab]] >>> add them [ab, cd] >>> idx[4] = [[abcd], [ab, cd]]
    target:    a     b     c           d                e           f                       // c >>> @ idx[2] = [[ab]] >>> add them [ab, c] >>> idx[3] = [[abc], [ab, c]]


    idx:       0     1     2           3                4           5            6                                          // Start looking from idx[3] = 'd' 
            [ [[]], [], [[ab]], [[[abc],[ab,c]], [[abcd],[ab,cd]], [], [[abc,def],[ab,c,def]] ]                             // def >>> @ idx[3] = [[abc],[ab,c]] >>> ... 
    target:    a     b     c           d                e           f                                                       // add them [abc, def] & [ab, c, def] >>> ... 
                                                                                                                            // idx[6] = [[abc,def],[ab,c,def]]


    idx:       0     1     2           3                4           5            6                                          // Start looking from idx[4] = 'e' 
            [ [[]], [], [[ab]], [[[abc],[ab,c]], [[abcd],[ab,cd]], [], [[abc,def],[ab,c,def],[abcd,ef],[ab,cd,ef]] ]        // ef >>> @ idx[4] = [[abcd],[ab,cd]] >>> ... 
    target:    a     b     c           d                e           f                                                       // add them [[abcd,ef],[ab,cd,ef]] >>> ... 
                                                                                                                            // idx[6] = [[abc,def],[ab,c,def],[abcd,ef],[ab,cd,ef]]

    ... no words in the wordBank start with 'f', so skip

    return array[target] = [[abc,def],[ab,c,def],[abcd,ef],[ab,cd,ef]]


    Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk

*/

const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombinations);
            }
        }
    }

    return table[target.length];
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
