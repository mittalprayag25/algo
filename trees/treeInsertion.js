var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('val:' + createBasicTree());
  })
  .listen(8084);

const CreateNode = (value) => {
  const node = {};
  node.key = value;
  node.left = null;
  node.right = null;
  return node;
};

const createBasicTree = () => {
  const root = CreateNode(4);
  root.left = CreateNode(10);
  root.right = CreateNode(20);
  root.left.left = CreateNode(40);
  root.right.right = CreateNode(60);
  return root;
};

const insertNode = (value, tree) => {
  if (tree === null) {
    tree = CreateNode(value);
    return tree;
  }

  if (tree.left === null) {
    return insertNode(value, tree.left);
  }
};
