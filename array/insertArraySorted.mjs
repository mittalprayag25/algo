export const insertItemInSortedArray = (arr, item) => {
    //[10, 20, 30, 40, 55, 65, 78, 90]
    let end = arr.length;
    let temp = [];
    for (let i = 0; i < end; i++) {
        if (arr[i] < item && item < arr[i + 1]) {
            console.log("val=> ", arr[i], arr[i + 1], "__" + item + arr[i] < item < arr[i + 1])
            temp[i] = arr[i];
            temp[i + 1] = item;
        } else {
            temp[index] = arr[i]
        }
    }
    return temp;
}