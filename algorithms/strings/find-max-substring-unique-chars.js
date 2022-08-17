function maxSubStr(s) {
    let map = new Map();
    let maxLen = 0;
    let start = 0;
    for(var i = 0; i < s.length; i++) {
        if (map.has(s[i]) && map.get(s[i]) >= start) {
            let ind = map.get(s[i]);
            start = ind + 1;
        } 
        map.set(s[i], i);
        maxLen = Math.max(maxLen, i - start + 1)
        // console.log(maxLen, map)
    }
    return maxLen
}


console.log(maxSubStr("GEEEKSFORGEEKS"));