class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):
        self.__cor = cor
        self.__potencia = potencia
        self.__tensao = tensao
        self.preco = preco
        self.__ligado = False

    def cor(self):
        return self.__cor
