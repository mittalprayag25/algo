var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('val:' + setup());
  })
  .listen(8084);

const TreeNode = (value) => {
  let node = {
    key: value,
    left: null,
    right: null,
  };
  return node;
};

function createSimpleTree() {
  let root = TreeNode(10);
  root.left = TreeNode(20);
  root.right = TreeNode(30);
  root.left.left = TreeNode(50);
  root.left.left.left = TreeNode(50);
  root.left.left.left.left = TreeNode(50);

  return root;
}

function calculateHeight(root) {
  let leftCount = 0;
  let rightCount = 0;
  if (root.left) {
    leftCount += 1;
  }
  if (root.right) {
    rightCount += 1;
  }

  if (root.left && root.left.left) {
    leftCount += calculateHeight(root.left);
  }
  if (root.right && root.right.right) {
    rightCount += calculateHeight(root.right);
  }

  return Math.max(leftCount, rightCount);
}

function calculateDiameter() {}

function setup() {
  return calculateHeight(createSimpleTree());
}
