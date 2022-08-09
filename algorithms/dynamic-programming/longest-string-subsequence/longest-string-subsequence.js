let wordAndWordChainMap;
function longestStrChain(words) {
    wordAndWordChainMap = new Map()
    // Create Map
    let longestChainLen = 0;
    let sorted = words.sort((a,b) => b.length - a.length);
    for(var i = 0; i < words.length; i++) {
        longestChainLen = Math.max(longestChainLen, getLongestPath(sorted, i));
    }
    return longestChainLen;
};

function getLongestPath(arr, i = 0) {
    // console.log({ arr, i })
    if (i >= arr.length) {
        return 0
    }
    
    if (wordAndWordChainMap.has(arr[i])) {
        return wordAndWordChainMap.get(arr[i]);
    }
    
    let subStrLen = 0;
    let j = i + 1;
    while(j < arr.length && (arr[i].length - arr[j].length) <= 1) {
        if(isValidPred(arr[j], arr[i])) {
            let lenFromJ = getLongestPath(arr, j);
            subStrLen = Math.max(subStrLen, lenFromJ);
        }
        j++;
    }
    // console.log({ subStrLen });
    wordAndWordChainMap.set(arr[i], 1 + subStrLen);
    return 1 + subStrLen;
}

function isValidPred(pred, succ) {
    if(pred.length === succ.length) {
        return false;
    };
    let i = 0, j = 0;
    while(j < succ.length) {
        if (pred[i] === succ[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i === pred.length;
}

export default longestStrChain;