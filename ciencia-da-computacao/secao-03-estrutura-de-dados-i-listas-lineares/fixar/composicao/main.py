from Pessoa import Pessoa
from Ventilador import Ventilador

ventilador_branco = Ventilador("Branco", potencia=230, tensao=110, preco=460)
pessoa = Pessoa("Maria", 500)
pessoa.comprar_ventilador(ventilador_branco)

print(pessoa)
