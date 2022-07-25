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

def dfs_in_order(n): # 1,3,2,4,5,6,7,8,11
    if not n: return
    dfs_in_order(n.left)
    print(n.val)
    dfs_in_order(n.right)

print("dfs_in_order: ")
dfs_in_order(root)
print("")


def dfs_preorder(n): # 5,3,1,4,2,6,8,7,11
    if not n: return
    print(n.val)
    dfs_preorder(n.left)
    dfs_preorder(n.right)

print("dfs_preorder: ")
dfs_preorder(root)
print("")

def dfs_post_order(n): # 1,2,4,3,7,11,8,6,5
    if not n: return
    dfs_post_order(n.left)
    dfs_post_order(n.right)
    print(n.val)

print("dfs_post_order: ")
dfs_post_order(root)
print("")


