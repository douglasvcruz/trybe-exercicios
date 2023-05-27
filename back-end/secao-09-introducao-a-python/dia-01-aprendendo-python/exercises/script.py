import math


def maxValue(a, b):
    return max(a, b)


print(maxValue(5, 8))

list = [5, 9, 15, 1, 2, 6]


def average():
    return sum(list) / len(list)


print(average())


def asterisc(n):
    for row in range(n):
        print("*" * n)


asterisc(6)


newList = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maxCharacter():
    nameMax = newList[0]
    for new in newList:
        if len(new) > len(nameMax):
            nameMax = new
    return nameMax


print(maxCharacter())


# def paint_costs(area):
#     can_price = 80
#     required_liters = area / 3
#     required_cans = required_liters // 18
#     if required_liters % 18:
#         required_cans += 1
#     return required_cans, required_cans * can_price


def paint_costs(area):
    can_price = 80
    required_liters = area / 3
    required_cans = math.ceil(required_liters / 18)
    return required_cans, required_cans * can_price


print(paint_costs(40))


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
