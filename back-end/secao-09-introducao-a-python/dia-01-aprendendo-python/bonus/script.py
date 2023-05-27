list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(min(list))

for index in range(6):
    print(index * "*")


def totalSum(n):
    result = 0
    for index in range(n + 1):
        result += index
    return result


print(totalSum(5))


def fuel_price(type, liters):
    if type == "A":
        price = 1.90
        discount = 0.03
        if liters > 20:
            discount = 0.05
    elif type == "G":
        price = 2.50
        discount = 0.04
        if liters > 20:
            discount = 0.06
    total = price * liters
    total -= total * discount
    return total
