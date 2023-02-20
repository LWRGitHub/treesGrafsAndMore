


// Given two integers represented as linked lists.
// Return their sum as a linked list.
// 1 - > 4 -> 2    +      7 -> 7 -> 3      =       9 -> 1 -> 5

class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const list1 = [1, 4, 2].map(n => new ListNode(n));
  for (let i = 0; i < list1.length - 1; i++) {
    list1[i].next = list1[i + 1];
  }
  const list2 = [7, 7, 3].map(n => new ListNode(n));
  for (let i = 0; i < list2.length - 1; i++) {
    list2[i].next = list2[i + 1];
  }
  const result1 = [9, 1, 5].map(n => new ListNode(n));
  for (let i = 0; i < result1.length - 1; i++) {
    result1[i].next = result1[i + 1];
  }
  const head1 = list1[0];
  const head2 = list2[0];
  
  const list3 = [3, 3, 0].map(n => new ListNode(n));
  for (let i = 0; i < list3.length - 1; i++) {
    list3[i].next = list3[i + 1];
  }
  const list4 = [7, 7, 0].map(n => new ListNode(n));
  for (let i = 0; i < list4.length - 1; i++) {
    list4[i].next = list4[i + 1];
  }
  const result2 = [1, 1, 0, 0].map(n => new ListNode(n));
  for (let i = 0; i < result2.length - 1; i++) {
    result2[i].next = result2[i + 1];
  }
  
  // 1. convert the 2 linkedlists into arrays
  // 2. iterate backwards the 2 array simulatenously
  // 3. while iterating backwards, add the values up
  // 4. if values are greater than 10, we will store a auxilary var called carr (carry), which is defaulted to 0, but now we set to 1
  // 5. the next iteration will add the cary plus the values
  // [1,4,2] + [7,7,3]
function sumLinkedList(head1, head2) {
    const arr1 = [];
    const arr2 = [];
    const ansArr = [];
    while (head1 || head2) {
        arr1.push(head1.val);
        head1 = head1.next;
        arr2.push(head2.val);
        head2 = head2.next;
        ansArr.push(0);
    }
    let carry = 0;
    const lgArr = arr1.length > arr2.length ? arr1.length : arr2.length
    for(let i = lgArr-1; i >= 0; i--){
        const sum = arr1[i] + arr2[i] + carry;
        if(sum > 9){
            ansArr[i] = sum % 10;
            carry = 1;
        } else {
            ansArr[i] = sum;
            carry = 0;
        }
    }
    if(carry == 1) ansArr.unshift(carry);
    console.log(ansArr)
    const ansL = ansArr.map(n => new ListNode(n));
    for (let i = 0; i < ansL.length - 1; i++) {
        ansL[i].next = ansL[i + 1];
    }
    return ansL;
}

sumLinkedList(head1, head2) // [ 9, 1, 5 ]
sumLinkedList(list3[0], list4[0]) // [ 1, 1, 0, 0 ]
  
// console.log(sumLinkedList(head1, head2)); // result1[0]
// console.log(sumLinkedList(list3[0], list4[0])); // result2[0]
  
  
  
  
  
  //  Given a binary tree, return the nodes visible from the
  //  left side (the leftmost node in each row)
  
  //   5
  //  /  \
  // 6    8
  //        \
  //         9
  //        / \
  //        3  4
  
  // input Node
  // output Array<Node>
  
  class Node {
    constructor(val) {
      this.left = null;
      this.right = null;
      this.val = val;
    }
  }
  
  // const root = new Node()
  
//   const bfsRL = (root) => {
//     if (!root) return;
//     q = [root];
//     let pri;
//     const arr = [root];
//     while (q.length !== 0) {
//       n = q.shift();
//       if (n.left) {
//         if (pri) arr.push(pri)
//         arr.push(n.left);
//         q.push(n.left);
//       }
//       pri = n
//       if (n.right) {
//         q.push(n.right);
  
//       }
//     }
//     return arr;
//   }
  
  //    a
  //  b   c
  //     d  e
  //    x y   f

//     a
//  b     c
//       d  e
//           f
  
  // dfs and keep track of the depth, if it is a depth already visited,
  // then we know that we already tracked the left most node already
  


const leftN = (r, ans=[]) =>{
    let [dep, nDep, seenN] = [0,1,false]
    const dfs = (n) =>{
        if(!n) return;
        if(dep < nDep){
            ans.push(n);
            dep++;
        } 
        if(n.left) {
            nDep++;
            dfs(n.left)
        } else if(n.right) {
            nDep++;
            dfs(n.right);
            seenN = true;
        }
        if(n.right && !seenN) dfs(n.right)
        seenN = false;
    }
    dfs(r)
    return ans;
}


// dfsLeftN(root)

  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  a.left = b;
  a.right = c;
  c.left = d;
  c.right = e;
  e.right = f;
  
  const root = a;

//   console.log(leftN(root).map(n => n.val)); // expect [a,b,d,f]