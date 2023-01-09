var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('val:' + createBasicTree());
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
  root.right.right = Node(60);

  return root;
};
