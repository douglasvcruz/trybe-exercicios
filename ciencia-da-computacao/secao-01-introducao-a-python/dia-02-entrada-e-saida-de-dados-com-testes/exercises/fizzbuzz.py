# def fizzbuzz(number):
#     if (number % 3 == 0 and number % 5 == 0):
#         print('FizzBuzz')
#     elif (number % 3 == 0):
#         print('Fizz')
#     elif (number % 5 == 0):
#         print('Buzz')


def fizzbuzz(n):
    numbers = []
    for number in range(1, n + 1):
        if number % 15 == 0:
            numbers.append("FizzBuzz")
        elif number % 3 == 0:
            numbers.append("Fizz")
        elif number % 5 == 0:
            numbers.append("Buzz")
        else:
            numbers.append(number)
    return numbers
