#      5
#    /   \
#   3     6
#  / \     \
# 1   4     8
#    /     / \
#   2      7  11

class Node:
    def __init__(self, val):
        self.left = None
        self.right = None
        self.val = val

  
root = Node(5)
root.left = Node(3)
root.left.left = Node(1)
root.left.right = Node(4)
root.left.right.left = Node(2)
root.right = Node(6)
root.right.right = Node(8)
root.right.right.left = Node(7)
root.right.right.right = Node(11)


def bfs1(r):
    if not r: return
    q = [r]
    while q:
        n = q.pop(0)
        print(n.val)
        if n.left: q.append(n.left)
        if n.right: q.append(n.right)

# bfs1(root)

def bfs2(r):
    if not r: return
    q = [r]
    while q:
        n = q.pop(0)
        print(n.val)
        if n.left: q.append(n.left)
        if n.right: q.append(n.right)

# bfs2(root)

def bfs3(r):
    if not r: return
    q = [r]
    while q:
        n = q.pop(0)
        print(n.val)
        if n.left: q.append(n.left)
        if n.right: q.append(n.right)

bfs3(root)