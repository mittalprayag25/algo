// ******MUltiplePointers pattern works for sorted arrays only ***


const findFirstPairWhichGivesSumZero = (sortedArray) => {
    let start = 0;
    let end = sortedArray.length - 1;
    while (start < end) {
        let sum = sortedArray[start] + sortedArray[end];
        if ((sum === 0)) {
            return [sortedArray[start], sortedArray[end]]
        }
        if (sum > 0) {
            end--
        } else {
            start++
        }
    }
    return []
}

//console.log(findFirstPairWhichGivesSumZero([-4, -3, -1, 0, 1, 2, 5]))
// this works for sorted arrays

const countUniqueValues = (sortedArray) => {
    let count = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
        } else {
            count++;
        }
    }
    return count
}


//console.log(countUniqueValues([1, 1, 2, 2, 5, 5, 5, 6, 6, 6]));

const averagePair = (arr, avg) => {
    const sortedArray = arr.sort((a, b) => (a - b))
    let start = 0;
    let end = sortedArray.length - 1;

    while (start < end) {
        const sum = sortedArray[start] + sortedArray[end];
        const calculatedAverage = sum / 2;
        if (calculatedAverage === avg) {
            return true
        } else {
            if (calculatedAverage > avg) {
                end--
            } else {
                start++
            }
        }
    }
    return false
}


const data = averagePair([6, 4, 8, 10, 12, 14], 6);
//console.log("*", data)

const isSubsequence = (str1, str2) => {
    let i = 0; let j = 0;
    while (j < str2.length) {
        if (str2[j] === str1[i]) i++
        if (i === str1.length) return true
        j++
    }
    return false;
}

const isSubsequenceResult = isSubsequence("hello", "hella world")
console.log("isSubsequenceResult", isSubsequenceResult)
