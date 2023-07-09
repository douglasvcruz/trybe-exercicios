from Conjunto import Conjunto

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

# Quem ainda não entregou a lista1?
print(cStudent.diffence(cList1))
# Quem já entregou as duas listas?
print(cList1.intersection(cList2))
# Quem já entregou qualquer uma das duas listas?
print(cList1.union(cList2))
# Quem ainda não entregou nenhuma das listas?
print(cStudent.diffence(cList1.union(cList2)))
