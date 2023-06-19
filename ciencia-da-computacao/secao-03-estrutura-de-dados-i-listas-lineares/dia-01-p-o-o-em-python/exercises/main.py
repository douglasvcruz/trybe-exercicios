from Quadrado import Quadrado
from Retangulo import Retangulo
from Circulo import Circulo

quadrado = Quadrado(5)
retangulo = Retangulo(2, 5)
circulo = Circulo(4)

print(f"Área do Quadrado: {quadrado.area()}")
print(f"Perímetro do Quadrado: {quadrado.perimetro()}")
print()
print(f"Área do Retangulo: {retangulo.area()}")
print(f"Perímetro do Retangulo: {retangulo.perimetro()}")
print()
print(f"Área do Circulo: {circulo.area()}")
print(f"Perímetro do Circulo: {circulo.perimetro()}")
