package main

//      5
//    /   \
//   3     6
//  / \     \
// 1   4     8
//    /     / \
//   2      7  11

// Node reporesents the componets of a binary search tree
type Node struct {
	Val   int
	Left  *Node
	Right *Node
}

func main() {
	root := &Node{Val: 5}
	root.Left = &Node{Val: 3}
	root.Left.Left = &Node{Val: 1}
	root.Left.Right = &Node{Val: 4}
	root.Left.Right.Left = &Node{Val: 2}
	root.Right = &Node{Val: 6}
	root.Right.Right = &Node{Val: 8}
	root.Right.Right.Left = &Node{Val: 7}
	root.Right.Right.Right = &Node{Val: 11}

	// bfs1(root)
	bfs2(root)
}

func bfs1(root *Node) {
	if root == nil {
		return
	}
	queue := []*Node{root}
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		println(node.Val)
		if node.Left != nil {
			queue = append(queue, node.Left)
		}
		if node.Right != nil {
			queue = append(queue, node.Right)
		}
	}
}

func bfs2(r *Node) {
	if r == nil {
		return
	}
	q := []*Node{r}
	for len(q) > 0 {
		n := q[0]
		q = q[1:]
		println(n.Val)
		if n.Left != nil {
			q = append(q, n.Left)
		}
		if n.Right != nil {
			q = append(q, n.Right)
		}
	}
}
