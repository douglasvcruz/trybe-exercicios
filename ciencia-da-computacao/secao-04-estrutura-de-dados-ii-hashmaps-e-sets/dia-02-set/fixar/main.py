from Conjunto import Conjunto

if __name__ == "__main__":
    c1 = Conjunto()
    c2 = Conjunto()
    c3 = Conjunto()

    for item in [0, 10, 100, 1000]:
        c1.add(item)

    for item in [1, 2, 3]:
        c2.add(item)

    for item in [7, 2, 10]:
        c3.add(item)

    print(c1)
    print(c2)
    print(c3)

    c4 = c2.union(c3)
    c5 = c2.intersection(c3)
    c6 = c2.diffence(c3)
    c7 = c1.issubset(c2)

    print(c4)
    print(c5)
    print(c6)
    print(c7)
    print(1 in c1)
    print(0 in c1)

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]

    cStudent = Conjunto()
    cList1 = Conjunto()
    cList2 = Conjunto()

    for item in estudantes:
        cStudent.add(item)

    for item in lista1_entregues:
        cList1.add(item)

    for item in lista2_entregues:
        cList2.add(item)
