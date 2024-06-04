export const deleteFromStart = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr.pop();
    return arr;
}


export const deleteFromIndex = (arr, index) => {
    /**Using functions */
    // arr.splice(index, 1);
    // return arr;

    let temp = [];
    for (let i = 0; i <= index; i++) {
        temp[i] = arr[i];
    }
    temp.pop();
    for (let i = index; i < arr.length; i++) {
        temp[i] = arr[i + 1]
    }
    temp.pop();
    return temp;
}

export const deleteFromLast = (arr) => {
    arr.pop();
    return arr;
}