var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let stack = Stack();
    addItem(stack, 20);
    addItem(stack, 19);
    addItem(stack, 1);
    addItem(stack, 9);
    addItem(stack, 23);
    addItem(stack, 43);
    removeItem(stack, 1);
    res.end('val:' + stack);
  })
  .listen(8084);

const Stack = () => {
  return [];
};

function addItem(stack, number) {
  stack.push(number);
  return stack;
}
function removeItem(stack, count) {
  while (count > 0) {
    stack.pop();
    count--;
  }
  return stack;
}
