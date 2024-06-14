const reverse = (str) => {
    if (str.length === 1) return str;
    return reverse(str.slice(1)) + str[0]
}

// console.log(reverse("prayag"))


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
// console.log(flatten([2, [2, 4], 6, [7, 8, 9]]))

const nestedEvenSum = (obj) => {
    let keys = Object.keys(obj);
    let sum = 0;
    for (let key of keys) {
        console.log(key)
        if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
            console.log(obj[key])
            sum += obj[key];
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            sum = sum + nestedEvenSum(obj[key])
        }
    }

    return sum;
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 4,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

// console.log(nestedEvenSum(obj1))

const stringifyNumbers = (obj) => {
    let keys = Object.keys(obj);
    for (let key of keys) {
        if (typeof obj[key] === 'number') {
            obj[key] = obj[key].toString()
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
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

console.log(stringifyNumbers(obj))

const collectStrings = (obj) => {
    let keys = Object.keys(obj)
    let arr = []
    for (let key of keys) {
        if (typeof obj[key] === 'string') {
            arr.push(obj[key])
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            arr = arr.concat(collectStrings(obj[key]))
        }
    }
    return arr;
}

let obj3 = {
    name: "Prayag",
    test: [],
    data: {
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