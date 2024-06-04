export const reverseArray = (arr) => {
    //['a', 'e', 'i', 'o', 'u'] => ['u', 'o', 'i', 'e', 'a']
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
};

export const reverseArrayUsingStack = (arr) => {
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop()
    }

    return arr;
};