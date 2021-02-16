function maxSubStr(str) {
    let arr = [];
    let longString = "";
    for(let i = 0; i < str.length; i++) {
        const index = arr.indexOf(str[i]);
        if (index > -1) {
            arr.splice(0 ,index + 1);
            arr.push(str[i]);
        } else {
            arr.push(str[i]);
        }

        if (longString.length < arr.length) {
            longString = arr.join("");
        }
    }
    console.log(longString);
}

function maxSubStr1(str) {
    let posArr = {};
    let startCurr = 0;
    let startMax = 0;
    let currLen = 0;
    let maxLen = 0;
    for(let i = 0; i < str.length; i++) {
        if (posArr[str[i]] >= startCurr) {
            startCurr = posArr[str[i]] + 1;
            currLen = i - startCurr;
        }
        
        posArr[str[i]] = i;
        currLen++;
        if (maxLen < currLen) {
            maxLen = currLen;
            startMax = startCurr;
        }
    }
    console.log(str.slice(startMax, startMax + maxLen));
}


maxSubStr("GEEEKSFORGEEKS");
maxSubStr1("GEEEKSFORGEEKS");