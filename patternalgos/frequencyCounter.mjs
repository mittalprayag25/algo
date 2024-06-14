/*Algorithm to see if 1 array has items that are squared of another array for e.g. 
[1,2,3,4] => [1,4,9,16] = true
[1,2,3] => [1,4] = false
[1,2,3] => [1 ,4,16] =  false
*/
const checkIfSame = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i] * arr1[i])
        if (index == -1) {
            return false
        } else {
            arr2.splice(index, 1)
        }
    }
    return true
}

// console.log(frequencyCounter([1, 2, 3], [1, 4, 9]))
// console.log(frequencyCounter([1, 2, 3], [1, 4, 8]))

/**
 * We need avoid nested loops solution is frequencyCounter
 */

const checkIfSameBetterSolution = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1
    }

    for (let i = 0; i < arr2.length; i++) {
        frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1
    }
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {
        console.log(key)
        if (!(key * key) in frequencyCounter2) {
            return false
        }

        if (frequencyCounter1[key] !== frequencyCounter2[key * key]) {
            return false
        }
    }

    return true

}

// console.log(checkIfSameBetterSolution([1, 2, 3], [1, 4, 9]))
// console.log(checkIfSameBetterSolution([1, 2, 3], [1, 4, 8]))
// console.log(checkIfSameBetterSolution([1, 2, 3], [1, 4]))
// console.log(checkIfSameBetterSolution([1, 2, 3], [1, 9, 4]))

const anagramWithFrequencyPattern = (str1, str2) => {
    /**
     * 
     * 1. check if length is same
     * 2. create objects with keys as arr item and value as count for e.g. [1,2,1] => obj = {"1" : 2, "2" : 1}
     * 3. check if all keys of arr1 is present on arr2 and count is also same
     */
    if (str1.length != str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {}

    for (let char of str1) {
        frequencyCounter1[char] = ++frequencyCounter1[char] || 1
    }

    for (let char of str2) {
        frequencyCounter2[char] = ++frequencyCounter2[char] || 1
    }


    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter1[key] != frequencyCounter2[key]) {
            return false
        }
    }

    return true
}

// console.log(anagramWithFrequencyPattern("ana", "naa"))

// console.log(anagramWithFrequencyPattern("ana", "nna"))
// console.log(anagramWithFrequencyPattern("avanya", "avyaan"))

const sameFrequency = (num1, num2) => {
    if (num1.toString().length != num2.toString().length) {
        return false
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    let num1Str = num1.toString();
    let num2Str = num2.toString();
    for (let i = 0; i < num1Str.length; i++) {
        frequencyCounter1[num1Str[i]] = frequencyCounter1[num1Str[i]] ? frequencyCounter1[num1Str[i]] + 1 : 1
    }
    for (let i = 0; i < num2Str.length; i++) {
        frequencyCounter2[num2Str[i]] = frequencyCounter2[num2Str[i]] ? frequencyCounter2[num2Str[i]] + 1 : 1
    }
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

// console.log(sameFrequency(1233, 3213))
// console.log(sameFrequency(1233, 3211))
// console.log(sameFrequency(1233, 32131))
// console.log(sameFrequency(1233, 'asa'))
// console.log(sameFrequency(1233, 3312))

const areThereDuplicatesUsingFrequencyPattern = (...args) => {

    // Using frequency counter patttern

    // ...args => it will get all the arguements passed to function and convert to array
    //for e.g. if (1,2,3) is passed then if we do const a = args; => a = [1,2,3]
    //if we pass ("1", 4,5) it will be const a = args; ;=> a = ["1",4,5]

    const arr = args;
    let frequencyCounter = {};
    for (let i = 0; i < arr.length; i++) {
        frequencyCounter[arr[i]] = frequencyCounter[arr[i]] ? frequencyCounter[arr[i]] + 1 : 1
    }
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) {
            return true
        }
    }
    return false
}

// console.log(areThereDuplicatesUsingFrequencyPattern(1, 2, 3, 3))
// console.log(areThereDuplicatesUsingFrequencyPattern(1, 2, 3))

const areThereDuplicatesUsingMultiplePointerPattern = (...args) => {

}

const anagram = (arr1, arr2) => {
    if (arr1.length != arr2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[arr1[i]] = frequencyCounter1[arr1[i]] ? frequencyCounter1[arr1[i]] + 1 : 0
    }


    for (let i = 0; i < arr2.length; i++) {
        frequencyCounter2[arr2[i]] = frequencyCounter2[arr2[i]] ? frequencyCounter2[arr2[i]] + 1 : 0
    }

    for (let key in frequencyCounter1) {
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true
};

// console.log(anagram([1, 2, 3, 4], [4, 8, 3, 1]))
// console.log(anagram([], []))

const areStringAnagrams = (str1, str2) => {
    let arr1 = str1.split('');
    let arr2 = str2.split('');
    return anagram(arr1, arr2)
}

console.log(areStringAnagrams("avanya", "avyaan"));
