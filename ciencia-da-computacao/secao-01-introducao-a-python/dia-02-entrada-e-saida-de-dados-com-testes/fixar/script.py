def name_in_vertical(name):
    for letters in name:
        print(letters)


name_in_vertical("Douglas")

array = [2, 5, 2, 6, 8, "e", 9, "g"]


def sum_natural_values(numbers):
    sum = 0
    for number in numbers:
        if type(number) == int:
            sum += number
        else:
            print(f"Erro ao somar valores, {number} é um valor inválido")
    print(sum)


sum_natural_values(array)


nums = input("Insira valores aqui, separados por espaço: ")

nums_arr = nums.split(" ")

sum = 0
for num in nums_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
