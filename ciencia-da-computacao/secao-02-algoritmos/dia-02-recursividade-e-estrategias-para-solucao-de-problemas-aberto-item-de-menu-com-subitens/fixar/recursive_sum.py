def sum(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum(n - 1)


# print(sum(10))


def fibonacci(num):  # nome da função e parâmetro
    if num <= 1:  # condição de parada
        return num
    else:
        return fibonacci(num - 2) + fibonacci(num - 1)


print(fibonacci(6))
