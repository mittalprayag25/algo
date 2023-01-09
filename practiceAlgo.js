var http = require('http');
const { reverse } = require('dns');
http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // console.log(json.redemptionitems);
    res.end('val:' + JSON.stringify(findIndexOfSum([1, 3, 5, 8, 2, 4], 6)));
  })
  .listen(8080);
const findIndexOfSum = (arr, sum) => {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const sumOfIndex = arr[i] + arr[j];
      if (sumOfIndex === sum) {
        var obj = {};
        obj[i] = j;
        pairs.push(obj);
        break;
      }
    }
  }

  console.log(pairs);
};
