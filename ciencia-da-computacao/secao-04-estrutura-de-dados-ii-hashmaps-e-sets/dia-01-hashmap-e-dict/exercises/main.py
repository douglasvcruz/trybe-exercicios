from Employee import Employee
from HashMap import HashMap

if __name__ == "__main__":
    employees = [(14, 'name1'), (23, 'name2'), (10, 'name3'), (9, 'name4')]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(23))
    registry.update_value(10, "name30")
    print(registry.get_value(10))
