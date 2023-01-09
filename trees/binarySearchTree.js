var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.end('val:' + JSON.stringify(insertInBST(createBasicTree(), 43)));
    res.end('val:' + JSON.stringify(deleteInBST(createBasicTree(), 45)));
  })
  .listen(8084);

const Node = (value) => {
  let tree = {};
  tree.key = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

const createBasicTree = () => {
  const root = Node(40);
  root.left = Node(35);
  root.right = Node(45);
  root.left.left = Node(34);
  root.left.right = Node(36);
  root.right.left = Node(44);
  root.right.right = Node(46);
  return root;
};

const searchInBST = (tree, value) => {
  if (tree === null) {
    return false;
  }

  if (tree.key === value) {
    return true;
  }

  if (value < tree.key) {
    return searchInBST(tree.left, value);
  } else if (value > tree.key) {
    return searchInBST(tree.right, value);
  }

  return false;
};

const insertInBST = (tree, value) => {
  if (tree === null) {
    tree = Node(value);
    return tree;
  }

  if (value < tree.key) {
    tree.left = insertInBST(tree.left, value);
  }
  if (value > tree.key) {
    tree.right = insertInBST(tree.right, value);
  }

  return tree;
};

const deleteInBST = (tree, value) => {
  if (tree === null) {
    return false;
  }

  if (tree.key === value) {
    return null;
  }

  if (value < tree.key) {
    tree.left = deleteInBST(tree.left, value);
  }
  if (value > tree.key) {
    tree.right = deleteInBST(tree.right, value);
  }

  return tree;
};
