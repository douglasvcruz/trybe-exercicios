name = "PEDRO"

for letters in range(len(name)):
    for index in range(len(name) - letters):
        print(name[index], end="")
    print()
