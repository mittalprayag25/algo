var http = require('http');
const { reverse } = require('dns');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let reverseOfArray = reverseArray([1, 2, 3, 4, 5, 6, 7], 2, 5);
    let rotateArrBy = leftRotateAllArray([1, 2, 3, 4, 5, 6, 7], 2);
    let reversalAlgorithmVar = reversalAlgorithm([1, 2, 3, 4, 5, 6, 7], 3);
    let linkedListBasic = createMultipleLinkedListNodes();
    // let linkedListAddInFront = insertNodeInFrontofLinkedList();
    //let addNodeInLast = insertNodeAtEndOfLinkedList();
    //let insertAfterPositionVar = insertAfterPosition();

    res.end('val:' + linkedListBasic);
  })
  .listen(8080);

const Node = (value) => {
  let node = {
    data: value,
    next: null,
  };
  return node;
};

function reverseArray(arr, start, end) {
  // take start as 0 and end as arr.length -1 for reversing the whole array

  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

function leftRotateAllArray(arr, rotateBy) {
  for (let i = 0; i < rotateBy; i++) {
    leftRotateArrByOne(arr);
  }
  return arr;
}

function leftRotateArrByOne(arr) {
  let end = arr.length - 1;
  let temp = arr[0];
  for (let i = 0; i < end; i++) {
    arr[i] = arr[i + 1];
  }
  arr[end] = temp;
  return arr;
}

function reversalAlgorithm(arr, rotateBy) {
  reverseArray(arr, 0, rotateBy - 1);
  reverseArray(arr, rotateBy, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
  return arr;
}

function createMultipleLinkedListNodes() {
  let head = createNodesAndLinkAndReturnHead();
  return displayLinkedList(head);
}

function insertNodeInFrontofLinkedList() {
  let head = createNodesAndLinkAndReturnHead();
  let newNode = Node(10);
  newNode.next = head;
  head = newNode;

  return displayLinkedList(head);
}

function insertNodeAtEndOfLinkedList() {
  let head = createNodesAndLinkAndReturnHead();
  let newNode = Node(10);
  let n = head;
  let last;
  while (n.next != null) {
    last = n.next;
    n = n.next;
  }

  last.next = newNode;

  return displayLinkedList(head);
}

function displayLinkedList(head) {
  let a = head;
  let con = '';
  while (a != null) {
    con += a.data;
    a = a.next;
  }
  return con;
}

function createNodesAndLinkAndReturnHead() {
  let head = Node(4);
  let second = Node(5);
  let third = Node(6);
  let fourth = Node(7);

  head.next = second;
  second.next = third;
  third.next = fourth;

  return head;
}

function addAfterPosition(position) {
  // Lets see this tomnorrow
  let head = createNodesAndLinkAndReturnHead();
  let a = head;
  let pos = 0;
  let newNode = Node(10);
  let prevNode;
  while (a != null) {
    prevNode = a;
    if (pos == position) {
      prevNode.next = newNode;
      newNode.next = a;
    }
    ++pos;

    a = a.next;
  }

  return displayLinkedList(head);
}
function insertAfterPosition() {
  return addAfterPosition(0);
}
