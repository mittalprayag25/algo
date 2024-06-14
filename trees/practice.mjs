const Node = (value) => {
    let node = {
        key: value,
        left: null,
        right: null
    }
    return node
}

const createBasicBinaryTree = () => {
    let root = Node(10);
    root.left = Node(5);
    root.right = Node(15);
    return root;
}

//console.log(createBasicBinaryTree())

const createBinarySearchTree = () => {
    let root = Node(10);
    root.left = Node(5);
    root.right = Node(15);
    root.left.left = Node(4);
    root.left.right = Node(6);
    root.right.left = Node(14);
    root.right.right = Node(16)

    return root;
}

let bst = createBinarySearchTree();
//console.log(bst)

const insertInBST = (tree, value) => {
    if (value < tree.key) {
        if (tree.left === null) {
            tree.left = Node(value)
        } else {
            insertInBST(tree.left, value)
        }
    }
    if (value > tree.key) {
        if (tree.right === null) {
            tree.right = Node(value)
        } else {
            insertInBST(tree.right, value)
        }
    }
    console.log(tree)
    return tree;
    // if (value < tree.key) {
    //     insertinBST(tree.left, value)
    // }
    // if (value > tree.key) {
    //     insertinBST(tree.right, value)
    // }
}

console.log(JSON.stringify(insertInBST(createBasicBinaryTree()), 17))