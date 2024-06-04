const reverseString = (str) => {
    let reversedString = "";
    for (let character of str) {
        reverseString = character + reverseString;
    }

    return reverseString;
}