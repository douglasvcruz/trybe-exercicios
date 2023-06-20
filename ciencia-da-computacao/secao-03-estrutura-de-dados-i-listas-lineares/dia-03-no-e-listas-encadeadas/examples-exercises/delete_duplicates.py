from linked_list_content import LinkedList


def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements

# Complexidade O(n)


class DoublyLinkedList:
    # ...
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1

# O método index_of percorre a lista toda.
# Por isso sua Complexidade de tempo é O(n).

# O método delete_duplicates passa a lista toda para procurar itens duplicados.
# Por isso sua Complexidade de tempo é O(n)
