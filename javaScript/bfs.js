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
  
function bfs1(root) {
    if (root == null) return null;
    let queue = [];
    let arr = [];
    queue.push(root);
    while (queue.length !== 0) {
        let curr = queue.shift();
        arr.push(curr.val)
        console.log(curr.val);
        if (curr.left !== null) {
            queue.push(curr.left);
        }
        if (curr.right !== null) {
            queue.push(curr.right);
        }
    }
    return arr;
}

// console.log(bfs1(root))

const bfs2 = (root) =>{
    if(!root) return null;
    let q = [root];
    while(q.length !== 0){
        let node = q.shift();
        console.log(node.val);
        if(node.left) q.push(node.left);
        if(node.right) q.push(node.right);
    }
}

// bfs2(root);

const bfs3 = r =>{
    if(!r) return;
    const q = [r];
    while(q.length !== 0){
        const n = q.shift();
        console.log(n.val);
        if(n.left) q.push(n.left);
        if(n.right) q.push(n.right);
    }
}

// bfs3(root);


const bfs = r =>{
    if(!r) return;
    const q = [r];
    while(q.length !== 0){
        const n = q.shift();
        console.log(n.val);
        if(n.left) q.push(n.left);
        if(n.right) q.push(n.right);
    }
}

bfs(root);