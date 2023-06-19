# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado --> 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado --> 4

valores_coletados3 = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1]
# resultado --> 5


def verify(values):
    bigger = 0
    times = 0
    for value in values:
        if value == 1:
            times += 1
        else:
            if (bigger < times):
                bigger = times
            times = 0

    if (bigger < times):
        bigger = times

    return bigger


print(verify(valores_coletados1))
print(verify(valores_coletados2))
print(verify(valores_coletados3))

# Complexidade O(n)
