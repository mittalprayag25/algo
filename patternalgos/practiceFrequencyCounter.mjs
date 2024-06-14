const arethereduplicates = (args) => {
    let arr = { ...args };
    console.log(arr)
    let frequencyCounter = {};
    for (let i = 0; i < arr.length; i++) {
        frequencyCounter[arr[i]] = frequencyCounter[arr[i]] ? frequencyCounter[arr[i]] + 1 : 1;
        if (frequencyCounter[arr[i]] > 1) {
            return true
        }
    }
    return false
}

console.log(arethereduplicates('a', 'b', 'c', 'd'))