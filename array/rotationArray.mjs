export const rotateLeft = (arr) => {
    let start = arr[0];
    let size = arr.length;
    for (let index = 0; index < size; index++) {
        arr[index] = arr[index + 1];
    }
    arr[size - 1] = start;
    return arr;
};

export const leftRotateByN = (arr, n) => {
    for (let index = 0; index < n; index++) {
        rotateLeft(arr);
    }
    return arr;
}

export const rotateLeftByNUsingbigOn = (arr, n) => {
    let temp = [];
    let j = 0;

    for (let i = n; i < arr.length; i++) {
        temp[j] = arr[i];
        j++
    }

    for (let i = 0; i < n; i++) {
        temp[j] = arr[i];
        j++
    }

    return temp;
};