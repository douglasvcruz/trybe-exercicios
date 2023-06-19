from Secador import Secador
from Batedeira import Batedeira
from Maquina_de_lavar import MaquinaDeLavar

secador = Secador("Preto", "600", "220", "500")
batedeira = Batedeira("Branco", "300", "110", "600")
maquina_de_lavar = MaquinaDeLavar("Roxo", "100", "220", "0")

print(f"Cor do secador: {secador.cor}, preço: {secador.preco}.")
print(f"Cor da batedeira: {batedeira.cor}, preço: {batedeira.preco}.")
print(
    f"Cor da maquina de lavar: {maquina_de_lavar.cor}, "
    f"preço: {maquina_de_lavar.preco}."
)
