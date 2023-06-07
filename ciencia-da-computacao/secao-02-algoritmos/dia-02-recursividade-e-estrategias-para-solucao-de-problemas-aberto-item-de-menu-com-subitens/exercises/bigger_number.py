def bigger_number(list):
    bigger = list[0]
    for i in list:
        if i > bigger:
            bigger = i
    return bigger


print(bigger_number([5, 8, 12, 52, 11, 2, 6, 9, 25, 40]))


def biggest_number2(list, length):
    if length == 1:
        return list[0]
    else:
        bigger = biggest_number2(list, length - 1)
        if bigger > list[length - 1]:
            return bigger
        else:
            return list[length - 1]


def biggest_number2_aux(list):
    length = len(list)
    return biggest_number2(list, length)


print(biggest_number2_aux([1, 21, 300, 4, 57]))
