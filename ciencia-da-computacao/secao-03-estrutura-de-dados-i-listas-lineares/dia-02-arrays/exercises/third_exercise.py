# Exemplo 1:
produtos1 = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
produtos2 = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def product_combination(product):
    times = 0
    for i in range(len(product)):
        for j in range(i + 1, len(product)):
            if product[i] == product[j]:
                times += 1
    return times


print(product_combination(produtos1))
print(product_combination(produtos2))

# Complexidade O(n²)
