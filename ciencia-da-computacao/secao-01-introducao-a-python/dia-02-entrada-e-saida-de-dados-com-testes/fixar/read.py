students = []
with open("arquivo.txt") as grades:
    for line in grades:
        student_grade = line.split(" ")
        if int(student_grade[1]) < 6:
            students.append(student_grade[0] + "\n")


with open("recuperation.txt", mode="w") as recuperation:
    print(students)
    recuperation.writelines(students)
