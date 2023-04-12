
# YouTube (2022) Breadth-first search in 4 minutes: https://www.youtube.com/watch?v=HZ5YTanv5QE


graph = {
    'A': ['B','C'],
    'B': ['D', 'E', 'F'],
    'C': ['G'],
    'D': [],
    'E': [],
    'F': ['H'],
    'G': ['I'],
    'H': [],
    'I': [],
}


def bfs(graph, node):
    visited = [node]
    queue = [node]

    while queue:
        s = queue.pop(0)
        print(s, end=" ")

        for neighbour in graph[s]:

            if neighbour not in visited:
                visited.append(neighbour)
                queue.append(neighbour)

bfs(graph, 'A')