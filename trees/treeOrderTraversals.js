var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('val:' + getPostorderTree(createBasicTree()));
  })
  .listen(8084);

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

const arr = [];
const getInorderTree = (tree) => {
  if (tree === null) {
    return;
  }
  getInorderTree(tree.left);
  arr.push(tree.key);
  getInorderTree(tree.right);
  return arr;
};

const getPreorderTree = (tree) => {
  if (tree === null) {
    return;
  }
  arr.push(tree.key);
  getPreorderTree(tree.left);
  getPreorderTree(tree.right);
  return arr;
};

const getPostorderTree = (tree) => {
  if (tree === null) {
    return;
  }

  getPostorderTree(tree.left);
  getPostorderTree(tree.right);
  arr.push(tree.key);
  return arr;
};
