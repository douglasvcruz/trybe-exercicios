def count_numbers(n):
    count = 0
    for i in range(1, n + 1):
        if i % 2 == 0:
            count += 1
    return count


print(count_numbers(10))


def count_numbers2(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_numbers2(n - 1)
    else:
        return count_numbers2(n - 1)


print(count_numbers2(6))
