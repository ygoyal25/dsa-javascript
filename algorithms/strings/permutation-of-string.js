function permutations(string, swapChar = 0, arr = []) {
    if (swapChar === string.length) {
        arr.push(string);
        return;
    }

    for(let i = swapChar; i < string.length; i++) {        
        const strArr = string.split("");
        [strArr[swapChar], strArr[i]] = [strArr[i], strArr[swapChar]]
        permutations(strArr.join(""), swapChar + 1, arr);
        [strArr[i], strArr[swapChar]] = [strArr[swapChar], strArr[i]];
        string = strArr.join("");
    }
    return arr;
}

module.exports = permutations;