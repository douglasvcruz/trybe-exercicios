from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.numbers = numbers

    def media(self):
        return sum(self.numbers) / len(self.numbers)

    def mediana(self):
        numbers = sorted(self.numbers)
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            return (numbers[index - 1] + numbers[index]) / 2

        return numbers[index]

    def moda(self):
        number, _ = Counter(self.numbers).most_common()[0]
        return number


first_estatistica = Estatistica([5, 6, 10, 50, 20, 10])
print(f"A média é {first_estatistica.media()}")
print(f"A mediana é {first_estatistica.mediana()}")
print(f"A moda é {first_estatistica.moda()}")
