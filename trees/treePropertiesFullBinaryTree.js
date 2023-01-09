var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('val:' + ifFullBinary(createBasicTree()));
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
  // root.left.right = Node(45);
  // root.right.left = Node(60);
  // root.right.right = Node(65);
  // root.right.right.left = Node(95);
  // root.right.right.left.right = Node(5);

  return root;
};

const ifFullBinary = (tree) => {
  let isLeftFullBinary = false;
  let isRightFullBinary = false;
  if (tree === null || (tree.left === null && tree.right === null)) {
    return true;
  }
  if (tree.left) {
    isLeftFullBinary = ifFullBinary(tree.left);
  }
  if (tree.right) {
    isRightFullBinary = ifFullBinary(tree.right);
  }
  if (isLeftFullBinary && isRightFullBinary) {
    return true;
  }
  return false;
};
