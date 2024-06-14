// normal not optimistic approach
//sliding pattern
const maxSubArray = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum
}

//console.log(maxSubArray([2, 6, 9, 3, 4, 7, 9, 3, 5], 3))

const maxSubArraySum = (arr, num) => {
    if (num > arr.length) { return null }
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum + arr[i] - arr[i - num];
        if (tempSum > maxSum) {
            maxSum = tempSum
        }
    }
    return maxSum
}

//console.log(maxSubArraySum([1, 4, 2, 1, 23, 3, 1, 10, 20], 10))

const minSubArryLen = (arr, num) => {
    let sum = 0;
    let tempSum = 0;
    let count = 1;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        //  console.log(count, start)
        for (let i = start; i < count; i++) {
            sum += arr[i]
        }
        tempSum = sum;

        for (let i = count; i < arr.length; i++) {
            tempSum = tempSum + arr[i] - arr[i - count]
            console.log(tempSum, num)
            if (tempSum >= num) return count;
        }
        start++;
        count = count + 1;
    }
}

//console.log(minSubArryLen([3, 1, 7, 11, 2, 9, 8, 21, 12, 33, 19], 52))
//minSubArryLen([1,4,16,22,5,7,8,9,10],39)

const smallestSubArrayWithSumGreaterThanGivenValue = (arr, k) => {
    let start = 0;
    let end = 0;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = start; i <= end; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    if (tempSum > k) {
        end++
    }
}