const Node = (value) => {
    let node = {
        value: value,
        next: null
    }

    return node;
}

const insertNode = (ll, value) => {
    ll.next = Node(value);
    return ll;
};

let head = Node(23);
//console.log(insertNode(head, 2));

const anotherNodeInBeginning = (ll, value) => {
    let node = Node(value);
    node.next = ll;
    return node;
}
const anotherNodeInLast = (linkedList, value) => {
    let ll = linkedList;
    if (ll === null) {
        ll = Node(value)
        return ll;
    }
    let newNode = Node(value);
    let last = ll;
    while (last.next != null) {
        last = last.next
    }
    last.next = newNode;
    return ll;
}


// console.log(anotherNodeInBeginning(head, 45))
// console.log(anotherNodeInLast(head, 45))

const convertArrayToLinkedList = (arr) => {

    let head = null;
    for (let i = 0; i < arr.length; i++) {
        head = anotherNodeInLast(head, arr[i])
    }
    return head;
}

//console.log(JSON.stringify(convertArrayToLinkedList([12, 13, 14, 15])))

const findNodeAtIndex = (linkedList, index) => {
    let counter = 0;
    let last = linkedList;
    while (last.next != null) {

        if (counter === index) {
            return last.value
        }
        last = last.next
        counter++;
    }
    return -1;
}

//console.log(JSON.stringify(findNodeAtIndex(convertArrayToLinkedList([12, 13, 14, 15]), 4)))

const findNodeAndInsertNewNode = (linkedList, oldValue, newValue) => {
    let newNode = Node(newValue);
    let ll = linkedList;
    let counter = 0;
    while (ll.next != null) {
        if (ll.value === oldValue) {
            newNode.next = ll.next
            ll.next = newNode;
            console.log(counter)
        }
        ll = ll.next;
        counter++
    }
    if (ll.value === oldValue) {
        ll.next = newNode
    }
    return linkedList;
}

//console.log(JSON.stringify(findNodeAndInsertNewNode(convertArrayToLinkedList([12, 13, 14, 15]), 14, 16)))

const deleteNodeFromBeginning = (linkedList) => {
    let head = linkedList;
    let temp = head;
    head = head.next
    temp = null
    return head

}

//console.log(JSON.stringify(deleteNodeFromBeginning(convertArrayToLinkedList([12, 13, 14, 15]))))

const deleteFromEnd = (linkedList) => {
    let head = linkedList;
    while (head.next != null) {
        let prev = head;
        head = head.next;
        console.log(head, prev)
        if (head.next === null) {
            prev.next = null;
        }
    }
    return linkedList
}

console.log(JSON.stringify(deleteFromEnd(convertArrayToLinkedList([12, 13, 14, 15]))))