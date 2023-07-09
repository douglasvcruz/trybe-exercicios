class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        result = "{"

        for i, is_true in enumerate(self.set):
            if is_true:
                result += str(i)
                if i < self.last_element:
                    result += ", "

        result += "}"
        return result

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjunto_b):
        conj = Conjunto()

        for i in range(1001):
            if self.set[i] or conjunto_b.set[i]:
                conj.add(i)

        return conj

    def intersection(self, conjunto_b):
        conj = Conjunto()

        for i in range(1001):
            if self.set[i] and conjunto_b.set[i]:
                conj.add(i)

        return conj

    def diffence(self, conjunto_b):
        conj = Conjunto()

        for i in range(1001):
            if self.set[i] and not conjunto_b.set[i]:
                conj.add(i)

        return conj

    def issubset(self, conjunto_b):
        for i in range(1001):
            if self.set[i] and not conjunto_b.set[i]:
                return False

        return True

    def issuperset(self, conjunto_b):
        for i in range(1001):
            if conjunto_b.set[i] and not self.set[i]:
                return False

        return True
