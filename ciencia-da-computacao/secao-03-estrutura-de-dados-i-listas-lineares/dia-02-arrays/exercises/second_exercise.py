# Exemplo 1:
cartas1 = [2, 6, 4, 5]
# cartas por parte = 2
# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas2 = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3
# resultado = [1, 7, 4, 6, 4, 6]

# Exemplo 3:
cartas3 = [1, 4, 4, 7, 6, 6, 5]


def shuffle(items):
    answer = []
    div_cards_by_two = len(items) // 2
    for offset in range(div_cards_by_two):
        answer.extend(items[offset::div_cards_by_two])
    return answer


print(shuffle(cartas1))
print(shuffle(cartas2))
print(shuffle(cartas3))

# Complexidade O(n)
