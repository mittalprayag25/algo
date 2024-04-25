export const binarySearch = (arr, item) => { // This is first way of doing binary search
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (end >= start) {
        mid = start + Math.floor((end - start) / 2);
        if (arr[mid] === item) {
            return mid;
        }

        if (arr[mid] > item) { // If middle item bigger than item to be search then search in left array
            end = mid - 1;
        }

        if (arr[mid] < item) {
            start = mid + 1;
        }
    }
    return -1;
}

export const recursiveBinarySearch = (arr, start, end, item) => { // second way of binary search
    if (end >= start) {
        let mid = start + Math.floor((end - start) / 2);

        if (arr[mid] === item) {
            return mid;
        }

        if (arr[mid] > item) {
            return recursiveBinarySearch(arr, start, mid - 1, item)
        }

        else {
            return recursiveBinarySearch(arr, mid + 1, end, item)
        }
    }
    return -1;
}