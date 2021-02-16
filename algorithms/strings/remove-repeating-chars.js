function removeRepeatingChars(str) {
    let arr = [];
    for(let i = 0; i < str.length; i++) {
        if (arr.length && arr[arr.length - 1] === str[i]) {
            arr.pop()
        } else {
            arr.push(str[i]);
        }
    }
    console.log(arr.join(""));
}

removeRepeatingChars("abcbbca");