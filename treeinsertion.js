var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('val:' + setup());
  })
  .listen(8084);

const TreeNode = (value) => {
  return (obj = {
    key: value,
    left: null,
    right: null,
  });
};

const createTree = () => {
  let root = null;
  root = new TreeNode(10);
  root.left = new TreeNode(20);
  root.right = new TreeNode(30);
  root.right.right = new TreeNode(40);
  return root;
};

const nodeToAdd = new TreeNode(50);
const setup = (node) => {
  let tree = createTree();

  if (tree == null) {
    root = node;
    return;
  }

  let queue = [];
  queue.push(tree);

  if (tree.left === null) {
    tree = queue.pop();
    tree.left = node;
    return;
  } else {
    queue.push(temp.left);
  }
};
const insertNode = (node) => {};
