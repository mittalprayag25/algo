var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let reverseOfArray = reverseArray([10, 23, 43, 54, 65, 76], 2, 4);
    let rotateArray = leftRotate([1, 2, 3, 4, 5, 6, 7, 8]);
    let leftRotateBynumber = leftRotateByN([1, 2, 3, 4, 5, 6, 7, 8], 2);
    res.end('val:' + leftRotateBynumber);
  })
  .listen(8080);

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function leftRotate(arr) {
  let size = arr.length;
  let start = arr[0];
  for (let index = 0; index < size; index++) {
    arr[index] = arr[index + 1];
  }
  arr[size - 1] = start;
  return arr;
}

function leftRotateByN(arr, n) {
  for (let index = 0; index < n; index++) {
    leftRotate(arr);
  }
  return arr;
}
