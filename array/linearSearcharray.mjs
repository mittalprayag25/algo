export const linearSearch = (arr, item) => {
    let count = arr.length;
    for (let i = 0; i < count; i++) {
        if (arr[i] === item)
            return i;
    }
    return -1;
}