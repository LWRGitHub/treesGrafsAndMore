# https://docs.python.org/3/library/operator.html

class HashTable:
    def __init__(self):
        self.MAX = 10
        self.arr = [[] for i in range(self.MAX)]

    def get_hash(self, key):
        h = 0
        for char in key:
            h += ord(char)
            return h % self.MAX

    # __getitem__
    # access, ex: t["Someone"]
    def __getitem__(self, idx):
        h = self.get_hash(idx)
        return self.arr[h]

    # __setitem__ 
    # assigning, ex: t["Someone"] = 1
    def __setitem__(self, key, val): 
        h = self.get_hash(key)
        found = False
        for idx, e in enumerate(self.arr[h]):
            if len(e)==2 and e[0]==key:
                self.arr[h][idx] = (key, val)
                found = True
                break
        if not found:
            self.arr[h].append((key, val))
    
    # def __delitem__(self, key):
    #     h = self.get_hash(key)
    #     self.arr[h] = None


t = HashTable()

# t.add("Someone", 1)
# print(t.get("Someone"))

t["Someone"] = 1
print(t["Someone"])

t["Blablabal"] = 17654
t["trd 2"] = 5
t["kuyfguyg 32"] = 7543

# del t["Someone"]
# print(t["Someone"])

print(t.arr)