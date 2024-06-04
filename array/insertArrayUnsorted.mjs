export const insertAtLastKey = (arr, item) => {
    arr.push(item);
    return arr;
}

export const insertAtIndex = (arr, index, item) => {
    let temp = [];
    let length = arr.length;
    for (let i = index; i < length; i++) {
        temp[i + 1] = arr[i]
    }
    temp[index] = item;

    for (let i = 0; i < index; i++) {
        temp[i] = arr[i];
    }

    return temp;
};