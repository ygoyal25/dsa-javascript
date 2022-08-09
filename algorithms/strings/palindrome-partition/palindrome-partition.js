function palindromePartition(str, i = 0, currPar = [], arr = []) {
    // console.log({ i, currPar, arr });
    if (i >= str.length) {
        arr.push(currPar);
    }

    let subStr = '';
    for(var ind = i; ind < str.length; ind++) {
        subStr += str[ind];
        // console.log('Substr', subStr)
        if (checkIfPal(subStr)) {
            palindromePartition(str, ind + 1, [...currPar, subStr], arr);
        }
    }
    return arr;
}

function checkIfPal(str) {
    // console.log("CheckifPal", { str })
    let mid = Math.floor((0 + str.length) / 2);
    let j = 0;
    while(j < mid) {
        if (str[j] !== str[str.length - 1 - j]) {
            return false;
        }
        j++;
    }
    return true;
}

console.log(palindromePartition('aab'));