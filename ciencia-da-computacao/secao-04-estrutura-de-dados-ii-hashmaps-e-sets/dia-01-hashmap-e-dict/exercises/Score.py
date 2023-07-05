def score(subordinates, manager):
    total_sum = 1

    for subordinate in subordinates[manager]:
        total_sum += score(subordinates, subordinate)

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

print(score(subordinates, 1))
print(score(subordinates, 2))
print(score(subordinates, 3))
print(score(subordinates, 4))
print(score(subordinates, 5))
print(score(subordinates, 6))
print(score(subordinates, 7))

# Complexidade O(n)
