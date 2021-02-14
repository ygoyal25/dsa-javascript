function permutations(string, swapChar = 0) {
    if (swapChar === string.length) {
        console.log(string);
        return
    }

    for(let i = swapChar; i < string.length; i++) {        
        const strArr = string.split("");
        [strArr[swapChar], strArr[i]] = [strArr[i], strArr[swapChar]]
        permutations(strArr.join(""), swapChar + 1);
        [strArr[i], strArr[swapChar]] = [strArr[swapChar], strArr[i]];
        string = strArr.join("");
    }
}

permutations("ABC");