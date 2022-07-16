function matchingSubseq(s, arr) {
    let waitingMap = {
        'none': []
    };

    arr.forEach(a => {
        if (waitingMap[a.charAt(0)]) {
            waitingMap[a.charAt(0)].push(a);
        } else {
            waitingMap[a.charAt(0)] = [a];
        }
    })

    // console.log(waitingMap);

    let count = 0;
    s.split('').forEach(char => {
        let strArr = waitingMap[char];
        // console.log('Before', { strArr, waitingMap });
        if (strArr !== undefined) {
            strArr = strArr.map(str => {
                if (str === char) {
                    count++;
                    return null;
                } else {
                    str = str.slice(1);
                    if (str.charAt(0) !== char) {
                        if (waitingMap[str.charAt(0)]) {
                            waitingMap[str.charAt(0)].push(str);
                        } else {
                            waitingMap[str.charAt(0)] = [str];
                        }
                        return null;
                    }
                    return str;
                }
            }).filter(str => str !== null);
            waitingMap[char] = strArr;
            // console.log('After', { strArr, waitingMap });
        }
    })
    return count;
}

matchingSubseq('abcde', ['a', 'bb', 'acd', 'ace']);