from Employee import Employee
from HashMap import HashMap

employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
registry = HashMap()

for first, second in employees:
    employee = Employee(first, second)
    registry.insert(employee)

registry.get_value(23)
registry.update_value(23, "name30")
registry.get_value(23)
