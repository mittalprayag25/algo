var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.end('val:' + heightOfTree(createBasicTree()));
    res.end('val:' + maximumNodesInTree(createBasicTree()));
  })
  .listen(8084);

/*  types of Binary tree
    1. Full Binary Tree : 
      A Binary Tree is a full binary tree if every node has 0 or 2 children. 
      The following are the examples of a full binary tree


               18
            /     \  
          40       30  
                   /  \
                 100   40

    2. Complete Binary Tree
      A complete binary tree is just like a full binary tree, but with two major differences:
      Every level must be completely filled
      All the leaf elements must lean towards the left.
      The last leaf element might not have a right sibling i.e. 
      a complete binary tree doesn’t have to be a full binary tree.
          18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40
     /  \   /
    8   7  9 

    3. Perfeect Binary Tree
      A Binary tree is a Perfect Binary Tree in which all the internal nodes have two children and 
      all leaf nodes are at the same level. 
      It is a Full Binary Tree: just that all leaf nodes at same level
              18
           /       \  
         15         30  
        /  \        /  \
      40    50    100   40


               18
           /       \  
         15         30 

    4. Balanced Binary tree
      It is a type of binary tree in which the difference between the 
      height of the left and the right subtree for each node is either 0 or 1

    5. Degenerate Binary Tree
        10
          /
        20
        \
        30
          \
          40  
    6. Skewed Binary Tree
*/
const Node = (value) => {
  const node = {};
  node.key = value;
  node.left = null;
  node.right = null;
  return node;
};

const createBasicTree = () => {
  const root = Node(4);
  root.left = Node(10);
  root.right = Node(20);
  root.left.left = Node(40);
  root.left.right = Node(45);
  root.right.left = Node(60);
  root.right.right = Node(65);
  root.right.right.left = Node(95);
  root.right.right.left.right = Node(5);

  return root;
};

let leftHeight = 1; // Tree with Height 1 have single root node
let rightHeight = 1;

const heightOfTree = (tree) => {
  if (tree.left) {
    leftHeight += 1;
    heightOfTree(tree.left);
  }
  if (tree.right) {
    rightHeight += 1;
    heightOfTree(tree.right);
  }

  if (leftHeight > rightHeight) {
    return leftHeight;
  } else {
    return rightHeight;
  }
};

const maximumNodesInTree = (tree) => {
  const height = heightOfTree(tree);
  return Math.pow(2, height) - 1;
};
