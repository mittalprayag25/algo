//var http = require('http');
import http from 'http';
import { linearSearch } from './array/linearSearcharray.mjs';
import { binarySearch, recursiveBinarySearch } from './array/binarySearchArray.mjs';
import { reverseArray, reverseArrayUsingStack } from './array/reverseArray.mjs';
import { rotateLeft, leftRotateByN, rotateLeftByNUsingbigOn } from './array/rotationArray.mjs';
import { insertAtLastKey, insertAtIndex } from './array/insertArrayUnsorted.mjs';
import { insertItemInSortedArray } from './array/insertArraySorted.mjs';
import { deleteFromIndex, deleteFromLast, deleteFromStart } from './array/deleteOperationUnsorted.mjs';

http
    .createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        //Linear Search
        let linearSearchResult = linearSearch([23, 10, 54, 46, 65, 76], 47);
        let binarySearchResult = binarySearch([10, 20, 30, 40, 55, 65, 78, 90], 90);
        let recursiveBinarySearchResult = recursiveBinarySearch([10, 20, 30, 40, 55, 65, 78, 90], 0, 7, 90);

        // reverse of array
        let reverseArrayresult = reverseArray([23, 10, 54, 46, 65, 76, 1, 11, 13]);
        let reverseArrayWithStackresult = reverseArrayUsingStack([23, 10, 54, 46, 65, 76]);

        // Rotation
        let rotateLeftResult = rotateLeft([23, 10, 54, 46, 65, 76]);
        let leftRotateByNResult = leftRotateByN([23, 10, 54, 46, 65, 76], 3);
        let rotateLeftByNUsingbigOnResult = rotateLeftByNUsingbigOn([23, 10, 54, 46, 65, 76], 2);

        // Insertion in Array UNsorted
        let insertionResult = insertAtLastKey([23, 10, 54, 46, 65, 76], 24);
        let insertAtIndexResult = insertAtIndex([23, 10, 54, 46, 65, 76], 3, 24);

        // Insert in Sorted arrat

        let insertItemInSortedArrayResults = insertItemInSortedArray([10, 20, 30, 40, 55, 65, 78, 90], 35)

        // Delete Operation

        let deleteFromStartResults = deleteFromStart([23, 10, 54, 46, 65, 76]);
        let deleteFromIndexResults = deleteFromIndex([23, 10, 54, 46, 65, 76], 1);
        let deleteFromLastResult = deleteFromLast([23, 10, 54, 46, 65, 76])

        // results
        console.log(linearSearchResult);
        console.log("binarySearchResult", binarySearchResult);
        console.log("recursiveBinarySearch", recursiveBinarySearchResult);
        console.log("reverseArrayresult", reverseArrayresult);
        console.log("reverseArrayWithStack", reverseArrayWithStackresult);
        console.log("rotateLeft", rotateLeftResult);
        console.log("leftRotateByN", leftRotateByNResult);
        console.log("rotateLeftByNUsingbigOn", rotateLeftByNUsingbigOnResult);
        console.log("insertKey", insertionResult);
        console.log("insertAtIndex", insertAtIndexResult);
        console.log("deleteFromStart", deleteFromStartResults);
        console.log("deleteFromIndex", deleteFromIndexResults);
        console.log("deleteFromLast", deleteFromLastResult);

        console.log("insertItemInSortedArray", insertItemInSortedArrayResults);



        res.end('linearSearch:' + linearSearchResult + '-------' + 'Binary search' + reverseArrayresult);
    })
    .listen(8080);