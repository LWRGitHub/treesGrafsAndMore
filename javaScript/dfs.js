//      5
//    /   \
//   3     6
//  / \     \
// 1   4     8
//    /     / \
//   2      7  11

class Node {
    constructor(val) {
        this.left = null;
        this.right = null;
        this.val = val
    }
}
  
  
let root = new Node(5);
root.left = new Node(3);
root.left.left = new Node(1);
root.left.right = new Node(4);
root.left.right.left = new Node(2);
root.right = new Node(6);
root.right.right = new Node(8);
root.right.right.left = new Node(7);
root.right.right.right = new Node(11);



const dfsInOrder = n =>{ // 1,3,2,4,5,6,7,8,11
    if(!n) return;
    dfsInOrder(n.left);
    console.log(n.val);
    dfsInOrder(n.right);
}

// dfsInOrder(root) 


const dfsPreOrder = n =>{ // 5,3,1,4,2,6,8,7,11
    if(!n) return;
    console.log(n.val);
    dfsPreOrder(n.left);
    dfsPreOrder(n.right);
}

// dfsPreOrder(root)

const dfsPostOrder = n =>{ // 1,2,4,3,7,11,8,6,5
    if(!n) return;
    dfsPostOrder(n.left);
    dfsPostOrder(n.right);
    console.log(n.val);
}

dfsPostOrder(root)