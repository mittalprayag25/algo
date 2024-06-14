const Node = (value) => {
    let node = { value: value, next: null };
    return node;
}

const createNode = (value) => {
    let head = Node(value)
    return head;
}

//console.log(createNode(21))

const addAntherNode = (value) => {
    let list = createNode(21);
    let newNode = Node(value);
    list.next = newNode;
    return list;
}

let ll = addAntherNode(23);
//console.log(addAntherNode(23))

const addNodeToLinkedListInEnd = (linkedList, value) => {
    let last = linkedList;
    while (last.next != null) {
        last = last.next
    }
    last.next = Node(value)
    return linkedList;
}

//console.log(addNodeToLinkedListInEnd(ll, 5))

const addNodeInBeginning = (linkedList, value) => {
    let ll = linkedList;
    let newNode = Node(value);
    newNode.next = ll;
    return newNode
}

console.log(addNodeInBeginning(ll, 5))