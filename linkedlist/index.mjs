// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

const Node = (value) => {
    let node = {
        data: value,
        next: null,
    };
    return node;
};

const insertNewNode = (root, item) => {
    var temp = Node(item);
    var ptr;

    if (root == null)
        root = temp;
    else {
        ptr = root;
        while (ptr.next != null)
            ptr = ptr.next;
        ptr.next = temp;
    }
    return root;
};

const createLinkedList = (arr) => {
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = insertNewNode(root, arr[i])
    }
    return root
};

//console.log(JSON.stringify(createLinkedList([12, 23, 43, 1, 23, 32])));
//console.log(createLinkedList([12]));

const insertInBeginning = (value) => {
    let linkedList = createLinkedList([12, 23, 43, 1, 23, 32]);
    let newNode = Node(value);
    newNode.next = linkedList;
    return newNode
};

//console.log(JSON.stringify(insertInBeginning(21)));

const insertInEnd = (value) => {
    let linkedList = createLinkedList([12, 23, 43, 1, 23, 32]);
    let newNode = Node(value);
    let node = linkedList;
    while (node.next != null) {
        node = node.next
    }

    node.next = newNode

    return linkedList;


}

// console.log(JSON.stringify(insertInEnd(21)))
//console.log(JSON.stringify(insertInEnd(5)))
insertInEnd(5)