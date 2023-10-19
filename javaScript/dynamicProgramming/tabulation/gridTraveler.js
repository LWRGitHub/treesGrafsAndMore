/*

    Problem: Grid Traveler
    Say that you are a traveler on a 2D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner.
    You may only move down or right.
    In how many ways can you travel to the goal on a grid with dimensions m * n?
    Write a function gridTraveler(m, n) that calculates this.


    girdTraveler(3,3) => 6

    Tabulation:

    NOTE: 
        - a 0 by 0 grid has 0 ways to travel
        - a 1 by 1 grid has 1 way to travel
        - Tabulation works by adding the node your at to the node to the right and the node below it

   idx:   0  1  2  3
      0 [ 0, 0, 0, 0]
      1 [ 0, 0, 0, 0]
      2 [ 0, 0, 0, 0]
      3 [ 0, 0, 0, 0]

        [ 0, 0, 0, 0]           >>> seed with 1 @ idx 1 
        [ 0, 1, 0, 0]      
        [ 0, 0, 0, 0]      
        [ 0, 0, 0, 0]      

        [(0)>,0, 0, 0]          >>> add 0 to idx[0][1] & idx[1][0]
          ˅       
        [ 0, 1, 0, 0]      
        [ 0, 0, 0, 0]      
        [ 0, 0, 0, 0]  
        
        ... add all 0's in idx[0] to the right and below

        [ 0,  0, 0, 0]          >>> add 0 to idx[0][1] & idx[1][0]
        [(0)>,1, 0, 0]  
          ˅  
        [ 0,  0, 0, 0]      
        [ 0,  0, 0, 0]  

        [ 0, 0,  0, 0]          >>> add 1 to idx[1][2] & idx[2][1]
        [ 0,(1)>,1, 0]  
             ˅  
        [ 0, 1,  0, 0]      
        [ 0, 0,  0, 0]  

        ... Continue adding 1 to the right and below tell you reach idx[1][3]

        [ 0, 0,  0, 0]          >>> add 1 to idx[2][2] & idx[3][1]
        [ 0, 1,  1, 1]    
        [ 0,(1)>,2, 1]      
             ˅
        [ 0, 1,  0, 0] 

        [ 0, 0, 0,  0]          >>> add 2 to idx[2][3] & idx[3][2]
        [ 0, 1, 1,  1]    
        [ 0, 1,(2)>,3]      
                ˅
        [ 0, 1, 2,  0] 

        [ 0, 0, 0, 0]           >>> add 3 to idx[3][3]
        [ 0, 1, 1, 1]    
        [ 0, 1, 2,(3)]      
                   ˅
        [ 0, 1, 2, 3] 

        [ 0,  0, 0, 0]          >>> add 0 to idx[3][1]
        [ 0,  1, 1, 1]    
        [ 0,  1, 2, 3] 
        [(0)>,1, 2, 3] 

        [ 0, 0,  0, 0]          >>> add 1 to idx[3][2]
        [ 0, 1,  1, 1]    
        [ 0, 1,  2, 3] 
        [0, (1)>,3, 3] 

        [ 0, 0, 0,  0]          >>> add 3 to idx[3][3]
        [ 0, 1, 1,  1]    
        [ 0, 1, 2,  3] 
        [ 0, 1,(3)>,6]  -> 6    ***Answer @ idx[3][3]***

        Alvin Zablan (Dec. 3, 2020) YouTube; Dynamic Programming - Learn to Solve Algorithmic Problems & Coding Challenges: https://www.youtube.com/watch?v=oBt53YbR9Kk
*/


const gridTraveler = (m, n) => {
    const table = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }
    return table[m][n];
}

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220