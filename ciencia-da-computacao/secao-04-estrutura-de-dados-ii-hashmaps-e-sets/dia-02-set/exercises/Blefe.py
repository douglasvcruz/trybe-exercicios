clara = set([0, 1, 5, 9, 10])
marco = set([0, 2, 8, 9, 10])
redutorClara = 1
redutorMarco = 2

resultClara = max(clara.difference(marco)) - redutorClara
resultMarco = max(marco.difference(clara)) - redutorMarco

victory = print("Marco") if resultMarco > resultClara else print("Clara")

entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}


def redutor(p1, p2):
    return min(p1.difference(p2))


def biggest(p1, p2):
    return max(p1.difference(p2))


def pontuation(p1, p2):
    set_p1 = set(p1)
    set_p2 = set(p2)

    return biggest(set_p1, set_p2) - redutor(set_p1, set_p2)


def who_win(jogadas):
    jogadores = list(jogadas.keys())

    primeira_nota = pontuation(
        jogadas[jogadores[0]], jogadas[jogadores[1]]
    )

    segunda_nota = pontuation(
        jogadas[jogadores[1]], jogadas[jogadores[0]]
    )

    if primeira_nota > segunda_nota:
        return jogadores[0]

    elif primeira_nota < segunda_nota:
        return jogadores[1]

    else:
        return None


quem_ganhou = who_win(entrada)


if quem_ganhou:
    print(f"Quem ganhou: {quem_ganhou} ")

else:
    print("Deu empate")
