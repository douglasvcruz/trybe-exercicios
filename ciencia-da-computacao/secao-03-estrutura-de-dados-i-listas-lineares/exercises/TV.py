class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligado = False

    def __str__(self):
        return (
            f"Volume: {self.__volume}, Canal: {self.__canal}, "
            f"Tamanho: {self.__tamanho}, Ligado: {self.__ligado}"
        )

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            print("Volume máximo atingido!")

    def diminuir_volume(self):
        if self.__volume > 0:
            self.__volume -= 1
        else:
            print("Volume mínimo atingido!")

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError("Canal indisponível")

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligado = not self.__ligado


first_television = TV(40)
print(first_television)
first_television.ligar_desligar()
first_television.aumentar_volume()
first_television.modificar_canal(5)
print(first_television)
