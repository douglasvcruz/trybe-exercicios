class Hierarchy:
    def __init__(self, subordinates):
        self.hierarchy = {}
        self.subordinates = subordinates

    def score(self, manager):
        total_sum = 1

        if manager in self.hierarchy:
            print("Já calculei esse score antes")
            return self.hierarchy[manager]

        for subordinate in self.subordinates[manager]:
            total_sum += self.score(subordinate)
        self.hierarchy[manager] = total_sum

        return total_sum


subordinates = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [5, 6],
    5: [7],
    6: [],
    7: [],
}

hierarchy = Hierarchy(subordinates)
print(hierarchy.score(1))
print(hierarchy.score(2))
print(hierarchy.score(3))
print(hierarchy.score(4))
print(hierarchy.score(5))
print(hierarchy.score(6))
print(hierarchy.score(7))

# O método score faz uma iteração sobre o parâmetro subordinates,
# portanto possui Complexidade de Tempo O(n).
