var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let reverseOfArray = reverseArray([1, 2, 3, 4, 5, 6, 7], 2, 5);
    let rotateArray = leftRotateArray([1, 2, 3, 4, 5, 6, 7]);
    res.end('val:' + rotateArray);
  })
  .listen(8080);

function reverseArray(array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}

function leftRotateArray(array) {
  const end = array.length - 1;
  let temp = array[0];
  for (let i = 0; i < end; i++) {
    array[i] = array[i + 1];
  }
  array[end] = temp;

  return array;
}
