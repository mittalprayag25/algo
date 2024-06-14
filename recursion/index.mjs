const factorial = (num) => { // this is normal wat
    if (num === 0) return 0;
    let result = 1;
    for (let i = num; i > 0; i--) {
        result = result * i;
    }
    return result;
}

//console.log(factorial(0))

const factorialRecursion = (num) => {
    if (num === 1) return 1
    return num * factorialRecursion(num - 1)
}

// console.log(factorialRecursion(5))


function powerFunc(num, power) { // 4
    if (power === 0) {
        return 1;
    }
    else {
        return num * powerFunc(num, power - 1);
    }
}


//console.log(powerFunc(2, -1))

// RECURSION CHALLENGE SECTION SOLUTIONS
// Reverse Solution

function reverse(str) {
    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}
//isPalindrome Solution

function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}
//someRecursive Solution

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}
//flatten Solution

function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
        if (Array.isArray(oldArr[i])) {
            newArr = newArr.concat(flatten(oldArr[i]))
        } else {
            newArr.push(oldArr[i])
        }
    }
    return newArr;
}
// console.log(flatten([2, 3, 1, 5, 9, 8]))


function nestedEvenSum(obj) {
    // add whatever parameters you deem necessary - good luck!
    let count = 0;

    for (let key of Object.keys(obj)) {
        console.log(typeof obj[key], key)
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            count += 2;
        }
        // console.log(typeof obj[key])
        if (typeof obj[key] === 'object') {
            count = count + nestedEvenSum(obj[key])
        }

    }
    return count
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}
//console.log(nestedEvenSum(obj1))


const capitalizeWords = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i].toUpperCase());
    }
    return newArr;
}

// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))

const stringifyNumbers = (obj) => {
    let keys = Object.keys(obj);
    for (let key of keys) {
        if (typeof obj[key] === 'number') {
            let stringifiedString = obj[key].toString();
            obj[key] = stringifiedString;
        }
        if (typeof obj[key] === 'object') {
            stringifyNumbers(obj[key])
        }
    }
    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// console.log(stringifyNumbers(obj))

const collectStrings = (obj) => {
    let arr = [];
    let keys = Object.keys(obj);

    for (let key of keys) {
        console.log(key)
        if (typeof obj[key] === 'string') {
            arr.push(obj[key]);
        }
        if (typeof obj[key] === 'object') {
            if (!Array.isArray(obj[key])) {
                // console.log(obj[key]);
                arr = arr.concat(collectStrings(obj[key]));
            }
        }
    }
    return arr;
}

let obj3 = {
    name: "Prayag",
    test: [],
    datat: {
        school: "xaviers",
        info: {
            isRight: {
                someValue: "here"
            },
            random: "random"
        }
    }
}
console.log(collectStrings(obj3))